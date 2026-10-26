package com.consentiq.model.dto.response;

import com.consentiq.enums.CustomerConsentRecordStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerConsentRecordResponse {

    private Long id;
    private String customerId;
    private Long consentDbId;
    private String consentName;
    private String customerFullName;
    private CustomerConsentRecordStatus status;
    private Instant respondedAt;
    private Long onBehalfRecordId;
    private LocalDate consentValidUntil;
    private Instant lastInviteSentAt;
    private Long sourceRuleId;
    private Long sourceBroadcastId;
    private Instant createdAt;
    private Instant updatedAt;
}
