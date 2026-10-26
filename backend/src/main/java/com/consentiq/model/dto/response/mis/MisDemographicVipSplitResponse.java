package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class MisDemographicVipSplitResponse {
    long vipTotalCustomers;
    long vipActiveConsents;
    double vipConsentRatePercent;
    long nonVipTotalCustomers;
    long nonVipActiveConsents;
    double nonVipConsentRatePercent;
    MisKpiCardResponse vipRateTrend;
    MisKpiCardResponse nonVipRateTrend;
}
