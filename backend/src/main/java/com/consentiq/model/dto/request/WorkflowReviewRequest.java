package com.consentiq.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WorkflowReviewRequest {

    @NotBlank
    private String action;

    @Size(max = 2000)
    private String reason;

    @Size(max = 2000)
    private String revisionMessage;

    /** Optional remarks from checker on approve / reject / revision. */
    @Size(max = 2000)
    private String remarks;
    
    @Size(max = 2000)
    private String approveReason; 
}
