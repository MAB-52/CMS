import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QBB4LLCG.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/core/services/notification.service.ts
var DEFAULT_DURATION = {
  success: 3e3,
  error: 6e3,
  warning: 5e3,
  info: 4e3
};
var NotificationService = class _NotificationService {
  constructor() {
    this.toasts$ = new BehaviorSubject([]);
    this.seq = 0;
    this.toasts = this.toasts$.asObservable();
  }
  success(title, message) {
    this.push({ type: "success", title, message, duration: DEFAULT_DURATION.success, dismissible: false });
  }
  error(title, message) {
    this.push({ type: "error", title, message, duration: DEFAULT_DURATION.error, dismissible: true });
  }
  warning(title, message) {
    this.push({ type: "warning", title, message, duration: DEFAULT_DURATION.warning, dismissible: true });
  }
  info(title, message) {
    this.push({ type: "info", title, message, duration: DEFAULT_DURATION.info, dismissible: false });
  }
  dismiss(id) {
    this.toasts$.next(this.toasts$.value.filter((t) => t.id !== id));
  }
  push(cfg) {
    const id = crypto.randomUUID();
    const duration = cfg.duration ?? DEFAULT_DURATION[cfg.type];
    const toast = __spreadProps(__spreadValues({}, cfg), {
      id,
      duration,
      dismissible: cfg.dismissible ?? (cfg.type === "error" || cfg.type === "warning"),
      progressKey: ++this.seq
    });
    this.toasts$.next([...this.toasts$.value, toast]);
    setTimeout(() => this.dismiss(id), duration);
  }
  static {
    this.\u0275fac = function NotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-4RAWTRTP.js.map
