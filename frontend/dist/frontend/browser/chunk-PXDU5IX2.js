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
  AuthService
} from "./chunk-KO2HYL5G.js";
import "./chunk-5RTMJKSC.js";
import "./chunk-FIYZFADG.js";
import "./chunk-ASPSHXFC.js";
import {
  ConsentService
} from "./chunk-CSLDYKDC.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import "./chunk-RENR4JVC.js";
import "./chunk-5EC44GU6.js";
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
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/maker/maker-sidebar/maker-sidebar.component.ts
var _c0 = () => ({ exact: true });
var MakerSidebarComponent = class _MakerSidebarComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.logout = inject(LogoutFlowService);
  }
  initials() {
    const n = this.auth.getCurrentUser()?.fullName?.trim();
    if (!n)
      return "?";
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1)
      return p[0].slice(0, 2).toUpperCase();
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
  static {
    this.\u0275fac = function MakerSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MakerSidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakerSidebarComponent, selectors: [["app-maker-sidebar"]], decls: 62, vars: 4, consts: [[1, "sidebar"], [1, "brand"], [1, "brand__top"], [1, "logo-mark"], [1, "brand-name"], [1, "brand-sub"], [1, "nav-scroll"], [1, "group-label"], ["routerLink", "/maker/dashboard", "routerLinkActive", "active", "matRipple", "", 1, "nav-link"], [1, "nav-icon"], ["routerLink", "/maker/consents", "routerLinkActive", "active", "matRipple", "", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/maker/consents/new", "routerLinkActive", "active", "matRipple", "", 1, "nav-link"], [1, "new-badge"], ["routerLink", "/maker/rules", "routerLinkActive", "active", "matRipple", "", 1, "nav-link"], ["routerLink", "/maker/audit", "routerLinkActive", "active", "matRipple", "", 1, "nav-link"], [1, "sidebar-footer"], [1, "user-card"], [1, "avatar"], [1, "user-meta"], [1, "user-name"], [1, "user-role"], ["type", "button", "matRipple", "", 1, "btn-logout", 3, "click"]], template: function MakerSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "CQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "div", 4);
        \u0275\u0275text(7, "ConsentIQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9, "Maker Workspace");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "nav", 6)(11, "div", 7);
        \u0275\u0275text(12, "Workspace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 8)(14, "div", 9)(15, "mat-icon");
        \u0275\u0275text(16, "dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "a", 10)(20, "div", 9)(21, "mat-icon");
        \u0275\u0275text(22, "assignment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "My Consents");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 11)(26, "div", 9)(27, "mat-icon");
        \u0275\u0275text(28, "edit_note");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "Create Consent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32, "+ NEW");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 7);
        \u0275\u0275text(34, "Automation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "a", 13)(36, "div", 9)(37, "mat-icon");
        \u0275\u0275text(38, "rule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "span");
        \u0275\u0275text(40, "Broadcast Rule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 7);
        \u0275\u0275text(42, "Activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "a", 14)(44, "div", 9)(45, "mat-icon");
        \u0275\u0275text(46, "history");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "span");
        \u0275\u0275text(48, "Audit Trail");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 15)(50, "div", 16)(51, "div", 17);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 18)(54, "div", 19);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 20);
        \u0275\u0275text(57, "Consent Manager \xB7 Maker");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "button", 21);
        \u0275\u0275listener("click", function MakerSidebarComponent_Template_button_click_58_listener() {
          return ctx.logout.confirmAndLogout();
        });
        \u0275\u0275elementStart(59, "mat-icon");
        \u0275\u0275text(60, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, " Logout ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(19);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275textInterpolate(ctx.initials());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.auth.getCurrentUser()) == null ? null : tmp_2_0.fullName) || "User");
      }
    }, dependencies: [RouterLink, RouterLinkActive, MatIconModule, MatIcon, MatRippleModule, MatRipple], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: var(--sidebar-width);\n  height: 100vh;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      #111827 0%,\n      #0f172a 100%);\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  box-shadow: 6px 0 30px rgba(15, 23, 42, 0.18);\n}\n.brand[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 24px 20px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.brand[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: auto -40px -40px auto;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.18),\n      transparent 70%);\n  pointer-events: none;\n}\n.brand__top[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.logo-mark[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 0.03em;\n  box-shadow: 0 10px 24px rgba(99, 102, 241, 0.28);\n}\n.brand-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: #94a3b8;\n  font-size: 12px;\n  font-weight: 500;\n}\n.nav-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 14px;\n}\n.nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 999px;\n}\n.group-label[_ngcontent-%COMP%] {\n  margin: 0 10px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.group-label[_ngcontent-%COMP%]    + .group-label[_ngcontent-%COMP%], \n.nav-link[_ngcontent-%COMP%]    ~ .group-label[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 48px;\n  padding: 0 14px;\n  margin-bottom: 6px;\n  border-radius: 16px;\n  text-decoration: none;\n  color: #cbd5e1;\n  overflow: hidden;\n  border: 1px solid transparent;\n  transition:\n    background 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: white;\n  transform: translateX(2px);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.22),\n      rgba(59, 130, 246, 0.12));\n  color: white;\n  border-color: rgba(99, 102, 241, 0.26);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.16);\n}\n.nav-link.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 10px;\n  bottom: 10px;\n  width: 4px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      180deg,\n      #818cf8,\n      #6366f1);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  display: grid;\n  place-items: center;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #cbd5e1;\n  transition: background 0.18s ease, color 0.18s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%], \n.nav-link.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.24),\n      rgba(59, 130, 246, 0.18));\n  color: #ffffff;\n}\n.nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n.new-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 8px 8px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  font-size: 8px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: 0.08em;\n  white-space: nowrap;\n  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.24);\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 18px 16px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.02),\n      transparent);\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  margin-bottom: 14px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 13px;\n  font-weight: 800;\n  box-shadow: 0 8px 18px rgba(99, 102, 241, 0.25);\n}\n.user-meta[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-role[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.2),\n      rgba(220, 38, 38, 0.18));\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #fecaca;\n  box-shadow: 0 10px 24px rgba(239, 68, 68, 0.14);\n}\n.btn-logout[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 900px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 88px;\n  }\n  .brand-name[_ngcontent-%COMP%], \n   .brand-sub[_ngcontent-%COMP%], \n   .group-label[_ngcontent-%COMP%], \n   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .new-badge[_ngcontent-%COMP%], \n   .user-meta[_ngcontent-%COMP%], \n   .btn-logout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .brand__top[_ngcontent-%COMP%], \n   .user-card[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 0;\n  }\n  .btn-logout[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=maker-sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakerSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-maker-sidebar", standalone: true, imports: [RouterLink, RouterLinkActive, MatIconModule, MatRippleModule], template: `
    <aside class="sidebar">

      <!-- BRAND -->
      <div class="brand">
        <div class="brand__top">
          <div class="logo-mark">CQ</div>
          <div>
            <div class="brand-name">ConsentIQ</div>
            <div class="brand-sub">Maker Workspace</div>
          </div>
        </div>
      </div>

      <!-- NAVIGATION -->
      <nav class="nav-scroll">

        <div class="group-label">Workspace</div>

        <a routerLink="/maker/dashboard" routerLinkActive="active" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>dashboard</mat-icon></div>
          <span>Dashboard</span>
        </a>

        <a routerLink="/maker/consents" routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: true }" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>assignment</mat-icon></div>
          <span>My Consents</span>
        </a>

        <a routerLink="/maker/consents/new" routerLinkActive="active" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>edit_note</mat-icon></div>
          <span>Create Consent</span>
          <span class="new-badge">+ NEW</span>
        </a>

        <div class="group-label">Automation</div>

        <a routerLink="/maker/rules" routerLinkActive="active" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>rule</mat-icon></div>
          <span>Broadcast Rule</span>
        </a>

        <div class="group-label">Activity</div>

        <a routerLink="/maker/audit" routerLinkActive="active" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>history</mat-icon></div>
          <span>Audit Trail</span>
        </a>

      </nav>

      <!-- FOOTER -->
      <div class="sidebar-footer">
        <div class="user-card">
          <div class="avatar">{{ initials() }}</div>
          <div class="user-meta">
            <div class="user-name">{{ auth.getCurrentUser()?.fullName || 'User' }}</div>
            <div class="user-role">Consent Manager \xB7 Maker</div>
          </div>
        </div>
        <button type="button" class="btn-logout" matRipple (click)="logout.confirmAndLogout()">
          <mat-icon>logout</mat-icon>
          Logout
        </button>
      </div>

    </aside>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/maker/maker-sidebar/maker-sidebar.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n:host {\n  display: block;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: var(--sidebar-width);\n  height: 100vh;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      #111827 0%,\n      #0f172a 100%);\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  box-shadow: 6px 0 30px rgba(15, 23, 42, 0.18);\n}\n.brand {\n  position: relative;\n  padding: 24px 20px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.brand::after {\n  content: "";\n  position: absolute;\n  inset: auto -40px -40px auto;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.18),\n      transparent 70%);\n  pointer-events: none;\n}\n.brand__top {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.logo-mark {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 0.03em;\n  box-shadow: 0 10px 24px rgba(99, 102, 241, 0.28);\n}\n.brand-name {\n  color: white;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.brand-sub {\n  margin-top: 2px;\n  color: #94a3b8;\n  font-size: 12px;\n  font-weight: 500;\n}\n.nav-scroll {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 14px;\n}\n.nav-scroll::-webkit-scrollbar {\n  width: 6px;\n}\n.nav-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 999px;\n}\n.group-label {\n  margin: 0 10px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.group-label + .group-label,\n.nav-link ~ .group-label {\n  margin-top: 20px;\n}\n.nav-link {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 48px;\n  padding: 0 14px;\n  margin-bottom: 6px;\n  border-radius: 16px;\n  text-decoration: none;\n  color: #cbd5e1;\n  overflow: hidden;\n  border: 1px solid transparent;\n  transition:\n    background 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.nav-link:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: white;\n  transform: translateX(2px);\n}\n.nav-link.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.22),\n      rgba(59, 130, 246, 0.12));\n  color: white;\n  border-color: rgba(99, 102, 241, 0.26);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.16);\n}\n.nav-link.active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 10px;\n  bottom: 10px;\n  width: 4px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      180deg,\n      #818cf8,\n      #6366f1);\n}\n.nav-icon {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  display: grid;\n  place-items: center;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #cbd5e1;\n  transition: background 0.18s ease, color 0.18s ease;\n}\n.nav-link:hover .nav-icon,\n.nav-link.active .nav-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.24),\n      rgba(59, 130, 246, 0.18));\n  color: #ffffff;\n}\n.nav-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-link span {\n  font-size: 14px;\n  font-weight: 600;\n}\n.new-badge {\n  margin-left: auto;\n  padding: 8px 8px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  font-size: 8px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: 0.08em;\n  white-space: nowrap;\n  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.24);\n}\n.sidebar-footer {\n  padding: 18px 16px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.02),\n      transparent);\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  margin-bottom: 14px;\n}\n.avatar {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 13px;\n  font-weight: 800;\n  box-shadow: 0 8px 18px rgba(99, 102, 241, 0.25);\n}\n.user-meta {\n  min-width: 0;\n}\n.user-name {\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-role {\n  margin-top: 2px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.btn-logout {\n  width: 100%;\n  height: 44px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.btn-logout:hover {\n  transform: translateY(-2px);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.2),\n      rgba(220, 38, 38, 0.18));\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #fecaca;\n  box-shadow: 0 10px 24px rgba(239, 68, 68, 0.14);\n}\n.btn-logout mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 900px) {\n  .sidebar {\n    width: 88px;\n  }\n  .brand-name,\n  .brand-sub,\n  .group-label,\n  .nav-link span,\n  .new-badge,\n  .user-meta,\n  .btn-logout span {\n    display: none;\n  }\n  .brand__top,\n  .user-card {\n    justify-content: center;\n  }\n  .nav-link {\n    justify-content: center;\n    padding: 0;\n  }\n  .btn-logout {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=maker-sidebar.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerSidebarComponent, { className: "MakerSidebarComponent", filePath: "src/app/features/maker/maker-sidebar/maker-sidebar.component.ts", lineNumber: 84 });
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
    if (!n)
      return "?";
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1)
      return p[0].slice(0, 2).toUpperCase();
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
  static {
    this.\u0275fac = function MakerTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MakerTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakerTopbarComponent, selectors: [["app-maker-topbar"]], inputs: { pageTitle: "pageTitle", revisionCount: "revisionCount" }, decls: 22, vars: 5, consts: [[1, "topbar"], [1, "crumb"], [1, "page-title"], [1, "right"], ["type", "button", "routerLink", "/maker/consents", "title", "Revision requests", 1, "bell"], [1, "badge"], [1, "profile-card"], [1, "avatar-sm"], [1, "profile-meta"], [1, "role"], [1, "name"], ["type", "button", 1, "btn-out", 3, "click"]], template: function MakerTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "div", 1);
        \u0275\u0275text(3, "/ ");
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
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8)(16, "span", 9);
        \u0275\u0275text(17, "Maker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 10);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275listener("click", function MakerTopbarComponent_Template_button_click_20_listener() {
          return ctx.logout.confirmAndLogout();
        });
        \u0275\u0275text(21, " \u21AA Logout ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.revisionCount > 0 ? 11 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.initials());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((tmp_4_0 = ctx.auth.getCurrentUser()) == null ? null : tmp_4_0.fullName);
      }
    }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 78px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.crumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 0;\n}\n.crumb[_ngcontent-%COMP%]::before {\n  content: "Maker Workspace";\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(99, 102, 241, 0.08);\n  color: #4f46e5;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.crumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-weight: 700;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n  color: #0f172a;\n}\n.right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.bell[_ngcontent-%COMP%] {\n  position: relative;\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  border: 1px solid #dbe3ef;\n  background: #ffffff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #475569;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.bell[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: #cbd5e1;\n  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 999px;\n  background: #f59e0b;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #fff;\n}\n.profile-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 12px 6px 6px;\n  border-radius: 14px;\n  background: #f1f5f9;\n  border: 1px solid #dbe3ef;\n  min-width: 160px;\n}\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.03em;\n  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.25);\n}\n.profile-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 1px;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.btn-out[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 16px;\n  border-radius: 12px;\n  border: 1px solid #dbe3ef;\n  background: #ffffff;\n  color: #334155;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    background-color 0.18s ease,\n    color 0.18s ease;\n}\n.btn-out[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: #fff;\n  border-color: #ef4444;\n  box-shadow: 0 8px 18px rgba(239, 68, 68, 0.24);\n}\n@media (max-width: 900px) {\n  .topbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n    height: auto;\n    padding: 14px 16px;\n  }\n  .right[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .profile-card[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=maker-topbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakerTopbarComponent, [{
    type: Component,
    args: [{ selector: "app-maker-topbar", standalone: true, imports: [RouterLink], template: `
    <header class="topbar">

      <!-- Left: breadcrumb + title -->
      <div>
        <div class="crumb">/ <strong>{{ pageTitle }}</strong></div>
        <h1 class="page-title">{{ pageTitle }}</h1>
      </div>

      <!-- Right: bell + profile card + logout -->
      <div class="right">

        <!-- Notification bell -->
        <button type="button" class="bell" routerLink="/maker/consents" title="Revision requests">
          \u{1F514}
          @if (revisionCount > 0) {
            <span class="badge">{{ revisionCount > 9 ? '9+' : revisionCount }}</span>
          }
        </button>

        <!-- Profile card -->
        <div class="profile-card">
          <div class="avatar-sm">{{ initials() }}</div>
          <div class="profile-meta">
            <span class="role">Maker</span>
            <span class="name">{{ auth.getCurrentUser()?.fullName }}</span>
          </div>
        </div>

        <!-- Logout -->
        <button type="button" class="btn-out" (click)="logout.confirmAndLogout()">
          \u21AA Logout
        </button>

      </div>
    </header>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/maker/maker-topbar/maker-topbar.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.topbar {\n  height: 78px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.crumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 0;\n}\n.crumb::before {\n  content: "Maker Workspace";\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(99, 102, 241, 0.08);\n  color: #4f46e5;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.crumb strong {\n  color: #1e293b;\n  font-weight: 700;\n}\n.page-title {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n  color: #0f172a;\n}\n.right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.left {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.bell {\n  position: relative;\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  border: 1px solid #dbe3ef;\n  background: #ffffff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #475569;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.bell:hover {\n  transform: translateY(-1px);\n  border-color: #cbd5e1;\n  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);\n}\n.badge {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 999px;\n  background: #f59e0b;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #fff;\n}\n.profile-card {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 12px 6px 6px;\n  border-radius: 14px;\n  background: #f1f5f9;\n  border: 1px solid #dbe3ef;\n  min-width: 160px;\n}\n.avatar-sm {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.03em;\n  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.25);\n}\n.profile-meta {\n  display: flex;\n  flex-direction: column;\n}\n.role {\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 1px;\n}\n.name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.1;\n}\n.btn-out {\n  height: 42px;\n  padding: 0 16px;\n  border-radius: 12px;\n  border: 1px solid #dbe3ef;\n  background: #ffffff;\n  color: #334155;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    background-color 0.18s ease,\n    color 0.18s ease;\n}\n.btn-out:hover {\n  transform: translateY(-1px);\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: #fff;\n  border-color: #ef4444;\n  box-shadow: 0 8px 18px rgba(239, 68, 68, 0.24);\n}\n@media (max-width: 900px) {\n  .topbar {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n    height: auto;\n    padding: 14px 16px;\n  }\n  .right {\n    flex-wrap: wrap;\n  }\n  .page-title {\n    font-size: 18px;\n  }\n  .profile-card {\n    min-width: unset;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=maker-topbar.component.css.map */\n'] }]
  }], null, { pageTitle: [{
    type: Input,
    args: [{ required: true }]
  }], revisionCount: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerTopbarComponent, { className: "MakerTopbarComponent", filePath: "src/app/features/maker/maker-topbar/maker-topbar.component.ts", lineNumber: 49 });
})();

// src/app/features/maker/maker-layout/maker-layout.component.ts
var MakerLayoutComponent = class _MakerLayoutComponent {
  constructor() {
    this.router = inject(Router);
    this.consentApi = inject(ConsentService);
    this.pageTitle = signal("Dashboard");
    this.revisionCount = signal(0);
  }
  ngOnInit() {
    this.syncRouteTitle();
    this.refreshRevisionBadge();
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.syncRouteTitle();
      this.refreshRevisionBadge();
    });
  }
  syncRouteTitle() {
    let r = this.router.routerState.root;
    while (r.firstChild) {
      r = r.firstChild;
    }
    const t = r.snapshot.data?.["title"] || "Maker";
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
    }, dependencies: [MakerSidebarComponent, MakerTopbarComponent, RouterOutlet], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--page-bg);\n}\n.main[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 28px 48px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=maker-layout.component.css.map */'] });
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
  `, styles: ['/* src/app/features/maker/maker-layout/maker-layout.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.shell {\n  display: flex;\n  min-height: 100vh;\n  background: var(--page-bg);\n}\n.main {\n  margin-left: var(--sidebar-width);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100vh;\n}\n.content {\n  flex: 1;\n  padding: 24px 28px 48px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=maker-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerLayoutComponent, { className: "MakerLayoutComponent", filePath: "src/app/features/maker/maker-layout/maker-layout.component.ts", lineNumber: 25 });
})();
export {
  MakerLayoutComponent
};
//# sourceMappingURL=chunk-PXDU5IX2.js.map
