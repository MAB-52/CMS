package com.consentiq.util;

import lombok.experimental.UtilityClass;

/** Minimum-length rules for Checker review reasons, shared by consent and broadcast-rule reviews. */
@UtilityClass
public class ReviewReasonUtil {

    public static final int APPROVE_MIN = 10;
    public static final int REJECT_MIN = 20;
    public static final int REVISION_MIN = 20;

    /**
     * Returns the trimmed reason, or throws when it is blank or shorter than {@code min} characters
     * (so whitespace-only or padded reasons are rejected even when called directly through the API).
     */
    public static String require(String text, int min, String label) {
        String trimmed = text == null ? "" : text.trim();
        if (trimmed.isEmpty()) {
            throw new IllegalArgumentException(label + " is required.");
        }
        if (trimmed.length() < min) {
            throw new IllegalArgumentException(label + " must be at least " + min + " characters.");
        }
        return trimmed;
    }
}
