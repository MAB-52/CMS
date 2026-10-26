package com.consentiq.controller;

import com.consentiq.model.dto.response.AdminRuleEngineDashboardStatsResponse;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.ConsentRuleExecutionResponse;
import com.consentiq.model.dto.response.ConsentRuleResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.RuleAudiencePreviewBreakdownResponse;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.ConsentRuleExecutionService;
import com.consentiq.service.ConsentRuleService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/rule-engine")
@RequiredArgsConstructor
public class AdminRuleEngineController {

    private static final Logger log = LoggerFactory.getLogger(AdminRuleEngineController.class);

    private final ConsentRuleService consentRuleService;
    private final ConsentRuleExecutionService consentRuleExecutionService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping("/dashboard-stats")
    public ResponseEntity<ApiResponse<AdminRuleEngineDashboardStatsResponse>> dashboardStats(
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering dashboardStats | params: none");
        log.info("User={} | action=dashboardStats | entity=RuleEngine | id=n/a", cu);
        AdminRuleEngineDashboardStatsResponse data = consentRuleExecutionService.getDashboardStats();
        ResponseEntity<ApiResponse<AdminRuleEngineDashboardStatsResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Dashboard statistics loaded", data));
        log.debug("Exiting dashboardStats | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/approved-rules")
    public ResponseEntity<ApiResponse<PagedResponse<ConsentRuleResponse>>> approvedRules(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering approvedRules | params: page={} | size={}", page, size);
        log.info("User={} | action=approvedRules | entity=ConsentRule | id=n/a", cu);
        PagedResponse<ConsentRuleResponse> data = consentRuleService.listApprovedForAdminRuleEngine(page, size);
        ResponseEntity<ApiResponse<PagedResponse<ConsentRuleResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Approved rules retrieved", data));
        log.debug("Exiting approvedRules | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/rules/{id}/execution-active")
    public ResponseEntity<ApiResponse<Void>> setExecutionActive(
            @PathVariable Long id,
            @RequestParam boolean active,
            Authentication authentication,
            HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering setExecutionActive | params: id={} | active={}", id, active);
        log.info("User={} | action=setExecutionActive | entity=ConsentRule | id={}", cu, id);
        Long adminId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        consentRuleExecutionService.setExecutionActive(id, active, adminId, http);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.ok(ApiResponse.success(active ? "Rule activated for execution" : "Rule deactivated", null));
        log.debug("Exiting setExecutionActive | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/rules/{id}/audience-preview-breakdown")
    public ResponseEntity<ApiResponse<RuleAudiencePreviewBreakdownResponse>> audiencePreviewBreakdown(
            @PathVariable Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering audiencePreviewBreakdown | params: id={}", id);
        log.info("User={} | action=audiencePreviewBreakdown | entity=ConsentRule | id={}", cu, id);
        RuleAudiencePreviewBreakdownResponse data = consentRuleExecutionService.previewAudienceBreakdown(id);
        ResponseEntity<ApiResponse<RuleAudiencePreviewBreakdownResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Audience preview breakdown", data));
        log.debug("Exiting audiencePreviewBreakdown | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/rules/{id}/audience-preview")
    public ResponseEntity<ApiResponse<Integer>> audiencePreview(
            @PathVariable Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering audiencePreview | params: id={}", id);
        log.info("User={} | action=audiencePreview | entity=ConsentRule | id={}", cu, id);
        int n = consentRuleExecutionService.previewAudienceCount(id);
        ResponseEntity<ApiResponse<Integer>> result =
                ResponseEntity.ok(ApiResponse.success("Audience count evaluated", n));
        log.debug("Exiting audiencePreview | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/rules/{id}/manual-run")
    public ResponseEntity<ApiResponse<ConsentRuleExecutionResponse>> manualRun(
            @PathVariable Long id, Authentication authentication, HttpServletRequest http) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                http.getMethod(),
                http.getRequestURI(),
                cu);
        log.debug("Entering manualRun | params: id={}", id);
        log.info("User={} | action=manualRun | entity=ConsentRule | id={}", cu, id);
        Long adminId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        ConsentRuleExecutionResponse res = consentRuleExecutionService.executeManual(id, adminId, http);
        ResponseEntity<ApiResponse<ConsentRuleExecutionResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Rule execution finished", res));
        log.debug("Exiting manualRun | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/rules/{id}/executions")
    public ResponseEntity<ApiResponse<List<ConsentRuleExecutionResponse>>> executions(
            @PathVariable Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering executions | params: id={}", id);
        log.info("User={} | action=executions | entity=ConsentRule | id={}", cu, id);
        List<ConsentRuleExecutionResponse> data = consentRuleExecutionService.listExecutions(id);
        ResponseEntity<ApiResponse<List<ConsentRuleExecutionResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Execution history retrieved", data));
        log.debug("Exiting executions | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/executions")
    public ResponseEntity<ApiResponse<PagedResponse<ConsentRuleExecutionResponse>>> allExecutions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering allExecutions | params: page={} | size={}", page, size);
        log.info("User={} | action=allExecutions | entity=RuleExecution | id=n/a", cu);
        PagedResponse<ConsentRuleExecutionResponse> data =
                consentRuleExecutionService.listAllExecutionsPaged(page, size);
        ResponseEntity<ApiResponse<PagedResponse<ConsentRuleExecutionResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Executions retrieved", data));
        log.debug("Exiting allExecutions | result={}", result.getStatusCode());
        return result;
    }
}
