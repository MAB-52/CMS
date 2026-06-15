package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class MisReEngagementFunnelResponse {
    long invitedCustomers;
    long pendingNoResponse;
    long accepted;
    long declinedOrWithdrawn;
}
