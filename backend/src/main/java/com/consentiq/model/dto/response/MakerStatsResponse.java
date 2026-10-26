package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MakerStatsResponse {

    private long total;
    private long draft;
    private long pendingApproval;
    private long approved;
    private long published;
    private long revisionRequested;
}
