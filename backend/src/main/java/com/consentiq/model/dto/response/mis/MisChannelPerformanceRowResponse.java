package com.consentiq.model.dto.response.mis;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisChannelPerformanceRowResponse {
    private String channel;
    private long totalInvitesSent;
    private long acceptedCount;
    private long declinedOrNoResponseCount;
    private double successRatePercent;
    private double dropOffPercent;
    /** Template configuration share (0–100), same family as {@code AdminMisDashboardResponse.ChannelPerformanceRow}. */
    private double templateMixPercent;
}
