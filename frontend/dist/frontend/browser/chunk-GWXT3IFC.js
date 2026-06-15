import {
  customerConsentStatusLabel
} from "./chunk-OV2M2LWC.js";
import {
  AdminService
} from "./chunk-4ANL3VVD.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4V3JZOCF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VXKP42CX.js";
import {
  LoggerService
} from "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import {
  Component,
  DatePipe,
  DecimalPipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/admin/admin-dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.customerId;
var _forTrack1 = ($index, $item) => $item.channel;
function AdminDashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-progress-spinner", 31);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading dashboard\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_9_Conditional_0_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 44)(1, "div", 54)(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 56);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 57);
    \u0275\u0275element(8, "div", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r1.channel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 4, row_r1.percentage, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.barWidth(row_r1.percentage));
  }
}
function AdminDashboardComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "article", 33)(2, "div", 34);
    \u0275\u0275text(3, "Consent rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36);
    \u0275\u0275text(8, "Active \xF7 (active + pending + declined)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "article", 37)(10, "div", 34);
    \u0275\u0275text(11, "Total customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 36);
    \u0275\u0275text(15, "Directory size");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "article", 37)(17, "div", 34);
    \u0275\u0275text(18, "Active consents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 35);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "article", 37)(22, "div", 34);
    \u0275\u0275text(23, "Pending response");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 35);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "article", 37)(27, "div", 34);
    \u0275\u0275text(28, "Declined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 35);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "article", 38)(32, "div", 34);
    \u0275\u0275text(33, "Pending MC approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 35);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 36);
    \u0275\u0275text(37, "Awaiting checker");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 39)(39, "section", 40)(40, "h2", 41);
    \u0275\u0275text(41, "Channel performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 42);
    \u0275\u0275text(43, "Share of published / approved templates by delivery channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ul", 43);
    \u0275\u0275repeaterCreate(45, AdminDashboardComponent_Conditional_9_Conditional_0_For_46_Template, 9, 7, "li", 44, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "section", 45)(48, "h2", 46);
    \u0275\u0275text(49, "Maker\u2013checker activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 42);
    \u0275\u0275text(51, "Operational counts from the audit trail and review cycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 47)(53, "div", 48)(54, "div", 49);
    \u0275\u0275text(55, "Consent MC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 50);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 51);
    \u0275\u0275text(59, "Approvals completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 48)(61, "div", 49);
    \u0275\u0275text(62, "Rule MC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 50);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 51);
    \u0275\u0275text(66, "Revision requests");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 48)(68, "div", 49);
    \u0275\u0275text(69, "Broadcast MC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 50);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 51);
    \u0275\u0275text(73, "Go-live publishes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 48)(75, "div", 49);
    \u0275\u0275text(76, "Rejections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 50);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 51);
    \u0275\u0275text(80, "Checker declined");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 52)(82, "div")(83, "span", 53);
    \u0275\u0275text(84, "Avg. approval time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "strong");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div")(89, "span", 53);
    \u0275\u0275text(90, "Approval rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "strong");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const m_r3 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 12, m_r3.kpi.consentRate, "1.0-1"), "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(m_r3.kpi.totalCustomers);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(m_r3.kpi.activeConsents);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r3.kpi.pendingResponse);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r3.kpi.declined);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r3.kpi.pendingMcApprovals);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(m_r3.channelPerformance);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(m_r3.makerChecker.consentMcCompleted);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(m_r3.makerChecker.ruleMcCompleted);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(m_r3.makerChecker.broadcastMcCompleted);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(m_r3.makerChecker.rejections);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(87, 15, m_r3.makerChecker.averageApprovalHours, "1.0-1"), "h");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(93, 18, m_r3.makerChecker.approvalRate, "1.0-1"), "%");
  }
}
function AdminDashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminDashboardComponent_Conditional_9_Conditional_0_Template, 94, 21);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.mis()) ? 0 : -1, tmp_1_0);
  }
}
function AdminDashboardComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 59);
    \u0275\u0275text(17, "\u2014");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.customerId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.mobileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.badgeClass(row_r4.consentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.consentStatusDisplay(row_r4.consentStatus));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 8, row_r4.lastUpdated, "medium"));
  }
}
function AdminDashboardComponent_ForEmpty_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No customers match the filters.");
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.mis = signal(null);
    this.misLoading = signal(true);
    this.rows = signal([]);
    this.totalElements = signal(0);
    this.totalPages = signal(0);
    this.currentPage = signal(0);
    this.pageSize = 10;
    this.loading = signal(false);
    this.exporting = signal(false);
    this.filterMobile = "";
    this.filterCustomerId = "";
    this.filterConsentStatus = "ALL";
  }
  ngOnInit() {
    this.loadMis();
    this.loadPage(0);
  }
  loadMis() {
    this.misLoading.set(true);
    this.adminApi.getMisDashboard().subscribe({
      next: (res) => {
        this.misLoading.set(false);
        if (res.success && res.data) {
          this.mis.set(res.data);
        } else {
          this.notify.warning("MIS dashboard", res.message || "Could not load MIS metrics.");
        }
      },
      error: (err) => {
        this.misLoading.set(false);
        this.logger.error("AdminDashboard", "mis failed", err);
        this.notify.error("MIS dashboard", err?.error?.message || "Could not load MIS metrics.");
      }
    });
  }
  applyFilters() {
    this.loadPage(0);
  }
  loadPage(page) {
    this.loading.set(true);
    this.adminApi.getCustomers({
      page,
      size: this.pageSize,
      mobileNumber: this.filterMobile,
      customerId: this.filterCustomerId,
      consentStatus: this.filterConsentStatus,
      sortBy: "updatedAt",
      sortDir: "DESC"
    }).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (!res.success || !res.data) {
          this.notify.warning("Customers", res.message || "No data returned.");
          return;
        }
        this.rows.set(res.data.content);
        this.totalElements.set(res.data.totalElements);
        this.totalPages.set(res.data.totalPages);
        this.currentPage.set(res.data.currentPage);
      },
      error: (err) => {
        this.loading.set(false);
        this.logger.error("AdminDashboard", "customers failed", err);
        this.notify.error("Customers", err?.error?.message || "Could not load customers.");
      }
    });
  }
  prevPage() {
    const p = this.currentPage();
    if (p > 0) {
      this.loadPage(p - 1);
    }
  }
  nextPage() {
    const p = this.currentPage();
    if (p < this.totalPages() - 1) {
      this.loadPage(p + 1);
    }
  }
  exportCsv() {
    this.exporting.set(true);
    this.adminApi.exportCustomersCsv({
      mobileNumber: this.filterMobile,
      customerId: this.filterCustomerId,
      consentStatus: this.filterConsentStatus
    }).subscribe({
      next: (blob) => {
        this.exporting.set(false);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "customers-export.csv";
        a.click();
        URL.revokeObjectURL(url);
        this.notify.success("Export", "Download started.");
      },
      error: (err) => {
        this.exporting.set(false);
        this.logger.error("AdminDashboard", "export failed", err);
        this.notify.error("Export", err?.error?.message || "Export failed.");
      }
    });
  }
  badgeClass(status) {
    switch (status) {
      case "ACTIVE":
      case "ACCEPTED":
        return "badge badge--active";
      case "PENDING":
        return "badge badge--pending";
      case "INVITED":
        return "badge badge--invited";
      case "EXPIRING_SOON":
        return "badge badge--expiring";
      case "EXPIRED":
        return "badge badge--expired";
      case "DECLINED":
        return "badge badge--declined";
      case "WITHDRAWN":
        return "badge badge--withdrawn";
      default:
        return "badge";
    }
  }
  consentStatusDisplay(status) {
    return customerConsentStatusLabel(status);
  }
  barWidth(pct) {
    const v = Math.max(0, Math.min(100, pct));
    return `${v}%`;
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 79, vars: 13, consts: [["aria-labelledby", "mis-title", 1, "mis-head"], [1, "mis-head-row"], ["id", "mis-title", 1, "mis-title"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "mis-sub"], [1, "mis-loading"], ["aria-labelledby", "customers-heading", 1, "table-card"], [1, "table-head"], ["id", "customers-heading", 1, "section-title"], ["mat-stroked-button", "", "type", "button", 1, "export-btn", 3, "click", "disabled"], [1, "filters"], [1, "field"], [1, "field-label"], ["type", "text", "name", "mobile", "placeholder", "Search mobile", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "custId", "placeholder", "Customer ID", 3, "ngModelChange", "ngModel"], ["name", "status", 3, "ngModelChange", "ngModel"], ["value", "ALL"], ["value", "ACTIVE"], ["value", "ACCEPTED"], ["value", "PENDING"], ["value", "INVITED"], ["value", "EXPIRING_SOON"], ["value", "EXPIRED"], ["value", "DECLINED"], ["value", "WITHDRAWN"], ["mat-stroked-button", "", "type", "button", 1, "apply-btn", 3, "click"], [1, "table-wrap"], [1, "data-table"], [1, "pager"], [1, "pager-meta"], [1, "pager-btns"], ["diameter", "40", "mode", "indeterminate"], ["role", "list", 1, "kpi-row"], ["role", "listitem", 1, "kpi-card", "kpi-card--accent"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-hint"], ["role", "listitem", 1, "kpi-card"], ["role", "listitem", 1, "kpi-card", "kpi-card--warn"], [1, "mis-panels"], ["aria-labelledby", "ch-perf", 1, "mis-panel"], ["id", "ch-perf", 1, "panel-h"], [1, "panel-sub"], [1, "bar-list"], [1, "bar-item"], ["aria-labelledby", "mc-act", 1, "mis-panel"], ["id", "mc-act", 1, "panel-h"], [1, "mc-grid"], [1, "mc-cell"], [1, "mc-label"], [1, "mc-num"], [1, "mc-caption"], [1, "mc-footer"], [1, "mc-foot-label"], [1, "bar-top"], [1, "bar-name"], [1, "bar-pct"], ["role", "presentation", 1, "bar-track"], [1, "bar-fill"], [1, "action-muted"], ["colspan", "7", 1, "empty-cell"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Executive MIS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_4_listener() {
          return ctx.loadMis();
        });
        \u0275\u0275text(5, "Refresh metrics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "Channel mix and maker\u2013checker throughput are derived from live data where available.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, AdminDashboardComponent_Conditional_8_Template, 4, 0, "div", 5)(9, AdminDashboardComponent_Conditional_9_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 7)(12, "h2", 8);
        \u0275\u0275text(13, "Customer directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 9);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_14_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10)(17, "label", 11)(18, "span", 12);
        \u0275\u0275text(19, "Mobile Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterMobile, $event) || (ctx.filterMobile = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "label", 11)(22, "span", 12);
        \u0275\u0275text(23, "Customer ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterCustomerId, $event) || (ctx.filterCustomerId = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "label", 11)(26, "span", 12);
        \u0275\u0275text(27, "Consent Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterConsentStatus, $event) || (ctx.filterConsentStatus = $event);
          return $event;
        });
        \u0275\u0275elementStart(29, "option", 16);
        \u0275\u0275text(30, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 17);
        \u0275\u0275text(32, "Active (legacy)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 18);
        \u0275\u0275text(34, "Active (accepted)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 19);
        \u0275\u0275text(36, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option", 20);
        \u0275\u0275text(38, "Invited");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option", 21);
        \u0275\u0275text(40, "Expiring soon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "option", 22);
        \u0275\u0275text(42, "Expired");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "option", 23);
        \u0275\u0275text(44, "Declined");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "option", 24);
        \u0275\u0275text(46, "Withdrawn");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "button", 25);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_47_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275text(48, "Apply filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 26)(50, "table", 27)(51, "thead")(52, "tr")(53, "th");
        \u0275\u0275text(54, "Customer ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Customer Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th");
        \u0275\u0275text(58, "Mobile Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th");
        \u0275\u0275text(60, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "th");
        \u0275\u0275text(62, "Consent Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "th");
        \u0275\u0275text(64, "Last Updated");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "th");
        \u0275\u0275text(66, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "tbody");
        \u0275\u0275repeaterCreate(68, AdminDashboardComponent_For_69_Template, 18, 11, "tr", null, _forTrack0, false, AdminDashboardComponent_ForEmpty_70_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "div", 28)(72, "span", 29);
        \u0275\u0275text(73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 30)(75, "button", 3);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_75_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(76, " Previous ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 3);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_77_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(78, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.misLoading());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.misLoading() ? 8 : 9);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.exporting() ? "Exporting\u2026" : "Export CSV", " ");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterMobile);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterCustomerId);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterConsentStatus);
        \u0275\u0275advance(40);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate3(" Page ", ctx.currentPage() + 1, " of ", ctx.totalPages() || 1, " \xB7 ", ctx.totalElements(), " total ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() <= 0 || ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages() - 1 || ctx.loading() || ctx.totalPages() === 0);
      }
    }, dependencies: [DatePipe, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatProgressSpinnerModule, MatProgressSpinner], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.mis-head[_ngcontent-%COMP%], \n.table-card[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.mis-head[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mis-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.mis-title[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.mis-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 720px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: #64748b;\n}\n.mis-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 18px;\n  padding: 18px 20px;\n  border-radius: 12px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n  font-size: 14px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\n  gap: 14px;\n  margin-top: 22px;\n  margin-bottom: 22px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.18s ease;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  border-color: #bfdbfe;\n  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.08);\n  transform: translateY(-1px);\n}\n.kpi-card--accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #ffffff 100%);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.kpi-card--warn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff7ed 0%,\n      #ffffff 100%);\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n}\n.kpi-hint[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #64748b;\n}\n.mis-panels[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 18px;\n}\n.mis-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.mis-panel[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);\n}\n.panel-h[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.panel-sub[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  font-size: 13px;\n  line-height: 1.5;\n  color: #64748b;\n}\n.bar-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.bar-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.bar-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 7px;\n}\n.bar-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.bar-pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #2563eb;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  overflow: hidden;\n  border-radius: 999px;\n  background: #e2e8f0;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #2563eb);\n  transition: width 0.3s ease;\n}\n.mc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.mc-cell[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.mc-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.mc-num[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 26px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.mc-caption[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 12px;\n  color: #64748b;\n}\n.mc-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  margin-top: 18px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.mc-foot-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.mc-footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a;\n}\n.table-card[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);\n}\n.table-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 14px;\n  padding: 14px;\n  margin-bottom: 18px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 180px;\n  flex: 1;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 12px;\n  border-radius: 10px;\n  border: 1px solid #dbe2ea;\n  background: #ffffff;\n  font-size: 14px;\n  color: #0f172a;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #93c5fd;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);\n}\n.apply-btn[_ngcontent-%COMP%] {\n  height: 42px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  text-align: left;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafcff;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.empty-cell[_ngcontent-%COMP%] {\n  padding: 34px !important;\n  text-align: center !important;\n  color: #94a3b8 !important;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 24px;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: capitalize;\n}\n.badge--active[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n.badge--pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #b45309;\n}\n.badge--declined[_ngcontent-%COMP%], \n.badge--expired[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.badge--invited[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: #1d4ed8;\n}\n.badge--expiring[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.12);\n  color: #c2410c;\n}\n.badge--withdrawn[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.action-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-top: 18px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.pager-meta[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n.pager-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n  .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n  .mat-mdc-stroked-button, \n  .mat-mdc-unelevated-button {\n  border-radius: 10px !important;\n  font-weight: 600;\n}\n  .mat-mdc-progress-spinner circle {\n  stroke: #2563eb;\n}\n@media (max-width: 768px) {\n  .mis-panels[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .table-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .filters[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .field[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .kpi-value[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [DatePipe, DecimalPipe, FormsModule, MatButtonModule, MatProgressSpinnerModule], template: `<section class="mis-head" aria-labelledby="mis-title">\r
  <div class="mis-head-row">\r
    <h1 id="mis-title" class="mis-title">Executive MIS</h1>\r
    <button mat-stroked-button type="button" (click)="loadMis()" [disabled]="misLoading()">Refresh metrics</button>\r
  </div>\r
  <p class="mis-sub">Channel mix and maker\u2013checker throughput are derived from live data where available.</p>\r
\r
  @if (misLoading()) {\r
    <div class="mis-loading">\r
      <mat-progress-spinner diameter="40" mode="indeterminate" />\r
      <span>Loading dashboard\u2026</span>\r
    </div>\r
  } @else {\r
    @if (mis(); as m) {\r
    <div class="kpi-row" role="list">\r
      <article class="kpi-card kpi-card--accent" role="listitem">\r
        <div class="kpi-label">Consent rate</div>\r
        <div class="kpi-value">{{ m.kpi.consentRate | number: '1.0-1' }}%</div>\r
        <div class="kpi-hint">Active \xF7 (active + pending + declined)</div>\r
      </article>\r
      <article class="kpi-card" role="listitem">\r
        <div class="kpi-label">Total customers</div>\r
        <div class="kpi-value">{{ m.kpi.totalCustomers }}</div>\r
        <div class="kpi-hint">Directory size</div>\r
      </article>\r
      <article class="kpi-card" role="listitem">\r
        <div class="kpi-label">Active consents</div>\r
        <div class="kpi-value">{{ m.kpi.activeConsents }}</div>\r
      </article>\r
      <article class="kpi-card" role="listitem">\r
        <div class="kpi-label">Pending response</div>\r
        <div class="kpi-value">{{ m.kpi.pendingResponse }}</div>\r
      </article>\r
      <article class="kpi-card" role="listitem">\r
        <div class="kpi-label">Declined</div>\r
        <div class="kpi-value">{{ m.kpi.declined }}</div>\r
      </article>\r
      <article class="kpi-card kpi-card--warn" role="listitem">\r
        <div class="kpi-label">Pending MC approvals</div>\r
        <div class="kpi-value">{{ m.kpi.pendingMcApprovals }}</div>\r
        <div class="kpi-hint">Awaiting checker</div>\r
      </article>\r
    </div>\r
\r
    <div class="mis-panels">\r
      <section class="mis-panel" aria-labelledby="ch-perf">\r
        <h2 id="ch-perf" class="panel-h">Channel performance</h2>\r
        <p class="panel-sub">Share of published / approved templates by delivery channel</p>\r
        <ul class="bar-list">\r
          @for (row of m.channelPerformance; track row.channel) {\r
            <li class="bar-item">\r
              <div class="bar-top">\r
                <span class="bar-name">{{ row.channel }}</span>\r
                <span class="bar-pct">{{ row.percentage | number: '1.0-1' }}%</span>\r
              </div>\r
              <div class="bar-track" role="presentation">\r
                <div class="bar-fill" [style.width]="barWidth(row.percentage)"></div>\r
              </div>\r
            </li>\r
          }\r
        </ul>\r
      </section>\r
\r
      <section class="mis-panel" aria-labelledby="mc-act">\r
        <h2 id="mc-act" class="panel-h">Maker\u2013checker activity</h2>\r
        <p class="panel-sub">Operational counts from the audit trail and review cycle</p>\r
        <div class="mc-grid">\r
          <div class="mc-cell">\r
            <div class="mc-label">Consent MC</div>\r
            <div class="mc-num">{{ m.makerChecker.consentMcCompleted }}</div>\r
            <div class="mc-caption">Approvals completed</div>\r
          </div>\r
          <div class="mc-cell">\r
            <div class="mc-label">Rule MC</div>\r
            <div class="mc-num">{{ m.makerChecker.ruleMcCompleted }}</div>\r
            <div class="mc-caption">Revision requests</div>\r
          </div>\r
          <div class="mc-cell">\r
            <div class="mc-label">Broadcast MC</div>\r
            <div class="mc-num">{{ m.makerChecker.broadcastMcCompleted }}</div>\r
            <div class="mc-caption">Go-live publishes</div>\r
          </div>\r
          <div class="mc-cell">\r
            <div class="mc-label">Rejections</div>\r
            <div class="mc-num">{{ m.makerChecker.rejections }}</div>\r
            <div class="mc-caption">Checker declined</div>\r
          </div>\r
        </div>\r
        <div class="mc-footer">\r
          <div>\r
            <span class="mc-foot-label">Avg. approval time</span>\r
            <strong>{{ m.makerChecker.averageApprovalHours | number: '1.0-1' }}h</strong>\r
          </div>\r
          <div>\r
            <span class="mc-foot-label">Approval rate</span>\r
            <strong>{{ m.makerChecker.approvalRate | number: '1.0-1' }}%</strong>\r
          </div>\r
        </div>\r
      </section>\r
    </div>\r
    }\r
  }\r
</section>\r
\r
<section class="table-card" aria-labelledby="customers-heading">\r
  <div class="table-head">\r
    <h2 id="customers-heading" class="section-title">Customer directory</h2>\r
    <button\r
      mat-stroked-button\r
      type="button"\r
      class="export-btn"\r
      [disabled]="exporting()"\r
      (click)="exportCsv()"\r
    >\r
      {{ exporting() ? 'Exporting\u2026' : 'Export CSV' }}\r
    </button>\r
  </div>\r
\r
  <div class="filters">\r
    <label class="field">\r
      <span class="field-label">Mobile Number</span>\r
      <input type="text" name="mobile" [(ngModel)]="filterMobile" placeholder="Search mobile" />\r
    </label>\r
    <label class="field">\r
      <span class="field-label">Customer ID</span>\r
      <input type="text" name="custId" [(ngModel)]="filterCustomerId" placeholder="Customer ID" />\r
    </label>\r
    <label class="field">\r
      <span class="field-label">Consent Status</span>\r
      <select name="status" [(ngModel)]="filterConsentStatus">\r
        <option value="ALL">All</option>\r
        <option value="ACTIVE">Active (legacy)</option>\r
        <option value="ACCEPTED">Active (accepted)</option>\r
        <option value="PENDING">Pending</option>\r
        <option value="INVITED">Invited</option>\r
        <option value="EXPIRING_SOON">Expiring soon</option>\r
        <option value="EXPIRED">Expired</option>\r
        <option value="DECLINED">Declined</option>\r
        <option value="WITHDRAWN">Withdrawn</option>\r
      </select>\r
    </label>\r
    <button mat-stroked-button type="button" class="apply-btn" (click)="applyFilters()">Apply filters</button>\r
  </div>\r
\r
  <div class="table-wrap">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>Customer ID</th>\r
          <th>Customer Name</th>\r
          <th>Mobile Number</th>\r
          <th>Email</th>\r
          <th>Consent Status</th>\r
          <th>Last Updated</th>\r
          <th>Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (row of rows(); track row.customerId) {\r
          <tr>\r
            <td>{{ row.customerId }}</td>\r
            <td>{{ row.customerName }}</td>\r
            <td>{{ row.mobileNumber }}</td>\r
            <td>{{ row.email || '\u2014' }}</td>\r
            <td><span [class]="badgeClass(row.consentStatus)">{{ consentStatusDisplay(row.consentStatus) }}</span></td>\r
            <td>{{ row.lastUpdated | date: 'medium' }}</td>\r
            <td><span class="action-muted">\u2014</span></td>\r
          </tr>\r
        } @empty {\r
          <tr>\r
            <td colspan="7" class="empty-cell">{{ loading() ? 'Loading\u2026' : 'No customers match the filters.' }}</td>\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <div class="pager">\r
    <span class="pager-meta">\r
      Page {{ currentPage() + 1 }} of {{ totalPages() || 1 }} \xB7 {{ totalElements() }} total\r
    </span>\r
    <div class="pager-btns">\r
      <button mat-stroked-button type="button" [disabled]="currentPage() <= 0 || loading()" (click)="prevPage()">\r
        Previous\r
      </button>\r
      <button\r
        mat-stroked-button\r
        type="button"\r
        [disabled]="currentPage() >= totalPages() - 1 || loading() || totalPages() === 0"\r
        (click)="nextPage()"\r
      >\r
        Next\r
      </button>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/admin/admin-dashboard/admin-dashboard.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n:host {\n  display: block;\n}\n.mis-head,\n.table-card {\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.mis-head {\n  margin-bottom: 24px;\n}\n.mis-head-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.mis-title {\n  margin: 0 0 6px;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n.mis-sub {\n  margin: 0;\n  max-width: 720px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: #64748b;\n}\n.mis-loading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 18px;\n  padding: 18px 20px;\n  border-radius: 12px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n  font-size: 14px;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\n  gap: 14px;\n  margin-top: 22px;\n  margin-bottom: 22px;\n}\n.kpi-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.18s ease;\n}\n.kpi-card:hover {\n  border-color: #bfdbfe;\n  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.08);\n  transform: translateY(-1px);\n}\n.kpi-card--accent {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #ffffff 100%);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.kpi-card--warn {\n  background:\n    linear-gradient(\n      180deg,\n      #fff7ed 0%,\n      #ffffff 100%);\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.kpi-label {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.kpi-value {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n}\n.kpi-hint {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #64748b;\n}\n.mis-panels {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 18px;\n}\n.mis-panel {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.mis-panel:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);\n}\n.panel-h {\n  margin: 0 0 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.panel-sub {\n  margin: 0 0 18px;\n  font-size: 13px;\n  line-height: 1.5;\n  color: #64748b;\n}\n.bar-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.bar-item {\n  margin: 0;\n}\n.bar-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 7px;\n}\n.bar-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.bar-pct {\n  font-size: 12px;\n  font-weight: 700;\n  color: #2563eb;\n}\n.bar-track {\n  height: 10px;\n  overflow: hidden;\n  border-radius: 999px;\n  background: #e2e8f0;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #2563eb);\n  transition: width 0.3s ease;\n}\n.mc-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.mc-cell {\n  padding: 14px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.mc-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.mc-num {\n  margin-top: 6px;\n  font-size: 26px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.mc-caption {\n  margin-top: 5px;\n  font-size: 12px;\n  color: #64748b;\n}\n.mc-footer {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  margin-top: 18px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.mc-foot-label {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.mc-footer strong {\n  font-size: 14px;\n  color: #0f172a;\n}\n.table-card {\n  margin-top: 26px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);\n}\n.table-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n.section-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 14px;\n  padding: 14px;\n  margin-bottom: 18px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 180px;\n  flex: 1;\n}\n.field-label {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.field input,\n.field select {\n  height: 42px;\n  padding: 0 12px;\n  border-radius: 10px;\n  border: 1px solid #dbe2ea;\n  background: #ffffff;\n  font-size: 14px;\n  color: #0f172a;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.field input:focus,\n.field select:focus {\n  outline: none;\n  border-color: #93c5fd;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);\n}\n.apply-btn {\n  height: 42px;\n}\n.table-wrap {\n  overflow-x: auto;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table th,\n.data-table td {\n  padding: 14px 16px;\n  text-align: left;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table th {\n  background: #f8fafc;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.data-table tbody tr {\n  transition: background 0.15s ease;\n}\n.data-table tbody tr:hover {\n  background: #fafcff;\n}\n.data-table td {\n  color: #334155;\n}\n.empty-cell {\n  padding: 34px !important;\n  text-align: center !important;\n  color: #94a3b8 !important;\n  font-size: 14px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 24px;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: capitalize;\n}\n.badge--active {\n  background: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n.badge--pending {\n  background: rgba(245, 158, 11, 0.12);\n  color: #b45309;\n}\n.badge--declined,\n.badge--expired {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.badge--invited {\n  background: rgba(37, 99, 235, 0.1);\n  color: #1d4ed8;\n}\n.badge--expiring {\n  background: rgba(249, 115, 22, 0.12);\n  color: #c2410c;\n}\n.badge--withdrawn {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.action-muted {\n  color: #94a3b8;\n}\n.pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-top: 18px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.pager-meta {\n  font-size: 13px;\n  color: #64748b;\n}\n.pager-btns {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n::ng-deep .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n::ng-deep .mat-mdc-stroked-button,\n::ng-deep .mat-mdc-unelevated-button {\n  border-radius: 10px !important;\n  font-weight: 600;\n}\n::ng-deep .mat-mdc-progress-spinner circle {\n  stroke: #2563eb;\n}\n@media (max-width: 768px) {\n  .mis-panels {\n    grid-template-columns: 1fr;\n  }\n  .mc-grid {\n    grid-template-columns: 1fr;\n  }\n  .table-card {\n    padding: 16px;\n  }\n  .filters {\n    padding: 12px;\n  }\n  .field {\n    min-width: 100%;\n  }\n  .kpi-value {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/admin-dashboard/admin-dashboard.component.ts", lineNumber: 18 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-GWXT3IFC.js.map
