package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AudienceDrillDownPreviewResponse {

    private int totalCount;
    private List<AudienceSegmentCountPreview> segmentCounts;
}
