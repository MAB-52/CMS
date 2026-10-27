package com.consentiq.service;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class SessionAlertService {

    private static final Logger log = LoggerFactory.getLogger(SessionAlertService.class);

    private final BatchEmailDispatchService emailDispatchService;

    @Async("notificationExecutor")
    public void sendSessionTakeoverAlert(String email, String fullName, String ip, String device, Instant time) {
        log.debug("Entering sendSessionTakeoverAlert | params: email={}", email);
        String subject = "Security Alert: New login to your ConsentIQ account";
        String html = """
                <p>Hi %s,</p>
                <p>A new login to your ConsentIQ account (%s) was just detected:</p>
                <ul>
                  <li>Time: %s</li>
                  <li>IP Address: %s</li>
                  <li>Device/Browser: %s</li>
                </ul>
                <p>Your previous session has been logged out. If this was you, no action is needed.</p>

                """.formatted(fullName, email, time, ip, device == null ? "Unknown" : device);
        try {
            emailDispatchService.sendSmtpHtmlEmail(email, subject, html);
            log.debug("Exiting sendSessionTakeoverAlert | completed successfully");
        } catch (Exception e) {
            log.error("Exception sending session takeover alert | email={} | message={}", email, e.getMessage(), e);
        }
    }
}
