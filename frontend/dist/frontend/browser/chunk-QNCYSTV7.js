import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QBB4LLCG.js";

// src/app/core/services/admin.service.ts
var AdminService = class _AdminService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/admin`;
  }
  getDashboardStats() {
    return this.http.get(`${this.base}/dashboard/stats`);
  }
  getMisDashboard() {
    return this.http.get(`${this.base}/dashboard/mis`);
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
//# sourceMappingURL=chunk-QNCYSTV7.js.map
