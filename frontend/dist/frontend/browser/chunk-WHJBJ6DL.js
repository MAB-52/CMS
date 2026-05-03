import {
  LogoutFlowService
} from "./chunk-UL4QQXDO.js";
import "./chunk-GJSWBWWB.js";
import {
  AuthService
} from "./chunk-7EWS7SGB.js";
import "./chunk-UE7UOPB6.js";
import {
  ConsentService
} from "./chunk-5L2IXPPD.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-SPCMNNUE.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-W4T3EBZ5.js";
import "./chunk-4RAWTRTP.js";
import {
  Component,
  Input,
  filter,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// src/app/features/maker/maker-sidebar/maker-sidebar.component.ts
var _c0 = () => ({ exact: true });
var MakerSidebarComponent = class _MakerSidebarComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.logout = inject(LogoutFlowService);
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
    this.\u0275fac = function MakerSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MakerSidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakerSidebarComponent, selectors: [["app-maker-sidebar"]], decls: 37, vars: 4, consts: [[1, "sidebar"], [1, "brand"], [1, "logo-row"], [1, "logo-mark"], [1, "brand-name"], [1, "brand-sub"], [1, "nav-scroll"], [1, "group-label"], ["routerLink", "/maker/dashboard", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/maker/consents", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/maker/consents/new", "routerLinkActive", "active", 1, "nav-link"], [1, "pill-new"], ["routerLink", "/maker/audit", "routerLinkActive", "active", 1, "nav-link"], [1, "divider"], [1, "user-footer"], [1, "user-row"], [1, "avatar"], [1, "user-name"], [1, "user-role"], ["type", "button", 1, "btn-logout", 3, "click"]], template: function MakerSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "CQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "div", 4);
        \u0275\u0275text(7, "ConsentIQ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9, "Maker Portal");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "nav", 6)(11, "div", 7);
        \u0275\u0275text(12, "Workspace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 8);
        \u0275\u0275text(14, "\u{1F4CA} Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 9);
        \u0275\u0275text(16, "\u{1F4CB} My Consents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 10);
        \u0275\u0275text(18, " \u270F\uFE0F Create New Consent ");
        \u0275\u0275elementStart(19, "span", 11);
        \u0275\u0275text(20, "+ NEW");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 7);
        \u0275\u0275text(22, "Activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "a", 12);
        \u0275\u0275text(24, "\u{1F550} Audit Trail");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(25, "div", 13);
        \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "div", 16);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div")(31, "div", 17);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 18);
        \u0275\u0275text(34, "Consent Manager \xB7 Maker");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "button", 19);
        \u0275\u0275listener("click", function MakerSidebarComponent_Template_button_click_35_listener() {
          return ctx.logout.confirmAndLogout();
        });
        \u0275\u0275text(36, "\u{1F6AA} Logout");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(15);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.initials());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.auth.getCurrentUser()) == null ? null : tmp_2_0.fullName) || "User");
      }
    }, dependencies: [RouterLink, RouterLinkActive], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  flex-shrink: 0;\n  background: var(--sidebar-bg);\n  color: var(--sidebar-text);\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n}\n.brand[_ngcontent-%COMP%] {\n  padding: 20px 18px 16px;\n}\n.logo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #6366f1);\n  color: #fff;\n  font-weight: 800;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n  padding-left: 46px;\n}\n.nav-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding: 8px 12px;\n}\n.group-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  margin: 16px 8px 8px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  color: var(--sidebar-text);\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  margin-bottom: 2px;\n  border: 1px solid transparent;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-hover);\n  color: #e2e8f0;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: var(--sidebar-active-bg);\n  color: var(--sidebar-text-active);\n  border-color: rgba(99, 102, 241, 0.35);\n  box-shadow: inset 3px 0 0 var(--sidebar-active-border);\n}\n.pill-new[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: #2563eb;\n  color: #fff;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 16px 12px;\n}\n.user-footer[_ngcontent-%COMP%] {\n  padding: 16px 14px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  color: #fff;\n  font-weight: 700;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.btn-logout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n  border-radius: var(--btn-radius);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: transparent;\n  color: var(--sidebar-text);\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n  border-color: rgba(220, 38, 38, 0.35);\n}\n/*# sourceMappingURL=maker-sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakerSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-maker-sidebar", standalone: true, imports: [RouterLink, RouterLinkActive], template: `
    <aside class="sidebar">
      <div class="brand">
        <div class="logo-row">
          <div class="logo-mark">CQ</div>
          <div>
            <div class="brand-name">ConsentIQ</div>
          </div>
        </div>
        <div class="brand-sub">Maker Portal</div>
      </div>
      <nav class="nav-scroll">
        <div class="group-label">Workspace</div>
        <a routerLink="/maker/dashboard" routerLinkActive="active" class="nav-link">\u{1F4CA} Dashboard</a>
        <a routerLink="/maker/consents" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-link"
          >\u{1F4CB} My Consents</a
        >
        <a routerLink="/maker/consents/new" routerLinkActive="active" class="nav-link">
          \u270F\uFE0F Create New Consent
          <span class="pill-new">+ NEW</span>
        </a>
        <div class="group-label">Activity</div>
        <a routerLink="/maker/audit" routerLinkActive="active" class="nav-link">\u{1F550} Audit Trail</a>
      </nav>
      <div class="divider"></div>
      <div class="user-footer">
        <div class="user-row">
          <div class="avatar">{{ initials() }}</div>
          <div>
            <div class="user-name">{{ auth.getCurrentUser()?.fullName || 'User' }}</div>
            <div class="user-role">Consent Manager \xB7 Maker</div>
          </div>
        </div>
        <button type="button" class="btn-logout" (click)="logout.confirmAndLogout()">\u{1F6AA} Logout</button>
      </div>
    </aside>
  `, styles: ['/* src/app/features/maker/maker-sidebar/maker-sidebar.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.sidebar {\n  width: var(--sidebar-width);\n  flex-shrink: 0;\n  background: var(--sidebar-bg);\n  color: var(--sidebar-text);\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n}\n.brand {\n  padding: 20px 18px 16px;\n}\n.logo-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #6366f1);\n  color: #fff;\n  font-weight: 800;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-name {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.brand-sub {\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n  padding-left: 46px;\n}\n.nav-scroll {\n  flex: 1;\n  overflow: auto;\n  padding: 8px 12px;\n}\n.group-label {\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  margin: 16px 8px 8px;\n}\n.nav-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  color: var(--sidebar-text);\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  margin-bottom: 2px;\n  border: 1px solid transparent;\n}\n.nav-link:hover {\n  background: var(--sidebar-hover);\n  color: #e2e8f0;\n}\n.nav-link.active {\n  background: var(--sidebar-active-bg);\n  color: var(--sidebar-text-active);\n  border-color: rgba(99, 102, 241, 0.35);\n  box-shadow: inset 3px 0 0 var(--sidebar-active-border);\n}\n.pill-new {\n  margin-left: auto;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: #2563eb;\n  color: #fff;\n}\n.divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 16px 12px;\n}\n.user-footer {\n  padding: 16px 14px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.user-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  color: #fff;\n  font-weight: 700;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-name {\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.user-role {\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.btn-logout {\n  width: 100%;\n  height: 38px;\n  border-radius: var(--btn-radius);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: transparent;\n  color: var(--sidebar-text);\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.btn-logout:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n  border-color: rgba(220, 38, 38, 0.35);\n}\n/*# sourceMappingURL=maker-sidebar.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerSidebarComponent, { className: "MakerSidebarComponent", filePath: "src/app/features/maker/maker-sidebar/maker-sidebar.component.ts", lineNumber: 49 });
})();

// src/app/features/maker/maker-topbar/maker-topbar.component.ts
function MakerTopbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.revisionCount > 9 ? "9+" : ctx_r0.revisionCount);
  }
}
var MakerTopbarComponent = class _MakerTopbarComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.logout = inject(LogoutFlowService);
    this.pageTitle = "";
    this.revisionCount = 0;
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
    this.\u0275fac = function MakerTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MakerTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakerTopbarComponent, selectors: [["app-maker-topbar"]], inputs: { pageTitle: "pageTitle", revisionCount: "revisionCount" }, decls: 16, vars: 4, consts: [[1, "topbar"], [1, "crumb"], [1, "page-title"], [1, "right"], ["type", "button", "routerLink", "/maker/consents", "title", "Revision requests", 1, "bell"], [1, "badge"], [1, "avatar-sm"], ["type", "button", 1, "btn-out", 3, "click"]], template: function MakerTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "div", 1);
        \u0275\u0275text(3, "Maker / ");
        \u0275\u0275elementStart(4, "strong");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h1", 2);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
        \u0275\u0275text(10, " \u{1F514} ");
        \u0275\u0275template(11, MakerTopbarComponent_Conditional_11_Template, 2, 1, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275listener("click", function MakerTopbarComponent_Template_button_click_14_listener() {
          return ctx.logout.confirmAndLogout();
        });
        \u0275\u0275text(15, "\u{1F6AA} Logout");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.revisionCount > 0 ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.initials());
      }
    }, dependencies: [RouterLink], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n}\n.crumb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n.crumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.bell[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  cursor: pointer;\n  font-size: 18px;\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  border-radius: 999px;\n  background: #f59e0b;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-out[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 0 14px;\n  border-radius: var(--btn-radius);\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-out[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n/*# sourceMappingURL=maker-topbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakerTopbarComponent, [{
    type: Component,
    args: [{ selector: "app-maker-topbar", standalone: true, imports: [RouterLink], template: `
    <header class="topbar">
      <div>
        <div class="crumb">Maker / <strong>{{ pageTitle }}</strong></div>
        <h1 class="page-title">{{ pageTitle }}</h1>
      </div>
      <div class="right">
        <button type="button" class="bell" routerLink="/maker/consents" title="Revision requests">
          \u{1F514}
          @if (revisionCount > 0) {
            <span class="badge">{{ revisionCount > 9 ? '9+' : revisionCount }}</span>
          }
        </button>
        <div class="avatar-sm">{{ initials() }}</div>
        <button type="button" class="btn-out" (click)="logout.confirmAndLogout()">\u{1F6AA} Logout</button>
      </div>
    </header>
  `, styles: ['/* src/app/features/maker/maker-topbar/maker-topbar.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.topbar {\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n}\n.crumb {\n  font-size: 13px;\n  color: #64748b;\n}\n.crumb strong {\n  color: #0f172a;\n}\n.page-title {\n  margin: 2px 0 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.bell {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  cursor: pointer;\n  font-size: 18px;\n}\n.badge {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  border-radius: 999px;\n  background: #f59e0b;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar-sm {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-out {\n  height: 38px;\n  padding: 0 14px;\n  border-radius: var(--btn-radius);\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-out:hover {\n  background: #f9fafb;\n}\n/*# sourceMappingURL=maker-topbar.component.css.map */\n'] }]
  }], null, { pageTitle: [{
    type: Input,
    args: [{ required: true }]
  }], revisionCount: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerTopbarComponent, { className: "MakerTopbarComponent", filePath: "src/app/features/maker/maker-topbar/maker-topbar.component.ts", lineNumber: 30 });
})();

// src/app/features/maker/maker-layout/maker-layout.component.ts
var MakerLayoutComponent = class _MakerLayoutComponent {
  constructor() {
    this.router = inject(Router);
    this.consentApi = inject(ConsentService);
    this.pageTitle = signal("Dashboard");
    this.revisionCount = signal(0);
    this.syncRouteTitle();
    this.refreshRevisionBadge();
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.syncRouteTitle();
      this.refreshRevisionBadge();
    });
  }
  syncRouteTitle() {
    let r = this.router.routerState.root.firstChild;
    while (r?.firstChild) {
      r = r.firstChild;
    }
    const t = r?.snapshot.data["title"] || "Maker";
    this.pageTitle.set(t);
  }
  refreshRevisionBadge() {
    this.consentApi.getMakerStats().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.revisionCount.set(res.data.revisionRequested ?? 0);
        }
      },
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function MakerLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MakerLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakerLayoutComponent, selectors: [["app-maker-layout"]], decls: 6, vars: 2, consts: [[1, "shell"], [1, "main"], [3, "pageTitle", "revisionCount"], [1, "content"]], template: function MakerLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-maker-sidebar");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275element(3, "app-maker-topbar", 2);
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("pageTitle", ctx.pageTitle())("revisionCount", ctx.revisionCount());
      }
    }, dependencies: [MakerSidebarComponent, MakerTopbarComponent, RouterOutlet], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--page-bg);\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 28px 48px;\n  overflow: auto;\n}\n/*# sourceMappingURL=maker-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakerLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-maker-layout", standalone: true, imports: [MakerSidebarComponent, MakerTopbarComponent, RouterOutlet], template: `
    <div class="shell">
      <app-maker-sidebar />
      <div class="main">
        <app-maker-topbar [pageTitle]="pageTitle()" [revisionCount]="revisionCount()" />
        <div class="content">
          <router-outlet />
        </div>
      </div>
    </div>
  `, styles: ['/* src/app/features/maker/maker-layout/maker-layout.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.shell {\n  display: flex;\n  min-height: 100vh;\n  background: var(--page-bg);\n}\n.main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.content {\n  flex: 1;\n  padding: 24px 28px 48px;\n  overflow: auto;\n}\n/*# sourceMappingURL=maker-layout.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerLayoutComponent, { className: "MakerLayoutComponent", filePath: "src/app/features/maker/maker-layout/maker-layout.component.ts", lineNumber: 25 });
})();
export {
  MakerLayoutComponent
};
//# sourceMappingURL=chunk-WHJBJ6DL.js.map
