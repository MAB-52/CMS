import {
  AuthService
} from "./chunk-KO2HYL5G.js";
import {
  StatusBadgeComponent
} from "./chunk-ASM6YEB2.js";
import {
  ConsentService
} from "./chunk-CSLDYKDC.js";
import {
  TimeAgoPipe
} from "./chunk-K3ZYD44P.js";
import "./chunk-RENR4JVC.js";
import "./chunk-5EC44GU6.js";
import {
  MatAnchor,
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import {
  RouterLink
} from "./chunk-2TGCEGVP.js";
import "./chunk-23MDLYAU.js";
import {
  Component,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/maker/maker-dashboard/maker-dashboard.component.ts
var _c0 = () => ({ status: "REVISION_REQUESTED" });
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = (a0) => ["/maker/consents", a0, "edit"];
var _forTrack0 = ($index, $item) => $item.id;
function MakerDashboardComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span");
    \u0275\u0275text(2, "\u21A9 ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " consent(s) require your attention \u2014 revision requested by checker.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 22);
    \u0275\u0275text(7, "View Now \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.revisionCount());
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(2, _c0));
  }
}
function MakerDashboardComponent_Conditional_62_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275element(2, "div", 24);
    \u0275\u0275elementEnd()();
  }
}
function MakerDashboardComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MakerDashboardComponent_Conditional_62_For_1_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function MakerDashboardComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "No consents yet.");
    \u0275\u0275elementEnd()();
  }
}
function MakerDashboardComponent_Conditional_64_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "app-status-badge", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 28);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "timeAgo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "a", 29);
    \u0275\u0275text(10, "Open");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.consentName);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", c_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.submittedAt || c_r2.updatedAt ? \u0275\u0275pipeBind1(7, 4, c_r2.submittedAt || c_r2.updatedAt) : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c2, c_r2.id));
  }
}
function MakerDashboardComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MakerDashboardComponent_Conditional_64_For_1_Template, 11, 8, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.recent());
  }
}
var MakerDashboardComponent = class _MakerDashboardComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.api = inject(ConsentService);
    this.stats = signal(null);
    this.recent = signal([]);
    this.loading = signal(true);
  }
  ngOnInit() {
    if (!this.auth.isLoggedIn() || this.auth.isLoggingOut) {
      return;
    }
    const role = this.auth.getRole();
    if (role === "MAKER" || role === "ADMIN") {
      this.api.getMakerStats().subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.stats.set(res.data);
          }
        },
        error: () => {
        }
      });
    }
    this.api.getMyConsents(0, 5).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data?.content) {
          this.recent.set(res.data.content);
        }
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  revisionCount() {
    return this.stats()?.revisionRequested ?? 0;
  }
  static {
    this.\u0275fac = function MakerDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MakerDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakerDashboardComponent, selectors: [["app-maker-dashboard"]], decls: 65, vars: 6, consts: [[1, "page"], [1, "stats"], [1, "stat-card", "stat--indigo"], [1, "stat-ico"], [1, "stat-label"], [1, "stat-val"], [1, "stat-card", "stat--amber"], [1, "stat-card", "stat--green"], [1, "stat-card", "stat--orange"], [1, "auto-strip"], [1, "auto-title"], [1, "auto-sub"], [1, "auto-actions"], ["mat-stroked-button", "", "routerLink", "/maker/rules"], [1, "rev-banner"], [1, "card"], [1, "card-head"], [1, "card-title"], [1, "card-sub"], ["mat-stroked-button", "", "routerLink", "/maker/consents/new", 1, "ciq-btn-secondary"], [1, "table-wrap"], [1, "tbl"], ["routerLink", "/maker/consents", 1, "rev-link", 3, "queryParams"], ["colspan", "4"], [1, "skel"], ["colspan", "4", 1, "empty"], [1, "name"], [3, "status"], [1, "muted"], [1, "link", 3, "routerLink"]], template: function MakerDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275text(6, "Total Consents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 3);
        \u0275\u0275text(11, "\u23F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 4);
        \u0275\u0275text(13, "Pending Approval");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 5);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 7)(17, "div", 3);
        \u0275\u0275text(18, "\u2705");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 4);
        \u0275\u0275text(20, "Published & Live");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 5);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 8)(24, "div", 3);
        \u0275\u0275text(25, "\u21A9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 4);
        \u0275\u0275text(27, "Revision Requested");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 5);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 9)(31, "div")(32, "div", 10);
        \u0275\u0275text(33, "Automation & outreach");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p", 11);
        \u0275\u0275text(35, "Broadcast Rule engine flows use the same maker\u2013checker rigor as consents.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 12)(37, "a", 13);
        \u0275\u0275text(38, "Rule engine");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(39, MakerDashboardComponent_Conditional_39_Template, 8, 3, "div", 14);
        \u0275\u0275elementStart(40, "div", 15)(41, "div", 16)(42, "div")(43, "h2", 17);
        \u0275\u0275text(44, "Recent Consents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p", 18);
        \u0275\u0275text(46, "Latest 5 records");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "a", 19);
        \u0275\u0275text(48, "Create New Consent \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 20)(50, "table", 21)(51, "thead")(52, "tr")(53, "th");
        \u0275\u0275text(54, "Consent name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th");
        \u0275\u0275text(58, "Submitted");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th");
        \u0275\u0275text(60, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "tbody");
        \u0275\u0275template(62, MakerDashboardComponent_Conditional_62_Template, 2, 1)(63, MakerDashboardComponent_Conditional_63_Template, 3, 0, "tr")(64, MakerDashboardComponent_Conditional_64_Template, 2, 0);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate((tmp_0_0 = (tmp_0_0 = ctx.stats()) == null ? null : tmp_0_0.total) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "\u2014");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((tmp_1_0 = (tmp_1_0 = ctx.stats()) == null ? null : tmp_1_0.pendingApproval) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "\u2014");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((tmp_2_0 = (tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.published) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "\u2014");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((tmp_3_0 = (tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.revisionRequested) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.revisionCount() > 0 ? 39 : -1);
        \u0275\u0275advance(23);
        \u0275\u0275conditional(ctx.loading() ? 62 : ctx.recent().length === 0 ? 63 : 64);
      }
    }, dependencies: [RouterLink, MatButtonModule, MatAnchor, StatusBadgeComponent, TimeAgoPipe], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 24px;\n  background: #f8fafc;\n  min-height: 100%;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 18px;\n  border-radius: 24px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 10px 30px rgba(15, 23, 42, 0.04);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);\n  border-color: #dbe3ef;\n}\n.stat-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: auto -30px -30px auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 999px;\n  opacity: 0.08;\n  background: currentColor;\n}\n.stat-ico[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  margin-bottom: 18px;\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(8px);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 8px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.stat--indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.06),\n      #fff);\n}\n.stat--amber[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(245, 158, 11, 0.06),\n      #fff);\n}\n.stat--green[_ngcontent-%COMP%] {\n  color: #10b981;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(16, 185, 129, 0.06),\n      #fff);\n}\n.stat--orange[_ngcontent-%COMP%] {\n  color: #f97316;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(249, 115, 22, 0.06),\n      #fff);\n}\n.auto-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 24px 28px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #6366f1);\n  color: #fff;\n  box-shadow: 0 16px 40px rgba(79, 70, 229, 0.22);\n}\n.auto-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  margin-bottom: 6px;\n}\n.auto-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.82);\n}\n.auto-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.auto-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: rgba(25, 1, 74, 0.9);\n  color: white !important;\n}\n.rev-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(249, 115, 22, 0.08),\n      rgba(251, 146, 60, 0.05));\n  border: 1px solid rgba(249, 115, 22, 0.14);\n  color: #9a3412;\n  font-size: 14px;\n  font-weight: 600;\n}\n.rev-link[_ngcontent-%COMP%] {\n  color: #ea580c;\n  font-weight: 700;\n  text-decoration: none;\n}\n.rev-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 26px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 12px 32px rgba(15, 23, 42, 0.04);\n}\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 24px 28px;\n  border-bottom: 1px solid #eef2f7;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.card-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.tbl[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 28px;\n  background: #f8fafc;\n  border-bottom: 1px solid #eef2f7;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 28px;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #334155;\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.18s ease;\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbff;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.link[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  font-weight: 700;\n  text-decoration: none;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 48px !important;\n  text-align: center;\n  color: #94a3b8;\n}\n.skel[_ngcontent-%COMP%] {\n  height: 18px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9,\n      #e2e8f0,\n      #f1f5f9);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 1200px) {\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auto-strip[_ngcontent-%COMP%], \n   .card-head[_ngcontent-%COMP%], \n   .rev-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .tbl[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 18px;\n    padding-right: 18px;\n  }\n}\n/*# sourceMappingURL=maker-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakerDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-maker-dashboard", standalone: true, imports: [RouterLink, MatButtonModule, StatusBadgeComponent, TimeAgoPipe], template: `<div class="page">\r
  <div class="stats">\r
    <div class="stat-card stat--indigo">\r
      <div class="stat-ico">\u{1F4CB}</div>\r
      <div class="stat-label">Total Consents</div>\r
      <div class="stat-val">{{ stats()?.total ?? '\u2014' }}</div>\r
    </div>\r
    <div class="stat-card stat--amber">\r
      <div class="stat-ico">\u23F3</div>\r
      <div class="stat-label">Pending Approval</div>\r
      <div class="stat-val">{{ stats()?.pendingApproval ?? '\u2014' }}</div>\r
    </div>\r
    <div class="stat-card stat--green">\r
      <div class="stat-ico">\u2705</div>\r
      <div class="stat-label">Published &amp; Live</div>\r
      <div class="stat-val">{{ stats()?.published ?? '\u2014' }}</div>\r
    </div>\r
    <div class="stat-card stat--orange">\r
      <div class="stat-ico">\u21A9</div>\r
      <div class="stat-label">Revision Requested</div>\r
      <div class="stat-val">{{ stats()?.revisionRequested ?? '\u2014' }}</div>\r
    </div>\r
  </div>\r
\r
  <div class="auto-strip">\r
    <div>\r
      <div class="auto-title">Automation &amp; outreach</div>\r
      <p class="auto-sub">Broadcast Rule engine flows use the same maker\u2013checker rigor as consents.</p>\r
    </div>\r
    <div class="auto-actions">\r
      <a mat-stroked-button routerLink="/maker/rules">Rule engine</a>\r
    </div>\r
  </div>\r
\r
  @if (revisionCount() > 0) {\r
    <div class="rev-banner">\r
      <span>\u21A9 <strong>{{ revisionCount() }}</strong> consent(s) require your attention \u2014 revision requested by checker.</span>\r
      <a routerLink="/maker/consents" [queryParams]="{ status: 'REVISION_REQUESTED' }" class="rev-link">View Now \u2192</a>\r
    </div>\r
  }\r
\r
  <div class="card">\r
    <div class="card-head">\r
      <div>\r
        <h2 class="card-title">Recent Consents</h2>\r
        <p class="card-sub">Latest 5 records</p>\r
      </div>\r
      <a mat-stroked-button class="ciq-btn-secondary" routerLink="/maker/consents/new">Create New Consent \u2192</a>\r
    </div>\r
    <div class="table-wrap">\r
      <table class="tbl">\r
        <thead>\r
          <tr>\r
            <th>Consent name</th>\r
            <th>Status</th>\r
            <th>Submitted</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @if (loading()) {\r
            @for (x of [1, 2, 3, 4, 5]; track x) {\r
              <tr>\r
                <td colspan="4"><div class="skel"></div></td>\r
              </tr>\r
            }\r
          } @else if (recent().length === 0) {\r
            <tr>\r
              <td colspan="4" class="empty">No consents yet.</td>\r
            </tr>\r
          } @else {\r
            @for (c of recent(); track c.id) {\r
              <tr>\r
                <td class="name">{{ c.consentName }}</td>\r
                <td><app-status-badge [status]="c.status" /></td>\r
                <td class="muted">{{ (c.submittedAt || c.updatedAt) ? ((c.submittedAt || c.updatedAt) | timeAgo) : '\u2014' }}</td>\r
                <td>\r
                  <a class="link" [routerLink]="['/maker/consents', c.id, 'edit']">Open</a>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/maker/maker-dashboard/maker-dashboard.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 24px;\n  background: #f8fafc;\n  min-height: 100%;\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n}\n.stat-card {\n  position: relative;\n  overflow: hidden;\n  padding: 18px;\n  border-radius: 24px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 10px 30px rgba(15, 23, 42, 0.04);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);\n  border-color: #dbe3ef;\n}\n.stat-card::after {\n  content: "";\n  position: absolute;\n  inset: auto -30px -30px auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 999px;\n  opacity: 0.08;\n  background: currentColor;\n}\n.stat-ico {\n  width: 42px;\n  height: 42px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  margin-bottom: 18px;\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(8px);\n}\n.stat-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 8px;\n}\n.stat-val {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.stat--indigo {\n  color: #4f46e5;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.06),\n      #fff);\n}\n.stat--amber {\n  color: #f59e0b;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(245, 158, 11, 0.06),\n      #fff);\n}\n.stat--green {\n  color: #10b981;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(16, 185, 129, 0.06),\n      #fff);\n}\n.stat--orange {\n  color: #f97316;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(249, 115, 22, 0.06),\n      #fff);\n}\n.auto-strip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 24px 28px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #6366f1);\n  color: #fff;\n  box-shadow: 0 16px 40px rgba(79, 70, 229, 0.22);\n}\n.auto-title {\n  font-size: 22px;\n  font-weight: 800;\n  margin-bottom: 6px;\n}\n.auto-sub {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.82);\n}\n.auto-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.auto-actions a {\n  background: rgba(25, 1, 74, 0.9);\n  color: white !important;\n}\n.rev-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(249, 115, 22, 0.08),\n      rgba(251, 146, 60, 0.05));\n  border: 1px solid rgba(249, 115, 22, 0.14);\n  color: #9a3412;\n  font-size: 14px;\n  font-weight: 600;\n}\n.rev-link {\n  color: #ea580c;\n  font-weight: 700;\n  text-decoration: none;\n}\n.rev-link:hover {\n  text-decoration: underline;\n}\n.card {\n  border-radius: 26px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 12px 32px rgba(15, 23, 42, 0.04);\n}\n.card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 24px 28px;\n  border-bottom: 1px solid #eef2f7;\n}\n.card-title {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.card-sub {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n}\n.tbl thead th {\n  padding: 16px 28px;\n  background: #f8fafc;\n  border-bottom: 1px solid #eef2f7;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.tbl tbody td {\n  padding: 20px 28px;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #334155;\n}\n.tbl tbody tr:last-child td {\n  border-bottom: none;\n}\n.tbl tbody tr {\n  transition: background-color 0.18s ease;\n}\n.tbl tbody tr:hover {\n  background: #fafbff;\n}\n.name {\n  font-weight: 700;\n  color: #0f172a;\n}\n.muted {\n  color: #64748b;\n}\n.link {\n  color: #4f46e5;\n  font-weight: 700;\n  text-decoration: none;\n}\n.link:hover {\n  text-decoration: underline;\n}\n.empty {\n  padding: 48px !important;\n  text-align: center;\n  color: #94a3b8;\n}\n.skel {\n  height: 18px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9,\n      #e2e8f0,\n      #f1f5f9);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s linear infinite;\n}\n@keyframes shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 1200px) {\n  .stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .page {\n    padding: 16px;\n  }\n  .stats {\n    grid-template-columns: 1fr;\n  }\n  .auto-strip,\n  .card-head,\n  .rev-banner {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .page-title {\n    font-size: 32px;\n  }\n  .tbl thead th,\n  .tbl tbody td {\n    padding-left: 18px;\n    padding-right: 18px;\n  }\n}\n/*# sourceMappingURL=maker-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerDashboardComponent, { className: "MakerDashboardComponent", filePath: "src/app/features/maker/maker-dashboard/maker-dashboard.component.ts", lineNumber: 17 });
})();
export {
  MakerDashboardComponent
};
//# sourceMappingURL=chunk-442WHB2S.js.map
