package com.consentiq.model.dto.request;

import lombok.Data;
import java.util.List;

@Data
public class SaveChannelPreferenceRequest {
    private String token;
    private Long consentDbId;
    /**
     * Channel keys the customer selected — must be a subset of the
     * template's configured channels (EMAIL, SMS, PUSH, WHATSAPP, RCS).
     */
    private List<String> selectedChannels;
}