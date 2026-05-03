import type { UserSummary } from './user.model';

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
  deliveryChannels: string[];
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
  deliveryChannels: string[];
  tagsUsed?: string[];
  searchTags?: string;
  type?: ConsentType;
}
