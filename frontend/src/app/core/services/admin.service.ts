import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';
import { AuditLogEntry } from '../models/audit.model';
import {
  AdminConsentTemplate,
  AdminCustomerRow,
  AdminDashboardStats,
  AdminMisDashboard,
  AdminUser,
  CaptureConsentSearchResult,
  CreateUserPayload,
  MisAgentPerformanceRow,
  MisChannelPerformanceRow,
  MisComplianceOverview,
  MisConsentInventoryBundle,
  MisConsentLeaderboardRow,
  MisConsentTrend,
  MisConsentWorkflowStatus,
  MisCustomerConsentReportRow,
  MisActiveConsentsTimeline,
  MisChannelTemplatePerformanceRow,
  MisDemographicGeo,
  MisDemographicLifecycle,
  MisDemographicVipSplit,
  MisExecutiveKpis,
  MisExpiryReportRow,
  MisReEngagementFunnel,
  MisRevocationReportRow,
  MisRevocationTrend,
  MisTatReportBundle,
  RecordOnBehalfPayload,
  SendConsentLinkPayload,
  SendConsentLinkResult,
  UpdateUserPayload,
  CustomerChannelPreferenceResponse
} from '../models/admin.model';
import { BroadcastExecuteRecipientPreview } from '../models/customer-consent-record.model';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/admin`;
  private readonly misBase = `${this.base}/mis`;

  getDashboardStats(): Observable<ApiResponse<AdminDashboardStats>> {
    return this.http.get<ApiResponse<AdminDashboardStats>>(`${this.base}/dashboard/stats`);
  }

  getMisDashboard(): Observable<ApiResponse<AdminMisDashboard>> {
    return this.http.get<ApiResponse<AdminMisDashboard>>(`${this.base}/dashboard/mis`);
  }

  getMisExecutiveKpis(): Observable<ApiResponse<MisExecutiveKpis>> {
    return this.http.get<ApiResponse<MisExecutiveKpis>>(`${this.misBase}/executive-kpis`);
  }

  getMisConsentTrend(params: {
    groupBy: 'DAILY' | 'WEEKLY' | 'MONTHLY';
    fromDate?: string;
    toDate?: string;
  }): Observable<ApiResponse<MisConsentTrend>> {
    let hp = new HttpParams().set('groupBy', params.groupBy);
    if (params.fromDate) hp = hp.set('fromDate', params.fromDate);
    if (params.toDate) hp = hp.set('toDate', params.toDate);
    return this.http.get<ApiResponse<MisConsentTrend>>(`${this.misBase}/consent-trend`, { params: hp });
  }

  getMisCustomerConsentReport(params: {
    page: number;
    size: number;
    status?: string;
    vip?: boolean;
    fromDate?: string;
    toDate?: string;
    search?: string;
  }): Observable<ApiResponse<PagedResponse<MisCustomerConsentReportRow>>> {
    let hp = new HttpParams().set('page', String(params.page)).set('size', String(params.size));
    if (params.status?.trim()) hp = hp.set('status', params.status.trim());
    if (params.vip === true || params.vip === false) hp = hp.set('vip', String(params.vip));
    if (params.fromDate) hp = hp.set('fromDate', params.fromDate);
    if (params.toDate) hp = hp.set('toDate', params.toDate);
    if (params.search?.trim()) hp = hp.set('search', params.search.trim());
    return this.http.get<ApiResponse<PagedResponse<MisCustomerConsentReportRow>>>(
      `${this.misBase}/customer-consent-report`,
      { params: hp },
    );
  }

  exportMisCustomerConsentCsv(filters: {
    status?: string;
    vip?: boolean;
    fromDate?: string;
    toDate?: string;
    search?: string;
  }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.status?.trim()) hp = hp.set('status', filters.status.trim());
    if (filters.vip === true || filters.vip === false) hp = hp.set('vip', String(filters.vip));
    if (filters.fromDate) hp = hp.set('fromDate', filters.fromDate);
    if (filters.toDate) hp = hp.set('toDate', filters.toDate);
    if (filters.search?.trim()) hp = hp.set('search', filters.search.trim());
    return this.http.get(`${this.misBase}/customer-consent-report/export/csv`, { params: hp, responseType: 'blob' });
  }

  exportMisCustomerConsentExcel(filters: {
    status?: string;
    vip?: boolean;
    fromDate?: string;
    toDate?: string;
    search?: string;
  }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.status?.trim()) hp = hp.set('status', filters.status.trim());
    if (filters.vip === true || filters.vip === false) hp = hp.set('vip', String(filters.vip));
    if (filters.fromDate) hp = hp.set('fromDate', filters.fromDate);
    if (filters.toDate) hp = hp.set('toDate', filters.toDate);
    if (filters.search?.trim()) hp = hp.set('search', filters.search.trim());
    return this.http.get(`${this.misBase}/customer-consent-report/export/excel`, {
      params: hp,
      responseType: 'blob',
    });
  }

  getMisAuditReport(params: {
    page: number;
    size: number;
    entityType?: string;
    action?: string;
    fromDate?: string;
    toDate?: string;
    performedBy?: string;
    performedByRole?: string;
    workflowActionsOnly?: boolean;
    adminActorOnly?: boolean;
  }): Observable<ApiResponse<PagedResponse<AuditLogEntry>>> {
    let hp = new HttpParams().set('page', String(params.page)).set('size', String(params.size));
    if (params.entityType?.trim()) hp = hp.set('entityType', params.entityType.trim());
    if (params.action?.trim()) hp = hp.set('action', params.action.trim());
    if (params.fromDate) hp = hp.set('fromDate', params.fromDate);
    if (params.toDate) hp = hp.set('toDate', params.toDate);
    if (params.performedBy?.trim()) hp = hp.set('performedBy', params.performedBy.trim());
    if (params.performedByRole?.trim()) hp = hp.set('performedByRole', params.performedByRole.trim());
    if (params.workflowActionsOnly === true) hp = hp.set('workflowActionsOnly', 'true');
    if (params.adminActorOnly === true) hp = hp.set('adminActorOnly', 'true');
    return this.http.get<ApiResponse<PagedResponse<AuditLogEntry>>>(`${this.misBase}/audit-report`, { params: hp });
  }

  exportMisAuditCsv(filters: {
    entityType?: string;
    action?: string;
    fromDate?: string;
    toDate?: string;
    performedBy?: string;
    performedByRole?: string;
    workflowActionsOnly?: boolean;
    adminActorOnly?: boolean;
  }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.entityType?.trim()) hp = hp.set('entityType', filters.entityType.trim());
    if (filters.action?.trim()) hp = hp.set('action', filters.action.trim());
    if (filters.fromDate) hp = hp.set('fromDate', filters.fromDate);
    if (filters.toDate) hp = hp.set('toDate', filters.toDate);
    if (filters.performedBy?.trim()) hp = hp.set('performedBy', filters.performedBy.trim());
    if (filters.performedByRole?.trim()) hp = hp.set('performedByRole', filters.performedByRole.trim());
    if (filters.workflowActionsOnly === true) hp = hp.set('workflowActionsOnly', 'true');
    if (filters.adminActorOnly === true) hp = hp.set('adminActorOnly', 'true');
    return this.http.get(`${this.misBase}/audit-report/export/csv`, { params: hp, responseType: 'blob' });
  }

  exportMisAuditExcel(filters: {
    entityType?: string;
    action?: string;
    fromDate?: string;
    toDate?: string;
    performedBy?: string;
    performedByRole?: string;
    workflowActionsOnly?: boolean;
    adminActorOnly?: boolean;
  }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.entityType?.trim()) hp = hp.set('entityType', filters.entityType.trim());
    if (filters.action?.trim()) hp = hp.set('action', filters.action.trim());
    if (filters.fromDate) hp = hp.set('fromDate', filters.fromDate);
    if (filters.toDate) hp = hp.set('toDate', filters.toDate);
    if (filters.performedBy?.trim()) hp = hp.set('performedBy', filters.performedBy.trim());
    if (filters.performedByRole?.trim()) hp = hp.set('performedByRole', filters.performedByRole.trim());
    if (filters.workflowActionsOnly === true) hp = hp.set('workflowActionsOnly', 'true');
    if (filters.adminActorOnly === true) hp = hp.set('adminActorOnly', 'true');
    return this.http.get(`${this.misBase}/audit-report/export/excel`, { params: hp, responseType: 'blob' });
  }

  getMisAuditActions(): Observable<ApiResponse<string[]>> {
    return this.http.get<ApiResponse<string[]>>(`${this.misBase}/audit-actions`);
  }

  getMisExpiryReport(params: {
    type: 'EXPIRING' | 'EXPIRED';
    withinDays: number;
    page: number;
    size: number;
  }): Observable<ApiResponse<PagedResponse<MisExpiryReportRow>>> {
    const hp = new HttpParams()
      .set('type', params.type)
      .set('withinDays', String(params.withinDays))
      .set('page', String(params.page))
      .set('size', String(params.size));
    return this.http.get<ApiResponse<PagedResponse<MisExpiryReportRow>>>(`${this.misBase}/expiry-report`, { params: hp });
  }

  exportMisExpiryCsv(type: 'EXPIRING' | 'EXPIRED', withinDays: number): Observable<Blob> {
    const hp = new HttpParams().set('type', type).set('withinDays', String(withinDays));
    return this.http.get(`${this.misBase}/expiry-report/export/csv`, { params: hp, responseType: 'blob' });
  }

  exportMisExpiryExcel(type: 'EXPIRING' | 'EXPIRED', withinDays: number): Observable<Blob> {
    const hp = new HttpParams().set('type', type).set('withinDays', String(withinDays));
    return this.http.get(`${this.misBase}/expiry-report/export/excel`, { params: hp, responseType: 'blob' });
  }

  getMisRevocationReport(params: {
    page: number;
    size: number;
    fromDate?: string;
    toDate?: string;
    vip?: boolean;
  }): Observable<ApiResponse<PagedResponse<MisRevocationReportRow>>> {
    let hp = new HttpParams().set('page', String(params.page)).set('size', String(params.size));
    if (params.fromDate) hp = hp.set('fromDate', params.fromDate);
    if (params.toDate) hp = hp.set('toDate', params.toDate);
    if (params.vip === true || params.vip === false) hp = hp.set('vip', String(params.vip));
    return this.http.get<ApiResponse<PagedResponse<MisRevocationReportRow>>>(`${this.misBase}/revocation-report`, {
      params: hp,
    });
  }

  getMisRevocationTrend(): Observable<ApiResponse<MisRevocationTrend>> {
    return this.http.get<ApiResponse<MisRevocationTrend>>(`${this.misBase}/revocation-trend`);
  }

  exportMisRevocationCsv(filters: { fromDate?: string; toDate?: string; vip?: boolean }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.fromDate) hp = hp.set('fromDate', filters.fromDate);
    if (filters.toDate) hp = hp.set('toDate', filters.toDate);
    if (filters.vip === true || filters.vip === false) hp = hp.set('vip', String(filters.vip));
    return this.http.get(`${this.misBase}/revocation-report/export/csv`, { params: hp, responseType: 'blob' });
  }

  exportMisRevocationExcel(filters: { fromDate?: string; toDate?: string; vip?: boolean }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.fromDate) hp = hp.set('fromDate', filters.fromDate);
    if (filters.toDate) hp = hp.set('toDate', filters.toDate);
    if (filters.vip === true || filters.vip === false) hp = hp.set('vip', String(filters.vip));
    return this.http.get(`${this.misBase}/revocation-report/export/excel`, { params: hp, responseType: 'blob' });
  }

  getMisComplianceOverview(): Observable<ApiResponse<MisComplianceOverview>> {
    return this.http.get<ApiResponse<MisComplianceOverview>>(`${this.misBase}/compliance-overview`);
  }

  getMisChannelPerformance(): Observable<ApiResponse<MisChannelPerformanceRow[]>> {
    return this.http.get<ApiResponse<MisChannelPerformanceRow[]>>(`${this.misBase}/channel-performance`);
  }

  getMisAgentPerformance(params: { page: number; size: number }): Observable<ApiResponse<PagedResponse<MisAgentPerformanceRow>>> {
    const hp = new HttpParams().set('page', String(params.page)).set('size', String(params.size));
    return this.http.get<ApiResponse<PagedResponse<MisAgentPerformanceRow>>>(`${this.misBase}/agent-performance`, {
      params: hp,
    });
  }

  getMisTatReport(params: {
    page: number;
    size: number;
    fromDate?: string;
    toDate?: string;
    status?: MisConsentWorkflowStatus | '';
    creatorId?: number;
  }): Observable<ApiResponse<MisTatReportBundle>> {
    let hp = new HttpParams().set('page', String(params.page)).set('size', String(params.size));
    if (params.fromDate) hp = hp.set('fromDate', params.fromDate);
    if (params.toDate) hp = hp.set('toDate', params.toDate);
    if (params.status) hp = hp.set('status', params.status);
    if (params.creatorId != null) hp = hp.set('creatorId', String(params.creatorId));
    return this.http.get<ApiResponse<MisTatReportBundle>>(`${this.misBase}/tat-report`, { params: hp });
  }

  exportMisTatCsv(filters: {
    fromDate?: string;
    toDate?: string;
    status?: MisConsentWorkflowStatus | '';
    creatorId?: number;
  }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.fromDate) hp = hp.set('fromDate', filters.fromDate);
    if (filters.toDate) hp = hp.set('toDate', filters.toDate);
    if (filters.status) hp = hp.set('status', filters.status);
    if (filters.creatorId != null) hp = hp.set('creatorId', String(filters.creatorId));
    return this.http.get(`${this.misBase}/tat-report/export/csv`, { params: hp, responseType: 'blob' });
  }

  exportMisTatExcel(filters: {
    fromDate?: string;
    toDate?: string;
    status?: MisConsentWorkflowStatus | '';
    creatorId?: number;
  }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.fromDate) hp = hp.set('fromDate', filters.fromDate);
    if (filters.toDate) hp = hp.set('toDate', filters.toDate);
    if (filters.status) hp = hp.set('status', filters.status);
    if (filters.creatorId != null) hp = hp.set('creatorId', String(filters.creatorId));
    return this.http.get(`${this.misBase}/tat-report/export/excel`, { params: hp, responseType: 'blob' });
  }

  getMisConsentInventoryBundle(params: {
    page: number;
    size: number;
    category?: string;
    status?: string;
    search?: string;
    sortBy?: string;
    sortDirection?: string;
  }): Observable<ApiResponse<MisConsentInventoryBundle>> {
    let hp = new HttpParams().set('page', String(params.page)).set('size', String(params.size));
    if (params.category?.trim()) hp = hp.set('category', params.category.trim());
    if (params.status?.trim()) hp = hp.set('status', params.status.trim());
    if (params.search?.trim()) hp = hp.set('search', params.search.trim());
    if (params.sortBy?.trim()) hp = hp.set('sortBy', params.sortBy.trim());
    if (params.sortDirection?.trim()) hp = hp.set('sortDirection', params.sortDirection.trim());
    return this.http.get<ApiResponse<MisConsentInventoryBundle>>(`${this.misBase}/consent-inventory`, { params: hp });
  }

  exportMisConsentInventoryCsv(filters: { category?: string; status?: string; search?: string }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.category?.trim()) hp = hp.set('category', filters.category.trim());
    if (filters.status?.trim()) hp = hp.set('status', filters.status.trim());
    if (filters.search?.trim()) hp = hp.set('search', filters.search.trim());
    return this.http.get(`${this.misBase}/consent-inventory/export/csv`, { params: hp, responseType: 'blob' });
  }

  exportMisConsentInventoryExcel(filters: { category?: string; status?: string; search?: string }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.category?.trim()) hp = hp.set('category', filters.category.trim());
    if (filters.status?.trim()) hp = hp.set('status', filters.status.trim());
    if (filters.search?.trim()) hp = hp.set('search', filters.search.trim());
    return this.http.get(`${this.misBase}/consent-inventory/export/excel`, { params: hp, responseType: 'blob' });
  }

  getMisActiveConsentsTimeline(params: {
    groupBy: 'DAILY' | 'WEEKLY' | 'MONTHLY';
    fromDate?: string;
    toDate?: string;
  }): Observable<ApiResponse<MisActiveConsentsTimeline>> {
    let hp = new HttpParams().set('groupBy', params.groupBy);
    if (params.fromDate) hp = hp.set('fromDate', params.fromDate);
    if (params.toDate) hp = hp.set('toDate', params.toDate);
    return this.http.get<ApiResponse<MisActiveConsentsTimeline>>(`${this.misBase}/active-consents-timeline`, {
      params: hp,
    });
  }

  getMisChannelTemplatePerformance(channel?: string): Observable<ApiResponse<MisChannelTemplatePerformanceRow[]>> {
    let hp = new HttpParams();
    if (channel?.trim()) hp = hp.set('channel', channel.trim());
    return this.http.get<ApiResponse<MisChannelTemplatePerformanceRow[]>>(
      `${this.misBase}/channel-template-performance`,
      { params: hp },
    );
  }

  exportMisChannelTemplatePerformanceCsv(channel?: string): Observable<Blob> {
    const hp = channel?.trim() ? new HttpParams().set('channel', channel.trim()) : new HttpParams();
    return this.http.get(`${this.misBase}/channel-template-performance/export/csv`, {
      params: hp,
      responseType: 'blob',
    });
  }

  exportMisChannelTemplatePerformanceExcel(channel?: string): Observable<Blob> {
    const hp = channel?.trim() ? new HttpParams().set('channel', channel.trim()) : new HttpParams();
    return this.http.get(`${this.misBase}/channel-template-performance/export/excel`, {
      params: hp,
      responseType: 'blob',
    });
  }

  getMisConsentPerformanceLeaderboard(params: {
    page: number;
    size: number;
    sort?: string;
  }): Observable<ApiResponse<PagedResponse<MisConsentLeaderboardRow>>> {
    let hp = new HttpParams()
      .set('page', String(params.page))
      .set('size', String(params.size));
    if (params.sort?.trim()) hp = hp.set('sort', params.sort.trim());
    return this.http.get<ApiResponse<PagedResponse<MisConsentLeaderboardRow>>>(
      `${this.misBase}/consent-performance-leaderboard`,
      { params: hp },
    );
  }

  exportMisConsentPerformanceLeaderboardCsv(sort?: string): Observable<Blob> {
    const hp = sort?.trim() ? new HttpParams().set('sort', sort.trim()) : new HttpParams();
    return this.http.get(`${this.misBase}/consent-performance-leaderboard/export/csv`, {
      params: hp,
      responseType: 'blob',
    });
  }

  exportMisConsentPerformanceLeaderboardExcel(sort?: string): Observable<Blob> {
    const hp = sort?.trim() ? new HttpParams().set('sort', sort.trim()) : new HttpParams();
    return this.http.get(`${this.misBase}/consent-performance-leaderboard/export/excel`, {
      params: hp,
      responseType: 'blob',
    });
  }

  getMisDemographicVipSplit(): Observable<ApiResponse<MisDemographicVipSplit>> {
    return this.http.get<ApiResponse<MisDemographicVipSplit>>(`${this.misBase}/demographics/vip-split`);
  }

  getMisDemographicLifecycle(params: { fromDate?: string; toDate?: string }): Observable<ApiResponse<MisDemographicLifecycle>> {
    let hp = new HttpParams();
    if (params.fromDate) hp = hp.set('fromDate', params.fromDate);
    if (params.toDate) hp = hp.set('toDate', params.toDate);
    return this.http.get<ApiResponse<MisDemographicLifecycle>>(`${this.misBase}/demographics/lifecycle`, {
      params: hp,
    });
  }

  getMisReEngagementFunnel(): Observable<ApiResponse<MisReEngagementFunnel>> {
    return this.http.get<ApiResponse<MisReEngagementFunnel>>(`${this.misBase}/demographics/re-engagement-funnel`);
  }

  getMisDemographicGeo(): Observable<ApiResponse<MisDemographicGeo>> {
    return this.http.get<ApiResponse<MisDemographicGeo>>(`${this.misBase}/demographics/geo`);
  }

  getCustomers(params: {
    page: number;
    size: number;
    mobileNumber?: string;
    customerId?: string;
    consentStatus?: string;
    sortBy?: string;
    sortDir?: string;
  }): Observable<ApiResponse<PagedResponse<AdminCustomerRow>>> {
    let hp = new HttpParams()
      .set('page', String(params.page))
      .set('size', String(params.size));
    if (params.mobileNumber?.trim()) {
      hp = hp.set('mobileNumber', params.mobileNumber.trim());
    }
    if (params.customerId?.trim()) {
      hp = hp.set('customerId', params.customerId.trim());
    }
    if (params.consentStatus && params.consentStatus !== 'ALL') {
      hp = hp.set('consentStatus', params.consentStatus);
    }
    if (params.sortBy) {
      hp = hp.set('sortBy', params.sortBy);
    }
    if (params.sortDir) {
      hp = hp.set('sortDir', params.sortDir);
    }
    return this.http.get<ApiResponse<PagedResponse<AdminCustomerRow>>>(`${this.base}/customers`, { params: hp });
  }

  exportCustomersCsv(filters: { mobileNumber?: string; customerId?: string; consentStatus?: string }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.mobileNumber?.trim()) {
      hp = hp.set('mobileNumber', filters.mobileNumber.trim());
    }
    if (filters.customerId?.trim()) {
      hp = hp.set('customerId', filters.customerId.trim());
    }
    if (filters.consentStatus && filters.consentStatus !== 'ALL') {
      hp = hp.set('consentStatus', filters.consentStatus);
    }
    return this.http.get(`${this.base}/customers/export`, { params: hp, responseType: 'blob' });
  }

  captureSearch(q: string): Observable<ApiResponse<CaptureConsentSearchResult>> {
    const params = new HttpParams().set('q', q.trim());
    return this.http.get<ApiResponse<CaptureConsentSearchResult>>(`${this.base}/capture-consent/search`, { params });
  }

  listConsentTemplates(): Observable<ApiResponse<AdminConsentTemplate[]>> {
    return this.http.get<ApiResponse<AdminConsentTemplate[]>>(`${this.base}/consent-templates`);
  }

  sendConsentLink(body: SendConsentLinkPayload): Observable<ApiResponse<SendConsentLinkResult>> {
    return this.http.post<ApiResponse<SendConsentLinkResult>>(`${this.base}/capture-consent/send-link`, body);
  }

  recordOnBehalf(body: RecordOnBehalfPayload): Observable<ApiResponse<null>> {
    return this.http.post<ApiResponse<null>>(`${this.base}/capture-consent/record`, body);
  }

  listUsers(params: {
    page: number;
    size: number;
    search?: string;
    role?: string;
    active?: string;
    sortDir?: string;
  }): Observable<ApiResponse<PagedResponse<AdminUser>>> {
    let hp = new HttpParams()
      .set('page', String(params.page))
      .set('size', String(params.size));
    if (params.search?.trim()) hp = hp.set('search', params.search.trim());
    if (params.role && params.role !== 'ALL') hp = hp.set('role', params.role);
    if (params.active && params.active !== 'ALL') hp = hp.set('active', params.active);
    if (params.sortDir) hp = hp.set('sortDir', params.sortDir);
    return this.http.get<ApiResponse<PagedResponse<AdminUser>>>(`${this.base}/users`, { params: hp });
  }

  getUser(id: number): Observable<ApiResponse<AdminUser>> {
    return this.http.get<ApiResponse<AdminUser>>(`${this.base}/users/${id}`);
  }

  createUser(body: CreateUserPayload): Observable<ApiResponse<AdminUser>> {
    return this.http.post<ApiResponse<AdminUser>>(`${this.base}/users`, body);
  }

  updateUser(id: number, body: UpdateUserPayload): Observable<ApiResponse<AdminUser>> {
    return this.http.patch<ApiResponse<AdminUser>>(`${this.base}/users/${id}`, body);
  }

  deleteUser(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.base}/users/${id}`);
  }

  getBroadcastExecuteRecipientPreview(
    broadcastId: number,
  ): Observable<ApiResponse<BroadcastExecuteRecipientPreview>> {
    return this.http.get<ApiResponse<BroadcastExecuteRecipientPreview>>(
      `${this.base}/broadcasts/${broadcastId}/execute-recipient-preview`,
    );
  }

  getChannelPreferenceForAdmin(
    customerId: string,
    consentTemplateId: number,
  ): Observable<ApiResponse<CustomerChannelPreferenceResponse>> {
    const params = new HttpParams()
      .set('customerId', customerId)
      .set('consentTemplateId', String(consentTemplateId));
    return this.http.get<ApiResponse<CustomerChannelPreferenceResponse>>(
      `${this.base}/capture-consent/channel-preference`,
      { params },
    );
  }

  getLanguagePreferenceForAdmin(
    customerId: string,
    consentTemplateId: number,
  ): Observable<ApiResponse<string[]>> {
    const params = new HttpParams()
      .set('customerId', customerId)
      .set('consentTemplateId', String(consentTemplateId));
    return this.http.get<ApiResponse<string[]>>(
      `${this.base}/capture-consent/language-preference`,
      { params },
    );
  }
}
