package com.consentiq.model.dto.response.mis;

import com.consentiq.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisAgentPerformanceRowResponse {
    private Long userId;
    private String fullName;
    private String email;
    private UserRole role;
    private long totalConsentsCreated;
    private long pendingApprovals;
    private long approvedOrPublished;
    private long rejectedConsents;
    private double averageProcessingHours;
    private double sla24hSubmitCompliancePercent;
}
