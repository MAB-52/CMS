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
  throwError,
  ɵɵdefineInjectable
} from "./chunk-SKWF3SJ6.js";

// src/app/core/services/consent-rules.service.ts
var ConsentRulesService = class _ConsentRulesService {
  constructor() {
    this.http = inject(HttpClient);
    this.notify = inject(NotificationService);
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
  create(body) {
    return this.http.post(`${environment.apiUrl}/consent-rules`, body).pipe(catchError(this.handle("Rule")));
  }
  update(id, body) {
    return this.http.put(`${environment.apiUrl}/consent-rules/${id}`, body).pipe(catchError(this.handle("Rule")));
  }
  saveDraft(id, body) {
    return this.http.post(`${environment.apiUrl}/consent-rules/${id}/save-draft`, body).pipe(catchError(this.handle("Rule")));
  }
  submit(id) {
    return this.http.post(`${environment.apiUrl}/consent-rules/${id}/submit`, {}).pipe(catchError(this.handle("Rule")));
  }
  review(id, body) {
    return this.http.post(`${environment.apiUrl}/consent-rules/${id}/review`, body).pipe(catchError(this.handle("Review")));
  }
  publishLive(id) {
    return this.http.post(`${environment.apiUrl}/consent-rules/${id}/publish-live`, {}).pipe(catchError(this.handle("Rule")));
  }
  getById(id) {
    return this.http.get(`${environment.apiUrl}/consent-rules/${id}`).pipe(catchError(this.handle("Rule")));
  }
  mine(page, size, status) {
    let params = new HttpParams().set("page", String(page)).set("size", String(size));
    if (status) {
      params = params.set("status", status);
    }
    return this.http.get(`${environment.apiUrl}/consent-rules/mine`, { params }).pipe(catchError(this.handle("Rules")));
  }
  listPending() {
    return this.http.get(`${environment.apiUrl}/consent-rules/pending`).pipe(catchError(this.handle("Rules")));
  }
  static {
    this.\u0275fac = function ConsentRulesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentRulesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsentRulesService, factory: _ConsentRulesService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentRulesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ConsentRulesService
};
//# sourceMappingURL=chunk-ZJPKKVVC.js.map
