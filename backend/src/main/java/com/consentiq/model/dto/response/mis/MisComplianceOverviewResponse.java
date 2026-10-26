package com.consentiq.model.dto.response.mis;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisComplianceOverviewResponse {
    private long totalCustomersWithActiveConsent;
    private long customersMissingConsent;
    private long customersWithExpiredConsent;
    private double compliancePercent;
}
