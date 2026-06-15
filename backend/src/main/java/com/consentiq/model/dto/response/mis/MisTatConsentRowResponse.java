package com.consentiq.model.dto.response.mis;

import com.consentiq.enums.ConsentStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisTatConsentRowResponse {
    private Long consentDbId;
    private String consentId;
    private String consentName;
    private ConsentStatus status;
    private Instant createdAt;
    private Instant submittedAt;
    private Instant reviewedAt;
    private Long creatorUserId;
    private String creatorName;
    private Double totalTatHours;
}
