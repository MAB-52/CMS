package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerConsentRecordStatsResponse {

    private Long consentDbId;
    private long totalRecords;
    private long acceptedCount;
    private long rejectedCount;
    private long withdrawnCount;
    private long pendingCount;
    private long expiringSoonCount;
    private long expiredCount;
}
