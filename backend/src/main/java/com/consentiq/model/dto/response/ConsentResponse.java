package com.consentiq.model.dto.response;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.ConsentType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentResponse {

    private Long id;
    private String consentId;
    private String consentName;
    private String description;
    private ConsentCategory category;
    private Integer validityPeriodDays;
    private LocalDate validityStartDate;
    private LocalDate validityEndDate;
    private String consentMessage;
    private ConsentStatus status;
    private Integer version;
    private ConsentType type;
    private List<String> deliveryChannels;
    private List<String> tagsUsed;
    private String searchTags;
    private UserSummaryResponse createdBy;
    private Instant submittedAt;
    private UserSummaryResponse reviewedBy;
    private Instant reviewedAt;
    private String rejectionReason;
    private String revisionMessage;
    private Instant publishedAt;
    private Instant createdAt;
    private Instant updatedAt;
}
