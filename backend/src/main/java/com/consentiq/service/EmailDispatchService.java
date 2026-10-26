package com.consentiq.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class EmailDispatchService {

    private static final Logger log = LoggerFactory.getLogger(EmailDispatchService.class);

    private final BatchEmailDispatchService batchEmailDispatchService;

    public EmailDispatchService(@Lazy BatchEmailDispatchService batchEmailDispatchService) {
        this.batchEmailDispatchService = batchEmailDispatchService;
    }

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    /**
     * Sends HTML email via SMTP when {@code spring.mail.host} is configured; otherwise logs the payload
     * and throws so transactional flows can surface a clear configuration error to operators.
     */
    public void sendHtml(String to, String subject, String htmlBody) {
        String cu = currentUser();
        log.debug("Entering sendHtml | params: to={} | subject={}", to, subject);
        log.info("User={} | action=sendHtml | entity=Email | id=n/a", cu);
        log.info("Executing batch send | method=sendSmtpHtmlEmail | param=toPresent");
        batchEmailDispatchService.sendSmtpHtmlEmail(to, subject, htmlBody);
        log.info("Processing request | entity=Email | status=sent");
        log.debug("Exiting sendHtml | completed successfully");
    }
}
