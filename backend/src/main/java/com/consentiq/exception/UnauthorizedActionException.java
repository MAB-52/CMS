package com.consentiq.exception;

public class UnauthorizedActionException extends RuntimeException {

    public UnauthorizedActionException(String action) {
        super("You are not authorized to perform: " + action);
    }
}
