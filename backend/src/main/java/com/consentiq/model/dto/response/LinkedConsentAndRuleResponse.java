package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LinkedConsentAndRuleResponse {

    private ConsentResponse consent;
    private ConsentRuleResponse rule;
    private boolean linked;
}
