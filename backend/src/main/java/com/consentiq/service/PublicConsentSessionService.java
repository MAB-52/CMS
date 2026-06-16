package com.consentiq.service;

import com.consentiq.model.entity.ConsentOneTimeCode;
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

    private final ConsentOneTimeCodeRepository consentOneTimeCodeRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public Optional<String> exchangeOpaqueCodeForSessionJwt(String rawCode) {
        String cu = currentUser();
        log.debug("Entering exchangeOpaqueCodeForSessionJwt | params: rawCode=****");
        log.info("User={} | action=exchangeOpaqueCodeForSessionJwt | entity=ConsentOneTimeCode | id=n/a", cu);

        if (rawCode == null || rawCode.isBlank()) {
            log.warn("exchange failed | reason=blank_code");
            return Optional.empty();
        }

        Optional<ConsentOneTimeCode> opt = consentOneTimeCodeRepository.findByCode(rawCode.trim());
        if (opt.isEmpty()) {
            log.warn("exchange failed | reason=code_not_found");
            return Optional.empty();
        }

        ConsentOneTimeCode row = opt.get();
        Instant now = Instant.now();

        log.info("exchange state | consentRequestId={} | used={} | expiresAt={} | now={}",
                row.getConsentRequestId(), row.isUsed(), row.getExpiresAt(), now);

        if (row.getExpiresAt() == null) {
            log.warn("exchange failed | reason=expires_at_null | consentRequestId={}", row.getConsentRequestId());
            return Optional.empty();
        }

        if (now.isAfter(row.getExpiresAt())) {
            log.warn("exchange failed | reason=expired | consentRequestId={}", row.getConsentRequestId());
            return Optional.empty();
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
        return Optional.of(jwt);
    }
}