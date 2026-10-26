package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class MisConsentPerformanceLeaderboardRowResponse {
    long consentDbId;
    String consentId;
    String consentName;
    long totalBroadcastExecutions;
    long totalRecipientsInvited;
    long totalAccepted;
    double acceptanceRatePercent;
    double reEngagementRatePercent;
    Double averageHoursToAccept;
    List<MisLeaderboardChannelSplitResponse> channelSplits;
}
