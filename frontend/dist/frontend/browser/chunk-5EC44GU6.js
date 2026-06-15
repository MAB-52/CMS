import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SKWF3SJ6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/core/services/notification.service.ts
var DEFAULT_DURATION = {
  success: 3e3,
  error: 6e3,
  warning: 5e3,
  info: 4e3
};
var MAX_VISIBLE_TOASTS = 3;
var TOAST_THROTTLE_MS = 1500;
var NotificationService = class _NotificationService {
  constructor() {
    this.toasts$ = new BehaviorSubject([]);
    this.onceKeys = /* @__PURE__ */ new Set();
    this.lastQueuedAtByContent = /* @__PURE__ */ new Map();
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
  /** Shows a warning toast at most once per key until {@link clearOnceKeys} runs (e.g. after login). */
  warnOnce(key, displayMessage) {
    if (this.onceKeys.has(key)) {
      return;
    }
    this.onceKeys.add(key);
    this.warning("Session expired", displayMessage);
  }
  clearOnceKeys() {
    this.onceKeys.clear();
  }
  info(title, message) {
    this.push({ type: "info", title, message, duration: DEFAULT_DURATION.info, dismissible: false });
  }
  dismiss(id) {
    this.toasts$.next(this.toasts$.value.filter((t) => t.id !== id));
  }
  static contentKey(cfg) {
    const msg = cfg.message ?? "";
    return `${cfg.type}${cfg.title}${msg}`;
  }
  pruneThrottleMap(now) {
    const cutoff = now - TOAST_THROTTLE_MS;
    for (const [key, t] of this.lastQueuedAtByContent) {
      if (t < cutoff) {
        this.lastQueuedAtByContent.delete(key);
      }
    }
  }
  push(cfg) {
    const visible = this.toasts$.value;
    const msgNorm = cfg.message ?? "";
    const duplicateVisible = visible.some((t) => t.type === cfg.type && t.title === cfg.title && (t.message ?? "") === msgNorm);
    if (duplicateVisible) {
      return;
    }
    const contentKey = _NotificationService.contentKey(cfg);
    const now = Date.now();
    const lastQueued = this.lastQueuedAtByContent.get(contentKey);
    if (lastQueued !== void 0 && now - lastQueued < TOAST_THROTTLE_MS) {
      return;
    }
    let next = [...visible];
    if (next.length >= MAX_VISIBLE_TOASTS) {
      const idxOldestSameType = next.findIndex((t) => t.type === cfg.type);
      if (idxOldestSameType >= 0) {
        next.splice(idxOldestSameType, 1);
      } else {
        next.shift();
      }
    }
    const id = crypto.randomUUID();
    const duration = cfg.duration ?? DEFAULT_DURATION[cfg.type];
    const toast = __spreadProps(__spreadValues({}, cfg), {
      id,
      duration,
      dismissible: cfg.dismissible ?? (cfg.type === "error" || cfg.type === "warning"),
      progressKey: ++this.seq
    });
    this.pruneThrottleMap(now);
    this.lastQueuedAtByContent.set(contentKey, now);
    this.toasts$.next([...next, toast]);
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
//# sourceMappingURL=chunk-5EC44GU6.js.map
