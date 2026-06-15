package com.consentiq.model.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CustomerChannelPreferenceResponse {
    private String customerId;
    private Long consentDbId;
    private boolean prefEmail;
    private boolean prefSms;
    private boolean prefPush;
    private boolean prefWhatsapp;
    private boolean prefRcs;
}