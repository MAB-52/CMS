import {
  ConfirmDialogComponent
} from "./chunk-GJSWBWWB.js";
import {
  AuthService
} from "./chunk-7EWS7SGB.js";
import {
  MatDialog
} from "./chunk-UE7UOPB6.js";
import {
  NotificationService
} from "./chunk-4RAWTRTP.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QBB4LLCG.js";

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
//# sourceMappingURL=chunk-UL4QQXDO.js.map
