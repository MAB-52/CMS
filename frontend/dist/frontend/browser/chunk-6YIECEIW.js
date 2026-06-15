import {
  ConfirmDialogComponent
} from "./chunk-GQSJPUX7.js";
import {
  AuthService
} from "./chunk-KO2HYL5G.js";
import {
  MatDialog
} from "./chunk-5RTMJKSC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SKWF3SJ6.js";

// src/app/core/services/logout-flow.service.ts
var LogoutFlowService = class _LogoutFlowService {
  constructor() {
    this.dialog = inject(MatDialog);
    this.auth = inject(AuthService);
    this.notify = inject(NotificationService);
  }
  confirmAndLogout() {
    const data = {
      icon: "\u{1F6AA}",
      iconColor: "rgba(99,102,241,0.12)",
      title: "Logout",
      body: "Are you sure you want to logout?",
      cancelLabel: "Cancel",
      confirmLabel: "Logout",
      confirmColor: "primary"
    };
    const ref = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data
    });
    ref.afterClosed().subscribe((ok) => {
      if (ok) {
        this.auth.logout();
        this.notify.success("You have been logged out.");
      }
    });
  }
  static {
    this.\u0275fac = function LogoutFlowService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LogoutFlowService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LogoutFlowService, factory: _LogoutFlowService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoutFlowService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LogoutFlowService
};
//# sourceMappingURL=chunk-6YIECEIW.js.map
