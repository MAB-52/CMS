package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AudienceSegmentResponse {

    private String code;
    private String label;
    private String description;
    private long customerCount;
    /** False when the segment cannot be targeted (e.g. VIP with zero flagged customers). */
    private boolean selectable;
}
