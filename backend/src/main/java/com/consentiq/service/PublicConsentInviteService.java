package com.consentiq.service;

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
import com.consentiq.util.HtmlTextUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
@Slf4j
public class PublicConsentInviteService {

    private static final DateTimeFormatter ISO_OFFSET =
            DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneId.systemDefault());

    private final ConsentInviteTokenRepository inviteTokenRepository;
    private final ConsentRepository consentRepository;
    private final CustomerRepository customerRepository;

    @Transactional(readOnly = true)
    public PublicConsentInviteDetailResponse getInviteDetails(String token) {
        if (token == null || token.isBlank()) {
            return notFound();
        }
        return inviteTokenRepository
                .findByToken(token.trim())
                .map(this::toDetail)
                .orElseGet(this::notFound);
    }

    @Transactional
    public PublicConsentInviteDetailResponse respond(PublicConsentRespondRequest request) {
        String token = request.getToken().trim();
        ConsentInviteToken invite =
                inviteTokenRepository
                        .findByToken(token)
                        .orElseThrow(() -> new IllegalArgumentException("This consent link is not valid."));
        Instant now = Instant.now();
        if (now.isAfter(invite.getExpiresAt())) {
            throw new IllegalArgumentException("This consent link has expired. Please contact us for a new request.");
        }
        if (invite.getResponseStatus() != InviteTokenResponseStatus.PENDING) {
            throw new IllegalArgumentException(
                    "A response has already been recorded for this request. Thank you — no further action is needed.");
        }
        String decision = request.getDecision().trim().toUpperCase();
        Customer customer =
                customerRepository
                        .findByCustomerIdIgnoreCase(invite.getCustomerId())
                        .orElseThrow(() -> new IllegalStateException("Customer record is missing for this invite."));
        if ("ACCEPT".equals(decision)) {
            invite.setResponseStatus(InviteTokenResponseStatus.ACCEPTED);
            customer.setConsentStatus(CustomerConsentStatus.ACTIVE);
        } else if ("DECLINE".equals(decision)) {
            invite.setResponseStatus(InviteTokenResponseStatus.REJECTED);
            customer.setConsentStatus(CustomerConsentStatus.DECLINED);
        } else {
            throw new IllegalArgumentException("Decision must be ACCEPT or DECLINE.");
        }
        invite.setRespondedAt(now);
        inviteTokenRepository.save(invite);
        customerRepository.save(customer);
        log.info(
                "Public consent response | customerId={} | decision={} | consentDbId={}",
                customer.getCustomerId(),
                decision,
                invite.getConsentDbId());
        return toDetail(inviteTokenRepository.findByToken(token).orElse(invite));
    }

    private PublicConsentInviteDetailResponse notFound() {
        return PublicConsentInviteDetailResponse.builder()
                .state("NOT_FOUND")
                .consentTitle("")
                .descriptionPreview("")
                .messagePreview("")
                .customerDisplayName("")
                .build();
    }

    private PublicConsentInviteDetailResponse toDetail(ConsentInviteToken invite) {
        Consent consent =
                consentRepository
                        .findById(invite.getConsentDbId())
                        .orElseThrow(() -> new IllegalStateException("Consent template is no longer available."));
        Customer customer =
                customerRepository
                        .findByCustomerIdIgnoreCase(invite.getCustomerId())
                        .orElseThrow(() -> new IllegalStateException("Customer record is missing."));
        Instant now = Instant.now();
        String state;
        if (invite.getResponseStatus() == InviteTokenResponseStatus.ACCEPTED) {
            state = "ACCEPTED";
        } else if (invite.getResponseStatus() == InviteTokenResponseStatus.REJECTED) {
            state = "REJECTED";
        } else if (now.isAfter(invite.getExpiresAt())) {
            state = "EXPIRED";
        } else {
            state = "READY";
        }
        String desc = HtmlTextUtil.stripToPlain(consent.getDescription(), 900);
        String msg = HtmlTextUtil.stripToPlain(consent.getConsentMessage(), 1200);
        return PublicConsentInviteDetailResponse.builder()
                .state(state)
                .consentTitle(consent.getConsentName())
                .descriptionPreview(desc)
                .messagePreview(msg)
                .customerDisplayName(customer.getFullName())
                .expiresAt(ISO_OFFSET.format(invite.getExpiresAt()))
                .respondedAt(invite.getRespondedAt() != null ? ISO_OFFSET.format(invite.getRespondedAt()) : null)
                .recordedDecision(
                        invite.getResponseStatus() == InviteTokenResponseStatus.ACCEPTED
                                ? "ACCEPTED"
                                : invite.getResponseStatus() == InviteTokenResponseStatus.REJECTED
                                        ? "DECLINED"
                                        : null)
                .build();
    }
}
