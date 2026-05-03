package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MergeTagResponse {

    private Long id;
    private String tagKey;
    private String tagLabel;
    private String tagCategory;
    private String sampleValue;
}
