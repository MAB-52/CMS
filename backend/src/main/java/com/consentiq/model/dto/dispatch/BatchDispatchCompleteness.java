package com.consentiq.model.dto.dispatch;

/**
 * Aggregate outcome for a batch email run (all recipients), derived from delivery counts.
 */
public enum BatchDispatchCompleteness {
	FULL_SUCCESS,
	PARTIAL,
	TOTAL_FAILURE;

	public static BatchDispatchCompleteness fromCounts(int totalDelivered, int totalFailed) {
		if (totalFailed <= 0) {
			return FULL_SUCCESS;
		}
		if (totalDelivered <= 0) {
			return TOTAL_FAILURE;
		}
		return PARTIAL;
	}
}
