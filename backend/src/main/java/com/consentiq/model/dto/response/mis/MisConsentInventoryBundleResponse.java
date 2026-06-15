package com.consentiq.model.dto.response.mis;

import com.consentiq.model.dto.response.PagedResponse;
import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class MisConsentInventoryBundleResponse {
    PagedResponse<MisConsentInventoryRowResponse> page;
    /** Status slice for donut (period = status name, count = templates). */
    List<MisTimeSeriesCountPoint> consentsByStatus;
    /** Category slice for bar chart (period = category name, count = templates). */
    List<MisTimeSeriesCountPoint> consentsByCategory;
}
