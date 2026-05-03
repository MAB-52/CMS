import {
  NotificationService
} from "./chunk-4RAWTRTP.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  Injectable,
  LoggerService,
  catchError,
  environment,
  inject,
  map,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-QBB4LLCG.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/core/services/consent.service.ts
var ConsentService = class _ConsentService {
  constructor() {
    this.http = inject(HttpClient);
    this.logger = inject(LoggerService);
    this.notify = inject(NotificationService);
  }
  parseDeliveryChannels(value) {
    if (Array.isArray(value)) {
      return value.map((v) => String(v));
    }
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
          return parsed.map((v) => String(v));
        }
      } catch {
        return [];
      }
    }
    return [];
  }
  normalizeConsent(c) {
    return __spreadProps(__spreadValues({}, c), {
      deliveryChannels: this.parseDeliveryChannels(c.deliveryChannels),
      tagsUsed: Array.isArray(c.tagsUsed) ? [...c.tagsUsed] : this.parseDeliveryChannels(c.tagsUsed)
    });
  }
  mapPaged(res) {
    if (!res.data?.content) {
      return res;
    }
    return __spreadProps(__spreadValues({}, res), {
      data: __spreadProps(__spreadValues({}, res.data), {
        content: res.data.content.map((x) => this.normalizeConsent(x))
      })
    });
  }
  handleError(operation) {
    return (err) => {
      const body = err.error;
      const msg = body?.message || err.message || "Unknown error";
      const code = body?.errorCode || "UNKNOWN_ERROR";
      this.logger.error("ConsentService", `Operation '${operation}' failed | HTTP ${err.status} | Code: ${code} | Msg: ${msg}`, err);
      let userMessage = msg;
      if (err.status === 401) {
        userMessage = "Session expired. Please log in again.";
      } else if (err.status === 403) {
        userMessage = "You do not have permission to perform this action.";
      } else if (err.status === 404) {
        userMessage = "The requested consent could not be found.";
      } else if (err.status === 409 && code === "INVALID_STATE_TRANSITION") {
        userMessage = msg;
      } else if (err.status === 409 && code === "DUPLICATE_CONSENT") {
        userMessage = msg;
      } else if (err.status === 400) {
        userMessage = msg || "Please check your inputs.";
      } else if (err.status === 0) {
        userMessage = "Cannot reach the server. Check your connection.";
      } else {
        userMessage = msg || "Something went wrong.";
      }
      if (err.status !== 401) {
        this.notify.error("Request failed", userMessage);
      }
      const enriched = Object.assign(err, { userMessage, errorCode: code });
      return throwError(() => enriched);
    };
  }
  getMyConsents(page, size, status) {
    let params = new HttpParams().set("page", String(page)).set("size", String(size));
    if (status) {
      params = params.set("status", status);
    }
    return this.http.get(`${environment.apiUrl}/consents/my-consents`, { params }).pipe(map((r) => this.mapPaged(r)), tap((res) => this.logger.debug("ConsentService", `getMyConsents count=${res.data?.content?.length ?? 0}`)), catchError(this.handleError("getMyConsents")));
  }
  getMakerStats() {
    return this.http.get(`${environment.apiUrl}/consents/stats/maker`).pipe(catchError(this.handleError("getMakerStats")));
  }
  getCheckerStats() {
    return this.http.get(`${environment.apiUrl}/consents/stats/checker`).pipe(catchError(this.handleError("getCheckerStats")));
  }
  getAllConsents(page, size, status, category) {
    let params = new HttpParams().set("page", String(page)).set("size", String(size));
    if (status) {
      params = params.set("status", status);
    }
    if (category) {
      params = params.set("category", category);
    }
    return this.http.get(`${environment.apiUrl}/consents`, { params }).pipe(map((r) => this.mapPaged(r)), tap((res) => this.logger.debug("ConsentService", `getAllConsents count=${res.data?.content?.length ?? 0}`)), catchError(this.handleError("getAllConsents")));
  }
  getConsentById(id) {
    return this.http.get(`${environment.apiUrl}/consents/${id}`).pipe(map((res) => res.data ? __spreadProps(__spreadValues({}, res), { data: this.normalizeConsent(res.data) }) : res), tap((res) => this.logger.debug("ConsentService", `getConsentById name=${res.data?.consentName}`)), catchError(this.handleError("getConsentById")));
  }
  createConsent(data) {
    const payload = __spreadProps(__spreadValues({}, data), { deliveryChannels: [...data.deliveryChannels || []] });
    return this.http.post(`${environment.apiUrl}/consents`, payload).pipe(map((res) => res.data ? __spreadProps(__spreadValues({}, res), { data: this.normalizeConsent(res.data) }) : res), tap((res) => this.logger.debug("ConsentService", `createConsent id=${res.data?.consentId}`)), catchError(this.handleError("createConsent")));
  }
  updateConsent(id, data) {
    const payload = __spreadProps(__spreadValues({}, data), { deliveryChannels: [...data.deliveryChannels || []] });
    return this.http.put(`${environment.apiUrl}/consents/${id}`, payload).pipe(map((res) => res.data ? __spreadProps(__spreadValues({}, res), { data: this.normalizeConsent(res.data) }) : res), tap((res) => this.logger.debug("ConsentService", `updateConsent version=${res.data?.version}`)), catchError(this.handleError("updateConsent")));
  }
  deleteConsent(id) {
    return this.http.delete(`${environment.apiUrl}/consents/${id}`).pipe(catchError(this.handleError("deleteConsent")));
  }
  saveDraft(id, data) {
    const headers = new HttpHeaders().set("X-Skip-Loading", "true");
    const payload = __spreadProps(__spreadValues({}, data), { deliveryChannels: [...data.deliveryChannels || []] });
    return this.http.post(`${environment.apiUrl}/consents/${id}/save-draft`, payload, { headers }).pipe(map((res) => res.data ? __spreadProps(__spreadValues({}, res), { data: this.normalizeConsent(res.data) }) : res), tap(() => this.logger.debug("ConsentService", `saveDraft Auto-saved at ${(/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour12: false })}`)), catchError(this.handleError("saveDraft")));
  }
  submitForApproval(id) {
    return this.http.post(`${environment.apiUrl}/consents/${id}/submit`, {}).pipe(map((res) => res.data ? __spreadProps(__spreadValues({}, res), { data: this.normalizeConsent(res.data) }) : res), tap((res) => this.logger.debug("ConsentService", `submitForApproval id=${res.data?.consentId}`)), catchError(this.handleError("submitForApproval")));
  }
  getPendingApprovals() {
    return this.http.get(`${environment.apiUrl}/consents/pending-approval`).pipe(map((res) => res.data ? __spreadProps(__spreadValues({}, res), {
      data: res.data.map((c) => this.normalizeConsent(c))
    }) : res), tap((res) => this.logger.debug("ConsentService", `getPendingApprovals count=${res.data?.length ?? 0}`)), catchError(this.handleError("getPendingApprovals")));
  }
  publishConsent(id) {
    return this.reviewConsent(id, "PUBLISH");
  }
  reviewConsent(id, action, reason, revisionMessage) {
    return this.http.post(`${environment.apiUrl}/consents/${id}/review`, {
      action,
      reason,
      revisionMessage
    }).pipe(map((res) => res.data ? __spreadProps(__spreadValues({}, res), { data: this.normalizeConsent(res.data) }) : res), tap((res) => this.logger.debug("ConsentService", `reviewConsent Action ${action} \u2192 status ${res.data?.status ?? "unknown"}`)), catchError(this.handleError("reviewConsent")));
  }
  getConsentDiff(id) {
    return this.http.get(`${environment.apiUrl}/consents/${id}/diff`).pipe(tap((res) => this.logger.debug("ConsentService", `getConsentDiff count=${res.data?.differences?.length ?? 0}`)), catchError(this.handleError("getConsentDiff")));
  }
  generateConsentId() {
    return this.http.get(`${environment.apiUrl}/consents/generate-id`).pipe(catchError(this.handleError("generateConsentId")));
  }
  getVersionHistory(id) {
    return this.http.get(`${environment.apiUrl}/consents/${id}/versions`).pipe(catchError(this.handleError("getVersionHistory")));
  }
  static {
    this.\u0275fac = function ConsentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsentService, factory: _ConsentService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ConsentService
};
//# sourceMappingURL=chunk-5L2IXPPD.js.map
