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
  consentStatus: 'ACTIVE' | 'PENDING' | 'DECLINED';
  lastUpdated: string;
}

export interface AdminConsentTemplate {
  id: number;
  consentId: string;
  consentName: string;
  deliveryChannels: string[];   
}

export interface CaptureConsentSearchResult {
  customerId: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  activeDeliveryChannels: string[]; 
}

export interface SendConsentLinkPayload {
  customerId: string;
  consentTemplateId: number;
  deliveryChannel: string;
  consentType: string;
}

export interface SendConsentLinkResult {
  inviteLink: string;
  message: string;
}

export interface RecordOnBehalfPayload {
  customerId: string;
  consentType: string;
  mode: string;
  sourceChannel: string;
  evidenceReference?: string;
}

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
