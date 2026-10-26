package com.consentiq.exception;

public class DuplicateConsentException extends RuntimeException {

    public DuplicateConsentException(String name) {
        super("A consent with name '" + name + "' already exists.");
    }
}
