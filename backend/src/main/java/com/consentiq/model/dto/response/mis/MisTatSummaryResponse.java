package com.consentiq.model.dto.response.mis;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisTatSummaryResponse {
    private Double averageTatHoursOverall;
    private Double averageTatHoursApproved;
    private Double averageTatHoursRejected;
    private Double fastestTatHours;
    private Double slowestTatHours;
}
