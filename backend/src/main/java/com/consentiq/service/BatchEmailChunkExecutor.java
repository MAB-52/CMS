package com.consentiq.service;

import com.consentiq.model.entity.Customer;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;

/**
 * Processes one chunk of recipients in an isolated transaction so earlier chunks stay committed if
 * this chunk fails catastrophically.
 */
@Service
@RequiredArgsConstructor
public class BatchEmailChunkExecutor {

	private static final Logger log = LoggerFactory.getLogger(BatchEmailChunkExecutor.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private final EmailDispatchService emailDispatchService;

	public record ChunkEmailOutcome(int attemptedInChunk, int deliveredInChunk, List<String> failedIdsInChunk) {
	}

	/**
	 * @param tokenPreparer returns invite token for rule flows; broadcast flows may return an empty string.
	 */
	@Transactional(propagation = Propagation.REQUIRES_NEW, rollbackFor = Exception.class)
	public ChunkEmailOutcome processChunk(List<Customer> chunk, Function<Customer, String> tokenPreparer,
			Function<Customer, String> subjectFn, BiFunction<Customer, String, String> htmlFn, int maxRetries,
			long retryDelayMs) {
		String cu = currentUser();
		log.debug("Entering processChunk | params: chunkSize={} | maxRetries={}",
				chunk != null ? chunk.size() : 0, maxRetries);
		log.info("User={} | action=processChunk | entity=BatchEmail | id=n/a", cu);
		log.debug("Transaction started | method=processChunk | id=n/a");
		System.out.println("[DEBUG batch email chunk] processChunk start | chunkSize=" + chunk.size());
		int attemptedInChunk = 0;
		int deliveredInChunk = 0;
		List<String> failedIdsInChunk = new ArrayList<>();

		for (Customer customer : chunk) {
			attemptedInChunk++;
			if (!StringUtils.hasText(customer.getEmail())) {
				failedIdsInChunk.add("missing-email:" + customer.getCustomerId());
				continue;
			}
			try {
				String token = tokenPreparer.apply(customer);
				String subject = subjectFn.apply(customer);
				String html = htmlFn.apply(customer, token);
				sendWithRetries(customer.getEmail(), subject, html, maxRetries, retryDelayMs, cu);
				deliveredInChunk++;
			} catch (Exception ex) {
				log.error("Exception in processChunk | user={} | message={} | customerId={}", cu, ex.getMessage(),
						customer.getCustomerId(), ex);
				failedIdsInChunk.add(StringUtils.hasText(customer.getEmail()) ? customer.getEmail()
						: customer.getCustomerId());
			}
		}
		System.out.println("[DEBUG batch email chunk] processChunk end | delivered=" + deliveredInChunk + " failed="
				+ failedIdsInChunk.size());
		ChunkEmailOutcome result = new ChunkEmailOutcome(attemptedInChunk, deliveredInChunk, failedIdsInChunk);
		log.debug("Transaction completing | method=processChunk | id=n/a");
		log.debug("Exiting processChunk | result=delivered={} | failedCount={}", deliveredInChunk,
				failedIdsInChunk.size());
		return result;
	}

	private void sendWithRetries(String to, String subject, String html, int maxRetries, long retryDelayMs,
			String cu) {
		int attempts = maxRetries + 1;
		Exception last = null;
		for (int i = 0; i < attempts; i++) {
			if (i > 0) {
				sleepQuietly(retryDelayMs);
			}
			try {
				emailDispatchService.sendHtml(to, subject, html);
				return;
			} catch (Exception ex) {
				last = ex;
				log.warn("Email send attempt {}/{} failed | to={} | {}", i + 1, attempts, to, ex.getMessage());
			}
		}
		if (last != null) {
			log.error("Exception in sendWithRetries | user={} | message={}", cu, last.getMessage(), last);
			throw new RuntimeException(last.getMessage(), last);
		}
	}

	private static void sleepQuietly(long ms) {
		try {
			Thread.sleep(Math.max(0, ms));
		} catch (InterruptedException ie) {
			String cu = currentUser();
			log.error("Exception in sleepQuietly | user={} | message={}", cu, ie.getMessage(), ie);
			Thread.currentThread().interrupt();
			throw new RuntimeException("Interrupted during email retry backoff", ie);
		}
	}
}
