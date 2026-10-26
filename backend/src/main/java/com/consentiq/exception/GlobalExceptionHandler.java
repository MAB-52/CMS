package com.consentiq.exception;

import com.consentiq.model.dto.response.ApiResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

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
                .message("Validation failed")
                .data(errors)
                .errorCode("VALIDATION_ERROR")
                .build();
        ResponseEntity<ApiResponse<Map<String, String>>> result =
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
        log.debug("Exiting handleValidation | result={}", result.getStatusCode());
        return result;
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
                        .body(ApiResponse.error(ex.getMessage(), "ACCESS_DENIED"));
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
                                        "Invalid email or password. Please check your credentials.",
                                        "INVALID_CREDENTIALS"));
        log.debug("Exiting handleBadCredentials | result={}", result.getStatusCode());
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
                        .body(ApiResponse.error(ex.getMessage(), "USER_NOT_FOUND"));
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
