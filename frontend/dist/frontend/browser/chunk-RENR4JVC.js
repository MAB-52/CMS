import {
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SKWF3SJ6.js";

// src/app/core/services/logger.service.ts
var LoggerService = class _LoggerService {
  stamp() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
  info(component, message, data) {
    const ts = this.stamp();
    console.log(`%c[INFO]%c [${ts}] [${component}] ${message}`, "color:#7c3aed;font-weight:bold", "color:inherit", data ?? "");
  }
  warn(component, message, data) {
    const ts = this.stamp();
    console.warn(`[WARN] [${ts}] [${component}] ${message}`, data ?? "");
  }
  error(component, message, error) {
    const ts = this.stamp();
    console.error(`[ERROR] [${ts}] [${component}] ${message}`, error ?? "");
  }
  group(component, label, ...data) {
    console.group(`[${this.stamp()}] [${component}] ${label}`);
    for (const d of data) {
      console.log(d);
    }
    console.groupEnd();
  }
  debug(component, message, data) {
    if (environment.production) {
      return;
    }
    const ts = this.stamp();
    console.debug(`%c[DEBUG]%c [${ts}] [${component}] ${message}`, "color:#059669;font-weight:bold", "color:inherit", data ?? "");
  }
  static {
    this.\u0275fac = function LoggerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoggerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoggerService, factory: _LoggerService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoggerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LoggerService
};
//# sourceMappingURL=chunk-RENR4JVC.js.map
