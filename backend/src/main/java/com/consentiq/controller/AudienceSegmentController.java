package com.consentiq.controller;

import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.AudienceSegmentResponse;
import com.consentiq.service.CustomerSegmentationService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/segments")
@RequiredArgsConstructor
public class AudienceSegmentController {

    private static final Logger log = LoggerFactory.getLogger(AudienceSegmentController.class);

    private final CustomerSegmentationService segmentationService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('MAKER','CHECKER','ADMIN')")
    public ResponseEntity<ApiResponse<List<AudienceSegmentResponse>>> listSegments(HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering listSegments | params: none");
        log.info("User={} | action=listSegments | entity=Segment | id=n/a", cu);
        List<AudienceSegmentResponse> data = segmentationService.listAudienceSegments();
        ResponseEntity<ApiResponse<List<AudienceSegmentResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Audience segments retrieved", data));
        log.debug("Exiting listSegments | result={}", result.getStatusCode());
        return result;
    }
}
