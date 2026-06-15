package com.consentiq.controller;

import com.consentiq.enums.ConsentRuleStatus;
import com.consentiq.model.dto.request.ConsentRuleUpsertRequest;
import com.consentiq.model.dto.request.WorkflowReviewRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.ConsentRuleResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.ConsentRuleService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api/consent-rules")
@RequiredArgsConstructor
public class ConsentRuleController {

    private static final Logger log = LoggerFactory.getLogger(ConsentRuleController.class);

    private final ConsentRuleService consentRuleService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentRuleResponse>> create(
            @Valid @RequestBody ConsentRuleUpsertRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering create | params: ruleName={}", request.getRuleName());
        log.info("User={} | action=create | entity=ConsentRule | id=n/a", cu);
        Long userId = extractUserId(authentication);
        ConsentRuleResponse data = consentRuleService.createRule(request, userId, http);
        ResponseEntity<ApiResponse<ConsentRuleResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Rule created as draft", data));
        log.debug("Exiting create | result={}", result.getStatusCode());
        return result;
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentRuleResponse>> update(
            @PathVariable Long id,
            @Valid @RequestBody ConsentRuleUpsertRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering update | params: id={}", id);
        log.info("User={} | action=update | entity=ConsentRule | id={}", cu, id);
        Long userId = extractUserId(authentication);
        ConsentRuleResponse data = consentRuleService.updateRule(id, request, userId, http);
        ResponseEntity<ApiResponse<ConsentRuleResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Rule updated", data));
        log.debug("Exiting update | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/{id}/save-draft")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentRuleResponse>> saveDraft(
            @PathVariable Long id,
            @Valid @RequestBody ConsentRuleUpsertRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering saveDraft | params: id={}", id);
        log.info("User={} | action=saveDraft | entity=ConsentRule | id={}", cu, id);
        Long userId = extractUserId(authentication);
        ConsentRuleResponse data = consentRuleService.saveDraft(id, request, userId, http);
        ResponseEntity<ApiResponse<ConsentRuleResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Draft saved", data));
        log.debug("Exiting saveDraft | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/{id}/submit")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentRuleResponse>> submit(
            @PathVariable Long id,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering submit | params: id={}", id);
        log.info("User={} | action=submit | entity=ConsentRule | id={}", cu, id);
        Long userId = extractUserId(authentication);
        ConsentRuleResponse data = consentRuleService.submitForApproval(id, userId, http);
        ResponseEntity<ApiResponse<ConsentRuleResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Rule submitted for checker approval", data));
        log.debug("Exiting submit | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/{id}/publish-live")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentRuleResponse>> publishLive(
            @PathVariable Long id,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering publishLive | params: id={}", id);
        log.info("User={} | action=publishLive | entity=ConsentRule | id={}", cu, id);
        Long userId = extractUserId(authentication);
        ConsentRuleResponse data = consentRuleService.publishLive(id, userId, http);
        ResponseEntity<ApiResponse<ConsentRuleResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Rule is now live", data));
        log.debug("Exiting publishLive | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/{id}/review")
    @PreAuthorize("hasAnyRole('CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentRuleResponse>> review(
            @PathVariable Long id,
            @Valid @RequestBody WorkflowReviewRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering review | params: id={} | action={}", id, request.getAction());
        log.info("User={} | action=review | entity=ConsentRule | id={}", cu, id);
        Long checkerId = extractUserId(authentication);
        ConsentRuleResponse res = consentRuleService.reviewRule(id, request, checkerId, http);
        String action = request.getAction().trim().toUpperCase(Locale.ROOT);
        String message =
                switch (action) {
                    case "APPROVE" -> "Rule approved";
                    case "REJECT" -> "Rule rejected";
                    case "REQUEST_REVISION" -> "Revision requested";
                    default -> "Review processed";
                };
        ResponseEntity<ApiResponse<ConsentRuleResponse>> result =
                ResponseEntity.ok(ApiResponse.success(message, res));
        log.debug("Exiting review | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/pending")
    @PreAuthorize("hasAnyRole('CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<List<ConsentRuleResponse>>> pending(HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering pending | params: none");
        log.info("User={} | action=pending | entity=ConsentRule | id=n/a", cu);
        List<ConsentRuleResponse> data = consentRuleService.listPendingForChecker();
        ResponseEntity<ApiResponse<List<ConsentRuleResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Pending rules retrieved", data));
        log.debug("Exiting pending | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ConsentRuleResponse>> getById(
            @PathVariable Long id, Authentication authentication, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getById | params: id={}", id);
        log.info("User={} | action=getById | entity=ConsentRule | id={}", cu, id);
        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
        ConsentRuleResponse data = consentRuleService.getById(id, user.getId(), user.getRole());
        ResponseEntity<ApiResponse<ConsentRuleResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Rule retrieved", data));
        log.debug("Exiting getById | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/mine")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<PagedResponse<ConsentRuleResponse>>> mine(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(required = false) ConsentRuleStatus status,
            Authentication authentication,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering mine | params: page={} | size={} | status={}", page, size, status);
        log.info("User={} | action=mine | entity=ConsentRule | id=n/a", cu);
        Long userId = extractUserId(authentication);
        PagedResponse<ConsentRuleResponse> data = consentRuleService.listForMaker(userId, status, page, size);
        ResponseEntity<ApiResponse<PagedResponse<ConsentRuleResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Rules retrieved", data));
        log.debug("Exiting mine | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/admin/engine")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<PagedResponse<ConsentRuleResponse>>> adminEngine(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering adminEngine | params: page={} | size={}", page, size);
        log.info("User={} | action=adminEngine | entity=ConsentRule | id=n/a", cu);
        PagedResponse<ConsentRuleResponse> data = consentRuleService.listApprovedForAdminRuleEngine(page, size);
        ResponseEntity<ApiResponse<PagedResponse<ConsentRuleResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Rules retrieved", data));
        log.debug("Exiting adminEngine | result={}", result.getStatusCode());
        return result;
    }

    private Long extractUserId(Authentication authentication) {
        return ((UserDetailsImpl) authentication.getPrincipal()).getId();
    }
}
