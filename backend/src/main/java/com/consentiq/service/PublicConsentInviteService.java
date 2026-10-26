package com.consentiq.service;

import com.consentiq.enums.CustomerConsentRecordStatus;
import com.consentiq.enums.CustomerConsentStatus;
import com.consentiq.enums.InviteTokenResponseStatus;
import com.consentiq.model.dto.request.PublicConsentRespondRequest;
import com.consentiq.model.dto.response.PublicConsentInviteDetailResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentInviteToken;
import com.consentiq.model.entity.Customer;
import com.consentiq.repository.ConsentInviteTokenRepository;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.CustomerRepository;
import com.consentiq.util.DeliveryChannelCatalog;
import com.consentiq.util.HtmlTextUtil;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PublicConsentInviteService {

	private static final Logger log = LoggerFactory.getLogger(PublicConsentInviteService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private static final DateTimeFormatter ISO_OFFSET = DateTimeFormatter.ISO_OFFSET_DATE_TIME
			.withZone(ZoneId.systemDefault());

	@Value("${consentiq.segmentation.re-engagement-days:90}")
	private int reEngagementDays;

	private final ConsentInviteTokenRepository inviteTokenRepository;
	private final ConsentRepository consentRepository;
	private final CustomerRepository customerRepository;
	private final CustomerConsentRecordService customerConsentRecordService;
	private final TemplateResolverService templateResolverService;

	@Transactional(readOnly = true)
	public PublicConsentInviteDetailResponse getInviteDetails(String token) {
		String cu = currentUser();
		log.debug("Entering getInviteDetails | params: token=****");
		log.info("User={} | action=getInviteDetails | entity=ConsentInvite | id=n/a", cu);
		log.debug("Transaction started | method=getInviteDetails | id=n/a");
		if (token == null || token.isBlank()) {
			log.debug("Transaction completing | method=getInviteDetails | id=n/a");
			PublicConsentInviteDetailResponse r = notFound();
			log.debug("Exiting getInviteDetails | result=NOT_FOUND");
			return r;
		}
		log.info("Executing DB query | method=findByToken | param=****");
		var tokenOpt = inviteTokenRepository.findByToken(token.trim());
		log.info("DB query completed | method=findByToken | present={}", tokenOpt.isPresent());
		PublicConsentInviteDetailResponse result = tokenOpt.map(this::toDetail).orElseGet(this::notFound);
		log.debug("Transaction completing | method=getInviteDetails | id=n/a");
		log.debug("Exiting getInviteDetails | result={}", result.getState());
		return result;
	}

	@Transactional(readOnly = true)
	public PublicConsentInviteDetailResponse getInviteDetailsByInviteId(Long inviteId) {
		String cu = currentUser();
		log.debug("Entering getInviteDetailsByInviteId | params: inviteId={}", inviteId);
		log.info("User={} | action=getInviteDetailsByInviteId | entity=ConsentInvite | id={}", cu,
				inviteId != null ? String.valueOf(inviteId) : "n/a");
		log.debug("Transaction started | method=getInviteDetailsByInviteId | id={}",
				inviteId != null ? inviteId : "n/a");
		if (inviteId == null) {
			log.debug("Transaction completing | method=getInviteDetailsByInviteId | id=n/a");
			PublicConsentInviteDetailResponse r = notFound();
			log.debug("Exiting getInviteDetailsByInviteId | result=NOT_FOUND");
			return r;
		}
		log.info("Executing DB query | method=findById | param=id={}", inviteId);
		var idOpt = inviteTokenRepository.findById(inviteId);
		log.info("DB query completed | method=findById | present={}", idOpt.isPresent());
		PublicConsentInviteDetailResponse result = idOpt.map(this::toDetail).orElseGet(this::notFound);
		log.debug("Transaction completing | method=getInviteDetailsByInviteId | id={}", inviteId);
		log.debug("Exiting getInviteDetailsByInviteId | result={}", result.getState());
		return result;
	}

	@Transactional
	public PublicConsentInviteDetailResponse respond(PublicConsentRespondRequest request) {
		String cu = currentUser();
		log.debug("Entering respond | params: token=**** | decision=****");
		log.info("User={} | action=respond | entity=ConsentInvite | id=n/a", cu);
		log.debug("Transaction started | method=respond | id=n/a");
		if (request.getToken() == null || request.getToken().isBlank()) {
			throw new IllegalArgumentException("Invite token is required.");
		}
		log.info("Executing DB query | method=findByToken | param=****");
		ConsentInviteToken invite = inviteTokenRepository.findByToken(request.getToken().trim())
				.orElseThrow(() -> new IllegalArgumentException("This consent link is not valid."));
		log.info("DB query completed | method=findByToken | present=true");
		PublicConsentInviteDetailResponse result = respondWithLoadedInvite(invite, request.getDecision());
		log.debug("Transaction completing | method=respond | id=n/a");
		log.debug("Exiting respond | result={}", result.getState());
		return result;
	}

	@Transactional
	public PublicConsentInviteDetailResponse respondWithLoadedInvite(ConsentInviteToken invite, String decisionRaw) {
		String cu = currentUser();
		log.debug("Entering respondWithLoadedInvite | params: inviteId={} | decision=****",
				invite != null ? invite.getId() : null);
		log.info("User={} | action=respondWithLoadedInvite | entity=ConsentInvite | id={}", cu,
				invite != null && invite.getId() != null ? String.valueOf(invite.getId()) : "n/a");
		log.debug("Transaction started | method=respondWithLoadedInvite | id={}",
				invite != null && invite.getId() != null ? invite.getId() : "n/a");
		Instant now = Instant.now();
		if (now.isAfter(invite.getExpiresAt())) {
			throw new IllegalArgumentException("This consent link has expired. Please contact us for a new request.");
		}
		if (invite.getResponseStatus() != InviteTokenResponseStatus.PENDING) {
			throw new IllegalArgumentException(
					"A response has already been recorded for this request. Thank you — no further action is needed.");
		}
		String decision = decisionRaw.trim().toUpperCase();
		log.info("Executing DB query | method=findByCustomerIdIgnoreCase | param=customerId={}", invite.getCustomerId());
		Customer customer = customerRepository.findByCustomerIdIgnoreCase(invite.getCustomerId())
				.orElseThrow(() -> new IllegalStateException("Customer record is missing for this invite."));
		log.info("DB query completed | method=findByCustomerIdIgnoreCase | present=true");
		log.info("Executing DB query | method=findById | param=consentDbId={}", invite.getConsentDbId());
		Consent consent = consentRepository.findById(invite.getConsentDbId())
				.orElseThrow(() -> new IllegalStateException("Consent template is no longer available."));
		log.info("DB query completed | method=findById | present=true");

		ZoneId zone = ZoneId.systemDefault();
		LocalDate acceptanceDate = LocalDate.now(zone);

		if ("ACCEPT".equals(decision)) {
			invite.setResponseStatus(InviteTokenResponseStatus.ACCEPTED);
			customer.setLastConsentResponseAt(now);
			customer.setReEngagementEligibleAfter(null);
			if (consent.getValidityPeriodDays() != null && consent.getValidityPeriodDays() > 0) {
				customer.setConsentValidUntil(acceptanceDate.plusDays(consent.getValidityPeriodDays()));
			} else if (consent.getValidityEndDate() != null) {
				customer.setConsentValidUntil(consent.getValidityEndDate());
			}
		} else if ("DECLINE".equals(decision)) {
			invite.setResponseStatus(InviteTokenResponseStatus.REJECTED);
			customer.setLastConsentResponseAt(now);
			customer.setConsentValidUntil(null);
			customer.setReEngagementEligibleAfter(now.plus(reEngagementDays, ChronoUnit.DAYS));
		} else if ("WITHDRAW".equals(decision)) {
			invite.setResponseStatus(InviteTokenResponseStatus.WITHDRAWN);
			customer.setLastConsentResponseAt(now);
			customer.setConsentValidUntil(null);
		} else {
			throw new IllegalArgumentException("Decision must be ACCEPT, DECLINE, or WITHDRAW.");
		}

		invite.setRespondedAt(now);
		log.info("Executing DB query | method=save | param=inviteId={}", invite.getId());
		inviteTokenRepository.save(invite);
		log.info("DB query completed | method=save | completed");
		log.info("Executing DB query | method=save | param=customerId={}", customer.getCustomerId());
		customerRepository.save(customer);
		log.info("DB query completed | method=save | completed");

		CustomerConsentRecordStatus recordStatus = switch (invite.getResponseStatus()) {
			case ACCEPTED -> CustomerConsentRecordStatus.ACCEPTED;
			case REJECTED -> CustomerConsentRecordStatus.REJECTED;
			case WITHDRAWN -> CustomerConsentRecordStatus.WITHDRAWN;
			default -> throw new IllegalStateException(
					"Unexpected invite token status: " + invite.getResponseStatus());
		};

		LocalDate recordValidUntil = null;
		if (recordStatus == CustomerConsentRecordStatus.ACCEPTED) {
			if (consent.getValidityPeriodDays() != null && consent.getValidityPeriodDays() > 0) {
				recordValidUntil = acceptanceDate.plusDays(consent.getValidityPeriodDays());
			} else if (consent.getValidityEndDate() != null) {
				recordValidUntil = consent.getValidityEndDate();
			}
		}

		customerConsentRecordService.updateOnResponse(
				customer.getCustomerId(), invite.getConsentDbId(), recordStatus, now, recordValidUntil);

		log.info("Executing DB query | method=findById | param=inviteId={}", invite.getId());
		var refreshedOpt = inviteTokenRepository.findById(invite.getId());
		log.info("DB query completed | method=findById | present={}", refreshedOpt.isPresent());
		PublicConsentInviteDetailResponse result = toDetail(refreshedOpt.orElse(invite));
		log.debug("Transaction completing | method=respondWithLoadedInvite | id={}", invite.getId());
		log.debug("Exiting respondWithLoadedInvite | result={}", result.getState());
		return result;
	}

	private PublicConsentInviteDetailResponse notFound() {
		return PublicConsentInviteDetailResponse.builder().state("NOT_FOUND").consentTitle("").descriptionPreview("")
				.messagePreview("").customerDisplayName("").deliveryChannelsSummary("").build();
	}

	private PublicConsentInviteDetailResponse toDetail(ConsentInviteToken invite) {
		log.info("Executing DB query | method=findById | param=consentDbId={}", invite.getConsentDbId());
		Consent consent = consentRepository.findById(invite.getConsentDbId())
				.orElseThrow(() -> new IllegalStateException("Consent template is no longer available."));
		log.info("DB query completed | method=findById | present=true");
		log.info("Executing DB query | method=findByCustomerIdIgnoreCase | param=customerId={}", invite.getCustomerId());
		Customer customer = customerRepository.findByCustomerIdIgnoreCase(invite.getCustomerId())
				.orElseThrow(() -> new IllegalStateException("Customer record is missing."));
		log.info("DB query completed | method=findByCustomerIdIgnoreCase | present=true");
		Instant now = Instant.now();
		String state;
		if (invite.getResponseStatus() == InviteTokenResponseStatus.ACCEPTED) {
			state = "ACCEPTED";
		} else if (invite.getResponseStatus() == InviteTokenResponseStatus.WITHDRAWN) {
			state = "WITHDRAWN";
		} else if (invite.getResponseStatus() == InviteTokenResponseStatus.REJECTED) {
			state = "REJECTED";
		} else if (now.isAfter(invite.getExpiresAt())) {
			state = "EXPIRED";
		} else {
			state = "READY";
		}
		String desc = HtmlTextUtil.stripToPlain(consent.getDescription(), 900);
		String resolvedMessage = templateResolverService.resolve(consent.getConsentMessage(), customer, consent);
		String msg = HtmlTextUtil.stripToPlain(resolvedMessage, 1200);
		String channelsSummary = DeliveryChannelCatalog
				.formatForCustomer(DeliveryChannelCatalog.fromConsentEntity(consent));
		return PublicConsentInviteDetailResponse.builder()
				.state(state)
				.consentTitle(consent.getConsentName())
				.descriptionPreview(desc)
				.messagePreview(msg)
				.resolvedMessageHtml(resolvedMessage)
				.customerDisplayName(customer.getFullName())
				.expiresAt(ISO_OFFSET.format(invite.getExpiresAt()))
				.respondedAt(invite.getRespondedAt() != null ? ISO_OFFSET.format(invite.getRespondedAt()) : null)
				.recordedDecision(invite.getResponseStatus() == InviteTokenResponseStatus.ACCEPTED ? "ACCEPTED"
						: invite.getResponseStatus() == InviteTokenResponseStatus.REJECTED ? "DECLINED"
								: invite.getResponseStatus() == InviteTokenResponseStatus.WITHDRAWN ? "WITHDRAWN"
										: null)
				.deliveryChannelsSummary(channelsSummary)
				.availableChannels(DeliveryChannelCatalog.fromConsentEntity(consent))
				.validityPeriodDays(consent.getValidityPeriodDays())
				.consentDbId(invite.getConsentDbId())
				.build();
	}
}
