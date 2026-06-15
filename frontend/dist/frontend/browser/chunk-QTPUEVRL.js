import {
  LoggerService
} from "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  catchError,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SKWF3SJ6.js";

// src/app/core/services/audit.service.ts
var AuditService = class _AuditService {
  constructor() {
    this.http = inject(HttpClient);
    this.logger = inject(LoggerService);
    this.notify = inject(NotificationService);
  }
  getMyActivity(page, size) {
    const params = new HttpParams().set("page", String(page)).set("size", String(size));
    return this.http.get(`${environment.apiUrl}/audit/my-activity`, { params }).pipe(catchError((err) => {
      this.logger.error("AuditService", "getMyActivity failed", err);
      this.notify.error("Audit trail", "Failed to load your activity.");
      throw err;
    }));
  }
  getConsentAuditTrail(id) {
    return this.http.get(`${environment.apiUrl}/audit/consent/${id}`).pipe(catchError((err) => {
      this.logger.error("AuditService", "getConsentAuditTrail failed", err);
      this.notify.error("Audit trail", "Failed to load consent activity.");
      throw err;
    }));
  }
  getEntityAuditTrail(entityType, id) {
    const enc = encodeURIComponent(entityType);
    return this.http.get(`${environment.apiUrl}/audit/entity/${enc}/${id}`).pipe(catchError((err) => {
      this.logger.error("AuditService", "getEntityAuditTrail failed", err);
      this.notify.error("Audit trail", "Failed to load activity for this item.");
      throw err;
    }));
  }
  static {
    this.\u0275fac = function AuditService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditService, factory: _AuditService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuditService
};
//# sourceMappingURL=chunk-QTPUEVRL.js.map
