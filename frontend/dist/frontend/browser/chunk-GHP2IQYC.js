import {
  LogoutFlowService
} from "./chunk-6YIECEIW.js";
import "./chunk-GQSJPUX7.js";
import "./chunk-YB33ZBVX.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EKTRGZNL.js";
import "./chunk-4UOF66IB.js";
import {
  ConsentRulesService
} from "./chunk-ZJPKKVVC.js";
import {
  AuthService
} from "./chunk-KO2HYL5G.js";
import "./chunk-5RTMJKSC.js";
import "./chunk-FIYZFADG.js";
import "./chunk-ASPSHXFC.js";
import {
  ConsentService
} from "./chunk-CSLDYKDC.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-T6DLIJPT.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-DBZCAWGK.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-2TGCEGVP.js";
import "./chunk-23MDLYAU.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  catchError,
  environment,
  filter,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/broadcasts.service.ts
var BroadcastsService = class _BroadcastsService {
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
    return this.http.post(`${environment.apiUrl}/broadcasts`, body).pipe(catchError(this.handle("Broadcast")));
  }
  update(id, body) {
    return this.http.put(`${environment.apiUrl}/broadcasts/${id}`, body).pipe(catchError(this.handle("Broadcast")));
  }
  saveDraft(id, body) {
    return this.http.post(`${environment.apiUrl}/broadcasts/${id}/save-draft`, body).pipe(catchError(this.handle("Broadcast")));
  }
  submit(id) {
    return this.http.post(`${environment.apiUrl}/broadcasts/${id}/submit`, {}).pipe(catchError(this.handle("Broadcast")));
  }
  review(id, body) {
    return this.http.post(`${environment.apiUrl}/broadcasts/${id}/review`, body).pipe(catchError(this.handle("Review")));
  }
  execute(id) {
    return this.http.post(`${environment.apiUrl}/broadcasts/${id}/execute`, {}).pipe(catchError(this.handle("Execute")));
  }
  broadcastAgain(id) {
    return this.http.post(`${environment.apiUrl}/broadcasts/${id}/broadcast-again`, {}).pipe(catchError(this.handle("Broadcast Again")));
  }
  setActive(id, active) {
    const params = new HttpParams().set("active", String(active));
    return this.http.put(`${environment.apiUrl}/broadcasts/${id}/active`, {}, { params }).pipe(catchError(this.handle("Broadcast")));
  }
  getById(id) {
    return this.http.get(`${environment.apiUrl}/broadcasts/${id}`).pipe(catchError(this.handle("Broadcast")));
  }
  executions(id) {
    return this.http.get(`${environment.apiUrl}/broadcasts/${id}/executions`).pipe(catchError(this.handle("Executions")));
  }
  /**
   * Admin: full persistent history with optional filters.
   * GET /api/broadcasts
   */
  listAll(page, size, filter2 = {}) {
    let params = new HttpParams().set("page", String(page)).set("size", String(size));
    if (filter2.status)
      params = params.set("status", filter2.status);
    if (filter2.channel)
      params = params.set("channel", filter2.channel);
    if (filter2.templateId != null)
      params = params.set("templateId", String(filter2.templateId));
    if (filter2.creatorId != null)
      params = params.set("creatorId", String(filter2.creatorId));
    if (filter2.fromDate)
      params = params.set("fromDate", filter2.fromDate);
    if (filter2.toDate)
      params = params.set("toDate", filter2.toDate);
    if (filter2.search)
      params = params.set("search", filter2.search);
    return this.http.get(`${environment.apiUrl}/broadcasts/all`, { params }).pipe(catchError(this.handle("Broadcasts")));
  }
  mine(page, size, status) {
    let params = new HttpParams().set("page", String(page)).set("size", String(size));
    if (status)
      params = params.set("status", status);
    return this.http.get(`${environment.apiUrl}/broadcasts/mine`, { params }).pipe(catchError(this.handle("Broadcasts")));
  }
  // broadcast error solved here - hard coded below for that particular end point
  listPending() {
    return this.http.get(`${environment.apiUrl}/broadcasts/pending`).pipe(catchError((err) => {
      if (err.status === 500) {
        return of({
          success: true,
          data: [],
          message: "",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      return this.handle("Broadcasts")(err);
    }));
  }
  listReady() {
    return this.http.get(`${environment.apiUrl}/broadcasts/ready`).pipe(catchError(this.handle("Broadcasts")));
  }
  static {
    this.\u0275fac = function BroadcastsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BroadcastsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BroadcastsService, factory: _BroadcastsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BroadcastsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/checker/checker-sidebar/checker-sidebar.component.ts
function CheckerSidebarComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pendingCount > 99 ? "99+" : ctx_r0.pendingCount, " ");
  }
}
var CheckerSidebarComponent = class _CheckerSidebarComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.logout = inject(LogoutFlowService);
    this.pendingCount = 0;
  }
  initials() {
    const n = this.auth.getCurrentUser()?.fullName?.trim();
    if (!n) {
      return "?";
    }
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1) {
      return p[0].slice(0, 2).toUpperCase();
    }
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
  static {
    this.\u0275fac = function CheckerSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckerSidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckerSidebarComponent, selectors: [["app-checker-sidebar"]], inputs: { pendingCount: "pendingCount" }, decls: 51, vars: 3, consts: [[1, "sidebar"], [1, "brand"], [1, "brand__top"], [1, "logo-mark"], [1, "brand-name"], [1, "brand-sub"], [1, "nav-scroll"], [1, "group-label"], ["routerLink", "/checker/dashboard", "routerLinkActive", "active", "matRipple", "", 1, "nav-link"], [1, "nav-icon"], ["routerLink", "/checker/pending", "routerLinkActive", "active", "matRipple", "", 1, "nav-link"], [1, "pending-badge"], ["routerLink", "/checker/rules/pending", "routerLinkActive", "active", "matRipple", "", 1, "nav-link"], ["routerLink", "/checker/history", "routerLinkActive", "active", "matRipple", "", 1, "nav-link"], [1, "sidebar-footer"], [1, "user-card"], [1, "avatar"], [1, "user-meta"], [1, "user-name"], [1, "user-role"], ["type", "button", "matRipple", "", 1, "btn-logout", 3, "click"]], template: function CheckerSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, " CQ ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "div", 4);
        \u0275\u0275text(7, " ConsentIQ ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9, " Checker Workspace ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "nav", 6)(11, "div", 7);
        \u0275\u0275text(12, " Review Queue ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 8)(14, "div", 9)(15, "mat-icon");
        \u0275\u0275text(16, "dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18, " Dashboard ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "a", 10)(20, "div", 9)(21, "mat-icon");
        \u0275\u0275text(22, "pending_actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, " Pending Consents ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, CheckerSidebarComponent_Conditional_25_Template, 2, 1, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 12)(27, "div", 9)(28, "mat-icon");
        \u0275\u0275text(29, "rule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31, " Pending Broadcast Rules ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "a", 13)(33, "div", 9)(34, "mat-icon");
        \u0275\u0275text(35, "history");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37, " Review History ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 14)(39, "div", 15)(40, "div", 16);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 17)(43, "div", 18);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 19);
        \u0275\u0275text(46, " Compliance Head \xB7 Checker ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "button", 20);
        \u0275\u0275listener("click", function CheckerSidebarComponent_Template_button_click_47_listener() {
          return ctx.logout.confirmAndLogout();
        });
        \u0275\u0275elementStart(48, "mat-icon");
        \u0275\u0275text(49, " logout ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, " Logout ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(25);
        \u0275\u0275conditional(ctx.pendingCount > 0 ? 25 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1(" ", ctx.initials(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx.auth.getCurrentUser()) == null ? null : tmp_2_0.fullName) || "User", " ");
      }
    }, dependencies: [
      CommonModule,
      RouterLink,
      RouterLinkActive,
      MatIconModule,
      MatIcon,
      MatRippleModule,
      MatRipple,
      MatTooltipModule
    ], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: var(--sidebar-width);\n  height: 100vh;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      #111827 0%,\n      #0f172a 100%);\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  box-shadow: 6px 0 30px rgba(15, 23, 42, 0.18);\n}\n.brand[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 24px 20px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.brand[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: auto -40px -40px auto;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.18),\n      transparent 70%);\n  pointer-events: none;\n}\n.brand__top[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.logo-mark[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 0.03em;\n  box-shadow: 0 10px 24px rgba(99, 102, 241, 0.28);\n}\n.brand-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: #94a3b8;\n  font-size: 12px;\n  font-weight: 500;\n}\n.nav-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 14px;\n}\n.nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 999px;\n}\n.group-label[_ngcontent-%COMP%] {\n  margin: 0 10px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 48px;\n  padding: 0 14px;\n  margin-bottom: 6px;\n  border-radius: 16px;\n  text-decoration: none;\n  color: #cbd5e1;\n  overflow: hidden;\n  transition:\n    background 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: white;\n  transform: translateX(2px);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.22),\n      rgba(59, 130, 246, 0.12));\n  color: white;\n  border: 1px solid rgba(99, 102, 241, 0.26);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.16);\n}\n.nav-link.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 10px;\n  bottom: 10px;\n  width: 4px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      180deg,\n      #818cf8,\n      #6366f1);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  display: grid;\n  place-items: center;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #cbd5e1;\n  transition: background 0.18s ease, color 0.18s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%], \n.nav-link.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.24),\n      rgba(59, 130, 246, 0.18));\n  color: #ffffff;\n}\n.nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n.pending-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 7px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  color: white;\n  font-size: 10px;\n  font-weight: 800;\n  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 18px 16px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.02),\n      transparent);\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  margin-bottom: 14px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 13px;\n  font-weight: 800;\n  box-shadow: 0 8px 18px rgba(99, 102, 241, 0.25);\n}\n.user-meta[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-role[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.2),\n      rgba(220, 38, 38, 0.18));\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #fecaca;\n  box-shadow: 0 10px 24px rgba(239, 68, 68, 0.14);\n}\n.btn-logout[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 900px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 88px;\n  }\n  .brand-name[_ngcontent-%COMP%], \n   .brand-sub[_ngcontent-%COMP%], \n   .group-label[_ngcontent-%COMP%], \n   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .user-meta[_ngcontent-%COMP%], \n   .pending-badge[_ngcontent-%COMP%], \n   .btn-logout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .brand__top[_ngcontent-%COMP%], \n   .user-card[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 0;\n  }\n  .btn-logout[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=checker-sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckerSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-checker-sidebar", standalone: true, imports: [
      CommonModule,
      RouterLink,
      RouterLinkActive,
      MatIconModule,
      MatRippleModule,
      MatTooltipModule
    ], template: `
    <aside class="sidebar">

      <!-- BRAND -->
      <div class="brand">
        <div class="brand__top">

          <div class="logo-mark">
            CQ
          </div>
          <div>

            <div class="brand-name">
              ConsentIQ
            </div>

            <div class="brand-sub">
              Checker Workspace
            </div>
          </div>
        </div>
      </div>

      <!-- NAVIGATION -->
      <nav class="nav-scroll">

        <div class="group-label">
          Review Queue
        </div>
        <a
          routerLink="/checker/dashboard"
          routerLinkActive="active"
          class="nav-link"
          matRipple
        >
          <div class="nav-icon">
            <mat-icon>dashboard</mat-icon>
          </div>
          <span>
            Dashboard
          </span>
        </a>

        <a
          routerLink="/checker/pending"
          routerLinkActive="active"
          class="nav-link"
          matRipple
        >
          <div class="nav-icon">
            <mat-icon>pending_actions</mat-icon>
          </div>
          <span>
            Pending Consents
          </span>
          @if (pendingCount > 0) {
            <span class="pending-badge">
              {{ pendingCount > 99 ? '99+' : pendingCount }}
            </span>
          }
        </a>

        <a
          routerLink="/checker/rules/pending"
          routerLinkActive="active"
          class="nav-link"
          matRipple
        >
          <div class="nav-icon">
            <mat-icon>rule</mat-icon>
          </div>
          <span>
            Pending Broadcast Rules
          </span>
        </a>

        <a
          routerLink="/checker/history"
          routerLinkActive="active"
          class="nav-link"
          matRipple
        >
          <div class="nav-icon">
            <mat-icon>history</mat-icon>
          </div>
          <span>
            Review History
          </span>
        </a>
      </nav>

      <!-- FOOTER -->
      <div class="sidebar-footer">
        <div class="user-card">
          <div class="avatar">
            {{ initials() }}
          </div>

          <div class="user-meta">
            <div class="user-name">
              {{ auth.getCurrentUser()?.fullName || 'User' }}
            </div>

            <div class="user-role">
              Compliance Head \xB7 Checker
            </div>
          </div>
        </div>

        <button
          type="button"
          class="btn-logout"
          matRipple
          (click)="logout.confirmAndLogout()"
        >

          <mat-icon>
            logout
          </mat-icon>
          Logout
        </button>
      </div>
    </aside>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/checker/checker-sidebar/checker-sidebar.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n:host {\n  display: block;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: var(--sidebar-width);\n  height: 100vh;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      #111827 0%,\n      #0f172a 100%);\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  box-shadow: 6px 0 30px rgba(15, 23, 42, 0.18);\n}\n.brand {\n  position: relative;\n  padding: 24px 20px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.brand::after {\n  content: "";\n  position: absolute;\n  inset: auto -40px -40px auto;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.18),\n      transparent 70%);\n  pointer-events: none;\n}\n.brand__top {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.logo-mark {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 0.03em;\n  box-shadow: 0 10px 24px rgba(99, 102, 241, 0.28);\n}\n.brand-name {\n  color: white;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.brand-sub {\n  margin-top: 2px;\n  color: #94a3b8;\n  font-size: 12px;\n  font-weight: 500;\n}\n.nav-scroll {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 14px;\n}\n.nav-scroll::-webkit-scrollbar {\n  width: 6px;\n}\n.nav-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 999px;\n}\n.group-label {\n  margin: 0 10px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.nav-link {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 48px;\n  padding: 0 14px;\n  margin-bottom: 6px;\n  border-radius: 16px;\n  text-decoration: none;\n  color: #cbd5e1;\n  overflow: hidden;\n  transition:\n    background 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.nav-link:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: white;\n  transform: translateX(2px);\n}\n.nav-link.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.22),\n      rgba(59, 130, 246, 0.12));\n  color: white;\n  border: 1px solid rgba(99, 102, 241, 0.26);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.16);\n}\n.nav-link.active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 10px;\n  bottom: 10px;\n  width: 4px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      180deg,\n      #818cf8,\n      #6366f1);\n}\n.nav-icon {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  display: grid;\n  place-items: center;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #cbd5e1;\n  transition: background 0.18s ease, color 0.18s ease;\n}\n.nav-link:hover .nav-icon,\n.nav-link.active .nav-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.24),\n      rgba(59, 130, 246, 0.18));\n  color: #ffffff;\n}\n.nav-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-link span {\n  font-size: 14px;\n  font-weight: 600;\n}\n.pending-badge {\n  margin-left: auto;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 7px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  color: white;\n  font-size: 10px;\n  font-weight: 800;\n  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);\n}\n.sidebar-footer {\n  padding: 18px 16px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.02),\n      transparent);\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  margin-bottom: 14px;\n}\n.avatar {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 13px;\n  font-weight: 800;\n  box-shadow: 0 8px 18px rgba(99, 102, 241, 0.25);\n}\n.user-meta {\n  min-width: 0;\n}\n.user-name {\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-role {\n  margin-top: 2px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.btn-logout {\n  width: 100%;\n  height: 44px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.btn-logout:hover {\n  transform: translateY(-2px);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.2),\n      rgba(220, 38, 38, 0.18));\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #fecaca;\n  box-shadow: 0 10px 24px rgba(239, 68, 68, 0.14);\n}\n.btn-logout mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 900px) {\n  .sidebar {\n    width: 88px;\n  }\n  .brand-name,\n  .brand-sub,\n  .group-label,\n  .nav-link span,\n  .user-meta,\n  .pending-badge,\n  .btn-logout span {\n    display: none;\n  }\n  .brand__top,\n  .user-card {\n    justify-content: center;\n  }\n  .nav-link {\n    justify-content: center;\n    padding: 0;\n  }\n  .btn-logout {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=checker-sidebar.component.css.map */\n'] }]
  }], null, { pendingCount: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckerSidebarComponent, { className: "CheckerSidebarComponent", filePath: "src/app/features/checker/checker-sidebar/checker-sidebar.component.ts", lineNumber: 149 });
})();

// src/app/features/checker/checker-topbar/checker-topbar.component.ts
function CheckerTopbarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pendingCount > 9 ? "9+" : ctx_r0.pendingCount, " ");
  }
}
var CheckerTopbarComponent = class _CheckerTopbarComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.logout = inject(LogoutFlowService);
    this.pageTitle = "";
    this.pendingCount = 0;
  }
  initials() {
    const n = this.auth.getCurrentUser()?.fullName?.trim();
    if (!n) {
      return "?";
    }
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1) {
      return p[0].slice(0, 2).toUpperCase();
    }
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
  static {
    this.\u0275fac = function CheckerTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckerTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckerTopbarComponent, selectors: [["app-checker-topbar"]], inputs: { pageTitle: "pageTitle", pendingCount: "pendingCount" }, decls: 28, vars: 5, consts: [[1, "topbar"], [1, "topbar__left"], [1, "crumb"], [1, "crumb__label"], [1, "crumb__divider"], [1, "page-title"], [1, "topbar__right"], ["matRipple", "", "matTooltip", "Pending Queue", "routerLink", "/checker/pending", 1, "icon-btn"], [1, "badge"], [1, "profile-chip"], [1, "avatar-sm"], [1, "profile-meta"], [1, "profile-label"], [1, "profile-name"], ["type", "button", "matRipple", "", 1, "logout-btn", 3, "click"]], template: function CheckerTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, " Checker Workspace ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "strong");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h1", 5);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "a", 7)(13, "mat-icon");
        \u0275\u0275text(14, " notifications ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, CheckerTopbarComponent_Conditional_15_Template, 2, 1, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 10);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11)(20, "span", 12);
        \u0275\u0275text(21, " Reviewer ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 13);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "button", 14);
        \u0275\u0275listener("click", function CheckerTopbarComponent_Template_button_click_24_listener() {
          return ctx.logout.confirmAndLogout();
        });
        \u0275\u0275elementStart(25, "mat-icon");
        \u0275\u0275text(26, " logout ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " Logout ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.pageTitle, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.pageTitle, " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.pendingCount > 0 ? 15 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.initials(), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx.auth.getCurrentUser()) == null ? null : tmp_4_0.fullName, " ");
      }
    }, dependencies: [
      CommonModule,
      RouterLink,
      MatIconModule,
      MatIcon,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip
    ], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n[_nghost-%COMP%] {\n  display: block;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  min-height: 78px;\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(14px);\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n}\n.topbar__left[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.crumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.crumb__label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(79, 70, 229, 0.08);\n  color: #4f46e5;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n}\n.crumb__divider[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.crumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.topbar__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #475569;\n  text-decoration: none;\n  overflow: hidden;\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    background 0.18s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(99, 102, 241, 0.35);\n  background: #f8faff;\n  color: #4f46e5;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);\n}\n.icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  min-width: 17px;\n  height: 17px;\n  padding: 0 4px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  color: white;\n  font-size: 10px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 6px rgba(245, 158, 11, 0.35);\n}\n.profile-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 12px 6px 6px;\n  border-radius: 16px;\n  background: rgba(248, 250, 252, 0.92);\n  border: 1px solid #e2e8f0;\n}\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 12px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 14px rgba(99, 102, 241, 0.22);\n}\n.profile-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.profile-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.profile-name[_ngcontent-%COMP%] {\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 16px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  background: white;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    background 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 10px 22px rgba(239, 68, 68, 0.24);\n}\n.logout-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 900px) {\n  .topbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .topbar__right[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n@media (max-width: 640px) {\n  .topbar[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .profile-meta[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .logout-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=checker-topbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckerTopbarComponent, [{
    type: Component,
    args: [{ selector: "app-checker-topbar", standalone: true, imports: [
      CommonModule,
      RouterLink,
      MatIconModule,
      MatRippleModule,
      MatTooltipModule
    ], template: `
    <header class="topbar">
      <div class="topbar__left">
        <div class="crumb">
          <span class="crumb__label">
            Checker Workspace
          </span>
          <span class="crumb__divider">/</span>
          <strong>
            {{ pageTitle }}
          </strong>
        </div>
        <h1 class="page-title">
          {{ pageTitle }}
        </h1>
      </div>
      <div class="topbar__right">
        <a
          class="icon-btn"
          matRipple
          matTooltip="Pending Queue"
          routerLink="/checker/pending"
        >
          <mat-icon>
            notifications
          </mat-icon>
          @if (pendingCount > 0) {
            <span class="badge">
              {{ pendingCount > 9 ? '9+' : pendingCount }}
            </span>
          }
        </a>
        <div class="profile-chip">

          <div class="avatar-sm">
            {{ initials() }}
          </div>
          <div class="profile-meta">
            <span class="profile-label">
              Reviewer
            </span>
            <span class="profile-name">
              {{ auth.getCurrentUser()?.fullName }}
            </span>
          </div>
        </div>

        <button
          type="button"
          class="logout-btn"
          matRipple
          (click)="logout.confirmAndLogout()"
        >

          <mat-icon>
            logout
          </mat-icon>
          Logout
        </button>
      </div>
    </header>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/checker/checker-topbar/checker-topbar.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n:host {\n  display: block;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.topbar {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  min-height: 78px;\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(14px);\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9);\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n}\n.topbar__left {\n  min-width: 0;\n}\n.crumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.crumb__label {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(79, 70, 229, 0.08);\n  color: #4f46e5;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n}\n.crumb__divider {\n  color: #cbd5e1;\n}\n.crumb strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.page-title {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.topbar__right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.icon-btn {\n  position: relative;\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #475569;\n  text-decoration: none;\n  overflow: hidden;\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    background 0.18s ease;\n}\n.icon-btn:hover {\n  transform: translateY(-2px);\n  border-color: rgba(99, 102, 241, 0.35);\n  background: #f8faff;\n  color: #4f46e5;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);\n}\n.icon-btn mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.badge {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  min-width: 17px;\n  height: 17px;\n  padding: 0 4px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #f97316);\n  color: white;\n  font-size: 10px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 6px rgba(245, 158, 11, 0.35);\n}\n.profile-chip {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 12px 6px 6px;\n  border-radius: 16px;\n  background: rgba(248, 250, 252, 0.92);\n  border: 1px solid #e2e8f0;\n}\n.avatar-sm {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 12px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 14px rgba(99, 102, 241, 0.22);\n}\n.profile-meta {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.profile-label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.profile-name {\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.logout-btn {\n  height: 42px;\n  padding: 0 16px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  background: white;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    background 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.logout-btn:hover {\n  transform: translateY(-2px);\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 10px 22px rgba(239, 68, 68, 0.24);\n}\n.logout-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 900px) {\n  .topbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .topbar__right {\n    justify-content: space-between;\n  }\n}\n@media (max-width: 640px) {\n  .topbar {\n    padding: 14px 16px;\n  }\n  .page-title {\n    font-size: 20px;\n  }\n  .profile-meta {\n    display: none;\n  }\n  .logout-btn span {\n    display: none;\n  }\n}\n/*# sourceMappingURL=checker-topbar.component.css.map */\n'] }]
  }], null, { pageTitle: [{
    type: Input,
    args: [{ required: true }]
  }], pendingCount: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckerTopbarComponent, { className: "CheckerTopbarComponent", filePath: "src/app/features/checker/checker-topbar/checker-topbar.component.ts", lineNumber: 84 });
})();

