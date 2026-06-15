package com.consentiq.model.dto.response;

import com.consentiq.enums.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentRuleResponse {

    private Long id;
    private String ruleName;
    private String ruleDescription;
    private ConsentRuleType ruleType;
    private PredefinedRuleScenario predefinedScenario;
    private String triggerEvent;
    private AudienceSegmentCode primarySegment;
    private List<String> additionalSegmentCodes;
    private WorkflowScheduleType scheduleType;
    private Instant scheduledAt;
    private String recurringCron;
    private List<String> broadcastChannels;
    private Long consentTemplateId;
    private String consentTemplateName;
    private ConsentRuleStatus status;
    private Long createdById;
    private String createdByName;
    private Instant submittedAt;
    private Long reviewedById;
    private String reviewedByName;
    private Instant reviewedAt;
    private String reviewerRemarks;
    private String rejectionReason;
    private String revisionReason;
    private Instant approvedAt;
    private Instant publishedAt;
    private boolean executionActive;
    private Instant lastExecutedAt;
    private Instant nextExecutionAt;
    private boolean executionRunning;
    private String lastExecutionOutcome;
    private String lastExecutionSummary;
    private Instant createdAt;
    private Instant updatedAt;
}
