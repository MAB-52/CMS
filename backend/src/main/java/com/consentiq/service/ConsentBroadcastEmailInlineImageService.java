package com.consentiq.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Locale;
import java.util.Optional;
import java.util.UUID;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Comment;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * Replaces {@code data:image/...;base64,...} {@code img} sources with stable public HTTP(S) URLs so
 * broadcast HTML emails render in common clients (Gmail, Outlook, Apple Mail).
 * <p>
 * When {@code consentiq.broadcast.email-images.enabled} is false or storage is misconfigured, the
 * HTML is returned unchanged.
 */
@Service
public class ConsentBroadcastEmailInlineImageService {

	private static final Logger log = LoggerFactory.getLogger(ConsentBroadcastEmailInlineImageService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private static final String DATA_IMAGE_PREFIX = "data:image/";
	private static final String BASE64_MARKER = ";base64,";

	@Value("${consentiq.broadcast.email-images.enabled:false}")
	private boolean enabled;

	@Value("${consentiq.broadcast.email-images.storage-dir:}")
	private String storageDir;

	@Value("${consentiq.broadcast.email-images.public-base-url:}")
	private String publicBaseUrl;

	@Value("${consentiq.broadcast.email-images.max-bytes:2097152}")
	private int maxBytes;

	/**
	 * Writes each embedded data-URI image to disk and rewrites {@code img src} to the configured
	 * public URL prefix. No-op when disabled. On total failure, logs at error and returns the
	 * original HTML. Per-image failures produce an HTML comment placeholder and {@code log.warn}.
	 */
	public String materializeDataUriImages(String html) {
		String cu = currentUser();
		log.debug("Entering materializeDataUriImages | params: htmlLength={}", html != null ? html.length() : 0);
		log.info("User={} | action=materializeDataUriImages | entity=BroadcastEmail | id=n/a", cu);
		if (!StringUtils.hasText(html)) {
			log.debug("Exiting materializeDataUriImages | result=blank passthrough");
			return html;
		}
		if (!enabled) {
			log.debug("Exiting materializeDataUriImages | result=disabled passthrough");
			return html;
		}
		if (!StringUtils.hasText(storageDir) || !StringUtils.hasText(publicBaseUrl)) {
			log.warn(
					"consentiq.broadcast.email-images.enabled=true but storage-dir or public-base-url is empty; "
							+ "skipping inline image hosting.");
			log.debug("Exiting materializeDataUriImages | result=misconfigured passthrough");
			return html;
		}
		try {
			String result = materializeInternal(html);
			log.debug("Exiting materializeDataUriImages | result=processed");
			return result;
		} catch (Exception ex) {
			log.error("Exception in materializeDataUriImages | user={} | message={}", cu, ex.getMessage(), ex);
			log.debug("Exiting materializeDataUriImages | result=error passthrough");
			return html;
		}
	}

	private String materializeInternal(String html) throws IOException {
		Document doc = Jsoup.parseBodyFragment(html);
		Path dir = Paths.get(storageDir).toAbsolutePath().normalize();
		Files.createDirectories(dir);
		String base =
				publicBaseUrl.endsWith("/") ? publicBaseUrl.substring(0, publicBaseUrl.length() - 1) : publicBaseUrl;

		int successCount = 0;
		int dataUriImgSeen = 0;
		boolean mutated = false;

		for (Element img : doc.select("img")) {
			String src = img.attr("src");
			if (!looksLikeDataImageSrc(src)) {
				continue;
			}
			dataUriImgSeen++;
			Optional<ParsedDataImage> parsed = parseDataImageUri(src);
			if (parsed.isEmpty()) {
				log.warn(
						"Broadcast inline image: could not parse data URI (expected data:image/...;base64,...); "
								+ "srcPrefix={}",
						abbreviateForLog(src));
				replaceImgWithPlaceholder(img, "unrecognized data URI format");
				mutated = true;
				continue;
			}
			ParsedDataImage p = parsed.get();
			String b64 = p.base64Payload();
			byte[] bytes;
			try {
				bytes = Base64.getDecoder().decode(b64);
			} catch (IllegalArgumentException ex) {
				String cu = currentUser();
				log.error("Exception in materializeInternal | user={} | message={}", cu, ex.getMessage(), ex);
				log.warn(
						"Broadcast inline image: invalid base64 | reason={} | srcPrefix={}",
						ex.getMessage(),
						abbreviateForLog(src),
						ex);
				replaceImgWithPlaceholder(img, "invalid base64 payload");
				mutated = true;
				continue;
			}
			if (bytes.length > maxBytes) {
				log.warn(
						"Broadcast inline image: decoded size {} exceeds max-bytes={} | srcPrefix={}",
						bytes.length,
						maxBytes,
						abbreviateForLog(src));
				replaceImgWithPlaceholder(img, "image exceeds configured max-bytes");
				mutated = true;
				continue;
			}
			String ext = extensionForImageSubtype(p.subtype());
			if (ext == null) {
				log.warn(
						"Broadcast inline image: unsupported subtype '{}' | srcPrefix={}",
						p.subtype(),
						abbreviateForLog(src));
				replaceImgWithPlaceholder(img, "unsupported image subtype: " + p.subtype());
				mutated = true;
				continue;
			}
			String fileName = UUID.randomUUID() + "." + ext;
			Path file = dir.resolve(fileName).normalize();
			if (!file.startsWith(dir)) {
				log.warn("Broadcast inline image: resolved path escaped storage directory | fileName={}", fileName);
				replaceImgWithPlaceholder(img, "storage path validation failed");
				mutated = true;
				continue;
			}
			try {
				Files.write(file, bytes);
			} catch (IOException ex) {
				String cu = currentUser();
				log.error("Exception in materializeInternal | user={} | message={}", cu, ex.getMessage(), ex);
				log.warn(
						"Broadcast inline image: failed to write file | file={} | {}",
						file,
						ex.getMessage(),
						ex);
				replaceImgWithPlaceholder(img, "failed to write image file: " + ex.getMessage());
				mutated = true;
				continue;
			}
			img.attr("src", base + "/" + fileName);
			successCount++;
			mutated = true;
		}

		if (dataUriImgSeen > 0 && successCount == 0) {
			log.warn(
					"Broadcast inline image hosting: {} data-URI <img> node(s) found but none were written as "
							+ "public URLs (placeholders may have been inserted; see prior warnings).",
					dataUriImgSeen);
		}
		if (successCount > 0) {
			log.info(
					"Broadcast email inline images materialized | successCount={} | dataUriImgsSeen={} | storageDir={}",
					successCount,
					dataUriImgSeen,
					dir);
		}
		if (!mutated) {
			return html;
		}
		return doc.body().html();
	}

	private static boolean looksLikeDataImageSrc(String src) {
		if (!StringUtils.hasText(src)) {
			return false;
		}
		String t = src.trim();
		return t.regionMatches(true, 0, DATA_IMAGE_PREFIX, 0, DATA_IMAGE_PREFIX.length())
				&& indexOfBase64CommaInsensitive(t) >= 0;
	}

	/**
	 * Parses {@code data:image/<subtype>[;parameters...];base64,<payload>} — parameters (e.g.
	 * {@code charset=utf-8}) may appear before {@code base64,} as produced by many browsers and
	 * editors. Matching of {@code base64} is case-insensitive.
	 */
	private static Optional<ParsedDataImage> parseDataImageUri(String src) {
		String s = src.trim();
		if (!s.regionMatches(true, 0, DATA_IMAGE_PREFIX, 0, DATA_IMAGE_PREFIX.length())) {
			return Optional.empty();
		}
		int comma = indexOfBase64CommaInsensitive(s);
		if (comma < 0) {
			return Optional.empty();
		}
		int payloadStart = comma + BASE64_MARKER.length();
		if (payloadStart >= s.length()) {
			return Optional.empty();
		}
		String meta = s.substring(DATA_IMAGE_PREFIX.length(), comma);
		String subtype = meta;
		int semi = meta.indexOf(';');
		if (semi >= 0) {
			subtype = meta.substring(0, semi);
		}
		subtype = subtype.trim().toLowerCase(Locale.ROOT);
		if (!StringUtils.hasText(subtype)) {
			return Optional.empty();
		}
		String b64 = s.substring(payloadStart).replaceAll("\\s+", "");
		return Optional.of(new ParsedDataImage(subtype, b64));
	}

	private static int indexOfBase64CommaInsensitive(String s) {
		String lower = s.toLowerCase(Locale.ROOT);
		return lower.indexOf(BASE64_MARKER.toLowerCase(Locale.ROOT));
	}

	private static void replaceImgWithPlaceholder(Element img, String reason) {
		String safe = reason == null ? "unknown error" : reason.replace("-->", "→");
		img.replaceWith(new Comment(" ConsentIQ: broadcast inline image not hosted — " + safe + " "));
	}

	private static String abbreviateForLog(String src) {
		if (src == null) {
			return "";
		}
		String t = src.trim();
		if (t.length() <= 120) {
			return t;
		}
		return t.substring(0, 120) + "…(len=" + t.length() + ")";
	}

	private static String extensionForImageSubtype(String subtype) {
		return switch (subtype) {
			case "png" -> "png";
			case "jpeg", "jpg" -> "jpg";
			case "gif" -> "gif";
			case "webp" -> "webp";
			default -> null;
		};
	}

	private record ParsedDataImage(String subtype, String base64Payload) {
	}
}
