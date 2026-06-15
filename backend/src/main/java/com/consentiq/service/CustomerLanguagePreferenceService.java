package com.consentiq.service;

import com.consentiq.model.entity.ConsentInviteToken;
import com.consentiq.model.entity.CustomerLanguagePreference;
import com.consentiq.model.entity.OnBehalfConsentRecord;
import com.consentiq.repository.ConsentInviteTokenRepository;
import com.consentiq.repository.CustomerLanguagePreferenceRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CustomerLanguagePreferenceService {

	private static final Logger log = LoggerFactory.getLogger(CustomerLanguagePreferenceService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private static final Set<String> ALLOWED =
			Set.of("english", "hindi", "marathi", "gujarati", "bengali",
					"tamil", "telugu", "malayalam", "urdu");

	private final CustomerLanguagePreferenceRepository repository;
	private final ConsentInviteTokenRepository inviteTokenRepository;

	@Transactional
	public void savePreference(String token, Long consentDbId, List<String> languages) {
		String cu = currentUser();
		log.debug("Entering savePreference | params: token=**** | consentDbId={}", consentDbId);
		log.info("User={} | action=savePreference | entity=CustomerLanguagePreference | id={}", cu,
				consentDbId != null ? String.valueOf(consentDbId) : "n/a");
		log.debug("Transaction started | method=savePreference | id={}", consentDbId);

		log.info("Executing DB query | method=findByToken | param=****");
		ConsentInviteToken invite = inviteTokenRepository.findByToken(token)
				.orElseThrow(() -> new IllegalArgumentException("Invalid or expired invite token"));
		log.info("DB query completed | method=findByToken | present=true");
		if (invite.getExpiresAt().isBefore(Instant.now())) {
			throw new IllegalArgumentException("Invite token has expired");
		}
		if (!invite.getConsentDbId().equals(consentDbId)) {
			throw new IllegalArgumentException("Token does not match the consent");
		}

		List<String> toStore = normalize(languages);

		log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId={} | consentDbId={}",
				invite.getCustomerId(), consentDbId);
		CustomerLanguagePreference existing = repository
				.findByCustomerIdAndConsentDbId(invite.getCustomerId(), consentDbId)
				.orElse(null);
		log.info("DB query completed | method=findByCustomerIdAndConsentDbId | present={}", existing != null);

		if (existing != null) {
			existing.setSelectedLanguages(toStore);
			existing.setInviteToken(invite.getToken());
			existing.setOnBehalfRecord(null);
			log.info("Executing DB query | method=save | param=customerId={}", invite.getCustomerId());
			repository.save(existing);
			log.info("DB query completed | method=save | completed");
		} else {
			log.info("Executing DB query | method=save | param=customerId={}", invite.getCustomerId());
			repository.save(CustomerLanguagePreference.builder()
					.customerId(invite.getCustomerId())
					.consentDbId(consentDbId)
					.inviteToken(invite.getToken())
					.onBehalfRecord(null)
					.selectedLanguages(toStore)
					.build());
			log.info("DB query completed | method=save | completed");
		}

		log.info("Language preference saved (token) | customerId={} consentDbId={} languages={}",
				invite.getCustomerId(), consentDbId, toStore);
		log.debug("Transaction completing | method=savePreference | id={}", consentDbId);
		log.debug("Exiting savePreference | completed successfully");
	}

	@Transactional
	public void saveOnBehalfPreference(
			String customerId,
			Long consentDbId,
			List<String> languages,
			OnBehalfConsentRecord onBehalfRecord) {
		String cu = currentUser();
		log.debug("Entering saveOnBehalfPreference | params: customerId={} | consentDbId={}", customerId,
				consentDbId);
		log.info("User={} | action=saveOnBehalfPreference | entity=CustomerLanguagePreference | id={}", cu,
				consentDbId != null ? String.valueOf(consentDbId) : "n/a");
		log.debug("Transaction started | method=saveOnBehalfPreference | id={}", consentDbId);

		List<String> toStore = normalize(languages);

		log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId={} | consentDbId={}",
				customerId, consentDbId);
		CustomerLanguagePreference existing = repository
				.findByCustomerIdAndConsentDbId(customerId, consentDbId)
				.orElse(null);
		log.info("DB query completed | method=findByCustomerIdAndConsentDbId | present={}", existing != null);

		if (existing != null) {
			existing.setSelectedLanguages(toStore);
			existing.setOnBehalfRecord(onBehalfRecord);
			log.info("Executing DB query | method=save | param=customerId={}", customerId);
			repository.save(existing);
			log.info("DB query completed | method=save | completed");
		} else {
			log.info("Executing DB query | method=save | param=customerId={}", customerId);
			repository.save(CustomerLanguagePreference.builder()
					.customerId(customerId)
					.consentDbId(consentDbId)
					.inviteToken(null)
					.onBehalfRecord(onBehalfRecord)
					.selectedLanguages(toStore)
					.build());
			log.info("DB query completed | method=save | completed");
		}

		log.info("Language preference saved (on-behalf) | customerId={} consentDbId={} languages={} onBehalfRecordId={}",
				customerId, consentDbId, toStore, onBehalfRecord.getId());
		log.debug("Transaction completing | method=saveOnBehalfPreference | id={}", consentDbId);
		log.debug("Exiting saveOnBehalfPreference | completed successfully");
	}

	@Transactional(readOnly = true)
	public List<String> getLanguagesForAdmin(String customerId, Long consentDbId) {
		String cu = currentUser();
		log.debug("Entering getLanguagesForAdmin | params: customerId={} | consentDbId={}", customerId, consentDbId);
		log.info("User={} | action=getLanguagesForAdmin | entity=CustomerLanguagePreference | id={}", cu,
				consentDbId != null ? String.valueOf(consentDbId) : "n/a");
		log.debug("Transaction started | method=getLanguagesForAdmin | id={}", consentDbId);
		log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId={}", customerId);
		List<String> result = repository.findByCustomerIdAndConsentDbId(customerId, consentDbId)
				.map(CustomerLanguagePreference::getSelectedLanguages)
				.orElse(List.of());
		log.info("DB query completed | method=findByCustomerIdAndConsentDbId | size={}", result.size());
		log.debug("Transaction completing | method=getLanguagesForAdmin | id={}", consentDbId);
		log.debug("Exiting getLanguagesForAdmin | result=size={}", result.size());
		return result;
	}

	public static List<String> supportedLanguages() {
		log.debug("Entering supportedLanguages | params: none");
		log.info("User={} | action=supportedLanguages | entity=CustomerLanguagePreference | id=n/a", currentUser());
		List<String> out = List.of("english", "hindi", "marathi", "gujarati",
				"bengali", "tamil", "telugu", "malayalam", "urdu");
		log.debug("Exiting supportedLanguages | result=size={}", out.size());
		return out;
	}

	private List<String> normalize(List<String> languages) {
		LinkedHashSet<String> normalized = new LinkedHashSet<>();
		if (languages != null) {
			for (String raw : languages) {
				if (raw == null) continue;
				String v = raw.trim().toLowerCase(Locale.ROOT);
				if (ALLOWED.contains(v)) normalized.add(v);
			}
		}
		if (normalized.isEmpty()) {
			throw new IllegalArgumentException("No valid languages selected");
		}
		return new ArrayList<>(normalized);
	}
}
