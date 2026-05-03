package com.consentiq.service;

import com.consentiq.config.ConsentMailProperties;
import com.consentiq.exception.EmailDeliveryException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailDispatchService {

    private final ObjectProvider<JavaMailSender> javaMailSender;
    private final ConsentMailProperties consentMailProperties;
    private final org.springframework.boot.autoconfigure.mail.MailProperties springMailProperties;

    /**
     * Sends HTML email via SMTP when {@code spring.mail.host} is configured; otherwise logs the payload
     * and throws so transactional flows can surface a clear configuration error to operators.
     */
    public void sendHtml(String to, String subject, String htmlBody) {
        if (!StringUtils.hasText(to)) {
            throw new IllegalArgumentException("Recipient email address is required");
        }
        JavaMailSender sender = javaMailSender.getIfAvailable();
        String host = springMailProperties.getHost();
        if (sender == null || !StringUtils.hasText(host)) {
            log.error(
                    "EMAIL NOT SENT | SMTP not configured | set spring.mail.host (e.g. MAIL_HOST) | to={} | subject={}",
                    to,
                    subject);
            log.debug("---- HTML (not sent) ----\n{}", htmlBody);
            throw new EmailDeliveryException(
                    "Email could not be sent because SMTP is not configured. Set spring.mail.host (for example MAIL_HOST), spring.mail.username/password as required, and consentiq.mail.from, then retry.");
        }
        String from = consentMailProperties.getFrom();
        if (!StringUtils.hasText(from)) {
            throw new EmailDeliveryException("consentiq.mail.from is not configured.");
        }
        try {
            MimeMessage mimeMessage = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlBody, true);
            sender.send(mimeMessage);
            log.info("EMAIL SENT | to={} | subject={} | htmlLength={}", to, subject, htmlBody != null ? htmlBody.length() : 0);
        } catch (MailException | jakarta.mail.MessagingException e) {
            log.error("EMAIL FAILED | to={} | subject={} | error={}", to, subject, e.getMessage(), e);
            throw new EmailDeliveryException("Failed to send email: " + e.getMessage(), e);
        }
    }
}
