package com.consentiq.model.dto.request;

import com.consentiq.enums.WorkflowScheduleType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentBroadcastUpsertRequest {

    @NotBlank
    @Size(max = 200)
    private String broadcastTitle;

    private Long consentTemplateId;

    @NotEmpty
    private List<String> segmentCodes;

    @NotNull
    private WorkflowScheduleType scheduleType;

    private Instant scheduledAt;

    @Size(max = 120)
    private String recurringCron;

    @NotEmpty
    private List<String> channels;

    private boolean includeConsentLink;

    @Size(max = 4000)
    private String messageNotes;

    private Long relatedRuleId;
}
