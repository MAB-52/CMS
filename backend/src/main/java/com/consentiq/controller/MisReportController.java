package com.consentiq.controller;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.CustomerConsentRecordStatus;
import com.consentiq.enums.UserRole;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.AuditLogResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.mis.*;
import com.consentiq.service.MisReportService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/admin/mis")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class MisReportController {

    private static final Logger log = LoggerFactory.getLogger(MisReportController.class);

    private final MisReportService misReportService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    private void misEnter(String action, HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug(
                "Entering {} | params: queryString={}",
                action,
                http.getQueryString() != null ? "present" : "absent");
        log.info("User={} | action={} | entity=MisReport | id=n/a", cu, action);
    }

    private void misExit(String action, Object resultSummary) {
        log.debug("Exiting {} | result={}", action, resultSummary);
    }

    @GetMapping("/executive-kpis")
    public ResponseEntity<ApiResponse<MisExecutiveKpisResponse>> executiveKpis(HttpServletRequest http) {
        misEnter("executiveKpis", http);
        ResponseEntity<ApiResponse<MisExecutiveKpisResponse>> r =
                ResponseEntity.ok(ApiResponse.success("Executive KPIs", misReportService.getExecutiveKpis()));
        misExit("executiveKpis", r.getStatusCode());
        return r;
    }

    @GetMapping("/consent-trend")
    public ResponseEntity<ApiResponse<MisConsentTrendResponse>> consentTrend(
            @RequestParam(defaultValue = "MONTHLY") String groupBy,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            HttpServletRequest http) {
        misEnter("consentTrend", http);
        ResponseEntity<ApiResponse<MisConsentTrendResponse>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Consent trend", misReportService.getConsentTrend(groupBy, fromDate, toDate)));
        misExit("consentTrend", r.getStatusCode());
        return r;
    }

    @GetMapping("/customer-consent-report")
    public ResponseEntity<ApiResponse<PagedResponse<MisCustomerConsentRowResponse>>> customerConsentReport(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Boolean vip,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate toDate,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            HttpServletRequest http) {
        misEnter("customerConsentReport", http);
        List<CustomerConsentRecordStatus> statuses = MisReportService.parseStatusList(status);
        ResponseEntity<ApiResponse<PagedResponse<MisCustomerConsentRowResponse>>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Customer consent report",
                                misReportService.getCustomerConsentReport(
                                        statuses, vip, fromDate, toDate, search, page, size)));
        misExit("customerConsentReport", r.getStatusCode());
        return r;
    }

    @GetMapping(value = "/customer-consent-report/export/csv", produces = "text/csv")
    public void exportCustomerConsentCsv(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Boolean vip,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate toDate,
            @RequestParam(required = false) String search,
            HttpServletResponse response,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportCustomerConsentCsv", http);
        List<CustomerConsentRecordStatus> statuses = MisReportService.parseStatusList(status);
        String filename = "customer-consent-report.csv";
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        response.setContentType("text/csv");
        response.setHeader(
                "Content-Disposition",
                "attachment; filename=\"" + filename + "\"; filename*=UTF-8''"
                        + URLEncoder.encode(filename, StandardCharsets.UTF_8));
        misReportService.exportCustomerConsentCsv(
                response.getOutputStream(), statuses, vip, fromDate, toDate, search);
        misExit("exportCustomerConsentCsv", "completed");
    }

    @GetMapping(
            value = "/customer-consent-report/export/excel",
            produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public ResponseEntity<byte[]> exportCustomerConsentExcel(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Boolean vip,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate toDate,
            @RequestParam(required = false) String search,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportCustomerConsentExcel", http);
        List<CustomerConsentRecordStatus> statuses = MisReportService.parseStatusList(status);
        byte[] body = misReportService.exportCustomerConsentExcel(statuses, vip, fromDate, toDate, search);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"customer-consent-report.xlsx\"")
                        .contentType(
                                MediaType.parseMediaType(
                                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                        .body(body);
        misExit("exportCustomerConsentExcel", r.getStatusCode());
        return r;
    }

    @GetMapping("/audit-report")
    public ResponseEntity<ApiResponse<PagedResponse<AuditLogResponse>>> auditReport(
            @RequestParam(required = false) String entityType,
            @RequestParam(required = false) String action,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            @RequestParam(required = false) String performedBy,
            @RequestParam(required = false) UserRole performedByRole,
            @RequestParam(required = false) Boolean workflowActionsOnly,
            @RequestParam(required = false) Boolean adminActorOnly,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            HttpServletRequest http) {
        misEnter("auditReport", http);
        ResponseEntity<ApiResponse<PagedResponse<AuditLogResponse>>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Audit report",
                                misReportService.getAuditReport(
                                        entityType,
                                        action,
                                        fromDate,
                                        toDate,
                                        performedBy,
                                        performedByRole,
                                        workflowActionsOnly,
                                        adminActorOnly,
                                        page,
                                        size)));
        misExit("auditReport", r.getStatusCode());
        return r;
    }

    @GetMapping(value = "/audit-report/export/csv", produces = "text/csv")
    public ResponseEntity<byte[]> exportAuditCsv(
            @RequestParam(required = false) String entityType,
            @RequestParam(required = false) String action,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            @RequestParam(required = false) String performedBy,
            @RequestParam(required = false) UserRole performedByRole,
            @RequestParam(required = false) Boolean workflowActionsOnly,
            @RequestParam(required = false) Boolean adminActorOnly,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportAuditCsv", http);
        byte[] body =
                misReportService.exportAuditCsv(
                        entityType, action, fromDate, toDate, performedBy, performedByRole, workflowActionsOnly, adminActorOnly);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"audit-report.csv\"")
                        .contentType(MediaType.parseMediaType("text/csv"))
                        .body(body);
        misExit("exportAuditCsv", r.getStatusCode());
        return r;
    }

    @GetMapping(
            value = "/audit-report/export/excel",
            produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public ResponseEntity<byte[]> exportAuditExcel(
            @RequestParam(required = false) String entityType,
            @RequestParam(required = false) String action,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            @RequestParam(required = false) String performedBy,
            @RequestParam(required = false) UserRole performedByRole,
            @RequestParam(required = false) Boolean workflowActionsOnly,
            @RequestParam(required = false) Boolean adminActorOnly,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportAuditExcel", http);
        byte[] body =
                misReportService.exportAuditExcel(
                        entityType, action, fromDate, toDate, performedBy, performedByRole, workflowActionsOnly, adminActorOnly);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"audit-report.xlsx\"")
                        .contentType(
                                MediaType.parseMediaType(
                                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                        .body(body);
        misExit("exportAuditExcel", r.getStatusCode());
        return r;
    }

    @GetMapping("/audit-actions")
    public ResponseEntity<ApiResponse<List<String>>> auditActions(HttpServletRequest http) {
        misEnter("auditActions", http);
        ResponseEntity<ApiResponse<List<String>>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Known and observed audit actions", misReportService.distinctAuditActionsFromDb()));
        misExit("auditActions", r.getStatusCode());
        return r;
    }

    @GetMapping("/expiry-report")
    public ResponseEntity<ApiResponse<PagedResponse<MisExpiryRowResponse>>> expiryReport(
            @RequestParam(defaultValue = "EXPIRING") String type,
            @RequestParam(defaultValue = "30") int withinDays,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            HttpServletRequest http) {
        misEnter("expiryReport", http);
        ResponseEntity<ApiResponse<PagedResponse<MisExpiryRowResponse>>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Expiry report", misReportService.getExpiryReport(type, withinDays, page, size)));
        misExit("expiryReport", r.getStatusCode());
        return r;
    }

    @GetMapping(value = "/expiry-report/export/csv", produces = "text/csv")
    public ResponseEntity<byte[]> exportExpiryCsv(
            @RequestParam(defaultValue = "EXPIRING") String type,
            @RequestParam(defaultValue = "30") int withinDays,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportExpiryCsv", http);
        java.io.ByteArrayOutputStream bos = new java.io.ByteArrayOutputStream();
        misReportService.exportExpiryCsv(bos, type, withinDays);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"expiry-report.csv\"")
                        .contentType(MediaType.parseMediaType("text/csv"))
                        .body(bos.toByteArray());
        misExit("exportExpiryCsv", r.getStatusCode());
        return r;
    }

    @GetMapping(
            value = "/expiry-report/export/excel",
            produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public ResponseEntity<byte[]> exportExpiryExcel(
            @RequestParam(defaultValue = "EXPIRING") String type,
            @RequestParam(defaultValue = "30") int withinDays,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportExpiryExcel", http);
        byte[] body = misReportService.exportExpiryExcel(type, withinDays);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"expiry-report.xlsx\"")
                        .contentType(
                                MediaType.parseMediaType(
                                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                        .body(body);
        misExit("exportExpiryExcel", r.getStatusCode());
        return r;
    }

    @GetMapping("/revocation-report")
    public ResponseEntity<ApiResponse<PagedResponse<MisRevocationRowResponse>>> revocationReport(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            @RequestParam(required = false) Boolean vip,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            HttpServletRequest http) {
        misEnter("revocationReport", http);
        ResponseEntity<ApiResponse<PagedResponse<MisRevocationRowResponse>>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Revocation report", misReportService.getRevocationReport(fromDate, toDate, vip, page, size)));
        misExit("revocationReport", r.getStatusCode());
        return r;
    }

    @GetMapping("/revocation-trend")
    public ResponseEntity<ApiResponse<MisRevocationTrendResponse>> revocationTrend(HttpServletRequest http) {
        misEnter("revocationTrend", http);
        ResponseEntity<ApiResponse<MisRevocationTrendResponse>> r =
                ResponseEntity.ok(
                        ApiResponse.success("Revocation trend", misReportService.getRevocationTrend()));
        misExit("revocationTrend", r.getStatusCode());
        return r;
    }

    @GetMapping(value = "/revocation-report/export/csv", produces = "text/csv")
    public ResponseEntity<byte[]> exportRevocationCsv(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            @RequestParam(required = false) Boolean vip,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportRevocationCsv", http);
        java.io.ByteArrayOutputStream bos = new java.io.ByteArrayOutputStream();
        misReportService.exportRevocationCsv(bos, fromDate, toDate, vip);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"revocation-report.csv\"")
                        .contentType(MediaType.parseMediaType("text/csv"))
                        .body(bos.toByteArray());
        misExit("exportRevocationCsv", r.getStatusCode());
        return r;
    }

    @GetMapping(
            value = "/revocation-report/export/excel",
            produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public ResponseEntity<byte[]> exportRevocationExcel(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            @RequestParam(required = false) Boolean vip,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportRevocationExcel", http);
        byte[] body = misReportService.exportRevocationExcel(fromDate, toDate, vip);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"revocation-report.xlsx\"")
                        .contentType(
                                MediaType.parseMediaType(
                                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                        .body(body);
        misExit("exportRevocationExcel", r.getStatusCode());
        return r;
    }

    @GetMapping("/compliance-overview")
    public ResponseEntity<ApiResponse<MisComplianceOverviewResponse>> complianceOverview(HttpServletRequest http) {
        misEnter("complianceOverview", http);
        ResponseEntity<ApiResponse<MisComplianceOverviewResponse>> r =
                ResponseEntity.ok(
                        ApiResponse.success("Compliance overview", misReportService.getComplianceOverview()));
        misExit("complianceOverview", r.getStatusCode());
        return r;
    }

    @GetMapping("/channel-performance")
    public ResponseEntity<ApiResponse<List<MisChannelPerformanceRowResponse>>> channelPerformance(
            HttpServletRequest http) {
        misEnter("channelPerformance", http);
        ResponseEntity<ApiResponse<List<MisChannelPerformanceRowResponse>>> r =
                ResponseEntity.ok(
                        ApiResponse.success("Channel performance", misReportService.getChannelPerformance()));
        misExit("channelPerformance", r.getStatusCode());
        return r;
    }

    @GetMapping("/agent-performance")
    public ResponseEntity<ApiResponse<PagedResponse<MisAgentPerformanceRowResponse>>> agentPerformance(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            HttpServletRequest http) {
        misEnter("agentPerformance", http);
        ResponseEntity<ApiResponse<PagedResponse<MisAgentPerformanceRowResponse>>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Agent performance", misReportService.getAgentPerformance(page, size)));
        misExit("agentPerformance", r.getStatusCode());
        return r;
    }

    @GetMapping("/tat-report")
    public ResponseEntity<ApiResponse<MisTatReportBundleResponse>> tatReport(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            @RequestParam(required = false) ConsentStatus status,
            @RequestParam(required = false) Long creatorId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            HttpServletRequest http) {
        misEnter("tatReport", http);
        ResponseEntity<ApiResponse<MisTatReportBundleResponse>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "TAT report",
                                misReportService.getTatReport(fromDate, toDate, status, creatorId, page, size)));
        misExit("tatReport", r.getStatusCode());
        return r;
    }

    @GetMapping(value = "/tat-report/export/csv", produces = "text/csv")
    public ResponseEntity<byte[]> exportTatCsv(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            @RequestParam(required = false) ConsentStatus status,
            @RequestParam(required = false) Long creatorId,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportTatCsv", http);
        byte[] body = misReportService.exportTatCsv(fromDate, toDate, status, creatorId);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"tat-report.csv\"")
                        .contentType(MediaType.parseMediaType("text/csv"))
                        .body(body);
        misExit("exportTatCsv", r.getStatusCode());
        return r;
    }

    @GetMapping(
            value = "/tat-report/export/excel",
            produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public ResponseEntity<byte[]> exportTatExcel(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            @RequestParam(required = false) ConsentStatus status,
            @RequestParam(required = false) Long creatorId,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportTatExcel", http);
        byte[] body = misReportService.exportTatExcel(fromDate, toDate, status, creatorId);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"tat-report.xlsx\"")
                        .contentType(
                                MediaType.parseMediaType(
                                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                        .body(body);
        misExit("exportTatExcel", r.getStatusCode());
        return r;
    }

    @GetMapping("/consent-inventory")
    public ResponseEntity<ApiResponse<MisConsentInventoryBundleResponse>> consentInventory(
            @RequestParam(required = false) ConsentCategory category,
            @RequestParam(required = false) ConsentStatus status,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "consentName") String sortBy,
            @RequestParam(defaultValue = "ASC") String sortDirection,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            HttpServletRequest http) {
        misEnter("consentInventory", http);
        ResponseEntity<ApiResponse<MisConsentInventoryBundleResponse>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Consent inventory",
                                misReportService.getConsentInventoryBundle(
                                        category, status, search, sortBy, sortDirection, page, size)));
        misExit("consentInventory", r.getStatusCode());
        return r;
    }

    @GetMapping(value = "/consent-inventory/export/csv", produces = "text/csv")
    public ResponseEntity<byte[]> exportConsentInventoryCsv(
            @RequestParam(required = false) ConsentCategory category,
            @RequestParam(required = false) ConsentStatus status,
            @RequestParam(required = false) String search,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportConsentInventoryCsv", http);
        java.io.ByteArrayOutputStream bos = new java.io.ByteArrayOutputStream();
        misReportService.exportConsentInventoryCsv(bos, category, status, search);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"consent-inventory.csv\"")
                        .contentType(MediaType.parseMediaType("text/csv"))
                        .body(bos.toByteArray());
        misExit("exportConsentInventoryCsv", r.getStatusCode());
        return r;
    }

    @GetMapping(
            value = "/consent-inventory/export/excel",
            produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public ResponseEntity<byte[]> exportConsentInventoryExcel(
            @RequestParam(required = false) ConsentCategory category,
            @RequestParam(required = false) ConsentStatus status,
            @RequestParam(required = false) String search,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportConsentInventoryExcel", http);
        byte[] body = misReportService.exportConsentInventoryExcel(category, status, search);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"consent-inventory.xlsx\"")
                        .contentType(
                                MediaType.parseMediaType(
                                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                        .body(body);
        misExit("exportConsentInventoryExcel", r.getStatusCode());
        return r;
    }

    @GetMapping("/active-consents-timeline")
    public ResponseEntity<ApiResponse<MisActiveConsentsTimelineResponse>> activeConsentsTimeline(
            @RequestParam(defaultValue = "MONTHLY") String groupBy,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            HttpServletRequest http) {
        misEnter("activeConsentsTimeline", http);
        ResponseEntity<ApiResponse<MisActiveConsentsTimelineResponse>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Active consents timeline",
                                misReportService.getActiveConsentsTimeline(groupBy, fromDate, toDate)));
        misExit("activeConsentsTimeline", r.getStatusCode());
        return r;
    }

    @GetMapping("/channel-template-performance")
    public ResponseEntity<ApiResponse<List<MisChannelTemplatePerformanceRowResponse>>> channelTemplatePerformance(
            @RequestParam(required = false) String channel,
            HttpServletRequest http) {
        misEnter("channelTemplatePerformance", http);
        ResponseEntity<ApiResponse<List<MisChannelTemplatePerformanceRowResponse>>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Channel template performance",
                                misReportService.getChannelTemplatePerformance(channel)));
        misExit("channelTemplatePerformance", r.getStatusCode());
        return r;
    }

    @GetMapping(value = "/channel-template-performance/export/csv", produces = "text/csv")
    public ResponseEntity<byte[]> exportChannelTemplatePerformanceCsv(
            @RequestParam(required = false) String channel,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportChannelTemplatePerformanceCsv", http);
        byte[] body = misReportService.exportChannelTemplatePerformanceCsv(channel);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(
                                HttpHeaders.CONTENT_DISPOSITION,
                                "attachment; filename=\"channel-template-performance.csv\"")
                        .contentType(MediaType.parseMediaType("text/csv"))
                        .body(body);
        misExit("exportChannelTemplatePerformanceCsv", r.getStatusCode());
        return r;
    }

    @GetMapping(
            value = "/channel-template-performance/export/excel",
            produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public ResponseEntity<byte[]> exportChannelTemplatePerformanceExcel(
            @RequestParam(required = false) String channel,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportChannelTemplatePerformanceExcel", http);
        byte[] body = misReportService.exportChannelTemplatePerformanceExcel(channel);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(
                                HttpHeaders.CONTENT_DISPOSITION,
                                "attachment; filename=\"channel-template-performance.xlsx\"")
                        .contentType(
                                MediaType.parseMediaType(
                                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                        .body(body);
        misExit("exportChannelTemplatePerformanceExcel", r.getStatusCode());
        return r;
    }

    @GetMapping("/consent-performance-leaderboard")
    public ResponseEntity<ApiResponse<PagedResponse<MisConsentPerformanceLeaderboardRowResponse>>>
            consentPerformanceLeaderboard(
                    @RequestParam(defaultValue = "REACH") String sort,
                    @RequestParam(defaultValue = "0") int page,
                    @RequestParam(defaultValue = "10") int size,
                    HttpServletRequest http) {
        misEnter("consentPerformanceLeaderboard", http);
        ResponseEntity<ApiResponse<PagedResponse<MisConsentPerformanceLeaderboardRowResponse>>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Consent performance leaderboard",
                                misReportService.getConsentPerformanceLeaderboard(sort, page, size)));
        misExit("consentPerformanceLeaderboard", r.getStatusCode());
        return r;
    }

    @GetMapping(value = "/consent-performance-leaderboard/export/csv", produces = "text/csv")
    public ResponseEntity<byte[]> exportConsentPerformanceLeaderboardCsv(
            @RequestParam(defaultValue = "REACH") String sort,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportConsentPerformanceLeaderboardCsv", http);
        byte[] body = misReportService.exportConsentPerformanceLeaderboardCsv(sort);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(
                                HttpHeaders.CONTENT_DISPOSITION,
                                "attachment; filename=\"consent-performance-leaderboard.csv\"")
                        .contentType(MediaType.parseMediaType("text/csv"))
                        .body(body);
        misExit("exportConsentPerformanceLeaderboardCsv", r.getStatusCode());
        return r;
    }

    @GetMapping(
            value = "/consent-performance-leaderboard/export/excel",
            produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public ResponseEntity<byte[]> exportConsentPerformanceLeaderboardExcel(
            @RequestParam(defaultValue = "REACH") String sort,
            HttpServletRequest http)
            throws IOException {
        misEnter("exportConsentPerformanceLeaderboardExcel", http);
        byte[] body = misReportService.exportConsentPerformanceLeaderboardExcel(sort);
        ResponseEntity<byte[]> r =
                ResponseEntity.ok()
                        .header(
                                HttpHeaders.CONTENT_DISPOSITION,
                                "attachment; filename=\"consent-performance-leaderboard.xlsx\"")
                        .contentType(
                                MediaType.parseMediaType(
                                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                        .body(body);
        misExit("exportConsentPerformanceLeaderboardExcel", r.getStatusCode());
        return r;
    }

    @GetMapping("/demographics/vip-split")
    public ResponseEntity<ApiResponse<MisDemographicVipSplitResponse>> demographicVipSplit(HttpServletRequest http) {
        misEnter("demographicVipSplit", http);
        ResponseEntity<ApiResponse<MisDemographicVipSplitResponse>> r =
                ResponseEntity.ok(ApiResponse.success("VIP split", misReportService.getDemographicVipSplit()));
        misExit("demographicVipSplit", r.getStatusCode());
        return r;
    }

    @GetMapping("/demographics/lifecycle")
    public ResponseEntity<ApiResponse<MisDemographicLifecycleResponse>> demographicLifecycle(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant toDate,
            HttpServletRequest http) {
        misEnter("demographicLifecycle", http);
        ResponseEntity<ApiResponse<MisDemographicLifecycleResponse>> r =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Lifecycle adoption", misReportService.getDemographicLifecycle(fromDate, toDate)));
        misExit("demographicLifecycle", r.getStatusCode());
        return r;
    }

    @GetMapping("/demographics/re-engagement-funnel")
    public ResponseEntity<ApiResponse<MisReEngagementFunnelResponse>> demographicReEngagementFunnel(
            HttpServletRequest http) {
        misEnter("demographicReEngagementFunnel", http);
        ResponseEntity<ApiResponse<MisReEngagementFunnelResponse>> r =
                ResponseEntity.ok(
                        ApiResponse.success("Re-engagement funnel", misReportService.getReEngagementFunnel()));
        misExit("demographicReEngagementFunnel", r.getStatusCode());
        return r;
    }

    @GetMapping("/demographics/geo")
    public ResponseEntity<ApiResponse<MisDemographicGeoResponse>> demographicGeo(HttpServletRequest http) {
        misEnter("demographicGeo", http);
        ResponseEntity<ApiResponse<MisDemographicGeoResponse>> r =
                ResponseEntity.ok(
                        ApiResponse.success("Geographic distribution", misReportService.getDemographicGeo()));
        misExit("demographicGeo", r.getStatusCode());
        return r;
    }
}
