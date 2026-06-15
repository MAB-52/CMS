import {
  AuthService
} from "./chunk-KO2HYL5G.js";
import {
  ConsentService
} from "./chunk-CSLDYKDC.js";
import {
  AuditService
} from "./chunk-QTPUEVRL.js";
import {
  TimeAgoPipe
} from "./chunk-K3ZYD44P.js";
import "./chunk-RENR4JVC.js";
import "./chunk-5EC44GU6.js";
import {
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/checker/checker-dashboard/checker-dashboard.component.ts
var _c0 = (a0) => ["/checker/consents", a0, "review"];
var _forTrack0 = ($index, $item) => $item.id;
function CheckerDashboardComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " No pending consent requests. ");
    \u0275\u0275elementEnd();
  }
}
function CheckerDashboardComponent_Conditional_70_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 34)(1, "a", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 38);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "timeAgo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, c_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r1.consentName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r1.consentId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, c_r1.updatedAt), " ");
  }
}
function CheckerDashboardComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 31);
    \u0275\u0275repeaterCreate(1, CheckerDashboardComponent_Conditional_70_For_2_Template, 10, 8, "li", 34, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pending());
  }
}
function CheckerDashboardComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " No recent review activity. ");
    \u0275\u0275elementEnd();
  }
}
function CheckerDashboardComponent_Conditional_80_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 42);
  }
}
function CheckerDashboardComponent_Conditional_80_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275element(2, "div", 41);
    \u0275\u0275template(3, CheckerDashboardComponent_Conditional_80_For_2_Conditional_3_Template, 1, 0, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "div", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 46);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "timeAgo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    const \u0275$index_160_r4 = ctx.$index;
    const \u0275$count_160_r5 = ctx.$count;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!(\u0275$index_160_r4 === \u0275$count_160_r5 - 1) ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", e_r3.action, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", e_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 4, e_r3.performedAt), " ");
  }
}
function CheckerDashboardComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, CheckerDashboardComponent_Conditional_80_For_2_Template, 12, 6, "div", 39, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.feed());
  }
}
var CheckerDashboardComponent = class _CheckerDashboardComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.api = inject(ConsentService);
    this.audit = inject(AuditService);
    this.stats = signal(null);
    this.pending = signal([]);
    this.feed = signal([]);
  }
  ngOnInit() {
    if (!this.auth.isLoggedIn() || this.auth.isLoggingOut) {
      return;
    }
    this.api.getCheckerStats().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.stats.set(res.data);
        }
      }
    });
    this.api.getPendingApprovals().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.pending.set(res.data.slice(0, 3));
        }
      }
    });
    this.audit.getMyActivity(0, 15).subscribe({
      next: (res) => {
        if (res.success && res.data?.content) {
          const rows = res.data.content.filter((e) => e.action.startsWith("CONSENT_"));
          this.feed.set(rows.slice(0, 8));
        }
      }
    });
  }
  static {
    this.\u0275fac = function CheckerDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckerDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckerDashboardComponent, selectors: [["app-checker-dashboard"]], decls: 81, vars: 6, consts: [[1, "crd-page"], [1, "crd-hero"], [1, "crd-hero__left"], [1, "crd-eyebrow"], [1, "crd-title"], [1, "crd-subtitle"], [1, "crd-hero__right"], [1, "crd-hero-badge"], [1, "crd-stats"], [1, "crd-stat", "crd-stat--amber"], [1, "crd-stat__top"], [1, "crd-stat__icon"], [1, "crd-stat__label"], [1, "crd-stat__value"], [1, "crd-stat", "crd-stat--green"], [1, "crd-stat", "crd-stat--red"], [1, "crd-stat", "crd-stat--indigo"], [1, "crd-banner"], [1, "crd-banner__left"], [1, "crd-section-label"], [1, "crd-section-label__dot"], [1, "crd-banner__title"], [1, "crd-banner__desc"], [1, "crd-banner__actions"], ["routerLink", "/checker/rules/pending", 1, "crd-btn", "crd-btn--secondary"], ["routerLink", "/checker/broadcasts/pending", 1, "crd-btn", "crd-btn--secondary"], [1, "crd-card"], [1, "crd-card__header"], [1, "crd-card__title"], ["routerLink", "/checker/pending", 1, "crd-btn", "crd-btn--secondary"], [1, "crd-empty"], [1, "crd-list"], [1, "crd-section-label__dot", "crd-section-label__dot--amber"], [1, "crd-timeline"], [1, "crd-list__item"], [1, "crd-list__link", 3, "routerLink"], [1, "crd-list__meta"], [1, "crd-list__id"], [1, "crd-list__dot"], [1, "crd-timeline__item"], [1, "crd-timeline__spine"], [1, "crd-timeline__dot"], [1, "crd-timeline__line"], [1, "crd-timeline__card"], [1, "crd-timeline__action"], [1, "crd-timeline__desc"], [1, "crd-timeline__meta"]], template: function CheckerDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, " Checker Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, " Review & Approval Center ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, " Monitor pending approvals, review automation requests, and track recent checker activity. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7);
        \u0275\u0275text(11, " Workflow Operations ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "section", 8)(13, "div", 9)(14, "div", 10)(15, "span", 11);
        \u0275\u0275text(16, "\u23F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18, "Pending Review");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 14)(22, "div", 10)(23, "span", 11);
        \u0275\u0275text(24, "\u2705");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 12);
        \u0275\u0275text(26, "Approved Today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 13);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "div", 10)(31, "span", 11);
        \u0275\u0275text(32, "\u274C");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 12);
        \u0275\u0275text(34, "Rejected");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 13);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 16)(38, "div", 10)(39, "span", 11);
        \u0275\u0275text(40, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "span", 12);
        \u0275\u0275text(42, "Total Reviewed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 13);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "section", 17)(46, "div", 18)(47, "div", 19);
        \u0275\u0275element(48, "span", 20);
        \u0275\u0275text(49, " Automation Queue ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 21);
        \u0275\u0275text(51, " Rules & Broadcast Reviews ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p", 22);
        \u0275\u0275text(53, " Review automation rules and broadcast requests on dedicated approval queues. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 23)(55, "a", 24);
        \u0275\u0275text(56, " Pending Rules ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "a", 25);
        \u0275\u0275text(58, " Pending Broadcasts ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "section", 26)(60, "div", 27)(61, "div")(62, "div", 19);
        \u0275\u0275element(63, "span", 20);
        \u0275\u0275text(64, " Queue ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "h2", 28);
        \u0275\u0275text(66, " Pending Consents ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "a", 29);
        \u0275\u0275text(68, " View All ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(69, CheckerDashboardComponent_Conditional_69_Template, 2, 0, "div", 30)(70, CheckerDashboardComponent_Conditional_70_Template, 3, 0, "ul", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "section", 26)(72, "div", 27)(73, "div")(74, "div", 19);
        \u0275\u0275element(75, "span", 32);
        \u0275\u0275text(76, " Audit ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "h2", 28);
        \u0275\u0275text(78, " Recent Review Activity ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(79, CheckerDashboardComponent_Conditional_79_Template, 2, 0, "div", 30)(80, CheckerDashboardComponent_Conditional_80_Template, 3, 0, "div", 33);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate1(" ", (tmp_0_0 = (tmp_0_0 = ctx.stats()) == null ? null : tmp_0_0.pendingReview) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "\u2014", " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", (tmp_1_0 = (tmp_1_0 = ctx.stats()) == null ? null : tmp_1_0.approvedToday) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "\u2014", " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", (tmp_2_0 = (tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.rejectedTotal) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "\u2014", " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", (tmp_3_0 = (tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.totalReviewed) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014", " ");
        \u0275\u0275advance(25);
        \u0275\u0275conditional(!ctx.pending().length ? 69 : 70);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(!ctx.feed().length ? 79 : 80);
      }
    }, dependencies: [RouterLink, MatButtonModule, TimeAgoPipe], styles: ['\n\n.crd-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 28px 22px 40px;\n  font-family: "DM Sans", sans-serif;\n}\n.crd-hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 24px;\n  padding: 24px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8faff 0%,\n      #eef2ff 100%);\n  border: 1px solid rgba(99, 102, 241, 0.22);\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);\n}\n@media (max-width: 720px) {\n  .crd-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.crd-eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #4f46e5;\n  margin-bottom: 8px;\n}\n.crd-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 30px;\n  line-height: 1.1;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.crd-subtitle[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  max-width: 620px;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #475569;\n}\n.crd-hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(99, 102, 241, 0.22);\n  color: #4f46e5;\n  font-size: 12px;\n  font-weight: 800;\n}\n.crd-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 900px) {\n  .crd-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .crd-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.crd-stat[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 18px;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);\n  overflow: hidden;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.crd-stat[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.07);\n}\n.crd-stat[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n}\n.crd-stat--amber[_ngcontent-%COMP%]::before {\n  background: #d97706;\n}\n.crd-stat--green[_ngcontent-%COMP%]::before {\n  background: #16a34a;\n}\n.crd-stat--red[_ngcontent-%COMP%]::before {\n  background: #dc2626;\n}\n.crd-stat--indigo[_ngcontent-%COMP%]::before {\n  background: #4f46e5;\n}\n.crd-stat__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.crd-stat__icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.crd-stat__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #475569;\n}\n.crd-stat__value[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 30px;\n  line-height: 1;\n  font-weight: 800;\n  color: #0f172a;\n}\n.crd-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #475569;\n}\n.crd-section-label__dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: #4f46e5;\n}\n.crd-section-label__dot--amber[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.crd-banner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 22px;\n  padding: 22px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.08),\n      rgba(99, 102, 241, 0.07));\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n@media (max-width: 760px) {\n  .crd-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.crd-banner__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #92400e;\n}\n.crd-banner__desc[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  max-width: 580px;\n  font-size: 13px;\n  line-height: 1.7;\n  color: #475569;\n}\n.crd-banner__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.crd-card[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  padding: 22px;\n  border-radius: 22px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);\n}\n.crd-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n@media (max-width: 620px) {\n  .crd-card__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.crd-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.crd-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.crd-list__item[_ngcontent-%COMP%] {\n  padding: 14px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.crd-list__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.crd-list__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #4f46e5;\n  font-size: 15px;\n  font-weight: 700;\n  transition: 0.18s ease;\n}\n.crd-list__link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.crd-list__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.crd-list__dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 999px;\n  background: #94a3b8;\n}\n.crd-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.crd-timeline__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n}\n.crd-timeline__spine[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 18px;\n}\n.crd-timeline__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 999px;\n  background: #4f46e5;\n  border: 2px solid white;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.22);\n}\n.crd-timeline__line[_ngcontent-%COMP%] {\n  width: 2px;\n  flex: 1;\n  min-height: 32px;\n  margin-top: 6px;\n  background: linear-gradient(rgba(99, 102, 241, 0.22), #e2e8f0);\n}\n.crd-timeline__card[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 14px;\n  padding: 16px;\n  border-radius: 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.crd-timeline__card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.22);\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);\n}\n.crd-timeline__action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 999px;\n  background: #eef2ff;\n  border: 1px solid rgba(99, 102, 241, 0.22);\n  color: #4f46e5;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.crd-timeline__desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n  color: #0f172a;\n}\n.crd-timeline__meta[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.crd-empty[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: 16px;\n  border: 1.5px dashed #e2e8f0;\n  background: #f8fafc;\n  text-align: center;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.crd-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 16px;\n  border-radius: 12px;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    background 0.15s ease,\n    border-color 0.15s ease;\n}\n.crd-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.crd-btn--secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n}\n.crd-btn--secondary[_ngcontent-%COMP%]:hover {\n  background: #eef2ff;\n  border-color: rgba(99, 102, 241, 0.22);\n  color: #4f46e5;\n}\n/*# sourceMappingURL=checker-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckerDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-checker-dashboard", standalone: true, imports: [RouterLink, MatButtonModule, TimeAgoPipe], template: `<div class="crd-page">\r
\r
  <!-- Hero -->\r
  <section class="crd-hero">\r
    <div class="crd-hero__left">\r
      <div class="crd-eyebrow">\r
        Checker Dashboard\r
      </div>\r
\r
      <h1 class="crd-title">\r
        Review & Approval Center\r
      </h1>\r
\r
      <p class="crd-subtitle">\r
        Monitor pending approvals, review automation requests,\r
        and track recent checker activity.\r
      </p>\r
    </div>\r
\r
    <div class="crd-hero__right">\r
      <div class="crd-hero-badge">\r
        Workflow Operations\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Stats -->\r
  <section class="crd-stats">\r
\r
    <div class="crd-stat crd-stat--amber">\r
\r
      <div class="crd-stat__top">\r
        <span class="crd-stat__icon">\u23F3</span>\r
        <span class="crd-stat__label">Pending Review</span>\r
      </div>\r
\r
      <div class="crd-stat__value">\r
        {{ stats()?.pendingReview ?? '\u2014' }}\r
      </div>\r
    </div>\r
\r
    <div class="crd-stat crd-stat--green">\r
\r
      <div class="crd-stat__top">\r
        <span class="crd-stat__icon">\u2705</span>\r
        <span class="crd-stat__label">Approved Today</span>\r
      </div>\r
\r
      <div class="crd-stat__value">\r
        {{ stats()?.approvedToday ?? '\u2014' }}\r
      </div>\r
    </div>\r
\r
    <div class="crd-stat crd-stat--red">\r
      <div class="crd-stat__top">\r
        <span class="crd-stat__icon">\u274C</span>\r
        <span class="crd-stat__label">Rejected</span>\r
      </div>\r
\r
      <div class="crd-stat__value">\r
        {{ stats()?.rejectedTotal ?? '\u2014' }}\r
      </div>\r
    </div>\r
    <div class="crd-stat crd-stat--indigo">\r
      <div class="crd-stat__top">\r
        <span class="crd-stat__icon">\u{1F4CA}</span>\r
        <span class="crd-stat__label">Total Reviewed</span>\r
      </div>\r
\r
      <div class="crd-stat__value">\r
        {{ stats()?.totalReviewed ?? '\u2014' }}\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Automation Banner -->\r
  <section class="crd-banner">\r
    <div class="crd-banner__left">\r
      <div class="crd-section-label">\r
        <span class="crd-section-label__dot"></span>\r
        Automation Queue\r
      </div>\r
\r
      <div class="crd-banner__title">\r
        Rules & Broadcast Reviews\r
      </div>\r
\r
      <p class="crd-banner__desc">\r
        Review automation rules and broadcast requests on\r
        dedicated approval queues.\r
      </p>\r
    </div>\r
\r
    <div class="crd-banner__actions">\r
\r
      <a\r
        class="crd-btn crd-btn--secondary"\r
        routerLink="/checker/rules/pending">\r
        Pending Rules\r
      </a>\r
\r
      <a\r
        class="crd-btn crd-btn--secondary"\r
        routerLink="/checker/broadcasts/pending">\r
        Pending Broadcasts\r
      </a>\r
    </div>\r
  </section>\r
\r
  <!-- Pending Consents -->\r
  <section class="crd-card">\r
    <div class="crd-card__header">\r
      <div>\r
        <div class="crd-section-label">\r
          <span class="crd-section-label__dot"></span>\r
          Queue\r
        </div>\r
        <h2 class="crd-card__title">\r
          Pending Consents\r
        </h2>\r
      </div>\r
\r
      <a\r
        class="crd-btn crd-btn--secondary"\r
        routerLink="/checker/pending">\r
        View All\r
      </a>\r
    </div>\r
    @if (!pending().length) {\r
\r
    <div class="crd-empty">\r
      No pending consent requests.\r
    </div>\r
\r
    } @else {\r
    <ul class="crd-list">\r
      @for (c of pending(); track c.id) {\r
      <li class="crd-list__item">\r
        <a\r
          class="crd-list__link"\r
          [routerLink]="['/checker/consents', c.id, 'review']">\r
          {{ c.consentName }}\r
        </a>\r
        <div class="crd-list__meta">\r
          <span class="crd-list__id">\r
            {{ c.consentId }}\r
          </span>\r
          <span class="crd-list__dot"></span>\r
          <span>\r
            {{ c.updatedAt | timeAgo }}\r
          </span>\r
        </div>\r
      </li>\r
      }\r
    </ul>\r
    }\r
  </section>\r
\r
  <!-- Recent Activity -->\r
  <section class="crd-card">\r
    <div class="crd-card__header">\r
      <div>\r
        <div class="crd-section-label">\r
          <span class="crd-section-label__dot crd-section-label__dot--amber"></span>\r
          Audit\r
        </div>\r
\r
        <h2 class="crd-card__title">\r
          Recent Review Activity\r
        </h2>\r
      </div>\r
    </div>\r
\r
    @if (!feed().length) {\r
    <div class="crd-empty">\r
      No recent review activity.\r
    </div>\r
    } @else {\r
\r
    <div class="crd-timeline">\r
      @for (e of feed(); track e.id; let last = $last) {\r
      <div class="crd-timeline__item">\r
        <div class="crd-timeline__spine">\r
          <div class="crd-timeline__dot"></div>\r
          @if (!last) {\r
          <div class="crd-timeline__line"></div>\r
          }\r
        </div>\r
        <div class="crd-timeline__card">\r
          <div class="crd-timeline__action">\r
            {{ e.action }}\r
          </div>\r
          <div class="crd-timeline__desc">\r
            {{ e.description }}\r
          </div>\r
          <div class="crd-timeline__meta">\r
            {{ e.performedAt | timeAgo }}\r
          </div>\r
        </div>\r
      </div>\r
      }\r
    </div>\r
    }\r
  </section>\r
</div>\r
\r
\r
\r
`, styles: ['/* src/app/features/checker/checker-dashboard/checker-dashboard.component.scss */\n.crd-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 28px 22px 40px;\n  font-family: "DM Sans", sans-serif;\n}\n.crd-hero {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 24px;\n  padding: 24px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8faff 0%,\n      #eef2ff 100%);\n  border: 1px solid rgba(99, 102, 241, 0.22);\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);\n}\n@media (max-width: 720px) {\n  .crd-hero {\n    flex-direction: column;\n  }\n}\n.crd-eyebrow {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #4f46e5;\n  margin-bottom: 8px;\n}\n.crd-title {\n  margin: 0;\n  font-size: 30px;\n  line-height: 1.1;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.crd-subtitle {\n  margin: 12px 0 0;\n  max-width: 620px;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #475569;\n}\n.crd-hero-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(99, 102, 241, 0.22);\n  color: #4f46e5;\n  font-size: 12px;\n  font-weight: 800;\n}\n.crd-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 900px) {\n  .crd-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .crd-stats {\n    grid-template-columns: 1fr;\n  }\n}\n.crd-stat {\n  position: relative;\n  padding: 18px;\n  border-radius: 16px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);\n  overflow: hidden;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.crd-stat:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.07);\n}\n.crd-stat::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n}\n.crd-stat--amber::before {\n  background: #d97706;\n}\n.crd-stat--green::before {\n  background: #16a34a;\n}\n.crd-stat--red::before {\n  background: #dc2626;\n}\n.crd-stat--indigo::before {\n  background: #4f46e5;\n}\n.crd-stat__top {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.crd-stat__icon {\n  font-size: 14px;\n}\n.crd-stat__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #475569;\n}\n.crd-stat__value {\n  margin-top: 14px;\n  font-size: 30px;\n  line-height: 1;\n  font-weight: 800;\n  color: #0f172a;\n}\n.crd-section-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #475569;\n}\n.crd-section-label__dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: #4f46e5;\n}\n.crd-section-label__dot--amber {\n  background: #d97706;\n}\n.crd-banner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 22px;\n  padding: 22px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.08),\n      rgba(99, 102, 241, 0.07));\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n@media (max-width: 760px) {\n  .crd-banner {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.crd-banner__title {\n  font-size: 18px;\n  font-weight: 800;\n  color: #92400e;\n}\n.crd-banner__desc {\n  margin: 8px 0 0;\n  max-width: 580px;\n  font-size: 13px;\n  line-height: 1.7;\n  color: #475569;\n}\n.crd-banner__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.crd-card {\n  margin-bottom: 18px;\n  padding: 22px;\n  border-radius: 22px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);\n}\n.crd-card__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n@media (max-width: 620px) {\n  .crd-card__header {\n    flex-direction: column;\n  }\n}\n.crd-card__title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.crd-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.crd-list__item {\n  padding: 14px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.crd-list__item:last-child {\n  border-bottom: none;\n}\n.crd-list__link {\n  text-decoration: none;\n  color: #4f46e5;\n  font-size: 15px;\n  font-weight: 700;\n  transition: 0.18s ease;\n}\n.crd-list__link:hover {\n  opacity: 0.8;\n}\n.crd-list__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.crd-list__dot {\n  width: 4px;\n  height: 4px;\n  border-radius: 999px;\n  background: #94a3b8;\n}\n.crd-timeline {\n  display: flex;\n  flex-direction: column;\n}\n.crd-timeline__item {\n  display: flex;\n  gap: 14px;\n}\n.crd-timeline__spine {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 18px;\n}\n.crd-timeline__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 999px;\n  background: #4f46e5;\n  border: 2px solid white;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.22);\n}\n.crd-timeline__line {\n  width: 2px;\n  flex: 1;\n  min-height: 32px;\n  margin-top: 6px;\n  background: linear-gradient(rgba(99, 102, 241, 0.22), #e2e8f0);\n}\n.crd-timeline__card {\n  flex: 1;\n  margin-bottom: 14px;\n  padding: 16px;\n  border-radius: 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.crd-timeline__card:hover {\n  border-color: rgba(99, 102, 241, 0.22);\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);\n}\n.crd-timeline__action {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 999px;\n  background: #eef2ff;\n  border: 1px solid rgba(99, 102, 241, 0.22);\n  color: #4f46e5;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.crd-timeline__desc {\n  font-size: 14px;\n  line-height: 1.7;\n  color: #0f172a;\n}\n.crd-timeline__meta {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.crd-empty {\n  padding: 24px;\n  border-radius: 16px;\n  border: 1.5px dashed #e2e8f0;\n  background: #f8fafc;\n  text-align: center;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.crd-btn {\n  height: 40px;\n  padding: 0 16px;\n  border-radius: 12px;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    background 0.15s ease,\n    border-color 0.15s ease;\n}\n.crd-btn:hover {\n  transform: translateY(-1px);\n}\n.crd-btn--secondary {\n  background: white;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n}\n.crd-btn--secondary:hover {\n  background: #eef2ff;\n  border-color: rgba(99, 102, 241, 0.22);\n  color: #4f46e5;\n}\n/*# sourceMappingURL=checker-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckerDashboardComponent, { className: "CheckerDashboardComponent", filePath: "src/app/features/checker/checker-dashboard/checker-dashboard.component.ts", lineNumber: 18 });
})();
export {
  CheckerDashboardComponent
};
//# sourceMappingURL=chunk-Q3KFPQLH.js.map
