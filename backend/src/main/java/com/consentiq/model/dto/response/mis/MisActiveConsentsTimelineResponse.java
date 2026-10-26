package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

import java.util.List;

/**
 * Templates that reached PUBLISHED/APPROVED in each bucket (activation volume), plus snapshot KPIs.
 * KPI “current” / “peak” compare the selected window to the immediately preceding window of equal length.
 */
@Value
@Builder
public class MisActiveConsentsTimelineResponse {
    String groupBy;
    List<MisTimeSeriesCountPoint> series;
    MisKpiCardResponse currentLiveTemplates;
    MisKpiCardResponse peakBucketActivations;
}
