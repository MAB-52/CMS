package com.consentiq.model.dto.request;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentType;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentCreateRequest {

    @NotBlank
    @Size(max = 200)
    private String consentName;

    @Size(max = 1000)
    private String description;

    @NotNull
    private ConsentCategory category;

    @Min(1)
    @Max(3650)
    private Integer validityPeriodDays;

    private LocalDate validityStartDate;

    private LocalDate validityEndDate;

    private String consentMessage;

    /** May be empty while drafting; submit-for-approval enforces at least one channel. */
    @Builder.Default
    private List<String> deliveryChannels = new ArrayList<>();

    private List<String> tagsUsed;

    private String searchTags;

    private ConsentType type;
}
