package com.consentiq.model.dto.response;

import com.consentiq.enums.BroadcastExecutionStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentRuleExecutionResponse {

    private Long id;
    private Long consentRuleId;
    private String ruleName;
    private String triggerType;
    private Long triggeredByUserId;
    private String triggeredByName;
    private BroadcastExecutionStatus status;
    private int audienceEvaluated;
    private int eligibleCount;
    private Map<String, Object> channelResults;
    private String summaryNotes;
    private Instant startedAt;
    private Instant completedAt;

    private Integer chunksTotal;
    private Integer chunksCompleted;
    private String progressNotes;
}
