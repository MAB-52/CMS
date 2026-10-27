import { PagedResponse } from './api-response.model';

export interface AuditLogEntry {
  id: number;
  userId: number;
  userName: string;
  action: string;
  entityType: string;
  entityId: number;
  entityName: string;
  description: string;
  ipAddress: string;
  performedAt: string;
}

/** GET /audit/my-reviews — a checker's own decisions (one page) plus all-time summary counts. */
export interface ReviewHistorySummary {
  total: number;
  approved: number;
  rejected: number;
  revisionRequested: number;
  published: number;
  consents: number;
  rules: number;
  broadcasts: number;
  last7Days: number;
}

export interface ReviewHistoryResponse {
  page: PagedResponse<AuditLogEntry>;
  summary: ReviewHistorySummary;
}

export type ReviewTypeFilter = 'ALL' | 'CONSENT' | 'RULE' | 'BROADCAST';
export type ReviewDecisionFilter = 'ALL' | 'APPROVED' | 'REJECTED' | 'REVISION_REQUESTED' | 'PUBLISHED';

export interface MakerTrailSummary {
  total: number;
  myActions: number;
  checkerDecisions: number;
  approved: number;
  rejected: number;
  revisionRequested: number;
}

export interface MakerTrailResponse {
  page: PagedResponse<AuditLogEntry>;
  summary: MakerTrailSummary;
}

export type MakerTrailScope = 'ALL' | 'MINE' | 'DECISIONS';