// src/app/features/checker/checker-layout/checker-layout.component.ts
var CheckerLayoutComponent = class _CheckerLayoutComponent {
  constructor() {
    this.router = inject(Router);
    this.consentApi = inject(ConsentService);
    this.rulesApi = inject(ConsentRulesService);
    this.broadcastsApi = inject(BroadcastsService);
    this.pageTitle = signal("Dashboard");
    this.pendingCount = signal(0);
  }
  ngOnInit() {
    this.syncRouteTitle();
    this.refreshPending();
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.syncRouteTitle();
      this.refreshPending();
    });
  }
  syncRouteTitle() {
    let r = this.router.routerState.root;
    while (r.firstChild) {
      r = r.firstChild;
    }
    const t = r.snapshot.data?.["title"] || "Checker";
    this.pageTitle.set(t);
  }
  refreshPending() {
    forkJoin({
      consents: this.consentApi.getPendingApprovals(),
      rules: this.rulesApi.listPending(),
      broadcasts: this.broadcastsApi.listPending()
    }).subscribe({
      next: ({ consents, rules, broadcasts }) => {
        const c = consents.success && consents.data ? consents.data.length : 0;
        const r = rules.success && rules.data ? rules.data.length : 0;
        const b = broadcasts.success && broadcasts.data ? broadcasts.data.length : 0;
        this.pendingCount.set(c + r + b);
      },
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function CheckerLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckerLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckerLayoutComponent, selectors: [["app-checker-layout"]], decls: 6, vars: 3, consts: [[1, "shell"], [3, "pendingCount"], [1, "main"], [3, "pageTitle", "pendingCount"], [1, "content"]], template: function CheckerLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-checker-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "app-checker-topbar", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("pendingCount", ctx.pendingCount());
        \u0275\u0275advance(2);
        \u0275\u0275property("pageTitle", ctx.pageTitle())("pendingCount", ctx.pendingCount());
      }
    }, dependencies: [CheckerSidebarComponent, CheckerTopbarComponent, RouterOutlet], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--page-bg);\n}\n.main[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 28px 48px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=checker-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckerLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-checker-layout", standalone: true, imports: [CheckerSidebarComponent, CheckerTopbarComponent, RouterOutlet], template: `
    <div class="shell">
      <app-checker-sidebar [pendingCount]="pendingCount()" />
      <div class="main">
        <app-checker-topbar [pageTitle]="pageTitle()" [pendingCount]="pendingCount()" />
        <div class="content">
          <router-outlet />
        </div>
      </div>
    </div>
  `, styles: ['/* src/app/features/checker/checker-layout/checker-layout.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.shell {\n  display: flex;\n  min-height: 100vh;\n  background: var(--page-bg);\n}\n.main {\n  margin-left: var(--sidebar-width);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.content {\n  flex: 1;\n  padding: 24px 28px 48px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=checker-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckerLayoutComponent, { className: "CheckerLayoutComponent", filePath: "src/app/features/checker/checker-layout/checker-layout.component.ts", lineNumber: 28 });
})();
export {
  CheckerLayoutComponent
};
//# sourceMappingURL=chunk-GHP2IQYC.js.map
