package com.consentiq.controller;

import com.consentiq.model.dto.request.PublicConsentExchangeRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.PublicConsentInviteDetailResponse;
import com.consentiq.model.entity.ConsentInviteToken;
import com.consentiq.repository.ConsentInviteTokenRepository;
import com.consentiq.security.JwtTokenProvider;
import com.consentiq.service.CustomerChannelPreferenceService;
import com.consentiq.service.CustomerLanguagePreferenceService;
import com.consentiq.service.PublicConsentInviteService;
import com.consentiq.service.PublicConsentSessionService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/public/consent")
@RequiredArgsConstructor
public class PublicConsentSessionController {

    private static final Logger log = LoggerFactory.getLogger(PublicConsentSessionController.class);

    private static final String COOKIE_CONSENT_SESSION = "CONSENT_SESSION";

    private final PublicConsentSessionService publicConsentSessionService;
    private final JwtTokenProvider jwtTokenProvider;
    private final PublicConsentInviteService publicConsentInviteService;
    private final ConsentInviteTokenRepository consentInviteTokenRepository;
    private final CustomerLanguagePreferenceService customerLanguagePreferenceService;
    private final CustomerChannelPreferenceService customerChannelPreferenceService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @PostMapping("/exchange")
    public ResponseEntity<Map<String, String>> exchange(
            @Valid @RequestBody PublicConsentExchangeRequest body, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering exchange | params: codePresent={}", body.getCode() != null && !body.getCode().isBlank());
        log.info("User={} | action=exchange | entity=ConsentSession | id=n/a", cu);
        Optional<String> jwtOpt = publicConsentSessionService.exchangeOpaqueCodeForSessionJwt(body.getCode());
        if (jwtOpt.isEmpty()) {
            log.warn("Empty result returned | method=exchange | filter=jwtMissing | user={}", cu);
            ResponseEntity<Map<String, String>> bad =
                    ResponseEntity.badRequest().body(Map.of("error", "LINK_EXPIRED"));
            log.debug("Exiting exchange | result={}", bad.getStatusCode());
            return bad;
        }
        ResponseCookie cookie = ResponseCookie.from(COOKIE_CONSENT_SESSION, jwtOpt.get())
                .httpOnly(true)
                .path("/")
                .maxAge(Duration.ofSeconds(30 * 60))
                .sameSite("Lax")
                .build();
        ResponseEntity<Map<String, String>> ok =
                ResponseEntity.ok()
                        .header(HttpHeaders.SET_COOKIE, cookie.toString())
                        .body(Map.of("status", "ok"));
        log.debug("Exiting exchange | result={}", ok.getStatusCode());
        return ok;
    }

