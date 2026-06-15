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

    /**
     * Validates one-time code, marks it used, returns consent-session JWT value for Set-Cookie.
     */
    @Transactional
    public Optional<String> exchangeOpaqueCodeForSessionJwt(String rawCode) {
        String cu = currentUser();
        log.debug("Entering exchangeOpaqueCodeForSessionJwt | params: rawCode=****");
        log.info("User={} | action=exchangeOpaqueCodeForSessionJwt | entity=ConsentOneTimeCode | id=n/a", cu);
        log.debug("Transaction started | method=exchangeOpaqueCodeForSessionJwt | id=n/a");
        if (rawCode == null || rawCode.isBlank()) {
            log.debug("Transaction completing | method=exchangeOpaqueCodeForSessionJwt | id=n/a");
            log.debug("Exiting exchangeOpaqueCodeForSessionJwt | result=Optional.empty");
            return Optional.empty();
        }
        log.info("Executing DB query | method=findByCode | param=****");
        Optional<ConsentOneTimeCode> opt = consentOneTimeCodeRepository.findByCode(rawCode.trim());
        log.info("DB query completed | method=findByCode | present={}", opt.isPresent());
        if (opt.isEmpty()) {
            log.debug("Transaction completing | method=exchangeOpaqueCodeForSessionJwt | id=n/a");
            log.debug("Exiting exchangeOpaqueCodeForSessionJwt | result=Optional.empty");
            return Optional.empty();
        }
        ConsentOneTimeCode row = opt.get();
        Instant now = Instant.now();
        if (row.isUsed() || now.isAfter(row.getExpiresAt())) {
            log.debug("Transaction completing | method=exchangeOpaqueCodeForSessionJwt | id=n/a");
            log.debug("Exiting exchangeOpaqueCodeForSessionJwt | result=Optional.empty");
            return Optional.empty();
        }
        row.setUsed(true);
        log.info("Executing DB query | method=save | param=consentRequestId={}", row.getConsentRequestId());
        consentOneTimeCodeRepository.save(row);
        log.info("DB query completed | method=save | completed");
        Optional<String> result = Optional.of(jwtTokenProvider.generateConsentSessionToken(row.getConsentRequestId()));
        log.debug("Transaction completing | method=exchangeOpaqueCodeForSessionJwt | id=n/a");
        log.debug("Exiting exchangeOpaqueCodeForSessionJwt | result=Optional present | token=****");
        return result;
    }
}
