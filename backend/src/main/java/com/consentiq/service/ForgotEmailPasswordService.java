package com.consentiq.service;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ForgotEmailPasswordService {

    private static final Logger log = LoggerFactory.getLogger(ForgotEmailPasswordService.class);

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${app.base-url:http://localhost:8080}")
    private String baseUrl;

    public void sendOtpEmail(String to, String otp) {
        String cu = currentUser();
        log.debug("Entering sendOtpEmail | params: to={}", to);
        log.info("User={} | action=sendOtpEmail | entity=Email | id=n/a", cu);
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(to);
            message.setSubject("Password Reset OTP - Consentiq");
            message.setText(String.format(
                    "Hello,\n\n"
                            + "You have requested to reset your password for Consentiq application.\n\n"
                            + "Your OTP for password reset is: %s\n\n"
                            + "This OTP is valid for 15 minutes.\n\n"
                            + "If you did not request this, please ignore this email.\n\n"
                            + "Best regards,\n"
                            + "Consentiq Team",
                    otp));
            mailSender.send(message);
            log.info("OTP email sent to: {}", to);
            log.debug("Exiting sendOtpEmail | completed successfully");
        } catch (Exception e) {
            log.error("Exception in sendOtpEmail | user={} | message={}", cu, e.getMessage(), e);
            throw new RuntimeException("Failed to send OTP email. Please try again later.");
        }
    }
}
