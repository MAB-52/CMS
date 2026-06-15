import {
  ReviewActionDialogComponent
} from "./chunk-4RBO2DFQ.js";
import {
  ConfirmDialogComponent
} from "./chunk-GQSJPUX7.js";
import {
  WorkflowStatusBadgeComponent
} from "./chunk-AAN5W7BG.js";
import {
  ConsentRulesService
} from "./chunk-ZJPKKVVC.js";
import {
  MatDialog
} from "./chunk-5RTMJKSC.js";
import "./chunk-XINNQDUF.js";
import "./chunk-ASPSHXFC.js";
import "./chunk-VXKP42CX.js";
import "./chunk-OIBNGD5S.js";
import {
  AuditService
} from "./chunk-QTPUEVRL.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-2TGCEGVP.js";
import "./chunk-23MDLYAU.js";
import {
  CommonModule,
  Component,
  DatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/checker/checker-rule-review/checker-rule-review.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function CheckerRuleReviewComponent_Conditional_0_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const seg_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(seg_r2);
  }
}
function CheckerRuleReviewComponent_Conditional_0_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "No additional segments");
    \u0275\u0275elementEnd();
  }
}
function CheckerRuleReviewComponent_Conditional_0_For_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ch_r3, " ");
  }
}
function CheckerRuleReviewComponent_Conditional_0_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, " \u2014 ");
    \u0275\u0275elementEnd();
  }
}
function CheckerRuleReviewComponent_Conditional_0_For_105_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 55);
  }
}
function CheckerRuleReviewComponent_Conditional_0_For_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 53);
    \u0275\u0275element(2, "div", 54);
    \u0275\u0275template(3, CheckerRuleReviewComponent_Conditional_0_For_105_Conditional_3_Template, 1, 0, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "div", 57)(6, "div", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 60);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 61);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const \u0275$index_180_r5 = ctx.$index;
    const \u0275$count_180_r6 = ctx.$count;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!(\u0275$index_180_r5 === \u0275$count_180_r6 - 1) ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", a_r4.action, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 5, a_r4.performedAt, "dd MMM yyyy \xB7 hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r4.userName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", a_r4.description, " ");
  }
}
function CheckerRuleReviewComponent_Conditional_0_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " No audit events recorded yet. ");
    \u0275\u0275elementEnd();
  }
}
function CheckerRuleReviewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
    \u0275\u0275text(4, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Pending Rules ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "section", 4)(7, "div", 5)(8, "div", 6);
    \u0275\u0275text(9, "Checker Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h1", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8)(13, "span", 9);
    \u0275\u0275text(14, " Rule Engine ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "span", 10);
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, " Submitted by ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "span", 10);
    \u0275\u0275elementStart(21, "span", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275element(25, "app-workflow-status-badge", 14);
    \u0275\u0275elementStart(26, "div", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "section", 16)(29, "div", 17);
    \u0275\u0275text(30, " \u2699 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "div", 19);
    \u0275\u0275text(33, " Review Pending Approval ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 20);
    \u0275\u0275text(35, " Validate the rule configuration carefully before approving, rejecting, or requesting changes. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "section", 21)(37, "div", 22)(38, "div", 23);
    \u0275\u0275element(39, "span", 24);
    \u0275\u0275text(40, " Rule Details ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 25)(42, "div", 26)(43, "div", 27);
    \u0275\u0275text(44, "Rule Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 28);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 26)(48, "div", 27);
    \u0275\u0275text(49, "Rule ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 29);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 26)(53, "div", 27);
    \u0275\u0275text(54, "Rule Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 30)(56, "span", 31);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 26)(59, "div", 27);
    \u0275\u0275text(60, "Scenario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 30);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 32)(64, "div", 27);
    \u0275\u0275text(65, "Audience Segments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 33)(67, "span", 34);
    \u0275\u0275text(68);
    \u0275\u0275elementStart(69, "span", 35);
    \u0275\u0275text(70, "primary");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(71, CheckerRuleReviewComponent_Conditional_0_For_72_Template, 2, 1, "span", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(73, CheckerRuleReviewComponent_Conditional_0_Conditional_73_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 26)(75, "div", 27);
    \u0275\u0275text(76, "Consent Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 30);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 26)(80, "div", 27);
    \u0275\u0275text(81, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 29);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 32)(85, "div", 27);
    \u0275\u0275text(86, " Broadcast Channels ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 33);
    \u0275\u0275repeaterCreate(88, CheckerRuleReviewComponent_Conditional_0_For_89_Template, 2, 1, "span", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(90, CheckerRuleReviewComponent_Conditional_0_Conditional_90_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 32)(92, "div", 27);
    \u0275\u0275text(93, " Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 37);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(96, "section", 21)(97, "div", 22)(98, "div", 23);
    \u0275\u0275element(99, "span", 38);
    \u0275\u0275text(100, " Audit Trail ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 39);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 40);
    \u0275\u0275repeaterCreate(104, CheckerRuleReviewComponent_Conditional_0_For_105_Template, 15, 8, "div", 41, _forTrack0);
    \u0275\u0275template(106, CheckerRuleReviewComponent_Conditional_0_Conditional_106_Template, 2, 0, "div", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(107, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 44)(109, "div", 45)(110, "div", 46);
    \u0275\u0275text(111, " Decision Required ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 47);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div", 48);
    \u0275\u0275text(115, " Your decision will be recorded in the workflow audit trail. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 49)(117, "button", 50);
    \u0275\u0275listener("click", function CheckerRuleReviewComponent_Conditional_0_Template_button_click_117_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.approve());
    });
    \u0275\u0275text(118, " \u2713 Approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "button", 51);
    \u0275\u0275listener("click", function CheckerRuleReviewComponent_Conditional_0_Template_button_click_119_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.revision());
    });
    \u0275\u0275text(120, " \u21A9 Request Revision ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "button", 52);
    \u0275\u0275listener("click", function CheckerRuleReviewComponent_Conditional_0_Template_button_click_121_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.reject());
    });
    \u0275\u0275text(122, " \u2715 Reject ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r8 = ctx;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", r_r8.ruleName, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(r_r8.createdByName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 23, r_r8.submittedAt, "dd MMM yyyy \xB7 hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("status", r_r8.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", r_r8.id, " ");
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate1(" ", r_r8.ruleName, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r8.id, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", r_r8.ruleType, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r8.predefinedScenario || "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", r_r8.primarySegment, " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(r_r8.additionalSegmentCodes || \u0275\u0275pureFunction0(26, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(r_r8.additionalSegmentCodes || \u0275\u0275pureFunction0(27, _c0)).length ? 73 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r8.consentTemplateName || "\u2014", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r8.scheduleType, " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(r_r8.broadcastChannels || \u0275\u0275pureFunction0(28, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(r_r8.broadcastChannels || \u0275\u0275pureFunction0(29, _c0)).length ? 90 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r8.ruleDescription || "\u2014", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r6.audit().length, " events ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r6.audit());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r6.audit().length ? 106 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("crr-bar--disabled", !ctx_r6.canDecide());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r8.ruleName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r6.canDecide() || ctx_r6.busy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r6.canDecide() || ctx_r6.busy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r6.canDecide() || ctx_r6.busy());
  }
}
var CheckerRuleReviewComponent = class _CheckerRuleReviewComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.api = inject(ConsentRulesService);
    this.auditApi = inject(AuditService);
    this.dialog = inject(MatDialog);
    this.notify = inject(NotificationService);
    this.rule = signal(null);
    this.audit = signal([]);
    this.busy = signal(false);
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.api.getById(id).subscribe((res) => {
      if (res.success && res.data) {
        this.rule.set(res.data);
      }
    });
    this.auditApi.getEntityAuditTrail("CONSENT_RULE", id).subscribe((r) => {
      if (r.success && r.data) {
        this.audit.set(r.data);
      }
    });
  }
  canDecide() {
    return this.rule()?.status === "PENDING_CHECKER_APPROVAL";
  }
  approve() {
    const r = this.rule();
    if (!r) {
      return;
    }
    const data = {
      icon: "\u2705",
      iconColor: "rgba(22,163,74,0.15)",
      title: "Approve this rule?",
      body: `'${r.ruleName}' will be marked approved. The maker can publish it live when ready.`,
      cancelLabel: "Cancel",
      confirmLabel: "Approve",
      confirmColor: "success"
    };
    const ref = this.dialog.open(ConfirmDialogComponent, { width: "460px", disableClose: true, data });
    ref.afterClosed().subscribe((ok) => {
      if (!ok) {
        return;
      }
      this.busy.set(true);
      this.api.review(r.id, { action: "APPROVE" }).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.success("Approved", res.message || "");
            setTimeout(() => void this.router.navigateByUrl("/checker/rules/pending"), 1200);
          }
        },
        error: () => this.busy.set(false)
      });
    });
  }
  revision() {
    const r = this.rule();
    if (!r) {
      return;
    }
    const data = {
      title: "Request revision",
      icon: "\u21A9",
      iconColor: "#d97706",
      textareaLabel: "What should the maker change?",
      placeholder: "Be specific about policy, segments, or schedule\u2026",
      confirmLabel: "Send revision request",
      confirmColor: "warning",
      minLength: 20
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: "520px", disableClose: true, data });
    ref.afterClosed().subscribe((msg) => {
      if (!msg) {
        return;
      }
      this.busy.set(true);
      this.api.review(r.id, { action: "REQUEST_REVISION", revisionMessage: msg }).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.warning("Revision requested", res.message || "");
            setTimeout(() => void this.router.navigateByUrl("/checker/rules/pending"), 1200);
          }
        },
        error: () => this.busy.set(false)
      });
    });
  }
  reject() {
    const r = this.rule();
    if (!r) {
      return;
    }
    const data = {
      title: "Reject rule",
      icon: "\u274C",
      iconColor: "#dc2626",
      textareaLabel: "Reason for rejection",
      placeholder: "Provide a clear reason\u2026",
      confirmLabel: "Reject",
      confirmColor: "warn",
      minLength: 20
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: "520px", disableClose: true, data });
    ref.afterClosed().subscribe((reason) => {
      if (!reason) {
        return;
      }
      this.busy.set(true);
      this.api.review(r.id, { action: "REJECT", reason }).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.error("Rejected", res.message || "");
            setTimeout(() => void this.router.navigateByUrl("/checker/rules/pending"), 1200);
          }
        },
        error: () => this.busy.set(false)
      });
    });
  }
  static {
    this.\u0275fac = function CheckerRuleReviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckerRuleReviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckerRuleReviewComponent, selectors: [["app-checker-rule-review"]], decls: 1, vars: 1, consts: [[1, "crr-page"], [1, "crr-subnav"], ["routerLink", "/checker/rules/pending", 1, "crr-back-link"], [1, "crr-back-link__arrow"], [1, "crr-hero"], [1, "crr-hero__left"], [1, "crr-eyebrow"], [1, "crr-title"], [1, "crr-hero__meta"], [1, "crr-meta-pill"], [1, "crr-meta-dot"], [1, "crr-meta-text"], [1, "crr-timestamp"], [1, "crr-hero__right"], [3, "status"], [1, "crr-id-badge"], [1, "crr-banner"], [1, "crr-banner__icon"], [1, "crr-banner__content"], [1, "crr-banner__title"], [1, "crr-banner__desc"], [1, "crr-section"], [1, "crr-section__header"], [1, "crr-section-label"], [1, "crr-section-label__dot"], [1, "crr-grid"], [1, "crr-card"], [1, "crr-card__label"], [1, "crr-card__value", "crr-card__value--strong"], [1, "crr-card__value", "crr-card__value--mono"], [1, "crr-card__value"], [1, "crr-type-pill"], [1, "crr-card", "crr-card--full"], [1, "crr-chip-wrap"], [1, "crr-chip"], [1, "crr-chip__tag"], [1, "crr-empty"], [1, "crr-card__value", "crr-card__value--notes"], [1, "crr-section-label__dot", "crr-section-label__dot--amber"], [1, "crr-count-pill"], [1, "crr-timeline"], [1, "crr-timeline__item"], [1, "crr-empty-box"], [1, "crr-spacer"], [1, "crr-bar"], [1, "crr-bar__left"], [1, "crr-bar__label"], [1, "crr-bar__name"], [1, "crr-bar__sub"], [1, "crr-bar__actions"], [1, "crr-btn", "crr-btn--approve", 3, "click", "disabled"], [1, "crr-btn", "crr-btn--revise", 3, "click", "disabled"], [1, "crr-btn", "crr-btn--reject", 3, "click", "disabled"], [1, "crr-timeline__spine"], [1, "crr-timeline__dot"], [1, "crr-timeline__line"], [1, "crr-timeline__card"], [1, "crr-timeline__top"], [1, "crr-action-pill"], [1, "crr-timestamp", "crr-timestamp--sm"], [1, "crr-timeline__user"], [1, "crr-timeline__desc"]], template: function CheckerRuleReviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CheckerRuleReviewComponent_Conditional_0_Template, 123, 30);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.rule()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [RouterLink, MatButtonModule, WorkflowStatusBadgeComponent, CommonModule, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n.crr-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.08),\n      transparent 24%),\n    radial-gradient(\n      circle at bottom left,\n      rgba(14, 165, 233, 0.06),\n      transparent 24%),\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef2ff 100%);\n}\n.crr-subnav[_ngcontent-%COMP%] {\n  margin-bottom: 1.4rem;\n}\n.crr-back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.85rem 1rem;\n  border-radius: 16px;\n  text-decoration: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.88),\n      rgba(248, 250, 252, 0.82));\n  border: 1px solid rgba(148, 163, 184, 0.14);\n  backdrop-filter: blur(14px);\n  color: #475569;\n  font-size: 0.92rem;\n  font-weight: 700;\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.crr-back-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(99, 102, 241, 0.22);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n.crr-back-link__arrow[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.crr-hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 1.8rem;\n  margin-bottom: 1.8rem;\n  border-radius: 34px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.94),\n      rgba(248, 250, 252, 0.84));\n  border: 1px solid rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 24px 54px rgba(15, 23, 42, 0.08);\n}\n.crr-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.1),\n      transparent 28%),\n    radial-gradient(\n      circle at bottom left,\n      rgba(59, 130, 246, 0.06),\n      transparent 24%);\n  pointer-events: none;\n}\n.crr-eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  color: #4338ca;\n  font-size: 0.78rem;\n  font-weight: 900;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.crr-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: -0.05em;\n  line-height: 1.1;\n}\n.crr-hero__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n.crr-meta-pill[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.7rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.14),\n      rgba(59, 130, 246, 0.1));\n  border: 1px solid rgba(99, 102, 241, 0.14);\n  color: #4338ca;\n  font-size: 0.76rem;\n  font-weight: 800;\n}\n.crr-meta-dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #cbd5e1;\n}\n.crr-meta-text[_ngcontent-%COMP%], \n.crr-timestamp[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.crr-hero__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.8rem;\n}\n.crr-id-badge[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.92),\n      rgba(30, 41, 59, 0.92));\n  color: white;\n  font-size: 0.84rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.18);\n}\n.crr-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.3rem 1.4rem;\n  margin-bottom: 1.8rem;\n  border-radius: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(59, 130, 246, 0.06));\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  box-shadow: 0 16px 34px rgba(99, 102, 241, 0.08);\n}\n.crr-banner__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  display: grid;\n  place-items: center;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 1.3rem;\n  box-shadow: 0 14px 30px rgba(99, 102, 241, 0.24);\n}\n.crr-banner__title[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n  color: #0f172a;\n  font-size: 0.9rem;\n  font-weight: 800;\n}\n.crr-banner__desc[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.85rem;\n  line-height: 1.6;\n}\n.crr-section[_ngcontent-%COMP%] {\n  padding: 1.3rem;\n  margin-bottom: 1.8rem;\n  border-radius: 30px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.92),\n      rgba(248, 250, 252, 0.84));\n  border: 1px solid rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(18px);\n  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.07);\n}\n.crr-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.4rem;\n}\n.crr-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  color: #0f172a;\n  font-size: 0.95rem;\n  font-weight: 800;\n}\n.crr-section-label__dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n}\n.crr-section-label__dot--amber[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.crr-count-pill[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.06);\n  color: #475569;\n  font-size: 0.76rem;\n  font-weight: 800;\n}\n.crr-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.crr-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1rem 1.3rem;\n  border-radius: 24px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.92),\n      rgba(248, 250, 252, 0.84));\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.crr-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.08);\n}\n.crr-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.06),\n      transparent 28%);\n  pointer-events: none;\n}\n.crr-card--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.crr-card__label[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n  color: #64748b;\n  font-size: 0.76rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.crr-card__value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.65;\n}\n.crr-card__value--strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n}\n.crr-card__value--mono[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 1rem;\n}\n.crr-card__value--notes[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.crr-chip-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n}\n.crr-chip[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.95rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.12),\n      rgba(37, 99, 235, 0.08));\n  border: 1px solid rgba(99, 102, 241, 0.14);\n  color: #4338ca;\n  font-size: 0.8rem;\n  font-weight: 800;\n}\n.crr-type-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.85rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.14),\n      rgba(5, 150, 105, 0.08));\n  border: 1px solid rgba(16, 185, 129, 0.14);\n  color: #047857;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.crr-empty[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.crr-chip__tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: rgba(99, 102, 241, 0.15);\n  color: #6366f1;\n  vertical-align: middle;\n}\n.crr-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.crr-timeline__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.crr-timeline__spine[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.crr-timeline__dot[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  box-shadow: 0 0 0 5px rgba(99, 102, 241, 0.1);\n}\n.crr-timeline__line[_ngcontent-%COMP%] {\n  width: 2px;\n  flex: 1;\n  margin-top: 0.45rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.24),\n      rgba(99, 102, 241, 0.04));\n}\n.crr-timeline__card[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem 1.15rem;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.88),\n      rgba(248, 250, 252, 0.78));\n  border: 1px solid rgba(148, 163, 184, 0.1);\n}\n.crr-timeline__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.7rem;\n}\n.crr-action-pill[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.7rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.08),\n      rgba(15, 23, 42, 0.04));\n  color: #0f172a;\n  font-size: 0.6rem;\n  font-weight: 800;\n}\n.crr-timestamp--sm[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.crr-timeline__user[_ngcontent-%COMP%] {\n  margin-bottom: 0.35rem;\n  color: #4338ca;\n  font-size: 0.84rem;\n  font-weight: 800;\n}\n.crr-timeline__desc[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.85rem;\n  line-height: 1.65;\n}\n.crr-empty-box[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 22px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(148, 163, 184, 0.08),\n      rgba(148, 163, 184, 0.04));\n  border: 1px dashed rgba(148, 163, 184, 0.2);\n  color: #64748b;\n  font-weight: 600;\n}\n.crr-spacer[_ngcontent-%COMP%] {\n  height: 120px;\n}\n.crr-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: var(--sidebar-width);\n  right: 0;\n  bottom: 0;\n  z-index: 120;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 1rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.96),\n      rgba(30, 41, 59, 0.96));\n  backdrop-filter: blur(24px);\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 -12px 34px rgba(15, 23, 42, 0.22);\n  height: 90px;\n}\n.crr-bar--disabled[_ngcontent-%COMP%] {\n  opacity: 0.72;\n}\n.crr-bar__label[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n  color: #818cf8;\n  font-size: 0.72rem;\n  font-weight: 900;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.crr-bar__name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.84rem;\n  font-weight: 800;\n}\n.crr-bar__sub[_ngcontent-%COMP%] {\n  margin-top: 0.3rem;\n  color: #94a3b8;\n  font-size: 0.8rem;\n}\n.crr-bar__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n}\n.crr-btn[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 0 1rem;\n  border: none;\n  border-radius: 16px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 800;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    opacity 0.18s ease;\n}\n.crr-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.crr-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.crr-btn--approve[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  box-shadow: 0 14px 28px rgba(16, 185, 129, 0.24);\n}\n.crr-btn--revise[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: white;\n  box-shadow: 0 14px 28px rgba(245, 158, 11, 0.24);\n}\n.crr-btn--reject[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  box-shadow: 0 14px 28px rgba(239, 68, 68, 0.24);\n}\n@media (max-width: 1100px) {\n  .crr-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .crr-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .crr-hero[_ngcontent-%COMP%], \n   .crr-section__header[_ngcontent-%COMP%], \n   .crr-timeline__top[_ngcontent-%COMP%], \n   .crr-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .crr-hero__right[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .crr-bar[_ngcontent-%COMP%] {\n    left: 0;\n    padding: 1rem;\n  }\n  .crr-bar__actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .crr-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 150px;\n  }\n}\n/*# sourceMappingURL=checker-rule-review.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckerRuleReviewComponent, [{
    type: Component,
    args: [{ selector: "app-checker-rule-review", standalone: true, imports: [RouterLink, MatButtonModule, WorkflowStatusBadgeComponent, CommonModule], template: `@if (rule(); as r) {\r
<div class="crr-page">\r
\r
  <!-- Top Nav -->\r
  <div class="crr-subnav">\r
    <a class="crr-back-link" routerLink="/checker/rules/pending">\r
      <span class="crr-back-link__arrow">\u2190</span>\r
      Pending Rules\r
    </a>\r
  </div>\r
\r
  <!-- Hero -->\r
  <section class="crr-hero">\r
    <div class="crr-hero__left">\r
      <div class="crr-eyebrow">Checker Review</div>\r
\r
      <h1 class="crr-title">\r
        {{ r.ruleName }}\r
      </h1>\r
\r
      <div class="crr-hero__meta">\r
        <span class="crr-meta-pill">\r
          Rule Engine\r
        </span>\r
\r
        <span class="crr-meta-dot"></span>\r
\r
        <span class="crr-meta-text">\r
          Submitted by\r
          <strong>{{ r.createdByName }}</strong>\r
        </span>\r
\r
        <span class="crr-meta-dot"></span>\r
\r
        <span class="crr-timestamp">\r
          {{ r.submittedAt | date:'dd MMM yyyy \xB7 hh:mm a' }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <div class="crr-hero__right">\r
      <app-workflow-status-badge [status]="r.status" />\r
\r
      <div class="crr-id-badge">\r
        #{{ r.id }}\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Info Banner -->\r
  <section class="crr-banner">\r
    <div class="crr-banner__icon">\r
      \u2699\r
    </div>\r
\r
    <div class="crr-banner__content">\r
      <div class="crr-banner__title">\r
        Review Pending Approval\r
      </div>\r
\r
      <div class="crr-banner__desc">\r
        Validate the rule configuration carefully before approving,\r
        rejecting, or requesting changes.\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Rule Details -->\r
  <section class="crr-section">\r
\r
    <div class="crr-section__header">\r
      <div class="crr-section-label">\r
        <span class="crr-section-label__dot"></span>\r
        Rule Details\r
      </div>\r
    </div>\r
\r
    <div class="crr-grid">\r
\r
      <div class="crr-card">\r
        <div class="crr-card__label">Rule Name</div>\r
        <div class="crr-card__value crr-card__value--strong">\r
          {{ r.ruleName }}\r
        </div>\r
      </div>\r
\r
      <div class="crr-card">\r
        <div class="crr-card__label">Rule ID</div>\r
        <div class="crr-card__value crr-card__value--mono">\r
          {{ r.id }}\r
        </div>\r
      </div>\r
\r
      <div class="crr-card">\r
        <div class="crr-card__label">Rule Type</div>\r
\r
        <div class="crr-card__value">\r
          <span class="crr-type-pill">\r
            {{ r.ruleType }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="crr-card">\r
        <div class="crr-card__label">Scenario</div>\r
\r
        <div class="crr-card__value">\r
          {{ r.predefinedScenario || '\u2014' }}\r
        </div>\r
      </div>\r
\r
      <!-- <div class="crr-card">\r
        <div class="crr-card__label">Primary Segment</div>\r
\r
        <div class="crr-card__value">\r
          {{ r.primarySegment }}\r
        </div>\r
      </div> -->\r
\r
      <div class="crr-card crr-card--full">\r
        <div class="crr-card__label">Audience Segments</div>\r
        <div class="crr-chip-wrap">\r
          <!-- Primary segment always shown first with a distinguishing label -->\r
          <span class="crr-chip">\r
            {{ r.primarySegment }}\r
            <span class="crr-chip__tag">primary</span>\r
          </span>\r
          @for (seg of (r.additionalSegmentCodes || []); track seg) {\r
          <span class="crr-chip">{{ seg }}</span>\r
          }\r
          @if (!(r.additionalSegmentCodes || []).length) {\r
          <span class="crr-empty">No additional segments</span>\r
          }\r
        </div>\r
      </div>\r
\r
      <div class="crr-card">\r
        <div class="crr-card__label">Consent Template</div>\r
        <div class="crr-card__value">\r
          {{ r.consentTemplateName || '\u2014' }}\r
        </div>\r
      </div>\r
\r
      <div class="crr-card">\r
        <div class="crr-card__label">Schedule</div>\r
\r
        <div class="crr-card__value crr-card__value--mono">\r
          {{ r.scheduleType }}\r
        </div>\r
      </div>\r
\r
      <div class="crr-card crr-card--full">\r
        <div class="crr-card__label">\r
          Broadcast Channels\r
        </div>\r
\r
        <div class="crr-chip-wrap">\r
\r
          @for (ch of (r.broadcastChannels || []); track ch) {\r
          <span class="crr-chip">\r
            {{ ch }}\r
          </span>\r
          }\r
\r
          @if (!(r.broadcastChannels || []).length) {\r
          <span class="crr-empty">\r
            \u2014\r
          </span>\r
          }\r
\r
        </div>\r
      </div>\r
\r
      <div class="crr-card crr-card--full">\r
        <div class="crr-card__label">\r
          Description\r
        </div>\r
\r
        <div class="crr-card__value crr-card__value--notes">\r
          {{ r.ruleDescription || '\u2014' }}\r
        </div>\r
      </div>\r
\r
    </div>\r
  </section>\r
\r
  <!-- Audit -->\r
  <section class="crr-section">\r
\r
    <div class="crr-section__header">\r
\r
      <div class="crr-section-label">\r
        <span class="crr-section-label__dot crr-section-label__dot--amber"></span>\r
        Audit Trail\r
      </div>\r
\r
      <div class="crr-count-pill">\r
        {{ audit().length }} events\r
      </div>\r
\r
    </div>\r
\r
    <div class="crr-timeline">\r
\r
      @for (a of audit(); track a.id; let last = $last) {\r
\r
      <div class="crr-timeline__item">\r
\r
        <div class="crr-timeline__spine">\r
          <div class="crr-timeline__dot"></div>\r
\r
          @if (!last) {\r
          <div class="crr-timeline__line"></div>\r
          }\r
        </div>\r
\r
        <div class="crr-timeline__card">\r
\r
          <div class="crr-timeline__top">\r
\r
            <div class="crr-action-pill">\r
              {{ a.action }}\r
            </div>\r
\r
            <div class="crr-timestamp crr-timestamp--sm">\r
              {{ a.performedAt | date:'dd MMM yyyy \xB7 hh:mm a' }}\r
            </div>\r
\r
          </div>\r
\r
          <div class="crr-timeline__user">\r
            {{ a.userName }}\r
          </div>\r
\r
          <div class="crr-timeline__desc">\r
            {{ a.description }}\r
          </div>\r
\r
        </div>\r
\r
      </div>\r
\r
      }\r
\r
      @if (!audit().length) {\r
      <div class="crr-empty-box">\r
        No audit events recorded yet.\r
      </div>\r
      }\r
\r
    </div>\r
\r
  </section>\r
\r
  <div class="crr-spacer"></div>\r
\r
</div>\r
\r
<!-- Sticky Bar -->\r
<div class="crr-bar" [class.crr-bar--disabled]="!canDecide()">\r
\r
  <div class="crr-bar__left">\r
\r
    <div class="crr-bar__label">\r
      Decision Required\r
    </div>\r
\r
    <div class="crr-bar__name">\r
      {{ r.ruleName }}\r
    </div>\r
\r
    <div class="crr-bar__sub">\r
      Your decision will be recorded in the workflow audit trail.\r
    </div>\r
\r
  </div>\r
\r
  <div class="crr-bar__actions">\r
\r
    <button class="crr-btn crr-btn--approve" [disabled]="!canDecide() || busy()" (click)="approve()">\r
\r
      \u2713 Approve\r
    </button>\r
\r
    <button class="crr-btn crr-btn--revise" [disabled]="!canDecide() || busy()" (click)="revision()">\r
\r
      \u21A9 Request Revision\r
    </button>\r
\r
    <button class="crr-btn crr-btn--reject" [disabled]="!canDecide() || busy()" (click)="reject()">\r
\r
      \u2715 Reject\r
    </button>\r
\r
  </div>\r
\r
</div>\r
}`, styles: ['@charset "UTF-8";\n\n/* src/app/features/checker/checker-rule-review/checker-rule-review.component.scss */\n.crr-page {\n  padding: 2rem;\n  min-height: 100vh;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.08),\n      transparent 24%),\n    radial-gradient(\n      circle at bottom left,\n      rgba(14, 165, 233, 0.06),\n      transparent 24%),\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef2ff 100%);\n}\n.crr-subnav {\n  margin-bottom: 1.4rem;\n}\n.crr-back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.85rem 1rem;\n  border-radius: 16px;\n  text-decoration: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.88),\n      rgba(248, 250, 252, 0.82));\n  border: 1px solid rgba(148, 163, 184, 0.14);\n  backdrop-filter: blur(14px);\n  color: #475569;\n  font-size: 0.92rem;\n  font-weight: 700;\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.crr-back-link:hover {\n  transform: translateY(-2px);\n  border-color: rgba(99, 102, 241, 0.22);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n.crr-back-link__arrow {\n  font-size: 1rem;\n}\n.crr-hero {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 1.8rem;\n  margin-bottom: 1.8rem;\n  border-radius: 34px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.94),\n      rgba(248, 250, 252, 0.84));\n  border: 1px solid rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 24px 54px rgba(15, 23, 42, 0.08);\n}\n.crr-hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.1),\n      transparent 28%),\n    radial-gradient(\n      circle at bottom left,\n      rgba(59, 130, 246, 0.06),\n      transparent 24%);\n  pointer-events: none;\n}\n.crr-eyebrow {\n  margin-bottom: 0.8rem;\n  color: #4338ca;\n  font-size: 0.78rem;\n  font-weight: 900;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.crr-title {\n  margin: 0;\n  color: #0f172a;\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: -0.05em;\n  line-height: 1.1;\n}\n.crr-hero__meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n.crr-meta-pill {\n  padding: 0.4rem 0.7rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.14),\n      rgba(59, 130, 246, 0.1));\n  border: 1px solid rgba(99, 102, 241, 0.14);\n  color: #4338ca;\n  font-size: 0.76rem;\n  font-weight: 800;\n}\n.crr-meta-dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #cbd5e1;\n}\n.crr-meta-text,\n.crr-timestamp {\n  color: #64748b;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.crr-hero__right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.8rem;\n}\n.crr-id-badge {\n  padding: 0.75rem 1rem;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.92),\n      rgba(30, 41, 59, 0.92));\n  color: white;\n  font-size: 0.84rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.18);\n}\n.crr-banner {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.3rem 1.4rem;\n  margin-bottom: 1.8rem;\n  border-radius: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(59, 130, 246, 0.06));\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  box-shadow: 0 16px 34px rgba(99, 102, 241, 0.08);\n}\n.crr-banner__icon {\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  display: grid;\n  place-items: center;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  font-size: 1.3rem;\n  box-shadow: 0 14px 30px rgba(99, 102, 241, 0.24);\n}\n.crr-banner__title {\n  margin-bottom: 0.3rem;\n  color: #0f172a;\n  font-size: 0.9rem;\n  font-weight: 800;\n}\n.crr-banner__desc {\n  color: #64748b;\n  font-size: 0.85rem;\n  line-height: 1.6;\n}\n.crr-section {\n  padding: 1.3rem;\n  margin-bottom: 1.8rem;\n  border-radius: 30px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.92),\n      rgba(248, 250, 252, 0.84));\n  border: 1px solid rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(18px);\n  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.07);\n}\n.crr-section__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.4rem;\n}\n.crr-section-label {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  color: #0f172a;\n  font-size: 0.95rem;\n  font-weight: 800;\n}\n.crr-section-label__dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n}\n.crr-section-label__dot--amber {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.crr-count-pill {\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.06);\n  color: #475569;\n  font-size: 0.76rem;\n  font-weight: 800;\n}\n.crr-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.crr-card {\n  position: relative;\n  padding: 1rem 1.3rem;\n  border-radius: 24px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.92),\n      rgba(248, 250, 252, 0.84));\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.crr-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.08);\n}\n.crr-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.06),\n      transparent 28%);\n  pointer-events: none;\n}\n.crr-card--full {\n  grid-column: 1/-1;\n}\n.crr-card__label {\n  margin-bottom: 0.6rem;\n  color: #64748b;\n  font-size: 0.76rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.crr-card__value {\n  color: #0f172a;\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.65;\n}\n.crr-card__value--strong {\n  font-size: 1rem;\n  font-weight: 800;\n}\n.crr-card__value--mono {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 1rem;\n}\n.crr-card__value--notes {\n  white-space: pre-wrap;\n}\n.crr-chip-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n}\n.crr-chip {\n  padding: 0.55rem 0.95rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.12),\n      rgba(37, 99, 235, 0.08));\n  border: 1px solid rgba(99, 102, 241, 0.14);\n  color: #4338ca;\n  font-size: 0.8rem;\n  font-weight: 800;\n}\n.crr-type-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.85rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.14),\n      rgba(5, 150, 105, 0.08));\n  border: 1px solid rgba(16, 185, 129, 0.14);\n  color: #047857;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.crr-empty {\n  color: #94a3b8;\n}\n.crr-chip__tag {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: rgba(99, 102, 241, 0.15);\n  color: #6366f1;\n  vertical-align: middle;\n}\n.crr-timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.crr-timeline__item {\n  display: flex;\n  gap: 1rem;\n}\n.crr-timeline__spine {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.crr-timeline__dot {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  box-shadow: 0 0 0 5px rgba(99, 102, 241, 0.1);\n}\n.crr-timeline__line {\n  width: 2px;\n  flex: 1;\n  margin-top: 0.45rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.24),\n      rgba(99, 102, 241, 0.04));\n}\n.crr-timeline__card {\n  flex: 1;\n  padding: 1rem 1.15rem;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.88),\n      rgba(248, 250, 252, 0.78));\n  border: 1px solid rgba(148, 163, 184, 0.1);\n}\n.crr-timeline__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.7rem;\n}\n.crr-action-pill {\n  padding: 0.4rem 0.7rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.08),\n      rgba(15, 23, 42, 0.04));\n  color: #0f172a;\n  font-size: 0.6rem;\n  font-weight: 800;\n}\n.crr-timestamp--sm {\n  color: #64748b;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.crr-timeline__user {\n  margin-bottom: 0.35rem;\n  color: #4338ca;\n  font-size: 0.84rem;\n  font-weight: 800;\n}\n.crr-timeline__desc {\n  color: #475569;\n  font-size: 0.85rem;\n  line-height: 1.65;\n}\n.crr-empty-box {\n  padding: 2rem;\n  border-radius: 22px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(148, 163, 184, 0.08),\n      rgba(148, 163, 184, 0.04));\n  border: 1px dashed rgba(148, 163, 184, 0.2);\n  color: #64748b;\n  font-weight: 600;\n}\n.crr-spacer {\n  height: 120px;\n}\n.crr-bar {\n  position: fixed;\n  left: var(--sidebar-width);\n  right: 0;\n  bottom: 0;\n  z-index: 120;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 1rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.96),\n      rgba(30, 41, 59, 0.96));\n  backdrop-filter: blur(24px);\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 -12px 34px rgba(15, 23, 42, 0.22);\n  height: 90px;\n}\n.crr-bar--disabled {\n  opacity: 0.72;\n}\n.crr-bar__label {\n  margin-bottom: 0.3rem;\n  color: #818cf8;\n  font-size: 0.72rem;\n  font-weight: 900;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.crr-bar__name {\n  color: white;\n  font-size: 0.84rem;\n  font-weight: 800;\n}\n.crr-bar__sub {\n  margin-top: 0.3rem;\n  color: #94a3b8;\n  font-size: 0.8rem;\n}\n.crr-bar__actions {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n}\n.crr-btn {\n  height: 38px;\n  padding: 0 1rem;\n  border: none;\n  border-radius: 16px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 800;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    opacity 0.18s ease;\n}\n.crr-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.crr-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.crr-btn--approve {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  box-shadow: 0 14px 28px rgba(16, 185, 129, 0.24);\n}\n.crr-btn--revise {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: white;\n  box-shadow: 0 14px 28px rgba(245, 158, 11, 0.24);\n}\n.crr-btn--reject {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  box-shadow: 0 14px 28px rgba(239, 68, 68, 0.24);\n}\n@media (max-width: 1100px) {\n  .crr-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .crr-page {\n    padding: 1rem;\n  }\n  .crr-hero,\n  .crr-section__header,\n  .crr-timeline__top,\n  .crr-bar {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .crr-hero__right {\n    align-items: flex-start;\n  }\n  .crr-bar {\n    left: 0;\n    padding: 1rem;\n  }\n  .crr-bar__actions {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .crr-btn {\n    flex: 1;\n    min-width: 150px;\n  }\n}\n/*# sourceMappingURL=checker-rule-review.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckerRuleReviewComponent, { className: "CheckerRuleReviewComponent", filePath: "src/app/features/checker/checker-rule-review/checker-rule-review.component.ts", lineNumber: 22 });
})();
export {
  CheckerRuleReviewComponent
};
//# sourceMappingURL=chunk-WXKDAZTS.js.map
