package com.consentiq.exception;

import com.consentiq.model.dto.response.ApiResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(ConsentNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleConsentNotFound(
            ConsentNotFoundException ex, HttpServletRequest request) {
        log.warn(
                "Consent not found | method={} | uri={} | errorCode=CONSENT_NOT_FOUND | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ApiResponse.error(ex.getMessage(), "CONSENT_NOT_FOUND"));
    }

    @ExceptionHandler(InvalidConsentStateException.class)
    public ResponseEntity<ApiResponse<Void>> handleInvalidState(
            InvalidConsentStateException ex, HttpServletRequest request) {
        log.warn(
                "Invalid state transition | method={} | uri={} | errorCode=INVALID_STATE_TRANSITION | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(ApiResponse.error(ex.getMessage(), "INVALID_STATE_TRANSITION"));
    }

    @ExceptionHandler(UnauthorizedActionException.class)
    public ResponseEntity<ApiResponse<Void>> handleUnauthorizedAction(
            UnauthorizedActionException ex, HttpServletRequest request) {
        log.warn(
                "Unauthorized action | method={} | uri={} | errorCode=UNAUTHORIZED_ACTION | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(ApiResponse.error(ex.getMessage(), "UNAUTHORIZED_ACTION"));
    }

    @ExceptionHandler(DuplicateConsentException.class)
    public ResponseEntity<ApiResponse<Void>> handleDuplicate(
            DuplicateConsentException ex, HttpServletRequest request) {
        log.warn(
                "Duplicate consent | method={} | uri={} | errorCode=DUPLICATE_CONSENT | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(ApiResponse.error(ex.getMessage(), "DUPLICATE_CONSENT"));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Map<String, String>>> handleValidation(
            MethodArgumentNotValidException ex, HttpServletRequest request) {
        Map<String, String> errors = new HashMap<>();
        for (FieldError fe : ex.getBindingResult().getFieldErrors()) {
            errors.put(fe.getField(), fe.getDefaultMessage());
        }
        log.warn(
                "Validation error | method={} | uri={} | errorCode=VALIDATION_ERROR | message={}",
                request.getMethod(),
                request.getRequestURI(),
                errors);
        ApiResponse<Map<String, String>> body = ApiResponse.<Map<String, String>>builder()
                .success(false)
                .message("Validation failed")
                .data(errors)
                .errorCode("VALIDATION_ERROR")
                .build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiResponse<Void>> handleAccessDenied(
            AccessDeniedException ex, HttpServletRequest request) {
        log.warn(
                "Access denied | method={} | uri={} | errorCode=ACCESS_DENIED | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(ApiResponse.error(ex.getMessage(), "ACCESS_DENIED"));
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ApiResponse<Void>> handleBadCredentials(
            BadCredentialsException ex, HttpServletRequest request) {
        log.warn(
                "Bad credentials | method={} | uri={} | errorCode=INVALID_CREDENTIALS | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(
                        ApiResponse.error(
                                "Invalid email or password. Please check your credentials.",
                                "INVALID_CREDENTIALS"));
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleUserNotFound(
            UsernameNotFoundException ex, HttpServletRequest request) {
        log.warn(
                "User not found | method={} | uri={} | errorCode=USER_NOT_FOUND | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.error(ex.getMessage(), "USER_NOT_FOUND"));
    }

    @ExceptionHandler(EmailDeliveryException.class)
    public ResponseEntity<ApiResponse<Void>> handleEmailDelivery(
            EmailDeliveryException ex, HttpServletRequest request) {
        log.error(
                "Email delivery failed | method={} | uri={} | errorCode=EMAIL_DELIVERY_FAILED | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage(),
                ex);
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(ApiResponse.error(ex.getMessage(), "EMAIL_DELIVERY_FAILED"));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ApiResponse<Void>> handleIllegalArgument(
            IllegalArgumentException ex, HttpServletRequest request) {
        log.warn(
                "Bad request | method={} | uri={} | errorCode=BAD_REQUEST | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ApiResponse.error(ex.getMessage(), "BAD_REQUEST"));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handleGeneric(Exception ex, HttpServletRequest request) {
        log.error(
                "Internal error | method={} | uri={} | errorCode=INTERNAL_ERROR | message={}",
                request.getMethod(),
                request.getRequestURI(),
                ex.getMessage(),
                ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(
                        ApiResponse.error(
                                "An unexpected error occurred. Please contact support.", "INTERNAL_ERROR"));
    }
}
