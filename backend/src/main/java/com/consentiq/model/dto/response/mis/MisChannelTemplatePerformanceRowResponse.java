package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class MisChannelTemplatePerformanceRowResponse {
    String channel;
    long consentDbId;
    String consentId;
    String consentName;
    long invitesSent;
    long acceptedCount;
    long declinedOrPendingCount;
    double successRatePercent;
}
