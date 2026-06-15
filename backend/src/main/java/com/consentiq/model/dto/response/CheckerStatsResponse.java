package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CheckerStatsResponse {

    private long pendingReview;
    private long approvedToday;
    private long rejectedTotal;
    private long totalReviewed;
}
