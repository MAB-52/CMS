package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/** A checker's review decisions (one filtered page) plus all-time summary counts. */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewHistoryResponse {

    private PagedResponse<AuditLogResponse> page;
    private Summary summary;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Summary {
        /** All review decisions ever made by this checker. */
        private long total;
        private long approved;
        private long rejected;
        private long revisionRequested;
        private long published;
        private long consents;
        private long rules;
        private long broadcasts;
        /** Decisions in the last 7 days. */
        private long last7Days;
    }
}
