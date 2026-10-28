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
public class AdminMisDashboardResponse {

    private MisKpiSummary kpi;

    private List<ChannelPerformanceRow> channelPerformance;

    private MakerCheckerMis makerChecker;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MisKpiSummary {
        private long totalCustomers;

        /** Percentage 0–100 */
        private double consentRate;

        private long activeConsents;
        private long pendingResponse;
        private long declined;
        private long pendingMcApprovals;
        private long withdrawn;
        private long expired;
        private long unresponsive;
        private long noConsent;
        private long other;
        private long pendingMcConsents;
        private long pendingMcLinked;
        private long pendingMcRules;
        private long pendingMcBroadcasts;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ChannelPerformanceRow {
        private String channel;
        /** 0–100 */
        private double percentage;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MakerCheckerMis {
        private long consentMcCompleted;
        private long ruleMcCompleted;
        private long broadcastMcCompleted;
        private long rejections;
        private double averageApprovalHours;
        /** 0–100 */
        private double approvalRate;
    }
}
