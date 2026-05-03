package com.consentiq.controller;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.UserRole;
import com.consentiq.model.dto.request.ConsentCreateRequest;
import com.consentiq.model.dto.request.ConsentReviewRequest;
import com.consentiq.model.dto.request.ConsentUpdateRequest;
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
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Locale;
import java.util.Map;

@RestController
@RequestMapping("/api/consents")
@RequiredArgsConstructor
@Slf4j
public class ConsentController {

    private final ConsentService consentService;

    @GetMapping("/my-consents")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<PagedResponse<ConsentResponse>>> getMyConsents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) ConsentStatus status,
            Authentication authentication) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("getMyConsents | user={} page={} size={} status={}", userId, page, size, status);
        return ResponseEntity.ok(
                ApiResponse.success("My consents retrieved successfully", consentService.getMyConsents(userId, page, size, status)));
    }

    @GetMapping("/stats/maker")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<MakerStatsResponse>> getMakerStats(Authentication authentication) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("getMakerStats | user={}", userId);
        return ResponseEntity.ok(ApiResponse.success("Maker statistics retrieved", consentService.getMakerStats(userId)));
    }

    @GetMapping("/stats/checker")
    @PreAuthorize("hasAnyRole('CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<CheckerStatsResponse>> getCheckerStats(Authentication authentication) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("getCheckerStats | user={}", userId);
        return ResponseEntity.ok(
                ApiResponse.success("Checker statistics retrieved", consentService.getCheckerStats(userId)));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<PagedResponse<ConsentResponse>>> getAllConsents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) ConsentStatus status,
            @RequestParam(required = false) ConsentCategory category,
            Authentication authentication) {
        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
        log.info(
                "getAllConsents | page={} size={} status={} category={} user={}",
                page,
                size,
                status,
                category,
                user.getId());
        PagedResponse<ConsentResponse> data =
                consentService.getAllConsents(page, size, status, category, user.getId(), user.getRole());
        return ResponseEntity.ok(ApiResponse.success("Consents retrieved successfully", data));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentResponse>> createConsent(
            @Valid @RequestBody ConsentCreateRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("createConsent | user={} name={}", userId, request.getConsentName());
        ConsentResponse created = consentService.createConsent(request, userId, http);
        return ResponseEntity.ok(ApiResponse.success("Consent created successfully as DRAFT", created));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ConsentResponse>> getConsentById(@PathVariable("id") Long id) {
        log.info("getConsentById | id={}", id);
        return ResponseEntity.ok(ApiResponse.success("Consent retrieved successfully", consentService.getConsentById(id)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ConsentResponse>> updateConsent(
            @PathVariable("id") Long id,
            @Valid @RequestBody ConsentUpdateRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("updateConsent | id={} user={}", id, userId);
        ConsentResponse updated = consentService.updateConsent(id, request, userId, http);
        return ResponseEntity.ok(ApiResponse.success("Consent updated successfully", updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteConsent(
            @PathVariable("id") Long id, Authentication authentication, HttpServletRequest http) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("deleteConsent | id={} user={}", id, userId);
        consentService.deleteConsent(id, userId, http);
        return ResponseEntity.ok(ApiResponse.success("Consent deleted successfully", null));
    }

    @PostMapping("/{id}/submit")
    public ResponseEntity<ApiResponse<ConsentResponse>> submitForApproval(
            @PathVariable("id") Long id, Authentication authentication, HttpServletRequest http) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("submitForApproval | id={} user={}", id, userId);
        ConsentResponse res = consentService.submitForApproval(id, userId, http);
        return ResponseEntity.ok(
                ApiResponse.success("Consent submitted for approval. Awaiting checker review.", res));
    }

    @PostMapping("/{id}/save-draft")
    public ResponseEntity<ApiResponse<ConsentResponse>> saveDraft(
            @PathVariable("id") Long id,
            @Valid @RequestBody ConsentUpdateRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("saveDraft | id={} user={}", id, userId);
        ConsentResponse res = consentService.saveDraft(id, request, userId, http);
        return ResponseEntity.ok(ApiResponse.success("Draft saved successfully", res));
    }

    @GetMapping("/pending-approval")
    @PreAuthorize("hasAnyRole('CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<List<ConsentResponse>>> getPendingApprovals(Authentication authentication) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("getPendingApprovals | user={}", userId);
        List<ConsentResponse> list = consentService.getPendingApprovals(userId);
        return ResponseEntity.ok(ApiResponse.success("Pending approvals retrieved", list));
    }

    @PostMapping("/{id}/review")
    @PreAuthorize("hasAnyRole('CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<ConsentResponse>> reviewConsent(
            @PathVariable("id") Long id,
            @Valid @RequestBody ConsentReviewRequest request,
            Authentication authentication,
            HttpServletRequest http) {
        Long checkerId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("reviewConsent | id={} action={}", id, request.getAction());
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
        return ResponseEntity.ok(ApiResponse.success(message, res));
    }

    @GetMapping("/{id}/diff")
    public ResponseEntity<ApiResponse<ConsentDiffResponse>> getConsentDiff(@PathVariable("id") Long id) {
        log.info("getConsentDiff | id={}", id);
        return ResponseEntity.ok(ApiResponse.success("Diff retrieved successfully", consentService.getConsentDiff(id)));
    }

    @GetMapping("/{id}/versions")
    public ResponseEntity<ApiResponse<List<ConsentVersionResponse>>> getVersionHistory(@PathVariable("id") Long id) {
        log.info("getVersionHistory | id={}", id);
        return ResponseEntity.ok(
                ApiResponse.success("Version history retrieved", consentService.getVersionHistory(id)));
    }

    @GetMapping("/generate-id")
    public ResponseEntity<ApiResponse<Map<String, String>>> generateConsentId() {
        log.info("generateConsentId");
        String preview = consentService.previewNextConsentId();
        return ResponseEntity.ok(ApiResponse.success("Next consent ID preview", Map.of("consentId", preview)));
    }
}
