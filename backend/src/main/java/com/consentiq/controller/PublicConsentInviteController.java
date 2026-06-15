package com.consentiq.controller;

import com.consentiq.model.dto.request.PublicConsentRespondRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.PublicConsentInviteDetailResponse;
import com.consentiq.model.entity.ConsentInviteToken;
import com.consentiq.repository.ConsentInviteTokenRepository;
import com.consentiq.security.JwtTokenProvider;
import com.consentiq.service.PublicConsentInviteService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/public/consent-invite")
@RequiredArgsConstructor
public class PublicConsentInviteController {

    private static final Logger log = LoggerFactory.getLogger(PublicConsentInviteController.class);

    private static final String COOKIE_CONSENT_SESSION = "CONSENT_SESSION";

    private final PublicConsentInviteService publicConsentInviteService;
    private final JwtTokenProvider jwtTokenProvider;
    private final ConsentInviteTokenRepository consentInviteTokenRepository;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping
    public ResponseEntity<?> getDetails(
            @CookieValue(name = COOKIE_CONSENT_SESSION, required = false) String session,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getDetails | params: session=****");
        log.info("User={} | action=getDetails | entity=ConsentInvite | id=n/a", cu);
        Optional<Long> inviteIdOpt = jwtTokenProvider.validateConsentSessionAndGetRequestId(session);
        if (inviteIdOpt.isEmpty()) {
            log.warn("No record found | entity=ConsentSession | id=n/a | user={}", cu);
            ResponseEntity<?> unauthorized =
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "NOT_CONSENT_SESSION"));
            log.debug("Exiting getDetails | result={}", unauthorized.getStatusCode());
            return unauthorized;
        }
        PublicConsentInviteDetailResponse data =
                publicConsentInviteService.getInviteDetailsByInviteId(inviteIdOpt.get());
        if ("NOT_FOUND".equals(data.getState())) {
            log.warn("No record found | entity=ConsentInvite | id={} | user={}", inviteIdOpt.get(), cu);
            ResponseEntity<?> unauthorized =
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "NOT_CONSENT_SESSION"));
            log.debug("Exiting getDetails | result={}", unauthorized.getStatusCode());
            return unauthorized;
        }
        ResponseEntity<?> ok = ResponseEntity.ok(ApiResponse.success("Consent request loaded", data));
        log.debug("Exiting getDetails | result={}", ok.getStatusCode());
        return ok;
    }

    @PostMapping("/respond")
    public ResponseEntity<?> respond(
            @CookieValue(name = COOKIE_CONSENT_SESSION, required = false) String session,
            @Valid @RequestBody PublicConsentRespondRequest request,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering respond | params: session=**** | decision={}", request.getDecision());
        log.info("User={} | action=respond | entity=ConsentInvite | id=n/a", cu);
        Optional<Long> inviteIdOpt = jwtTokenProvider.validateConsentSessionAndGetRequestId(session);
        if (inviteIdOpt.isEmpty()) {
            log.warn("No record found | entity=ConsentSession | id=n/a | user={}", cu);
            ResponseEntity<?> unauthorized =
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "NOT_CONSENT_SESSION"));
            log.debug("Exiting respond | result={}", unauthorized.getStatusCode());
            return unauthorized;
        }
        log.info("Executing DB query | method=findById | param={}", inviteIdOpt.get());
        Optional<ConsentInviteToken> inviteOpt = consentInviteTokenRepository.findById(inviteIdOpt.get());
        int inviteCount = inviteOpt.isPresent() ? 1 : 0;
        log.info("Query returned {} record(s) | method=findById | param={}", inviteCount, inviteIdOpt.get());
        if (inviteOpt.isEmpty()) {
            log.warn("No record found | entity=ConsentInviteToken | id={} | user={}", inviteIdOpt.get(), cu);
            ResponseEntity<?> unauthorized =
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "NOT_CONSENT_SESSION"));
            log.debug("Exiting respond | result={}", unauthorized.getStatusCode());
            return unauthorized;
        }
        try {
            PublicConsentInviteDetailResponse data =
                    publicConsentInviteService.respondWithLoadedInvite(inviteOpt.get(), request.getDecision());
            ResponseEntity<?> ok =
                    ResponseEntity.ok(ApiResponse.success("Your response has been recorded. Thank you.", data));
            log.debug("Exiting respond | result={}", ok.getStatusCode());
            return ok;
        } catch (IllegalArgumentException ex) {
            log.error("Exception in respond | user={} | message={}", cu, ex.getMessage(), ex);
            ResponseEntity<?> bad =
                    ResponseEntity.badRequest().body(ApiResponse.error(ex.getMessage(), "CONSENT_RESPOND_VALIDATION"));
            log.debug("Exiting respond | result={}", bad.getStatusCode());
            return bad;
        }
    }
}
