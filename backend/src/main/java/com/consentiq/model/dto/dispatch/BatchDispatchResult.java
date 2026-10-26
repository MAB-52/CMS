package com.consentiq.model.dto.dispatch;

import com.consentiq.enums.BroadcastExecutionStatus;

import java.util.Collections;
import java.util.List;

/**
 * Aggregated outcome of a batched HTML email dispatch run.
 */
public record BatchDispatchResult(int totalAttempted, int totalDelivered, int totalFailed,
		List<String> failedRecipientIdentifiers, BatchDispatchCompleteness completeness, int chunksTotal,
		int chunksCompleted, String progressNotes) {

	public BatchDispatchResult {
		failedRecipientIdentifiers = failedRecipientIdentifiers == null ? List.of()
				: List.copyOf(failedRecipientIdentifiers);
	}

	public static BatchDispatchResult empty() {
		return new BatchDispatchResult(0, 0, 0, List.of(), BatchDispatchCompleteness.FULL_SUCCESS, 0, 0, "");
	}

	/**
	 * Maps delivery counts to persisted execution status.
	 */
	public BroadcastExecutionStatus toBroadcastExecutionStatus() {
		if (totalFailed <= 0) {
			return BroadcastExecutionStatus.SUCCESS;
		}
		if (totalDelivered <= 0) {
			return BroadcastExecutionStatus.FAILED;
		}
		return BroadcastExecutionStatus.PARTIAL;
	}

	public List<String> failedRecipientIdentifiersView() {
		return Collections.unmodifiableList(failedRecipientIdentifiers);
	}
}
