package com.consentiq.model.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Atomically create a consent draft and optional paired broadcast rule draft (linked workflow).
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LinkedConsentAndRuleCreateRequest {

    @Valid
    @NotNull
    private ConsentCreateRequest consent;

    @Valid
    @NotNull
    private ConsentRuleLinkedDraftRequest rule;

    /** When true, both consent and rule drafts are created as a linked pair. */
    private boolean createLinkedRule;
}
