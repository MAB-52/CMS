/** Per-template consent tracking (admin API). */
export type CustomerConsentRecordStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'WITHDRAWN'
  | 'EXPIRING_SOON'
  | 'EXPIRED';

export interface CustomerConsentRecordRow {
  id: number;
  customerId: string;
  consentDbId: number;
  consentName?: string | null;
  customerFullName?: string | null;
  status: CustomerConsentRecordStatus;
  respondedAt?: string | null;
  consentValidUntil?: string | null;
  lastInviteSentAt?: string | null;
  sourceRuleId?: number | null;
  sourceBroadcastId?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface CustomerConsentRecordStats {
  consentDbId: number;
  totalRecords: number;
  acceptedCount: number;
  rejectedCount: number;
  withdrawnCount: number;
  pendingCount: number;
  expiringSoonCount: number;
  expiredCount: number;
}

export interface RuleAudiencePreviewBreakdown {
  grossAudienceCount: number;
  inviteEligibleCount: number;
  alreadyAcceptedExcludedCount: number;
}

export interface BroadcastExecuteRecipientPreview {
  segmentUnionCount: number;
  willReceiveCount: number;
  excludedNotAcceptedCount: number;
}
