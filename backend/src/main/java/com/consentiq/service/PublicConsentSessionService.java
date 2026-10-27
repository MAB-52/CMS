package com.consentiq.service;

import com.consentiq.enums.InviteTokenResponseStatus;
import com.consentiq.model.entity.ConsentInviteToken;
import com.consentiq.model.entity.ConsentOneTimeCode;
import com.consentiq.repository.ConsentInviteTokenRepository;
import com.consentiq.repository.ConsentOneTimeCodeRepository;
import com.consentiq.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PublicConsentSessionService {

    private static final Logger log = LoggerFactory.getLogger(PublicConsentSessionService.class);

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    public static final String INVALID_LINK = "INVALID_LINK";
    public static final String LINK_EXPIRED = "LINK_EXPIRED";

    public record ExchangeResult(String jwt, String error) {
        static ExchangeResult ok(String jwt) {
            return new ExchangeResult(jwt, null);
        }

        static ExchangeResult failed(String error) {
            return new ExchangeResult(null, error);
        }

        public boolean succeeded() {
            return jwt != null;
        }
    }

    private final ConsentOneTimeCodeRepository consentOneTimeCodeRepository;
    private final ConsentInviteTokenRepository inviteTokenRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public ExchangeResult exchangeOpaqueCodeForSessionJwt(String rawCode) {
        String cu = currentUser();
        log.debug("Entering exchangeOpaqueCodeForSessionJwt | params: rawCode=****");
        log.info("User={} | action=exchangeOpaqueCodeForSessionJwt | entity=ConsentOneTimeCode | id=n/a", cu);

        if (rawCode == null || rawCode.isBlank()) {
            log.warn("exchange failed | reason=blank_code");
            return ExchangeResult.failed(INVALID_LINK);
        }

        Optional<ConsentOneTimeCode> opt = consentOneTimeCodeRepository.findByCode(rawCode.trim());
        if (opt.isEmpty()) {
            log.warn("exchange failed | reason=code_not_found");
            return ExchangeResult.failed(INVALID_LINK);
        }

        ConsentOneTimeCode row = opt.get();
        Instant now = Instant.now();

        log.info("exchange state | consentRequestId={} | used={} | expiresAt={} | now={}",
                row.getConsentRequestId(), row.isUsed(), row.getExpiresAt(), now);

        if (row.getExpiresAt() == null) {
            log.warn("exchange failed | reason=expires_at_null | consentRequestId={}", row.getConsentRequestId());
            return ExchangeResult.failed(LINK_EXPIRED);
        }

        if (now.isAfter(row.getExpiresAt())) {
            log.warn("exchange failed | reason=expired | consentRequestId={}", row.getConsentRequestId());
            return ExchangeResult.failed(LINK_EXPIRED);
        }

        Optional<ConsentInviteToken> inviteOpt = inviteTokenRepository.findById(row.getConsentRequestId());
        if (inviteOpt.isEmpty()) {
            log.warn("exchange failed | reason=invite_not_found | consentRequestId={}", row.getConsentRequestId());
            return ExchangeResult.failed(INVALID_LINK);
        }
        ConsentInviteToken invite = inviteOpt.get();
        if ((invite.getResponseStatus() != null && invite.getResponseStatus() != InviteTokenResponseStatus.PENDING)
                || invite.getExpiresAt() == null || now.isAfter(invite.getExpiresAt())) {
            log.warn("exchange failed | reason=invite_closed | consentRequestId={}", row.getConsentRequestId());
            return ExchangeResult.failed(LINK_EXPIRED);
        }

        if (!row.isUsed()) {
            row.setUsed(true);
            consentOneTimeCodeRepository.save(row);
            log.info("exchange first use | consentRequestId={}", row.getConsentRequestId());
        } else {
            log.warn("### NEW LOGIC HIT ### exchange reopen allowed | consentRequestId={}", row.getConsentRequestId());
        }

        String jwt = jwtTokenProvider.generateConsentSessionToken(row.getConsentRequestId());
        log.info("exchange success | consentRequestId={}", row.getConsentRequestId());
        return ExchangeResult.ok(jwt);
    }
}