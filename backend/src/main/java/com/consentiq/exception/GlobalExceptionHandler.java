package com.consentiq.exception;

import com.consentiq.model.dto.response.ApiResponse;
import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @ExceptionHandler(ConsentNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleConsentNotFound(
            ConsentNotFoundException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleConsentNotFound | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleConsentNotFound | entity=Consent | id=n/a", user);
        log.error(
                "Exception in handleConsentNotFound | user={} | message={}",
                user,
                ex.getMessage(),
                ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error(ex.getMessage(), "CONSENT_NOT_FOUND"));
        log.debug("Exiting handleConsentNotFound | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(InvalidConsentStateException.class)
    public ResponseEntity<ApiResponse<Void>> handleInvalidState(
            InvalidConsentStateException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleInvalidState | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleInvalidState | entity=Consent | id=n/a", user);
        log.error("Exception in handleInvalidState | user={} | message={}", user, ex.getMessage(), ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.CONFLICT)
                        .body(ApiResponse.error(ex.getMessage(), "INVALID_STATE_TRANSITION"));
        log.debug("Exiting handleInvalidState | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(InvalidWorkflowStateException.class)
    public ResponseEntity<ApiResponse<Void>> handleInvalidWorkflowState(
            InvalidWorkflowStateException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleInvalidWorkflowState | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleInvalidWorkflowState | entity=Workflow | id=n/a", user);
        log.error(
                "Exception in handleInvalidWorkflowState | user={} | message={}",
                user,
                ex.getMessage(),
                ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.CONFLICT)
                        .body(ApiResponse.error(ex.getMessage(), "INVALID_STATE_TRANSITION"));
        log.debug("Exiting handleInvalidWorkflowState | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(UnauthorizedActionException.class)
    public ResponseEntity<ApiResponse<Void>> handleUnauthorizedAction(
            UnauthorizedActionException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleUnauthorizedAction | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleUnauthorizedAction | entity=n/a | id=n/a", user);
        log.error(
                "Exception in handleUnauthorizedAction | user={} | message={}",
                user,
                ex.getMessage(),
                ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body(ApiResponse.error(ex.getMessage(), "UNAUTHORIZED_ACTION"));
        log.debug("Exiting handleUnauthorizedAction | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(DuplicateConsentException.class)
    public ResponseEntity<ApiResponse<Void>> handleDuplicate(
            DuplicateConsentException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleDuplicate | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleDuplicate | entity=Consent | id=n/a", user);
        log.error("Exception in handleDuplicate | user={} | message={}", user, ex.getMessage(), ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.CONFLICT)
                        .body(ApiResponse.error(ex.getMessage(), "DUPLICATE_CONSENT"));
        log.debug("Exiting handleDuplicate | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Map<String, String>>> handleValidation(
            MethodArgumentNotValidException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleValidation | params: errorCount={}", ex.getBindingResult().getErrorCount());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleValidation | entity=Request | id=n/a", user);
        Map<String, String> errors = new HashMap<>();
        for (FieldError fe : ex.getBindingResult().getFieldErrors()) {
            errors.put(fe.getField(), fe.getDefaultMessage());
        }
        log.info("Processing request | entity=Validation | fieldErrorCount={}", errors.size());
        log.error("Exception in handleValidation | user={} | message={}", user, ex.getMessage(), ex);
        ApiResponse<Map<String, String>> body = ApiResponse.<Map<String, String>>builder()
                .success(false)
                .message(ex.getBindingResult().getFieldErrors().stream()
                        .map(FieldError::getDefaultMessage)
                        .filter(m -> m != null && !m.isBlank())
                        .findFirst()
                        .orElse("Validation failed"))
                .data(errors)
                .errorCode("VALIDATION_ERROR")
                .build();
        ResponseEntity<ApiResponse<Map<String, String>>> result =
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
        log.debug("Exiting handleValidation | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ApiResponse<Void>> handleUnreadable(
            HttpMessageNotReadableException ex, HttpServletRequest request) {
        String user = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.error("Exception in handleUnreadable | user={} | message={}", user, ex.getMessage());
        String message = "Malformed request body.";
        if (ex.getCause() instanceof InvalidFormatException ife
                && ife.getTargetType() != null
                && ife.getTargetType().isEnum()) {
            String field = ife.getPath().isEmpty()
                    ? "field"
                    : ife.getPath().get(ife.getPath().size() - 1).getFieldName();
            String allowed = Arrays.stream(ife.getTargetType().getEnumConstants())
                    .map(String::valueOf)
                    .collect(Collectors.joining(", "));
            message = "Invalid value for " + field + ". Allowed: " + allowed + ".";
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ApiResponse.error(message, "BAD_REQUEST"));
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiResponse<Void>> handleAccessDenied(
            AccessDeniedException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleAccessDenied | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleAccessDenied | entity=n/a | id=n/a", user);
        log.error("Exception in handleAccessDenied | user={} | message={}", user, ex.getMessage(), ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body(ApiResponse.error("You do not have permission to perform this action.", "ACCESS_DENIED"));
        log.debug("Exiting handleAccessDenied | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ApiResponse<Void>> handleBadCredentials(
            BadCredentialsException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleBadCredentials | params: message=****");
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleBadCredentials | entity=Auth | id=n/a", user);
        log.error("Exception in handleBadCredentials | user={} | message={}", user, ex.getMessage(), ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(
                                ApiResponse.error(
                                        "Sign-in failed. Invalid email or password.",
                                        "INVALID_CREDENTIALS"));
        log.debug("Exiting handleBadCredentials | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(AccountUnavailableException.class)
    public ResponseEntity<ApiResponse<Void>> handleAccountUnavailable(
            AccountUnavailableException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleAccountUnavailable | params: code={}", ex.getCode());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.warn("Login blocked | user={} | code={}", user, ex.getCode());
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body(ApiResponse.error(ex.getMessage(), ex.getCode()));
        log.debug("Exiting handleAccountUnavailable | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(OtpException.class)
    public ResponseEntity<ApiResponse<Void>> handleOtp(OtpException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleOtp | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.warn("OTP rejected | user={} | message={}", user, ex.getMessage());
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(ApiResponse.error(ex.getMessage(), "OTP_INVALID"));
        log.debug("Exiting handleOtp | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(PasswordResetException.class)
    public ResponseEntity<ApiResponse<Void>> handlePasswordReset(
            PasswordResetException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handlePasswordReset | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.warn("Password reset rejected | user={} | message={}", user, ex.getMessage());
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(ApiResponse.error(ex.getMessage(), "PASSWORD_RESET_ERROR"));
        log.debug("Exiting handlePasswordReset | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleUserNotFound(
            UsernameNotFoundException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleUserNotFound | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleUserNotFound | entity=User | id=n/a", user);
        log.error("Exception in handleUserNotFound | user={} | message={}", user, ex.getMessage(), ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        // Same reply as a wrong password so callers cannot tell which emails exist
                        .body(ApiResponse.error("Sign-in failed. Invalid email or password.", "INVALID_CREDENTIALS"));
        log.debug("Exiting handleUserNotFound | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(EmailDeliveryException.class)
    public ResponseEntity<ApiResponse<Void>> handleEmailDelivery(
            EmailDeliveryException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleEmailDelivery | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleEmailDelivery | entity=Email | id=n/a", user);
        log.error(
                "Exception in handleEmailDelivery | user={} | message={}",
                user,
                ex.getMessage(),
                ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                        .body(ApiResponse.error(ex.getMessage(), "EMAIL_DELIVERY_FAILED"));
        log.debug("Exiting handleEmailDelivery | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ApiResponse<Void>> handleIllegalArgument(
            IllegalArgumentException ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleIllegalArgument | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleIllegalArgument | entity=n/a | id=n/a", user);
        log.error("Exception in handleIllegalArgument | user={} | message={}", user, ex.getMessage(), ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(ApiResponse.error(ex.getMessage(), "BAD_REQUEST"));
        log.debug("Exiting handleIllegalArgument | result={}", result.getStatusCode());
        return result;
    }

    @ExceptionHandler(org.springframework.dao.DataIntegrityViolationException.class)
    public ResponseEntity<ApiResponse<Void>> handleDataIntegrity(
            org.springframework.dao.DataIntegrityViolationException ex, HttpServletRequest request) {
        String user = currentUser();
        log.error("Exception in handleDataIntegrity | user={} | uri={} | message={}", user, request.getRequestURI(),
                ex.getMostSpecificCause().getMessage());
        String detail = String.valueOf(ex.getMostSpecificCause().getMessage()).toLowerCase(java.util.Locale.ROOT);
        String message = request.getRequestURI().contains("/users") && detail.contains("email")
                ? "A user with this email already exists."
                : "This change conflicts with existing data. Please refresh and try again.";
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ApiResponse.error(message, "BAD_REQUEST"));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handleGeneric(Exception ex, HttpServletRequest request) {
        String user = currentUser();
        log.debug("Entering handleGeneric | params: message={}", ex.getMessage());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(), request.getRequestURI(), user);
        log.info("User={} | action=handleGeneric | entity=n/a | id=n/a", user);
        log.error("Exception in handleGeneric | user={} | message={}", user, ex.getMessage(), ex);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(
                                ApiResponse.error(
                                        "An unexpected error occurred. Please contact support.", "INTERNAL_ERROR"));
        log.debug("Exiting handleGeneric | result={}", result.getStatusCode());
        return result;
    }
}