    @GetMapping("/request")
    public ResponseEntity<?> getRequest(
            @CookieValue(name = COOKIE_CONSENT_SESSION, required = false) String session,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getRequest | params: session=****");
        log.info("User={} | action=getRequest | entity=ConsentInvite | id=n/a", cu);
        Optional<Long> inviteIdOpt = jwtTokenProvider.validateConsentSessionAndGetRequestId(session);
        if (inviteIdOpt.isEmpty()) {
            log.warn("No record found | entity=ConsentSession | id=n/a | user={}", cu);
            ResponseEntity<?> unauthorized =
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "NOT_CONSENT_SESSION"));
            log.debug("Exiting getRequest | result={}", unauthorized.getStatusCode());
            return unauthorized;
        }
        PublicConsentInviteDetailResponse data =
                publicConsentInviteService.getInviteDetailsByInviteId(inviteIdOpt.get());
        if ("NOT_FOUND".equals(data.getState())) {
            log.warn("No record found | entity=ConsentInvite | id={} | user={}", inviteIdOpt.get(), cu);
            ResponseEntity<?> unauthorized =
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "NOT_CONSENT_SESSION"));
            log.debug("Exiting getRequest | result={}", unauthorized.getStatusCode());
            return unauthorized;
        }
        ResponseEntity<?> ok = ResponseEntity.ok(ApiResponse.success("Consent request loaded", data));
        log.debug("Exiting getRequest | result={}", ok.getStatusCode());
        return ok;
    }

    @PostMapping("/language-preference")
    public ResponseEntity<Map<String, Object>> saveLanguagePreference(
            @CookieValue(name = COOKIE_CONSENT_SESSION, required = false) String session,
            @RequestParam Long consentDbId,
            @RequestParam(required = false) List<String> lang,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering saveLanguagePreference | params: session=**** | consentDbId={} | langCount={}",
                consentDbId,
                lang != null ? lang.size() : 0);
        log.info("User={} | action=saveLanguagePreference | entity=LanguagePreference | id={}", cu, consentDbId);
        Optional<ConsentInviteToken> inviteOpt = resolveInviteFromSession(session);
        if (inviteOpt.isEmpty()) {
            log.warn("No record found | entity=ConsentInviteToken | id=n/a | user={}", cu);
            ResponseEntity<Map<String, Object>> unauthorized =
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                            .body(Map.of("error", "NOT_CONSENT_SESSION"));
            log.debug("Exiting saveLanguagePreference | result={}", unauthorized.getStatusCode());
            return unauthorized;
        }
        ConsentInviteToken invite = inviteOpt.get();
        if (!invite.getConsentDbId().equals(consentDbId)) {
            log.info("Branch taken | method=saveLanguagePreference | condition=consentMatch | value=false");
            ResponseEntity<Map<String, Object>> bad =
                    ResponseEntity.badRequest()
                            .body(Map.of("success", false, "message", "Token does not match the consent"));
            log.debug("Exiting saveLanguagePreference | result={}", bad.getStatusCode());
            return bad;
        }
        if (lang == null || lang.isEmpty()) {
            log.warn("Empty result returned | method=saveLanguagePreference | filter=noLanguages | user={}", cu);
            ResponseEntity<Map<String, Object>> bad =
                    ResponseEntity.badRequest()
                            .body(Map.of("success", false, "message", "Select at least one language"));
            log.debug("Exiting saveLanguagePreference | result={}", bad.getStatusCode());
            return bad;
        }
        try {
            customerLanguagePreferenceService.savePreference(invite.getToken(), consentDbId, lang);
        } catch (IllegalArgumentException e) {
            log.error(
                    "Exception in saveLanguagePreference | user={} | message={}",
                    cu,
                    e.getMessage(),
                    e);
            ResponseEntity<Map<String, Object>> bad =
                    ResponseEntity.badRequest()
                            .body(Map.of("success", false, "message", e.getMessage()));
            log.debug("Exiting saveLanguagePreference | result={}", bad.getStatusCode());
            return bad;
        } catch (Exception e) {
            log.error("Exception in saveLanguagePreference | user={} | message={}", cu, e.getMessage(), e);
            ResponseEntity<Map<String, Object>> err =
                    ResponseEntity.internalServerError()
                            .body(Map.of("success", false, "message", "Could not save preference. Please try again."));
            log.debug("Exiting saveLanguagePreference | result={}", err.getStatusCode());
            return err;
        }
        ResponseEntity<Map<String, Object>> ok =
                ResponseEntity.ok(Map.of("success", true, "message", "Language preference saved successfully"));
        log.debug("Exiting saveLanguagePreference | result={}", ok.getStatusCode());
        return ok;
    }

    @GetMapping("/channel-preference")
    public ResponseEntity<?> getChannelPreference(
            @CookieValue(name = COOKIE_CONSENT_SESSION, required = false) String session,
            @RequestParam Long consentDbId,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getChannelPreference | params: session=**** | consentDbId={}", consentDbId);
        log.info("User={} | action=getChannelPreference | entity=ChannelPreference | id={}", cu, consentDbId);
        Optional<ConsentInviteToken> inviteOpt = resolveInviteFromSession(session);
        if (inviteOpt.isEmpty()) {
            log.warn("No record found | entity=ConsentInviteToken | id=n/a | user={}", cu);
            ResponseEntity<?> unauthorized =
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "NOT_CONSENT_SESSION"));
            log.debug("Exiting getChannelPreference | result={}", unauthorized.getStatusCode());
            return unauthorized;
        }
        ConsentInviteToken invite = inviteOpt.get();
        if (!invite.getConsentDbId().equals(consentDbId)) {
            log.info("Branch taken | method=getChannelPreference | condition=consentMatch | value=false");
            ResponseEntity<?> bad =
                    ResponseEntity.badRequest()
                            .body(ApiResponse.error("Consent mismatch", "CONSENT_MISMATCH"));
            log.debug("Exiting getChannelPreference | result={}", bad.getStatusCode());
            return bad;
        }
        ResponseEntity<?> ok =
                ResponseEntity.ok(ApiResponse.success(
                        "Channel preference loaded",
                        customerChannelPreferenceService.getPreference(invite.getToken(), consentDbId)));
        log.debug("Exiting getChannelPreference | result={}", ok.getStatusCode());
        return ok;
    }

    @PostMapping("/channel-preference")
    public ResponseEntity<?> saveChannelPreference(
            @CookieValue(name = COOKIE_CONSENT_SESSION, required = false) String session,
            @RequestParam Long consentDbId,
            @RequestParam List<String> channels,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering saveChannelPreference | params: session=**** | consentDbId={} | channelCount={}",
                consentDbId,
                channels != null ? channels.size() : 0);
        log.info("User={} | action=saveChannelPreference | entity=ChannelPreference | id={}", cu, consentDbId);
        Optional<ConsentInviteToken> inviteOpt = resolveInviteFromSession(session);
        if (inviteOpt.isEmpty()) {
            log.warn("No record found | entity=ConsentInviteToken | id=n/a | user={}", cu);
            ResponseEntity<?> unauthorized =
                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "NOT_CONSENT_SESSION"));
            log.debug("Exiting saveChannelPreference | result={}", unauthorized.getStatusCode());
            return unauthorized;
        }
        ConsentInviteToken invite = inviteOpt.get();
        if (!invite.getConsentDbId().equals(consentDbId)) {
            log.info("Branch taken | method=saveChannelPreference | condition=consentMatch | value=false");
            ResponseEntity<?> bad =
                    ResponseEntity.badRequest()
                            .body(ApiResponse.error("Consent mismatch", "CONSENT_MISMATCH"));
            log.debug("Exiting saveChannelPreference | result={}", bad.getStatusCode());
            return bad;
        }
        ResponseEntity<?> ok =
                ResponseEntity.ok(ApiResponse.success(
                        "Channel preference saved",
                        customerChannelPreferenceService.savePreference(invite.getToken(), consentDbId, channels)));
        log.debug("Exiting saveChannelPreference | result={}", ok.getStatusCode());
        return ok;
    }

    private Optional<ConsentInviteToken> resolveInviteFromSession(String session) {
        log.debug("Entering resolveInviteFromSession | params: sessionPresent={}", StringUtils.hasText(session));
        if (!StringUtils.hasText(session)) {
            log.debug("Exiting resolveInviteFromSession | result=empty");
            return Optional.empty();
        }
        Optional<Long> inviteIdOpt = jwtTokenProvider.validateConsentSessionAndGetRequestId(session);
        if (inviteIdOpt.isEmpty()) {
            log.debug("Exiting resolveInviteFromSession | result=empty");
            return Optional.empty();
        }
        log.info("Executing DB query | method=findById | param={}", inviteIdOpt.get());
        Optional<ConsentInviteToken> out = consentInviteTokenRepository.findById(inviteIdOpt.get());
        log.info(
                "Query returned {} record(s) | method=findById | param={}",
                out.isPresent() ? 1 : 0,
                inviteIdOpt.get());
        log.debug("Exiting resolveInviteFromSession | result={}", out.isPresent() ? "present" : "empty");
        return out;
    }
}
