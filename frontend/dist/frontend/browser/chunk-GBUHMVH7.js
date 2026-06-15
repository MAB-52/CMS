import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  HttpClient,
  Injectable,
  catchError,
  environment,
  inject,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-SKWF3SJ6.js";

// src/app/core/services/customer-consent-record.service.ts
var CustomerConsentRecordService = class _CustomerConsentRecordService {
  constructor() {
    this.http = inject(HttpClient);
    this.notify = inject(NotificationService);
    this.base = `${environment.apiUrl}/admin/consent-records`;
  }
  handle(name) {
    return (err) => {
      const msg = err.error?.message || err.message || "Request failed";
      if (err.status !== 401 && err.status !== 403) {
        this.notify.error(name, msg);
      }
      return throwError(() => err);
    };
  }
  getRecordsByTemplate(consentDbId) {
    return this.http.get(`${this.base}/template/${consentDbId}`).pipe(catchError(this.handle("Consent records")));
  }
  getRecordsByCustomer(customerId) {
    return this.http.get(`${this.base}/customer/${encodeURIComponent(customerId)}`).pipe(catchError(this.handle("Consent records")));
  }
  getTemplateStats(consentDbId) {
    return this.http.get(`${this.base}/template/${consentDbId}/stats`).pipe(catchError(this.handle("Consent record stats")));
  }
  static {
    this.\u0275fac = function CustomerConsentRecordService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerConsentRecordService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomerConsentRecordService, factory: _CustomerConsentRecordService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerConsentRecordService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CustomerConsentRecordService
};
//# sourceMappingURL=chunk-GBUHMVH7.js.map
