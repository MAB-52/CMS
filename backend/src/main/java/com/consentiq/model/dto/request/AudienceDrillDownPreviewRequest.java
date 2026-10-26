package com.consentiq.model.dto.request;

import com.consentiq.enums.ConsentRuleType;
import com.consentiq.enums.PredefinedRuleScenario;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class AudienceDrillDownPreviewRequest {

    @NotNull
    private ConsentRuleType ruleType;

    private PredefinedRuleScenario predefinedScenario;

    private List<String> selectedSegmentCodes;
}
