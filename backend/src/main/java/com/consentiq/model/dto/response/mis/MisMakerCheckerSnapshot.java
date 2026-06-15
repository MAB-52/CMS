package com.consentiq.model.dto.response.mis;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisMakerCheckerSnapshot {
    private long consentMcCompleted;
    private long ruleMcCompleted;
    private long broadcastMcCompleted;
    private long rejections;
    private double averageApprovalHours;
    private double approvalRate;
}
