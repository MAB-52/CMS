import {
  AdminService
} from "./chunk-QNCYSTV7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-RLCEEPU7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-3TIZOPIA.js";
import {
  NotificationService
} from "./chunk-4RAWTRTP.js";
import {
  Component,
  DatePipe,
  DecimalPipe,
  LoggerService,
  MatButton,
  MatButtonModule,
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
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// src/app/features/admin/admin-dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.customerId;
var _forTrack1 = ($index, $item) => $item.channel;
function AdminDashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-progress-spinner", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading dashboard\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_9_Conditional_0_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 39)(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 51);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 52);
    \u0275\u0275element(8, "div", 53);
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
    \u0275\u0275elementStart(0, "div", 27)(1, "article", 28)(2, "div", 29);
    \u0275\u0275text(3, "Consent rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31);
    \u0275\u0275text(8, "Active \xF7 (active + pending + declined)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "article", 32)(10, "div", 29);
    \u0275\u0275text(11, "Total customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 30);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 31);
    \u0275\u0275text(15, "Directory size");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "article", 32)(17, "div", 29);
    \u0275\u0275text(18, "Active consents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 30);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "article", 32)(22, "div", 29);
    \u0275\u0275text(23, "Pending response");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 30);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "article", 32)(27, "div", 29);
    \u0275\u0275text(28, "Declined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 30);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "article", 33)(32, "div", 29);
    \u0275\u0275text(33, "Pending MC approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 30);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 31);
    \u0275\u0275text(37, "Awaiting checker");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 34)(39, "section", 35)(40, "h2", 36);
    \u0275\u0275text(41, "Channel performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 37);
    \u0275\u0275text(43, "Share of published / approved templates by delivery channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ul", 38);
    \u0275\u0275repeaterCreate(45, AdminDashboardComponent_Conditional_9_Conditional_0_For_46_Template, 9, 7, "li", 39, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "section", 40)(48, "h2", 41);
    \u0275\u0275text(49, "Maker\u2013checker activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 37);
    \u0275\u0275text(51, "Operational counts from the audit trail and review cycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 42)(53, "div", 43)(54, "div", 44);
    \u0275\u0275text(55, "Consent MC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 45);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 46);
    \u0275\u0275text(59, "Approvals completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 43)(61, "div", 44);
    \u0275\u0275text(62, "Rule MC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 45);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 46);
    \u0275\u0275text(66, "Revision requests");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 43)(68, "div", 44);
    \u0275\u0275text(69, "Broadcast MC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 45);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 46);
    \u0275\u0275text(73, "Go-live publishes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 43)(75, "div", 44);
    \u0275\u0275text(76, "Rejections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 45);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 46);
    \u0275\u0275text(80, "Checker declined");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 47)(82, "div")(83, "span", 48);
    \u0275\u0275text(84, "Avg. approval time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "strong");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div")(89, "span", 48);
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
function AdminDashboardComponent_For_59_Template(rf, ctx) {
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
    \u0275\u0275elementStart(15, "td")(16, "span", 54);
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
    \u0275\u0275textInterpolate(row_r4.consentStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 8, row_r4.lastUpdated, "medium"));
  }
}
function AdminDashboardComponent_ForEmpty_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
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
        return "badge badge--active";
      case "PENDING":
        return "badge badge--pending";
      case "DECLINED":
        return "badge badge--declined";
      default:
        return "badge";
    }
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 69, vars: 13, consts: [["aria-labelledby", "mis-title", 1, "mis-head"], [1, "mis-head-row"], ["id", "mis-title", 1, "mis-title"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "mis-sub"], [1, "mis-loading"], ["aria-labelledby", "customers-heading", 1, "table-card"], [1, "table-head"], ["id", "customers-heading", 1, "section-title"], ["mat-stroked-button", "", "type", "button", 1, "export-btn", 3, "click", "disabled"], [1, "filters"], [1, "field"], [1, "field-label"], ["type", "text", "name", "mobile", "placeholder", "Search mobile", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "custId", "placeholder", "Customer ID", 3, "ngModelChange", "ngModel"], ["name", "status", 3, "ngModelChange", "ngModel"], ["value", "ALL"], ["value", "ACTIVE"], ["value", "PENDING"], ["value", "DECLINED"], ["mat-stroked-button", "", "type", "button", 1, "apply-btn", 3, "click"], [1, "table-wrap"], [1, "data-table"], [1, "pager"], [1, "pager-meta"], [1, "pager-btns"], ["diameter", "40", "mode", "indeterminate"], ["role", "list", 1, "kpi-row"], ["role", "listitem", 1, "kpi-card", "kpi-card--accent"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-hint"], ["role", "listitem", 1, "kpi-card"], ["role", "listitem", 1, "kpi-card", "kpi-card--warn"], [1, "mis-panels"], ["aria-labelledby", "ch-perf", 1, "mis-panel"], ["id", "ch-perf", 1, "panel-h"], [1, "panel-sub"], [1, "bar-list"], [1, "bar-item"], ["aria-labelledby", "mc-act", 1, "mis-panel"], ["id", "mc-act", 1, "panel-h"], [1, "mc-grid"], [1, "mc-cell"], [1, "mc-label"], [1, "mc-num"], [1, "mc-caption"], [1, "mc-footer"], [1, "mc-foot-label"], [1, "bar-top"], [1, "bar-name"], [1, "bar-pct"], ["role", "presentation", 1, "bar-track"], [1, "bar-fill"], [1, "action-muted"], ["colspan", "7", 1, "empty-cell"]], template: function AdminDashboardComponent_Template(rf, ctx) {
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
        \u0275\u0275text(32, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 18);
        \u0275\u0275text(34, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 19);
        \u0275\u0275text(36, "Declined");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "button", 20);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_37_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275text(38, "Apply filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 21)(40, "table", 22)(41, "thead")(42, "tr")(43, "th");
        \u0275\u0275text(44, "Customer ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Customer Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Mobile Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Consent Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Last Updated");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "tbody");
        \u0275\u0275repeaterCreate(58, AdminDashboardComponent_For_59_Template, 18, 11, "tr", null, _forTrack0, false, AdminDashboardComponent_ForEmpty_60_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 23)(62, "span", 24);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 25)(65, "button", 3);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_65_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(66, " Previous ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 3);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_67_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(68, " Next ");
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
        \u0275\u0275advance(30);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate3(" Page ", ctx.currentPage() + 1, " of ", ctx.totalPages() || 1, " \xB7 ", ctx.totalElements(), " total ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() <= 0 || ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages() - 1 || ctx.loading() || ctx.totalPages() === 0);
      }
    }, dependencies: [DatePipe, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatProgressSpinnerModule, MatProgressSpinner], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.mis-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-8);\n}\n.mis-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n}\n.mis-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.mis-sub[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 var(--space-5);\n  font-size: var(--text-14);\n  color: var(--sidebar-text-muted);\n  max-width: 720px;\n  line-height: 1.55;\n}\n.mis-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-6);\n  color: var(--sidebar-text-muted);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-6);\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-4) var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.kpi-card--accent[_ngcontent-%COMP%] {\n  border-color: rgba(37, 99, 235, 0.35);\n  box-shadow: var(--shadow-md);\n}\n.kpi-card--warn[_ngcontent-%COMP%] {\n  border-color: rgba(217, 119, 6, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      #fffbeb 0%,\n      #ffffff 100%);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: var(--text-32);\n  font-weight: 800;\n  color: var(--input-text-color);\n  line-height: 1.1;\n}\n.kpi-hint[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.mis-panels[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--space-5);\n  align-items: start;\n}\n.mis-panel[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n}\n.panel-h[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: var(--text-16);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.panel-sub[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n  line-height: 1.45;\n}\n.bar-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.bar-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.bar-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: var(--space-2);\n  font-size: var(--text-13);\n}\n.bar-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.bar-pct[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--color-info);\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 999px;\n  background: var(--input-bg-disabled);\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-info),\n      var(--color-primary));\n  min-width: 4px;\n  transition: width 0.35s ease;\n}\n.mc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--space-4);\n}\n.mc-cell[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  border-radius: var(--input-radius);\n  border: 1px solid var(--input-border-color);\n  background: var(--input-bg-disabled);\n}\n.mc-label[_ngcontent-%COMP%] {\n  font-size: var(--text-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n}\n.mc-num[_ngcontent-%COMP%] {\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--input-text-color);\n  margin-top: var(--space-1);\n}\n.mc-caption[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  margin-top: var(--space-1);\n}\n.mc-footer[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  padding-top: var(--space-4);\n  border-top: 1px solid var(--input-border-color);\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-6);\n  font-size: var(--text-14);\n  color: var(--sidebar-text-muted);\n}\n.mc-foot-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--text-11);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 2px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n}\n.table-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-18);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-4);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  min-width: 160px;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: var(--sidebar-text-muted);\n}\n.apply-btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-14);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--input-bg-disabled);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.empty-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--sidebar-text-muted);\n  padding: var(--space-8);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: var(--text-12);\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.badge--active[_ngcontent-%COMP%] {\n  background: var(--color-success-light);\n  color: var(--color-success);\n  border: 1px solid var(--color-success-border);\n}\n.badge--pending[_ngcontent-%COMP%] {\n  background: var(--color-warning-light);\n  color: var(--color-warning);\n  border: 1px solid var(--color-warning-border);\n}\n.badge--declined[_ngcontent-%COMP%] {\n  background: var(--color-error-light);\n  color: var(--color-error);\n  border: 1px solid var(--color-error-border);\n}\n.action-muted[_ngcontent-%COMP%] {\n  color: var(--sidebar-text-muted);\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n}\n.pager-meta[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.pager-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
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
        <option value="ACTIVE">Active</option>\r
        <option value="PENDING">Pending</option>\r
        <option value="DECLINED">Declined</option>\r
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
            <td><span [class]="badgeClass(row.consentStatus)">{{ row.consentStatus }}</span></td>\r
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
`, styles: ['/* src/app/features/admin/admin-dashboard/admin-dashboard.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.mis-head {\n  margin-bottom: var(--space-8);\n}\n.mis-head-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n}\n.mis-title {\n  margin: 0;\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.mis-sub {\n  margin: var(--space-2) 0 var(--space-5);\n  font-size: var(--text-14);\n  color: var(--sidebar-text-muted);\n  max-width: 720px;\n  line-height: 1.55;\n}\n.mis-loading {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-6);\n  color: var(--sidebar-text-muted);\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-6);\n}\n.kpi-card {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-4) var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.kpi-card--accent {\n  border-color: rgba(37, 99, 235, 0.35);\n  box-shadow: var(--shadow-md);\n}\n.kpi-card--warn {\n  border-color: rgba(217, 119, 6, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      #fffbeb 0%,\n      #ffffff 100%);\n}\n.kpi-label {\n  font-size: var(--text-12);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n}\n.kpi-value {\n  font-size: var(--text-32);\n  font-weight: 800;\n  color: var(--input-text-color);\n  line-height: 1.1;\n}\n.kpi-hint {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.mis-panels {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--space-5);\n  align-items: start;\n}\n.mis-panel {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n}\n.panel-h {\n  margin: 0 0 var(--space-1);\n  font-size: var(--text-16);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.panel-sub {\n  margin: 0 0 var(--space-4);\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n  line-height: 1.45;\n}\n.bar-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.bar-item {\n  margin: 0;\n}\n.bar-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: var(--space-2);\n  font-size: var(--text-13);\n}\n.bar-name {\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.bar-pct {\n  font-weight: 800;\n  color: var(--color-info);\n}\n.bar-track {\n  height: 10px;\n  border-radius: 999px;\n  background: var(--input-bg-disabled);\n  overflow: hidden;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-info),\n      var(--color-primary));\n  min-width: 4px;\n  transition: width 0.35s ease;\n}\n.mc-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--space-4);\n}\n.mc-cell {\n  padding: var(--space-3);\n  border-radius: var(--input-radius);\n  border: 1px solid var(--input-border-color);\n  background: var(--input-bg-disabled);\n}\n.mc-label {\n  font-size: var(--text-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n}\n.mc-num {\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--input-text-color);\n  margin-top: var(--space-1);\n}\n.mc-caption {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  margin-top: var(--space-1);\n}\n.mc-footer {\n  margin-top: var(--space-5);\n  padding-top: var(--space-4);\n  border-top: 1px solid var(--input-border-color);\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-6);\n  font-size: var(--text-14);\n  color: var(--sidebar-text-muted);\n}\n.mc-foot-label {\n  display: block;\n  font-size: var(--text-11);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 2px;\n}\n.table-card {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n}\n.table-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.section-title {\n  margin: 0;\n  font-size: var(--text-18);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-4);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  min-width: 160px;\n}\n.field-label {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: var(--sidebar-text-muted);\n}\n.apply-btn {\n  margin-bottom: 1px;\n}\n.table-wrap {\n  overflow-x: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-14);\n}\n.data-table th,\n.data-table td {\n  padding: 12px 14px;\n  text-align: left;\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table th {\n  background: var(--input-bg-disabled);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.empty-cell {\n  text-align: center;\n  color: var(--sidebar-text-muted);\n  padding: var(--space-8);\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: var(--text-12);\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.badge--active {\n  background: var(--color-success-light);\n  color: var(--color-success);\n  border: 1px solid var(--color-success-border);\n}\n.badge--pending {\n  background: var(--color-warning-light);\n  color: var(--color-warning);\n  border: 1px solid var(--color-warning-border);\n}\n.badge--declined {\n  background: var(--color-error-light);\n  color: var(--color-error);\n  border: 1px solid var(--color-error-border);\n}\n.action-muted {\n  color: var(--sidebar-text-muted);\n}\n.pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n}\n.pager-meta {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.pager-btns {\n  display: flex;\n  gap: var(--space-2);\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/admin-dashboard/admin-dashboard.component.ts", lineNumber: 18 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-ZATTOT45.js.map
