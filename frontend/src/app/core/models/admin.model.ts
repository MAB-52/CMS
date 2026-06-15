import type { PagedResponse } from './api-response.model';

// ── Legacy status (Customer entity — admin customer list only) ────────────────

export type AdminCustomerConsentStatus =
  | 'ACTIVE'
  | 'ACCEPTED'
  | 'PENDING'
  | 'INVITED'
  | 'EXPIRING_SOON'
  | 'EXPIRED'
  | 'DECLINED'
  | 'WITHDRAWN';

export const CUSTOMER_CONSENT_STATUS_LABELS: Record<string, string> = {
  ACTIVE: 'Active',
  ACCEPTED: 'Active',
  PENDING: 'Pending',
  INVITED: 'Invited',
  EXPIRING_SOON: 'Expiring Soon',
  EXPIRED: 'Expired',
  DECLINED: 'Declined',
  WITHDRAWN: 'Withdrawn',
};

export function customerConsentStatusLabel(code: string): string {
  return CUSTOMER_CONSENT_STATUS_LABELS[code] ?? code;
}

// ── New status (CustomerConsentRecord — all MIS report rows) ──────────────────

/**
 * Status values returned by MIS report endpoints.
 * Derived from CustomerConsentRecord, not from Customer.consentStatus
 * (which no longer exists on the backend entity).
 */
export type CustomerConsentRecordStatus =
  | 'ACCEPTED'
  | 'PENDING'
  | 'REJECTED'
  | 'WITHDRAWN'
  | 'EXPIRING_SOON'
  | 'EXPIRED';

export const CUSTOMER_CONSENT_RECORD_STATUS_LABELS: Record<string, string> = {
  ACCEPTED: 'Accepted',
  PENDING: 'Pending',
  REJECTED: 'Rejected',
  WITHDRAWN: 'Withdrawn',
  EXPIRING_SOON: 'Expiring Soon',
  EXPIRED: 'Expired',
};

