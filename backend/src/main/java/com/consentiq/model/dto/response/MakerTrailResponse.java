package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MakerTrailResponse {

    private PagedResponse<AuditLogResponse> page;
    private Summary summary;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Summary {
        private long total;
        private long myActions;
        private long checkerDecisions;
        private long approved;
        private long rejected;
        private long revisionRequested;
    }
}
