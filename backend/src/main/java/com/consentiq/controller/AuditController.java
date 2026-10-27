package com.consentiq.controller;

import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.AuditLogResponse;
import com.consentiq.model.dto.response.MakerTrailResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.ReviewHistoryResponse;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.AuditService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/audit")
@RequiredArgsConstructor
public class AuditController {

    private static final Logger log = LoggerFactory.getLogger(AuditController.class);

    private final AuditService auditService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping("/my-activity")
    public ResponseEntity<ApiResponse<PagedResponse<AuditLogResponse>>> getMyActivity(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getMyActivity | params: page={} | size={}", page, size);
        log.info("User={} | action=getMyActivity | entity=Audit | id=n/a", cu);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        PagedResponse<AuditLogResponse> data = auditService.getMyActivity(userId, page, size);
        ResponseEntity<ApiResponse<PagedResponse<AuditLogResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Activity retrieved successfully", data));
        log.debug("Exiting getMyActivity | result={}", result.getStatusCode());
        return result;
    }

    /**
     * The signed-in checker's own review decisions, filtered server-side, with summary counts.
     * {@code from}/{@code to} are ISO-8601 instants; {@code to} is exclusive.
     */
    @GetMapping("/my-reviews")
    @PreAuthorize("hasAnyRole('CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<ReviewHistoryResponse>> getMyReviews(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size,
            @RequestParam(defaultValue = "ALL") String type,
            @RequestParam(defaultValue = "ALL") String decision,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Instant from,
            @RequestParam(required = false) Instant to,
            Authentication authentication,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getMyReviews | params: page={} | size={} | type={} | decision={}", page, size, type, decision);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        ReviewHistoryResponse data = auditService.getMyReviews(userId, page, size, type, decision, search, from, to);
        ResponseEntity<ApiResponse<ReviewHistoryResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Review history retrieved successfully", data));
        log.debug("Exiting getMyReviews | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/my-trail")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<MakerTrailResponse>> getMakerTrail(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size,
            @RequestParam(defaultValue = "ALL") String scope,
            @RequestParam(defaultValue = "ALL") String type,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Instant from,
            @RequestParam(required = false) Instant to,
            Authentication authentication,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getMakerTrail | params: page={} | size={} | scope={} | type={}", page, size, scope, type);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        MakerTrailResponse data = auditService.getMakerTrail(userId, page, size, scope, type, search, from, to);
        ResponseEntity<ApiResponse<MakerTrailResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Audit trail retrieved successfully", data));
        log.debug("Exiting getMakerTrail | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/consent/{id}")
    public ResponseEntity<ApiResponse<List<AuditLogResponse>>> getConsentAuditTrail(
            @PathVariable("id") Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getConsentAuditTrail | params: id={}", id);
        log.info("User={} | action=getConsentAuditTrail | entity=Consent | id={}", cu, id);
        List<AuditLogResponse> data = auditService.getConsentAuditTrail(id);
        ResponseEntity<ApiResponse<List<AuditLogResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Audit trail retrieved", data));
        log.debug("Exiting getConsentAuditTrail | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/entity/{entityType}/{id}")
    public ResponseEntity<ApiResponse<List<AuditLogResponse>>> getEntityAuditTrail(
            @PathVariable("entityType") String entityType,
            @PathVariable("id") Long id,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getEntityAuditTrail | params: entityType={} | id={}", entityType, id);
        log.info("User={} | action=getEntityAuditTrail | entity={} | id={}", cu, entityType, id);
        List<AuditLogResponse> data = auditService.getAuditTrail(entityType, id);
        ResponseEntity<ApiResponse<List<AuditLogResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Audit trail retrieved", data));
        log.debug("Exiting getEntityAuditTrail | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<PagedResponse<AuditLogResponse>>> getAllActivity(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getAllActivity | params: page={} | size={}", page, size);
        log.info("User={} | action=getAllActivity | entity=Audit | id=n/a", cu);
        PagedResponse<AuditLogResponse> data = auditService.getAllActivity(page, size);
        ResponseEntity<ApiResponse<PagedResponse<AuditLogResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("All activity retrieved", data));
        log.debug("Exiting getAllActivity | result={}", result.getStatusCode());
        return result;
    }
}
