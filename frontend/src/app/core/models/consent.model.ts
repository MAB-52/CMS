import type { UserSummary } from './user.model';
import type {
  AudienceSegmentCode,
  ConsentRule,
  ConsentRuleType,
  PredefinedRuleScenario,
  WorkflowScheduleType,
} from './workflow.model';
import { ConsentTranslation, ConsentTranslationInput, ChannelLanguageCombo } from './consent-translation.types';
export type ConsentStatus =
  | 'DRAFT'
  | 'PENDING_APPROVAL'
  | 'APPROVED'
  | 'REJECTED'
  | 'PUBLISHED'
  | 'REVISION_REQUESTED';

export type ConsentCategory = 'MARKETING' | 'TRANSACTIONAL' | 'SERVICE';
export type ConsentType = 'NEW_TEMPLATE' | 'VERSION_UPDATE' | 'RENEWAL';

export interface Consent {
  id: number;
  consentId: string;
  consentName: string;
  description: string;
  category: ConsentCategory;
  validityPeriodDays: number;
  validityStartDate: string;
  validityEndDate: string;
  consentMessage: string;
  status: ConsentStatus;
  version: number;
  type: ConsentType;
  // deliveryChannels: string[];
  channelEmail: boolean;
  channelSms: boolean;
  channelPush: boolean;
  channelWhatsapp: boolean;
  channelRcs: boolean;
  tagsUsed: string[];
  searchTags: string;
  createdBy: UserSummary;
  submittedAt: string;
  reviewedBy: UserSummary;
  reviewedAt: string;
  rejectionReason: string;
  revisionMessage: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  /** Checker UI: consent was submitted with a paired rule draft. */
  linkedRuleIntent?: boolean;
  /** Populated for pending approvals when linked. */
  linkedRule?: ConsentRule | null;
  translations?: ConsentTranslation[];
  lastReviewedCombinations?: Record<string, string>[];
  revisionFlaggedCombinations?: Record<string, string>[];
}

export interface FieldDiff {
  fieldName: string;
  fieldLabel: string;
  oldValue: string;
  newValue: string;
  isModified: boolean;
}

export interface ConsentDiff {
  consentDbId: number;
  consentName: string;
  currentVersion: number;
  previousVersion: number;
  differences: FieldDiff[];
}

export interface MergeTag {
  id: number;
  tagKey: string;
  tagLabel: string;
  tagCategory: string;
  sampleValue: string;
}

export interface MakerStats {
  total: number;
  draft: number;
  pendingApproval: number;
  approved: number;
  published: number;
  revisionRequested: number;
}

export interface CheckerStats {
  pendingReview: number;
  approvedToday: number;
  rejectedTotal: number;
  totalReviewed: number;
}

export interface ConsentCreatePayload {
  consentName: string;
  description?: string;
  category: ConsentCategory;
  validityPeriodDays?: number;
  validityStartDate?: string;
  validityEndDate?: string;
  consentMessage?: string;
  // deliveryChannels: string[];
  channelEmail: boolean;
  channelSms: boolean;
  channelPush: boolean;
  channelWhatsapp: boolean;
  channelRcs: boolean;
  tagsUsed?: string[];
  searchTags?: string;
  type?: ConsentType;
  translations?: ConsentTranslationInput[];
}

/** Rule draft for POST /consents/linked (no consentTemplateId). */
export interface ConsentRuleLinkedDraftPayload {
  ruleName: string;
  ruleDescription?: string;
  ruleType: ConsentRuleType;
  predefinedScenario?: PredefinedRuleScenario | null;
  triggerEvent?: string;
  primarySegment: AudienceSegmentCode;
  additionalSegmentCodes?: string[];
  scheduleType: WorkflowScheduleType;
  scheduledAt?: string | null;
  recurringCron?: string | null;
  broadcastChannels: string[];
}

export interface LinkedConsentAndRuleCreatePayload {
  consent: ConsentCreatePayload;
  rule: ConsentRuleLinkedDraftPayload;
  createLinkedRule: boolean;
}

export interface LinkedConsentAndRuleResponseDto {
  consent: Consent;
  rule: ConsentRule;
  linked: boolean;
}

export interface ConsentReviewPayload {
  action: string;
  reason?: string;
  revisionMessage?: string;
  approveReason?: string;
  reviewedCombinations?: ChannelLanguageCombo[];
  flaggedCombinations?: ChannelLanguageCombo[];
}
