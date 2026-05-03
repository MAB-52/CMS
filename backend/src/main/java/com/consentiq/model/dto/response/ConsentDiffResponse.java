package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentDiffResponse {

    private Long consentDbId;
    private String consentName;
    private int currentVersion;
    private int previousVersion;
    private List<FieldDiff> differences;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class FieldDiff {
        private String fieldName;
        private String fieldLabel;
        private String oldValue;
        private String newValue;
        private boolean modified;
    }
}