export function customerConsentRecordStatusLabel(code: string | null | undefined): string {
  if (!code) return '—';
  return CUSTOMER_CONSENT_RECORD_STATUS_LABELS[code] ?? code;
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

export interface AdminDashboardStats {
  totalCustomers: number;
  activeConsents: number;
  pendingResponse: number;
  declined: number;
}

export interface AdminCustomerRow {
  customerId: string;
  customerName: string;
  mobileNumber: string;
  email: string | null;
  consentStatus: AdminCustomerConsentStatus | string;
  lastUpdated: string;
}

export interface AdminConsentTemplate {
  id: number;
  consentId: string;
  consentName: string;
  channelEmail: boolean;
  channelSms: boolean;
  channelPush: boolean;
  channelWhatsapp: boolean;
  channelRcs: boolean;
}

export interface CaptureConsentSearchResult {
  customerId: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  activeDeliveryChannels: string[];
  consentStatus?: string | null;
  consentValidUntil?: string | null;
  lastConsentInviteSentAt?: string | null;
  lastConsentResponseAt?: string | null;
  reEngagementEligibleAfter?: string | null;
  vip?: boolean | null;
}

export interface SendConsentLinkPayload {
  customerId: string;
  consentTemplateId: number;
  deliveryChannels: string[];
  consentType: string;
}

export interface SendConsentLinkResult {
  inviteLink: string;
  message: string;
}

export interface RecordOnBehalfPayload {
  customerId: string;
  consentType: string;
  consentTemplateId: number;
  mode: string;
  sourceChannel: string;
  consentStatus: string;
  evidenceReference?: string;
  selectedChannels?: string[];
  selectedLanguages?: string[];
}

export interface CustomerChannelPreferenceResponse {
  customerId: string;
  consentDbId: number;
  prefEmail: boolean;
  prefSms: boolean;
  prefPush: boolean;
  prefWhatsapp: boolean;
  prefRcs: boolean;
}

// ── MIS dashboard (legacy summary widget) ─────────────────────────────────────

export interface AdminMisKpi {
  totalCustomers: number;
  consentRate: number;
  activeConsents: number;
  pendingResponse: number;
  declined: number;
  pendingMcApprovals: number;
}

export interface AdminMisChannelRow {
  channel: string;
  percentage: number;
}

export interface AdminMisMakerChecker {
  consentMcCompleted: number;
  ruleMcCompleted: number;
  broadcastMcCompleted: number;
  rejections: number;
  averageApprovalHours: number;
  approvalRate: number;
}

export interface AdminMisDashboard {
  kpi: AdminMisKpi;
  channelPerformance: AdminMisChannelRow[];
  makerChecker: AdminMisMakerChecker;
}

// ── User management ───────────────────────────────────────────────────────────

export type UserRole = 'ADMIN' | 'MAKER' | 'CHECKER';

export interface AdminUser {
  id: number;
  fullName: string;
  email: string;
  role: UserRole;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserPayload {
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface UpdateUserPayload {
  fullName?: string;
  email?: string;
  password?: string;
  role?: UserRole;
  active?: boolean;
}

// ── MIS — shared types ────────────────────────────────────────────────────────

export type MisConsentWorkflowStatus =
  | 'DRAFT'
  | 'PENDING_APPROVAL'
  | 'APPROVED'
  | 'REJECTED'
  | 'PUBLISHED'
  | 'REVISION_REQUESTED';

export interface MisMakerCheckerSnapshot {
  consentMcCompleted: number;
  ruleMcCompleted: number;
  broadcastMcCompleted: number;
  rejections: number;
  averageApprovalHours: number;
  approvalRate: number;
}

export interface MisTimeSeriesCountPoint {
  period: string;
  count: number;
}

export interface MisKpiCard {
  label: string;
  tooltip: string;
  value: number;
  changePercentVsPrior: number | null;
}

// ── MIS — Executive KPIs ──────────────────────────────────────────────────────

export interface MisExecutiveKpis {
  totalConsentsCollected: number;
  activeConsents: number;
  expiredConsents: number;
  revokedConsents: number;
  pendingConsentRequests: number;
  consentAcceptanceRatePercent: number;
  vipTotalCustomers: number;
  vipActiveConsents: number;
  vipConsentRatePercent: number;
  nonVipTotalCustomers: number;
  nonVipActiveConsents: number;
  nonVipConsentRatePercent: number;
  complianceScorePercent: number;
  sla48hAdherencePercent: number;
  makerChecker: MisMakerCheckerSnapshot;
}

// ── MIS — Consent trend ───────────────────────────────────────────────────────

export interface MisConsentTrend {
  groupBy: string;
  series: MisTimeSeriesCountPoint[];
}

// ── MIS — Customer consent report ─────────────────────────────────────────────
// consentStatus changed from AdminCustomerConsentStatus to CustomerConsentRecordStatus
// because the backend now derives it from CustomerConsentRecord, not Customer.consentStatus.

export interface MisCustomerConsentReportRow {
  customerId: string;
  customerName: string;
  mobileNumber: string;
  email: string | null;
  consentStatus: CustomerConsentRecordStatus | string | null;
  consentValidUntil: string | null;
  lastConsentInviteSentAt: string | null;
  lastConsentResponseAt: string | null;
  reEngagementEligibleAfter: string | null;
  vipFlag: boolean;
}

// ── MIS — Expiry report ───────────────────────────────────────────────────────
// consentStatus changed from AdminCustomerConsentStatus to CustomerConsentRecordStatus.

export interface MisExpiryReportRow {
  customerId: string;
  customerName: string;
  mobileNumber: string;
  email: string | null;
  consentStatus: CustomerConsentRecordStatus | string | null;
  consentValidUntil: string | null;
  lastConsentInviteSentAt: string | null;
  daysUntilExpiry: number | null;
  vipFlag: boolean;
}

// ── MIS — Revocation report ───────────────────────────────────────────────────
// consentStatus changed from AdminCustomerConsentStatus to CustomerConsentRecordStatus.

export interface MisRevocationReportRow {
  customerId: string;
  customerName: string;
  mobileNumber: string;
  email: string | null;
  consentStatus: CustomerConsentRecordStatus | string | null;
  lastConsentResponseAt: string | null;
  reEngagementEligibleAfter: string | null;
  vipFlag: boolean;
}

export interface MisRevocationTrend {
  series: MisTimeSeriesCountPoint[];
}

// ── MIS — Compliance ──────────────────────────────────────────────────────────

export interface MisComplianceOverview {
  totalCustomersWithActiveConsent: number;
  customersMissingConsent: number;
  customersWithExpiredConsent: number;
  compliancePercent: number;
}

// ── MIS — Channel performance ─────────────────────────────────────────────────

export interface MisChannelPerformanceRow {
  channel: string;
  totalInvitesSent: number;
  acceptedCount: number;
  declinedOrNoResponseCount: number;
  successRatePercent: number;
  dropOffPercent: number;
  templateMixPercent: number;
}

export interface MisChannelTemplatePerformanceRow {
  channel: string;
  consentDbId: number;
  consentId: string;
  consentName: string;
  invitesSent: number;
  acceptedCount: number;
  declinedOrPendingCount: number;
  successRatePercent: number;
}

// ── MIS — Agent performance ───────────────────────────────────────────────────

export interface MisAgentPerformanceRow {
  userId: number;
  fullName: string;
  email: string;
  role: UserRole;
  totalConsentsCreated: number;
  pendingApprovals: number;
  approvedOrPublished: number;
  rejectedConsents: number;
  averageProcessingHours: number;
  sla24hSubmitCompliancePercent: number;
}

// ── MIS — TAT report ──────────────────────────────────────────────────────────

export interface MisTatConsentRow {
  consentDbId: number;
  consentId: string;
  consentName: string;
  status: MisConsentWorkflowStatus | string;
  createdAt: string;
  submittedAt: string | null;
  reviewedAt: string | null;
  creatorUserId: number | null;
  creatorName: string | null;
  totalTatHours: number | null;
}

export interface MisTatSummary {
  averageTatHoursOverall: number | null;
  averageTatHoursApproved: number | null;
  averageTatHoursRejected: number | null;
  fastestTatHours: number | null;
  slowestTatHours: number | null;
}

export interface MisTatReportBundle {
  summary: MisTatSummary;
  page: PagedResponse<MisTatConsentRow>;
}

// ── MIS — Consent inventory ───────────────────────────────────────────────────

export interface MisConsentInventoryRow {
  consentDbId: number;
  consentId: string;
  consentName: string;
  category: string;
  status: string;
  version: number;
  createdAt: string;
  deliveryChannels: string[];
  /** Count of rule executions that reference this consent template. */
  totalBroadcastExecutions: number;
  publishedAt: string | null;
}

export interface MisConsentInventoryBundle {
  page: PagedResponse<MisConsentInventoryRow>;
  consentsByStatus: MisTimeSeriesCountPoint[];
  consentsByCategory: MisTimeSeriesCountPoint[];
}

// ── MIS — Active consents timeline ────────────────────────────────────────────

export interface MisActiveConsentsTimeline {
  groupBy: string;
  series: MisTimeSeriesCountPoint[];
  currentLiveTemplates: MisKpiCard;
  peakBucketActivations: MisKpiCard;
}

// ── MIS — Consent leaderboard ─────────────────────────────────────────────────

export interface MisLeaderboardChannelSplit {
  channel: string;
  invitesSent: number;
  acceptedCount: number;
  successRatePercent: number;
}

export interface MisConsentLeaderboardRow {
  consentDbId: number;
  consentId: string;
  consentName: string;
  totalBroadcastExecutions: number;
  totalRecipientsInvited: number;
  totalAccepted: number;
  acceptanceRatePercent: number;
  reEngagementRatePercent: number;
  averageHoursToAccept: number | null;
  channelSplits: MisLeaderboardChannelSplit[];
}

// ── MIS — Demographics ────────────────────────────────────────────────────────

export interface MisDemographicVipSplit {
  vipTotalCustomers: number;
  vipActiveConsents: number;
  vipConsentRatePercent: number;
  nonVipTotalCustomers: number;
  nonVipActiveConsents: number;
  nonVipConsentRatePercent: number;
  vipRateTrend: MisKpiCard;
  nonVipRateTrend: MisKpiCard;
}

export interface MisDemographicLifecycle {
  newCustomersInWindow: number;
  existingCustomersBeforeWindow: number;
  newCustomersWithActiveConsent: number;
  existingCustomersWithActiveConsent: number;
  newCustomerAdoptionRatePercent: number;
  existingCustomerAdoptionRatePercent: number;
  windowStart: string;
  windowEnd: string;
}

export interface MisReEngagementFunnel {
  invitedCustomers: number;
  pendingNoResponse: number;
  accepted: number;
  declinedOrWithdrawn: number;
}

export interface MisDemographicGeoRow {
  cityOrRegion: string;
  customerCount: number;
  withActiveConsentCount: number;
}

export interface MisDemographicGeo {
  geoDataAvailable: boolean;
  messageWhenUnavailable: string;
  topCities: MisDemographicGeoRow[];
}