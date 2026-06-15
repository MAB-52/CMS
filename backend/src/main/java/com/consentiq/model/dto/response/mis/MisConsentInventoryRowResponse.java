package com.consentiq.model.dto.response.mis;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import lombok.Builder;
import lombok.Value;

import java.time.Instant;
import java.util.List;

@Value
@Builder
public class MisConsentInventoryRowResponse {
    long consentDbId;
    String consentId;
    String consentName;
    ConsentCategory category;
    ConsentStatus status;
    int version;
    Instant createdAt;
    List<String> deliveryChannels;
    long totalBroadcastExecutions;
    Instant publishedAt;
}
