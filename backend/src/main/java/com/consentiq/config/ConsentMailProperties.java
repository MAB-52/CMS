package com.consentiq.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "consentiq.mail")
public class ConsentMailProperties {

    /** From address (RFC). Used when SMTP is enabled. */
    private String from = "noreply@consentiq.local";

    private String organizationName = "ConsentIQ";

    private String supportEmail = "support@consentiq.local";
}
