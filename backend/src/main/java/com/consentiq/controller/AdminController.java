package com.consentiq.controller;

import com.consentiq.model.dto.request.RecordOnBehalfConsentRequest;
import com.consentiq.model.dto.request.SendConsentLinkRequest;
import com.consentiq.model.dto.response.AdminConsentTemplateResponse;
import com.consentiq.model.dto.response.AdminCustomerRowResponse;
import com.consentiq.model.dto.response.AdminDashboardStatsResponse;
import com.consentiq.model.dto.response.AdminMisDashboardResponse;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.CaptureConsentSearchResponse;
import com.consentiq.model.dto.response.CustomerChannelPreferenceResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.SendConsentLinkResponse;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.AdminService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private static final Logger log = LoggerFactory.getLogger(AdminController.class);

    private final AdminService adminService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping("/dashboard/stats")
    public ResponseEntity<ApiResponse<AdminDashboardStatsResponse>> dashboardStats(HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering dashboardStats | params: none");
        log.info("User={} | action=dashboardStats | entity=Admin | id=n/a", cu);
        AdminDashboardStatsResponse data = adminService.getDashboardStats();
        ResponseEntity<ApiResponse<AdminDashboardStatsResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Admin dashboard statistics", data));
        log.debug("Exiting dashboardStats | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/dashboard/mis")
    public ResponseEntity<ApiResponse<AdminMisDashboardResponse>> misDashboard(HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering misDashboard | params: none");
        log.info("User={} | action=misDashboard | entity=Admin | id=n/a", cu);
        AdminMisDashboardResponse data = adminService.getMisDashboard();
        ResponseEntity<ApiResponse<AdminMisDashboardResponse>> result =
                ResponseEntity.ok(ApiResponse.success("MIS dashboard metrics", data));
        log.debug("Exiting misDashboard | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/customers")
    public ResponseEntity<ApiResponse<PagedResponse<AdminCustomerRowResponse>>> customers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String mobileNumber,
            @RequestParam(required = false) String customerId,
            @RequestParam(required = false) String consentStatus,
            @RequestParam(defaultValue = "updatedAt") String sortBy,
            @RequestParam(defaultValue = "DESC") String sortDir,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering customers | params: page={} | size={} | mobileNumber={} | customerId={} | consentStatus={} | sortBy={} | sortDir={}",
                page,
                size,
                mobileNumber,
                customerId,
                consentStatus,
                sortBy,
                sortDir);
        log.info("User={} | action=customers | entity=Customer | id=n/a", cu);
        PagedResponse<AdminCustomerRowResponse> data =
                adminService.getCustomers(page, size, mobileNumber, customerId, consentStatus, sortBy, sortDir);
        ResponseEntity<ApiResponse<PagedResponse<AdminCustomerRowResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Customers retrieved", data));
        log.debug("Exiting customers | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping(value = "/customers/export", produces = "text/csv")
    public void exportCustomers(
            @RequestParam(required = false) String mobileNumber,
            @RequestParam(required = false) String customerId,
            @RequestParam(required = false) String consentStatus,
            HttpServletResponse response,
            HttpServletRequest httpRequest)
            throws IOException {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering exportCustomers | params: mobileNumber={} | customerId={} | consentStatus={}",
                mobileNumber,
                customerId,
                consentStatus);
        log.info("User={} | action=exportCustomers | entity=Customer | id=n/a", cu);
        String filename = "customers-export.csv";
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        response.setContentType("text/csv");
        response.setHeader(
                "Content-Disposition",
                "attachment; filename=\"" + filename + "\"; filename*=UTF-8''" + URLEncoder.encode(filename, StandardCharsets.UTF_8));
        adminService.exportCustomersCsv(response.getOutputStream(), mobileNumber, customerId, consentStatus);
        log.debug("Exiting exportCustomers | completed successfully");
    }

    @GetMapping("/consent-templates")
    public ResponseEntity<ApiResponse<List<AdminConsentTemplateResponse>>> consentTemplates(
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering consentTemplates | params: none");
        log.info("User={} | action=consentTemplates | entity=Consent | id=n/a", cu);
        List<AdminConsentTemplateResponse> data = adminService.listConsentTemplates();
        ResponseEntity<ApiResponse<List<AdminConsentTemplateResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Consent templates", data));
        log.debug("Exiting consentTemplates | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/capture-consent/search")
    public ResponseEntity<ApiResponse<CaptureConsentSearchResponse>> captureSearch(
            @RequestParam String q, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering captureSearch | params: q={}", q);
        log.info("User={} | action=captureSearch | entity=Customer | id=n/a", cu);
        CaptureConsentSearchResponse data = adminService.searchCustomerForCapture(q);
        ResponseEntity<ApiResponse<CaptureConsentSearchResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Customer found", data));
        log.debug("Exiting captureSearch | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/capture-consent/send-link")
    public ResponseEntity<ApiResponse<SendConsentLinkResponse>> sendLink(
            @Valid @RequestBody SendConsentLinkRequest request,
            Authentication authentication,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering sendLink | params: customerId={} | consentTemplateId={}",
                request.getCustomerId(),
                request.getConsentTemplateId());
        log.info("User={} | action=sendLink | entity=ConsentCapture | id=n/a", cu);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        SendConsentLinkResponse data = adminService.sendCaptureLink(request, userId);
        ResponseEntity<ApiResponse<SendConsentLinkResponse>> result =
                ResponseEntity.ok(ApiResponse.success(data.getMessage(), data));
        log.debug("Exiting sendLink | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/capture-consent/record")
    public ResponseEntity<ApiResponse<Void>> record(
            @Valid @RequestBody RecordOnBehalfConsentRequest request,
            Authentication authentication,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering record | params: customerId={} | consentTemplateId={}",
                request.getCustomerId(),
                request.getConsentTemplateId());
        log.info("User={} | action=record | entity=ConsentRecord | id=n/a", cu);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        adminService.recordOnBehalfConsent(request, userId);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.ok(ApiResponse.success("On-behalf consent recorded successfully", null));
        log.debug("Exiting record | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/capture-consent/channel-preference")
    public ResponseEntity<ApiResponse<CustomerChannelPreferenceResponse>> getChannelPreference(
            @RequestParam String customerId,
            @RequestParam Long consentTemplateId,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getChannelPreference | params: customerId={} | consentTemplateId={}", customerId, consentTemplateId);
        log.info("User={} | action=getChannelPreference | entity=ChannelPreference | id={}", cu, consentTemplateId);
        CustomerChannelPreferenceResponse data =
                adminService.getChannelPreferenceForAdmin(customerId, consentTemplateId);
        ResponseEntity<ApiResponse<CustomerChannelPreferenceResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Channel preference", data));
        log.debug("Exiting getChannelPreference | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/capture-consent/language-preference")
    public ResponseEntity<ApiResponse<List<String>>> getLanguagePreference(
            @RequestParam String customerId,
            @RequestParam Long consentTemplateId,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getLanguagePreference | params: customerId={} | consentTemplateId={}", customerId, consentTemplateId);
        log.info("User={} | action=getLanguagePreference | entity=LanguagePreference | id={}", cu, consentTemplateId);
        List<String> data = adminService.getLanguagePreferenceForAdmin(customerId, consentTemplateId);
        ResponseEntity<ApiResponse<List<String>>> result =
                ResponseEntity.ok(ApiResponse.success("Language preference", data));
        log.debug("Exiting getLanguagePreference | result={}", result.getStatusCode());
        return result;
    }
}
