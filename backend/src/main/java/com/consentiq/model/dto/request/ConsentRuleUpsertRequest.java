package com.consentiq.model.dto.request;

import com.consentiq.enums.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.List;

/**
 * Request DTO for creating or updating a ConsentRule (draft or full save).
 *
 * Validation strategy:
 *  - Bean Validation (@NotNull / @NotBlank) catches structurally invalid payloads
 *    before they reach the service layer.
 *  - Business-rule validation (e.g. scheduleType-dependent fields, VIP check)
 *    is handled in ConsentRuleService#validateForSubmit so that drafts can be
 *    saved with partial data, while submission enforces completeness.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentRuleUpsertRequest {

    // ── Core identity ────────────────────────────────────────────────────────

    @NotBlank(message = "Rule name is required.")
    @Size(max = 200, message = "Rule name must not exceed 200 characters.")
    private String ruleName;

    @Size(max = 4000, message = "Rule description must not exceed 4000 characters.")
    private String ruleDescription;

    // ── Rule classification ──────────────────────────────────────────────────

    @NotNull(message = "Rule type is required.")
    private ConsentRuleType ruleType;

    /**
     * Required when ruleType == PREDEFINED_SCENARIO.
     * Validated in service (business rule, not structural).
     */
    private PredefinedRuleScenario predefinedScenario;

    @Size(max = 200, message = "Trigger event must not exceed 200 characters.")
    private String triggerEvent;

    // ── Audience ─────────────────────────────────────────────────────────────

    @NotNull(message = "Primary audience segment is required.")
    private AudienceSegmentCode primarySegment;

    private List<String> additionalSegmentCodes;

    // ── Schedule ─────────────────────────────────────────────────────────────

    @NotNull(message = "Schedule type is required.")
    private WorkflowScheduleType scheduleType;

    /**
     * Required when scheduleType == SCHEDULED.
     * Validated in service so a draft can be saved mid-form.
     */
    private Instant scheduledAt;

    @Size(max = 120, message = "Cron expression must not exceed 120 characters.")
    private String recurringCron;

    // ── Delivery ─────────────────────────────────────────────────────────────

    /**
     * At least one channel required.
     * @NotEmpty here ensures the list is never null/empty at the API level.
     */
    @NotEmpty(message = "At least one broadcast channel is required.")
    private List<String> broadcastChannels;

    // ── Consent template ─────────────────────────────────────────────────────

    /**
     * Consent template is MANDATORY for all rules (draft and submission).
     * The referenced consent must be in APPROVED or PUBLISHED status.
     */
    @NotNull(message = "Consent template is required.")
    private Long consentTemplateId;
}