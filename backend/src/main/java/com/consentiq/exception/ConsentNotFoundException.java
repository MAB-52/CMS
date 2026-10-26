package com.consentiq.exception;

public class ConsentNotFoundException extends RuntimeException {

    public ConsentNotFoundException(String consentId) {
        super("Consent not found with ID: " + consentId);
    }

    public ConsentNotFoundException(Long dbId) {
        super("Consent not found with ID: " + dbId);
    }
}
