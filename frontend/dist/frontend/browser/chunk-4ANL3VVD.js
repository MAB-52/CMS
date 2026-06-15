import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SKWF3SJ6.js";

// src/app/core/services/admin.service.ts
var AdminService = class _AdminService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/admin`;
    this.misBase = `${this.base}/mis`;
  }
  getDashboardStats() {
    return this.http.get(`${this.base}/dashboard/stats`);
  }
  getMisDashboard() {
    return this.http.get(`${this.base}/dashboard/mis`);
  }
  getMisExecutiveKpis() {
    return this.http.get(`${this.misBase}/executive-kpis`);
  }
  getMisConsentTrend(params) {
    let hp = new HttpParams().set("groupBy", params.groupBy);
    if (params.fromDate)
      hp = hp.set("fromDate", params.fromDate);
    if (params.toDate)
      hp = hp.set("toDate", params.toDate);
    return this.http.get(`${this.misBase}/consent-trend`, { params: hp });
  }
  getMisCustomerConsentReport(params) {
    let hp = new HttpParams().set("page", String(params.page)).set("size", String(params.size));
    if (params.status?.trim())
      hp = hp.set("status", params.status.trim());
    if (params.vip === true || params.vip === false)
      hp = hp.set("vip", String(params.vip));
    if (params.fromDate)
      hp = hp.set("fromDate", params.fromDate);
    if (params.toDate)
      hp = hp.set("toDate", params.toDate);
    if (params.search?.trim())
      hp = hp.set("search", params.search.trim());
    return this.http.get(`${this.misBase}/customer-consent-report`, { params: hp });
  }
  exportMisCustomerConsentCsv(filters) {
    let hp = new HttpParams();
    if (filters.status?.trim())
      hp = hp.set("status", filters.status.trim());
    if (filters.vip === true || filters.vip === false)
      hp = hp.set("vip", String(filters.vip));
    if (filters.fromDate)
      hp = hp.set("fromDate", filters.fromDate);
    if (filters.toDate)
      hp = hp.set("toDate", filters.toDate);
    if (filters.search?.trim())
      hp = hp.set("search", filters.search.trim());
    return this.http.get(`${this.misBase}/customer-consent-report/export/csv`, { params: hp, responseType: "blob" });
  }
  exportMisCustomerConsentExcel(filters) {
    let hp = new HttpParams();
    if (filters.status?.trim())
      hp = hp.set("status", filters.status.trim());
    if (filters.vip === true || filters.vip === false)
      hp = hp.set("vip", String(filters.vip));
    if (filters.fromDate)
      hp = hp.set("fromDate", filters.fromDate);
    if (filters.toDate)
      hp = hp.set("toDate", filters.toDate);
    if (filters.search?.trim())
      hp = hp.set("search", filters.search.trim());
    return this.http.get(`${this.misBase}/customer-consent-report/export/excel`, {
      params: hp,
      responseType: "blob"
    });
  }
  getMisAuditReport(params) {
    let hp = new HttpParams().set("page", String(params.page)).set("size", String(params.size));
    if (params.entityType?.trim())
      hp = hp.set("entityType", params.entityType.trim());
    if (params.action?.trim())
      hp = hp.set("action", params.action.trim());
    if (params.fromDate)
      hp = hp.set("fromDate", params.fromDate);
    if (params.toDate)
      hp = hp.set("toDate", params.toDate);
    if (params.performedBy?.trim())
      hp = hp.set("performedBy", params.performedBy.trim());
    if (params.performedByRole?.trim())
      hp = hp.set("performedByRole", params.performedByRole.trim());
    if (params.workflowActionsOnly === true)
      hp = hp.set("workflowActionsOnly", "true");
    if (params.adminActorOnly === true)
      hp = hp.set("adminActorOnly", "true");
    return this.http.get(`${this.misBase}/audit-report`, { params: hp });
  }
  exportMisAuditCsv(filters) {
    let hp = new HttpParams();
    if (filters.entityType?.trim())
      hp = hp.set("entityType", filters.entityType.trim());
    if (filters.action?.trim())
      hp = hp.set("action", filters.action.trim());
    if (filters.fromDate)
      hp = hp.set("fromDate", filters.fromDate);
    if (filters.toDate)
      hp = hp.set("toDate", filters.toDate);
    if (filters.performedBy?.trim())
      hp = hp.set("performedBy", filters.performedBy.trim());
    if (filters.performedByRole?.trim())
      hp = hp.set("performedByRole", filters.performedByRole.trim());
    if (filters.workflowActionsOnly === true)
      hp = hp.set("workflowActionsOnly", "true");
    if (filters.adminActorOnly === true)
      hp = hp.set("adminActorOnly", "true");
    return this.http.get(`${this.misBase}/audit-report/export/csv`, { params: hp, responseType: "blob" });
  }
  exportMisAuditExcel(filters) {
    let hp = new HttpParams();
    if (filters.entityType?.trim())
      hp = hp.set("entityType", filters.entityType.trim());
    if (filters.action?.trim())
      hp = hp.set("action", filters.action.trim());
    if (filters.fromDate)
      hp = hp.set("fromDate", filters.fromDate);
    if (filters.toDate)
      hp = hp.set("toDate", filters.toDate);
    if (filters.performedBy?.trim())
      hp = hp.set("performedBy", filters.performedBy.trim());
    if (filters.performedByRole?.trim())
      hp = hp.set("performedByRole", filters.performedByRole.trim());
    if (filters.workflowActionsOnly === true)
      hp = hp.set("workflowActionsOnly", "true");
    if (filters.adminActorOnly === true)
      hp = hp.set("adminActorOnly", "true");
    return this.http.get(`${this.misBase}/audit-report/export/excel`, { params: hp, responseType: "blob" });
  }
  getMisAuditActions() {
    return this.http.get(`${this.misBase}/audit-actions`);
  }
  getMisExpiryReport(params) {
    const hp = new HttpParams().set("type", params.type).set("withinDays", String(params.withinDays)).set("page", String(params.page)).set("size", String(params.size));
    return this.http.get(`${this.misBase}/expiry-report`, { params: hp });
  }
  exportMisExpiryCsv(type, withinDays) {
    const hp = new HttpParams().set("type", type).set("withinDays", String(withinDays));
    return this.http.get(`${this.misBase}/expiry-report/export/csv`, { params: hp, responseType: "blob" });
  }
  exportMisExpiryExcel(type, withinDays) {
    const hp = new HttpParams().set("type", type).set("withinDays", String(withinDays));
    return this.http.get(`${this.misBase}/expiry-report/export/excel`, { params: hp, responseType: "blob" });
  }
  getMisRevocationReport(params) {
    let hp = new HttpParams().set("page", String(params.page)).set("size", String(params.size));
    if (params.fromDate)
      hp = hp.set("fromDate", params.fromDate);
    if (params.toDate)
      hp = hp.set("toDate", params.toDate);
    if (params.vip === true || params.vip === false)
      hp = hp.set("vip", String(params.vip));
    return this.http.get(`${this.misBase}/revocation-report`, {
      params: hp
    });
  }
  getMisRevocationTrend() {
    return this.http.get(`${this.misBase}/revocation-trend`);
  }
  exportMisRevocationCsv(filters) {
    let hp = new HttpParams();
    if (filters.fromDate)
      hp = hp.set("fromDate", filters.fromDate);
    if (filters.toDate)
      hp = hp.set("toDate", filters.toDate);
    if (filters.vip === true || filters.vip === false)
      hp = hp.set("vip", String(filters.vip));
    return this.http.get(`${this.misBase}/revocation-report/export/csv`, { params: hp, responseType: "blob" });
  }
  exportMisRevocationExcel(filters) {
    let hp = new HttpParams();
    if (filters.fromDate)
      hp = hp.set("fromDate", filters.fromDate);
    if (filters.toDate)
      hp = hp.set("toDate", filters.toDate);
    if (filters.vip === true || filters.vip === false)
      hp = hp.set("vip", String(filters.vip));
    return this.http.get(`${this.misBase}/revocation-report/export/excel`, { params: hp, responseType: "blob" });
  }
  getMisComplianceOverview() {
    return this.http.get(`${this.misBase}/compliance-overview`);
  }
  getMisChannelPerformance() {
    return this.http.get(`${this.misBase}/channel-performance`);
  }
  getMisAgentPerformance(params) {
    const hp = new HttpParams().set("page", String(params.page)).set("size", String(params.size));
    return this.http.get(`${this.misBase}/agent-performance`, {
      params: hp
    });
  }
  getMisTatReport(params) {
    let hp = new HttpParams().set("page", String(params.page)).set("size", String(params.size));
    if (params.fromDate)
      hp = hp.set("fromDate", params.fromDate);
    if (params.toDate)
      hp = hp.set("toDate", params.toDate);
    if (params.status)
      hp = hp.set("status", params.status);
    if (params.creatorId != null)
      hp = hp.set("creatorId", String(params.creatorId));
    return this.http.get(`${this.misBase}/tat-report`, { params: hp });
  }
  exportMisTatCsv(filters) {
    let hp = new HttpParams();
    if (filters.fromDate)
      hp = hp.set("fromDate", filters.fromDate);
    if (filters.toDate)
      hp = hp.set("toDate", filters.toDate);
    if (filters.status)
      hp = hp.set("status", filters.status);
    if (filters.creatorId != null)
      hp = hp.set("creatorId", String(filters.creatorId));
    return this.http.get(`${this.misBase}/tat-report/export/csv`, { params: hp, responseType: "blob" });
  }
  exportMisTatExcel(filters) {
    let hp = new HttpParams();
    if (filters.fromDate)
      hp = hp.set("fromDate", filters.fromDate);
    if (filters.toDate)
      hp = hp.set("toDate", filters.toDate);
    if (filters.status)
      hp = hp.set("status", filters.status);
    if (filters.creatorId != null)
      hp = hp.set("creatorId", String(filters.creatorId));
    return this.http.get(`${this.misBase}/tat-report/export/excel`, { params: hp, responseType: "blob" });
  }
  getMisConsentInventoryBundle(params) {
    let hp = new HttpParams().set("page", String(params.page)).set("size", String(params.size));
    if (params.category?.trim())
      hp = hp.set("category", params.category.trim());
    if (params.status?.trim())
      hp = hp.set("status", params.status.trim());
    if (params.search?.trim())
      hp = hp.set("search", params.search.trim());
    if (params.sortBy?.trim())
      hp = hp.set("sortBy", params.sortBy.trim());
    if (params.sortDirection?.trim())
      hp = hp.set("sortDirection", params.sortDirection.trim());
    return this.http.get(`${this.misBase}/consent-inventory`, { params: hp });
  }
  exportMisConsentInventoryCsv(filters) {
    let hp = new HttpParams();
    if (filters.category?.trim())
      hp = hp.set("category", filters.category.trim());
    if (filters.status?.trim())
      hp = hp.set("status", filters.status.trim());
    if (filters.search?.trim())
      hp = hp.set("search", filters.search.trim());
    return this.http.get(`${this.misBase}/consent-inventory/export/csv`, { params: hp, responseType: "blob" });
  }
  exportMisConsentInventoryExcel(filters) {
    let hp = new HttpParams();
    if (filters.category?.trim())
      hp = hp.set("category", filters.category.trim());
    if (filters.status?.trim())
      hp = hp.set("status", filters.status.trim());
    if (filters.search?.trim())
      hp = hp.set("search", filters.search.trim());
    return this.http.get(`${this.misBase}/consent-inventory/export/excel`, { params: hp, responseType: "blob" });
  }
  getMisActiveConsentsTimeline(params) {
    let hp = new HttpParams().set("groupBy", params.groupBy);
    if (params.fromDate)
      hp = hp.set("fromDate", params.fromDate);
    if (params.toDate)
      hp = hp.set("toDate", params.toDate);
    return this.http.get(`${this.misBase}/active-consents-timeline`, {
      params: hp
    });
  }
  getMisChannelTemplatePerformance(channel) {
    let hp = new HttpParams();
    if (channel?.trim())
      hp = hp.set("channel", channel.trim());
    return this.http.get(`${this.misBase}/channel-template-performance`, { params: hp });
  }
  exportMisChannelTemplatePerformanceCsv(channel) {
    const hp = channel?.trim() ? new HttpParams().set("channel", channel.trim()) : new HttpParams();
    return this.http.get(`${this.misBase}/channel-template-performance/export/csv`, {
      params: hp,
      responseType: "blob"
    });
  }
  exportMisChannelTemplatePerformanceExcel(channel) {
    const hp = channel?.trim() ? new HttpParams().set("channel", channel.trim()) : new HttpParams();
    return this.http.get(`${this.misBase}/channel-template-performance/export/excel`, {
      params: hp,
      responseType: "blob"
    });
  }
  getMisConsentPerformanceLeaderboard(params) {
    let hp = new HttpParams().set("page", String(params.page)).set("size", String(params.size));
    if (params.sort?.trim())
      hp = hp.set("sort", params.sort.trim());
    return this.http.get(`${this.misBase}/consent-performance-leaderboard`, { params: hp });
  }
  exportMisConsentPerformanceLeaderboardCsv(sort) {
    const hp = sort?.trim() ? new HttpParams().set("sort", sort.trim()) : new HttpParams();
    return this.http.get(`${this.misBase}/consent-performance-leaderboard/export/csv`, {
      params: hp,
      responseType: "blob"
    });
  }
  exportMisConsentPerformanceLeaderboardExcel(sort) {
    const hp = sort?.trim() ? new HttpParams().set("sort", sort.trim()) : new HttpParams();
    return this.http.get(`${this.misBase}/consent-performance-leaderboard/export/excel`, {
      params: hp,
      responseType: "blob"
    });
  }
  getMisDemographicVipSplit() {
    return this.http.get(`${this.misBase}/demographics/vip-split`);
  }
  getMisDemographicLifecycle(params) {
    let hp = new HttpParams();
    if (params.fromDate)
      hp = hp.set("fromDate", params.fromDate);
    if (params.toDate)
      hp = hp.set("toDate", params.toDate);
    return this.http.get(`${this.misBase}/demographics/lifecycle`, {
      params: hp
    });
  }
  getMisReEngagementFunnel() {
    return this.http.get(`${this.misBase}/demographics/re-engagement-funnel`);
  }
  getMisDemographicGeo() {
    return this.http.get(`${this.misBase}/demographics/geo`);
  }
  getCustomers(params) {
    let hp = new HttpParams().set("page", String(params.page)).set("size", String(params.size));
    if (params.mobileNumber?.trim()) {
      hp = hp.set("mobileNumber", params.mobileNumber.trim());
    }
    if (params.customerId?.trim()) {
      hp = hp.set("customerId", params.customerId.trim());
    }
    if (params.consentStatus && params.consentStatus !== "ALL") {
      hp = hp.set("consentStatus", params.consentStatus);
    }
    if (params.sortBy) {
      hp = hp.set("sortBy", params.sortBy);
    }
    if (params.sortDir) {
      hp = hp.set("sortDir", params.sortDir);
    }
    return this.http.get(`${this.base}/customers`, { params: hp });
  }
  exportCustomersCsv(filters) {
    let hp = new HttpParams();
    if (filters.mobileNumber?.trim()) {
      hp = hp.set("mobileNumber", filters.mobileNumber.trim());
    }
    if (filters.customerId?.trim()) {
      hp = hp.set("customerId", filters.customerId.trim());
    }
    if (filters.consentStatus && filters.consentStatus !== "ALL") {
      hp = hp.set("consentStatus", filters.consentStatus);
    }
    return this.http.get(`${this.base}/customers/export`, { params: hp, responseType: "blob" });
  }
  captureSearch(q) {
    const params = new HttpParams().set("q", q.trim());
    return this.http.get(`${this.base}/capture-consent/search`, { params });
  }
  listConsentTemplates() {
    return this.http.get(`${this.base}/consent-templates`);
  }
  sendConsentLink(body) {
    return this.http.post(`${this.base}/capture-consent/send-link`, body);
  }
  recordOnBehalf(body) {
    return this.http.post(`${this.base}/capture-consent/record`, body);
  }
  listUsers(params) {
    let hp = new HttpParams().set("page", String(params.page)).set("size", String(params.size));
    if (params.search?.trim())
      hp = hp.set("search", params.search.trim());
    if (params.role && params.role !== "ALL")
      hp = hp.set("role", params.role);
    if (params.active && params.active !== "ALL")
      hp = hp.set("active", params.active);
    if (params.sortDir)
      hp = hp.set("sortDir", params.sortDir);
    return this.http.get(`${this.base}/users`, { params: hp });
  }
  getUser(id) {
    return this.http.get(`${this.base}/users/${id}`);
  }
  createUser(body) {
    return this.http.post(`${this.base}/users`, body);
  }
  updateUser(id, body) {
    return this.http.patch(`${this.base}/users/${id}`, body);
  }
  deleteUser(id) {
    return this.http.delete(`${this.base}/users/${id}`);
  }
  getBroadcastExecuteRecipientPreview(broadcastId) {
    return this.http.get(`${this.base}/broadcasts/${broadcastId}/execute-recipient-preview`);
  }
  getChannelPreferenceForAdmin(customerId, consentTemplateId) {
    const params = new HttpParams().set("customerId", customerId).set("consentTemplateId", String(consentTemplateId));
    return this.http.get(`${this.base}/capture-consent/channel-preference`, { params });
  }
  getLanguagePreferenceForAdmin(customerId, consentTemplateId) {
    const params = new HttpParams().set("customerId", customerId).set("consentTemplateId", String(consentTemplateId));
    return this.http.get(`${this.base}/capture-consent/language-preference`, { params });
  }
  static {
    this.\u0275fac = function AdminService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AdminService
};
//# sourceMappingURL=chunk-4ANL3VVD.js.map
