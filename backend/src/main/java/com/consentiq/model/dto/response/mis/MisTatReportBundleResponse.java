package com.consentiq.model.dto.response.mis;

import com.consentiq.model.dto.response.PagedResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisTatReportBundleResponse {
    private MisTatSummaryResponse summary;
    private PagedResponse<MisTatConsentRowResponse> page;
}
