package com.consentiq.exception;

public class UnauthorizedActionException extends RuntimeException {

    /**
     * @param action either a user-facing sentence (shown as-is) or an internal action code such as
     *     "EDIT_CONSENT", which is replaced by a generic permission message so codes never reach the UI.
     */
    public UnauthorizedActionException(String action) {
        super(action != null && action.contains(" ")
                ? action
                : "You do not have permission to perform this action.");
    }
}
