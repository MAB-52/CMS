package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

/** KPI surface for MIS tabs: primary metric plus optional trend vs an equal prior window. */
@Value
@Builder
public class MisKpiCardResponse {
    String label;
    String tooltip;
    long value;
    Double changePercentVsPrior;
}
