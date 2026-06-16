export type ConsentRuleStatus =
  | 'DRAFT'
  | 'PENDING_CHECKER_APPROVAL'
  | 'APPROVED'
  | 'REJECTED'
  | 'REVISION_REQUESTED'
  | 'LIVE';

export type BroadcastRequestStatus =
  | 'DRAFT'
  | 'PENDING_CHECKER_APPROVAL'
  | 'APPROVED'
  | 'REJECTED'
  | 'REVISION_REQUESTED'
  | 'READY_FOR_EXECUTION'
  | 'EXECUTED'
  | 'FAILED'
  | 'PARTIALLY_EXECUTED';

export type ConsentRuleType = 'PREDEFINED_SCENARIO' | 'CUSTOM';

export type PredefinedRuleScenario =
  | 'NEW_CUSTOMER_DETECTED'
  | 'CONSENT_NEARING_EXPIRY'
  | 'EXPIRED_CONSENT'
  | 'FIRST_SEND_NO_RESPONSE'
  | 'REMINDER_1_NO_RESPONSE'
  | 'REMINDER_2_NO_RESPONSE'
  | 'DECLINED_RE_ENGAGEMENT_AFTER_COOLDOWN'
  | 'VIP_PRIORITY_FAST_TRACK';

export type WorkflowScheduleType = 'IMMEDIATE' | 'SCHEDULED' | 'RECURRING';

// export type AudienceSegmentCode =
//   | 'NEW_CUSTOMER'
//   | 'NEW_CUSTOMERS'
//   | 'EXISTING_CUSTOMERS'
//   | 'PENDING_CONSENT'
//   | 'CONSENT_EXPIRING'
//   | 'EXPIRING_CONSENT'
//   | 'EXPIRED_CONSENT'
//   | 'NON_RESPONDER'
//   | 'VIP'
//   | 'DECLINED_RE_ENGAGEMENT'
//   | 'DECLINED_CUSTOMERS'
//   | 'ACCEPTED_CONSENT';

export type AudienceSegmentCode =
  | 'NEW_CUSTOMER'
  | 'NEW_CUSTOMERS'
  | 'NEW_CUSTOMERS_NOT_RESPONDED'
  | 'EXISTING_CUSTOMERS'
  | 'PENDING_CONSENT'
  | 'CONSENT_EXPIRING'
  | 'EXPIRING_CONSENT'
  | 'EXPIRED_CONSENT'
  | 'NON_RESPONDER'
  | 'VIP'
  | 'DECLINED_RE_ENGAGEMENT'
  | 'DECLINED_CUSTOMERS'
  | 'ACCEPTED_CONSENT';

export interface AudienceSegment {
  code: string;
  label: string;
  description: string;
  customerCount: number;
  selectable: boolean;
}

/** Human-readable labels for audience segment codes (API returns enum names). */
export const AUDIENCE_SEGMENT_LABELS: Record<string, string> = {
  NEW_CUSTOMER: 'New customers',
  NEW_CUSTOMERS: 'New Customers',
  EXISTING_CUSTOMERS: 'Existing Customers',
  PENDING_CONSENT: 'Pending Consent',
  CONSENT_EXPIRING: 'Consent expiring',
  EXPIRING_CONSENT: 'Consent Expiring Soon',
  EXPIRED_CONSENT: 'Consent Expired',
  NON_RESPONDER: 'Non-responders',
  VIP: 'VIP / priority',
  DECLINED_RE_ENGAGEMENT: 'Declined — re-engagement eligible',
  DECLINED_CUSTOMERS: 'Declined and Re-engageable',
  ACCEPTED_CONSENT: 'Active Consent',
};

export function audienceSegmentLabel(code: string): string {
  return AUDIENCE_SEGMENT_LABELS[code] ?? code;
}

export interface ConsentRule {
  id: number;
  ruleName: string;
  ruleDescription?: string | null;
  ruleType: ConsentRuleType;
  predefinedScenario?: PredefinedRuleScenario | null;
  triggerEvent?: string | null;
  primarySegment: AudienceSegmentCode;
  additionalSegmentCodes?: string[] | null;
  scheduleType: WorkflowScheduleType;
  scheduledAt?: string | null;
  recurringCron?: string | null;
  broadcastChannels?: string[] | null;
  consentTemplateId?: number | null;
  consentTemplateName?: string | null;
  status: ConsentRuleStatus;
  createdById: number;
  createdByName?: string | null;
  submittedAt?: string | null;
  reviewedById?: number | null;
  reviewedByName?: string | null;
  reviewedAt?: string | null;
  reviewerRemarks?: string | null;
  rejectionReason?: string | null;
  revisionReason?: string | null;
  approvedAt?: string | null;
  publishedAt?: string | null;
  executionActive?: boolean;
  lastExecutedAt?: string | null;
  nextExecutionAt?: string | null;
  executionRunning?: boolean;
  lastExecutionOutcome?: string | null;
  lastExecutionSummary?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface ConsentBroadcast {
  id: number;
  broadcastTitle: string;
  consentTemplateId?: number | null;
  consentTemplateName?: string | null;
  segmentCodes: string[];
  scheduleType: WorkflowScheduleType;
  scheduledAt?: string | null;
  recurringCron?: string | null;
  channels: string[];
  includeConsentLink: boolean;
  messageNotes?: string | null;
  relatedRuleId?: number | null;
  relatedRuleName?: string | null;
  broadcastActive: boolean;
  status: BroadcastRequestStatus;
  createdById: number;
  createdByName?: string | null;
  submittedAt?: string | null;
  reviewedById?: number | null;
  reviewedByName?: string | null;
  reviewedAt?: string | null;
  reviewerRemarks?: string | null;
  rejectionReason?: string | null;
  revisionReason?: string | null;
  approvedAt?: string | null;
  readyForExecutionAt?: string | null;
  lastRecipientCount?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  nextExecutionAt?: string | null;
}

export interface BroadcastExecution {
  id: number;
  broadcastRequestId: number;
  status: 'SUCCESS' | 'FAILED' | 'PARTIAL';
  recipientCount: number;
  channelResults?: Record<string, unknown> | null;
  summaryNotes?: string | null;
  executedById: number;
  executedByName?: string | null;
  startedAt: string;
  completedAt?: string | null;
  chunksTotal?: number | null;
  chunksCompleted?: number | null;
  progressNotes?: string | null;
}

export interface WorkflowReviewPayload {
  action: string;
  reason?: string;
  revisionMessage?: string;
  remarks?: string;
  approveReason?: string;
}
