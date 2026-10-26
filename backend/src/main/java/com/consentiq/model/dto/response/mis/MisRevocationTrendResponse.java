package com.consentiq.model.dto.response.mis;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisRevocationTrendResponse {
    private List<MisTimeSeriesCountPoint> series;
}
