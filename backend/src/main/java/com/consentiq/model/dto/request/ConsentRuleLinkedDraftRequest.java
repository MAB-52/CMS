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
 * Rule payload for {@link LinkedConsentAndRuleCreateRequest}. Mirrors {@link ConsentRuleUpsertRequest}
 * but deliberately has <strong>no</strong> {@code consentTemplateId} field so Bean Validation cannot
 * require a template for the linked workflow (template is wired after consent approval).
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentRuleLinkedDraftRequest {

    @NotBlank(message = "Rule name is required.")
    @Size(max = 200, message = "Rule name must not exceed 200 characters.")
    private String ruleName;

    @Size(max = 4000, message = "Rule description must not exceed 4000 characters.")
    private String ruleDescription;

    @NotNull(message = "Rule type is required.")
    private ConsentRuleType ruleType;

    private PredefinedRuleScenario predefinedScenario;

    @Size(max = 200, message = "Trigger event must not exceed 200 characters.")
    private String triggerEvent;

    @NotNull(message = "Primary audience segment is required.")
    private AudienceSegmentCode primarySegment;

    private List<String> additionalSegmentCodes;

    @NotNull(message = "Schedule type is required.")
    private WorkflowScheduleType scheduleType;

    private Instant scheduledAt;

    @Size(max = 120, message = "Cron expression must not exceed 120 characters.")
    private String recurringCron;

    @NotEmpty(message = "At least one broadcast channel is required.")
    private List<String> broadcastChannels;
}
