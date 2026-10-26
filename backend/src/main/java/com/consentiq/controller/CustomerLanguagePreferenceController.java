package com.consentiq.controller;

import com.consentiq.service.CustomerLanguagePreferenceService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/public/language-preference")
@RequiredArgsConstructor
public class CustomerLanguagePreferenceController {

    private static final Logger log = LoggerFactory.getLogger(CustomerLanguagePreferenceController.class);

    private final CustomerLanguagePreferenceService customerLanguagePreferenceService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> saveLanguagePreference(
            @RequestParam String token,
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
                "Entering saveLanguagePreference | params: token=**** | consentDbId={} | langCount={}",
                consentDbId,
                lang != null ? lang.size() : 0);
        log.info("User={} | action=saveLanguagePreference | entity=LanguagePreference | id={}", cu, consentDbId);

        if (!StringUtils.hasText(token)) {
            log.warn("Empty result returned | method=saveLanguagePreference | filter=tokenBlank | user={}", cu);
            ResponseEntity<Map<String, Object>> bad =
                    ResponseEntity.badRequest()
                            .body(Map.of("success", false, "message", "Invite token is required"));
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

        log.info(
                "Processing request | entity=LanguagePreference | consentDbId={} | languageCount={}",
                consentDbId,
                lang.size());

        try {
            customerLanguagePreferenceService.savePreference(token, consentDbId, lang);
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
}
