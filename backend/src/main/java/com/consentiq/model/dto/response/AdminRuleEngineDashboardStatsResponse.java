package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminRuleEngineDashboardStatsResponse {

    private long approvedRulesCount;
    private long activeForExecutionCount;
    private long inactiveForExecutionCount;
    private long pendingImmediateFirstRunCount;
    private long executedInLast24HoursCount;
    private List<ConsentRuleExecutionResponse> recentExecutions;

}