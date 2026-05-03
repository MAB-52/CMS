package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentVersionResponse {

    private Long id;
    private Integer versionNumber;
    private String consentMessageSnapshot;
    private Map<String, Map<String, String>> changedFields;
    private UserSummaryResponse changedBy;
    private Instant changedAt;
}
