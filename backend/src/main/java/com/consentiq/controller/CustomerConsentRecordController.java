package com.consentiq.controller;

import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.CustomerConsentRecordResponse;
import com.consentiq.model.dto.response.CustomerConsentRecordStatsResponse;
import com.consentiq.service.CustomerConsentRecordService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/consent-records")
@RequiredArgsConstructor
public class CustomerConsentRecordController {

    private static final Logger log = LoggerFactory.getLogger(CustomerConsentRecordController.class);

    private final CustomerConsentRecordService customerConsentRecordService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping("/template/{consentDbId}")
    public ResponseEntity<ApiResponse<List<CustomerConsentRecordResponse>>> listByTemplate(
            @PathVariable Long consentDbId, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering listByTemplate | params: consentDbId={}", consentDbId);
        log.info("User={} | action=listByTemplate | entity=ConsentRecord | id={}", cu, consentDbId);
        List<CustomerConsentRecordResponse> data =
                customerConsentRecordService.getRecordsForTemplate(consentDbId);
        ResponseEntity<ApiResponse<List<CustomerConsentRecordResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Consent records for template", data));
        log.debug("Exiting listByTemplate | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<ApiResponse<List<CustomerConsentRecordResponse>>> listByCustomer(
            @PathVariable String customerId, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering listByCustomer | params: customerId={}", customerId);
        log.info("User={} | action=listByCustomer | entity=ConsentRecord | id={}", cu, customerId);
        List<CustomerConsentRecordResponse> data =
                customerConsentRecordService.getRecordsForCustomer(customerId);
        ResponseEntity<ApiResponse<List<CustomerConsentRecordResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Consent records for customer", data));
        log.debug("Exiting listByCustomer | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/template/{consentDbId}/stats")
    public ResponseEntity<ApiResponse<CustomerConsentRecordStatsResponse>> statsByTemplate(
            @PathVariable Long consentDbId, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering statsByTemplate | params: consentDbId={}", consentDbId);
        log.info("User={} | action=statsByTemplate | entity=ConsentRecord | id={}", cu, consentDbId);
        CustomerConsentRecordStatsResponse data =
                customerConsentRecordService.getStatsForTemplate(consentDbId);
        ResponseEntity<ApiResponse<CustomerConsentRecordStatsResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Consent record stats for template", data));
        log.debug("Exiting statsByTemplate | result={}", result.getStatusCode());
        return result;
    }
}
