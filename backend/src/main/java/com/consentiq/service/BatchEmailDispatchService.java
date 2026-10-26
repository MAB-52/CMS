package com.consentiq.service;

import com.consentiq.config.ConsentMailProperties;
import com.consentiq.exception.EmailDeliveryException;
import com.consentiq.model.dto.dispatch.BatchDispatchCompleteness;
import com.consentiq.model.dto.dispatch.BatchDispatchResult;
import com.consentiq.model.entity.ConsentImage;
import com.consentiq.model.entity.Customer;
import com.consentiq.repository.ConsentImageRepository;
import jakarta.activation.DataHandler;
import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeBodyPart;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.internet.MimeMultipart;
import jakarta.mail.util.ByteArrayDataSource;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.net.URI;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Sends HTML emails in configurable chunks with per-chunk transactions and per-recipient retries.
 * Never throws to callers; failures are reflected in {@link BatchDispatchResult}.
 */
@Service
@RequiredArgsConstructor
public class BatchEmailDispatchService {

	private static final Logger log = LoggerFactory.getLogger(BatchEmailDispatchService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private static final Pattern RELATIVE_API_IMAGE_PATH = Pattern.compile("^/api/images/(\\d+)$");

	private final BatchEmailChunkExecutor chunkExecutor;
	private final ConsentImageRepository consentImageRepository;
	private final ObjectProvider<JavaMailSender> javaMailSender;
	private final ConsentMailProperties consentMailProperties;
	private final MailProperties springMailProperties;

	/**
	 * @param tokenPreparer creates per-recipient state (e.g. invite token) and returns the token string for HTML
	 *            assembly; use {@code c -> ""} when no token is required.
	 */
	public BatchDispatchResult dispatchHtmlEmails(List<Customer> recipients, Function<Customer, String> tokenPreparer,
			Function<Customer, String> subjectFn, BiFunction<Customer, String, String> htmlFn, int chunkSize,
			long chunkDelayMs, int maxRetries, long retryDelayMs) {
		String cu = currentUser();
		log.debug("Entering dispatchHtmlEmails | params: recipientCount={} | chunkSize={}", recipients != null ? recipients.size() : 0,
				chunkSize);
		log.info("User={} | action=dispatchHtmlEmails | entity=BatchEmail | id=n/a", cu);
		if (CollectionUtils.isEmpty(recipients)) {
			BatchDispatchResult empty = BatchDispatchResult.empty();
			log.debug("Exiting dispatchHtmlEmails | result=empty");
			return empty;
		}
		int size = Math.max(1, chunkSize);
		List<List<Customer>> chunks = partition(recipients, size);
		int chunksTotal = chunks.size();
		System.out.println("[DEBUG batch email] dispatchHtmlEmails start | totalRecipients=" + recipients.size()
				+ " chunkSize=" + size + " totalChunks=" + chunksTotal);
		int totalAttempted = 0;
		int totalDelivered = 0;
		List<String> allFailed = new ArrayList<>();
		StringBuilder notes = new StringBuilder();
		int chunksCompleted = 0;

		for (int i = 0; i < chunks.size(); i++) {
			List<Customer> chunk = chunks.get(i);
			try {
				BatchEmailChunkExecutor.ChunkEmailOutcome outcome = chunkExecutor.processChunk(chunk, tokenPreparer,
						subjectFn, htmlFn, maxRetries, retryDelayMs);
				totalAttempted += outcome.attemptedInChunk();
				totalDelivered += outcome.deliveredInChunk();
				allFailed.addAll(outcome.failedIdsInChunk());
				chunksCompleted++;
				notes.append("Chunk ").append(i + 1).append("/").append(chunksTotal).append(": delivered ")
						.append(outcome.deliveredInChunk()).append(", failed ")
						.append(outcome.failedIdsInChunk().size()).append("\n");
				System.out.println("[DEBUG batch email] dispatchHtmlEmails chunk | chunkIndex=" + (i + 1) + "/"
						+ chunksTotal + " delivered=" + outcome.deliveredInChunk() + " failed="
						+ outcome.failedIdsInChunk().size());
			} catch (Exception ex) {
				log.error("Exception in dispatchHtmlEmails | user={} | message={}", cu, ex.getMessage(), ex);
				for (Customer c : chunk) {
					totalAttempted++;
					allFailed.add(String.valueOf(c.getCustomerId()));
				}
				notes.append("Chunk ").append(i + 1).append("/").append(chunksTotal).append(": aborted — ")
						.append(ex.getMessage()).append("\n");
			}
			if (i < chunks.size() - 1 && chunkDelayMs > 0) {
				sleepQuietly(chunkDelayMs);
			}
		}

		int totalFailed = Math.max(0, totalAttempted - totalDelivered);
		BatchDispatchCompleteness completeness = BatchDispatchCompleteness.fromCounts(totalDelivered, totalFailed);
		BatchDispatchResult result = new BatchDispatchResult(totalAttempted, totalDelivered, totalFailed, allFailed, completeness, chunksTotal,
				chunksCompleted, notes.toString().trim());
		log.debug("Exiting dispatchHtmlEmails | result=delivered={} | failed={}", totalDelivered, totalFailed);
		return result;
	}

	/**
	 * Sends a single HTML message via SMTP (used by {@link EmailDispatchService}) with consent editor images
	 * inlined as CID parts when {@code /api/images/{id}} references are present.
	 */
	public void sendSmtpHtmlEmail(String to, String subject, String htmlBody) {
		String cu = currentUser();
		log.debug("Entering sendSmtpHtmlEmail | params: to={} | subject={} | htmlLength={}", to, subject,
				htmlBody != null ? htmlBody.length() : 0);
		log.info("User={} | action=sendSmtpHtmlEmail | entity=Email | id=n/a", cu);
		if (!StringUtils.hasText(to)) {
			throw new IllegalArgumentException("Recipient email address is required");
		}
		JavaMailSender sender = javaMailSender.getIfAvailable();
		String host = springMailProperties.getHost();
		if (sender == null || !StringUtils.hasText(host)) {
			log.error(
					"EMAIL NOT SENT | SMTP not configured | set spring.mail.host (e.g. MAIL_HOST) | to={} | subject={}",
					to,
					subject);
			log.debug("---- HTML (not sent) ----\n{}", htmlBody);
			throw new EmailDeliveryException(
					"Email could not be sent because SMTP is not configured. Set spring.mail.host (for example MAIL_HOST), spring.mail.username/password as required, and consentiq.mail.from, then retry.");
		}
		String from = consentMailProperties.getFrom();
		if (!StringUtils.hasText(from)) {
			throw new EmailDeliveryException("consentiq.mail.from is not configured.");
		}
		try {
			MimeMessage mimeMessage = sender.createMimeMessage();
			MimeMultipart related = buildMimeMessageWithCidImages(htmlBody);
			if (related != null) {
				mimeMessage.setFrom(new InternetAddress(from));
				mimeMessage.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
				mimeMessage.setSubject(subject, "UTF-8");
				mimeMessage.setContent(related);
			} else {
				MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
				helper.setFrom(from);
				helper.setTo(to);
				helper.setSubject(subject);
				helper.setText(htmlBody, true);
			}
			sender.send(mimeMessage);
			log.info("EMAIL SENT | to={} | subject={} | htmlLength={}", to, subject, htmlBody != null ? htmlBody.length() : 0);
			log.debug("Exiting sendSmtpHtmlEmail | completed successfully");
		} catch (MailException | MessagingException e) {
			log.error("Exception in sendSmtpHtmlEmail | user={} | message={}", cu, e.getMessage(), e);
			throw new EmailDeliveryException("Failed to send email: " + e.getMessage(), e);
		}
	}

	private MimeMultipart buildMimeMessageWithCidImages(String htmlBody) throws MessagingException {
		String raw = htmlBody != null ? htmlBody : "";
		if (!raw.contains("/api/images/")) {
			return null;
		}
		Document doc = Jsoup.parse(raw);
		Set<Long> uniqueIds = new LinkedHashSet<>();
		for (Element img : doc.select("img[src]")) {
			Long id = extractConsentImageId(img.attr("src"));
			if (id != null) {
				uniqueIds.add(id);
			}
		}
		if (uniqueIds.isEmpty()) {
			return null;
		}
		for (Element img : doc.select("img[src]")) {
			Long id = extractConsentImageId(img.attr("src"));
			if (id != null) {
				img.attr("src", "cid:consent-image-" + id);
			}
		}
		String htmlForEmail = doc.outerHtml();

		MimeMultipart related = new MimeMultipart("related");
		MimeBodyPart htmlPart = new MimeBodyPart();
		htmlPart.setContent(htmlForEmail, "text/html; charset=UTF-8");
		related.addBodyPart(htmlPart);

		for (Long id : uniqueIds) {
			log.info("Executing DB query | method=findById | param=id={}", id);
			Optional<ConsentImage> found = consentImageRepository.findById(id);
			log.info("DB query completed | method=findById | present={}", found.isPresent());
			if (found.isEmpty()) {
				log.warn("CID image not found in DB | id={}", id);
				continue;
			}
			ConsentImage entity = found.get();
			byte[] bytes = entity.getData();
			if (bytes == null || bytes.length == 0) {
				continue;
			}
			String contentType = StringUtils.hasText(entity.getContentType()) ? entity.getContentType() : "application/octet-stream";
			MimeBodyPart imagePart = new MimeBodyPart();
			ByteArrayDataSource dataSource = new ByteArrayDataSource(bytes, contentType);
			imagePart.setDataHandler(new DataHandler(dataSource));
			imagePart.setHeader("Content-ID", "<consent-image-" + id + ">");
			imagePart.setDisposition(MimeBodyPart.INLINE);
			related.addBodyPart(imagePart);
		}
		return related;
	}

	private static Long extractConsentImageId(String src) {
		if (!StringUtils.hasText(src)) {
			return null;
		}
		String s = src.trim();
		Matcher rel = RELATIVE_API_IMAGE_PATH.matcher(s);
		if (rel.matches()) {
			return Long.parseLong(rel.group(1));
		}
		try {
			URI uri = URI.create(s);
			String path = uri.getPath();
			if (path != null) {
				Matcher pathMatch = RELATIVE_API_IMAGE_PATH.matcher(path);
				if (pathMatch.matches()) {
					return Long.parseLong(pathMatch.group(1));
				}
			}
		} catch (IllegalArgumentException e) {
			// not a usable URI for this purpose
		}
		return null;
	}

	private static List<List<Customer>> partition(List<Customer> all, int chunkSize) {
		List<List<Customer>> out = new ArrayList<>();
		for (int i = 0; i < all.size(); i += chunkSize) {
			out.add(all.subList(i, Math.min(i + chunkSize, all.size())));
		}
		return out;
	}

	private static void sleepQuietly(long ms) {
		try {
			Thread.sleep(Math.max(0, ms));
		} catch (InterruptedException ie) {
			String cu = currentUser();
			log.error("Exception in sleepQuietly | user={} | message={}", cu, ie.getMessage(), ie);
			Thread.currentThread().interrupt();
		}
	}
}
