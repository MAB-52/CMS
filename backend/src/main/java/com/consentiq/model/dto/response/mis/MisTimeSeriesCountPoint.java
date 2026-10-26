package com.consentiq.model.dto.response.mis;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisTimeSeriesCountPoint {
    /** Bucket label (ISO date, year-week, or year-month). */
    private String period;
    private long count;
}
