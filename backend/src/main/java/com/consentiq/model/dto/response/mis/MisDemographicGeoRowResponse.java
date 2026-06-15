package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class MisDemographicGeoRowResponse {
    String cityOrRegion;
    long customerCount;
    long withActiveConsentCount;
}
