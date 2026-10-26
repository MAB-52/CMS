package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class MisLeaderboardChannelSplitResponse {
    String channel;
    long invitesSent;
    long acceptedCount;
    double successRatePercent;
}
