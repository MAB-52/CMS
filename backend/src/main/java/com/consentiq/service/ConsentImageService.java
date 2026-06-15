package com.consentiq.service;

import com.consentiq.enums.UserRole;
import com.consentiq.exception.UnauthorizedActionException;
import com.consentiq.model.entity.ConsentImage;
import com.consentiq.model.entity.User;
import com.consentiq.repository.ConsentImageRepository;
import com.consentiq.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class ConsentImageService {

	private static final Logger log = LoggerFactory.getLogger(ConsentImageService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private static final long MAX_BYTES = 2 * 1024 * 1024;

	private final ConsentImageRepository consentImageRepository;
	private final UserRepository userRepository;

	@Transactional
	public String store(MultipartFile file, Long userId) {
		String cu = currentUser();
		log.debug("Entering store | params: userId={} | filePresent={}", userId, file != null && !file.isEmpty());
		log.info("User={} | action=store | entity=ConsentImage | id={}", cu, userId != null ? String.valueOf(userId) : "n/a");
		log.debug("Transaction started | method=store | id={}", userId);
		log.info("storeConsentImage | user={}", userId);
		User user = loadUser(userId);
		if (user.getRole() != UserRole.MAKER && user.getRole() != UserRole.ADMIN) {
			throw new UnauthorizedActionException("UPLOAD_CONSENT_IMAGE");
		}
		if (file == null || file.isEmpty()) {
			throw new IllegalArgumentException("File is required");
		}
		String contentType = file.getContentType();
		if (contentType == null || !contentType.toLowerCase(Locale.ROOT).startsWith("image/")) {
			throw new IllegalArgumentException("File must be an image");
		}
		if (file.getSize() > MAX_BYTES) {
			throw new IllegalArgumentException("Image must not exceed 2 MB");
		}
		byte[] bytes;
		try {
			bytes = file.getBytes();
		} catch (IOException e) {
			log.error("Exception in store | user={} | message={}", cu, e.getMessage(), e);
			log.warn("storeConsentImage | failed to read file | user={} | message={}", userId, e.getMessage());
			throw new IllegalArgumentException("Failed to read uploaded file");
		}
		if (bytes.length == 0) {
			throw new IllegalArgumentException("File is required");
		}
		String filename =
				StringUtils.hasText(file.getOriginalFilename()) ? file.getOriginalFilename() : "image";
		ConsentImage entity =
				ConsentImage.builder()
						.filename(filename)
						.contentType(contentType)
						.fileSize(bytes.length)
						.data(bytes)
						.uploadedBy(user)
						.build();
		log.info("Executing DB query | method=save | param=userId={}", userId);
		ConsentImage saved = consentImageRepository.save(entity);
		log.info("DB query completed | method=save | completed");
		log.info("storeConsentImage | saved id={} user={}", saved.getId(), userId);
		String result = "/api/images/" + saved.getId();
		log.debug("Transaction completing | method=store | id={}", userId);
		log.debug("Exiting store | result=path={}", result);
		return result;
	}

	@Transactional(readOnly = true)
	public ConsentImage load(Long id) {
		String cu = currentUser();
		log.debug("Entering load | params: id={}", id);
		log.info("User={} | action=load | entity=ConsentImage | id={}", cu, id != null ? String.valueOf(id) : "n/a");
		log.debug("Transaction started | method=load | id={}", id);
		log.info("Executing DB query | method=findById | param=id={}", id);
		ConsentImage result = consentImageRepository
				.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Image not found"));
		log.info("DB query completed | method=findById | present=true");
		log.debug("Transaction completing | method=load | id={}", id);
		log.debug("Exiting load | result=entity present");
		return result;
	}

	private User loadUser(Long id) {
		log.info("Executing DB query | method=findById | param=id={}", id);
		User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
		log.info("DB query completed | method=findById | present=true");
		return user;
	}
}
