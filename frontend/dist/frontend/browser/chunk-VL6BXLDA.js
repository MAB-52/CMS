import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ESTRIYN4.js";
import {
  ConfirmDialogComponent
} from "./chunk-GQSJPUX7.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EKTRGZNL.js";
import {
  WorkflowStatusBadgeComponent
} from "./chunk-AAN5W7BG.js";
import {
  MatChipsModule
} from "./chunk-IXOC4WEA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4V3JZOCF.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-T7T23VPO.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-5RTMJKSC.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-6CCH6DN3.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-XINNQDUF.js";
import {
  MatOption
} from "./chunk-FIYZFADG.js";
import "./chunk-ASPSHXFC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-VXKP42CX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-T6DLIJPT.js";
import "./chunk-OIBNGD5S.js";
import {
  AuditService
} from "./chunk-QTPUEVRL.js";
import "./chunk-EJZSSRS2.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import "./chunk-23MDLYAU.js";
import {
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Injectable,
  LowerCasePipe,
  Subject,
  TitleCasePipe,
  catchError,
  computed,
  environment,
  forkJoin,
  inject,
  map,
  setClassMetadata,
  signal,
  takeUntil,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/admin-rule-engine.service.ts
var AdminRuleEngineService = class _AdminRuleEngineService {
  constructor() {
    this.http = inject(HttpClient);
    this.notify = inject(NotificationService);
    this.base = `${environment.apiUrl}/admin/rule-engine`;
  }
  handle(name) {
    return (err) => {
      const msg = err.error?.message || err.message || "Request failed";
      if (err.status !== 401) {
        this.notify.error(name, msg);
      }
      return throwError(() => err);
    };
  }
  getDashboardStats() {
    return this.http.get(`${this.base}/dashboard-stats`).pipe(catchError(this.handle("Rule engine")));
  }
  listApprovedRules(page = 0, size = 10) {
    const params = new HttpParams().set("page", String(page)).set("size", String(size));
    return this.http.get(`${this.base}/approved-rules`, { params }).pipe(catchError(this.handle("Rules")));
  }
  setExecutionActive(ruleId, active) {
    const params = new HttpParams().set("active", String(active));
    return this.http.post(`${this.base}/rules/${ruleId}/execution-active`, {}, { params }).pipe(catchError(this.handle("Rule")));
  }
  previewAudience(ruleId) {
    return this.http.get(`${this.base}/rules/${ruleId}/audience-preview`).pipe(catchError(this.handle("Audience")));
  }
  previewAudienceBreakdown(ruleId) {
    return this.http.get(`${this.base}/rules/${ruleId}/audience-preview-breakdown`).pipe(catchError(this.handle("Audience")));
  }
  manualRun(ruleId) {
    return this.http.post(`${this.base}/rules/${ruleId}/manual-run`, {}).pipe(catchError(this.handle("Execution")));
  }
  listExecutions(ruleId) {
    return this.http.get(`${this.base}/rules/${ruleId}/executions`).pipe(catchError(this.handle("Executions")));
  }
  listAllExecutionsPaged(page = 0, size = 10) {
    const params = new HttpParams().set("page", String(page)).set("size", String(size));
    return this.http.get(`${this.base}/executions`, { params }).pipe(catchError(this.handle("Executions")));
  }
  static {
    this.\u0275fac = function AdminRuleEngineService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminRuleEngineService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminRuleEngineService, factory: _AdminRuleEngineService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRuleEngineService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/models/workflow.model.ts
var AUDIENCE_SEGMENT_LABELS = {
  NEW_CUSTOMER: "New customers",
  NEW_CUSTOMERS: "New Customers",
  EXISTING_CUSTOMERS: "Existing Customers",
  PENDING_CONSENT: "Pending Consent",
  CONSENT_EXPIRING: "Consent expiring",
  EXPIRING_CONSENT: "Consent Expiring Soon",
  EXPIRED_CONSENT: "Consent Expired",
  NON_RESPONDER: "Non-responders",
  VIP: "VIP / priority",
  DECLINED_RE_ENGAGEMENT: "Declined \u2014 re-engagement eligible",
  DECLINED_CUSTOMERS: "Declined and Re-engageable",
  ACCEPTED_CONSENT: "Active Consent"
};
function audienceSegmentLabel(code) {
  return AUDIENCE_SEGMENT_LABELS[code] ?? code;
}

// src/app/features/admin/rule-engine-rule-detail-dialog/rule-engine-rule-detail-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function RuleEngineRuleDetailDialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-progress-spinner", 5);
    \u0275\u0275elementEnd();
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No audit entries recorded for this rule yet.");
    \u0275\u0275elementEnd();
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r1.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 4, a_r1.performedAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", a_r1.userName, " \xB7 ", a_r1.description, "");
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 8);
    \u0275\u0275repeaterCreate(1, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_3_For_2_Template, 9, 7, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.audit());
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No executions recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const e_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", e_r3.triggeredByName, " ");
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const e_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" \xB7 ", e_r3.chunksCompleted, " of ", e_r3.chunksTotal, " chunks ");
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r3.summaryNotes);
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r3.progressNotes);
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_13_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ch_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" \xB7 failures ", ctx_r1.dig(ch_r4.row, "failures"), " ");
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275template(5, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_13_For_2_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ch_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ch_r4.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" attempted ", ctx_r1.dig(ch_r4.row, "attempted"), " \xB7 delivered ", ctx_r1.dig(ch_r4.row, "delivered"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dig(ch_r4.row, "failures") != null ? 5 : -1);
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_13_For_2_Template, 6, 4, "div", 17, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.channelEntries(e_r3.channelResults));
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275template(9, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_9_Template, 1, 1)(10, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_10_Template, 1, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_11_Template, 2, 1, "div", 14)(12, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_12_Template, 2, 1, "div", 15)(13, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Conditional_13_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", e_r3.triggerType, " \xB7 ", ctx_r1.executionOutcomeLabel(e_r3.status), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, e_r3.startedAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Audience ", e_r3.eligibleCount, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r3.triggeredByName ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r3.chunksTotal != null && e_r3.chunksTotal > 0 && e_r3.chunksCompleted != null ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r3.summaryNotes ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r3.progressNotes ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r3.channelResults && ctx_r1.channelEntries(e_r3.channelResults).length ? 13 : -1);
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 8);
    \u0275\u0275repeaterCreate(1, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_For_2_Template, 14, 12, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.executions());
  }
}
function RuleEngineRuleDetailDialogComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab-group")(1, "mat-tab", 6);
    \u0275\u0275template(2, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_2_Template, 2, 0, "p", 7)(3, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_3_Template, 3, 0, "ul", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-tab", 9);
    \u0275\u0275template(5, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_5_Template, 2, 0, "p", 7)(6, RuleEngineRuleDetailDialogComponent_Conditional_4_Conditional_6_Template, 3, 0, "ul", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.audit().length ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.executions().length ? 5 : 6);
  }
}
var RuleEngineRuleDetailDialogComponent = class _RuleEngineRuleDetailDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.auditApi = inject(AuditService);
    this.ruleEngine = inject(AdminRuleEngineService);
    this.loading = signal(true);
    this.audit = signal([]);
    this.executions = signal([]);
  }
  executionOutcomeLabel(status) {
    if (status === "PARTIAL") {
      return "Partially Delivered";
    }
    return status;
  }
  channelEntries(raw) {
    const out = [];
    for (const [key, val] of Object.entries(raw)) {
      if (key.startsWith("_")) {
        continue;
      }
      if (val && typeof val === "object" && !Array.isArray(val)) {
        out.push({ key, row: val });
      }
    }
    return out;
  }
  dig(row, k) {
    return row[k];
  }
  ngOnInit() {
    forkJoin({
      audit: this.auditApi.getEntityAuditTrail("CONSENT_RULE", this.data.ruleId).pipe(map((r) => r.data ?? [])),
      ex: this.ruleEngine.listExecutions(this.data.ruleId).pipe(map((r) => r.data ?? []))
    }).subscribe({
      next: ({ audit, ex }) => {
        this.loading.set(false);
        this.audit.set(audit);
        this.executions.set(ex);
      },
      error: () => this.loading.set(false)
    });
  }
  static {
    this.\u0275fac = function RuleEngineRuleDetailDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RuleEngineRuleDetailDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RuleEngineRuleDetailDialogComponent, selectors: [["app-rule-engine-rule-detail-dialog"]], decls: 8, vars: 2, consts: [["mat-dialog-title", ""], [1, "dlg"], [1, "spin"], ["align", "end"], ["type", "button", "mat-stroked-button", "", "mat-dialog-close", "", 1, "close-btn"], ["diameter", "40", "mode", "indeterminate"], ["label", "Audit history"], [1, "empty"], [1, "list"], ["label", "Execution history"], [1, "row-top"], [1, "action"], [1, "time"], [1, "meta"], [1, "sum"], [1, "sum", "sum--detail"], [1, "channels"], [1, "ch-row"], [1, "ch-meta"]], template: function RuleEngineRuleDetailDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-dialog-content", 1);
        \u0275\u0275template(3, RuleEngineRuleDetailDialogComponent_Conditional_3_Template, 2, 0, "div", 2)(4, RuleEngineRuleDetailDialogComponent_Conditional_4_Template, 7, 2, "mat-tab-group");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-dialog-actions", 3)(6, "button", 4);
        \u0275\u0275text(7, "Close");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("Rule activity \u2014 ", ctx.data.ruleName, "");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 3 : 4);
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatTabsModule, MatTab, MatTabGroup, MatProgressSpinnerModule, MatProgressSpinner, DatePipe], styles: ["\n\n.dlg[_ngcontent-%COMP%] {\n  min-width: min(520px, 92vw);\n  max-height: 70vh;\n}\n.spin[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 32px;\n}\n.empty[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  padding: 16px 0;\n}\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 8px 0 0;\n  max-height: 48vh;\n  overflow: auto;\n}\nli[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  padding: 12px 0;\n}\n.row-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 13px;\n}\n.action[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.time[_ngcontent-%COMP%] {\n  color: #64748b;\n  flex-shrink: 0;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.sum[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #334155;\n  margin-top: 6px;\n  line-height: 1.4;\n}\n.sum--detail[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  color: #475569;\n}\n.channels[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #475569;\n}\n.ch-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  margin-top: 4px;\n}\n.ch-meta[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  margin: 10px auto 10px;\n  background-color: rgb(224, 68, 68);\n  color: white;\n  width: 90%;\n}\n/*# sourceMappingURL=rule-engine-rule-detail-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RuleEngineRuleDetailDialogComponent, [{
    type: Component,
    args: [{ selector: "app-rule-engine-rule-detail-dialog", standalone: true, imports: [
      MatDialogModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatButtonModule,
      MatTabsModule,
      MatProgressSpinnerModule,
      DatePipe
    ], template: `
    <h2 mat-dialog-title>Rule activity \u2014 {{ data.ruleName }}</h2>
    <mat-dialog-content class="dlg">
      @if (loading()) {
        <div class="spin">
          <mat-progress-spinner diameter="40" mode="indeterminate" />
        </div>
      } @else {
        <mat-tab-group>
          <mat-tab label="Audit history">
            @if (!audit().length) {
              <p class="empty">No audit entries recorded for this rule yet.</p>
            } @else {
              <ul class="list">
                @for (a of audit(); track a.id) {
                  <li>
                    <div class="row-top">
                      <span class="action">{{ a.action }}</span>
                      <span class="time">{{ a.performedAt | date : 'medium' }}</span>
                    </div>
                    <div class="meta">{{ a.userName }} \xB7 {{ a.description }}</div>
                  </li>
                }
              </ul>
            }
          </mat-tab>
          <mat-tab label="Execution history">
            @if (!executions().length) {
              <p class="empty">No executions recorded yet.</p>
            } @else {
              <ul class="list">
                @for (e of executions(); track e.id) {
                  <li>
                    <div class="row-top">
                      <span class="action"
                        >{{ e.triggerType }} \xB7 {{ executionOutcomeLabel(e.status) }}</span
                      >
                      <span class="time">{{ e.startedAt | date : 'medium' }}</span>
                    </div>
                    <div class="meta">
                      Audience {{ e.eligibleCount }}
                      @if (e.triggeredByName) {
                        \xB7 {{ e.triggeredByName }}
                      }
                      @if (e.chunksTotal != null && e.chunksTotal > 0 && e.chunksCompleted != null) {
                        \xB7 {{ e.chunksCompleted }} of {{ e.chunksTotal }} chunks
                      }
                    </div>
                    @if (e.summaryNotes) {
                      <div class="sum">{{ e.summaryNotes }}</div>
                    }
                    @if (e.progressNotes) {
                      <div class="sum sum--detail">{{ e.progressNotes }}</div>
                    }
                    @if (e.channelResults && channelEntries(e.channelResults).length) {
                      <div class="channels">
                        @for (ch of channelEntries(e.channelResults); track ch.key) {
                          <div class="ch-row">
                            <strong>{{ ch.key }}</strong>
                            <span class="ch-meta">
                              attempted {{ dig(ch.row, 'attempted') }} \xB7 delivered {{ dig(ch.row, 'delivered') }}
                              @if (dig(ch.row, 'failures') != null) {
                                \xB7 failures {{ dig(ch.row, 'failures') }}
                              }
                            </span>
                          </div>
                        }
                      </div>
                    }
                  </li>
                }
              </ul>
            }
          </mat-tab>
        </mat-tab-group>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button class="close-btn" type="button" mat-stroked-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `, styles: ["/* angular:styles/component:scss;28fc464ed06904b81e061b1531b7e7ee0a76877717382b7b1d10810cc400248f;D:/Mustafa/CMS-17.4-CLEAN/frontend/src/app/features/admin/rule-engine-rule-detail-dialog/rule-engine-rule-detail-dialog.component.ts */\n.dlg {\n  min-width: min(520px, 92vw);\n  max-height: 70vh;\n}\n.spin {\n  display: flex;\n  justify-content: center;\n  padding: 32px;\n}\n.empty {\n  color: #64748b;\n  font-size: 14px;\n  padding: 16px 0;\n}\n.list {\n  list-style: none;\n  margin: 0;\n  padding: 8px 0 0;\n  max-height: 48vh;\n  overflow: auto;\n}\nli {\n  border-bottom: 1px solid #e2e8f0;\n  padding: 12px 0;\n}\n.row-top {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 13px;\n}\n.action {\n  font-weight: 600;\n  color: #0f172a;\n}\n.time {\n  color: #64748b;\n  flex-shrink: 0;\n}\n.meta {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.sum {\n  font-size: 12px;\n  color: #334155;\n  margin-top: 6px;\n  line-height: 1.4;\n}\n.sum--detail {\n  white-space: pre-wrap;\n  color: #475569;\n}\n.channels {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #475569;\n}\n.ch-row {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  margin-top: 4px;\n}\n.ch-meta {\n  flex-shrink: 0;\n}\n.close-btn {\n  margin: 10px auto 10px;\n  background-color: rgb(224, 68, 68);\n  color: white;\n  width: 90%;\n}\n/*# sourceMappingURL=rule-engine-rule-detail-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RuleEngineRuleDetailDialogComponent, { className: "RuleEngineRuleDetailDialogComponent", filePath: "src/app/features/admin/rule-engine-rule-detail-dialog/rule-engine-rule-detail-dialog.component.ts", lineNumber: 189 });
})();

// src/app/features/admin/admin-rule-engine-dashboard/admin-rule-engine-dashboard.component.ts
var _c0 = () => [];
var _forTrack02 = ($index, $item) => $item.id;
function AdminRuleEngineDashboardComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, s_r1));
  }
}
function AdminRuleEngineDashboardComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 17);
  }
}
function AdminRuleEngineDashboardComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22)(2, "div", 23)(3, "mat-icon");
    \u0275\u0275text(4, "gavel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6, "Approved rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 26)(10, "div", 27)(11, "mat-icon");
    \u0275\u0275text(12, "play_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 24);
    \u0275\u0275text(14, "Active for execution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 22)(18, "div", 28)(19, "mat-icon");
    \u0275\u0275text(20, "pause_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 24);
    \u0275\u0275text(22, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 25);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 29)(26, "div", 30)(27, "mat-icon");
    \u0275\u0275text(28, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275text(30, "Immediate \xB7 first run pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 25);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 22)(34, "div", 31)(35, "mat-icon");
    \u0275\u0275text(36, "bolt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 24);
    \u0275\u0275text(38, "Runs (24h)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 25);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats().approvedRulesCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats().activeForExecutionCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats().inactiveForExecutionCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats().pendingImmediateFirstRunCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats().executedInLast24HoursCount);
  }
}
function AdminRuleEngineDashboardComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon", 32);
    \u0275\u0275text(2, "rule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No checker-approved rules are available yet. Approved rules will appear here automatically.");
    \u0275\u0275elementEnd()();
  }
}
function AdminRuleEngineDashboardComponent_Conditional_42_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Filters active");
    \u0275\u0275elementEnd();
  }
}
function AdminRuleEngineDashboardComponent_Conditional_42_For_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275pipe(1, "lowercase");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMapInterpolate1("outcome-badge outcome-badge--", \u0275\u0275pipeBind1(1, 4, rule_r4.lastExecutionOutcome), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", rule_r4.lastExecutionOutcome, " ");
  }
}
function AdminRuleEngineDashboardComponent_Conditional_42_For_9_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(code_r5);
  }
}
function AdminRuleEngineDashboardComponent_Conditional_42_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementStart(2, "div", 41)(3, "div", 42)(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 45);
    \u0275\u0275element(9, "app-workflow-status-badge", 46);
    \u0275\u0275template(10, AdminRuleEngineDashboardComponent_Conditional_42_For_9_Conditional_10_Template, 3, 6, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 48)(12, "div", 49)(13, "span", 50)(14, "mat-icon", 51);
    \u0275\u0275text(15, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Schedule ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 52);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 49)(20, "span", 50)(21, "mat-icon", 51);
    \u0275\u0275text(22, "broadcast_on_personal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Channels ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 52);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 49)(27, "span", 50)(28, "mat-icon", 51);
    \u0275\u0275text(29, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Template ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 52);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 49)(34, "span", 50)(35, "mat-icon", 51);
    \u0275\u0275text(36, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " Last run ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 52);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 49)(42, "span", 50)(43, "mat-icon", 51);
    \u0275\u0275text(44, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Next run ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 52);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 53)(50, "span", 50)(51, "mat-icon", 51);
    \u0275\u0275text(52, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Audience segments ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 54)(55, "span", 55);
    \u0275\u0275text(56);
    \u0275\u0275elementStart(57, "span", 56);
    \u0275\u0275text(58, "primary");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(59, AdminRuleEngineDashboardComponent_Conditional_42_For_9_For_60_Template, 2, 1, "span", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 58)(62, "label", 59)(63, "input", 60);
    \u0275\u0275listener("change", function AdminRuleEngineDashboardComponent_Conditional_42_For_9_Template_input_change_63_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onExecutionSlideChange(rule_r4, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 61)(65, "span", 62)(66, "mat-icon", 63);
    \u0275\u0275text(67, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "mat-icon", 64);
    \u0275\u0275text(69, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "span", 65);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 66)(73, "button", 67);
    \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Conditional_42_For_9_Template_button_click_73_listener() {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.manualRun(rule_r4));
    });
    \u0275\u0275elementStart(74, "mat-icon");
    \u0275\u0275text(75, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " Manual run ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 68);
    \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Conditional_42_For_9_Template_button_click_77_listener() {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openHistory(rule_r4));
    });
    \u0275\u0275elementStart(78, "mat-icon");
    \u0275\u0275text(79, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, " Audit & runs ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_23_0;
    const rule_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("rule-card--active", rule_r4.executionActive);
    \u0275\u0275advance();
    \u0275\u0275classProp("rule-card__strip--on", rule_r4.executionActive);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(rule_r4.ruleName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rule_r4.ruleType);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", rule_r4.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(rule_r4.lastExecutionOutcome ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(rule_r4.scheduleType);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.channels(rule_r4));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(rule_r4.consentTemplateName || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(rule_r4.lastExecutedAt ? \u0275\u0275pipeBind2(40, 19, rule_r4.lastExecutedAt, "short") : "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(rule_r4.nextExecutionAt ? \u0275\u0275pipeBind2(48, 22, rule_r4.nextExecutionAt, "short") : "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.primarySegmentLabel(rule_r4), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_23_0 = rule_r4.additionalSegmentCodes) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : \u0275\u0275pureFunction0(25, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("toggle--on", !!rule_r4.executionActive);
    \u0275\u0275property("matTooltip", "Only active rules are picked up by automatic execution.");
    \u0275\u0275advance();
    \u0275\u0275property("checked", !!rule_r4.executionActive);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(rule_r4.executionActive ? "Active" : "Inactive");
  }
}
function AdminRuleEngineDashboardComponent_Conditional_42_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "label", 71);
    \u0275\u0275text(5, " Rows ");
    \u0275\u0275elementStart(6, "select", 72);
    \u0275\u0275listener("change", function AdminRuleEngineDashboardComponent_Conditional_42_Conditional_10_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(7, "option", 73);
    \u0275\u0275text(8, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 73);
    \u0275\u0275text(10, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 73);
    \u0275\u0275text(12, "25");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 74)(14, "button", 75);
    \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Conditional_42_Conditional_10_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(0));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 76);
    \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Conditional_42_Conditional_10_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageIndex() - 1));
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 77);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 78);
    \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Conditional_42_Conditional_10_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pageIndex() + 1));
    });
    \u0275\u0275elementStart(23, "mat-icon");
    \u0275\u0275text(24, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 79);
    \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Conditional_42_Conditional_10_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.totalPages() - 1));
    });
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "last_page");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.pageIndex() * ctx_r1.pageSize() + 1, "\u2013", ctx_r1.min(ctx_r1.pageIndex() * ctx_r1.pageSize() + ctx_r1.rules().length, ctx_r1.totalItems()), " of ", ctx_r1.totalItems(), " rules ");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", 5)("selected", ctx_r1.pageSize() === 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10)("selected", ctx_r1.pageSize() === 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 25)("selected", ctx_r1.pageSize() === 25);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.pageIndex() + 1, " / ", ctx_r1.totalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pageIndex() >= ctx_r1.totalPages() - 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pageIndex() >= ctx_r1.totalPages() - 1);
  }
}
function AdminRuleEngineDashboardComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20)(1, "h2");
    \u0275\u0275text(2, "Approved rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminRuleEngineDashboardComponent_Conditional_42_Conditional_6_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36);
    \u0275\u0275repeaterCreate(8, AdminRuleEngineDashboardComponent_Conditional_42_For_9_Template, 81, 26, "div", 37, \u0275\u0275componentInstance().trackById, true);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminRuleEngineDashboardComponent_Conditional_42_Conditional_10_Template, 28, 15, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.totalItems(), " rule", ctx_r1.totalItems() !== 1 ? "s" : "", "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filterSearch || ctx_r1.filterSchedule ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.rules());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalPages() > 1 ? 10 : -1);
  }
}
function AdminRuleEngineDashboardComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 17);
  }
}
function AdminRuleEngineDashboardComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "No executions recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function AdminRuleEngineDashboardComponent_Conditional_48_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", e_r7.chunksCompleted, " of ", e_r7.chunksTotal, " chunks completed");
  }
}
function AdminRuleEngineDashboardComponent_Conditional_48_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r7.progressNotes);
  }
}
function AdminRuleEngineDashboardComponent_Conditional_48_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 81)(1, "div", 83);
    \u0275\u0275element(2, "span");
    \u0275\u0275pipe(3, "lowercase");
    \u0275\u0275elementStart(4, "div", 84)(5, "span", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 86)(8, "span", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminRuleEngineDashboardComponent_Conditional_48_For_2_Conditional_11_Template, 2, 2, "span", 88)(12, AdminRuleEngineDashboardComponent_Conditional_48_For_2_Conditional_12_Template, 2, 1, "span", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 90)(14, "span");
    \u0275\u0275pipe(15, "lowercase");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 91);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("exec-status-dot exec-status-dot--", \u0275\u0275pipeBind1(3, 14, e_r7.status), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(e_r7.ruleName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.triggerType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.executionRecentLabel(e_r7.status), " \xB7 ", e_r7.eligibleCount, " recipients ");
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r7.chunksTotal != null && e_r7.chunksTotal > 0 && e_r7.chunksCompleted != null ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r7.progressNotes ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("exec-outcome-badge exec-outcome-badge--", \u0275\u0275pipeBind1(15, 16, e_r7.status), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.executionRecentLabel(e_r7.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 18, e_r7.startedAt, "dd MMM \xB7 hh:mm a"));
  }
}
function AdminRuleEngineDashboardComponent_Conditional_48_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 92)(2, "label", 93);
    \u0275\u0275text(3, " Rows ");
    \u0275\u0275elementStart(4, "select", 94);
    \u0275\u0275listener("change", function AdminRuleEngineDashboardComponent_Conditional_48_Conditional_3_Template_select_change_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onExecSizeChange($event));
    });
    \u0275\u0275elementStart(5, "option", 73);
    \u0275\u0275text(6, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 73);
    \u0275\u0275text(8, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 73);
    \u0275\u0275text(10, "25");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 95);
    \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Conditional_48_Conditional_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onExecPageChange(ctx_r1.execPageIndex() - 1));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 77);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 95);
    \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Conditional_48_Conditional_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onExecPageChange(ctx_r1.execPageIndex() + 1));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", 5)("selected", ctx_r1.execPageSize() === 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10)("selected", ctx_r1.execPageSize() === 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 25)("selected", ctx_r1.execPageSize() === 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.execPageIndex() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Page ", ctx_r1.execPageIndex() + 1, " / ", ctx_r1.execTotalPages(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.execPageIndex() >= ctx_r1.execTotalPages() - 1);
  }
}
function AdminRuleEngineDashboardComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 80);
    \u0275\u0275repeaterCreate(1, AdminRuleEngineDashboardComponent_Conditional_48_For_2_Template, 20, 21, "li", 81, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminRuleEngineDashboardComponent_Conditional_48_Conditional_3_Template, 19, 10, "div", 82);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.execRows());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.execTotalPages() > 1 ? 3 : -1);
  }
}
var ALL_SCHEDULE_TYPES = ["IMMEDIATE", "SCHEDULED", "RECURRING"];
var AdminRuleEngineDashboardComponent = class _AdminRuleEngineDashboardComponent {
  constructor() {
    this.api = inject(AdminRuleEngineService);
    this.dialog = inject(MatDialog);
    this.destroy$ = new Subject();
    this.min = Math.min;
    this.loading = signal(true);
    this.stats = signal(null);
    this.allRules = signal([]);
    this.totalPages = signal(0);
    this.totalItems = signal(0);
    this.pageIndex = signal(0);
    this.pageSize = signal(5);
    this.filterSearch = "";
    this.filterSchedule = "";
    this.allScheduleTypes = ALL_SCHEDULE_TYPES;
    this._filterTick = signal(0);
    this.rules = computed(() => {
      this._filterTick();
      const search = this.filterSearch.trim().toLowerCase();
      const schedule = this.filterSchedule;
      return this.allRules().filter((r) => {
        const matchesSearch = !search || r.ruleName.toLowerCase().includes(search);
        const matchesSchedule = !schedule || r.scheduleType === schedule;
        return matchesSearch && matchesSchedule;
      });
    });
    this.execPageIndex = signal(0);
    this.execPageSize = signal(5);
    this.execTotalPages = signal(0);
    this.execTotalItems = signal(0);
    this.execRows = signal([]);
    this.execLoading = signal(false);
  }
  ngOnInit() {
    this.loadAll();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  applyFilters() {
    this.pageIndex.set(0);
    this._filterTick.update((v) => v + 1);
  }
  clearFilters() {
    this.filterSearch = "";
    this.filterSchedule = "";
    this.pageIndex.set(0);
    this._filterTick.update((v) => v + 1);
  }
  /** Returns an observable so it can be used inside forkJoin */
  loadExecutions() {
    return this.api.listAllExecutionsPaged(this.execPageIndex(), this.execPageSize());
  }
  loadAll() {
    this.loading.set(true);
    this.execLoading.set(true);
    forkJoin({
      stats: this.api.getDashboardStats(),
      rules: this.api.listApprovedRules(this.pageIndex(), this.pageSize()),
      executions: this.loadExecutions()
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ stats, rules, executions }) => {
        this.loading.set(false);
        this.execLoading.set(false);
        if (stats.success && stats.data) {
          this.stats.set(stats.data);
        }
        if (rules.success && rules.data) {
          this.allRules.set(rules.data.content);
          this.totalPages.set(rules.data.totalPages);
          this.totalItems.set(rules.data.totalElements);
        }
        if (executions.success && executions.data) {
          this.execRows.set(executions.data.content);
          this.execTotalPages.set(executions.data.totalPages);
          this.execTotalItems.set(executions.data.totalElements);
        }
      },
      error: () => {
        this.loading.set(false);
        this.execLoading.set(false);
      }
    });
  }
  channels(rule) {
    return (rule.broadcastChannels ?? []).join(", ") || "\u2014";
  }
  primarySegmentLabel(rule) {
    return audienceSegmentLabel(rule.primarySegment);
  }
  onExecutionSlideChange(rule, ev) {
    const desired = ev.target.checked;
    ev.target.checked = !desired;
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: desired ? "Activate rule for execution?" : "Deactivate rule?",
        body: desired ? `Enable automatic and manual runs for "${rule.ruleName}" according to its schedule.` : `Automatic runs will stop for "${rule.ruleName}". The rule remains approved and visible here.`,
        confirmLabel: desired ? "Activate" : "Deactivate",
        confirmColor: desired ? "primary" : "warn"
      }
    });
    ref.afterClosed().subscribe((ok) => {
      if (!ok)
        return;
      this.api.setExecutionActive(rule.id, desired).subscribe({
        next: (r) => {
          if (r.success) {
            rule.executionActive = desired;
            this.allRules.set([...this.allRules()]);
            this.loadAll();
          }
        }
      });
    });
  }
  manualRun(rule) {
    const tplId = rule.consentTemplateId;
    const run = (n, infoPanel) => {
      const ref = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: "Run rule now?",
          body: `About ${n} customer(s) match the audience for "${rule.ruleName}". Communications will be sent for configured channels (email uses secure consent links to the customer's registered address).`,
          infoPanel,
          confirmLabel: "Run now",
          confirmColor: "success"
        }
      });
      ref.afterClosed().subscribe((ok) => {
        if (!ok)
          return;
        this.api.manualRun(rule.id).subscribe({
          next: () => this.loadAll()
        });
      });
    };
    if (tplId != null) {
      forkJoin({
        eligible: this.api.previewAudience(rule.id),
        breakdown: this.api.previewAudienceBreakdown(rule.id)
      }).pipe(takeUntil(this.destroy$)).subscribe({
        next: ({ eligible, breakdown }) => {
          const n = eligible.data ?? 0;
          let info;
          if (breakdown.success && breakdown.data) {
            const d = breakdown.data;
            info = `${d.alreadyAcceptedExcludedCount} of ${d.grossAudienceCount} segment matches have already accepted this template and will be excluded from re-invite.`;
          }
          run(n, info);
        }
      });
    } else {
      this.api.previewAudience(rule.id).pipe(takeUntil(this.destroy$)).subscribe({
        next: (prev) => run(prev.data ?? 0)
      });
    }
  }
  openHistory(rule) {
    this.dialog.open(RuleEngineRuleDetailDialogComponent, {
      data: { ruleId: rule.id, ruleName: rule.ruleName },
      width: "560px"
    });
  }
  onPageChange(newPage) {
    this.pageIndex.set(newPage);
    this.loadRulesOnly();
  }
  onPageSizeChange(ev) {
    this.pageSize.set(Number(ev.target.value));
    this.pageIndex.set(0);
    this.loadRulesOnly();
  }
  trackById(_i, r) {
    return r.id;
  }
  recent() {
    return this.stats()?.recentExecutions ?? [];
  }
  executionRecentLabel(status) {
    if (status === "PARTIAL") {
      return "Partially Delivered";
    }
    return status;
  }
  /** Page changes only reload rules - stats stay cached to avoid redundant calls. */
  loadRulesOnly() {
    this.loading.set(true);
    this.api.listApprovedRules(this.pageIndex(), this.pageSize()).pipe(takeUntil(this.destroy$)).subscribe({
      next: (rules) => {
        this.loading.set(false);
        if (rules.success && rules.data) {
          this.allRules.set(rules.data.content);
          this.totalPages.set(rules.data.totalPages);
          this.totalItems.set(rules.data.totalElements);
        }
      },
      error: () => this.loading.set(false)
    });
  }
  onExecPageChange(page) {
    this.execPageIndex.set(page);
    this.loadExecutionsViaSubscribe();
  }
  onExecSizeChange(ev) {
    this.execPageSize.set(Number(ev.target.value));
    this.execPageIndex.set(0);
    this.loadExecutionsViaSubscribe();
  }
  /** Separate method for pagination-only execution reload (not via forkJoin) */
  loadExecutionsViaSubscribe() {
    this.execLoading.set(true);
    this.api.listAllExecutionsPaged(this.execPageIndex(), this.execPageSize()).pipe(takeUntil(this.destroy$)).subscribe({
      next: (r) => {
        this.execLoading.set(false);
        if (r.success && r.data) {
          this.execRows.set(r.data.content);
          this.execTotalPages.set(r.data.totalPages);
          this.execTotalItems.set(r.data.totalElements);
        }
      },
      error: () => this.execLoading.set(false)
    });
  }
  allSegmentLabels(rule) {
    const primary = audienceSegmentLabel(rule.primarySegment);
    const additional = (rule.additionalSegmentCodes ?? []).map((code) => audienceSegmentLabel(code));
    return [primary, ...additional].join(", ");
  }
  static {
    this.\u0275fac = function AdminRuleEngineDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminRuleEngineDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminRuleEngineDashboardComponent, selectors: [["app-admin-rule-engine-dashboard"]], decls: 49, vars: 9, consts: [[1, "page"], [1, "hero"], [1, "eyebrow"], [1, "lede"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "filter-bar"], ["appearance", "outline", 1, "filter-field", "filter-field--search"], ["matInput", "", "placeholder", "Rule name\u2026", 3, "ngModelChange", "keydown.enter", "ngModel"], ["matSuffix", ""], [1, "filter-divider"], ["appearance", "outline", 1, "filter-field"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "filter-actions"], ["mat-flat-button", "", "type", "button", 1, "btn-apply", 3, "click"], ["mat-button", "", "type", "button", 1, "btn-clear", 3, "click"], ["mode", "indeterminate", 1, "loader"], [1, "cards"], [1, "empty"], [1, "panel"], [1, "exec-empty"], [1, "stat"], [1, "stat-icon", "stat-icon--blue"], [1, "stat-label"], [1, "stat-value"], [1, "stat", "stat--ok"], [1, "stat-icon", "stat-icon--green"], [1, "stat-icon", "stat-icon--slate"], [1, "stat", "stat--pending"], [1, "stat-icon", "stat-icon--amber"], [1, "stat-icon", "stat-icon--indigo"], [1, "empty-icon"], [1, "summary-bar"], [1, "summary-count"], [1, "summary-tag"], [1, "rule-list"], [1, "rule-card", 3, "rule-card--active"], [1, "pagination"], [1, "rule-card"], [1, "rule-card__strip"], [1, "rule-card__header"], [1, "rule-card__title-group"], [1, "name"], [1, "sub"], [1, "rule-card__badges"], [3, "status"], [3, "class"], [1, "rule-card__meta"], [1, "meta-item"], [1, "meta-label"], [1, "meta-icon"], [1, "meta-value"], [1, "meta-item", "meta-item--full"], [1, "seg-chip-row"], [1, "seg-chip", "seg-chip--primary"], [1, "seg-chip__tag"], [1, "seg-chip"], [1, "rule-card__footer"], [1, "toggle", 3, "matTooltip"], ["type", "checkbox", 1, "toggle__input", 3, "change", "checked"], [1, "toggle__track"], [1, "toggle__thumb"], [1, "toggle__icon", "toggle__icon--on"], [1, "toggle__icon", "toggle__icon--off"], [1, "toggle__label"], [1, "rule-card__actions"], ["type", "button", 1, "btn-action", "btn-action--primary", 3, "click"], ["type", "button", 1, "btn-action", 3, "click"], [1, "pagination__info"], [1, "pagination__controls"], [1, "pagination__size-label"], [1, "pagination__size-select", 3, "change"], [3, "value", "selected"], [1, "pagination__nav"], ["type", "button", "matTooltip", "First page", 1, "pagination__btn", 3, "click", "disabled"], ["type", "button", "matTooltip", "Previous page", 1, "pagination__btn", 3, "click", "disabled"], [1, "pagination__page-info"], ["type", "button", "matTooltip", "Next page", 1, "pagination__btn", 3, "click", "disabled"], ["type", "button", "matTooltip", "Last page", 1, "pagination__btn", 3, "click", "disabled"], [1, "recent"], [1, "exec-row"], [1, "exec-pagination"], [1, "exec-row__left"], [1, "exec-row__body"], [1, "r-name"], [1, "r-meta"], [1, "r-trigger-pill"], [1, "r-chunks"], [1, "r-progress"], [1, "exec-row__right"], [1, "r-time"], [1, "exec-pg-right"], [1, "pg-size-label"], [1, "pg-size-select", 3, "change"], ["type", "button", 1, "pagination__btn", 3, "click", "disabled"]], template: function AdminRuleEngineDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "p", 2);
        \u0275\u0275text(4, "Operations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Rule engine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8, " Checker-approved rules appear here. Activate a rule to include it in automatic runs (schedule-aware). Email uses secure consent links to each customer's registered address. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 4);
        \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Template_button_click_9_listener() {
          return ctx.loadAll();
        });
        \u0275\u0275elementStart(10, "mat-icon");
        \u0275\u0275text(11, "refresh");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Refresh ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5)(14, "mat-form-field", 6)(15, "mat-label");
        \u0275\u0275text(16, "Search rules");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function AdminRuleEngineDashboardComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterSearch, $event) || (ctx.filterSearch = $event);
          return $event;
        });
        \u0275\u0275listener("keydown.enter", function AdminRuleEngineDashboardComponent_Template_input_keydown_enter_17_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-icon", 8);
        \u0275\u0275text(19, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "div", 9);
        \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-label");
        \u0275\u0275text(23, "Schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AdminRuleEngineDashboardComponent_Template_mat_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterSchedule, $event) || (ctx.filterSchedule = $event);
          return $event;
        });
        \u0275\u0275elementStart(25, "mat-option", 12);
        \u0275\u0275text(26, "All schedules");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(27, AdminRuleEngineDashboardComponent_For_28_Template, 3, 4, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "div", 9);
        \u0275\u0275elementStart(30, "div", 14)(31, "button", 15);
        \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Template_button_click_31_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(32, "mat-icon");
        \u0275\u0275text(33, "filter_list");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " Apply ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 16);
        \u0275\u0275listener("click", function AdminRuleEngineDashboardComponent_Template_button_click_35_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275elementStart(36, "mat-icon");
        \u0275\u0275text(37, "close");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " Clear ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(39, AdminRuleEngineDashboardComponent_Conditional_39_Template, 1, 0, "mat-progress-bar", 17)(40, AdminRuleEngineDashboardComponent_Conditional_40_Template, 41, 5, "div", 18)(41, AdminRuleEngineDashboardComponent_Conditional_41_Template, 5, 0, "div", 19)(42, AdminRuleEngineDashboardComponent_Conditional_42_Template, 11, 4, "section", 20);
        \u0275\u0275elementStart(43, "section", 20)(44, "h2");
        \u0275\u0275text(45, "Recent executions");
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, AdminRuleEngineDashboardComponent_Conditional_46_Template, 1, 0, "mat-progress-bar", 17)(47, AdminRuleEngineDashboardComponent_Conditional_47_Template, 2, 0, "p", 21)(48, AdminRuleEngineDashboardComponent_Conditional_48_Template, 4, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterSearch);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterSchedule);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.allScheduleTypes);
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.loading() ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() && ctx.stats() ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() && !ctx.rules().length ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() && ctx.rules().length ? 42 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.execLoading() ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.execLoading() && !ctx.execRows().length ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.execRows().length ? 48 : -1);
      }
    }, dependencies: [
      DatePipe,
      TitleCasePipe,
      LowerCasePipe,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatProgressBarModule,
      MatProgressBar,
      MatTooltipModule,
      MatTooltip,
      MatChipsModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      WorkflowStatusBadgeComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 28px 20px 88px;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(59, 130, 246, 0.06),\n      transparent 22%),\n    linear-gradient(\n      to bottom,\n      #f8fbff 0%,\n      #f5f7fb 100%);\n  min-height: 100vh;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 26px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 32px;\n  line-height: 1.05;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.lede[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 760px;\n  font-size: 14px;\n  line-height: 1.65;\n  color: #64748b;\n}\n.loader[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  margin-bottom: 22px;\n  background: rgba(255, 255, 255, 0.78);\n  backdrop-filter: blur(14px);\n  border: 1px solid rgba(226, 232, 240, 0.85);\n  border-radius: 22px;\n  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n}\n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.filter-bar[_ngcontent-%COMP%]   mat-form-field.filter-field--search[_ngcontent-%COMP%] {\n  flex: 2.1;\n}\n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  border-radius: 14px;\n  background: #f8fafc;\n}\n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mdc-notched-outline__leading, \n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mdc-notched-outline__notch, \n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mdc-notched-outline__trailing {\n  border-color: #dbe4f0 !important;\n}\n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__leading, \n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__notch, \n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #60a5fa !important;\n}\n.filter-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-focus-overlay {\n  opacity: 0;\n}\n.filter-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      #dbe4f0,\n      transparent);\n  flex-shrink: 0;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  height: 42px;\n  padding-inline: 18px !important;\n  border-radius: 12px !important;\n  font-weight: 600 !important;\n  box-shadow: none !important;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  font-weight: 600 !important;\n}\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 20px 18px 18px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(248, 250, 252, 0.95));\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.stat[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border-color: #bfdbfe;\n}\n.stat--ok[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(240, 253, 244, 0.95),\n      rgba(248, 250, 252, 0.95));\n  border-color: rgba(34, 197, 94, 0.22);\n}\n.stat--pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 235, 0.96),\n      rgba(248, 250, 252, 0.95));\n  border-color: rgba(245, 158, 11, 0.22);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  margin-bottom: 12px;\n}\n.stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.stat-icon--blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n}\n.stat-icon--green[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.stat-icon--slate[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n  color: #64748b;\n}\n.stat-icon--amber[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.stat-icon--indigo[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.stat-value[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 30px;\n  line-height: 1;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n  color: #0f172a;\n}\n.panel[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding: 22px;\n  border-radius: 26px;\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(226, 232, 240, 0.85);\n  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8);\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.summary-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.summary-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.summary-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.rule-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.rule-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 18px 18px 16px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.98),\n      rgba(248, 250, 252, 0.96));\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.85);\n}\n.rule-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #bfdbfe;\n  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.09), inset 0 1px 0 rgba(255, 255, 255, 0.85);\n}\n.rule-card--active[_ngcontent-%COMP%] {\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.rule-card--active[_ngcontent-%COMP%]:hover {\n  border-color: rgba(22, 163, 74, 0.45);\n  box-shadow: 0 18px 40px rgba(22, 163, 74, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.85);\n}\n.rule-card__strip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  border-radius: 22px 0 0 22px;\n  background: #e2e8f0;\n  transition: background 0.25s ease;\n}\n.rule-card__strip--on[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      #22c55e,\n      #16a34a);\n}\n.rule-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 16px;\n  padding-left: 12px;\n}\n.rule-card__title-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.rule-card__badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.rule-card__meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 14px;\n  padding: 16px 12px;\n  margin-bottom: 16px;\n  border-top: 1px solid #eef2f7;\n  border-bottom: 1px solid #eef2f7;\n}\n.rule-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding-left: 12px;\n}\n.rule-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  color: #0f172a;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.meta-item--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.meta-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.meta-icon[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  width: 12px !important;\n  height: 12px !important;\n  color: #cbd5e1;\n}\n.meta-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.seg-chip-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 2px;\n}\n.seg-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(59, 130, 246, 0.08);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  color: #2563eb;\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    transform 0.12s ease;\n}\n.seg-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.14);\n  border-color: rgba(59, 130, 246, 0.3);\n  transform: translateY(-1px);\n}\n.seg-chip--primary[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  border-color: rgba(99, 102, 241, 0.22);\n  color: #6366f1;\n}\n.seg-chip--primary[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.16);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.seg-chip__tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.62rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  background: rgba(99, 102, 241, 0.15);\n  color: #6366f1;\n}\n.outcome-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n}\n.outcome-badge--success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #15803d;\n}\n.outcome-badge--failed[_ngcontent-%COMP%], \n.outcome-badge--error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.outcome-badge--partial[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.outcome-badge--skipped[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  color: #64748b;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 38px;\n  padding: 0 14px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.16s ease;\n}\n.btn-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n  transform: translateY(-1px);\n}\n.btn-action--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #3b82f6);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);\n}\n.btn-action--primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.28);\n}\n.toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle__input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n.toggle__track[_ngcontent-%COMP%] {\n  position: relative;\n  width: 48px;\n  height: 26px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  border: 1px solid #cbd5e1;\n  transition: all 0.22s ease;\n}\n.toggle__thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.toggle__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 11px;\n  width: 11px;\n  height: 11px;\n  transition: all 0.18s ease;\n}\n.toggle__icon--on[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.5);\n  color: #16a34a;\n}\n.toggle__icon--off[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #94a3b8;\n}\n.toggle__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n}\n.toggle--on[_ngcontent-%COMP%]   .toggle__track[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  border-color: #16a34a;\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.14);\n}\n.toggle--on[_ngcontent-%COMP%]   .toggle__thumb[_ngcontent-%COMP%] {\n  transform: translateX(22px);\n}\n.toggle--on[_ngcontent-%COMP%]   .toggle__icon--on[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle--on[_ngcontent-%COMP%]   .toggle__icon--off[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.4);\n}\n.toggle--on[_ngcontent-%COMP%]   .toggle__label[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-top: 22px;\n  padding-top: 18px;\n  border-top: 1px solid #eef2f7;\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.pagination__size-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.pagination__size-select[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 10px;\n  border: 1px solid #dbe4f0;\n  background: white;\n  font-size: 12px;\n  font-weight: 600;\n  color: #334155;\n}\n.pagination__size-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #93c5fd;\n}\n.pagination__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pagination__btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: white;\n  color: #475569;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.pagination__btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.pagination__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.pagination__page-info[_ngcontent-%COMP%] {\n  min-width: 90px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #334155;\n}\n.recent[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.exec-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 12px;\n  border-radius: 14px;\n  border: 1px solid transparent;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.exec-row[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 250, 252, 0.9);\n  border-color: #eef2f7;\n}\n.exec-row__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 0;\n  flex: 1;\n}\n.exec-row__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.exec-row__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.exec-status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-top: 5px;\n  flex-shrink: 0;\n}\n.exec-status-dot--success[_ngcontent-%COMP%] {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);\n}\n.exec-status-dot--failed[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);\n}\n.exec-status-dot--partial[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);\n}\n.exec-outcome-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 999px;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.exec-outcome-badge--success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.exec-outcome-badge--failed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.exec-outcome-badge--partial[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #d97706;\n}\n.r-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.r-trigger-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: rgba(99, 102, 241, 0.08);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  color: #6366f1;\n  margin-right: 4px;\n}\n.r-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.r-chunks[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.r-progress[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #475569;\n  white-space: pre-wrap;\n}\n.r-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.exec-empty[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  padding: 12px 0;\n}\n.exec-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 18px;\n  padding-top: 14px;\n  border-top: 1px solid #eef2f7;\n}\n.exec-pg-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pg-size-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.pg-size-select[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 10px;\n  border: 1px solid #dbe4f0;\n  background: white;\n  font-size: 12px;\n  font-weight: 600;\n  color: #334155;\n}\n.pg-size-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #93c5fd;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  text-align: center;\n  color: #64748b;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  font-size: 56px;\n  opacity: 0.35;\n  margin-bottom: 12px;\n}\n  .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n@media (max-width: 920px) {\n  .filter-bar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .filter-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .rule-card__footer[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .rule-card__actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .panel[_ngcontent-%COMP%] {\n    padding: 18px;\n    border-radius: 22px;\n  }\n  .rule-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .exec-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .exec-row__right[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=admin-rule-engine-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRuleEngineDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-rule-engine-dashboard", standalone: true, imports: [
      DatePipe,
      TitleCasePipe,
      LowerCasePipe,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatProgressBarModule,
      MatTooltipModule,
      MatChipsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      WorkflowStatusBadgeComponent
    ], template: `<div class="page">\r
  <div class="hero">\r
    <div>\r
      <p class="eyebrow">Operations</p>\r
      <h1>Rule engine</h1>\r
      <p class="lede">\r
        Checker-approved rules appear here. Activate a rule to include it in automatic runs (schedule-aware). Email uses\r
        secure consent links to each customer's registered address.\r
      </p>\r
    </div>\r
    <button mat-stroked-button type="button" (click)="loadAll()">\r
      <mat-icon>refresh</mat-icon>\r
      Refresh\r
    </button>\r
  </div>\r
\r
  <!-- \u2500\u2500 Filter bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="filter-bar">\r
    <mat-form-field appearance="outline" class="filter-field filter-field--search">\r
      <mat-label>Search rules</mat-label>\r
      <input matInput [(ngModel)]="filterSearch" (keydown.enter)="applyFilters()" placeholder="Rule name\u2026" />\r
      <mat-icon matSuffix>search</mat-icon>\r
    </mat-form-field>\r
\r
    <div class="filter-divider"></div>\r
\r
    <mat-form-field appearance="outline" class="filter-field">\r
      <mat-label>Schedule</mat-label>\r
      <mat-select [(ngModel)]="filterSchedule">\r
        <mat-option value="">All schedules</mat-option>\r
        @for (s of allScheduleTypes; track s) {\r
        <mat-option [value]="s">{{ s | titlecase }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <div class="filter-divider"></div>\r
\r
    <div class="filter-actions">\r
      <button mat-flat-button type="button" class="btn-apply" (click)="applyFilters()">\r
        <mat-icon>filter_list</mat-icon>\r
        Apply\r
      </button>\r
      <button mat-button type="button" class="btn-clear" (click)="clearFilters()">\r
        <mat-icon>close</mat-icon>\r
        Clear\r
      </button>\r
    </div>\r
  </div>\r
\r
  @if (loading()) {\r
  <mat-progress-bar mode="indeterminate" class="loader" />\r
  }\r
\r
  @if (!loading() && stats()) {\r
  <div class="cards">\r
    <div class="stat">\r
      <div class="stat-icon stat-icon--blue">\r
        <mat-icon>gavel</mat-icon>\r
      </div>\r
      <div class="stat-label">Approved rules</div>\r
      <div class="stat-value">{{ stats()!.approvedRulesCount }}</div>\r
    </div>\r
    <div class="stat stat--ok">\r
      <div class="stat-icon stat-icon--green">\r
        <mat-icon>play_circle</mat-icon>\r
      </div>\r
      <div class="stat-label">Active for execution</div>\r
      <div class="stat-value">{{ stats()!.activeForExecutionCount }}</div>\r
    </div>\r
    <div class="stat">\r
      <div class="stat-icon stat-icon--slate">\r
        <mat-icon>pause_circle</mat-icon>\r
      </div>\r
      <div class="stat-label">Inactive</div>\r
      <div class="stat-value">{{ stats()!.inactiveForExecutionCount }}</div>\r
    </div>\r
    <div class="stat stat--pending">\r
      <div class="stat-icon stat-icon--amber">\r
        <mat-icon>schedule</mat-icon>\r
      </div>\r
      <div class="stat-label">Immediate \xB7 first run pending</div>\r
      <div class="stat-value">{{ stats()!.pendingImmediateFirstRunCount }}</div>\r
    </div>\r
    <div class="stat">\r
      <div class="stat-icon stat-icon--indigo">\r
        <mat-icon>bolt</mat-icon>\r
      </div>\r
      <div class="stat-label">Runs (24h)</div>\r
      <div class="stat-value">{{ stats()!.executedInLast24HoursCount }}</div>\r
    </div>\r
  </div>\r
  }\r
\r
  @if (!loading() && !rules().length) {\r
  <div class="empty">\r
    <mat-icon class="empty-icon">rule</mat-icon>\r
    <p>No checker-approved rules are available yet. Approved rules will appear here automatically.</p>\r
  </div>\r
  }\r
\r
  @if (!loading() && rules().length) {\r
  <section class="panel">\r
    <h2>Approved rules</h2>\r
\r
    <!-- \u2500\u2500 Summary bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="summary-bar">\r
      <span class="summary-count">{{ totalItems() }} rule{{ totalItems() !== 1 ? 's' : '' }}</span>\r
      @if (filterSearch || filterSchedule) {\r
      <span class="summary-tag">Filters active</span>\r
      }\r
    </div>\r
\r
    <div class="rule-list">\r
      @for (rule of rules(); track trackById($index, rule)) {\r
      <div class="rule-card" [class.rule-card--active]="rule.executionActive">\r
\r
        <!-- Active glow strip -->\r
        <div class="rule-card__strip" [class.rule-card__strip--on]="rule.executionActive"></div>\r
\r
        <!-- Row 1: name + status + outcome -->\r
        <div class="rule-card__header">\r
          <div class="rule-card__title-group">\r
            <span class="name">{{ rule.ruleName }}</span>\r
            <span class="sub">{{ rule.ruleType }}</span>\r
          </div>\r
          <div class="rule-card__badges">\r
            <app-workflow-status-badge [status]="rule.status" />\r
            @if (rule.lastExecutionOutcome) {\r
            <span class="outcome-badge outcome-badge--{{ rule.lastExecutionOutcome | lowercase }}">\r
              {{ rule.lastExecutionOutcome }}\r
            </span>\r
            }\r
          </div>\r
        </div>\r
\r
        <!-- Row 2: meta grid -->\r
        <div class="rule-card__meta">\r
          <div class="meta-item">\r
            <span class="meta-label">\r
              <mat-icon class="meta-icon">calendar_today</mat-icon>\r
              Schedule\r
            </span>\r
            <span class="meta-value">{{ rule.scheduleType }}</span>\r
          </div>\r
          <div class="meta-item">\r
            <span class="meta-label">\r
              <mat-icon class="meta-icon">broadcast_on_personal</mat-icon>\r
              Channels\r
            </span>\r
            <span class="meta-value">{{ channels(rule) }}</span>\r
          </div>\r
          <div class="meta-item">\r
            <span class="meta-label">\r
              <mat-icon class="meta-icon">description</mat-icon>\r
              Template\r
            </span>\r
            <span class="meta-value">{{ rule.consentTemplateName || '\u2014' }}</span>\r
          </div>\r
          <div class="meta-item">\r
            <span class="meta-label">\r
              <mat-icon class="meta-icon">history</mat-icon>\r
              Last run\r
            </span>\r
            <span class="meta-value">{{ rule.lastExecutedAt ? (rule.lastExecutedAt | date : 'short') : '\u2014' }}</span>\r
          </div>\r
          <div class="meta-item">\r
            <span class="meta-label">\r
              <mat-icon class="meta-icon">update</mat-icon>\r
              Next run\r
            </span>\r
            <span class="meta-value">{{ rule.nextExecutionAt ? (rule.nextExecutionAt | date : 'short') : '\u2014' }}</span>\r
          </div>\r
\r
          <!-- Segments \u2014 full width -->\r
          <div class="meta-item meta-item--full">\r
            <span class="meta-label">\r
              <mat-icon class="meta-icon">group</mat-icon>\r
              Audience segments\r
            </span>\r
            <div class="seg-chip-row">\r
              <span class="seg-chip seg-chip--primary">\r
                {{ primarySegmentLabel(rule) }}\r
                <span class="seg-chip__tag">primary</span>\r
              </span>\r
              @for (code of (rule.additionalSegmentCodes ?? []); track code) {\r
              <span class="seg-chip">{{ code }}</span>\r
              }\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Row 3: toggle + actions -->\r
        <div class="rule-card__footer">\r
          <label class="toggle" [class.toggle--on]="!!rule.executionActive"\r
            [matTooltip]="'Only active rules are picked up by automatic execution.'">\r
            <input type="checkbox" class="toggle__input" [checked]="!!rule.executionActive"\r
              (change)="onExecutionSlideChange(rule, $event)" />\r
            <span class="toggle__track">\r
              <span class="toggle__thumb">\r
                <mat-icon class="toggle__icon toggle__icon--on">check</mat-icon>\r
                <mat-icon class="toggle__icon toggle__icon--off">close</mat-icon>\r
              </span>\r
            </span>\r
            <span class="toggle__label">{{ rule.executionActive ? 'Active' : 'Inactive' }}</span>\r
          </label>\r
\r
          <div class="rule-card__actions">\r
            <button class="btn-action btn-action--primary" type="button" (click)="manualRun(rule)">\r
              <mat-icon>play_arrow</mat-icon>\r
              Manual run\r
            </button>\r
            <button class="btn-action" type="button" (click)="openHistory(rule)">\r
              <mat-icon>history</mat-icon>\r
              Audit &amp; runs\r
            </button>\r
          </div>\r
        </div>\r
\r
      </div>\r
      }\r
    </div>\r
\r
    <!-- Pagination -->\r
    @if (totalPages() > 1) {\r
    <div class="pagination">\r
      <div class="pagination__info">\r
        Showing {{ pageIndex() * pageSize() + 1 }}\u2013{{ min(pageIndex() * pageSize() + rules().length, totalItems()) }}\r
        of {{ totalItems() }} rules\r
      </div>\r
      <div class="pagination__controls">\r
        <label class="pagination__size-label">\r
          Rows\r
          <select class="pagination__size-select" (change)="onPageSizeChange($event)">\r
            <option [value]="5" [selected]="pageSize() === 5">5</option>\r
            <option [value]="10" [selected]="pageSize() === 10">10</option>\r
            <option [value]="25" [selected]="pageSize() === 25">25</option>\r
          </select>\r
        </label>\r
        <div class="pagination__nav">\r
          <button class="pagination__btn" type="button" [disabled]="pageIndex() === 0" (click)="onPageChange(0)"\r
            matTooltip="First page">\r
            <mat-icon>first_page</mat-icon>\r
          </button>\r
          <button class="pagination__btn" type="button" [disabled]="pageIndex() === 0"\r
            (click)="onPageChange(pageIndex() - 1)" matTooltip="Previous page">\r
            <mat-icon>chevron_left</mat-icon>\r
          </button>\r
          <span class="pagination__page-info">Page {{ pageIndex() + 1 }} / {{ totalPages() }}</span>\r
          <button class="pagination__btn" type="button" [disabled]="pageIndex() >= totalPages() - 1"\r
            (click)="onPageChange(pageIndex() + 1)" matTooltip="Next page">\r
            <mat-icon>chevron_right</mat-icon>\r
          </button>\r
          <button class="pagination__btn" type="button" [disabled]="pageIndex() >= totalPages() - 1"\r
            (click)="onPageChange(totalPages() - 1)" matTooltip="Last page">\r
            <mat-icon>last_page</mat-icon>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    }\r
  </section>\r
  }\r
\r
  <section class="panel">\r
    <h2>Recent executions</h2>\r
\r
    @if (execLoading()) {\r
    <mat-progress-bar mode="indeterminate" class="loader" />\r
    }\r
\r
    @if (!execLoading() && !execRows().length) {\r
    <p class="exec-empty">No executions recorded yet.</p>\r
    }\r
\r
    @if (execRows().length) {\r
    <ul class="recent">\r
      @for (e of execRows(); track e.id) {\r
      <li class="exec-row">\r
        <div class="exec-row__left">\r
          <span class="exec-status-dot exec-status-dot--{{ e.status | lowercase }}"></span>\r
          <div class="exec-row__body">\r
            <span class="r-name">{{ e.ruleName }}</span>\r
            <span class="r-meta">\r
              <span class="r-trigger-pill">{{ e.triggerType }}</span>\r
              {{ executionRecentLabel(e.status) }} \xB7 {{ e.eligibleCount }} recipients\r
            </span>\r
            @if (e.chunksTotal != null && e.chunksTotal > 0 && e.chunksCompleted != null) {\r
            <span class="r-chunks">{{ e.chunksCompleted }} of {{ e.chunksTotal }} chunks completed</span>\r
            }\r
            @if (e.progressNotes) {\r
            <span class="r-progress">{{ e.progressNotes }}</span>\r
            }\r
          </div>\r
        </div>\r
        <div class="exec-row__right">\r
          <span class="exec-outcome-badge exec-outcome-badge--{{ e.status | lowercase }}">\r
            {{ executionRecentLabel(e.status) }}\r
          </span>\r
          <span class="r-time">{{ e.startedAt | date: 'dd MMM \xB7 hh:mm a' }}</span>\r
        </div>\r
      </li>\r
      }\r
    </ul>\r
\r
    <!-- Pagination -->\r
    @if (execTotalPages() > 1) {\r
    <div class="exec-pagination">\r
      <div class="exec-pg-right">\r
        <label class="pg-size-label">\r
          Rows\r
          <select class="pg-size-select" (change)="onExecSizeChange($event)">\r
            <option [value]="5" [selected]="execPageSize() === 5">5</option>\r
            <option [value]="10" [selected]="execPageSize() === 10">10</option>\r
            <option [value]="25" [selected]="execPageSize() === 25">25</option>\r
          </select>\r
        </label>\r
        <button type="button" class="pagination__btn" [disabled]="execPageIndex() === 0"\r
          (click)="onExecPageChange(execPageIndex() - 1)">\r
          <mat-icon>chevron_left</mat-icon>\r
        </button>\r
        <span class="pagination__page-info">\r
          Page {{ execPageIndex() + 1 }} / {{ execTotalPages() }}\r
        </span>\r
        <button type="button" class="pagination__btn" [disabled]="execPageIndex() >= execTotalPages() - 1"\r
          (click)="onExecPageChange(execPageIndex() + 1)">\r
          <mat-icon>chevron_right</mat-icon>\r
        </button>\r
      </div>\r
    </div>\r
    }\r
    }\r
  </section>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/features/admin/admin-rule-engine-dashboard/admin-rule-engine-dashboard.component.scss */\n.page {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 28px 20px 88px;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(59, 130, 246, 0.06),\n      transparent 22%),\n    linear-gradient(\n      to bottom,\n      #f8fbff 0%,\n      #f5f7fb 100%);\n  min-height: 100vh;\n}\n.hero {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 26px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\nh1 {\n  margin: 0 0 8px;\n  font-size: 32px;\n  line-height: 1.05;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.lede {\n  margin: 0;\n  max-width: 760px;\n  font-size: 14px;\n  line-height: 1.65;\n  color: #64748b;\n}\n.loader {\n  margin-bottom: 18px;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px;\n  margin-bottom: 22px;\n  background: rgba(255, 255, 255, 0.78);\n  backdrop-filter: blur(14px);\n  border: 1px solid rgba(226, 232, 240, 0.85);\n  border-radius: 22px;\n  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n}\n.filter-bar mat-form-field {\n  flex: 1;\n}\n.filter-bar mat-form-field.filter-field--search {\n  flex: 2.1;\n}\n.filter-bar mat-form-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.filter-bar mat-form-field ::ng-deep .mat-mdc-text-field-wrapper {\n  border-radius: 14px;\n  background: #f8fafc;\n}\n.filter-bar mat-form-field ::ng-deep .mdc-notched-outline__leading,\n.filter-bar mat-form-field ::ng-deep .mdc-notched-outline__notch,\n.filter-bar mat-form-field ::ng-deep .mdc-notched-outline__trailing {\n  border-color: #dbe4f0 !important;\n}\n.filter-bar mat-form-field ::ng-deep .mdc-text-field--focused .mdc-notched-outline__leading,\n.filter-bar mat-form-field ::ng-deep .mdc-text-field--focused .mdc-notched-outline__notch,\n.filter-bar mat-form-field ::ng-deep .mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #60a5fa !important;\n}\n.filter-bar mat-form-field ::ng-deep .mat-mdc-form-field-focus-overlay {\n  opacity: 0;\n}\n.filter-divider {\n  width: 1px;\n  height: 28px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      #dbe4f0,\n      transparent);\n  flex-shrink: 0;\n}\n.filter-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.btn-apply {\n  height: 42px;\n  padding-inline: 18px !important;\n  border-radius: 12px !important;\n  font-weight: 600 !important;\n  box-shadow: none !important;\n}\n.btn-clear {\n  border-radius: 12px !important;\n  font-weight: 600 !important;\n}\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat {\n  position: relative;\n  overflow: hidden;\n  padding: 20px 18px 18px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(248, 250, 252, 0.95));\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.stat:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border-color: #bfdbfe;\n}\n.stat--ok {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(240, 253, 244, 0.95),\n      rgba(248, 250, 252, 0.95));\n  border-color: rgba(34, 197, 94, 0.22);\n}\n.stat--pending {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 235, 0.96),\n      rgba(248, 250, 252, 0.95));\n  border-color: rgba(245, 158, 11, 0.22);\n}\n.stat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  margin-bottom: 12px;\n}\n.stat-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.stat-icon--blue {\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n}\n.stat-icon--green {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.stat-icon--slate {\n  background: rgba(100, 116, 139, 0.1);\n  color: #64748b;\n}\n.stat-icon--amber {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.stat-icon--indigo {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n.stat-label {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.stat-value {\n  margin-top: 8px;\n  font-size: 30px;\n  line-height: 1;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n  color: #0f172a;\n}\n.panel {\n  margin-bottom: 24px;\n  padding: 22px;\n  border-radius: 26px;\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(226, 232, 240, 0.85);\n  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8);\n}\n.panel h2 {\n  margin: 0 0 18px;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.summary-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.summary-count {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.summary-tag {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.rule-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.rule-card {\n  position: relative;\n  overflow: hidden;\n  padding: 18px 18px 16px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.98),\n      rgba(248, 250, 252, 0.96));\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.85);\n}\n.rule-card:hover {\n  transform: translateY(-2px);\n  border-color: #bfdbfe;\n  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.09), inset 0 1px 0 rgba(255, 255, 255, 0.85);\n}\n.rule-card--active {\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.rule-card--active:hover {\n  border-color: rgba(22, 163, 74, 0.45);\n  box-shadow: 0 18px 40px rgba(22, 163, 74, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.85);\n}\n.rule-card__strip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  border-radius: 22px 0 0 22px;\n  background: #e2e8f0;\n  transition: background 0.25s ease;\n}\n.rule-card__strip--on {\n  background:\n    linear-gradient(\n      to bottom,\n      #22c55e,\n      #16a34a);\n}\n.rule-card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 16px;\n  padding-left: 12px;\n}\n.rule-card__title-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.rule-card__badges {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.rule-card__meta {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 14px;\n  padding: 16px 12px;\n  margin-bottom: 16px;\n  border-top: 1px solid #eef2f7;\n  border-bottom: 1px solid #eef2f7;\n}\n.rule-card__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding-left: 12px;\n}\n.rule-card__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.name {\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  color: #0f172a;\n}\n.sub {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.meta-item {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.meta-item--full {\n  grid-column: 1/-1;\n}\n.meta-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.meta-icon {\n  font-size: 12px !important;\n  width: 12px !important;\n  height: 12px !important;\n  color: #cbd5e1;\n}\n.meta-value {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.seg-chip-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 2px;\n}\n.seg-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(59, 130, 246, 0.08);\n  border: 1px solid rgba(59, 130, 246, 0.18);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  color: #2563eb;\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    transform 0.12s ease;\n}\n.seg-chip:hover {\n  background: rgba(59, 130, 246, 0.14);\n  border-color: rgba(59, 130, 246, 0.3);\n  transform: translateY(-1px);\n}\n.seg-chip--primary {\n  background: rgba(99, 102, 241, 0.1);\n  border-color: rgba(99, 102, 241, 0.22);\n  color: #6366f1;\n}\n.seg-chip--primary:hover {\n  background: rgba(99, 102, 241, 0.16);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.seg-chip__tag {\n  display: inline-block;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.62rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  background: rgba(99, 102, 241, 0.15);\n  color: #6366f1;\n}\n.outcome-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n}\n.outcome-badge--success {\n  background: rgba(34, 197, 94, 0.12);\n  color: #15803d;\n}\n.outcome-badge--failed,\n.outcome-badge--error {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.outcome-badge--partial {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.outcome-badge--skipped {\n  background: rgba(148, 163, 184, 0.14);\n  color: #64748b;\n}\n.btn-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 38px;\n  padding: 0 14px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.16s ease;\n}\n.btn-action mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-action:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n  transform: translateY(-1px);\n}\n.btn-action--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #3b82f6);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);\n}\n.btn-action--primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.28);\n}\n.toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle__input {\n  position: absolute;\n  opacity: 0;\n}\n.toggle__track {\n  position: relative;\n  width: 48px;\n  height: 26px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  border: 1px solid #cbd5e1;\n  transition: all 0.22s ease;\n}\n.toggle__thumb {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.toggle__icon {\n  position: absolute;\n  font-size: 11px;\n  width: 11px;\n  height: 11px;\n  transition: all 0.18s ease;\n}\n.toggle__icon--on {\n  opacity: 0;\n  transform: scale(0.5);\n  color: #16a34a;\n}\n.toggle__icon--off {\n  opacity: 1;\n  color: #94a3b8;\n}\n.toggle__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n}\n.toggle--on .toggle__track {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  border-color: #16a34a;\n  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.14);\n}\n.toggle--on .toggle__thumb {\n  transform: translateX(22px);\n}\n.toggle--on .toggle__icon--on {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle--on .toggle__icon--off {\n  opacity: 0;\n  transform: scale(0.4);\n}\n.toggle--on .toggle__label {\n  color: #16a34a;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-top: 22px;\n  padding-top: 18px;\n  border-top: 1px solid #eef2f7;\n}\n.pagination__info {\n  font-size: 12px;\n  color: #64748b;\n}\n.pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.pagination__size-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.pagination__size-select {\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 10px;\n  border: 1px solid #dbe4f0;\n  background: white;\n  font-size: 12px;\n  font-weight: 600;\n  color: #334155;\n}\n.pagination__size-select:focus {\n  outline: none;\n  border-color: #93c5fd;\n}\n.pagination__nav {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pagination__btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: white;\n  color: #475569;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.pagination__btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.pagination__btn:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.pagination__btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.pagination__page-info {\n  min-width: 90px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #334155;\n}\n.recent {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.exec-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 12px;\n  border-radius: 14px;\n  border: 1px solid transparent;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.exec-row:hover {\n  background: rgba(248, 250, 252, 0.9);\n  border-color: #eef2f7;\n}\n.exec-row__left {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 0;\n  flex: 1;\n}\n.exec-row__body {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.exec-row__right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.exec-status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-top: 5px;\n  flex-shrink: 0;\n}\n.exec-status-dot--success {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);\n}\n.exec-status-dot--failed {\n  background: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);\n}\n.exec-status-dot--partial {\n  background: #f59e0b;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);\n}\n.exec-outcome-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 999px;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.exec-outcome-badge--success {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.exec-outcome-badge--failed {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.exec-outcome-badge--partial {\n  background: rgba(245, 158, 11, 0.1);\n  color: #d97706;\n}\n.r-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.r-trigger-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: rgba(99, 102, 241, 0.08);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  color: #6366f1;\n  margin-right: 4px;\n}\n.r-meta {\n  font-size: 12px;\n  color: #64748b;\n}\n.r-chunks {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.r-progress {\n  font-size: 11px;\n  color: #475569;\n  white-space: pre-wrap;\n}\n.r-time {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.exec-empty {\n  color: #64748b;\n  font-size: 14px;\n  padding: 12px 0;\n}\n.exec-pagination {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 18px;\n  padding-top: 14px;\n  border-top: 1px solid #eef2f7;\n}\n.exec-pg-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pg-size-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.pg-size-select {\n  height: 34px;\n  padding: 0 10px;\n  border-radius: 10px;\n  border: 1px solid #dbe4f0;\n  background: white;\n  font-size: 12px;\n  font-weight: 600;\n  color: #334155;\n}\n.pg-size-select:focus {\n  outline: none;\n  border-color: #93c5fd;\n}\n.empty {\n  padding: 60px 20px;\n  text-align: center;\n  color: #64748b;\n}\n.empty-icon {\n  width: 56px;\n  height: 56px;\n  font-size: 56px;\n  opacity: 0.35;\n  margin-bottom: 12px;\n}\n::ng-deep .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n@media (max-width: 920px) {\n  .filter-bar {\n    flex-wrap: wrap;\n  }\n  .filter-divider {\n    display: none;\n  }\n  .rule-card__footer {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .rule-card__actions {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .hero {\n    flex-direction: column;\n  }\n  h1 {\n    font-size: 26px;\n  }\n  .panel {\n    padding: 18px;\n    border-radius: 22px;\n  }\n  .rule-card {\n    padding: 16px;\n  }\n  .pagination {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .exec-row {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .exec-row__right {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=admin-rule-engine-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminRuleEngineDashboardComponent, { className: "AdminRuleEngineDashboardComponent", filePath: "src/app/features/admin/admin-rule-engine-dashboard/admin-rule-engine-dashboard.component.ts", lineNumber: 367 });
})();
export {
  AdminRuleEngineDashboardComponent
};
//# sourceMappingURL=chunk-VL6BXLDA.js.map
