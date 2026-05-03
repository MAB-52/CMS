package com.consentiq.exception;

public class InvalidConsentStateException extends RuntimeException {

    public InvalidConsentStateException(String currentStatus, String action) {
        super("Cannot perform '" + action + "' on a consent with status '" + currentStatus + "'. Invalid state transition.");
    }
}
