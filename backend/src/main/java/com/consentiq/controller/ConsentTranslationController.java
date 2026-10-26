//package com.consentiq.controller;
//
//import java.time.Instant;
//import java.util.List;
//import java.util.Locale;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.util.StringUtils;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.consentiq.model.dto.response.ApiResponse;
//import com.consentiq.model.dto.response.ConsentTranslationResponse;
//import com.consentiq.model.entity.Consent;
//import com.consentiq.model.entity.ConsentBroadcastRequest;
//import com.consentiq.model.entity.ConsentInviteToken;
//import com.consentiq.model.entity.Customer;
//import com.consentiq.model.entity.CustomerLanguagePreference;
//import com.consentiq.model.entity.MergeTag;
//import com.consentiq.repository.ConsentInviteTokenRepository;
//import com.consentiq.repository.ConsentRepository;
//import com.consentiq.repository.CustomerLanguagePreferenceRepository;
//import com.consentiq.repository.CustomerRepository;
//import com.consentiq.repository.MergeTagRepository;
//import com.consentiq.service.ConsentTranslationService;
//import com.consentiq.service.TemplateResolverService;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//
//@RestController
//@RequestMapping("/api/public/consent-translation")
//@RequiredArgsConstructor
//@Slf4j
//public class ConsentTranslationController {
//
//	private final ConsentInviteTokenRepository consentInviteTokenRepository;
//	private final ConsentRepository consentRepository;
//	private final CustomerRepository customerRepository;
//	private final CustomerLanguagePreferenceRepository customerLanguagePreferenceRepository;
//	private final MergeTagRepository mergeTagRepository;
//	private final TemplateResolverService templateResolverService;
//	private final ConsentTranslationService consentTranslationService;
//
//	@GetMapping
//	public ResponseEntity<ApiResponse<ConsentTranslationResponse>> getTranslation(
//			@RequestParam String token,
//			@RequestParam("consentDbId") Long consentDbId,
//			@RequestParam String lang) {
//
//		if (!StringUtils.hasText(token) || consentDbId == null || !StringUtils.hasText(lang)) {
//			return ResponseEntity.badRequest()
//					.body(ApiResponse.error("token, consentDbId, and lang are required.", "BAD_REQUEST"));
//		}
//
//		String trimmedToken = token.trim();
//		var inviteOpt = consentInviteTokenRepository.findByToken(trimmedToken);
//		if (inviteOpt.isEmpty()) {
//			return ResponseEntity.badRequest()
//					.body(ApiResponse.error("This consent link is not valid.", "INVITE_NOT_FOUND"));
//		}
//		ConsentInviteToken invite = inviteOpt.get();
//		Instant now = Instant.now();
//		if (now.isAfter(invite.getExpiresAt())) {
//			return ResponseEntity.badRequest()
//					.body(ApiResponse.error("This consent link has expired.", "INVITE_EXPIRED"));
//		}
//		if (!invite.getConsentDbId().equals(consentDbId)) {
//			return ResponseEntity.badRequest()
//					.body(ApiResponse.error("Consent does not match this link.", "CONSENT_MISMATCH"));
//		}
//
//		Consent consent = consentRepository.findById(consentDbId)
//				.orElse(null);
//		if (consent == null) {
//			return ResponseEntity.badRequest()
//					.body(ApiResponse.error("Consent template not found.", "CONSENT_NOT_FOUND"));
//		}
//
//		Customer customer = customerRepository.findByCustomerIdIgnoreCase(invite.getCustomerId()).orElse(null);
//		if (customer == null) {
//			return ResponseEntity.badRequest()
//					.body(ApiResponse.error("Customer record not found.", "CUSTOMER_NOT_FOUND"));
//		}
//
//		CustomerLanguagePreference pref = customerLanguagePreferenceRepository
//				.findByCustomerIdAndConsentDbId(customer.getCustomerId(), consentDbId)
//				.orElse(null);
//		if (pref == null || pref.getSelectedLanguages() == null || pref.getSelectedLanguages().isEmpty()) {
//			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(
//					ApiResponse.error("No language preference is saved for this consent.", "LANG_PREF_MISSING"));
//		}
//
//		String requestedLang = lang.trim().toLowerCase(Locale.ROOT);
//		boolean allowed = pref.getSelectedLanguages().stream()
//				.filter(StringUtils::hasText)
//				.map(s -> s.trim().toLowerCase(Locale.ROOT))
//				.anyMatch(requestedLang::equals);
//		if (!allowed) {
//			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(
//					ApiResponse.error("The requested language is not in your saved preferences.", "LANG_NOT_ALLOWED"));
//		}
//
//		String rawHtml = consent.getConsentMessage() != null ? consent.getConsentMessage() : "";
//		List<MergeTag> allMergeTags = mergeTagRepository.findAll();
//		ConsentBroadcastRequest broadcastStub = new ConsentBroadcastRequest();
//		broadcastStub.setConsentTemplate(consent);
//		String resolvedHtml = templateResolverService.resolve(rawHtml, customer, broadcastStub, allMergeTags);
//
//		String outHtml;
//		if ("english".equals(requestedLang) || "en".equals(requestedLang)) {
//			outHtml = resolvedHtml;
//		} else {
//			outHtml = consentTranslationService.translateHtml(resolvedHtml, requestedLang);
//		}
//
//		String displayName = StringUtils.hasText(customer.getFullName()) ? customer.getFullName() : "Valued Customer";
//		ConsentTranslationResponse data = ConsentTranslationResponse.builder()
//				.consentTitle(consent.getConsentName())
//				.translatedHtml(outHtml)
//				.language(requestedLang)
//				.customerDisplayName(displayName)
//				.build();
//
//		return ResponseEntity.ok(ApiResponse.success("Translation loaded", data));
//	}
//}
