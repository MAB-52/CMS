package com.consentiq.controller;

import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.AuditLogResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.AuditService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/audit")
@RequiredArgsConstructor
@Slf4j
public class AuditController {

    private final AuditService auditService;

    @GetMapping("/my-activity")
    public ResponseEntity<ApiResponse<PagedResponse<AuditLogResponse>>> getMyActivity(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        log.info("getMyActivity | user={} page={} size={}", userId, page, size);
        return ResponseEntity.ok(
                ApiResponse.success("Activity retrieved successfully", auditService.getMyActivity(userId, page, size)));
    }

    @GetMapping("/consent/{id}")
    public ResponseEntity<ApiResponse<List<AuditLogResponse>>> getConsentAuditTrail(@PathVariable("id") Long id) {
        log.info("getConsentAuditTrail | consentDbId={}", id);
        return ResponseEntity.ok(
                ApiResponse.success("Audit trail retrieved", auditService.getConsentAuditTrail(id)));
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<PagedResponse<AuditLogResponse>>> getAllActivity(
            @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        log.info("getAllActivity | page={} size={}", page, size);
        return ResponseEntity.ok(ApiResponse.success("All activity retrieved", auditService.getAllActivity(page, size)));
    }
}
