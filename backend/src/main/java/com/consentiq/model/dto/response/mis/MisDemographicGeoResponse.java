package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class MisDemographicGeoResponse {
    boolean geoDataAvailable;
    String messageWhenUnavailable;
    List<MisDemographicGeoRowResponse> topCities;
}
