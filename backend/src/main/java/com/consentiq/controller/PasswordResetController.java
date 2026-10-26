package com.consentiq.controller;

import com.consentiq.model.dto.request.ForgotPasswordRequest;
import com.consentiq.model.dto.request.ResetPasswordRequest;
import com.consentiq.model.dto.request.VerifyOtpRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.service.PasswordResetService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth/password")
@RequiredArgsConstructor
public class PasswordResetController {

    private static final Logger log = LoggerFactory.getLogger(PasswordResetController.class);

    private final PasswordResetService passwordResetService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @PostMapping("/forgot")
    public ResponseEntity<ApiResponse<Void>> forgotPassword(
            @Valid @RequestBody ForgotPasswordRequest request, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering forgotPassword | params: email={}", request.getEmail());
        log.info("User={} | action=forgotPassword | entity=PasswordReset | id=n/a", cu);
        passwordResetService.initiatePasswordReset(request);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.ok(ApiResponse.success("If the email exists, an OTP has been sent", null));
        log.debug("Exiting forgotPassword | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<ApiResponse<Void>> verifyOtp(
            @Valid @RequestBody VerifyOtpRequest request, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering verifyOtp | params: email={} | otp=****", request.getEmail());
        log.info("User={} | action=verifyOtp | entity=PasswordReset | id=n/a", cu);
        try {
            passwordResetService.verifyOtp(request);
            ResponseEntity<ApiResponse<Void>> ok =
                    ResponseEntity.ok(ApiResponse.success("OTP verified successfully", null));
            log.debug("Exiting verifyOtp | result={}", ok.getStatusCode());
            return ok;
        } catch (RuntimeException e) {
            log.error("Exception in verifyOtp | user={} | message={}", cu, e.getMessage(), e);
            ResponseEntity<ApiResponse<Void>> bad =
                    ResponseEntity.badRequest()
                            .body(ApiResponse.error(e.getMessage(), "VALIDATION_ERROR"));
            log.debug("Exiting verifyOtp | result={}", bad.getStatusCode());
            return bad;
        } catch (Exception e) {
            log.error("Exception in verifyOtp | user={} | message={}", cu, e.getMessage(), e);
            ResponseEntity<ApiResponse<Void>> err =
                    ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                            .body(ApiResponse.error("An unexpected error occurred. Please try again.", "INTERNAL_ERROR"));
            log.debug("Exiting verifyOtp | result={}", err.getStatusCode());
            return err;
        }
    }

    @PostMapping("/reset")
    public ResponseEntity<ApiResponse<Void>> resetPassword(
            @Valid @RequestBody ResetPasswordRequest request, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering resetPassword | params: email={} | password=****", request.getEmail());
        log.info("User={} | action=resetPassword | entity=PasswordReset | id=n/a", cu);
        passwordResetService.resetPassword(request);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.ok(
                        ApiResponse.success(
                                "Password reset successful. Please login with your new password.", null));
        log.debug("Exiting resetPassword | result={}", result.getStatusCode());
        return result;
    }
}
