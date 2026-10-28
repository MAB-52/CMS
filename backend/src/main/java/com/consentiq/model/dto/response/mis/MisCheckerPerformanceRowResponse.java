package com.consentiq.model.dto.response.mis;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisCheckerPerformanceRowResponse {
    private Long userId;
    private String fullName;
    private String email;
    private long approved;
    private long rejected;
    private long revisionRequested;
    private long totalDecisions;
    private Double averageTatHours;
}
