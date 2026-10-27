package com.consentiq.exception;

/**
 * Login attempt with correct credentials for an account that may not sign in
 * (deactivated or deleted by an administrator).
 */
public class AccountUnavailableException extends RuntimeException {

    private final String code;

    public AccountUnavailableException(String message, String code) {
        super(message);
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
