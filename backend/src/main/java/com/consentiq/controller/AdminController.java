package com.consentiq.controller;

import com.consentiq.model.dto.request.RecordOnBehalfConsentRequest;
import com.consentiq.model.dto.request.SendConsentLinkRequest;
import com.consentiq.model.dto.response.*;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.AdminService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@Slf4j
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/dashboard/stats")
    public ResponseEntity<ApiResponse<AdminDashboardStatsResponse>> dashboardStats() {
        AdminDashboardStatsResponse data = adminService.getDashboardStats();
        return ResponseEntity.ok(ApiResponse.success("Admin dashboard statistics", data));
    }

    @GetMapping("/dashboard/mis")
    public ResponseEntity<ApiResponse<AdminMisDashboardResponse>> misDashboard() {
        AdminMisDashboardResponse data = adminService.getMisDashboard();
        return ResponseEntity.ok(ApiResponse.success("MIS dashboard metrics", data));
    }

    @GetMapping("/customers")
    public ResponseEntity<ApiResponse<PagedResponse<AdminCustomerRowResponse>>> customers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String mobileNumber,
            @RequestParam(required = false) String customerId,
            @RequestParam(required = false) String consentStatus,
            @RequestParam(defaultValue = "updatedAt") String sortBy,
            @RequestParam(defaultValue = "DESC") String sortDir) {
        PagedResponse<AdminCustomerRowResponse> data =
                adminService.getCustomers(page, size, mobileNumber, customerId, consentStatus, sortBy, sortDir);
        return ResponseEntity.ok(ApiResponse.success("Customers retrieved", data));
    }

    @GetMapping(value = "/customers/export", produces = "text/csv")
    public void exportCustomers(
            @RequestParam(required = false) String mobileNumber,
            @RequestParam(required = false) String customerId,
            @RequestParam(required = false) String consentStatus,
            HttpServletResponse response)
            throws IOException {
        String filename = "customers-export.csv";
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        response.setContentType("text/csv");
        response.setHeader(
                "Content-Disposition",
                "attachment; filename=\"" + filename + "\"; filename*=UTF-8''" + URLEncoder.encode(filename, StandardCharsets.UTF_8));
        adminService.exportCustomersCsv(response.getOutputStream(), mobileNumber, customerId, consentStatus);
    }

    @GetMapping("/consent-templates")
    public ResponseEntity<ApiResponse<List<AdminConsentTemplateResponse>>> consentTemplates() {
        return ResponseEntity.ok(ApiResponse.success("Consent templates", adminService.listConsentTemplates()));
    }

    @GetMapping("/capture-consent/search")
    public ResponseEntity<ApiResponse<CaptureConsentSearchResponse>> captureSearch(@RequestParam String q) {
        return ResponseEntity.ok(ApiResponse.success("Customer found", adminService.searchCustomerForCapture(q)));
    }

    @PostMapping("/capture-consent/send-link")
    public ResponseEntity<ApiResponse<SendConsentLinkResponse>> sendLink(
            @Valid @RequestBody SendConsentLinkRequest request, Authentication authentication) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        SendConsentLinkResponse data = adminService.sendCaptureLink(request, userId);
        return ResponseEntity.ok(ApiResponse.success(data.getMessage(), data));
    }

    @PostMapping("/capture-consent/record")
    public ResponseEntity<ApiResponse<Void>> record(
            @Valid @RequestBody RecordOnBehalfConsentRequest request, Authentication authentication) {
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        adminService.recordOnBehalfConsent(request, userId);
        return ResponseEntity.ok(ApiResponse.success("On-behalf consent recorded successfully", null));
    }
}
