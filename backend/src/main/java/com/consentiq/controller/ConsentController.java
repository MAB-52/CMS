package com.consentiq.controller;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.UserRole;
import com.consentiq.model.dto.request.ConsentCreateRequest;
import com.consentiq.model.dto.request.ConsentReviewRequest;
import com.consentiq.model.dto.request.ConsentUpdateRequest;
import com.consentiq.model.dto.response.AdminConsentTemplateResponse;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.CheckerStatsResponse;
import com.consentiq.model.dto.response.ConsentDiffResponse;
import com.consentiq.model.dto.response.ConsentResponse;
import com.consentiq.model.dto.response.ConsentVersionResponse;
import com.consentiq.model.dto.response.MakerStatsResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.ConsentService;
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
import java.util.Map;

@RestController
@RequestMapping("/api/consents")
@RequiredArgsConstructor
public class ConsentController {

    private static final Logger log = LoggerFactory.getLogger(ConsentController.class);

    private final ConsentService consentService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping("/my-consents")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<PagedResponse<ConsentResponse>>> getMyConsents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) ConsentStatus status,
            Authentication authentication,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getMyConsents | params: page={} | size={} | status={}", page, size, status);
        log.info("User={} | action=getMyConsents | entity=Consent | id=n/a", cu);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        PagedResponse<ConsentResponse> data = consentService.getMyConsents(userId, page, size, status);
        ResponseEntity<ApiResponse<PagedResponse<ConsentResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("My consents retrieved successfully", data));
        log.debug("Exiting getMyConsents | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/stats/maker")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<MakerStatsResponse>> getMakerStats(
            Authentication authentication, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getMakerStats | params: none");
        log.info("User={} | action=getMakerStats | entity=Consent | id=n/a", cu);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        MakerStatsResponse data = consentService.getMakerStats(userId);
        ResponseEntity<ApiResponse<MakerStatsResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Maker statistics retrieved", data));
        log.debug("Exiting getMakerStats | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/stats/checker")
    @PreAuthorize("hasAnyRole('CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<CheckerStatsResponse>> getCheckerStats(
            Authentication authentication, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getCheckerStats | params: none");
        log.info("User={} | action=getCheckerStats | entity=Consent | id=n/a", cu);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        CheckerStatsResponse data = consentService.getCheckerStats(userId);
        ResponseEntity<ApiResponse<CheckerStatsResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Checker statistics retrieved", data));
        log.debug("Exiting getCheckerStats | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<PagedResponse<ConsentResponse>>> getAllConsents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) ConsentStatus status,
            @RequestParam(required = false) ConsentCategory category,
            Authentication authentication,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering getAllConsents | params: page={} | size={} | status={} | category={}",
                page,
                size,
                status,
                category);
        log.info("User={} | action=getAllConsents | entity=Consent | id=n/a", cu);
        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
        PagedResponse<ConsentResponse> data =
                consentService.getAllConsents(page, size, status, category, user.getId(), user.getRole());
        ResponseEntity<ApiResponse<PagedResponse<ConsentResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Consents retrieved successfully", data));
        log.debug("Exiting getAllConsents | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentResponse>> createConsent(
            @Valid @RequestBody ConsentCreateRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering createConsent | params: consentName={}", request.getConsentName());
        log.info("User={} | action=createConsent | entity=Consent | id=n/a", cu);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        ConsentResponse created = consentService.createConsent(request, userId, http);
        ResponseEntity<ApiResponse<ConsentResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Consent created successfully as DRAFT", created));
        log.debug("Exiting createConsent | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ConsentResponse>> getConsentById(
            @PathVariable("id") Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getConsentById | params: id={}", id);
        log.info("User={} | action=getConsentById | entity=Consent | id={}", cu, id);
        ConsentResponse data = consentService.getConsentById(id);
        ResponseEntity<ApiResponse<ConsentResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Consent retrieved successfully", data));
        log.debug("Exiting getConsentById | result={}", result.getStatusCode());
        return result;
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ConsentResponse>> updateConsent(
            @PathVariable("id") Long id,
            @Valid @RequestBody ConsentUpdateRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering updateConsent | params: id={}", id);
        log.info("User={} | action=updateConsent | entity=Consent | id={}", cu, id);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        ConsentResponse updated = consentService.updateConsent(id, request, userId, http);
        ResponseEntity<ApiResponse<ConsentResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Consent updated successfully", updated));
        log.debug("Exiting updateConsent | result={}", result.getStatusCode());
        return result;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteConsent(
            @PathVariable("id") Long id, Authentication authentication, HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering deleteConsent | params: id={}", id);
        log.info("User={} | action=deleteConsent | entity=Consent | id={}", cu, id);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        consentService.deleteConsent(id, userId, http);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.ok(ApiResponse.success("Consent deleted successfully", null));
        log.debug("Exiting deleteConsent | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/{id}/submit")
    public ResponseEntity<ApiResponse<ConsentResponse>> submitForApproval(
            @PathVariable("id") Long id, Authentication authentication, HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering submitForApproval | params: id={}", id);
        log.info("User={} | action=submitForApproval | entity=Consent | id={}", cu, id);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        ConsentResponse res = consentService.submitForApproval(id, userId, http);
        ResponseEntity<ApiResponse<ConsentResponse>> result =
                ResponseEntity.ok(
                        ApiResponse.success("Consent submitted for approval. Awaiting checker review.", res));
        log.debug("Exiting submitForApproval | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/{id}/save-draft")
    public ResponseEntity<ApiResponse<ConsentResponse>> saveDraft(
            @PathVariable("id") Long id,
            @Valid @RequestBody ConsentUpdateRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering saveDraft | params: id={}", id);
        log.info("User={} | action=saveDraft | entity=Consent | id={}", cu, id);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        ConsentResponse res = consentService.saveDraft(id, request, userId, http);
        ResponseEntity<ApiResponse<ConsentResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Draft saved successfully", res));
        log.debug("Exiting saveDraft | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/pending-approval")
    @PreAuthorize("hasAnyRole('CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<List<ConsentResponse>>> getPendingApprovals(
            Authentication authentication, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getPendingApprovals | params: none");
        log.info("User={} | action=getPendingApprovals | entity=Consent | id=n/a", cu);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        List<ConsentResponse> list = consentService.getPendingApprovals(userId);
        ResponseEntity<ApiResponse<List<ConsentResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Pending approvals retrieved", list));
        log.debug("Exiting getPendingApprovals | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/{id}/review")
    @PreAuthorize("hasAnyRole('CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentResponse>> reviewConsent(
            @PathVariable("id") Long id,
            @Valid @RequestBody ConsentReviewRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering reviewConsent | params: id={} | action={}", id, request.getAction());
        log.info("User={} | action=reviewConsent | entity=Consent | id={}", cu, id);
        Long checkerId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        ConsentResponse res = consentService.reviewConsent(id, request, checkerId, http);
        String action = request.getAction().trim().toUpperCase(Locale.ROOT);
        String message =
                switch (action) {
                    case "APPROVE" -> "Consent approved successfully";
                    case "REJECT" -> "Consent rejected";
                    case "REQUEST_REVISION" -> "Revision request sent to maker";
                    case "PUBLISH" -> "Consent is now live and published";
                    default -> "Review processed";
                };
        ResponseEntity<ApiResponse<ConsentResponse>> result =
                ResponseEntity.ok(ApiResponse.success(message, res));
        log.debug("Exiting reviewConsent | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/{id}/diff")
    public ResponseEntity<ApiResponse<ConsentDiffResponse>> getConsentDiff(
            @PathVariable("id") Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getConsentDiff | params: id={}", id);
        log.info("User={} | action=getConsentDiff | entity=Consent | id={}", cu, id);
        ConsentDiffResponse data = consentService.getConsentDiff(id);
        ResponseEntity<ApiResponse<ConsentDiffResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Diff retrieved successfully", data));
        log.debug("Exiting getConsentDiff | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/{id}/versions")
    public ResponseEntity<ApiResponse<List<ConsentVersionResponse>>> getVersionHistory(
            @PathVariable("id") Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getVersionHistory | params: id={}", id);
        log.info("User={} | action=getVersionHistory | entity=Consent | id={}", cu, id);
        List<ConsentVersionResponse> data = consentService.getVersionHistory(id);
        ResponseEntity<ApiResponse<List<ConsentVersionResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Version history retrieved", data));
        log.debug("Exiting getVersionHistory | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/generate-id")
    public ResponseEntity<ApiResponse<Map<String, String>>> generateConsentId(HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering generateConsentId | params: none");
        log.info("User={} | action=generateConsentId | entity=Consent | id=n/a", cu);
        String preview = consentService.previewNextConsentId();
        ResponseEntity<ApiResponse<Map<String, String>>> result =
                ResponseEntity.ok(ApiResponse.success("Next consent ID preview", Map.of("consentId", preview)));
        log.debug("Exiting generateConsentId | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/workflow-templates")
    @PreAuthorize("hasAnyRole('MAKER','CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<List<AdminConsentTemplateResponse>>> workflowTemplates(
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering workflowTemplates | params: none");
        log.info("User={} | action=workflowTemplates | entity=Consent | id=n/a", cu);
        List<AdminConsentTemplateResponse> data = consentService.listWorkflowTemplates();
        ResponseEntity<ApiResponse<List<AdminConsentTemplateResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Templates retrieved", data));
        log.debug("Exiting workflowTemplates | result={}", result.getStatusCode());
        return result;
    }
}
