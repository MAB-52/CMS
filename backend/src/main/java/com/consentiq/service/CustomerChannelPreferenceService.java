package com.consentiq.service;

import com.consentiq.model.dto.response.CustomerChannelPreferenceResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentInviteToken;
import com.consentiq.model.entity.CustomerChannelPreference;
import com.consentiq.model.entity.OnBehalfConsentRecord;
import com.consentiq.repository.ConsentInviteTokenRepository;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.CustomerChannelPreferenceRepository;
import com.consentiq.util.DeliveryChannelCatalog;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Locale;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CustomerChannelPreferenceService {

	private static final Logger log = LoggerFactory.getLogger(CustomerChannelPreferenceService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private static final Set<String> VALID_CHANNELS =
			Set.of("EMAIL", "SMS", "PUSH", "WHATSAPP", "RCS");

	private final CustomerChannelPreferenceRepository repository;
	private final ConsentInviteTokenRepository inviteTokenRepository;
	private final ConsentRepository consentRepository;

	@Transactional
	public CustomerChannelPreferenceResponse savePreference(
			String token, Long consentDbId, List<String> selectedChannels) {
		String cu = currentUser();
		log.debug("Entering savePreference | params: token=**** | consentDbId={}", consentDbId);
		log.info("User={} | action=savePreference | entity=CustomerChannelPreference | id={}", cu,
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

		log.info("Executing DB query | method=findById | param=consentDbId={}", invite.getConsentDbId());
		Consent template = consentRepository.findById(invite.getConsentDbId())
				.orElseThrow(() -> new IllegalArgumentException("Consent template not found"));
		log.info("DB query completed | method=findById | present=true");
		List<String> allowed = DeliveryChannelCatalog.fromConsentEntity(template);

		boolean[] flags = parseChannelFlags(selectedChannels, allowed);

		log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId={}", invite.getCustomerId());
		CustomerChannelPreference existing = repository
				.findByCustomerIdAndConsentDbId(invite.getCustomerId(), consentDbId)
				.orElse(null);
		log.info("DB query completed | method=findByCustomerIdAndConsentDbId | present={}", existing != null);

		if (existing != null) {
			applyFlags(existing, flags);
			existing.setInviteToken(token);
			existing.setOnBehalfRecord(null);
			log.info("Executing DB query | method=save | param=customerId={}", invite.getCustomerId());
			existing = repository.save(existing);
			log.info("DB query completed | method=save | completed");
		} else {
			log.info("Executing DB query | method=save | param=customerId={}", invite.getCustomerId());
			existing = repository.save(buildFromFlags(invite.getCustomerId(), consentDbId, token, null, flags));
			log.info("DB query completed | method=save | completed");
		}

		log.info("Channel preference saved (token) | customerId={} consentDbId={}",
				invite.getCustomerId(), consentDbId);
		CustomerChannelPreferenceResponse result = toResponse(existing);
		log.debug("Transaction completing | method=savePreference | id={}", consentDbId);
		log.debug("Exiting savePreference | result=customerId={}", result.getCustomerId());
		return result;
	}

	@Transactional
	public CustomerChannelPreferenceResponse saveOnBehalfPreference(
			String customerId,
			Long consentDbId,
			List<String> selectedChannels,
			OnBehalfConsentRecord onBehalfRecord) {
		String cu = currentUser();
		log.debug("Entering saveOnBehalfPreference | params: customerId={} | consentDbId={}", customerId,
				consentDbId);
		log.info("User={} | action=saveOnBehalfPreference | entity=CustomerChannelPreference | id={}", cu,
				consentDbId != null ? String.valueOf(consentDbId) : "n/a");
		log.debug("Transaction started | method=saveOnBehalfPreference | id={}", consentDbId);

		log.info("Executing DB query | method=findById | param=consentDbId={}", consentDbId);
		Consent template = consentRepository.findById(consentDbId)
				.orElseThrow(() -> new IllegalArgumentException("Consent template not found"));
		log.info("DB query completed | method=findById | present=true");
		List<String> allowed = DeliveryChannelCatalog.fromConsentEntity(template);

		boolean[] flags = parseChannelFlags(selectedChannels, allowed);

		log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId={}", customerId);
		CustomerChannelPreference existing = repository
				.findByCustomerIdAndConsentDbId(customerId, consentDbId)
				.orElse(null);
		log.info("DB query completed | method=findByCustomerIdAndConsentDbId | present={}", existing != null);

		if (existing != null) {
			applyFlags(existing, flags);
			existing.setOnBehalfRecord(onBehalfRecord);
			log.info("Executing DB query | method=save | param=customerId={}", customerId);
			existing = repository.save(existing);
			log.info("DB query completed | method=save | completed");
		} else {
			log.info("Executing DB query | method=save | param=customerId={}", customerId);
			existing = repository.save(buildFromFlags(customerId, consentDbId, null, onBehalfRecord, flags));
			log.info("DB query completed | method=save | completed");
		}

		log.info("Channel preference saved (on-behalf) | customerId={} consentDbId={} onBehalfRecordId={}",
				customerId, consentDbId, onBehalfRecord.getId());
		CustomerChannelPreferenceResponse result = toResponse(existing);
		log.debug("Transaction completing | method=saveOnBehalfPreference | id={}", consentDbId);
		log.debug("Exiting saveOnBehalfPreference | result=customerId={}", result.getCustomerId());
		return result;
	}

	@Transactional(readOnly = true)
	public CustomerChannelPreferenceResponse getPreference(String token, Long consentDbId) {
		String cu = currentUser();
		log.debug("Entering getPreference | params: token=**** | consentDbId={}", consentDbId);
		log.info("User={} | action=getPreference | entity=CustomerChannelPreference | id={}", cu,
				consentDbId != null ? String.valueOf(consentDbId) : "n/a");
		log.debug("Transaction started | method=getPreference | id={}", consentDbId);
		log.info("Executing DB query | method=findByToken | param=****");
		ConsentInviteToken invite = inviteTokenRepository.findByToken(token)
				.orElseThrow(() -> new IllegalArgumentException("Invalid token"));
		log.info("DB query completed | method=findByToken | present=true");
		log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId={}", invite.getCustomerId());
		var prefOpt = repository.findByCustomerIdAndConsentDbId(invite.getCustomerId(), consentDbId);
		log.info("DB query completed | method=findByCustomerIdAndConsentDbId | present={}", prefOpt.isPresent());
		CustomerChannelPreferenceResponse result = prefOpt
				.map(this::toResponse)
				.orElse(CustomerChannelPreferenceResponse.builder()
						.customerId(invite.getCustomerId())
						.consentDbId(consentDbId)
						.build());
		log.debug("Transaction completing | method=getPreference | id={}", consentDbId);
		log.debug("Exiting getPreference | result=customerId={}", result.getCustomerId());
		return result;
	}

	@Transactional(readOnly = true)
	public CustomerChannelPreferenceResponse getPreferenceForAdmin(
			String customerId, Long consentDbId) {
		String cu = currentUser();
		log.debug("Entering getPreferenceForAdmin | params: customerId={} | consentDbId={}", customerId,
				consentDbId);
		log.info("User={} | action=getPreferenceForAdmin | entity=CustomerChannelPreference | id={}", cu,
				consentDbId != null ? String.valueOf(consentDbId) : "n/a");
		log.debug("Transaction started | method=getPreferenceForAdmin | id={}", consentDbId);
		log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId={}", customerId);
		var prefOpt = repository.findByCustomerIdAndConsentDbId(customerId, consentDbId);
		log.info("DB query completed | method=findByCustomerIdAndConsentDbId | present={}", prefOpt.isPresent());
		CustomerChannelPreferenceResponse result = prefOpt
				.map(this::toResponse)
				.orElse(CustomerChannelPreferenceResponse.builder()
						.customerId(customerId)
						.consentDbId(consentDbId)
						.build());
		log.debug("Transaction completing | method=getPreferenceForAdmin | id={}", consentDbId);
		log.debug("Exiting getPreferenceForAdmin | result=customerId={}", result.getCustomerId());
		return result;
	}

	private boolean[] parseChannelFlags(List<String> selectedChannels, List<String> allowed) {
		boolean email = false, sms = false, push = false, whatsapp = false, rcs = false;

		if (selectedChannels != null) {
			for (String raw : selectedChannels) {
				if (raw == null) continue;
				String ch = raw.trim().toUpperCase(Locale.ROOT);
				if (!VALID_CHANNELS.contains(ch)) continue;
				if (!allowed.isEmpty() && !allowed.contains(ch)) {
					throw new IllegalArgumentException(
							"Channel " + ch + " is not available for this consent template.");
				}
				switch (ch) {
					case "EMAIL" -> email = true;
					case "SMS" -> sms = true;
					case "PUSH" -> push = true;
					case "WHATSAPP" -> whatsapp = true;
					case "RCS" -> rcs = true;
				}
			}
		}

		if (!email && !sms && !push && !whatsapp && !rcs) {
			throw new IllegalArgumentException("Select at least one channel preference.");
		}

		return new boolean[]{email, sms, push, whatsapp, rcs};
	}

	private void applyFlags(CustomerChannelPreference p, boolean[] f) {
		p.setPrefEmail(f[0]);
		p.setPrefSms(f[1]);
		p.setPrefPush(f[2]);
		p.setPrefWhatsapp(f[3]);
		p.setPrefRcs(f[4]);
	}

	private CustomerChannelPreference buildFromFlags(
			String customerId, Long consentDbId,
			String inviteToken, OnBehalfConsentRecord onBehalfRecord,
			boolean[] f) {
		return CustomerChannelPreference.builder()
				.customerId(customerId)
				.consentDbId(consentDbId)
				.inviteToken(inviteToken)
				.onBehalfRecord(onBehalfRecord)
				.prefEmail(f[0])
				.prefSms(f[1])
				.prefPush(f[2])
				.prefWhatsapp(f[3])
				.prefRcs(f[4])
				.build();
	}

	private CustomerChannelPreferenceResponse toResponse(CustomerChannelPreference p) {
		return CustomerChannelPreferenceResponse.builder()
				.customerId(p.getCustomerId())
				.consentDbId(p.getConsentDbId())
				.prefEmail(p.isPrefEmail())
				.prefSms(p.isPrefSms())
				.prefPush(p.isPrefPush())
				.prefWhatsapp(p.isPrefWhatsapp())
				.prefRcs(p.isPrefRcs())
				.build();
	}
}
