package com.consentiq.exception;

public class InvalidWorkflowStateException extends RuntimeException {

    public InvalidWorkflowStateException(String currentStatus, String action) {
        super("Cannot perform '" + action + "' while status is '" + currentStatus + "'. Invalid state transition.");
    }
}
