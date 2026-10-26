package com.consentiq.controller;

import com.consentiq.model.dto.request.AudienceDrillDownPreviewRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.AudienceDrillDownPreviewResponse;
import com.consentiq.service.CustomerSegmentationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/consent-rules")
@RequiredArgsConstructor
public class ConsentRuleAudiencePreviewController {

    private static final Logger log = LoggerFactory.getLogger(ConsentRuleAudiencePreviewController.class);

    private final CustomerSegmentationService segmentationService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @PostMapping("/audience-drill-down-preview")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<AudienceDrillDownPreviewResponse>> previewAudienceDrillDown(
            @Valid @RequestBody AudienceDrillDownPreviewRequest request,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering previewAudienceDrillDown | params: ruleType={}", request.getRuleType());
        AudienceDrillDownPreviewResponse data = segmentationService.previewDrillDownCounts(
                request.getRuleType(),
                request.getPredefinedScenario(),
                request.getSelectedSegmentCodes());
        return ResponseEntity.ok(ApiResponse.success("Audience drill-down preview", data));
    }
}
