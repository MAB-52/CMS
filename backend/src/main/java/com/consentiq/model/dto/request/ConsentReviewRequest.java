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
public class ConsentReviewRequest {

    @NotBlank
    private String action;

    @Size(max = 1000)
    private String reason;

    @Size(max = 1000)
    private String revisionMessage;
}
