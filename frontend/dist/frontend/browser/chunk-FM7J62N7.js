import {
  customerConsentRecordStatusLabel
} from "./chunk-OV2M2LWC.js";
import {
  AdminService
} from "./chunk-4ANL3VVD.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ESTRIYN4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EKTRGZNL.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-P42KGFAL.js";
import "./chunk-4UOF66IB.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-T7T23VPO.js";
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
  MatOption,
  MatPseudoCheckbox
} from "./chunk-FIYZFADG.js";
import "./chunk-ASPSHXFC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RadioControlValueAccessor
} from "./chunk-VXKP42CX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-T6DLIJPT.js";
import "./chunk-OIBNGD5S.js";
import {
  SelectionModel
} from "./chunk-EJZSSRS2.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import {
  LoggerService
} from "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  MatButton,
  MatButtonModule,
  MatRipple,
  MatRippleModule,
  _StructuralStylesLoader
} from "./chunk-DBZCAWGK.js";
import "./chunk-23MDLYAU.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DOWN_ARROW,
  DatePipe,
  DecimalPipe,
  Directionality,
  Directive,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  HostAttributeToken,
  InjectionToken,
  Input,
  LEFT_ARROW,
  MatCommonModule,
  NgModule,
  Output,
  RIGHT_ARROW,
  SPACE,
  Subject,
  TitleCasePipe,
  UP_ARROW,
  ViewChild,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  booleanAttribute,
  computed,
  forkJoin,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SKWF3SJ6.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/admin/admin-mis-reports/mis-report-executive-tab/mis-report-executive-tab.component.ts
var _forTrack0 = ($index, $item) => $item.period;
var _forTrack1 = ($index, $item) => $item.channel;
function MisReportExecutiveTabComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 0);
  }
}
function MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 14);
  }
}
function MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_50_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3.period);
  }
}
function MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_50_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "polyline", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275repeaterCreate(3, MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_50_Conditional_1_For_4_Template, 2, 1, "span", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("points", ctx_r1.trendSvgPolyline());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.trendPoints());
  }
}
function MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_50_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "No consent creations in this window.");
    \u0275\u0275elementEnd();
  }
}
function MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_50_Conditional_1_Template, 5, 1)(2, MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_50_Conditional_2_Template, 2, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.trendPoints().length ? 1 : 2);
  }
}
function MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 4)(1, "article", 5)(2, "div", 6);
    \u0275\u0275text(3, "Total consents collected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7, "Customers not in PENDING or INVITED");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "article", 9)(9, "div", 6);
    \u0275\u0275text(10, "Active consents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "article", 5)(14, "div", 6);
    \u0275\u0275text(15, "Expired");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 7);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "article", 5)(19, "div", 6);
    \u0275\u0275text(20, "Revoked / withdrawn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 7);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "article", 10)(24, "div", 6);
    \u0275\u0275text(25, "Pending requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 7);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 8);
    \u0275\u0275text(29, "INVITED + PENDING");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "article", 9)(31, "div", 6);
    \u0275\u0275text(32, "Acceptance rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 7);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 8);
    \u0275\u0275text(37, "Active \xF7 all customers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "section", 1)(39, "div", 11)(40, "h2");
    \u0275\u0275text(41, "Consent volume trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 12)(43, "button", 13);
    \u0275\u0275listener("click", function MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTrendGroup("DAILY"));
    });
    \u0275\u0275text(44, "Daily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 13);
    \u0275\u0275listener("click", function MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTrendGroup("WEEKLY"));
    });
    \u0275\u0275text(46, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 13);
    \u0275\u0275listener("click", function MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTrendGroup("MONTHLY"));
    });
    \u0275\u0275text(48, "Monthly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_49_Template, 1, 0, "mat-progress-bar", 14)(50, MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Conditional_50_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "section", 1)(52, "h2");
    \u0275\u0275text(53, "Business KPIs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 16)(55, "div", 17)(56, "h3");
    \u0275\u0275text(57, "VIP vs non-VIP consent rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 18);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 18);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 17)(65, "h3");
    \u0275\u0275text(66, "Maker\u2013checker efficiency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "p", 18);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275pipe(70, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 18);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 17)(74, "h3");
    \u0275\u0275text(75, "Compliance score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 19);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 18);
    \u0275\u0275text(80, "Customers with active consent \xF7 total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 17)(82, "h3");
    \u0275\u0275text(83, "SLA (48h approvals)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "p", 19);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p", 18);
    \u0275\u0275text(88, "Approved consents reviewed within 48h of submit (workflow timestamps)");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const k_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r4.totalConsentsCollected);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(k_r4.activeConsents);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r4.expiredConsents);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r4.revokedConsents);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r4.pendingConsentRequests);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(35, 27, k_r4.consentAcceptanceRatePercent, "1.0-1"), "%");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("chip--on", ctx_r1.trendGroup() === "DAILY");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("chip--on", ctx_r1.trendGroup() === "WEEKLY");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("chip--on", ctx_r1.trendGroup() === "MONTHLY");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.trendLoading() ? 49 : 50);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate3("VIP: ", \u0275\u0275pipeBind2(60, 30, k_r4.vipConsentRatePercent, "1.0-1"), "% (", k_r4.vipActiveConsents, "/", k_r4.vipTotalCustomers, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("Non-VIP: ", \u0275\u0275pipeBind2(63, 33, k_r4.nonVipConsentRatePercent, "1.0-1"), "% (", k_r4.nonVipActiveConsents, "/", k_r4.nonVipTotalCustomers, ")");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("Avg approval ", \u0275\u0275pipeBind2(69, 36, k_r4.makerChecker.averageApprovalHours, "1.0-1"), "h \xB7 Approval rate ", \u0275\u0275pipeBind2(70, 39, k_r4.makerChecker.approvalRate, "1.0-1"), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4("MC counts: consent ", k_r4.makerChecker.consentMcCompleted, ", rule ", k_r4.makerChecker.ruleMcCompleted, ", broadcast ", k_r4.makerChecker.broadcastMcCompleted, ", rejections ", k_r4.makerChecker.rejections, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(78, 42, k_r4.complianceScorePercent, "1.0-1"), "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(86, 45, k_r4.sla48hAdherencePercent, "1.0-1"), "%");
  }
}
function MisReportExecutiveTabComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MisReportExecutiveTabComponent_Conditional_1_Conditional_0_Template, 89, 48);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.kpis()) ? 0 : -1, tmp_1_0);
  }
}
function MisReportExecutiveTabComponent_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275element(8, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5.channel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 4, row_r5.percentage, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", row_r5.percentage, "%");
  }
}
function MisReportExecutiveTabComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "h2");
    \u0275\u0275text(2, "Channel-wise collection (template mix)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4, "From published / approved templates \u2014 same source as dashboard MIS.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 24);
    \u0275\u0275repeaterCreate(6, MisReportExecutiveTabComponent_Conditional_2_For_7_Template, 9, 7, "li", 25, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.channelPerformance);
  }
}
var MisReportExecutiveTabComponent = class _MisReportExecutiveTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.loading = signal(true);
    this.mis = signal(null);
    this.kpis = signal(null);
    this.trendGroup = signal("MONTHLY");
    this.trend = signal(null);
    this.trendLoading = signal(false);
    this.trendMax = computed(() => {
      const s = this.trend()?.series ?? [];
      return s.reduce((m, p) => Math.max(m, p.count), 1);
    });
  }
  ngOnInit() {
    this.reloadAll();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  reloadAll() {
    this.loading.set(true);
    this.adminApi.getMisDashboard().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.mis.set(res.data);
        }
      },
      error: (err) => this.logger.error("MisExecutive", "mis dashboard", err)
    });
    this.adminApi.getMisExecutiveKpis().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.kpis.set(res.data);
        } else {
          this.notify.warning("Executive KPIs", res.message || "Could not load KPIs.");
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.logger.error("MisExecutive", "kpis", err);
        this.notify.error("Executive KPIs", err?.error?.message || "Could not load KPIs.");
      }
    });
    this.loadTrend();
  }
  setTrendGroup(g) {
    this.trendGroup.set(g);
    this.loadTrend();
  }
  loadTrend() {
    this.trendLoading.set(true);
    const to = /* @__PURE__ */ new Date();
    const from = /* @__PURE__ */ new Date();
    if (this.trendGroup() === "DAILY") {
      from.setDate(from.getDate() - 30);
    } else if (this.trendGroup() === "WEEKLY") {
      from.setMonth(from.getMonth() - 6);
    } else {
      from.setFullYear(from.getFullYear() - 2);
    }
    this.adminApi.getMisConsentTrend({
      groupBy: this.trendGroup(),
      fromDate: from.toISOString(),
      toDate: to.toISOString()
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.trendLoading.set(false);
        if (res.success && res.data) {
          this.trend.set(res.data);
        }
      },
      error: (err) => {
        this.trendLoading.set(false);
        this.logger.error("MisExecutive", "trend", err);
        this.notify.error("Trend", err?.error?.message || "Could not load consent trend.");
      }
    });
  }
  trendPoints() {
    return this.trend()?.series ?? [];
  }
  trendSvgPolyline() {
    const pts = this.trendPoints();
    if (!pts.length) {
      return "";
    }
    const w = 600;
    const h = 160;
    const pad = 8;
    const max = this.trendMax();
    return pts.map((p, i) => {
      const x = pad + i * (w - pad * 2) / Math.max(1, pts.length - 1);
      const y = h - pad - (max === 0 ? 0 : p.count / max * (h - pad * 2));
      return `${x},${y}`;
    }).join(" ");
  }
  static {
    this.\u0275fac = function MisReportExecutiveTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportExecutiveTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportExecutiveTabComponent, selectors: [["app-mis-report-executive-tab"]], decls: 6, vars: 3, consts: [["mode", "indeterminate", 1, "loader"], [1, "panel"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["aria-label", "Consent summary", 1, "kpi-row"], [1, "kpi-card"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-hint"], [1, "kpi-card", "kpi-card--accent"], [1, "kpi-card", "kpi-card--warn"], [1, "panel-head"], [1, "toggle-row"], ["type", "button", 1, "chip", 3, "click"], ["mode", "indeterminate"], [1, "chart-wrap"], [1, "biz-grid"], [1, "biz-card"], [1, "muted"], [1, "big"], [1, "empty", "dashed"], ["viewBox", "0 0 600 180", "preserveAspectRatio", "xMidYMid meet", 1, "line-chart"], [1, "line"], [1, "x-labels"], [1, "bar-list"], [1, "bar-item"], [1, "bar-top"], [1, "bar-name"], [1, "bar-pct"], [1, "bar-track"], [1, "bar-fill"]], template: function MisReportExecutiveTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MisReportExecutiveTabComponent_Conditional_0_Template, 1, 0, "mat-progress-bar", 0)(1, MisReportExecutiveTabComponent_Conditional_1_Template, 1, 1)(2, MisReportExecutiveTabComponent_Conditional_2_Template, 8, 0, "section", 1);
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function MisReportExecutiveTabComponent_Template_button_click_4_listener() {
          return ctx.reloadAll();
        });
        \u0275\u0275text(5, "Refresh");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275conditional(ctx.loading() ? 0 : 1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_1_0 = ctx.mis()) ? 2 : -1, tmp_1_0);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
      }
    }, dependencies: [DecimalPipe, FormsModule, MatButtonModule, MatButton, MatProgressBarModule, MatProgressBar], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.loader[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-6);\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-4);\n}\n.kpi-card--accent[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.kpi-card--warn[_ngcontent-%COMP%] {\n  border-color: rgba(217, 119, 6, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      #fffbeb 0%,\n      #ffffff 100%);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: var(--text-28);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.kpi-hint[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-3);\n  font-size: var(--text-16);\n  color: var(--input-text-color);\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.chip[_ngcontent-%COMP%] {\n  border: 1px solid var(--input-border-color);\n  background: var(--input-bg);\n  border-radius: 999px;\n  padding: 6px 14px;\n  font-size: var(--text-13);\n  cursor: pointer;\n}\n.chip--on[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  background: var(--color-primary-light);\n  color: var(--color-primary-dark);\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.line-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  display: block;\n}\n.line-chart[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--color-info);\n  stroke-width: 2;\n}\n.x-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--text-11);\n  color: var(--sidebar-text-muted);\n  margin-top: var(--space-2);\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.biz-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: var(--space-4);\n}\n.biz-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  padding: var(--space-4);\n  background: var(--input-bg-disabled);\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n  margin: var(--space-1) 0;\n}\n.big[_ngcontent-%COMP%] {\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--color-primary);\n}\n.donut-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-6);\n  align-items: flex-start;\n}\n.donut[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  transform: rotate(-90deg);\n}\n.bar-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex: 1;\n  min-width: 220px;\n}\n.bar-item[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n}\n.bar-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--text-13);\n}\n.bar-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.bar-pct[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-info);\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 999px;\n  background: var(--input-bg-disabled);\n  overflow: hidden;\n  margin-top: var(--space-2);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-info),\n      var(--color-primary));\n}\n.empty.dashed[_ngcontent-%COMP%] {\n  border: 1px dashed var(--input-border-color);\n  border-radius: var(--card-radius);\n  padding: var(--space-8);\n  text-align: center;\n  color: var(--sidebar-text-muted);\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=mis-report-executive-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportExecutiveTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-executive-tab", standalone: true, imports: [DecimalPipe, FormsModule, MatButtonModule, MatProgressBarModule], template: `@if (loading()) {\r
  <mat-progress-bar mode="indeterminate" class="loader" />\r
} @else {\r
  @if (kpis(); as k) {\r
    <section class="kpi-row" aria-label="Consent summary">\r
      <article class="kpi-card">\r
        <div class="kpi-label">Total consents collected</div>\r
        <div class="kpi-value">{{ k.totalConsentsCollected }}</div>\r
        <div class="kpi-hint">Customers not in PENDING or INVITED</div>\r
      </article>\r
      <article class="kpi-card kpi-card--accent">\r
        <div class="kpi-label">Active consents</div>\r
        <div class="kpi-value">{{ k.activeConsents }}</div>\r
      </article>\r
      <article class="kpi-card">\r
        <div class="kpi-label">Expired</div>\r
        <div class="kpi-value">{{ k.expiredConsents }}</div>\r
      </article>\r
      <article class="kpi-card">\r
        <div class="kpi-label">Revoked / withdrawn</div>\r
        <div class="kpi-value">{{ k.revokedConsents }}</div>\r
      </article>\r
      <article class="kpi-card kpi-card--warn">\r
        <div class="kpi-label">Pending requests</div>\r
        <div class="kpi-value">{{ k.pendingConsentRequests }}</div>\r
        <div class="kpi-hint">INVITED + PENDING</div>\r
      </article>\r
      <article class="kpi-card kpi-card--accent">\r
        <div class="kpi-label">Acceptance rate</div>\r
        <div class="kpi-value">{{ k.consentAcceptanceRatePercent | number: '1.0-1' }}%</div>\r
        <div class="kpi-hint">Active \xF7 all customers</div>\r
      </article>\r
    </section>\r
\r
    <section class="panel">\r
      <div class="panel-head">\r
        <h2>Consent volume trend</h2>\r
        <div class="toggle-row">\r
          <button type="button" class="chip" [class.chip--on]="trendGroup() === 'DAILY'" (click)="setTrendGroup('DAILY')">Daily</button>\r
          <button type="button" class="chip" [class.chip--on]="trendGroup() === 'WEEKLY'" (click)="setTrendGroup('WEEKLY')">Weekly</button>\r
          <button type="button" class="chip" [class.chip--on]="trendGroup() === 'MONTHLY'" (click)="setTrendGroup('MONTHLY')">Monthly</button>\r
        </div>\r
      </div>\r
      @if (trendLoading()) {\r
        <mat-progress-bar mode="indeterminate" />\r
      } @else {\r
        <div class="chart-wrap">\r
          @if (trendPoints().length) {\r
            <svg class="line-chart" viewBox="0 0 600 180" preserveAspectRatio="xMidYMid meet">\r
              <polyline class="line" [attr.points]="trendSvgPolyline()" />\r
            </svg>\r
            <div class="x-labels">\r
              @for (p of trendPoints(); track p.period) {\r
                <span>{{ p.period }}</span>\r
              }\r
            </div>\r
          } @else {\r
            <div class="empty dashed">No consent creations in this window.</div>\r
          }\r
        </div>\r
      }\r
    </section>\r
\r
    <section class="panel">\r
      <h2>Business KPIs</h2>\r
      <div class="biz-grid">\r
        <div class="biz-card">\r
          <h3>VIP vs non-VIP consent rate</h3>\r
          <p class="muted">VIP: {{ k.vipConsentRatePercent | number: '1.0-1' }}% ({{ k.vipActiveConsents }}/{{ k.vipTotalCustomers }})</p>\r
          <p class="muted">Non-VIP: {{ k.nonVipConsentRatePercent | number: '1.0-1' }}% ({{ k.nonVipActiveConsents }}/{{ k.nonVipTotalCustomers }})</p>\r
        </div>\r
        <div class="biz-card">\r
          <h3>Maker\u2013checker efficiency</h3>\r
          <p class="muted">Avg approval {{ k.makerChecker.averageApprovalHours | number: '1.0-1' }}h \xB7 Approval rate {{ k.makerChecker.approvalRate | number: '1.0-1' }}%</p>\r
          <p class="muted">MC counts: consent {{ k.makerChecker.consentMcCompleted }}, rule {{ k.makerChecker.ruleMcCompleted }}, broadcast {{ k.makerChecker.broadcastMcCompleted }}, rejections {{ k.makerChecker.rejections }}</p>\r
        </div>\r
        <div class="biz-card">\r
          <h3>Compliance score</h3>\r
          <p class="big">{{ k.complianceScorePercent | number: '1.0-1' }}%</p>\r
          <p class="muted">Customers with active consent \xF7 total</p>\r
        </div>\r
        <div class="biz-card">\r
          <h3>SLA (48h approvals)</h3>\r
          <p class="big">{{ k.sla48hAdherencePercent | number: '1.0-1' }}%</p>\r
          <p class="muted">Approved consents reviewed within 48h of submit (workflow timestamps)</p>\r
        </div>\r
      </div>\r
    </section>\r
  }\r
}\r
\r
@if (mis(); as m) {\r
  <section class="panel">\r
    <h2>Channel-wise collection (template mix)</h2>\r
    <p class="muted">From published / approved templates \u2014 same source as dashboard MIS.</p>\r
    <ul class="bar-list">\r
        @for (row of m.channelPerformance; track row.channel) {\r
          <li class="bar-item">\r
            <div class="bar-top">\r
              <span class="bar-name">{{ row.channel }}</span>\r
              <span class="bar-pct">{{ row.percentage | number: '1.0-1' }}%</span>\r
            </div>\r
            <div class="bar-track">\r
              <div class="bar-fill" [style.width.%]="row.percentage"></div>\r
            </div>\r
          </li>\r
        }\r
      </ul>\r
  </section>\r
}\r
\r
<div class="actions">\r
  <button mat-stroked-button type="button" (click)="reloadAll()" [disabled]="loading()">Refresh</button>\r
</div>\r
`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-executive-tab/mis-report-executive-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.loader {\n  margin-bottom: var(--space-4);\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-6);\n}\n.kpi-card {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-4);\n}\n.kpi-card--accent {\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.kpi-card--warn {\n  border-color: rgba(217, 119, 6, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      #fffbeb 0%,\n      #ffffff 100%);\n}\n.kpi-label {\n  font-size: var(--text-12);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n}\n.kpi-value {\n  font-size: var(--text-28);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.kpi-hint {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.panel {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.panel h2,\n.panel h3 {\n  margin: 0 0 var(--space-3);\n  font-size: var(--text-16);\n  color: var(--input-text-color);\n}\n.panel-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.toggle-row {\n  display: flex;\n  gap: var(--space-2);\n}\n.chip {\n  border: 1px solid var(--input-border-color);\n  background: var(--input-bg);\n  border-radius: 999px;\n  padding: 6px 14px;\n  font-size: var(--text-13);\n  cursor: pointer;\n}\n.chip--on {\n  border-color: var(--color-primary);\n  background: var(--color-primary-light);\n  color: var(--color-primary-dark);\n}\n.chart-wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n.line-chart {\n  width: 100%;\n  height: 180px;\n  display: block;\n}\n.line-chart .line {\n  fill: none;\n  stroke: var(--color-info);\n  stroke-width: 2;\n}\n.x-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--text-11);\n  color: var(--sidebar-text-muted);\n  margin-top: var(--space-2);\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.biz-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: var(--space-4);\n}\n.biz-card {\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  padding: var(--space-4);\n  background: var(--input-bg-disabled);\n}\n.muted {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n  margin: var(--space-1) 0;\n}\n.big {\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--color-primary);\n}\n.donut-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-6);\n  align-items: flex-start;\n}\n.donut {\n  width: 120px;\n  height: 120px;\n  transform: rotate(-90deg);\n}\n.bar-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex: 1;\n  min-width: 220px;\n}\n.bar-item {\n  margin-bottom: var(--space-3);\n}\n.bar-top {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--text-13);\n}\n.bar-name {\n  font-weight: 600;\n}\n.bar-pct {\n  font-weight: 700;\n  color: var(--color-info);\n}\n.bar-track {\n  height: 8px;\n  border-radius: 999px;\n  background: var(--input-bg-disabled);\n  overflow: hidden;\n  margin-top: var(--space-2);\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-info),\n      var(--color-primary));\n}\n.empty.dashed {\n  border: 1px dashed var(--input-border-color);\n  border-radius: var(--card-radius);\n  padding: var(--space-8);\n  text-align: center;\n  color: var(--sidebar-text-muted);\n}\n.actions {\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=mis-report-executive-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportExecutiveTabComponent, { className: "MisReportExecutiveTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-executive-tab/mis-report-executive-tab.component.ts", lineNumber: 24 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-customer-consent-tab/mis-report-customer-consent-tab.component.ts
var _forTrack02 = ($index, $item) => $item.customerId;
function MisReportCustomerConsentTabComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementEnd();
  }
}
function MisReportCustomerConsentTabComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label(s_r1));
  }
}
function MisReportCustomerConsentTabComponent_For_75_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33)(1, "mat-icon", 35);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " VIP ");
    \u0275\u0275elementEnd();
  }
}
function MisReportCustomerConsentTabComponent_For_75_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "No");
    \u0275\u0275elementEnd();
  }
}
function MisReportCustomerConsentTabComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 32);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 32);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 32);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275template(24, MisReportCustomerConsentTabComponent_For_75_Conditional_24_Template, 4, 0, "span", 33)(25, MisReportCustomerConsentTabComponent_For_75_Conditional_25_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.customerId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.mobileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + ctx_r1.badgeClass(r_r3.consentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.label(r_r3.consentStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.consentValidUntil || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.lastConsentInviteSentAt ? \u0275\u0275pipeBind2(16, 12, r_r3.lastConsentInviteSentAt, "medium") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.lastConsentResponseAt ? \u0275\u0275pipeBind2(19, 15, r_r3.lastConsentResponseAt, "medium") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.reEngagementEligibleAfter ? \u0275\u0275pipeBind2(22, 18, r_r3.reEngagementEligibleAfter, "medium") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(r_r3.vipFlag ? 24 : 25);
  }
}
function MisReportCustomerConsentTabComponent_ForEmpty_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 24)(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No rows match your filters.");
  }
}
var ALL_STATUSES = [
  "ACCEPTED",
  "PENDING",
  "REJECTED",
  "WITHDRAWN",
  "EXPIRING_SOON",
  "EXPIRED"
];
var MisReportCustomerConsentTabComponent = class _MisReportCustomerConsentTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.rows = signal([]);
    this.loading = signal(false);
    this.exporting = signal(false);
    this.totalPages = signal(0);
    this.totalElements = signal(0);
    this.currentPage = signal(0);
    this.pageSize = 10;
    this.allStatuses = ALL_STATUSES;
    this.selectedStatuses = [];
    this.vipFilter = "";
    this.validFrom = "";
    this.validTo = "";
    this.search = "";
  }
  ngOnInit() {
    this.load(0);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  statusCsv() {
    if (!this.selectedStatuses.length)
      return void 0;
    return this.selectedStatuses.join(",");
  }
  vipBool() {
    if (this.vipFilter === "true")
      return true;
    if (this.vipFilter === "false")
      return false;
    return void 0;
  }
  load(page) {
    this.loading.set(true);
    this.adminApi.getMisCustomerConsentReport({
      page,
      size: this.pageSize,
      status: this.statusCsv(),
      vip: this.vipBool(),
      fromDate: this.validFrom || void 0,
      toDate: this.validTo || void 0,
      search: this.search.trim() || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (!res.success || !res.data) {
          this.notify.warning("Customer consent", res.message || "No data.");
          return;
        }
        this.rows.set(res.data.content);
        this.totalPages.set(res.data.totalPages);
        this.totalElements.set(res.data.totalElements);
        this.currentPage.set(res.data.currentPage);
      },
      error: (err) => {
        this.loading.set(false);
        this.logger.error("MisCustomerConsent", "load", err);
        this.notify.error("Customer consent", err?.error?.message || "Load failed.");
      }
    });
  }
  apply() {
    this.load(0);
  }
  prev() {
    const p = this.currentPage();
    if (p > 0)
      this.load(p - 1);
  }
  next() {
    const p = this.currentPage();
    if (p < this.totalPages() - 1)
      this.load(p + 1);
  }
  label(s) {
    return customerConsentRecordStatusLabel(s);
  }
  badgeClass(status) {
    switch (status) {
      case "ACCEPTED":
        return "badge badge--active";
      case "PENDING":
        return "badge badge--pending";
      case "REJECTED":
        return "badge badge--declined";
      case "WITHDRAWN":
        return "badge badge--withdrawn";
      case "EXPIRING_SOON":
        return "badge badge--expiring";
      case "EXPIRED":
        return "badge badge--expired";
      default:
        return "badge";
    }
  }
  download(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }
  exportCsv() {
    this.exporting.set(true);
    this.adminApi.exportMisCustomerConsentCsv({
      status: this.statusCsv(),
      vip: this.vipBool(),
      fromDate: this.validFrom || void 0,
      toDate: this.validTo || void 0,
      search: this.search.trim() || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (blob) => {
        this.exporting.set(false);
        this.download(blob, "customer-consent-report.csv");
        this.notify.success("Export", "CSV download started.");
      },
      error: (err) => {
        this.exporting.set(false);
        this.logger.error("MisCustomerConsent", "csv", err);
        this.notify.error("Export", err?.error?.message || "Export failed.");
      }
    });
  }
  exportExcel() {
    this.exporting.set(true);
    this.adminApi.exportMisCustomerConsentExcel({
      status: this.statusCsv(),
      vip: this.vipBool(),
      fromDate: this.validFrom || void 0,
      toDate: this.validTo || void 0,
      search: this.search.trim() || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (blob) => {
        this.exporting.set(false);
        this.download(blob, "customer-consent-report.xlsx");
        this.notify.success("Export", "Excel download started.");
      },
      error: (err) => {
        this.exporting.set(false);
        this.logger.error("MisCustomerConsent", "excel", err);
        this.notify.error("Export", err?.error?.message || "Export failed.");
      }
    });
  }
  static {
    this.\u0275fac = function MisReportCustomerConsentTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportCustomerConsentTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportCustomerConsentTabComponent, selectors: [["app-mis-report-customer-consent-tab"]], decls: 98, vars: 14, consts: [[1, "tab-toolbar"], [1, "toolbar-left"], [1, "toolbar-title"], [1, "toolbar-sub"], [1, "exports"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "progress-bar"], [1, "filters"], [1, "filter-field"], [1, "filter-label"], ["appearance", "outline", 1, "ff"], ["multiple", "", "placeholder", "All statuses", 3, "ngModelChange", "ngModel"], [3, "value"], ["appearance", "outline", 1, "ff", "ff-short"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "true"], ["value", "false"], ["type", "date", 1, "date-input", 3, "ngModelChange", "ngModel"], [1, "filter-field", "filter-grow"], ["type", "text", "placeholder", "Customer ID or mobile\u2026", 1, "text-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-apply", 3, "click"], [1, "table-wrap"], [1, "data-table"], [1, "empty-row"], [1, "pager"], [1, "pager-info"], [1, "pager-btns"], ["type", "button", 1, "btn-page", 3, "click", "disabled"], [1, "progress-inner"], [1, "td-id"], [1, "td-name"], [1, "td-muted"], [1, "vip-yes"], [1, "vip-no"], [1, "vip-icon"], ["colspan", "10"]], template: function MisReportCustomerConsentTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Consent Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Manage and monitor customer consent records");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function MisReportCustomerConsentTabComponent_Template_button_click_7_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function MisReportCustomerConsentTabComponent_Template_button_click_11_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(12, "mat-icon");
        \u0275\u0275text(13, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, MisReportCustomerConsentTabComponent_Conditional_15_Template, 2, 0, "div", 6);
        \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "label", 9);
        \u0275\u0275text(19, "Consent Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 10)(21, "mat-select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportCustomerConsentTabComponent_Template_mat_select_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatuses, $event) || (ctx.selectedStatuses = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(22, MisReportCustomerConsentTabComponent_For_23_Template, 2, 2, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 8)(25, "label", 9);
        \u0275\u0275text(26, "VIP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 13)(28, "mat-select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportCustomerConsentTabComponent_Template_mat_select_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.vipFilter, $event) || (ctx.vipFilter = $event);
          return $event;
        });
        \u0275\u0275elementStart(29, "mat-option", 15);
        \u0275\u0275text(30, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-option", 16);
        \u0275\u0275text(32, "VIP only");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-option", 17);
        \u0275\u0275text(34, "Non-VIP");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(35, "div", 8)(36, "label", 9);
        \u0275\u0275text(37, "Valid From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportCustomerConsentTabComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.validFrom, $event) || (ctx.validFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 8)(40, "label", 9);
        \u0275\u0275text(41, "Valid To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportCustomerConsentTabComponent_Template_input_ngModelChange_42_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.validTo, $event) || (ctx.validTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 19)(44, "label", 9);
        \u0275\u0275text(45, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportCustomerConsentTabComponent_Template_input_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "button", 21);
        \u0275\u0275listener("click", function MisReportCustomerConsentTabComponent_Template_button_click_47_listener() {
          return ctx.apply();
        });
        \u0275\u0275text(48, "Apply filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 22)(50, "table", 23)(51, "thead")(52, "tr")(53, "th");
        \u0275\u0275text(54, "Customer ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th");
        \u0275\u0275text(58, "Mobile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th");
        \u0275\u0275text(60, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "th");
        \u0275\u0275text(62, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "th");
        \u0275\u0275text(64, "Valid until");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "th");
        \u0275\u0275text(66, "Last invite");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "th");
        \u0275\u0275text(68, "Last response");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "th");
        \u0275\u0275text(70, "Re-engage after");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "th");
        \u0275\u0275text(72, "VIP");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "tbody");
        \u0275\u0275repeaterCreate(74, MisReportCustomerConsentTabComponent_For_75_Template, 26, 21, "tr", null, _forTrack02, false, MisReportCustomerConsentTabComponent_ForEmpty_76_Template, 3, 1, "tr", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 25)(78, "span", 26);
        \u0275\u0275text(79, " Page ");
        \u0275\u0275elementStart(80, "strong");
        \u0275\u0275text(81);
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, " of ");
        \u0275\u0275elementStart(83, "strong");
        \u0275\u0275text(84);
        \u0275\u0275elementEnd();
        \u0275\u0275text(85, " \xA0\xB7\xA0 ");
        \u0275\u0275elementStart(86, "strong");
        \u0275\u0275text(87);
        \u0275\u0275elementEnd();
        \u0275\u0275text(88, " total rows ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 27)(90, "button", 28);
        \u0275\u0275listener("click", function MisReportCustomerConsentTabComponent_Template_button_click_90_listener() {
          return ctx.prev();
        });
        \u0275\u0275elementStart(91, "mat-icon");
        \u0275\u0275text(92, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, " Previous ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "button", 28);
        \u0275\u0275listener("click", function MisReportCustomerConsentTabComponent_Template_button_click_94_listener() {
          return ctx.next();
        });
        \u0275\u0275text(95, " Next ");
        \u0275\u0275elementStart(96, "mat-icon");
        \u0275\u0275text(97, "chevron_right");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 15 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatuses);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.allStatuses);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.vipFilter);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.validFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.validTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(28);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.currentPage() + 1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.totalPages() || 1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.totalElements());
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.currentPage() <= 0 || ctx.loading());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages() - 1 || ctx.loading());
      }
    }, dependencies: [
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatIconModule,
      MatIcon,
      MatProgressBarModule
    ], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: var(--space-4);\n  border-bottom: 1px solid var(--input-border-color);\n  margin-bottom: var(--space-4);\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.toolbar-title[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--text-primary, #111);\n}\n.toolbar-sub[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.exports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.exports[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  height: 34px;\n  padding: 0 14px;\n  border-radius: 6px;\n  color: var(--sidebar-text-muted);\n  border-color: var(--input-border-color);\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.exports[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.exports[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  color: var(--text-primary, #111);\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 2px;\n  background: var(--input-bg-disabled);\n  border-radius: 2px;\n  margin-bottom: var(--space-3);\n  overflow: hidden;\n}\n.progress-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 38%;\n  background: var(--color-info, #3B82F6);\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_progress-slide 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_progress-slide {\n  0% {\n    transform: translateX(-160%);\n  }\n  100% {\n    transform: translateX(380%);\n  }\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n}\n.filter-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  line-height: 1;\n}\n.ff[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.ff[_ngcontent-%COMP%]     .mat-mdc-form-field-infix {\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  min-height: unset;\n}\n.ff[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  height: 34px;\n  border-radius: 6px !important;\n}\n.ff[_ngcontent-%COMP%]     .mdc-notched-outline__leading {\n  border-radius: 6px 0 0 6px !important;\n}\n.ff[_ngcontent-%COMP%]     .mdc-notched-outline__trailing {\n  border-radius: 0 6px 6px 0 !important;\n}\n.ff-short[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.filter-grow[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.filter-grow[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.date-input[_ngcontent-%COMP%], \n.text-input[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n  color: var(--text-primary, #111);\n  background: var(--input-bg, #fff);\n  border: 1px solid var(--input-border-color);\n  border-radius: 6px;\n  padding: 0 10px;\n  height: 34px;\n  min-width: 148px;\n  outline: none;\n  transition: border-color 0.15s ease;\n  box-sizing: border-box;\n}\n.date-input[_ngcontent-%COMP%]:focus, \n.text-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-info, #3B82F6);\n}\n.date-input[_ngcontent-%COMP%]::placeholder, \n.text-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--sidebar-text-muted);\n}\n.btn-apply[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  height: 34px;\n  padding: 0 16px;\n  border-radius: 6px;\n  border: 1px solid var(--input-border-color);\n  background: var(--input-bg-disabled);\n  color: var(--text-primary, #111);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s ease;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  background: rgb(226.72, 234.8, 242.88);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  overflow: hidden;\n  overflow-x: auto;\n  max-height: 60vh;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--input-bg-disabled);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: var(--input-bg-disabled);\n  padding: 9px 12px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 0.5px solid var(--input-border-color);\n  color: var(--text-primary, #111);\n  white-space: nowrap;\n  vertical-align: middle;\n  transition: background 0.15s ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--input-bg-disabled);\n}\n.td-id[_ngcontent-%COMP%] {\n  font-family: "DM Mono", monospace;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.td-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.td-muted[_ngcontent-%COMP%] {\n  color: var(--sidebar-text-muted);\n}\n.empty-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 12px;\n  color: var(--sidebar-text-muted);\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 2px 9px 2px 7px;\n  border-radius: 20px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.badge--active[_ngcontent-%COMP%] {\n  background: var(--color-success-light);\n  color: var(--color-success);\n}\n.badge--active[_ngcontent-%COMP%]::before {\n  background: var(--color-success);\n}\n.badge--pending[_ngcontent-%COMP%] {\n  background: var(--color-warning-light);\n  color: var(--color-warning);\n}\n.badge--pending[_ngcontent-%COMP%]::before {\n  background: var(--color-warning);\n}\n.badge--invited[_ngcontent-%COMP%] {\n  background: var(--color-info-light);\n  color: var(--color-info);\n}\n.badge--invited[_ngcontent-%COMP%]::before {\n  background: var(--color-info);\n}\n.badge--expiring[_ngcontent-%COMP%] {\n  background: var(--color-amber-light);\n  color: var(--color-amber);\n}\n.badge--expiring[_ngcontent-%COMP%]::before {\n  background: var(--color-amber);\n}\n.badge--expired[_ngcontent-%COMP%], \n.badge--declined[_ngcontent-%COMP%] {\n  background: var(--color-error-light);\n  color: var(--color-error);\n}\n.badge--expired[_ngcontent-%COMP%]::before, \n.badge--declined[_ngcontent-%COMP%]::before {\n  background: var(--color-error);\n}\n.badge--withdrawn[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.badge--withdrawn[_ngcontent-%COMP%]::before {\n  background: #94a3b8;\n}\n.vip-yes[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #b45309;\n}\n.vip-yes[_ngcontent-%COMP%]   .vip-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #f59e0b;\n}\n.vip-no[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  margin-top: var(--space-4);\n}\n.pager-info[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.pager-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary, #111);\n}\n.pager-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.btn-page[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  height: 32px;\n  padding: 0 12px;\n  border-radius: 6px;\n  border: 1px solid var(--input-border-color);\n  background: transparent;\n  color: var(--text-primary, #111);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: background 0.15s ease;\n}\n.btn-page[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-page[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n}\n.btn-page[disabled][_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-customer-consent-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportCustomerConsentTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-customer-consent-tab", standalone: true, imports: [
      DatePipe,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatIconModule,
      MatProgressBarModule
    ], template: `<div class="tab-toolbar">\r
  <div class="toolbar-left">\r
    <span class="toolbar-title">Consent Management</span>\r
    <span class="toolbar-sub">Manage and monitor customer consent records</span>\r
  </div>\r
  <div class="exports">\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportCsv()">\r
      <mat-icon>download</mat-icon> CSV\r
    </button>\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportExcel()">\r
      <mat-icon>table_chart</mat-icon> Excel\r
    </button>\r
  </div>\r
</div>\r
\r
@if (loading()) {\r
  <div class="progress-bar">\r
    <div class="progress-inner"></div>\r
  </div>\r
}\r
\r
<div class="filters">\r
  <div class="filter-field">\r
    <label class="filter-label">Consent Status</label>\r
    <mat-form-field appearance="outline" class="ff">\r
      <mat-select [(ngModel)]="selectedStatuses" multiple placeholder="All statuses">\r
        @for (s of allStatuses; track s) {\r
          <mat-option [value]="s">{{ label(s) }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
  </div>\r
\r
  <div class="filter-field">\r
    <label class="filter-label">VIP</label>\r
    <mat-form-field appearance="outline" class="ff ff-short">\r
      <mat-select [(ngModel)]="vipFilter">\r
        <mat-option value="">All</mat-option>\r
        <mat-option value="true">VIP only</mat-option>\r
        <mat-option value="false">Non-VIP</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
  </div>\r
\r
  <div class="filter-field">\r
    <label class="filter-label">Valid From</label>\r
    <input class="date-input" type="date" [(ngModel)]="validFrom" />\r
  </div>\r
\r
  <div class="filter-field">\r
    <label class="filter-label">Valid To</label>\r
    <input class="date-input" type="date" [(ngModel)]="validTo" />\r
  </div>\r
\r
  <div class="filter-field filter-grow">\r
    <label class="filter-label">Search</label>\r
    <input class="text-input" type="text" [(ngModel)]="search" placeholder="Customer ID or mobile\u2026" />\r
  </div>\r
\r
  <button class="btn-apply" type="button" (click)="apply()">Apply filters</button>\r
</div>\r
\r
<div class="table-wrap">\r
  <table class="data-table">\r
    <thead>\r
      <tr>\r
        <th>Customer ID</th>\r
        <th>Name</th>\r
        <th>Mobile</th>\r
        <th>Email</th>\r
        <th>Status</th>\r
        <th>Valid until</th>\r
        <th>Last invite</th>\r
        <th>Last response</th>\r
        <th>Re-engage after</th>\r
        <th>VIP</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      @for (r of rows(); track r.customerId) {\r
        <tr>\r
          <td class="td-id">{{ r.customerId }}</td>\r
          <td class="td-name">{{ r.customerName }}</td>\r
          <td class="td-muted">{{ r.mobileNumber }}</td>\r
          <td class="td-muted">{{ r.email || '\u2014' }}</td>\r
          <td>\r
            <span [class]="'badge ' + badgeClass(r.consentStatus)">\r
              {{ label(r.consentStatus) }}\r
            </span>\r
          </td>\r
          <td class="td-muted">{{ r.consentValidUntil || '\u2014' }}</td>\r
          <td class="td-muted">{{ r.lastConsentInviteSentAt ? (r.lastConsentInviteSentAt | date: 'medium') : '\u2014' }}</td>\r
          <td class="td-muted">{{ r.lastConsentResponseAt ? (r.lastConsentResponseAt | date: 'medium') : '\u2014' }}</td>\r
          <td class="td-muted">{{ r.reEngagementEligibleAfter ? (r.reEngagementEligibleAfter | date: 'medium') : '\u2014' }}</td>\r
          <td>\r
            @if (r.vipFlag) {\r
              <span class="vip-yes">\r
                <mat-icon class="vip-icon">star</mat-icon> VIP\r
              </span>\r
            } @else {\r
              <span class="vip-no">No</span>\r
            }\r
          </td>\r
        </tr>\r
      } @empty {\r
        <tr class="empty-row">\r
          <td colspan="10">{{ loading() ? 'Loading\u2026' : 'No rows match your filters.' }}</td>\r
        </tr>\r
      }\r
    </tbody>\r
  </table>\r
</div>\r
\r
<div class="pager">\r
  <span class="pager-info">\r
    Page <strong>{{ currentPage() + 1 }}</strong> of <strong>{{ totalPages() || 1 }}</strong>\r
    &nbsp;\xB7&nbsp;\r
    <strong>{{ totalElements() }}</strong> total rows\r
  </span>\r
  <div class="pager-btns">\r
    <button\r
      class="btn-page"\r
      type="button"\r
      [disabled]="currentPage() <= 0 || loading()"\r
      (click)="prev()"\r
    >\r
      <mat-icon>chevron_left</mat-icon> Previous\r
    </button>\r
    <button\r
      class="btn-page"\r
      type="button"\r
      [disabled]="currentPage() >= totalPages() - 1 || loading()"\r
      (click)="next()"\r
    >\r
      Next <mat-icon>chevron_right</mat-icon>\r
    </button>\r
  </div>\r
</div>`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-customer-consent-tab/mis-report-customer-consent-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: var(--space-4);\n  border-bottom: 1px solid var(--input-border-color);\n  margin-bottom: var(--space-4);\n}\n.toolbar-left {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.toolbar-title {\n  font-family: "DM Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--text-primary, #111);\n}\n.toolbar-sub {\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.exports {\n  display: flex;\n  gap: var(--space-2);\n}\n.exports button[mat-stroked-button] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  height: 34px;\n  padding: 0 14px;\n  border-radius: 6px;\n  color: var(--sidebar-text-muted);\n  border-color: var(--input-border-color);\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.exports button[mat-stroked-button] mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.exports button[mat-stroked-button]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  color: var(--text-primary, #111);\n}\n.progress-bar {\n  height: 2px;\n  background: var(--input-bg-disabled);\n  border-radius: 2px;\n  margin-bottom: var(--space-3);\n  overflow: hidden;\n}\n.progress-inner {\n  height: 100%;\n  width: 38%;\n  background: var(--color-info, #3B82F6);\n  border-radius: 2px;\n  animation: progress-slide 1.4s ease-in-out infinite;\n}\n@keyframes progress-slide {\n  0% {\n    transform: translateX(-160%);\n  }\n  100% {\n    transform: translateX(380%);\n  }\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n}\n.filter-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-label {\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  line-height: 1;\n}\n.ff {\n  min-width: 180px;\n}\n.ff ::ng-deep .mat-mdc-form-field-infix {\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  min-height: unset;\n}\n.ff ::ng-deep .mat-mdc-text-field-wrapper {\n  height: 34px;\n  border-radius: 6px !important;\n}\n.ff ::ng-deep .mdc-notched-outline__leading {\n  border-radius: 6px 0 0 6px !important;\n}\n.ff ::ng-deep .mdc-notched-outline__trailing {\n  border-radius: 0 6px 6px 0 !important;\n}\n.ff-short {\n  min-width: 120px;\n}\n.filter-grow {\n  flex: 1;\n  min-width: 200px;\n}\n.filter-grow .text-input {\n  width: 100%;\n}\n.date-input,\n.text-input {\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n  color: var(--text-primary, #111);\n  background: var(--input-bg, #fff);\n  border: 1px solid var(--input-border-color);\n  border-radius: 6px;\n  padding: 0 10px;\n  height: 34px;\n  min-width: 148px;\n  outline: none;\n  transition: border-color 0.15s ease;\n  box-sizing: border-box;\n}\n.date-input:focus,\n.text-input:focus {\n  border-color: var(--color-info, #3B82F6);\n}\n.date-input::placeholder,\n.text-input::placeholder {\n  color: var(--sidebar-text-muted);\n}\n.btn-apply {\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  height: 34px;\n  padding: 0 16px;\n  border-radius: 6px;\n  border: 1px solid var(--input-border-color);\n  background: var(--input-bg-disabled);\n  color: var(--text-primary, #111);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s ease;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-apply:hover {\n  background: rgb(226.72, 234.8, 242.88);\n}\n.table-wrap {\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  overflow: hidden;\n  overflow-x: auto;\n  max-height: 60vh;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: "DM Sans", sans-serif;\n  font-size: 13px;\n}\n.data-table thead tr {\n  background: var(--input-bg-disabled);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table th {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: var(--input-bg-disabled);\n  padding: 9px 12px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table td {\n  padding: 10px 12px;\n  border-bottom: 0.5px solid var(--input-border-color);\n  color: var(--text-primary, #111);\n  white-space: nowrap;\n  vertical-align: middle;\n  transition: background 0.15s ease;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table tbody tr:hover td {\n  background: var(--input-bg-disabled);\n}\n.td-id {\n  font-family: "DM Mono", monospace;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.td-name {\n  font-weight: 500;\n}\n.td-muted {\n  color: var(--sidebar-text-muted);\n}\n.empty-row td {\n  text-align: center;\n  padding: 48px 12px;\n  color: var(--sidebar-text-muted);\n  font-size: 13px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 2px 9px 2px 7px;\n  border-radius: 20px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n}\n.badge::before {\n  content: "";\n  display: inline-block;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.badge--active {\n  background: var(--color-success-light);\n  color: var(--color-success);\n}\n.badge--active::before {\n  background: var(--color-success);\n}\n.badge--pending {\n  background: var(--color-warning-light);\n  color: var(--color-warning);\n}\n.badge--pending::before {\n  background: var(--color-warning);\n}\n.badge--invited {\n  background: var(--color-info-light);\n  color: var(--color-info);\n}\n.badge--invited::before {\n  background: var(--color-info);\n}\n.badge--expiring {\n  background: var(--color-amber-light);\n  color: var(--color-amber);\n}\n.badge--expiring::before {\n  background: var(--color-amber);\n}\n.badge--expired,\n.badge--declined {\n  background: var(--color-error-light);\n  color: var(--color-error);\n}\n.badge--expired::before,\n.badge--declined::before {\n  background: var(--color-error);\n}\n.badge--withdrawn {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.badge--withdrawn::before {\n  background: #94a3b8;\n}\n.vip-yes {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #b45309;\n}\n.vip-yes .vip-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #f59e0b;\n}\n.vip-no {\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  margin-top: var(--space-4);\n}\n.pager-info {\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.pager-info strong {\n  font-weight: 600;\n  color: var(--text-primary, #111);\n}\n.pager-btns {\n  display: flex;\n  gap: var(--space-2);\n}\n.btn-page {\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  height: 32px;\n  padding: 0 12px;\n  border-radius: 6px;\n  border: 1px solid var(--input-border-color);\n  background: transparent;\n  color: var(--text-primary, #111);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: background 0.15s ease;\n}\n.btn-page mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-page:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n}\n.btn-page[disabled] {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-customer-consent-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportCustomerConsentTabComponent, { className: "MisReportCustomerConsentTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-customer-consent-tab/mis-report-customer-consent-tab.component.ts", lineNumber: 43 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-audit-tab/mis-report-audit-tab.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function MisReportAuditTabComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 3);
  }
}
function MisReportAuditTabComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("value", a_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1);
  }
}
function MisReportAuditTabComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, r_r3.performedAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.entityType || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.entityName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.description || "\u2014");
  }
}
function MisReportAuditTabComponent_ForEmpty_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No audit rows.");
  }
}
var MisReportAuditTabComponent = class _MisReportAuditTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.rows = signal([]);
    this.actions = signal([]);
    this.loading = signal(false);
    this.exporting = signal(false);
    this.totalPages = signal(0);
    this.currentPage = signal(0);
    this.pageSize = 15;
    this.entityType = "";
    this.action = "";
    this.from = "";
    this.to = "";
    this.performedBy = "";
  }
  ngOnInit() {
    this.adminApi.getMisAuditActions().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.actions.set(res.data);
        }
      },
      error: (err) => this.logger.error("MisAudit", "actions", err)
    });
    this.load(0);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  iso(s) {
    if (!s) {
      return void 0;
    }
    return (/* @__PURE__ */ new Date(s + "T00:00:00")).toISOString();
  }
  load(page) {
    this.loading.set(true);
    this.adminApi.getMisAuditReport({
      page,
      size: this.pageSize,
      entityType: this.entityType || void 0,
      action: this.action || void 0,
      fromDate: this.iso(this.from),
      toDate: this.to ? (/* @__PURE__ */ new Date(this.to + "T23:59:59")).toISOString() : void 0,
      performedBy: this.performedBy.trim() || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.rows.set(res.data.content);
          this.totalPages.set(res.data.totalPages);
          this.currentPage.set(res.data.currentPage);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.logger.error("MisAudit", "load", err);
        this.notify.error("Audit", err?.error?.message || "Load failed.");
      }
    });
  }
  apply() {
    this.load(0);
  }
  prev() {
    const p = this.currentPage();
    if (p > 0) {
      this.load(p - 1);
    }
  }
  next() {
    const p = this.currentPage();
    if (p < this.totalPages() - 1) {
      this.load(p + 1);
    }
  }
  download(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }
  exportCsv() {
    this.exporting.set(true);
    this.adminApi.exportMisAuditCsv({
      entityType: this.entityType || void 0,
      action: this.action || void 0,
      fromDate: this.iso(this.from),
      toDate: this.to ? (/* @__PURE__ */ new Date(this.to + "T23:59:59")).toISOString() : void 0,
      performedBy: this.performedBy.trim() || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.download(b, "audit-report.csv");
        this.notify.success("Export", "CSV started.");
      },
      error: (err) => {
        this.exporting.set(false);
        this.notify.error("Export", err?.error?.message || "Failed.");
      }
    });
  }
  exportExcel() {
    this.exporting.set(true);
    this.adminApi.exportMisAuditExcel({
      entityType: this.entityType || void 0,
      action: this.action || void 0,
      fromDate: this.iso(this.from),
      toDate: this.to ? (/* @__PURE__ */ new Date(this.to + "T23:59:59")).toISOString() : void 0,
      performedBy: this.performedBy.trim() || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.download(b, "audit-report.xlsx");
        this.notify.success("Export", "Excel started.");
      },
      error: (err) => {
        this.exporting.set(false);
        this.notify.error("Export", err?.error?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function MisReportAuditTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportAuditTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportAuditTabComponent, selectors: [["app-mis-report-audit-tab"]], decls: 74, vars: 13, consts: [[1, "tab-toolbar"], [1, "exports"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mode", "indeterminate"], [1, "filters"], ["appearance", "outline", 1, "ff"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "CONSENT"], ["value", "BROADCAST_REQUEST"], ["value", "CONSENT_RULE"], [3, "value"], [1, "ff-date"], ["type", "date", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "ff-grow"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "table-wrap"], [1, "data-table"], [1, "pager"], [1, "desc"], ["colspan", "6", 1, "empty"]], template: function MisReportAuditTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function MisReportAuditTabComponent_Template_button_click_2_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 2);
        \u0275\u0275listener("click", function MisReportAuditTabComponent_Template_button_click_6_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, MisReportAuditTabComponent_Conditional_10_Template, 1, 0, "mat-progress-bar", 3);
        \u0275\u0275elementStart(11, "div", 4)(12, "mat-form-field", 5)(13, "mat-label");
        \u0275\u0275text(14, "Entity type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportAuditTabComponent_Template_mat_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.entityType, $event) || (ctx.entityType = $event);
          return $event;
        });
        \u0275\u0275elementStart(16, "mat-option", 7);
        \u0275\u0275text(17, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-option", 8);
        \u0275\u0275text(19, "CONSENT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-option", 9);
        \u0275\u0275text(21, "BROADCAST_REQUEST");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-option", 10);
        \u0275\u0275text(23, "CONSENT_RULE");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "mat-form-field", 5)(25, "mat-label");
        \u0275\u0275text(26, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportAuditTabComponent_Template_mat_select_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.action, $event) || (ctx.action = $event);
          return $event;
        });
        \u0275\u0275elementStart(28, "mat-option", 7);
        \u0275\u0275text(29, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(30, MisReportAuditTabComponent_For_31_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "label", 12)(33, "span");
        \u0275\u0275text(34, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportAuditTabComponent_Template_input_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.from, $event) || (ctx.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "label", 12)(37, "span");
        \u0275\u0275text(38, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportAuditTabComponent_Template_input_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.to, $event) || (ctx.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "mat-form-field", 14)(41, "mat-label");
        \u0275\u0275text(42, "Performed by contains");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportAuditTabComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.performedBy, $event) || (ctx.performedBy = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "button", 16);
        \u0275\u0275listener("click", function MisReportAuditTabComponent_Template_button_click_44_listener() {
          return ctx.apply();
        });
        \u0275\u0275text(45, "Apply");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 17)(47, "table", 18)(48, "thead")(49, "tr")(50, "th");
        \u0275\u0275text(51, "Timestamp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th");
        \u0275\u0275text(53, "Entity type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "th");
        \u0275\u0275text(55, "Entity name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "th");
        \u0275\u0275text(57, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "th");
        \u0275\u0275text(59, "Performed by");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th");
        \u0275\u0275text(61, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "tbody");
        \u0275\u0275repeaterCreate(63, MisReportAuditTabComponent_For_64_Template, 14, 9, "tr", null, _forTrack03, false, MisReportAuditTabComponent_ForEmpty_65_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "div", 19)(67, "span");
        \u0275\u0275text(68);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div")(70, "button", 2);
        \u0275\u0275listener("click", function MisReportAuditTabComponent_Template_button_click_70_listener() {
          return ctx.prev();
        });
        \u0275\u0275text(71, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "button", 2);
        \u0275\u0275listener("click", function MisReportAuditTabComponent_Template_button_click_72_listener() {
          return ctx.next();
        });
        \u0275\u0275text(73, "Next");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 10 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.entityType);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.action);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.actions());
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.to);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.performedBy);
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("Page ", ctx.currentPage() + 1, " / ", ctx.totalPages() || 1, "");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() <= 0 || ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages() - 1 || ctx.loading());
      }
    }, dependencies: [
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatIconModule,
      MatIcon,
      MatProgressBarModule,
      MatProgressBar
    ], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: var(--space-4);\n  padding-bottom: var(--space-4);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.exports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.exports[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 1px solid var(--input-border-color);\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n}\n.exports[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.exports[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  border-color: rgba(99, 102, 241, 0.4);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.exports[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n  padding: var(--space-4);\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  border-radius: 12px;\n}\n.filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: none;\n  background: rgb(99, 102, 241);\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s ease;\n  height: 40px;\n}\n.filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ff[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.ff-grow[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.ff-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ff-date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n}\n.ff-date[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 13px;\n  color: var(--input-text-color);\n  background: var(--card-bg);\n  outline: none;\n  height: 40px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.ff-date[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(99, 102, 241, 0.5);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 58vh;\n  border: 1px solid var(--input-border-color);\n  border-radius: 12px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: var(--input-bg-disabled);\n  padding: 10px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  border-bottom: 1px solid var(--input-border-color);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 12px 0 0 0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 12px 0 0;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.12s ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.03);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--input-border-color);\n  vertical-align: middle;\n  color: var(--input-text-color);\n  line-height: 1.4;\n}\n.desc[_ngcontent-%COMP%] {\n  max-width: 320px;\n  white-space: normal;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-8) var(--space-6);\n  color: var(--sidebar-text-muted);\n  font-size: 14px;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: var(--space-4);\n  padding-top: var(--space-3);\n  border-top: 1px solid var(--input-border-color);\n  font-size: 13px;\n  color: var(--sidebar-text-muted);\n}\n.pager[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.pager[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 1px solid var(--input-border-color);\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.pager[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.pager[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-audit-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportAuditTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-audit-tab", standalone: true, imports: [
      DatePipe,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatProgressBarModule
    ], template: `<div class="tab-toolbar">\r
  <div class="exports">\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportCsv()">\r
      <mat-icon>download</mat-icon> CSV\r
    </button>\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportExcel()">\r
      <mat-icon>table_chart</mat-icon> Excel\r
    </button>\r
  </div>\r
</div>\r
\r
@if (loading()) {\r
  <mat-progress-bar mode="indeterminate" />\r
}\r
\r
<div class="filters">\r
  <mat-form-field appearance="outline" class="ff">\r
    <mat-label>Entity type</mat-label>\r
    <mat-select [(ngModel)]="entityType">\r
      <mat-option value="">All</mat-option>\r
      <mat-option value="CONSENT">CONSENT</mat-option>\r
      <mat-option value="BROADCAST_REQUEST">BROADCAST_REQUEST</mat-option>\r
      <mat-option value="CONSENT_RULE">CONSENT_RULE</mat-option>\r
    </mat-select>\r
  </mat-form-field>\r
  <mat-form-field appearance="outline" class="ff">\r
    <mat-label>Action</mat-label>\r
    <mat-select [(ngModel)]="action">\r
      <mat-option value="">All</mat-option>\r
      @for (a of actions(); track a) {\r
        <mat-option [value]="a">{{ a }}</mat-option>\r
      }\r
    </mat-select>\r
  </mat-form-field>\r
  <label class="ff-date"><span>From</span><input type="date" [(ngModel)]="from" /></label>\r
  <label class="ff-date"><span>To</span><input type="date" [(ngModel)]="to" /></label>\r
  <mat-form-field appearance="outline" class="ff-grow">\r
    <mat-label>Performed by contains</mat-label>\r
    <input matInput [(ngModel)]="performedBy" />\r
  </mat-form-field>\r
  <button mat-stroked-button type="button" (click)="apply()">Apply</button>\r
</div>\r
\r
<div class="table-wrap">\r
  <table class="data-table">\r
    <thead>\r
      <tr>\r
        <th>Timestamp</th>\r
        <th>Entity type</th>\r
        <th>Entity name</th>\r
        <th>Action</th>\r
        <th>Performed by</th>\r
        <th>Description</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      @for (r of rows(); track r.id) {\r
        <tr>\r
          <td>{{ r.performedAt | date: 'medium' }}</td>\r
          <td>{{ r.entityType || '\u2014' }}</td>\r
          <td>{{ r.entityName || '\u2014' }}</td>\r
          <td>{{ r.action }}</td>\r
          <td>{{ r.userName }}</td>\r
          <td class="desc">{{ r.description || '\u2014' }}</td>\r
        </tr>\r
      } @empty {\r
        <tr>\r
          <td colspan="6" class="empty">{{ loading() ? 'Loading\u2026' : 'No audit rows.' }}</td>\r
        </tr>\r
      }\r
    </tbody>\r
  </table>\r
</div>\r
\r
<div class="pager">\r
  <span>Page {{ currentPage() + 1 }} / {{ totalPages() || 1 }}</span>\r
  <div>\r
    <button mat-stroked-button type="button" [disabled]="currentPage() <= 0 || loading()" (click)="prev()">Previous</button>\r
    <button mat-stroked-button type="button" [disabled]="currentPage() >= totalPages() - 1 || loading()" (click)="next()">Next</button>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-audit-tab/mis-report-audit-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: var(--space-4);\n  padding-bottom: var(--space-4);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.exports {\n  display: flex;\n  gap: var(--space-2);\n}\n.exports button {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 1px solid var(--input-border-color);\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n}\n.exports button mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.exports button:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  border-color: rgba(99, 102, 241, 0.4);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.exports button[disabled] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n  padding: var(--space-4);\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  border-radius: 12px;\n}\n.filters button {\n  padding: 8px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: none;\n  background: rgb(99, 102, 241);\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s ease;\n  height: 40px;\n}\n.filters button:hover {\n  opacity: 0.88;\n}\n.ff {\n  min-width: 160px;\n}\n.ff-grow {\n  flex: 1;\n  min-width: 200px;\n}\n.ff-date {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ff-date span {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n}\n.ff-date input {\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 13px;\n  color: var(--input-text-color);\n  background: var(--card-bg);\n  outline: none;\n  height: 40px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.ff-date input:focus {\n  border-color: rgba(99, 102, 241, 0.5);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.table-wrap {\n  overflow: auto;\n  max-height: 58vh;\n  border: 1px solid var(--input-border-color);\n  border-radius: 12px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table thead th {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: var(--input-bg-disabled);\n  padding: 10px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  border-bottom: 1px solid var(--input-border-color);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table thead th:first-child {\n  border-radius: 12px 0 0 0;\n}\n.data-table thead th:last-child {\n  border-radius: 0 12px 0 0;\n}\n.data-table tbody tr {\n  transition: background 0.12s ease;\n}\n.data-table tbody tr:hover {\n  background: rgba(99, 102, 241, 0.03);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table td {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--input-border-color);\n  vertical-align: middle;\n  color: var(--input-text-color);\n  line-height: 1.4;\n}\n.desc {\n  max-width: 320px;\n  white-space: normal;\n  font-size: 12px;\n  color: var(--sidebar-text-muted);\n}\n.empty {\n  text-align: center;\n  padding: var(--space-8) var(--space-6);\n  color: var(--sidebar-text-muted);\n  font-size: 14px;\n}\n.pager {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: var(--space-4);\n  padding-top: var(--space-3);\n  border-top: 1px solid var(--input-border-color);\n  font-size: 13px;\n  color: var(--sidebar-text-muted);\n}\n.pager div {\n  display: flex;\n  gap: var(--space-2);\n}\n.pager div button {\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 1px solid var(--input-border-color);\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.pager div button:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.pager div button[disabled] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-audit-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportAuditTabComponent, { className: "MisReportAuditTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-audit-tab/mis-report-audit-tab.component.ts", lineNumber: 32 });
})();

// node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c0 = ["button"];
var _c1 = ["*"];
function MatButtonToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-pseudo-checkbox", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  };
}
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var MatButtonToggleChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatButtonToggleGroup = class _MatButtonToggleGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _multiple = false;
  _disabled = false;
  _disabledInteractive = false;
  _selectionModel;
  /**
   * Reference to the raw value that the consumer tried to assign. The real
   * value will exclude any values from this one that don't correspond to a
   * toggle. Useful for the cases where the value is assigned before the toggles
   * have been initialized or at the same that they're being swapped out.
   */
  _rawValue;
  /**
   * The method to be called in order to update ngModel.
   * Now `ngModel` binding is not supported in multiple selection mode.
   */
  _controlValueAccessorChangeFn = () => {
  };
  /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
  _onTouched = () => {
  };
  /** Child button toggle buttons. */
  _buttonToggles;
  /** The appearance for all the buttons in the group. */
  appearance;
  /** `name` attribute for the underlying `input` element. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  _name = inject(_IdGenerator).getId("mat-button-toggle-group-");
  /** Whether the toggle group is vertical. */
  vertical;
  /** Value of the toggle group. */
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  /**
   * Event that emits whenever the value of the group changes.
   * Used to facilitate two-way data binding.
   * @docs-private
   */
  valueChange = new EventEmitter();
  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markButtonsForCheck();
  }
  /** The layout direction of the toggle button group. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Event emitted when the group's value changes. */
  change = new EventEmitter();
  /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideSingleSelectionIndicator;
  /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideMultipleSelectionIndicator;
  constructor() {
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
    this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
    if (!this.multiple) {
      this._initializeTabIndex();
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Handle keydown event calling to single-select button toggle. */
  _keydown(event) {
    if (this.multiple || this.disabled) {
      return;
    }
    const target = event.target;
    const buttonId = target.id;
    const index = this._buttonToggles.toArray().findIndex((toggle) => {
      return toggle.buttonId === buttonId;
    });
    let nextButton = null;
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        nextButton = this._buttonToggles.get(index) || null;
        break;
      case UP_ARROW:
        nextButton = this._getNextButton(index, -1);
        break;
      case LEFT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? -1 : 1);
        break;
      case DOWN_ARROW:
        nextButton = this._getNextButton(index, 1);
        break;
      case RIGHT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? 1 : -1);
        break;
      default:
        return;
    }
    if (nextButton) {
      event.preventDefault();
      nextButton._onButtonClick();
      nextButton.focus();
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  /** Initializes the tabindex attribute using the radio pattern. */
  _initializeTabIndex() {
    this._buttonToggles.forEach((toggle) => {
      toggle.tabIndex = -1;
    });
    if (this.selected) {
      this.selected.tabIndex = 0;
    } else {
      for (let i = 0; i < this._buttonToggles.length; i++) {
        const toggle = this._buttonToggles.get(i);
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
    this._markButtonsForCheck();
  }
  /** Obtain the subsequent toggle to which the focus shifts. */
  _getNextButton(startIndex, offset) {
    const items = this._buttonToggles;
    for (let i = 1; i <= items.length; i++) {
      const index = (startIndex + offset * i + items.length) % items.length;
      const item = items.get(index);
      if (item && !item.disabled) {
        return item;
      }
    }
    return null;
  }
  /** Updates the selection state of the toggles in the group based on a value. */
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    const toggles = this._buttonToggles.toArray();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue, toggles));
    } else {
      this._clearSelection();
      this._selectValue(value, toggles);
    }
    if (!this.multiple && toggles.every((toggle) => toggle.tabIndex === -1)) {
      for (const toggle of toggles) {
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Clears the selected toggles. */
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => {
      toggle.checked = false;
      if (!this.multiple) {
        toggle.tabIndex = -1;
      }
    });
  }
  /** Selects a value if there's a toggle that corresponds to it. */
  _selectValue(value, toggles) {
    for (const toggle of toggles) {
      if (toggle.value === value) {
        toggle.checked = true;
        this._selectionModel.select(toggle);
        if (!this.multiple) {
          toggle.tabIndex = 0;
        }
        break;
      }
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
  static \u0275fac = function MatButtonToggleGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatButtonToggleGroup,
    selectors: [["mat-button-toggle-group"]],
    contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatButtonToggle, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonToggles = _t);
      }
    },
    hostAttrs: [1, "mat-button-toggle-group"],
    hostVars: 6,
    hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatButtonToggleGroup_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.multiple ? "group" : "radiogroup")("aria-disabled", ctx.disabled);
        \u0275\u0275classProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      appearance: "appearance",
      name: "name",
      vertical: [2, "vertical", "vertical", booleanAttribute],
      value: "value",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      hideMultipleSelectionIndicator: [2, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      change: "change"
    },
    exportAs: ["matButtonToggleGroup"],
    features: [\u0275\u0275ProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
      provide: MAT_BUTTON_TOGGLE_GROUP,
      useExisting: _MatButtonToggleGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "class": "mat-button-toggle-group",
        "(keydown)": "_keydown($event)",
        "[attr.role]": "multiple ? 'group' : 'radiogroup'",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup"
    }]
  }], () => [], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatButtonToggle = class _MatButtonToggle {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _idGenerator = inject(_IdGenerator);
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _checked = false;
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel;
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** Underlying native `button` element. */
  _buttonElement;
  /** The parent button toggle group (exclusive selection). Optional. */
  buttonToggleGroup;
  /** Unique ID for the underlying `button` element. */
  get buttonId() {
    return `${this.id}-button`;
  }
  /** The unique ID for this button toggle. */
  id;
  /** HTML's 'name' attribute used to group radios for unique selection. */
  name;
  /** MatButtonToggleGroup reads this to assign its own value. */
  value;
  /** Tabindex of the toggle. */
  get tabIndex() {
    return this._tabIndex;
  }
  set tabIndex(value) {
    if (value !== this._tabIndex) {
      this._tabIndex = value;
      this._markForCheck();
    }
  }
  _tabIndex;
  /** Whether ripples are disabled on the button toggle. */
  disableRipple;
  /** The appearance style of the button. */
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  _appearance;
  /** Whether the button is checked. */
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  /** Whether the button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  /** Event emitted when the group value changes. */
  change = new EventEmitter();
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const toggleGroup = inject(MAT_BUTTON_TOGGLE_GROUP, {
      optional: true
    });
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    }) || "";
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this._tabIndex = parseInt(defaultTabIndex) || 0;
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.disabledInteractive = defaultOptions?.disabledInteractive ?? false;
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || this._idGenerator.getId("mat-button-toggle-");
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    if (this._animationMode !== "NoopAnimations") {
      this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled");
    }
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    if (this.disabled) {
      return;
    }
    const newChecked = this.isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    if (this.isSingleSelector()) {
      const focusable = this.buttonToggleGroup._buttonToggles.find((toggle) => {
        return toggle.tabIndex === 0;
      });
      if (focusable) {
        focusable.tabIndex = -1;
      }
      this.tabIndex = 0;
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */
  _getButtonName() {
    if (this.isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */
  isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
  static \u0275fac = function MatButtonToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatButtonToggle,
    selectors: [["mat-button-toggle"]],
    viewQuery: function MatButtonToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonElement = _t.first);
      }
    },
    hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
    hostVars: 14,
    hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatButtonToggle_focus_HostBindingHandler() {
          return ctx.focus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
        \u0275\u0275classProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-disabled-interactive", ctx.disabledInteractive)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      id: "id",
      name: "name",
      value: "value",
      tabIndex: "tabIndex",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      appearance: "appearance",
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matButtonToggle"],
    ngContentSelectors: _c1,
    decls: 7,
    vars: 13,
    consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-checkbox-wrapper"], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 3, "disabled"]],
    template: function MatButtonToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 1, 0);
        \u0275\u0275listener("click", function MatButtonToggle_Template_button_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onButtonClick());
        });
        \u0275\u0275template(2, MatButtonToggle_Conditional_2_Template, 2, 1, "div", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "span", 4)(6, "span", 5);
      }
      if (rf & 2) {
        const button_r3 = \u0275\u0275reference(1);
        \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled && !ctx.disabledInteractive || null);
        \u0275\u0275attribute("role", ctx.isSingleSelector() ? "radio" : "button")("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-pressed", !ctx.isSingleSelector() ? ctx.checked : null)("aria-checked", ctx.isSingleSelector() ? ctx.checked : null)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.buttonToggleGroup && (!ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator || ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator) ? 2 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
      }
    },
    dependencies: [MatRipple, MatPseudoCheckbox],
    styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-standard-button-toggle-background-color, transparent);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matButtonToggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-disabled-interactive]": "disabledInteractive",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      imports: [MatRipple, MatPseudoCheckbox],
      template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  @if (buttonToggleGroup && (
    !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator ||
    buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator)
  ) {
    <div class="mat-button-toggle-checkbox-wrapper">
      <mat-pseudo-checkbox
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"/>
    </div>
  }

  <span class="mat-button-toggle-label-content">
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="this.disableRipple || this.disabled">
</span>
`,
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-standard-button-toggle-background-color, transparent);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"]
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }]
  });
})();
var MatButtonToggleModule = class _MatButtonToggleModule {
  static \u0275fac = function MatButtonToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatButtonToggleModule,
    imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
    exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// src/app/features/admin/admin-mis-reports/mis-report-expiry-tab/mis-report-expiry-tab.component.ts
var _forTrack04 = ($index, $item) => $item.customerId;
function MisReportExpiryTabComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label")(2, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportExpiryTabComponent_Conditional_15_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.withinDays, $event) || (ctx_r1.withinDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function MisReportExpiryTabComponent_Conditional_15_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.apply());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " 30 days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label")(5, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportExpiryTabComponent_Conditional_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.withinDays, $event) || (ctx_r1.withinDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function MisReportExpiryTabComponent_Conditional_15_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.apply());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " 60 days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label")(8, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportExpiryTabComponent_Conditional_15_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.withinDays, $event) || (ctx_r1.withinDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function MisReportExpiryTabComponent_Conditional_15_Template_input_change_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.apply());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " 90 days");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.withinDays);
    \u0275\u0275property("value", 30);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.withinDays);
    \u0275\u0275property("value", 60);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.withinDays);
    \u0275\u0275property("value", 90);
  }
}
function MisReportExpiryTabComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 7);
  }
}
function MisReportExpiryTabComponent_For_41_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const r_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.customerId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.mobileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.label(r_r3.consentStatus));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.consentValidUntil || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.lastConsentInviteSentAt ? \u0275\u0275pipeBind2(15, 9, r_r3.lastConsentInviteSentAt, "medium") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_17_0 = r_r3.daysUntilExpiry) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.vipFlag ? "Yes" : "No");
  }
}
function MisReportExpiryTabComponent_ForEmpty_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No rows.");
  }
}
var MisReportExpiryTabComponent = class _MisReportExpiryTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.mode = "EXPIRING";
    this.withinDays = 30;
    this.rows = signal([]);
    this.loading = signal(false);
    this.exporting = signal(false);
    this.totalPages = signal(0);
    this.currentPage = signal(0);
    this.pageSize = 10;
  }
  ngOnInit() {
    this.load(0);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  load(page) {
    this.loading.set(true);
    this.adminApi.getMisExpiryReport({ type: this.mode, withinDays: this.withinDays, page, size: this.pageSize }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.rows.set(res.data.content);
          this.totalPages.set(res.data.totalPages);
          this.currentPage.set(res.data.currentPage);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.logger.error("MisExpiry", "load", err);
        this.notify.error("Expiry", err?.error?.message || "Load failed.");
      }
    });
  }
  apply() {
    this.load(0);
  }
  prev() {
    const p = this.currentPage();
    if (p > 0)
      this.load(p - 1);
  }
  next() {
    const p = this.currentPage();
    if (p < this.totalPages() - 1)
      this.load(p + 1);
  }
  label(s) {
    return customerConsentRecordStatusLabel(s);
  }
  dl(blob, n) {
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = n;
    a.click();
    URL.revokeObjectURL(u);
  }
  exportCsv() {
    this.exporting.set(true);
    this.adminApi.exportMisExpiryCsv(this.mode, this.withinDays).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "expiry-report.csv");
        this.notify.success("Export", "CSV started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  exportExcel() {
    this.exporting.set(true);
    this.adminApi.exportMisExpiryExcel(this.mode, this.withinDays).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "expiry-report.xlsx");
        this.notify.success("Export", "Excel started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function MisReportExpiryTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportExpiryTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportExpiryTabComponent, selectors: [["app-mis-report-expiry-tab"]], decls: 51, vars: 10, consts: [[1, "tab-toolbar"], [1, "exports"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "mode-toggle", 3, "ngModelChange", "change", "ngModel"], ["value", "EXPIRING"], ["value", "EXPIRED"], [1, "radio-row"], ["mode", "indeterminate"], [1, "table-wrap"], [1, "data-table"], [1, "pager"], ["type", "radio", "name", "wd", 3, "ngModelChange", "change", "ngModel", "value"], ["colspan", "9", 1, "empty"]], template: function MisReportExpiryTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function MisReportExpiryTabComponent_Template_button_click_2_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 2);
        \u0275\u0275listener("click", function MisReportExpiryTabComponent_Template_button_click_6_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "mat-button-toggle-group", 3);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportExpiryTabComponent_Template_mat_button_toggle_group_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event);
          return $event;
        });
        \u0275\u0275listener("change", function MisReportExpiryTabComponent_Template_mat_button_toggle_group_change_10_listener() {
          return ctx.apply();
        });
        \u0275\u0275elementStart(11, "mat-button-toggle", 4);
        \u0275\u0275text(12, "Expiring soon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-button-toggle", 5);
        \u0275\u0275text(14, "Expired");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(15, MisReportExpiryTabComponent_Conditional_15_Template, 10, 6, "div", 6)(16, MisReportExpiryTabComponent_Conditional_16_Template, 1, 0, "mat-progress-bar", 7);
        \u0275\u0275elementStart(17, "div", 8)(18, "table", 9)(19, "thead")(20, "tr")(21, "th");
        \u0275\u0275text(22, "Customer ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th");
        \u0275\u0275text(24, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "Mobile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th");
        \u0275\u0275text(28, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "Valid until");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Last invite");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Days until expiry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "VIP");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody");
        \u0275\u0275repeaterCreate(40, MisReportExpiryTabComponent_For_41_Template, 20, 12, "tr", null, _forTrack04, false, MisReportExpiryTabComponent_ForEmpty_42_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 10)(44, "span");
        \u0275\u0275text(45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div")(47, "button", 2);
        \u0275\u0275listener("click", function MisReportExpiryTabComponent_Template_button_click_47_listener() {
          return ctx.prev();
        });
        \u0275\u0275text(48, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 2);
        \u0275\u0275listener("click", function MisReportExpiryTabComponent_Template_button_click_49_listener() {
          return ctx.next();
        });
        \u0275\u0275text(50, "Next");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.mode);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.mode === "EXPIRING" ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 16 : -1);
        \u0275\u0275advance(24);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("Page ", ctx.currentPage() + 1, " / ", ctx.totalPages() || 1, "");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() <= 0 || ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages() - 1 || ctx.loading());
      }
    }, dependencies: [DatePipe, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatIconModule, MatIcon, MatProgressBarModule, MatProgressBar], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: var(--space-3);\n}\n.exports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.mode-toggle[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n}\n.radio-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  margin-bottom: var(--space-3);\n  font-size: var(--text-14);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  max-height: 55vh;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: var(--input-bg-disabled);\n  z-index: 1;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--input-border-color);\n  white-space: nowrap;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-8);\n  color: var(--sidebar-text-muted);\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--space-4);\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n/*# sourceMappingURL=mis-report-expiry-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportExpiryTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-expiry-tab", standalone: true, imports: [DatePipe, FormsModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatProgressBarModule], template: `<div class="tab-toolbar">\r
  <div class="exports">\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportCsv()">\r
      <mat-icon>download</mat-icon> CSV\r
    </button>\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportExcel()">\r
      <mat-icon>table_chart</mat-icon> Excel\r
    </button>\r
  </div>\r
</div>\r
\r
<mat-button-toggle-group [(ngModel)]="mode" (change)="apply()" class="mode-toggle">\r
  <mat-button-toggle value="EXPIRING">Expiring soon</mat-button-toggle>\r
  <mat-button-toggle value="EXPIRED">Expired</mat-button-toggle>\r
</mat-button-toggle-group>\r
\r
@if (mode === 'EXPIRING') {\r
  <div class="radio-row">\r
    <label><input type="radio" name="wd" [(ngModel)]="withinDays" [value]="30" (change)="apply()" /> 30 days</label>\r
    <label><input type="radio" name="wd" [(ngModel)]="withinDays" [value]="60" (change)="apply()" /> 60 days</label>\r
    <label><input type="radio" name="wd" [(ngModel)]="withinDays" [value]="90" (change)="apply()" /> 90 days</label>\r
  </div>\r
}\r
\r
@if (loading()) {\r
  <mat-progress-bar mode="indeterminate" />\r
}\r
\r
<div class="table-wrap">\r
  <table class="data-table">\r
    <thead>\r
      <tr>\r
        <th>Customer ID</th>\r
        <th>Name</th>\r
        <th>Mobile</th>\r
        <th>Email</th>\r
        <th>Status</th>\r
        <th>Valid until</th>\r
        <th>Last invite</th>\r
        <th>Days until expiry</th>\r
        <th>VIP</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      @for (r of rows(); track r.customerId) {\r
        <tr>\r
          <td>{{ r.customerId }}</td>\r
          <td>{{ r.customerName }}</td>\r
          <td>{{ r.mobileNumber }}</td>\r
          <td>{{ r.email || '\u2014' }}</td>\r
          <td>{{ label(r.consentStatus) }}</td>\r
          <td>{{ r.consentValidUntil || '\u2014' }}</td>\r
          <td>{{ r.lastConsentInviteSentAt ? (r.lastConsentInviteSentAt | date: 'medium') : '\u2014' }}</td>\r
          <td>{{ r.daysUntilExpiry ?? '\u2014' }}</td>\r
          <td>{{ r.vipFlag ? 'Yes' : 'No' }}</td>\r
        </tr>\r
      } @empty {\r
        <tr>\r
          <td colspan="9" class="empty">{{ loading() ? 'Loading\u2026' : 'No rows.' }}</td>\r
        </tr>\r
      }\r
    </tbody>\r
  </table>\r
</div>\r
\r
<div class="pager">\r
  <span>Page {{ currentPage() + 1 }} / {{ totalPages() || 1 }}</span>\r
  <div>\r
    <button mat-stroked-button type="button" [disabled]="currentPage() <= 0 || loading()" (click)="prev()">Previous</button>\r
    <button mat-stroked-button type="button" [disabled]="currentPage() >= totalPages() - 1 || loading()" (click)="next()">Next</button>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-expiry-tab/mis-report-expiry-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: var(--space-3);\n}\n.exports {\n  display: flex;\n  gap: var(--space-2);\n}\n.mode-toggle {\n  margin-bottom: var(--space-3);\n}\n.radio-row {\n  display: flex;\n  gap: var(--space-4);\n  margin-bottom: var(--space-3);\n  font-size: var(--text-14);\n}\n.table-wrap {\n  overflow: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  max-height: 55vh;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n}\n.data-table thead th {\n  position: sticky;\n  top: 0;\n  background: var(--input-bg-disabled);\n  z-index: 1;\n}\n.data-table th,\n.data-table td {\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--input-border-color);\n  white-space: nowrap;\n}\n.empty {\n  text-align: center;\n  padding: var(--space-8);\n  color: var(--sidebar-text-muted);\n}\n.pager {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--space-4);\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n/*# sourceMappingURL=mis-report-expiry-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportExpiryTabComponent, { className: "MisReportExpiryTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-expiry-tab/mis-report-expiry-tab.component.ts", lineNumber: 24 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-revocation-tab/mis-report-revocation-tab.component.ts
var _forTrack05 = ($index, $item) => $item.period;
var _forTrack12 = ($index, $item) => $item.customerId;
function MisReportRevocationTabComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.barHeight(p_r1.count), "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.period);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.count);
  }
}
function MisReportRevocationTabComponent_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "No revocation trend data.");
    \u0275\u0275elementEnd();
  }
}
function MisReportRevocationTabComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 16);
  }
}
function MisReportRevocationTabComponent_For_61_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.customerId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.mobileNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.label(r_r3.consentStatus));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.lastConsentResponseAt ? \u0275\u0275pipeBind2(13, 8, r_r3.lastConsentResponseAt, "medium") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.reEngagementEligibleAfter ? \u0275\u0275pipeBind2(16, 11, r_r3.reEngagementEligibleAfter, "medium") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.vipFlag ? "Yes" : "No");
  }
}
function MisReportRevocationTabComponent_ForEmpty_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No rows.");
  }
}
var MisReportRevocationTabComponent = class _MisReportRevocationTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.series = signal([]);
    this.rows = signal([]);
    this.loading = signal(false);
    this.exporting = signal(false);
    this.totalPages = signal(0);
    this.currentPage = signal(0);
    this.pageSize = 10;
    this.from = "";
    this.to = "";
    this.vipFilter = "";
    this.chartMax = computed(() => this.series().reduce((m, p) => Math.max(m, p.count), 1));
  }
  ngOnInit() {
    this.adminApi.getMisRevocationTrend().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res.success && res.data)
          this.series.set(res.data.series);
      },
      error: (e) => this.logger.error("MisRevocation", "trend", e)
    });
    this.load(0);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  isoStart(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T00:00:00")).toISOString() : void 0;
  }
  isoEnd(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T23:59:59")).toISOString() : void 0;
  }
  vipBool() {
    if (this.vipFilter === "true")
      return true;
    if (this.vipFilter === "false")
      return false;
    return void 0;
  }
  load(page) {
    this.loading.set(true);
    this.adminApi.getMisRevocationReport({
      page,
      size: this.pageSize,
      fromDate: this.isoStart(this.from),
      toDate: this.isoEnd(this.to),
      vip: this.vipBool()
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.rows.set(res.data.content);
          this.totalPages.set(res.data.totalPages);
          this.currentPage.set(res.data.currentPage);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notify.error("Revocation", err?.error?.message || "Load failed.");
      }
    });
  }
  apply() {
    this.load(0);
  }
  prev() {
    const p = this.currentPage();
    if (p > 0)
      this.load(p - 1);
  }
  next() {
    const p = this.currentPage();
    if (p < this.totalPages() - 1)
      this.load(p + 1);
  }
  label(s) {
    return customerConsentRecordStatusLabel(s);
  }
  barHeight(c) {
    const m = this.chartMax();
    if (m === 0)
      return 0;
    return Math.round(c / m * 120);
  }
  dl(blob, n) {
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = n;
    a.click();
    URL.revokeObjectURL(u);
  }
  exportCsv() {
    this.exporting.set(true);
    this.adminApi.exportMisRevocationCsv({ fromDate: this.isoStart(this.from), toDate: this.isoEnd(this.to), vip: this.vipBool() }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "revocation-report.csv");
        this.notify.success("Export", "CSV started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  exportExcel() {
    this.exporting.set(true);
    this.adminApi.exportMisRevocationExcel({ fromDate: this.isoStart(this.from), toDate: this.isoEnd(this.to), vip: this.vipBool() }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "revocation-report.xlsx");
        this.notify.success("Export", "Excel started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function MisReportRevocationTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportRevocationTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportRevocationTabComponent, selectors: [["app-mis-report-revocation-tab"]], decls: 71, vars: 12, consts: [[1, "chart-panel"], [1, "bar-chart"], [1, "bar-col"], [1, "empty", "dashed"], [1, "tab-toolbar"], [1, "exports"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "filters"], [1, "ff-date"], ["type", "date", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "ff"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "true"], ["value", "false"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mode", "indeterminate"], [1, "table-wrap"], [1, "data-table"], [1, "pager"], [1, "bar"], [1, "bar-label"], [1, "bar-count"], ["colspan", "8", 1, "empty"]], template: function MisReportRevocationTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h3");
        \u0275\u0275text(2, "Revocations by month (last 12 months)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275repeaterCreate(4, MisReportRevocationTabComponent_For_5_Template, 6, 4, "div", 2, _forTrack05, false, MisReportRevocationTabComponent_ForEmpty_6_Template, 2, 0, "div", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function MisReportRevocationTabComponent_Template_button_click_9_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275elementStart(10, "mat-icon");
        \u0275\u0275text(11, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 6);
        \u0275\u0275listener("click", function MisReportRevocationTabComponent_Template_button_click_13_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(14, "mat-icon");
        \u0275\u0275text(15, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 7)(18, "label", 8)(19, "span");
        \u0275\u0275text(20, "Last response from");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportRevocationTabComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.from, $event) || (ctx.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "label", 8)(23, "span");
        \u0275\u0275text(24, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportRevocationTabComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.to, $event) || (ctx.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "mat-form-field", 10)(27, "mat-label");
        \u0275\u0275text(28, "VIP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportRevocationTabComponent_Template_mat_select_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.vipFilter, $event) || (ctx.vipFilter = $event);
          return $event;
        });
        \u0275\u0275elementStart(30, "mat-option", 12);
        \u0275\u0275text(31, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-option", 13);
        \u0275\u0275text(33, "VIP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 14);
        \u0275\u0275text(35, "Non-VIP");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "button", 15);
        \u0275\u0275listener("click", function MisReportRevocationTabComponent_Template_button_click_36_listener() {
          return ctx.apply();
        });
        \u0275\u0275text(37, "Apply");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, MisReportRevocationTabComponent_Conditional_38_Template, 1, 0, "mat-progress-bar", 16);
        \u0275\u0275elementStart(39, "div", 17)(40, "table", 18)(41, "thead")(42, "tr")(43, "th");
        \u0275\u0275text(44, "Customer ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Mobile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Last response");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Re-engage after");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th");
        \u0275\u0275text(58, "VIP");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "tbody");
        \u0275\u0275repeaterCreate(60, MisReportRevocationTabComponent_For_61_Template, 19, 14, "tr", null, _forTrack12, false, MisReportRevocationTabComponent_ForEmpty_62_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 19)(64, "span");
        \u0275\u0275text(65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div")(67, "button", 6);
        \u0275\u0275listener("click", function MisReportRevocationTabComponent_Template_button_click_67_listener() {
          return ctx.prev();
        });
        \u0275\u0275text(68, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "button", 6);
        \u0275\u0275listener("click", function MisReportRevocationTabComponent_Template_button_click_69_listener() {
          return ctx.next();
        });
        \u0275\u0275text(70, "Next");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.series());
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.to);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.vipFilter);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.loading() ? 38 : -1);
        \u0275\u0275advance(22);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("Page ", ctx.currentPage() + 1, " / ", ctx.totalPages() || 1, "");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() <= 0 || ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages() - 1 || ctx.loading());
      }
    }, dependencies: [
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatIconModule,
      MatIcon,
      MatProgressBarModule,
      MatProgressBar
    ], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.chart-panel[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n  padding: var(--space-5);\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  background: var(--card-bg);\n}\n.chart-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-14);\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--input-text-color);\n  margin: 0 0 var(--space-4);\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  min-height: 140px;\n  overflow-x: auto;\n  padding-bottom: var(--space-2);\n}\n.bar-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  min-width: 38px;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 20px;\n  background: var(--color-error);\n  border-radius: 4px 4px 0 0;\n  min-height: 3px;\n  transition: opacity 0.15s ease;\n}\n.bar[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--sidebar-text-muted);\n  transform: rotate(-45deg);\n  white-space: nowrap;\n  line-height: 1;\n}\n.bar-count[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-6);\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n}\n.empty.dashed[_ngcontent-%COMP%] {\n  border: 1px dashed var(--input-border-color);\n  border-radius: 10px;\n  width: 100%;\n  padding: var(--space-8);\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin: var(--space-3) 0;\n}\n.exports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.exports[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-12);\n  font-weight: 500;\n  height: 32px;\n  padding: 0 12px;\n  border-radius: 6px;\n  border-color: var(--input-border-color);\n  color: var(--sidebar-text-muted);\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.exports[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.exports[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  color: var(--input-text-color);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-3);\n}\n.filters[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n  font-weight: 500;\n  height: 34px;\n  padding: 0 16px;\n  border-radius: 6px;\n  border-color: var(--input-border-color);\n  color: var(--input-text-color);\n  transition: background 0.15s ease;\n}\n.filters[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover {\n  background: var(--input-bg-disabled);\n}\n.ff-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ff-date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  line-height: 1;\n}\n.ff-date[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n  color: var(--input-text-color);\n  background: var(--input-bg, #fff);\n  border: 1px solid var(--input-border-color);\n  border-radius: 6px;\n  padding: 0 10px;\n  height: 34px;\n  outline: none;\n  transition: border-color 0.15s ease;\n}\n.ff-date[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n}\n.ff[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.ff[_ngcontent-%COMP%]     .mat-mdc-form-field-infix {\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  min-height: unset;\n}\n.ff[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  border-radius: 6px !important;\n}\n.ff[_ngcontent-%COMP%]     .mdc-notched-outline__leading {\n  border-radius: 6px 0 0 6px !important;\n}\n.ff[_ngcontent-%COMP%]     .mdc-notched-outline__trailing {\n  border-radius: 0 6px 6px 0 !important;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n  border-radius: 2px;\n  height: 2px !important;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  max-height: 50vh;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--input-bg-disabled);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: var(--input-bg-disabled);\n  padding: 9px 12px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 0.5px solid var(--input-border-color);\n  color: var(--input-text-color);\n  white-space: nowrap;\n  vertical-align: middle;\n  transition: background 0.15s ease;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  font-family: "DM Mono", monospace;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  font-weight: 500;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--input-bg-disabled);\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: var(--space-3);\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  flex-wrap: wrap;\n  gap: var(--space-2);\n}\n.pager[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.pager[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-12);\n  font-weight: 500;\n  height: 30px;\n  padding: 0 12px;\n  border-radius: 6px;\n  border-color: var(--input-border-color);\n  color: var(--input-text-color);\n  transition: background 0.15s ease;\n}\n.pager[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n}\n.pager[_ngcontent-%COMP%]   button[mat-stroked-button][disabled][_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-revocation-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportRevocationTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-revocation-tab", standalone: true, imports: [
      DatePipe,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatProgressBarModule
    ], template: `<section class="chart-panel">\r
  <h3>Revocations by month (last 12 months)</h3>\r
  <div class="bar-chart">\r
    @for (p of series(); track p.period) {\r
      <div class="bar-col">\r
        <div class="bar" [style.height.px]="barHeight(p.count)"></div>\r
        <span class="bar-label">{{ p.period }}</span>\r
        <span class="bar-count">{{ p.count }}</span>\r
      </div>\r
    } @empty {\r
      <div class="empty dashed">No revocation trend data.</div>\r
    }\r
  </div>\r
</section>\r
\r
<div class="tab-toolbar">\r
  <div class="exports">\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportCsv()">\r
      <mat-icon>download</mat-icon> CSV\r
    </button>\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportExcel()">\r
      <mat-icon>table_chart</mat-icon> Excel\r
    </button>\r
  </div>\r
</div>\r
\r
<div class="filters">\r
  <label class="ff-date"><span>Last response from</span><input type="date" [(ngModel)]="from" /></label>\r
  <label class="ff-date"><span>To</span><input type="date" [(ngModel)]="to" /></label>\r
  <mat-form-field appearance="outline" class="ff">\r
    <mat-label>VIP</mat-label>\r
    <mat-select [(ngModel)]="vipFilter">\r
      <mat-option value="">All</mat-option>\r
      <mat-option value="true">VIP</mat-option>\r
      <mat-option value="false">Non-VIP</mat-option>\r
    </mat-select>\r
  </mat-form-field>\r
  <button mat-stroked-button type="button" (click)="apply()">Apply</button>\r
</div>\r
\r
@if (loading()) {\r
  <mat-progress-bar mode="indeterminate" />\r
}\r
\r
<div class="table-wrap">\r
  <table class="data-table">\r
    <thead>\r
      <tr>\r
        <th>Customer ID</th>\r
        <th>Name</th>\r
        <th>Mobile</th>\r
        <th>Email</th>\r
        <th>Status</th>\r
        <th>Last response</th>\r
        <th>Re-engage after</th>\r
        <th>VIP</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      @for (r of rows(); track r.customerId) {\r
        <tr>\r
          <td>{{ r.customerId }}</td>\r
          <td>{{ r.customerName }}</td>\r
          <td>{{ r.mobileNumber }}</td>\r
          <td>{{ r.email || '\u2014' }}</td>\r
          <td>{{ label(r.consentStatus) }}</td>\r
          <td>{{ r.lastConsentResponseAt ? (r.lastConsentResponseAt | date: 'medium') : '\u2014' }}</td>\r
          <td>{{ r.reEngagementEligibleAfter ? (r.reEngagementEligibleAfter | date: 'medium') : '\u2014' }}</td>\r
          <td>{{ r.vipFlag ? 'Yes' : 'No' }}</td>\r
        </tr>\r
      } @empty {\r
        <tr>\r
          <td colspan="8" class="empty">{{ loading() ? 'Loading\u2026' : 'No rows.' }}</td>\r
        </tr>\r
      }\r
    </tbody>\r
  </table>\r
</div>\r
\r
<div class="pager">\r
  <span>Page {{ currentPage() + 1 }} / {{ totalPages() || 1 }}</span>\r
  <div>\r
    <button mat-stroked-button type="button" [disabled]="currentPage() <= 0 || loading()" (click)="prev()">Previous</button>\r
    <button mat-stroked-button type="button" [disabled]="currentPage() >= totalPages() - 1 || loading()" (click)="next()">Next</button>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-revocation-tab/mis-report-revocation-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.chart-panel {\n  margin-bottom: var(--space-4);\n  padding: var(--space-5);\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  background: var(--card-bg);\n}\n.chart-panel h3 {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-14);\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--input-text-color);\n  margin: 0 0 var(--space-4);\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  min-height: 140px;\n  overflow-x: auto;\n  padding-bottom: var(--space-2);\n}\n.bar-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  min-width: 38px;\n}\n.bar {\n  width: 20px;\n  background: var(--color-error);\n  border-radius: 4px 4px 0 0;\n  min-height: 3px;\n  transition: opacity 0.15s ease;\n}\n.bar:hover {\n  opacity: 0.75;\n}\n.bar-label {\n  font-size: 10px;\n  color: var(--sidebar-text-muted);\n  transform: rotate(-45deg);\n  white-space: nowrap;\n  line-height: 1;\n}\n.bar-count {\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.empty {\n  text-align: center;\n  padding: var(--space-6);\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n}\n.empty.dashed {\n  border: 1px dashed var(--input-border-color);\n  border-radius: 10px;\n  width: 100%;\n  padding: var(--space-8);\n}\n.tab-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  margin: var(--space-3) 0;\n}\n.exports {\n  display: flex;\n  gap: var(--space-2);\n}\n.exports button[mat-stroked-button] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-12);\n  font-weight: 500;\n  height: 32px;\n  padding: 0 12px;\n  border-radius: 6px;\n  border-color: var(--input-border-color);\n  color: var(--sidebar-text-muted);\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.exports button[mat-stroked-button] mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.exports button[mat-stroked-button]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  color: var(--input-text-color);\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-3);\n}\n.filters button[mat-stroked-button] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n  font-weight: 500;\n  height: 34px;\n  padding: 0 16px;\n  border-radius: 6px;\n  border-color: var(--input-border-color);\n  color: var(--input-text-color);\n  transition: background 0.15s ease;\n}\n.filters button[mat-stroked-button]:hover {\n  background: var(--input-bg-disabled);\n}\n.ff-date {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ff-date span {\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  line-height: 1;\n}\n.ff-date input {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n  color: var(--input-text-color);\n  background: var(--input-bg, #fff);\n  border: 1px solid var(--input-border-color);\n  border-radius: 6px;\n  padding: 0 10px;\n  height: 34px;\n  outline: none;\n  transition: border-color 0.15s ease;\n}\n.ff-date input:focus {\n  border-color: var(--color-primary);\n}\n.ff {\n  min-width: 140px;\n}\n.ff ::ng-deep .mat-mdc-form-field-infix {\n  padding-top: 7px !important;\n  padding-bottom: 7px !important;\n  min-height: unset;\n}\n.ff ::ng-deep .mat-mdc-text-field-wrapper {\n  border-radius: 6px !important;\n}\n.ff ::ng-deep .mdc-notched-outline__leading {\n  border-radius: 6px 0 0 6px !important;\n}\n.ff ::ng-deep .mdc-notched-outline__trailing {\n  border-radius: 0 6px 6px 0 !important;\n}\nmat-progress-bar {\n  margin-bottom: var(--space-2);\n  border-radius: 2px;\n  height: 2px !important;\n}\n.table-wrap {\n  overflow: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  max-height: 50vh;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n}\n.data-table thead tr {\n  background: var(--input-bg-disabled);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table th {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: var(--input-bg-disabled);\n  padding: 9px 12px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table td {\n  padding: 10px 12px;\n  border-bottom: 0.5px solid var(--input-border-color);\n  color: var(--input-text-color);\n  white-space: nowrap;\n  vertical-align: middle;\n  transition: background 0.15s ease;\n}\n.data-table td:first-child {\n  font-family: "DM Mono", monospace;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.data-table td:nth-child(2) {\n  font-weight: 500;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table tbody tr:hover td {\n  background: var(--input-bg-disabled);\n}\n.pager {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: var(--space-3);\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  flex-wrap: wrap;\n  gap: var(--space-2);\n}\n.pager div {\n  display: flex;\n  gap: var(--space-2);\n}\n.pager button[mat-stroked-button] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-12);\n  font-weight: 500;\n  height: 30px;\n  padding: 0 12px;\n  border-radius: 6px;\n  border-color: var(--input-border-color);\n  color: var(--input-text-color);\n  transition: background 0.15s ease;\n}\n.pager button[mat-stroked-button]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n}\n.pager button[mat-stroked-button][disabled] {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-revocation-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportRevocationTabComponent, { className: "MisReportRevocationTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-revocation-tab/mis-report-revocation-tab.component.ts", lineNumber: 36 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-compliance-tab/mis-report-compliance-tab.component.ts
var _forTrack06 = ($index, $item) => $item.id;
function MisReportComplianceTabComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "article", 28)(2, "div", 29);
    \u0275\u0275text(3, "Active consent (compliant)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "article", 31)(7, "div", 29);
    \u0275\u0275text(8, "Missing / no invite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "article", 32)(12, "div", 29);
    \u0275\u0275text(13, "Expired consent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "article", 33)(17, "div", 29);
    \u0275\u0275text(18, "Compliance %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 30);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r1 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r1.totalCustomersWithActiveConsent);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r1.customersMissingConsent);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r1.customersWithExpiredConsent);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 4, o_r1.compliancePercent, "1.0-1"), "%");
  }
}
function MisReportComplianceTabComponent_For_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275property("value", a_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2);
  }
}
function MisReportComplianceTabComponent_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 26);
  }
}
function MisReportComplianceTabComponent_For_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, r_r4.performedAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.entityType || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.entityName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.description || "\u2014");
  }
}
function MisReportComplianceTabComponent_ForEmpty_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading() ? "Loading\u2026" : "No rows.");
  }
}
var MisReportComplianceTabComponent = class _MisReportComplianceTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.userLoginNote = "USER_LOGIN is not emitted to audit_logs today. Add an audit call on successful authentication to enable this filter.";
    this.overview = signal(null);
    this.auditRows = signal([]);
    this.actions = signal([]);
    this.loading = signal(false);
    this.exporting = signal(false);
    this.totalPages = signal(0);
    this.currentPage = signal(0);
    this.pageSize = 12;
    this.filterLoginOnly = false;
    this.filterConsentEntity = false;
    this.filterAdminActor = false;
    this.filterWorkflow = false;
    this.entityType = "";
    this.action = "";
    this.from = "";
    this.to = "";
    this.performedBy = "";
  }
  ngOnInit() {
    this.adminApi.getMisComplianceOverview().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.overview.set(res.data);
        }
      },
      error: (e) => this.logger.error("MisCompliance", "overview", e)
    });
    this.adminApi.getMisAuditActions().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.actions.set(res.data);
        }
      },
      error: (e) => this.logger.error("MisCompliance", "actions", e)
    });
    this.load(0);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  iso(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T00:00:00")).toISOString() : void 0;
  }
  isoEnd(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T23:59:59")).toISOString() : void 0;
  }
  load(page) {
    this.loading.set(true);
    const et = this.filterConsentEntity ? "CONSENT" : this.entityType || void 0;
    const ac = this.filterLoginOnly ? "USER_LOGIN" : this.action || void 0;
    this.adminApi.getMisAuditReport({
      page,
      size: this.pageSize,
      entityType: et,
      action: ac,
      fromDate: this.iso(this.from),
      toDate: this.isoEnd(this.to),
      performedBy: this.performedBy.trim() || void 0,
      workflowActionsOnly: this.filterWorkflow || void 0,
      adminActorOnly: this.filterAdminActor || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.auditRows.set(res.data.content);
          this.totalPages.set(res.data.totalPages);
          this.currentPage.set(res.data.currentPage);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notify.error("Compliance audit", err?.error?.message || "Load failed.");
      }
    });
  }
  apply() {
    this.load(0);
  }
  prev() {
    const p = this.currentPage();
    if (p > 0) {
      this.load(p - 1);
    }
  }
  next() {
    const p = this.currentPage();
    if (p < this.totalPages() - 1) {
      this.load(p + 1);
    }
  }
  dl(blob, n) {
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = n;
    a.click();
    URL.revokeObjectURL(u);
  }
  exportCsv() {
    this.exporting.set(true);
    const et = this.filterConsentEntity ? "CONSENT" : this.entityType || void 0;
    const ac = this.filterLoginOnly ? "USER_LOGIN" : this.action || void 0;
    this.adminApi.exportMisAuditCsv({
      entityType: et,
      action: ac,
      fromDate: this.iso(this.from),
      toDate: this.isoEnd(this.to),
      performedBy: this.performedBy.trim() || void 0,
      workflowActionsOnly: this.filterWorkflow || void 0,
      adminActorOnly: this.filterAdminActor || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "compliance-audit.csv");
        this.notify.success("Export", "CSV started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  exportExcel() {
    this.exporting.set(true);
    const et = this.filterConsentEntity ? "CONSENT" : this.entityType || void 0;
    const ac = this.filterLoginOnly ? "USER_LOGIN" : this.action || void 0;
    this.adminApi.exportMisAuditExcel({
      entityType: et,
      action: ac,
      fromDate: this.iso(this.from),
      toDate: this.isoEnd(this.to),
      performedBy: this.performedBy.trim() || void 0,
      workflowActionsOnly: this.filterWorkflow || void 0,
      adminActorOnly: this.filterAdminActor || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "compliance-audit.xlsx");
        this.notify.success("Export", "Excel started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function MisReportComplianceTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportComplianceTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportComplianceTabComponent, selectors: [["app-mis-report-compliance-tab"]], decls: 142, vars: 21, consts: [[1, "kpi-row"], [1, "panel"], [1, "muted"], [1, "table-wrap"], [1, "data-table"], [1, "panel", "placeholder-card"], [1, "ph-icon"], [1, "tab-toolbar"], [1, "exports"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "muted", "small"], [1, "checks"], [3, "ngModelChange", "change", "ngModel"], [1, "filters"], ["appearance", "outline", 1, "ff"], [3, "ngModelChange", "ngModel", "disabled"], ["value", ""], ["value", "CONSENT"], ["value", "BROADCAST_REQUEST"], ["value", "CONSENT_RULE"], [3, "value"], [1, "ff-date"], ["type", "date", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "ff-grow"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mode", "indeterminate"], [1, "pager"], [1, "kpi-card", "kpi-card--good"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-card", "kpi-card--warn"], [1, "kpi-card"], [1, "kpi-card", "kpi-card--accent"], [1, "desc"], ["colspan", "6", 1, "empty"]], template: function MisReportComplianceTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MisReportComplianceTabComponent_Conditional_0_Template, 22, 7, "section", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "h2");
        \u0275\u0275text(3, "Evidence fields (GDPR / DPDP readiness)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, " IP address, device details, and geo-location are not stored on Customer or AuditLog in the current schema. Columns below are placeholders until a migration adds those fields. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3)(7, "table", 4)(8, "thead")(9, "tr")(10, "th");
        \u0275\u0275text(11, "Field");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Value");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "tbody")(15, "tr")(16, "td");
        \u0275\u0275text(17, "IP at capture");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "td");
        \u0275\u0275text(19, "\u2014");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "tr")(21, "td");
        \u0275\u0275text(22, "Device / UA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "td");
        \u0275\u0275text(24, "\u2014");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "tr")(26, "td");
        \u0275\u0275text(27, "Geo-location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "td");
        \u0275\u0275text(29, "\u2014");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(30, "section", 5)(31, "mat-icon", 6);
        \u0275\u0275text(32, "shield");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "h3");
        \u0275\u0275text(34, "Unauthorized data usage alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 2);
        \u0275\u0275text(36, "Coming soon \u2014 requires dedicated audit event types and correlation rules not yet implemented.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "section", 5)(38, "mat-icon", 6);
        \u0275\u0275text(39, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h3");
        \u0275\u0275text(41, "Data access permission report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 2);
        \u0275\u0275text(43, " The system does not yet record who accessed customer PII, when, for what purpose, or third-party sharing. See the ");
        \u0275\u0275elementStart(44, "code");
        \u0275\u0275text(45, "data_access_logs");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " migration sketch in the component TypeScript file. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "section", 1)(48, "div", 7)(49, "h2");
        \u0275\u0275text(50, "Audit trail (extended filters)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 8)(52, "button", 9);
        \u0275\u0275listener("click", function MisReportComplianceTabComponent_Template_button_click_52_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275elementStart(53, "mat-icon");
        \u0275\u0275text(54, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "button", 9);
        \u0275\u0275listener("click", function MisReportComplianceTabComponent_Template_button_click_56_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(57, "mat-icon");
        \u0275\u0275text(58, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "p", 10);
        \u0275\u0275text(61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 11)(63, "mat-checkbox", 12);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportComplianceTabComponent_Template_mat_checkbox_ngModelChange_63_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterLoginOnly, $event) || (ctx.filterLoginOnly = $event);
          return $event;
        });
        \u0275\u0275listener("change", function MisReportComplianceTabComponent_Template_mat_checkbox_change_63_listener() {
          return ctx.apply();
        });
        \u0275\u0275text(64, "User login (USER_LOGIN)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "mat-checkbox", 12);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportComplianceTabComponent_Template_mat_checkbox_ngModelChange_65_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterConsentEntity, $event) || (ctx.filterConsentEntity = $event);
          return $event;
        });
        \u0275\u0275listener("change", function MisReportComplianceTabComponent_Template_mat_checkbox_change_65_listener() {
          return ctx.apply();
        });
        \u0275\u0275text(66, "Consent changes (entity CONSENT)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-checkbox", 12);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportComplianceTabComponent_Template_mat_checkbox_ngModelChange_67_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterAdminActor, $event) || (ctx.filterAdminActor = $event);
          return $event;
        });
        \u0275\u0275listener("change", function MisReportComplianceTabComponent_Template_mat_checkbox_change_67_listener() {
          return ctx.apply();
        });
        \u0275\u0275text(68, "Admin actor only");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "mat-checkbox", 12);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportComplianceTabComponent_Template_mat_checkbox_ngModelChange_69_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterWorkflow, $event) || (ctx.filterWorkflow = $event);
          return $event;
        });
        \u0275\u0275listener("change", function MisReportComplianceTabComponent_Template_mat_checkbox_change_69_listener() {
          return ctx.apply();
        });
        \u0275\u0275text(70, "Workflow keywords (APPROVED / REJECTED / REVISION)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 13)(72, "mat-form-field", 14)(73, "mat-label");
        \u0275\u0275text(74, "Entity type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "mat-select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportComplianceTabComponent_Template_mat_select_ngModelChange_75_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.entityType, $event) || (ctx.entityType = $event);
          return $event;
        });
        \u0275\u0275elementStart(76, "mat-option", 16);
        \u0275\u0275text(77, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "mat-option", 17);
        \u0275\u0275text(79, "CONSENT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "mat-option", 18);
        \u0275\u0275text(81, "BROADCAST_REQUEST");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-option", 19);
        \u0275\u0275text(83, "CONSENT_RULE");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "mat-form-field", 14)(85, "mat-label");
        \u0275\u0275text(86, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "mat-select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportComplianceTabComponent_Template_mat_select_ngModelChange_87_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.action, $event) || (ctx.action = $event);
          return $event;
        });
        \u0275\u0275elementStart(88, "mat-option", 16);
        \u0275\u0275text(89, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(90, MisReportComplianceTabComponent_For_91_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "label", 21)(93, "span");
        \u0275\u0275text(94, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportComplianceTabComponent_Template_input_ngModelChange_95_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.from, $event) || (ctx.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "label", 21)(97, "span");
        \u0275\u0275text(98, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportComplianceTabComponent_Template_input_ngModelChange_99_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.to, $event) || (ctx.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "mat-form-field", 23)(101, "mat-label");
        \u0275\u0275text(102, "Performed by contains");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportComplianceTabComponent_Template_input_ngModelChange_103_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.performedBy, $event) || (ctx.performedBy = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "button", 25);
        \u0275\u0275listener("click", function MisReportComplianceTabComponent_Template_button_click_104_listener() {
          return ctx.apply();
        });
        \u0275\u0275text(105, "Apply");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(106, MisReportComplianceTabComponent_Conditional_106_Template, 1, 0, "mat-progress-bar", 26);
        \u0275\u0275elementStart(107, "div", 3)(108, "table", 4)(109, "thead")(110, "tr")(111, "th");
        \u0275\u0275text(112, "Timestamp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "th");
        \u0275\u0275text(114, "Entity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "th");
        \u0275\u0275text(116, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "th");
        \u0275\u0275text(118, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "th");
        \u0275\u0275text(120, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "th");
        \u0275\u0275text(122, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(123, "tbody");
        \u0275\u0275repeaterCreate(124, MisReportComplianceTabComponent_For_125_Template, 14, 9, "tr", null, _forTrack06, false, MisReportComplianceTabComponent_ForEmpty_126_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(127, "div", 27)(128, "span");
        \u0275\u0275text(129);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "div")(131, "button", 9);
        \u0275\u0275listener("click", function MisReportComplianceTabComponent_Template_button_click_131_listener() {
          return ctx.prev();
        });
        \u0275\u0275text(132, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "button", 9);
        \u0275\u0275listener("click", function MisReportComplianceTabComponent_Template_button_click_133_listener() {
          return ctx.next();
        });
        \u0275\u0275text(134, "Next");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(135, "section", 5)(136, "mat-icon", 6);
        \u0275\u0275text(137, "http");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "h3");
        \u0275\u0275text(139, "API transaction logs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "p", 2);
        \u0275\u0275text(141, " Detailed per-request/response logging is not wired. A separate gateway or servlet filter with persistence would be required. ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.overview()) ? 0 : -1, tmp_0_0);
        \u0275\u0275advance(52);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.userLoginNote);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterLoginOnly);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterConsentEntity);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterAdminActor);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterWorkflow);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.entityType);
        \u0275\u0275property("disabled", ctx.filterConsentEntity);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.action);
        \u0275\u0275property("disabled", ctx.filterLoginOnly);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.actions());
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.to);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.performedBy);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 106 : -1);
        \u0275\u0275advance(18);
        \u0275\u0275repeater(ctx.auditRows());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("Page ", ctx.currentPage() + 1, " / ", ctx.totalPages() || 1, "");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() <= 0 || ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages() - 1 || ctx.loading());
      }
    }, dependencies: [
      DatePipe,
      DecimalPipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatCheckboxModule,
      MatCheckbox,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatIconModule,
      MatIcon,
      MatProgressBarModule,
      MatProgressBar
    ], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(172px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-6);\n}\n.kpi-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--card-bg);\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  padding: var(--space-5) var(--space-4) var(--space-4);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.kpi-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--input-border-color);\n  border-radius: 14px 14px 0 0;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.kpi-card--good[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n}\n.kpi-card--good[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.kpi-card--warn[_ngcontent-%COMP%] {\n  background: var(--color-warning-light);\n  border-color: var(--color-warning-border);\n}\n.kpi-card--warn[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #fbbf24);\n}\n.kpi-card--warn[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.kpi-card--accent[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #818cf8);\n}\n.kpi-card--accent[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: var(--sidebar-text-muted);\n  text-transform: uppercase;\n  margin-bottom: var(--space-2);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  color: var(--input-text-color);\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n.panel[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n  padding: var(--space-5) var(--space-6);\n  border: 1px solid var(--input-border-color);\n  border-radius: 16px;\n  background: var(--card-bg);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 20px rgba(0, 0, 0, 0.03);\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--input-text-color);\n  letter-spacing: -0.01em;\n}\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: var(--space-3) 0 var(--space-2);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--input-text-color);\n  letter-spacing: -0.01em;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-14);\n  line-height: 1.6;\n}\n.muted.small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  letter-spacing: 0.01em;\n}\n.placeholder-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-10) var(--space-8);\n  border-style: dashed;\n  border-color: var(--input-border-color);\n  background: transparent;\n  box-shadow: none;\n}\n.placeholder-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: var(--space-3) 0 var(--space-2);\n  color: var(--sidebar-text-muted);\n  font-weight: 600;\n}\n.ph-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 52px;\n  height: 52px;\n  font-size: 26px;\n  color: var(--sidebar-text-muted);\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  margin-bottom: var(--space-1);\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n  padding-bottom: var(--space-4);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.exports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.exports[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 1px solid var(--input-border-color);\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n  cursor: pointer;\n}\n.exports[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.exports[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  border-color: rgba(99, 102, 241, 0.4);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.exports[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.checks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: var(--space-4);\n}\n.checks[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 6px 12px;\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  background: var(--input-bg-disabled);\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.checks[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.35);\n  background: rgba(99, 102, 241, 0.04);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n  padding: var(--space-4);\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  border-radius: 12px;\n}\n.ff[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.ff-grow[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.ff-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ff-date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n}\n.ff-date[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 13px;\n  color: var(--input-text-color);\n  background: var(--card-bg);\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  outline: none;\n}\n.ff-date[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(99, 102, 241, 0.5);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 48vh;\n  border: 1px solid var(--input-border-color);\n  border-radius: 12px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: var(--input-bg-disabled);\n  z-index: 1;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--input-border-color);\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 12px 0 0 0;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 12px 0 0;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.12s ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.03);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--input-border-color);\n  vertical-align: middle;\n  color: var(--input-text-color);\n  line-height: 1.4;\n}\n.desc[_ngcontent-%COMP%] {\n  max-width: 300px;\n  white-space: normal;\n  color: var(--sidebar-text-muted) !important;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-8) var(--space-6);\n  color: var(--sidebar-text-muted);\n  font-size: 14px;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: var(--space-4);\n  padding-top: var(--space-3);\n  border-top: 1px solid var(--input-border-color);\n  font-size: 13px;\n  color: var(--sidebar-text-muted);\n}\n.pager[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.pager[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 1px solid var(--input-border-color);\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.pager[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.pager[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-compliance-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportComplianceTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-compliance-tab", standalone: true, imports: [
      DatePipe,
      DecimalPipe,
      FormsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatProgressBarModule
    ], template: `@if (overview(); as o) {\r
  <section class="kpi-row">\r
    <article class="kpi-card kpi-card--good">\r
      <div class="kpi-label">Active consent (compliant)</div>\r
      <div class="kpi-value">{{ o.totalCustomersWithActiveConsent }}</div>\r
    </article>\r
    <article class="kpi-card kpi-card--warn">\r
      <div class="kpi-label">Missing / no invite</div>\r
      <div class="kpi-value">{{ o.customersMissingConsent }}</div>\r
    </article>\r
    <article class="kpi-card">\r
      <div class="kpi-label">Expired consent</div>\r
      <div class="kpi-value">{{ o.customersWithExpiredConsent }}</div>\r
    </article>\r
    <article class="kpi-card kpi-card--accent">\r
      <div class="kpi-label">Compliance %</div>\r
      <div class="kpi-value">{{ o.compliancePercent | number: '1.0-1' }}%</div>\r
    </article>\r
  </section>\r
}\r
\r
<section class="panel">\r
  <h2>Evidence fields (GDPR / DPDP readiness)</h2>\r
  <p class="muted">\r
    IP address, device details, and geo-location are not stored on Customer or AuditLog in the current schema. Columns\r
    below are placeholders until a migration adds those fields.\r
  </p>\r
  <div class="table-wrap">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>Field</th>\r
          <th>Value</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr>\r
          <td>IP at capture</td>\r
          <td>\u2014</td>\r
        </tr>\r
        <tr>\r
          <td>Device / UA</td>\r
          <td>\u2014</td>\r
        </tr>\r
        <tr>\r
          <td>Geo-location</td>\r
          <td>\u2014</td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
</section>\r
\r
<section class="panel placeholder-card">\r
  <mat-icon class="ph-icon">shield</mat-icon>\r
  <h3>Unauthorized data usage alerts</h3>\r
  <p class="muted">Coming soon \u2014 requires dedicated audit event types and correlation rules not yet implemented.</p>\r
</section>\r
\r
<section class="panel placeholder-card">\r
  <mat-icon class="ph-icon">lock</mat-icon>\r
  <h3>Data access permission report</h3>\r
  <p class="muted">\r
    The system does not yet record who accessed customer PII, when, for what purpose, or third-party sharing. See the\r
    <code>data_access_logs</code> migration sketch in the component TypeScript file.\r
  </p>\r
</section>\r
\r
<section class="panel">\r
  <div class="tab-toolbar">\r
    <h2>Audit trail (extended filters)</h2>\r
    <div class="exports">\r
      <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportCsv()">\r
        <mat-icon>download</mat-icon> CSV\r
      </button>\r
      <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportExcel()">\r
        <mat-icon>table_chart</mat-icon> Excel\r
      </button>\r
    </div>\r
  </div>\r
  <p class="muted small">{{ userLoginNote }}</p>\r
  <div class="checks">\r
    <mat-checkbox [(ngModel)]="filterLoginOnly" (change)="apply()">User login (USER_LOGIN)</mat-checkbox>\r
    <mat-checkbox [(ngModel)]="filterConsentEntity" (change)="apply()">Consent changes (entity CONSENT)</mat-checkbox>\r
    <mat-checkbox [(ngModel)]="filterAdminActor" (change)="apply()">Admin actor only</mat-checkbox>\r
    <mat-checkbox [(ngModel)]="filterWorkflow" (change)="apply()">Workflow keywords (APPROVED / REJECTED / REVISION)</mat-checkbox>\r
  </div>\r
  <div class="filters">\r
    <mat-form-field appearance="outline" class="ff">\r
      <mat-label>Entity type</mat-label>\r
      <mat-select [(ngModel)]="entityType" [disabled]="filterConsentEntity">\r
        <mat-option value="">All</mat-option>\r
        <mat-option value="CONSENT">CONSENT</mat-option>\r
        <mat-option value="BROADCAST_REQUEST">BROADCAST_REQUEST</mat-option>\r
        <mat-option value="CONSENT_RULE">CONSENT_RULE</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="ff">\r
      <mat-label>Action</mat-label>\r
      <mat-select [(ngModel)]="action" [disabled]="filterLoginOnly">\r
        <mat-option value="">All</mat-option>\r
        @for (a of actions(); track a) {\r
          <mat-option [value]="a">{{ a }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
    <label class="ff-date"><span>From</span><input type="date" [(ngModel)]="from" /></label>\r
    <label class="ff-date"><span>To</span><input type="date" [(ngModel)]="to" /></label>\r
    <mat-form-field appearance="outline" class="ff-grow">\r
      <mat-label>Performed by contains</mat-label>\r
      <input matInput [(ngModel)]="performedBy" />\r
    </mat-form-field>\r
    <button mat-stroked-button type="button" (click)="apply()">Apply</button>\r
  </div>\r
  @if (loading()) {\r
    <mat-progress-bar mode="indeterminate" />\r
  }\r
  <div class="table-wrap">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>Timestamp</th>\r
          <th>Entity</th>\r
          <th>Name</th>\r
          <th>Action</th>\r
          <th>User</th>\r
          <th>Description</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (r of auditRows(); track r.id) {\r
          <tr>\r
            <td>{{ r.performedAt | date: 'medium' }}</td>\r
            <td>{{ r.entityType || '\u2014' }}</td>\r
            <td>{{ r.entityName || '\u2014' }}</td>\r
            <td>{{ r.action }}</td>\r
            <td>{{ r.userName }}</td>\r
            <td class="desc">{{ r.description || '\u2014' }}</td>\r
          </tr>\r
        } @empty {\r
          <tr>\r
            <td colspan="6" class="empty">{{ loading() ? 'Loading\u2026' : 'No rows.' }}</td>\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
  <div class="pager">\r
    <span>Page {{ currentPage() + 1 }} / {{ totalPages() || 1 }}</span>\r
    <div>\r
      <button mat-stroked-button type="button" [disabled]="currentPage() <= 0 || loading()" (click)="prev()">Previous</button>\r
      <button mat-stroked-button type="button" [disabled]="currentPage() >= totalPages() - 1 || loading()" (click)="next()">Next</button>\r
    </div>\r
  </div>\r
</section>\r
\r
<section class="panel placeholder-card">\r
  <mat-icon class="ph-icon">http</mat-icon>\r
  <h3>API transaction logs</h3>\r
  <p class="muted">\r
    Detailed per-request/response logging is not wired. A separate gateway or servlet filter with persistence would be\r
    required.\r
  </p>\r
</section>\r
`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-compliance-tab/mis-report-compliance-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(172px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-6);\n}\n.kpi-card {\n  position: relative;\n  background: var(--card-bg);\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  padding: var(--space-5) var(--space-4) var(--space-4);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.kpi-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--input-border-color);\n  border-radius: 14px 14px 0 0;\n}\n.kpi-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.kpi-card--good::before {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n}\n.kpi-card--good .kpi-value {\n  color: #059669;\n}\n.kpi-card--warn {\n  background: var(--color-warning-light);\n  border-color: var(--color-warning-border);\n}\n.kpi-card--warn::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #fbbf24);\n}\n.kpi-card--warn .kpi-value {\n  color: #d97706;\n}\n.kpi-card--accent::before {\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #818cf8);\n}\n.kpi-card--accent .kpi-value {\n  color: #4f46e5;\n}\n.kpi-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: var(--sidebar-text-muted);\n  text-transform: uppercase;\n  margin-bottom: var(--space-2);\n}\n.kpi-value {\n  font-size: 36px;\n  font-weight: 800;\n  color: var(--input-text-color);\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n.panel {\n  margin-bottom: var(--space-5);\n  padding: var(--space-5) var(--space-6);\n  border: 1px solid var(--input-border-color);\n  border-radius: 16px;\n  background: var(--card-bg);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 20px rgba(0, 0, 0, 0.03);\n}\n.panel h2 {\n  margin: 0 0 var(--space-1);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--input-text-color);\n  letter-spacing: -0.01em;\n}\n.panel h3 {\n  margin: var(--space-3) 0 var(--space-2);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--input-text-color);\n  letter-spacing: -0.01em;\n}\n.muted {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-14);\n  line-height: 1.6;\n}\n.muted.small {\n  font-size: 11px;\n  letter-spacing: 0.01em;\n}\n.placeholder-card {\n  text-align: center;\n  padding: var(--space-10) var(--space-8);\n  border-style: dashed;\n  border-color: var(--input-border-color);\n  background: transparent;\n  box-shadow: none;\n}\n.placeholder-card h3 {\n  margin: var(--space-3) 0 var(--space-2);\n  color: var(--sidebar-text-muted);\n  font-weight: 600;\n}\n.ph-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 52px;\n  height: 52px;\n  font-size: 26px;\n  color: var(--sidebar-text-muted);\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  margin-bottom: var(--space-1);\n}\n.tab-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n  padding-bottom: var(--space-4);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.exports {\n  display: flex;\n  gap: var(--space-2);\n}\n.exports button {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 1px solid var(--input-border-color);\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n  cursor: pointer;\n}\n.exports button mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.exports button:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  border-color: rgba(99, 102, 241, 0.4);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.exports button[disabled] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.checks {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: var(--space-4);\n}\n.checks mat-checkbox {\n  font-size: 13px;\n  padding: 6px 12px;\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  background: var(--input-bg-disabled);\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.checks mat-checkbox:hover {\n  border-color: rgba(99, 102, 241, 0.35);\n  background: rgba(99, 102, 241, 0.04);\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n  padding: var(--space-4);\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  border-radius: 12px;\n}\n.ff {\n  min-width: 160px;\n}\n.ff-grow {\n  flex: 1;\n  min-width: 200px;\n}\n.ff-date {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ff-date span {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n}\n.ff-date input {\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 13px;\n  color: var(--input-text-color);\n  background: var(--card-bg);\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  outline: none;\n}\n.ff-date input:focus {\n  border-color: rgba(99, 102, 241, 0.5);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.table-wrap {\n  overflow: auto;\n  max-height: 48vh;\n  border: 1px solid var(--input-border-color);\n  border-radius: 12px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table thead th {\n  position: sticky;\n  top: 0;\n  background: var(--input-bg-disabled);\n  z-index: 1;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--input-border-color);\n  white-space: nowrap;\n}\n.data-table thead th:first-child {\n  border-radius: 12px 0 0 0;\n}\n.data-table thead th:last-child {\n  border-radius: 0 12px 0 0;\n}\n.data-table tbody tr {\n  transition: background 0.12s ease;\n}\n.data-table tbody tr:hover {\n  background: rgba(99, 102, 241, 0.03);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table td {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--input-border-color);\n  vertical-align: middle;\n  color: var(--input-text-color);\n  line-height: 1.4;\n}\n.desc {\n  max-width: 300px;\n  white-space: normal;\n  color: var(--sidebar-text-muted) !important;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.empty {\n  text-align: center;\n  padding: var(--space-8) var(--space-6);\n  color: var(--sidebar-text-muted);\n  font-size: 14px;\n}\n.pager {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: var(--space-4);\n  padding-top: var(--space-3);\n  border-top: 1px solid var(--input-border-color);\n  font-size: 13px;\n  color: var(--sidebar-text-muted);\n}\n.pager div {\n  display: flex;\n  gap: var(--space-2);\n}\n.pager div button {\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 1px solid var(--input-border-color);\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.pager div button:hover:not([disabled]) {\n  background: var(--input-bg-disabled);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.pager div button[disabled] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-compliance-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportComplianceTabComponent, { className: "MisReportComplianceTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-compliance-tab/mis-report-compliance-tab.component.ts", lineNumber: 36 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-operational-tab/mis-report-operational-tab.component.ts
var _forTrack07 = ($index, $item) => $item.channel;
var _forTrack13 = ($index, $item) => $item.userId;
var _forTrack2 = ($index, $item) => $item.consentDbId;
function MisReportOperationalTabComponent_For_25_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.channel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.totalInvitesSent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.acceptedCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.declinedOrNoResponseCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 7, c_r1.successRatePercent, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 10, c_r1.dropOffPercent, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 13, c_r1.templateMixPercent, "1.0-1"), "%");
  }
}
function MisReportOperationalTabComponent_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "No channel data.");
    \u0275\u0275elementEnd()();
  }
}
function MisReportOperationalTabComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275element(4, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.channel);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.barWidth(c_r2.totalInvitesSent, ctx_r2.channels()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.totalInvitesSent);
  }
}
function MisReportOperationalTabComponent_For_57_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.totalConsentsCreated);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.pendingApprovals);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.approvedOrPublished);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.rejectedConsents);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 9, a_r4.averageProcessingHours, "1.0-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 12, a_r4.sla24hSubmitCompliancePercent, "1.0-1"), "%");
  }
}
function MisReportOperationalTabComponent_ForEmpty_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "No makers found.");
    \u0275\u0275elementEnd()();
  }
}
function MisReportOperationalTabComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 31)(2, "span");
    \u0275\u0275text(3, "Avg TAT (all)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "span");
    \u0275\u0275text(8, "Avg approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 31)(12, "span");
    \u0275\u0275text(13, "Avg rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 31)(17, "span");
    \u0275\u0275text(18, "Fastest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 31)(22, "span");
    \u0275\u0275text(23, "Slowest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const s_r5 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = s_r5.averageTatHoursOverall) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_3_0 = s_r5.averageTatHoursApproved) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_4_0 = s_r5.averageTatHoursRejected) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_5_0 = s_r5.fastestTatHours) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_6_0 = s_r5.slowestTatHours) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "\u2014");
  }
}
function MisReportOperationalTabComponent_For_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    \u0275\u0275property("value", m_r6.userId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r6.fullName);
  }
}
function MisReportOperationalTabComponent_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 23);
  }
}
function MisReportOperationalTabComponent_For_131_Template(rf, ctx) {
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
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const r_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.consentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.consentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, r_r7.createdAt, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.submittedAt ? \u0275\u0275pipeBind2(12, 11, r_r7.submittedAt, "short") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.reviewedAt ? \u0275\u0275pipeBind2(15, 14, r_r7.reviewedAt, "short") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_16_0 = r_r7.totalTatHours) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.creatorName || "\u2014");
  }
}
function MisReportOperationalTabComponent_ForEmpty_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading() ? "Loading\u2026" : "No rows.");
  }
}
var MisReportOperationalTabComponent = class _MisReportOperationalTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.channels = signal([]);
    this.agents = signal([]);
    this.tatRows = signal([]);
    this.tatSummary = signal(null);
    this.tatTotalPages = signal(0);
    this.tatPage = signal(0);
    this.loading = signal(false);
    this.exportingTat = signal(false);
    this.tatPageSize = 10;
    this.tatStatus = "";
    this.tatCreatorId = "";
    this.tatFrom = "";
    this.tatTo = "";
    this.creatorOptions = signal([]);
  }
  ngOnInit() {
    this.reloadChannels();
    this.reloadAgents();
    this.reloadCreators();
    this.loadTat(0);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  reloadChannels() {
    this.adminApi.getMisChannelPerformance().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.channels.set(res.data);
        }
      },
      error: (e) => this.logger.error("MisOp", "channels", e)
    });
  }
  reloadAgents() {
    this.adminApi.getMisAgentPerformance({ page: 0, size: 50 }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.agents.set(res.data.content);
        }
      },
      error: (e) => this.logger.error("MisOp", "agents", e)
    });
  }
  reloadCreators() {
    this.adminApi.getMisAgentPerformance({ page: 0, size: 200 }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.creatorOptions.set(res.data.content);
        }
      },
      error: (e) => this.logger.error("MisOp", "creators", e)
    });
  }
  isoStart(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T00:00:00")).toISOString() : void 0;
  }
  isoEnd(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T23:59:59")).toISOString() : void 0;
  }
  loadTat(page) {
    this.loading.set(true);
    this.adminApi.getMisTatReport({
      page,
      size: this.tatPageSize,
      fromDate: this.isoStart(this.tatFrom),
      toDate: this.isoEnd(this.tatTo),
      status: this.tatStatus || void 0,
      creatorId: this.tatCreatorId === "" ? void 0 : this.tatCreatorId
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.tatSummary.set(res.data.summary);
          this.tatRows.set(res.data.page.content);
          this.tatTotalPages.set(res.data.page.totalPages);
          this.tatPage.set(res.data.page.currentPage);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notify.error("TAT", err?.error?.message || "Load failed.");
      }
    });
  }
  applyTat() {
    this.loadTat(0);
  }
  prevTat() {
    const p = this.tatPage();
    if (p > 0) {
      this.loadTat(p - 1);
    }
  }
  nextTat() {
    const p = this.tatPage();
    if (p < this.tatTotalPages() - 1) {
      this.loadTat(p + 1);
    }
  }
  barWidth(v, list) {
    const m = list.reduce((x, r) => Math.max(x, r.totalInvitesSent), 1);
    const pct = m === 0 ? 0 : v / m * 100;
    return `${pct}%`;
  }
  dl(blob, n) {
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = n;
    a.click();
    URL.revokeObjectURL(u);
  }
  exportTatCsv() {
    this.exportingTat.set(true);
    this.adminApi.exportMisTatCsv({
      fromDate: this.isoStart(this.tatFrom),
      toDate: this.isoEnd(this.tatTo),
      status: this.tatStatus || void 0,
      creatorId: this.tatCreatorId === "" ? void 0 : this.tatCreatorId
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exportingTat.set(false);
        this.dl(b, "tat-report.csv");
        this.notify.success("Export", "CSV started.");
      },
      error: () => {
        this.exportingTat.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  exportTatExcel() {
    this.exportingTat.set(true);
    this.adminApi.exportMisTatExcel({
      fromDate: this.isoStart(this.tatFrom),
      toDate: this.isoEnd(this.tatTo),
      status: this.tatStatus || void 0,
      creatorId: this.tatCreatorId === "" ? void 0 : this.tatCreatorId
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exportingTat.set(false);
        this.dl(b, "tat-report.xlsx");
        this.notify.success("Export", "Excel started.");
      },
      error: () => {
        this.exportingTat.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function MisReportOperationalTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportOperationalTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportOperationalTabComponent, selectors: [["app-mis-report-operational-tab"]], decls: 141, vars: 15, consts: [[1, "panel"], [1, "muted"], [1, "horiz-scroll"], [1, "data-table"], [1, "hbar-wrap"], [1, "hbar-row"], [1, "tab-toolbar"], [1, "exports"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "summary-cards"], [1, "filters"], [1, "ff-date"], ["type", "date", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "ff"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "PENDING_APPROVAL"], ["value", "APPROVED"], ["value", "REJECTED"], ["value", "PUBLISHED"], ["value", "DRAFT"], [3, "value"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mode", "indeterminate"], [1, "pager"], ["colspan", "7", 1, "empty"], [1, "hbar-name"], [1, "hbar-track"], [1, "hbar-fill"], [1, "hbar-meta"], ["colspan", "9", 1, "empty"], [1, "sum-card"], ["colspan", "8", 1, "empty"]], template: function MisReportOperationalTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "Channel performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Invite metrics are derived from consent invite tokens; template mix reflects published templates.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "table", 3)(7, "thead")(8, "tr")(9, "th");
        \u0275\u0275text(10, "Channel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "th");
        \u0275\u0275text(12, "Invites");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Accepted");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Declined / no response");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Success %");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Drop-off %");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Template mix %");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "tbody");
        \u0275\u0275repeaterCreate(24, MisReportOperationalTabComponent_For_25_Template, 18, 16, "tr", null, _forTrack07, false, MisReportOperationalTabComponent_ForEmpty_26_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 4);
        \u0275\u0275repeaterCreate(28, MisReportOperationalTabComponent_For_29_Template, 7, 4, "div", 5, _forTrack07);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "section", 0)(31, "h2");
        \u0275\u0275text(32, "Maker performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 2)(34, "table", 3)(35, "thead")(36, "tr")(37, "th");
        \u0275\u0275text(38, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Created");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Approved/Published");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Rejected");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Avg submit (h)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "SLA 24h submit %");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "tbody");
        \u0275\u0275repeaterCreate(56, MisReportOperationalTabComponent_For_57_Template, 21, 15, "tr", null, _forTrack13, false, MisReportOperationalTabComponent_ForEmpty_58_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(59, "section", 0)(60, "div", 6)(61, "h2");
        \u0275\u0275text(62, "Turnaround time (consent workflow)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 7)(64, "button", 8);
        \u0275\u0275listener("click", function MisReportOperationalTabComponent_Template_button_click_64_listener() {
          return ctx.exportTatCsv();
        });
        \u0275\u0275elementStart(65, "mat-icon");
        \u0275\u0275text(66, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 8);
        \u0275\u0275listener("click", function MisReportOperationalTabComponent_Template_button_click_68_listener() {
          return ctx.exportTatExcel();
        });
        \u0275\u0275elementStart(69, "mat-icon");
        \u0275\u0275text(70, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(72, MisReportOperationalTabComponent_Conditional_72_Template, 26, 5, "div", 9);
        \u0275\u0275elementStart(73, "div", 10)(74, "label", 11)(75, "span");
        \u0275\u0275text(76, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportOperationalTabComponent_Template_input_ngModelChange_77_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.tatFrom, $event) || (ctx.tatFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "label", 11)(79, "span");
        \u0275\u0275text(80, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportOperationalTabComponent_Template_input_ngModelChange_81_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.tatTo, $event) || (ctx.tatTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "mat-form-field", 13)(83, "mat-label");
        \u0275\u0275text(84, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "mat-select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportOperationalTabComponent_Template_mat_select_ngModelChange_85_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.tatStatus, $event) || (ctx.tatStatus = $event);
          return $event;
        });
        \u0275\u0275elementStart(86, "mat-option", 15);
        \u0275\u0275text(87, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "mat-option", 16);
        \u0275\u0275text(89, "PENDING_APPROVAL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "mat-option", 17);
        \u0275\u0275text(91, "APPROVED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "mat-option", 18);
        \u0275\u0275text(93, "REJECTED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "mat-option", 19);
        \u0275\u0275text(95, "PUBLISHED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "mat-option", 20);
        \u0275\u0275text(97, "DRAFT");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "mat-form-field", 13)(99, "mat-label");
        \u0275\u0275text(100, "Creator");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "mat-select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportOperationalTabComponent_Template_mat_select_ngModelChange_101_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.tatCreatorId, $event) || (ctx.tatCreatorId = $event);
          return $event;
        });
        \u0275\u0275elementStart(102, "mat-option", 15);
        \u0275\u0275text(103, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(104, MisReportOperationalTabComponent_For_105_Template, 2, 2, "mat-option", 21, _forTrack13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "button", 22);
        \u0275\u0275listener("click", function MisReportOperationalTabComponent_Template_button_click_106_listener() {
          return ctx.applyTat();
        });
        \u0275\u0275text(107, "Apply");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(108, MisReportOperationalTabComponent_Conditional_108_Template, 1, 0, "mat-progress-bar", 23);
        \u0275\u0275elementStart(109, "div", 2)(110, "table", 3)(111, "thead")(112, "tr")(113, "th");
        \u0275\u0275text(114, "ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "th");
        \u0275\u0275text(116, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "th");
        \u0275\u0275text(118, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "th");
        \u0275\u0275text(120, "Created");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "th");
        \u0275\u0275text(122, "Submitted");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "th");
        \u0275\u0275text(124, "Reviewed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "th");
        \u0275\u0275text(126, "TAT (h)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "th");
        \u0275\u0275text(128, "Creator");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "tbody");
        \u0275\u0275repeaterCreate(130, MisReportOperationalTabComponent_For_131_Template, 20, 17, "tr", null, _forTrack2, false, MisReportOperationalTabComponent_ForEmpty_132_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(133, "div", 24)(134, "span");
        \u0275\u0275text(135);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div")(137, "button", 8);
        \u0275\u0275listener("click", function MisReportOperationalTabComponent_Template_button_click_137_listener() {
          return ctx.prevTat();
        });
        \u0275\u0275text(138, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "button", 8);
        \u0275\u0275listener("click", function MisReportOperationalTabComponent_Template_button_click_139_listener() {
          return ctx.nextTat();
        });
        \u0275\u0275text(140, "Next");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        \u0275\u0275advance(24);
        \u0275\u0275repeater(ctx.channels());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.channels());
        \u0275\u0275advance(28);
        \u0275\u0275repeater(ctx.agents());
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", ctx.exportingTat());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.exportingTat());
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_5_0 = ctx.tatSummary()) ? 72 : -1, tmp_5_0);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.tatFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.tatTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.tatStatus);
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.tatCreatorId);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.creatorOptions());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 108 : -1);
        \u0275\u0275advance(22);
        \u0275\u0275repeater(ctx.tatRows());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("Page ", ctx.tatPage() + 1, " / ", ctx.tatTotalPages() || 1, "");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.tatPage() <= 0 || ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.tatPage() >= ctx.tatTotalPages() - 1 || ctx.loading());
      }
    }, dependencies: [
      DatePipe,
      DecimalPipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatIconModule,
      MatIcon,
      MatProgressBarModule,
      MatProgressBar
    ], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n  padding: var(--space-5);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  background: var(--card-bg);\n  box-shadow: var(--card-shadow);\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n  font-size: var(--text-16);\n  color: var(--input-text-color);\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n  margin-bottom: var(--space-3);\n}\n.horiz-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n  min-width: 640px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: var(--input-bg-disabled);\n  z-index: 1;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--input-border-color);\n  text-align: left;\n  white-space: nowrap;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--sidebar-text-muted);\n  padding: var(--space-6);\n}\n.hbar-wrap[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.hbar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr 48px;\n  align-items: center;\n  gap: var(--space-2);\n}\n.hbar-name[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  font-weight: 600;\n}\n.hbar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.hbar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-info),\n      var(--color-primary));\n  border-radius: 999px;\n}\n.hbar-meta[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  text-align: right;\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.exports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.sum-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  padding: var(--space-3);\n  background: var(--input-bg-disabled);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.sum-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-18);\n  color: var(--input-text-color);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-3);\n}\n.ff[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.ff-date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.ff-date[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  padding: 8px;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--space-3);\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n/*# sourceMappingURL=mis-report-operational-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportOperationalTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-operational-tab", standalone: true, imports: [
      DatePipe,
      DecimalPipe,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatIconModule,
      MatProgressBarModule
    ], template: `<section class="panel">\r
  <h2>Channel performance</h2>\r
  <p class="muted">Invite metrics are derived from consent invite tokens; template mix reflects published templates.</p>\r
  <div class="horiz-scroll">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>Channel</th>\r
          <th>Invites</th>\r
          <th>Accepted</th>\r
          <th>Declined / no response</th>\r
          <th>Success %</th>\r
          <th>Drop-off %</th>\r
          <th>Template mix %</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (c of channels(); track c.channel) {\r
          <tr>\r
            <td>{{ c.channel }}</td>\r
            <td>{{ c.totalInvitesSent }}</td>\r
            <td>{{ c.acceptedCount }}</td>\r
            <td>{{ c.declinedOrNoResponseCount }}</td>\r
            <td>{{ c.successRatePercent | number: '1.0-1' }}%</td>\r
            <td>{{ c.dropOffPercent | number: '1.0-1' }}%</td>\r
            <td>{{ c.templateMixPercent | number: '1.0-1' }}%</td>\r
          </tr>\r
        } @empty {\r
          <tr>\r
            <td colspan="7" class="empty">No channel data.</td>\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
  <div class="hbar-wrap">\r
    @for (c of channels(); track c.channel) {\r
      <div class="hbar-row">\r
        <span class="hbar-name">{{ c.channel }}</span>\r
        <div class="hbar-track">\r
          <div class="hbar-fill" [style.width]="barWidth(c.totalInvitesSent, channels())"></div>\r
        </div>\r
        <span class="hbar-meta">{{ c.totalInvitesSent }}</span>\r
      </div>\r
    }\r
  </div>\r
</section>\r
\r
<section class="panel">\r
  <h2>Maker performance</h2>\r
  <div class="horiz-scroll">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>Name</th>\r
          <th>Email</th>\r
          <th>Role</th>\r
          <th>Created</th>\r
          <th>Pending</th>\r
          <th>Approved/Published</th>\r
          <th>Rejected</th>\r
          <th>Avg submit (h)</th>\r
          <th>SLA 24h submit %</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (a of agents(); track a.userId) {\r
          <tr>\r
            <td>{{ a.fullName }}</td>\r
            <td>{{ a.email }}</td>\r
            <td>{{ a.role }}</td>\r
            <td>{{ a.totalConsentsCreated }}</td>\r
            <td>{{ a.pendingApprovals }}</td>\r
            <td>{{ a.approvedOrPublished }}</td>\r
            <td>{{ a.rejectedConsents }}</td>\r
            <td>{{ a.averageProcessingHours | number: '1.0-1' }}</td>\r
            <td>{{ a.sla24hSubmitCompliancePercent | number: '1.0-1' }}%</td>\r
          </tr>\r
        } @empty {\r
          <tr>\r
            <td colspan="9" class="empty">No makers found.</td>\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
</section>\r
\r
<section class="panel">\r
  <div class="tab-toolbar">\r
    <h2>Turnaround time (consent workflow)</h2>\r
    <div class="exports">\r
      <button mat-stroked-button type="button" [disabled]="exportingTat()" (click)="exportTatCsv()">\r
        <mat-icon>download</mat-icon> CSV\r
      </button>\r
      <button mat-stroked-button type="button" [disabled]="exportingTat()" (click)="exportTatExcel()">\r
        <mat-icon>table_chart</mat-icon> Excel\r
      </button>\r
    </div>\r
  </div>\r
  @if (tatSummary(); as s) {\r
    <div class="summary-cards">\r
      <div class="sum-card"><span>Avg TAT (all)</span><strong>{{ s.averageTatHoursOverall ?? '\u2014' }}</strong></div>\r
      <div class="sum-card"><span>Avg approved</span><strong>{{ s.averageTatHoursApproved ?? '\u2014' }}</strong></div>\r
      <div class="sum-card"><span>Avg rejected</span><strong>{{ s.averageTatHoursRejected ?? '\u2014' }}</strong></div>\r
      <div class="sum-card"><span>Fastest</span><strong>{{ s.fastestTatHours ?? '\u2014' }}</strong></div>\r
      <div class="sum-card"><span>Slowest</span><strong>{{ s.slowestTatHours ?? '\u2014' }}</strong></div>\r
    </div>\r
  }\r
  <div class="filters">\r
    <label class="ff-date"><span>From</span><input type="date" [(ngModel)]="tatFrom" /></label>\r
    <label class="ff-date"><span>To</span><input type="date" [(ngModel)]="tatTo" /></label>\r
    <mat-form-field appearance="outline" class="ff">\r
      <mat-label>Status</mat-label>\r
      <mat-select [(ngModel)]="tatStatus">\r
        <mat-option value="">All</mat-option>\r
        <mat-option value="PENDING_APPROVAL">PENDING_APPROVAL</mat-option>\r
        <mat-option value="APPROVED">APPROVED</mat-option>\r
        <mat-option value="REJECTED">REJECTED</mat-option>\r
        <mat-option value="PUBLISHED">PUBLISHED</mat-option>\r
        <mat-option value="DRAFT">DRAFT</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="ff">\r
      <mat-label>Creator</mat-label>\r
      <mat-select [(ngModel)]="tatCreatorId">\r
        <mat-option value="">All</mat-option>\r
        @for (m of creatorOptions(); track m.userId) {\r
          <mat-option [value]="m.userId">{{ m.fullName }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
    <button mat-stroked-button type="button" (click)="applyTat()">Apply</button>\r
  </div>\r
  @if (loading()) {\r
    <mat-progress-bar mode="indeterminate" />\r
  }\r
  <div class="horiz-scroll">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>ID</th>\r
          <th>Name</th>\r
          <th>Status</th>\r
          <th>Created</th>\r
          <th>Submitted</th>\r
          <th>Reviewed</th>\r
          <th>TAT (h)</th>\r
          <th>Creator</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (r of tatRows(); track r.consentDbId) {\r
          <tr>\r
            <td>{{ r.consentId }}</td>\r
            <td>{{ r.consentName }}</td>\r
            <td>{{ r.status }}</td>\r
            <td>{{ r.createdAt | date: 'short' }}</td>\r
            <td>{{ r.submittedAt ? (r.submittedAt | date: 'short') : '\u2014' }}</td>\r
            <td>{{ r.reviewedAt ? (r.reviewedAt | date: 'short') : '\u2014' }}</td>\r
            <td>{{ r.totalTatHours ?? '\u2014' }}</td>\r
            <td>{{ r.creatorName || '\u2014' }}</td>\r
          </tr>\r
        } @empty {\r
          <tr>\r
            <td colspan="8" class="empty">{{ loading() ? 'Loading\u2026' : 'No rows.' }}</td>\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
  <div class="pager">\r
    <span>Page {{ tatPage() + 1 }} / {{ tatTotalPages() || 1 }}</span>\r
    <div>\r
      <button mat-stroked-button type="button" [disabled]="tatPage() <= 0 || loading()" (click)="prevTat()">Previous</button>\r
      <button mat-stroked-button type="button" [disabled]="tatPage() >= tatTotalPages() - 1 || loading()" (click)="nextTat()">Next</button>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-operational-tab/mis-report-operational-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel {\n  margin-bottom: var(--space-5);\n  padding: var(--space-5);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  background: var(--card-bg);\n  box-shadow: var(--card-shadow);\n}\n.panel h2 {\n  margin: 0 0 var(--space-2);\n  font-size: var(--text-16);\n  color: var(--input-text-color);\n}\n.muted {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n  margin-bottom: var(--space-3);\n}\n.horiz-scroll {\n  overflow-x: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n  min-width: 640px;\n}\n.data-table thead th {\n  position: sticky;\n  top: 0;\n  background: var(--input-bg-disabled);\n  z-index: 1;\n}\n.data-table th,\n.data-table td {\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--input-border-color);\n  text-align: left;\n  white-space: nowrap;\n}\n.empty {\n  text-align: center;\n  color: var(--sidebar-text-muted);\n  padding: var(--space-6);\n}\n.hbar-wrap {\n  margin-top: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.hbar-row {\n  display: grid;\n  grid-template-columns: 120px 1fr 48px;\n  align-items: center;\n  gap: var(--space-2);\n}\n.hbar-name {\n  font-size: var(--text-13);\n  font-weight: 600;\n}\n.hbar-track {\n  height: 10px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.hbar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-info),\n      var(--color-primary));\n  border-radius: 999px;\n}\n.hbar-meta {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  text-align: right;\n}\n.tab-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.exports {\n  display: flex;\n  gap: var(--space-2);\n}\n.summary-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.sum-card {\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  padding: var(--space-3);\n  background: var(--input-bg-disabled);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.sum-card strong {\n  font-size: var(--text-18);\n  color: var(--input-text-color);\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-3);\n}\n.ff {\n  min-width: 160px;\n}\n.ff-date span {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.ff-date input {\n  margin-top: 4px;\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  padding: 8px;\n}\n.pager {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--space-3);\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n/*# sourceMappingURL=mis-report-operational-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportOperationalTabComponent, { className: "MisReportOperationalTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-operational-tab/mis-report-operational-tab.component.ts", lineNumber: 37 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-scheduled-tab/mis-report-scheduled-tab.component.ts
var _forTrack08 = ($index, $item) => $item.id;
function MisReportScheduledTabComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("value", r_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1);
  }
}
function MisReportScheduledTabComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 6)(1, "mat-label");
    \u0275\u0275text(2, "Day of week (0=Sun)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportScheduledTabComponent_Conditional_22_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.dayOfWeek, $event) || (ctx_r2.dayOfWeek = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.dayOfWeek);
  }
}
function MisReportScheduledTabComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 6)(1, "mat-label");
    \u0275\u0275text(2, "Day of month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportScheduledTabComponent_Conditional_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.dayOfMonth, $event) || (ctx_r2.dayOfMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.dayOfMonth);
  }
}
function MisReportScheduledTabComponent_For_57_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.reportType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.frequency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.recipients);
  }
}
var MisReportScheduledTabComponent = class _MisReportScheduledTabComponent {
  constructor() {
    this.notify = inject(NotificationService);
    this.reportTypes = [
      "Executive dashboard",
      "Customer consent report",
      "Consent audit report",
      "Expiry report",
      "Revocation report",
      "Compliance overview",
      "Channel performance",
      "Maker performance",
      "TAT report"
    ];
    this.reportType = this.reportTypes[0];
    this.frequency = "WEEKLY";
    this.dayOfWeek = 1;
    this.dayOfMonth = 1;
    this.recipients = "";
    this.format = "CSV";
    this.mockSchedules = signal([
      {
        id: "mock-1",
        reportType: "Executive dashboard",
        frequency: "WEEKLY",
        recipients: "compliance@example.com"
      },
      {
        id: "mock-2",
        reportType: "Customer consent report",
        frequency: "MONTHLY",
        recipients: "risk@example.com, ops@example.com"
      }
    ]);
  }
  save() {
    const emails = this.recipients.split(",").map((s) => s.trim()).filter(Boolean);
    const invalid = emails.some((e) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e));
    if (emails.length === 0 || invalid) {
      this.notify.warning("Schedule", "Enter valid comma-separated email addresses.");
      return;
    }
    this.notify.info("Scheduled reports", "Scheduled reports coming soon");
  }
  static {
    this.\u0275fac = function MisReportScheduledTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportScheduledTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportScheduledTabComponent, selectors: [["app-mis-report-scheduled-tab"]], decls: 58, vars: 6, consts: [[1, "panel"], [1, "muted"], [1, "form-grid"], ["appearance", "outline", 1, "full"], [3, "ngModelChange", "ngModel"], [3, "value"], ["appearance", "outline"], ["value", "DAILY"], ["value", "WEEKLY"], ["value", "MONTHLY"], ["matInput", "", "placeholder", "a@x.com, b@y.com", 3, "ngModelChange", "ngModel"], ["value", "CSV"], ["value", "EXCEL"], ["value", "PDF"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "table-wrap"], [1, "data-table"], ["matInput", "", "type", "number", "min", "0", "max", "6", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "number", "min", "1", "max", "28", 3, "ngModelChange", "ngModel"]], template: function MisReportScheduledTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "Schedule email delivery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "UI only \u2014 schedules are not persisted yet.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "mat-form-field", 3)(7, "mat-label");
        \u0275\u0275text(8, "Report type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-select", 4);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportScheduledTabComponent_Template_mat_select_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.reportType, $event) || (ctx.reportType = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(10, MisReportScheduledTabComponent_For_11_Template, 2, 2, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "mat-form-field", 6)(13, "mat-label");
        \u0275\u0275text(14, "Frequency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-select", 4);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportScheduledTabComponent_Template_mat_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.frequency, $event) || (ctx.frequency = $event);
          return $event;
        });
        \u0275\u0275elementStart(16, "mat-option", 7);
        \u0275\u0275text(17, "Daily");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-option", 8);
        \u0275\u0275text(19, "Weekly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-option", 9);
        \u0275\u0275text(21, "Monthly");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(22, MisReportScheduledTabComponent_Conditional_22_Template, 4, 1, "mat-form-field", 6)(23, MisReportScheduledTabComponent_Conditional_23_Template, 4, 1, "mat-form-field", 6);
        \u0275\u0275elementStart(24, "mat-form-field", 3)(25, "mat-label");
        \u0275\u0275text(26, "Recipient emails (comma-separated)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportScheduledTabComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.recipients, $event) || (ctx.recipients = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "mat-form-field", 6)(29, "mat-label");
        \u0275\u0275text(30, "Format");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-select", 4);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportScheduledTabComponent_Template_mat_select_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.format, $event) || (ctx.format = $event);
          return $event;
        });
        \u0275\u0275elementStart(32, "mat-option", 11);
        \u0275\u0275text(33, "CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 12);
        \u0275\u0275text(35, "Excel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 13);
        \u0275\u0275text(37, "PDF (server not configured)");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "button", 14);
        \u0275\u0275listener("click", function MisReportScheduledTabComponent_Template_button_click_38_listener() {
          return ctx.save();
        });
        \u0275\u0275text(39, "Save schedule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "section", 0)(41, "h2");
        \u0275\u0275text(42, "Saved schedules (placeholder)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 15)(44, "table", 16)(45, "thead")(46, "tr")(47, "th");
        \u0275\u0275text(48, "ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Frequency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Recipients");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "tbody");
        \u0275\u0275repeaterCreate(56, MisReportScheduledTabComponent_For_57_Template, 9, 4, "tr", null, _forTrack08);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.reportType);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.reportTypes);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.frequency);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.frequency === "WEEKLY" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.frequency === "MONTHLY" ? 23 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.recipients);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.format);
        \u0275\u0275advance(25);
        \u0275\u0275repeater(ctx.mockSchedules());
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, MatButtonModule, MatButton, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n  padding: var(--space-5);\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  background: var(--card-bg);\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-15);\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--input-text-color);\n  margin: 0 0 var(--space-1);\n}\n.muted[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  margin: 0 0 var(--space-4);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  --mdc-outlined-text-field-container-shape: 6px;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-infix {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  min-height: unset;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  border-radius: 6px !important;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mdc-notched-outline__leading {\n  border-radius: 6px 0 0 6px !important;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mdc-notched-outline__trailing {\n  border-radius: 0 6px 6px 0 !important;\n}\n.panel[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n  font-weight: 500;\n  height: 36px;\n  padding: 0 20px;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--input-bg-disabled);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-bottom: 0.5px solid var(--input-border-color);\n  color: var(--input-text-color);\n  vertical-align: middle;\n  white-space: nowrap;\n  transition: background 0.15s ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--input-bg-disabled);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  font-family: "DM Mono", monospace;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  font-weight: 500;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: var(--color-info);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n[_nghost-%COMP%]     .form-grid .mat-mdc-form-field {\n}\n[_nghost-%COMP%]     .form-grid .mat-mdc-form-field .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n[_nghost-%COMP%]     .form-grid .mat-mdc-form-field .mdc-floating-label {\n  border-right: none !important;\n}\n[_nghost-%COMP%]     .form-grid .mat-mdc-form-field .mdc-notched-outline__leading, \n[_nghost-%COMP%]     .form-grid .mat-mdc-form-field .mdc-notched-outline__trailing {\n  border-right-width: 1px !important;\n  border-left-width: 1px !important;\n}\n/*# sourceMappingURL=mis-report-scheduled-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportScheduledTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-scheduled-tab", standalone: true, imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule], template: `<section class="panel">\r
  <h2>Schedule email delivery</h2>\r
  <p class="muted">UI only \u2014 schedules are not persisted yet.</p>\r
  <div class="form-grid">\r
    <mat-form-field appearance="outline" class="full">\r
      <mat-label>Report type</mat-label>\r
      <mat-select [(ngModel)]="reportType">\r
        @for (r of reportTypes; track r) {\r
          <mat-option [value]="r">{{ r }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Frequency</mat-label>\r
      <mat-select [(ngModel)]="frequency">\r
        <mat-option value="DAILY">Daily</mat-option>\r
        <mat-option value="WEEKLY">Weekly</mat-option>\r
        <mat-option value="MONTHLY">Monthly</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
    @if (frequency === 'WEEKLY') {\r
      <mat-form-field appearance="outline">\r
        <mat-label>Day of week (0=Sun)</mat-label>\r
        <input matInput type="number" min="0" max="6" [(ngModel)]="dayOfWeek" />\r
      </mat-form-field>\r
    }\r
    @if (frequency === 'MONTHLY') {\r
      <mat-form-field appearance="outline">\r
        <mat-label>Day of month</mat-label>\r
        <input matInput type="number" min="1" max="28" [(ngModel)]="dayOfMonth" />\r
      </mat-form-field>\r
    }\r
    <mat-form-field appearance="outline" class="full">\r
      <mat-label>Recipient emails (comma-separated)</mat-label>\r
      <input matInput [(ngModel)]="recipients" placeholder="a@x.com, b@y.com" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline">\r
      <mat-label>Format</mat-label>\r
      <mat-select [(ngModel)]="format">\r
        <mat-option value="CSV">CSV</mat-option>\r
        <mat-option value="EXCEL">Excel</mat-option>\r
        <mat-option value="PDF">PDF (server not configured)</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
  </div>\r
  <button mat-flat-button color="primary" type="button" (click)="save()">Save schedule</button>\r
</section>\r
\r
<section class="panel">\r
  <h2>Saved schedules (placeholder)</h2>\r
  <div class="table-wrap">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>ID</th>\r
          <th>Report</th>\r
          <th>Frequency</th>\r
          <th>Recipients</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (s of mockSchedules(); track s.id) {\r
          <tr>\r
            <td>{{ s.id }}</td>\r
            <td>{{ s.reportType }}</td>\r
            <td>{{ s.frequency }}</td>\r
            <td>{{ s.recipients }}</td>\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-scheduled-tab/mis-report-scheduled-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel {\n  margin-bottom: var(--space-4);\n  padding: var(--space-5);\n  border: 1px solid var(--input-border-color);\n  border-radius: 14px;\n  background: var(--card-bg);\n}\n.panel h2 {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-15);\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--input-text-color);\n  margin: 0 0 var(--space-1);\n}\n.muted {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  margin: 0 0 var(--space-4);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.full {\n  grid-column: 1/-1;\n}\n.form-grid mat-form-field {\n  --mdc-outlined-text-field-container-shape: 6px;\n}\n.form-grid mat-form-field ::ng-deep .mat-mdc-form-field-infix {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  min-height: unset;\n}\n.form-grid mat-form-field ::ng-deep .mat-mdc-text-field-wrapper {\n  border-radius: 6px !important;\n}\n.form-grid mat-form-field ::ng-deep .mdc-notched-outline__leading {\n  border-radius: 6px 0 0 6px !important;\n}\n.form-grid mat-form-field ::ng-deep .mdc-notched-outline__trailing {\n  border-radius: 0 6px 6px 0 !important;\n}\n.panel button[mat-flat-button] {\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n  font-weight: 500;\n  height: 36px;\n  padding: 0 20px;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n}\n.table-wrap {\n  overflow-x: auto;\n  border: 1px solid var(--input-border-color);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: "DM Sans", sans-serif;\n  font-size: var(--text-13);\n}\n.data-table thead tr {\n  background: var(--input-bg-disabled);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table th {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--sidebar-text-muted);\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table td {\n  padding: 11px 14px;\n  border-bottom: 0.5px solid var(--input-border-color);\n  color: var(--input-text-color);\n  vertical-align: middle;\n  white-space: nowrap;\n  transition: background 0.15s ease;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table tbody tr:hover td {\n  background: var(--input-bg-disabled);\n}\n.data-table td:first-child {\n  font-family: "DM Mono", monospace;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.data-table td:nth-child(2) {\n  font-weight: 500;\n}\n.data-table td:nth-child(3) {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: var(--color-info);\n}\n.data-table td:last-child {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n:host ::ng-deep .form-grid .mat-mdc-form-field {\n}\n:host ::ng-deep .form-grid .mat-mdc-form-field .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n:host ::ng-deep .form-grid .mat-mdc-form-field .mdc-floating-label {\n  border-right: none !important;\n}\n:host ::ng-deep .form-grid .mat-mdc-form-field .mdc-notched-outline__leading,\n:host ::ng-deep .form-grid .mat-mdc-form-field .mdc-notched-outline__trailing {\n  border-right-width: 1px !important;\n  border-left-width: 1px !important;\n}\n/*# sourceMappingURL=mis-report-scheduled-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportScheduledTabComponent, { className: "MisReportScheduledTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-scheduled-tab/mis-report-scheduled-tab.component.ts", lineNumber: 23 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-consent-inventory-tab/mis-report-consent-inventory-tab.component.ts
var _forTrack09 = ($index, $item) => $item.period;
var _forTrack14 = ($index, $item) => $item.consentDbId;
function MisReportConsentInventoryTabComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 8);
    \u0275\u0275element(2, "div", 9)(3, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Conditional_4_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 42);
    \u0275\u0275element(1, "span", 43);
    \u0275\u0275elementStart(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const \u0275$index_62_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r3.sliceColors[\u0275$index_62_r3 % ctx_r3.sliceColors.length]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.period);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.legendPct(p_r2.count), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.count);
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 36);
    \u0275\u0275element(2, "canvas", 37);
    \u0275\u0275elementStart(3, "div", 38)(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7, "total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ul", 41);
    \u0275\u0275repeaterCreate(9, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Conditional_4_For_10_Template, 8, 5, "li", 42, _forTrack09);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r5 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.donutTotal());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(b_r5.consentsByStatus);
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "No templates yet.");
    \u0275\u0275elementEnd();
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275element(4, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.period);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r6.count / ctx_r3.categoryMax() * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.count);
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "No categories.");
    \u0275\u0275elementEnd();
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("value", c_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7);
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275property("value", s_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8);
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 32)(1, "td", 51)(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span");
    \u0275\u0275element(9, "span", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 56);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 57);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 58);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 56);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", r_r9.consentName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.consentName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.category);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.badgeClass(r_r9.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatStatus(r_r9.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("v", r_r9.version, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 11, r_r9.createdAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((r_r9.deliveryChannels == null ? null : r_r9.deliveryChannels.join(", ")) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 14, r_r9.totalBroadcastExecutions, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.publishedAt ? \u0275\u0275pipeBind2(24, 17, r_r9.publishedAt, "dd MMM yyyy") : "\u2014");
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_ForEmpty_83_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_ForEmpty_83_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-icon", 61);
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No consent templates match your filters.");
    \u0275\u0275elementEnd()();
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_ForEmpty_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 59);
    \u0275\u0275template(2, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_ForEmpty_83_Conditional_2_Template, 2, 0, "span")(3, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_ForEmpty_83_Conditional_3_Template, 5, 0, "div", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.loading() ? 2 : 3);
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 12)(2, "h3", 13);
    \u0275\u0275text(3, "By status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Conditional_4_Template, 11, 1, "div", 14)(5, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Conditional_5_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "h3", 13);
    \u0275\u0275text(8, "By category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275repeaterCreate(10, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_For_11_Template, 7, 4, "div", 17, _forTrack09, false, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_ForEmpty_12_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 18)(14, "mat-form-field", 19)(15, "mat-label");
    \u0275\u0275text(16, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_mat_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.categoryFilter, $event) || (ctx_r3.categoryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "mat-option", 21);
    \u0275\u0275text(19, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_For_21_Template, 2, 2, "mat-option", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 19)(23, "mat-label");
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_mat_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.statusFilter, $event) || (ctx_r3.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "mat-option", 21);
    \u0275\u0275text(27, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_For_29_Template, 2, 2, "mat-option", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "mat-form-field", 23)(31, "mat-label");
    \u0275\u0275text(32, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.search, $event) || (ctx_r3.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-icon", 25);
    \u0275\u0275text(35, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 26);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.apply());
    });
    \u0275\u0275text(37, "Apply");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "section", 27)(39, "div", 28)(40, "table", 29)(41, "thead")(42, "tr")(43, "th")(44, "button", 30);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setSort("consentName"));
    });
    \u0275\u0275text(45, " Name ");
    \u0275\u0275elementStart(46, "mat-icon", 31);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "th")(49, "button", 30);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setSort("category"));
    });
    \u0275\u0275text(50, " Category ");
    \u0275\u0275elementStart(51, "mat-icon", 31);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "th")(54, "button", 30);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setSort("status"));
    });
    \u0275\u0275text(55, " Status ");
    \u0275\u0275elementStart(56, "mat-icon", 31);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "th")(59, "button", 30);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setSort("version"));
    });
    \u0275\u0275text(60, " Ver ");
    \u0275\u0275elementStart(61, "mat-icon", 31);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "th")(64, "button", 30);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setSort("createdAt"));
    });
    \u0275\u0275text(65, " Created ");
    \u0275\u0275elementStart(66, "mat-icon", 31);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "th");
    \u0275\u0275text(69, "Channels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th")(71, "button", 30);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setSort("totalBroadcastExecutions"));
    });
    \u0275\u0275text(72, " Broadcasts ");
    \u0275\u0275elementStart(73, "mat-icon", 31);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "th")(76, "button", 30);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setSort("publishedAt"));
    });
    \u0275\u0275text(77, " Published ");
    \u0275\u0275elementStart(78, "mat-icon", 31);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(80, "tbody");
    \u0275\u0275repeaterCreate(81, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_For_82_Template, 25, 20, "tr", 32, _forTrack14, false, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_ForEmpty_83_Template, 4, 1, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 33)(85, "span", 34);
    \u0275\u0275text(86, " Page ");
    \u0275\u0275elementStart(87, "strong");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, " of ");
    \u0275\u0275elementStart(90, "strong");
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 35)(94, "button", 5);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.prev());
    });
    \u0275\u0275elementStart(95, "mat-icon");
    \u0275\u0275text(96, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "button", 5);
    \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next());
    });
    \u0275\u0275text(99, " Next ");
    \u0275\u0275elementStart(100, "mat-icon");
    \u0275\u0275text(101, "chevron_right");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r3.donutTotal() ? 4 : 5);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.consentsByCategory);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.categoryFilter);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.statusFilter);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.statuses);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.search);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("sort-icon--active", ctx_r3.sortBy() === "consentName");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.sortIcon("consentName"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("sort-icon--active", ctx_r3.sortBy() === "category");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.sortIcon("category"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("sort-icon--active", ctx_r3.sortBy() === "status");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.sortIcon("status"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("sort-icon--active", ctx_r3.sortBy() === "version");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.sortIcon("version"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("sort-icon--active", ctx_r3.sortBy() === "createdAt");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.sortIcon("createdAt"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("sort-icon--active", ctx_r3.sortBy() === "totalBroadcastExecutions");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.sortIcon("totalBroadcastExecutions"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("sort-icon--active", ctx_r3.sortBy() === "publishedAt");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.sortIcon("publishedAt"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.rows());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.currentPage() + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.totalPages() || 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0\xB7\xA0 ", ctx_r3.rows().length, " rows ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.currentPage() <= 0 || ctx_r3.loading());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.currentPage() >= ctx_r3.totalPages() - 1 || ctx_r3.loading());
  }
}
function MisReportConsentInventoryTabComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MisReportConsentInventoryTabComponent_Conditional_16_Conditional_0_Template, 102, 32);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r3.bundle()) ? 0 : -1, tmp_1_0);
  }
}
function MisReportConsentInventoryTabComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r3.tooltipX(), "px")("top", ctx_r3.tooltipY(), "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.tooltipLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.tooltipCount(), " templates \xA0\xB7\xA0 ", ctx_r3.tooltipPct(), "% ");
  }
}
var MisReportConsentInventoryTabComponent = class _MisReportConsentInventoryTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.loading = signal(false);
    this.bundle = signal(null);
    this.exporting = signal(false);
    this.totalPages = signal(0);
    this.currentPage = signal(0);
    this.pageSize = 10;
    this.sortBy = signal("consentName");
    this.sortDir = signal("ASC");
    this.search = "";
    this.categoryFilter = "";
    this.statusFilter = "";
    this.categories = ["MARKETING", "TRANSACTIONAL", "SERVICE"];
    this.statuses = [
      "DRAFT",
      "PENDING_APPROVAL",
      "APPROVED",
      "REJECTED",
      "PUBLISHED",
      "REVISION_REQUESTED"
    ];
    this.tooltipVisible = signal(false);
    this.tooltipLabel = signal("");
    this.tooltipCount = signal(0);
    this.tooltipPct = signal(0);
    this.tooltipX = signal(0);
    this.tooltipY = signal(0);
    this.donutTotal = computed(() => (this.bundle()?.consentsByStatus ?? []).reduce((s, p) => s + p.count, 0));
    this.categoryMax = computed(() => Math.max(1, ...(this.bundle()?.consentsByCategory ?? []).map((p) => p.count)));
    this.sliceColors = [
      "#185FA5",
      "#22c55e",
      "#f59e0b",
      "#ef4444",
      "#8b5cf6",
      "#94a3b8"
    ];
    this.pieChart = null;
  }
  ngOnInit() {
    this.load(0);
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.pieChart?.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * Dynamically imports chart.js (avoids SSR/type-declaration issues),
   * then builds a two-dataset doughnut for the pseudo-3-D effect.
   */
  initPieChart() {
    return __async(this, null, function* () {
      const canvas = document.getElementById("statusPieCanvas");
      if (!canvas)
        return;
      const { Chart, ArcElement, DoughnutController, Tooltip, Legend } = yield import("./chunk-L4KDNXV7.js");
      Chart.register(ArcElement, DoughnutController, Tooltip, Legend);
      this.pieChart?.destroy();
      const pts = this.bundle()?.consentsByStatus ?? [];
      const total = this.donutTotal();
      this.pieChart = new Chart(canvas, {
        type: "doughnut",
        data: {
          labels: pts.map((p) => p.period),
          datasets: [
            {
              // Main slices
              data: pts.map((p) => p.count),
              backgroundColor: this.sliceColors,
              borderColor: "#ffffff",
              borderWidth: 3,
              hoverOffset: 14,
              hoverBorderWidth: 0
            },
            {
              // Shadow ring — gives the pseudo-3-D depth
              data: pts.map((p) => p.count),
              backgroundColor: this.sliceColors.map((c) => c + "44"),
              borderColor: "transparent",
              borderWidth: 0,
              hoverOffset: 0,
              weight: 0.18
            }
          ]
        },
        options: {
          cutout: "58%",
          responsive: false,
          animation: { animateRotate: true, duration: 800, easing: "easeOutQuart" },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          },
          onHover: (event, elements) => {
            canvas.style.cursor = elements.length ? "pointer" : "default";
            const main = elements.find((e) => e.datasetIndex === 0);
            if (main) {
              const idx = main.index;
              const p = pts[idx];
              const pct = total > 0 ? Math.round(p.count / total * 100) : 0;
              const native = event.native;
              this.tooltipLabel.set(p.period);
              this.tooltipCount.set(p.count);
              this.tooltipPct.set(pct);
              this.tooltipX.set(native.clientX + 14);
              this.tooltipY.set(native.clientY - 10);
              this.tooltipVisible.set(true);
            } else {
              this.tooltipVisible.set(false);
            }
          }
        }
      });
      canvas.addEventListener("mouseleave", () => this.tooltipVisible.set(false));
    });
  }
  // ── Sorting ──────────────────────────────────────────────────────────────
  setSort(col) {
    if (this.sortBy() === col) {
      this.sortDir.set(this.sortDir() === "ASC" ? "DESC" : "ASC");
    } else {
      this.sortBy.set(col);
      this.sortDir.set("ASC");
    }
    this.load(0);
  }
  sortIcon(col) {
    if (this.sortBy() !== col)
      return "unfold_more";
    return this.sortDir() === "ASC" ? "arrow_upward" : "arrow_downward";
  }
  // ── Data loading ─────────────────────────────────────────────────────────
  load(page) {
    this.loading.set(true);
    this.adminApi.getMisConsentInventoryBundle({
      page,
      size: this.pageSize,
      category: this.categoryFilter || void 0,
      status: this.statusFilter || void 0,
      search: this.search.trim() || void 0,
      sortBy: this.sortBy(),
      sortDirection: this.sortDir()
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.bundle.set(res.data);
          this.totalPages.set(res.data.page.totalPages);
          this.currentPage.set(res.data.page.currentPage);
          setTimeout(() => this.initPieChart(), 0);
        }
      },
      error: (e) => {
        this.loading.set(false);
        this.logger.error("MisInventory", "load", e);
        this.notify.error("Consent inventory", e?.error?.message ?? "Load failed.");
      }
    });
  }
  apply() {
    this.load(0);
  }
  prev() {
    const p = this.currentPage();
    if (p > 0)
      this.load(p - 1);
  }
  next() {
    const p = this.currentPage();
    if (p < this.totalPages() - 1)
      this.load(p + 1);
  }
  // ── Helpers ──────────────────────────────────────────────────────────────
  rows() {
    return this.bundle()?.page.content ?? [];
  }
  legendPct(count) {
    const t = this.donutTotal();
    return t > 0 ? Math.round(count / t * 100) : 0;
  }
  /** Returns a human-readable label from a SCREAMING_SNAKE_CASE status string. */
  formatStatus(status) {
    return status.toLowerCase().replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
  badgeClass(status) {
    switch (status) {
      case "PUBLISHED":
      case "APPROVED":
        return "badge badge--ok";
      case "PENDING_APPROVAL":
      case "REVISION_REQUESTED":
        return "badge badge--warn";
      case "REJECTED":
        return "badge badge--bad";
      default:
        return "badge badge--default";
    }
  }
  dl(blob, name) {
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = name;
    a.click();
    URL.revokeObjectURL(u);
  }
  exportCsv() {
    this.exporting.set(true);
    this.adminApi.exportMisConsentInventoryCsv({
      category: this.categoryFilter || void 0,
      status: this.statusFilter || void 0,
      search: this.search.trim() || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "consent-inventory.csv");
        this.notify.success("Export", "CSV started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  exportExcel() {
    this.exporting.set(true);
    this.adminApi.exportMisConsentInventoryExcel({
      category: this.categoryFilter || void 0,
      status: this.statusFilter || void 0,
      search: this.search.trim() || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "consent-inventory.xlsx");
        this.notify.success("Export", "Excel started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function MisReportConsentInventoryTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportConsentInventoryTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportConsentInventoryTabComponent, selectors: [["app-mis-report-consent-inventory-tab"]], decls: 18, vars: 4, consts: [[1, "tab-toolbar"], [1, "toolbar-left"], [1, "toolbar-title"], [1, "toolbar-sub"], [1, "exports"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "skeleton-panel"], [1, "pie-tooltip", 3, "left", "top"], [1, "sk-grid2"], [1, "sk-block"], [1, "sk-table"], [1, "charts-row"], [1, "panel", "chart-card"], [1, "chart-title"], [1, "pie-wrapper"], [1, "empty", "dashed"], [1, "vbar-list"], [1, "vbar-row"], [1, "filters"], ["appearance", "outline", 1, "ff"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["appearance", "outline", 1, "ff-grow"], ["matInput", "", "placeholder", "Name or consent ID", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "panel", "table-panel"], [1, "horiz-scroll"], [1, "data-table"], ["type", "button", 1, "th-btn", 3, "click"], [1, "sort-icon"], [1, "data-row"], [1, "pager"], [1, "pager-info"], [1, "pager-btns"], [1, "pie-container"], ["id", "statusPieCanvas", "width", "180", "height", "180", "role", "img", "aria-label", "Doughnut chart showing consent templates grouped by status"], [1, "pie-center"], [1, "pie-total"], [1, "pie-label"], [1, "legend"], [1, "legend-item"], [1, "legend-dot"], [1, "legend-name"], [1, "legend-pct"], [1, "legend-count"], [1, "vbar-name"], [1, "vbar-track"], [1, "vbar-fill"], [1, "vbar-meta"], [1, "td-name"], [1, "name-text", 3, "matTooltip"], [1, "category-pill"], [1, "badge-dot"], [1, "version-pill"], [1, "td-muted"], [1, "td-channels"], [1, "td-num"], ["colspan", "8", 1, "empty-row"], [1, "empty-card"], [1, "ph-icon"], [1, "pie-tooltip"], [1, "pie-tooltip-label"], [1, "pie-tooltip-body"]], template: function MisReportConsentInventoryTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Consent inventory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Templates, channels, and broadcast execution counts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Template_button_click_7_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function MisReportConsentInventoryTabComponent_Template_button_click_11_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(12, "mat-icon");
        \u0275\u0275text(13, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, MisReportConsentInventoryTabComponent_Conditional_15_Template, 5, 0, "section", 6)(16, MisReportConsentInventoryTabComponent_Conditional_16_Template, 1, 1)(17, MisReportConsentInventoryTabComponent_Conditional_17_Template, 5, 7, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() && !ctx.bundle() ? 15 : 16);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.tooltipVisible() ? 17 : -1);
      }
    }, dependencies: [
      DatePipe,
      DecimalPipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatInputModule,
      MatInput,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip
    ], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.toolbar-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--text-17);\n  color: var(--input-text-color);\n  letter-spacing: -0.01em;\n}\n.toolbar-sub[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.exports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.skeleton-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.sk-table[_ngcontent-%COMP%], \n.sk-block[_ngcontent-%COMP%] {\n  border-radius: var(--card-radius);\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 0%,\n      #f3f4f6 50%,\n      #e5e7eb 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_sk-sweep 1.1s ease-in-out infinite;\n}\n.sk-grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3);\n}\n.sk-block[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.sk-table[_ngcontent-%COMP%] {\n  height: 280px;\n}\n@keyframes _ngcontent-%COMP%_sk-sweep {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.chart-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.chart-title[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  font-weight: 600;\n  color: var(--sidebar-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  margin: 0 0 var(--space-4);\n}\n.pie-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-5);\n  flex-wrap: wrap;\n}\n.pie-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 180px;\n  height: 180px;\n  flex-shrink: 0;\n  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.13));\n}\n#statusPieCanvas[_ngcontent-%COMP%] {\n  display: block;\n}\n.pie-center[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.pie-total[_ngcontent-%COMP%] {\n  font-size: var(--text-24);\n  font-weight: 700;\n  color: var(--input-text-color);\n  line-height: 1;\n}\n.pie-label[_ngcontent-%COMP%] {\n  font-size: var(--text-11);\n  color: var(--sidebar-text-muted);\n  margin-top: 3px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.legend[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n  min-width: 160px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 10px 1fr auto auto;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--text-13);\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.legend-name[_ngcontent-%COMP%] {\n  color: var(--input-text-color);\n  font-size: var(--text-12);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.legend-pct[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: var(--input-text-color);\n  min-width: 34px;\n  text-align: right;\n}\n.legend-count[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  min-width: 24px;\n  text-align: right;\n}\n.pie-tooltip[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.14);\n  padding: 8px 14px;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 160px;\n}\n.pie-tooltip-label[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.pie-tooltip-body[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.vbar-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding-top: var(--space-1);\n}\n.vbar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 130px 1fr 40px;\n  align-items: center;\n  gap: 10px;\n}\n.vbar-name[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.vbar-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.vbar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1a4f8a,\n      #378add);\n  border-radius: 999px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.vbar-meta[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 600;\n  text-align: right;\n  color: var(--input-text-color);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n}\n.ff[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.ff-grow[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n}\n.table-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.horiz-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0;\n  text-align: left;\n  background: var(--input-bg-disabled);\n  white-space: nowrap;\n}\n.th-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 11px 14px;\n  width: 100%;\n  background: none;\n  border: none;\n  font: inherit;\n  font-size: var(--text-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.th-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: var(--input-border-color);\n  transition: color 0.15s;\n}\n.sort-icon--active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--input-border-color);\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]:hover {\n  background: var(--input-bg-disabled);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  white-space: nowrap;\n  color: var(--input-text-color);\n}\n.td-name[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.name-text[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n}\n.td-muted[_ngcontent-%COMP%] {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-12);\n}\n.td-channels[_ngcontent-%COMP%] {\n  white-space: normal;\n  max-width: 200px;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.td-num[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.category-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 999px;\n  font-size: var(--text-11);\n  font-weight: 600;\n  background: rgba(26, 79, 138, 0.1);\n  color: #1a4f8a;\n  letter-spacing: 0.04em;\n}\n.version-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-size: var(--text-11);\n  font-weight: 600;\n  background: var(--input-bg-disabled);\n  color: var(--sidebar-text-muted);\n  font-family: var(--font-mono, monospace);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: var(--text-12);\n  font-weight: 600;\n}\n.badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.badge--ok[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #166534;\n}\n.badge--ok[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.badge--warn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #92400e;\n}\n.badge--warn[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.badge--bad[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #991b1b;\n}\n.badge--bad[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.badge--default[_ngcontent-%COMP%] {\n  background: var(--input-bg-disabled);\n  color: var(--sidebar-text-muted);\n}\n.badge--default[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  background: var(--sidebar-text-muted);\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-8) !important;\n}\n.empty-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  color: var(--sidebar-text-muted);\n}\n.empty-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-14);\n  margin: 0;\n}\n.ph-icon[_ngcontent-%COMP%] {\n  font-size: 40px !important;\n  width: 40px !important;\n  height: 40px !important;\n  opacity: 0.3;\n}\n.empty.dashed[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-6);\n  border: 1px dashed var(--input-border-color);\n  border-radius: var(--card-radius);\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px var(--space-5);\n  border-top: 1px solid var(--input-border-color);\n  flex-wrap: wrap;\n  gap: var(--space-2);\n}\n.pager-info[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.pager-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--input-text-color);\n}\n.pager-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n@media (max-width: 1024px) {\n  .vbar-row[_ngcontent-%COMP%] {\n    grid-template-columns: 100px 1fr 36px;\n  }\n}\n@media (max-width: 768px) {\n  .charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pie-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .legend-item[_ngcontent-%COMP%] {\n    grid-template-columns: 10px 1fr auto;\n  }\n  .legend-count[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=mis-report-consent-inventory-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportConsentInventoryTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-consent-inventory-tab", standalone: true, imports: [
      DatePipe,
      DecimalPipe,
      TitleCasePipe,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatIconModule,
      MatTooltipModule
    ], template: `<!-- <div class="tab-toolbar">\r
  <div class="toolbar-left">\r
    <span class="toolbar-title">Consent inventory</span>\r
    <span class="toolbar-sub">Templates, channels, and broadcast execution counts</span>\r
  </div>\r
  <div class="exports">\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportCsv()">\r
      <mat-icon>download</mat-icon> CSV\r
    </button>\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportExcel()">\r
      <mat-icon>table_chart</mat-icon> Excel\r
    </button>\r
  </div>\r
</div>\r
\r
@if (loading() && !bundle()) {\r
  <section class="skeleton-panel" aria-hidden="true">\r
    <div class="sk-line sk-line--lg"></div>\r
    <div class="sk-grid2">\r
      <div class="sk-block"></div>\r
      <div class="sk-block"></div>\r
    </div>\r
    <div class="sk-table"></div>\r
  </section>\r
} @else {\r
  @if (bundle(); as b) {\r
  <section class="kpi-row charts-row">\r
    <div class="panel chart-card">\r
      <h3>By status</h3>\r
      @if (donutTotal()) {\r
        <div class="donut" [style.background]="donutGradient()"></div>\r
        <ul class="legend">\r
          @for (p of b.consentsByStatus; track p.period) {\r
            <li><span class="dot"></span>{{ p.period }} \u2014 {{ p.count }}</li>\r
          }\r
        </ul>\r
      } @else {\r
        <div class="empty dashed">No templates yet.</div>\r
      }\r
    </div>\r
    <div class="panel chart-card">\r
      <h3>By category</h3>\r
      <div class="vbar-list">\r
        @for (p of b.consentsByCategory; track p.period) {\r
          <div class="vbar-row">\r
            <span class="vbar-name">{{ p.period }}</span>\r
            <div class="vbar-track">\r
              <div class="vbar-fill" [style.width.%]="(p.count / categoryMax()) * 100"></div>\r
            </div>\r
            <span class="vbar-meta">{{ p.count }}</span>\r
          </div>\r
        } @empty {\r
          <div class="empty dashed">No categories.</div>\r
        }\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div class="filters">\r
    <mat-form-field appearance="outline" class="ff">\r
      <mat-label>Category</mat-label>\r
      <mat-select [(ngModel)]="categoryFilter">\r
        <mat-option value="">All</mat-option>\r
        @for (c of categories; track c) {\r
          <mat-option [value]="c">{{ c }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="ff">\r
      <mat-label>Status</mat-label>\r
      <mat-select [(ngModel)]="statusFilter">\r
        <mat-option value="">All</mat-option>\r
        @for (s of statuses; track s) {\r
          <mat-option [value]="s">{{ s }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="ff-grow">\r
      <mat-label>Search</mat-label>\r
      <input matInput [(ngModel)]="search" placeholder="Name or consent ID" />\r
    </mat-form-field>\r
    <button mat-stroked-button type="button" (click)="apply()">Apply</button>\r
  </div>\r
\r
  <section class="panel">\r
    <div class="horiz-scroll">\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th><button type="button" class="th-btn" (click)="setSort('consentName')">Name</button></th>\r
            <th><button type="button" class="th-btn" (click)="setSort('category')">Category</button></th>\r
            <th><button type="button" class="th-btn" (click)="setSort('status')">Status</button></th>\r
            <th><button type="button" class="th-btn" (click)="setSort('version')">Ver</button></th>\r
            <th><button type="button" class="th-btn" (click)="setSort('createdAt')">Created</button></th>\r
            <th>Channels</th>\r
            <th>Broadcasts</th>\r
            <th>Published</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (r of rows(); track r.consentDbId) {\r
            <tr>\r
              <td>{{ r.consentName }}</td>\r
              <td>{{ r.category }}</td>\r
              <td><span [class]="badgeClass(r.status)">{{ r.status }}</span></td>\r
              <td>{{ r.version }}</td>\r
              <td>{{ r.createdAt | date: 'mediumDate' }}</td>\r
              <td class="wrap">{{ r.deliveryChannels?.join(', ') || '\u2014' }}</td>\r
              <td>{{ r.totalBroadcastExecutions }}</td>\r
              <td>{{ r.publishedAt ? (r.publishedAt | date: 'short') : '\u2014' }}</td>\r
            </tr>\r
          } @empty {\r
            <tr>\r
              <td colspan="8" class="empty">\r
                @if (loading()) {\r
                  Loading\u2026\r
                } @else {\r
                  <div class="empty-card">\r
                    <mat-icon class="ph-icon">inventory_2</mat-icon>\r
                    <p>No consent templates match your filters.</p>\r
                  </div>\r
                }\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
    <div class="pager">\r
      <span>Page {{ currentPage() + 1 }} / {{ totalPages() || 1 }}</span>\r
      <div>\r
        <button mat-stroked-button type="button" [disabled]="currentPage() <= 0 || loading()" (click)="prev()">Previous</button>\r
        <button\r
          mat-stroked-button\r
          type="button"\r
          [disabled]="currentPage() >= totalPages() - 1 || loading()"\r
          (click)="next()"\r
        >\r
          Next\r
        </button>\r
      </div>\r
    </div>\r
  </section>\r
  }\r
} -->\r
\r
\r
<!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="tab-toolbar">\r
  <div class="toolbar-left">\r
    <span class="toolbar-title">Consent inventory</span>\r
    <span class="toolbar-sub">Templates, channels, and broadcast execution counts</span>\r
  </div>\r
  <div class="exports">\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportCsv()">\r
      <mat-icon>download</mat-icon> CSV\r
    </button>\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportExcel()">\r
      <mat-icon>table_chart</mat-icon> Excel\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 Skeleton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
@if (loading() && !bundle()) {\r
<section class="skeleton-panel" aria-hidden="true">\r
  <div class="sk-grid2">\r
    <div class="sk-block"></div>\r
    <div class="sk-block"></div>\r
  </div>\r
  <div class="sk-table"></div>\r
</section>\r
} @else {\r
\r
@if (bundle(); as b) {\r
\r
<!-- \u2500\u2500 Charts row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<section class="charts-row">\r
\r
  <!-- By Status \u2014 3-D Doughnut -->\r
  <div class="panel chart-card">\r
    <h3 class="chart-title">By status</h3>\r
    @if (donutTotal()) {\r
    <div class="pie-wrapper">\r
      <div class="pie-container">\r
        <canvas id="statusPieCanvas" width="180" height="180" role="img"\r
          aria-label="Doughnut chart showing consent templates grouped by status">\r
        </canvas>\r
        <div class="pie-center">\r
          <span class="pie-total">{{ donutTotal() }}</span>\r
          <span class="pie-label">total</span>\r
        </div>\r
      </div>\r
\r
      <ul class="legend">\r
        @for (p of b.consentsByStatus; track p.period; let i = $index) {\r
        <li class="legend-item">\r
          <span class="legend-dot" [style.background]="sliceColors[i % sliceColors.length]"></span>\r
          <span class="legend-name">{{ p.period }}</span>\r
          <span class="legend-pct">{{ legendPct(p.count) }}%</span>\r
          <span class="legend-count">{{ p.count }}</span>\r
        </li>\r
        }\r
      </ul>\r
    </div>\r
    } @else {\r
    <div class="empty dashed">No templates yet.</div>\r
    }\r
  </div>\r
\r
  <!-- By Category \u2014 horizontal bars -->\r
  <div class="panel chart-card">\r
    <h3 class="chart-title">By category</h3>\r
    <div class="vbar-list">\r
      @for (p of b.consentsByCategory; track p.period) {\r
      <div class="vbar-row">\r
        <span class="vbar-name">{{ p.period }}</span>\r
        <div class="vbar-track">\r
          <div class="vbar-fill" [style.width.%]="(p.count / categoryMax()) * 100"></div>\r
        </div>\r
        <span class="vbar-meta">{{ p.count }}</span>\r
      </div>\r
      } @empty {\r
      <div class="empty dashed">No categories.</div>\r
      }\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- \u2500\u2500 Filters \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="filters">\r
  <mat-form-field appearance="outline" class="ff">\r
    <mat-label>Category</mat-label>\r
    <mat-select [(ngModel)]="categoryFilter">\r
      <mat-option value="">All</mat-option>\r
      @for (c of categories; track c) {\r
      <mat-option [value]="c">{{ c }}</mat-option>\r
      }\r
    </mat-select>\r
  </mat-form-field>\r
\r
  <mat-form-field appearance="outline" class="ff">\r
    <mat-label>Status</mat-label>\r
    <mat-select [(ngModel)]="statusFilter">\r
      <mat-option value="">All</mat-option>\r
      @for (s of statuses; track s) {\r
      <mat-option [value]="s">{{ s }}</mat-option>\r
      }\r
    </mat-select>\r
  </mat-form-field>\r
\r
  <mat-form-field appearance="outline" class="ff-grow">\r
    <mat-label>Search</mat-label>\r
    <input matInput [(ngModel)]="search" placeholder="Name or consent ID" />\r
    <mat-icon matSuffix>search</mat-icon>\r
  </mat-form-field>\r
\r
  <button mat-flat-button color="primary" type="button" (click)="apply()">Apply</button>\r
</div>\r
\r
<!-- \u2500\u2500 Table \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<section class="panel table-panel">\r
  <div class="horiz-scroll">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>\r
            <button type="button" class="th-btn" (click)="setSort('consentName')">\r
              Name\r
              <mat-icon class="sort-icon" [class.sort-icon--active]="sortBy() === 'consentName'">\r
                {{ sortIcon('consentName') }}\r
              </mat-icon>\r
            </button>\r
          </th>\r
          <th>\r
            <button type="button" class="th-btn" (click)="setSort('category')">\r
              Category\r
              <mat-icon class="sort-icon" [class.sort-icon--active]="sortBy() === 'category'">\r
                {{ sortIcon('category') }}\r
              </mat-icon>\r
            </button>\r
          </th>\r
          <th>\r
            <button type="button" class="th-btn" (click)="setSort('status')">\r
              Status\r
              <mat-icon class="sort-icon" [class.sort-icon--active]="sortBy() === 'status'">\r
                {{ sortIcon('status') }}\r
              </mat-icon>\r
            </button>\r
          </th>\r
          <th>\r
            <button type="button" class="th-btn" (click)="setSort('version')">\r
              Ver\r
              <mat-icon class="sort-icon" [class.sort-icon--active]="sortBy() === 'version'">\r
                {{ sortIcon('version') }}\r
              </mat-icon>\r
            </button>\r
          </th>\r
          <th>\r
            <button type="button" class="th-btn" (click)="setSort('createdAt')">\r
              Created\r
              <mat-icon class="sort-icon" [class.sort-icon--active]="sortBy() === 'createdAt'">\r
                {{ sortIcon('createdAt') }}\r
              </mat-icon>\r
            </button>\r
          </th>\r
          <th>Channels</th>\r
          <th>\r
            <button type="button" class="th-btn" (click)="setSort('totalBroadcastExecutions')">\r
              Broadcasts\r
              <mat-icon class="sort-icon" [class.sort-icon--active]="sortBy() === 'totalBroadcastExecutions'">\r
                {{ sortIcon('totalBroadcastExecutions') }}\r
              </mat-icon>\r
            </button>\r
          </th>\r
          <th>\r
            <button type="button" class="th-btn" (click)="setSort('publishedAt')">\r
              Published\r
              <mat-icon class="sort-icon" [class.sort-icon--active]="sortBy() === 'publishedAt'">\r
                {{ sortIcon('publishedAt') }}\r
              </mat-icon>\r
            </button>\r
          </th>\r
        </tr>\r
      </thead>\r
\r
      <tbody>\r
        @for (r of rows(); track r.consentDbId) {\r
        <tr class="data-row">\r
          <td class="td-name">\r
            <span class="name-text" [matTooltip]="r.consentName">{{ r.consentName }}</span>\r
          </td>\r
          <td>\r
            <span class="category-pill">{{ r.category }}</span>\r
          </td>\r
          <td>\r
            <span [class]="badgeClass(r.status)">\r
              <span class="badge-dot"></span>\r
              {{ formatStatus(r.status) }}\r
            </span>\r
          </td>\r
          <td>\r
            <span class="version-pill">v{{ r.version }}</span>\r
          </td>\r
          <td class="td-muted">{{ r.createdAt | date: 'dd MMM yyyy' }}</td>\r
          <td class="td-channels">{{ r.deliveryChannels?.join(', ') || '\u2014' }}</td>\r
          <td class="td-num">{{ r.totalBroadcastExecutions | number:'1.0-0' }}</td>\r
          <td class="td-muted">{{ r.publishedAt ? (r.publishedAt | date: 'dd MMM yyyy') : '\u2014' }}</td>\r
        </tr>\r
        } @empty {\r
        <tr>\r
          <td colspan="8" class="empty-row">\r
            @if (loading()) {\r
            <span>Loading\u2026</span>\r
            } @else {\r
            <div class="empty-card">\r
              <mat-icon class="ph-icon">inventory_2</mat-icon>\r
              <p>No consent templates match your filters.</p>\r
            </div>\r
            }\r
          </td>\r
        </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div class="pager">\r
    <span class="pager-info">\r
      Page <strong>{{ currentPage() + 1 }}</strong> of <strong>{{ totalPages() || 1 }}</strong>\r
      &nbsp;\xB7&nbsp; {{ rows().length }} rows\r
    </span>\r
    <div class="pager-btns">\r
      <button mat-stroked-button type="button" [disabled]="currentPage() <= 0 || loading()" (click)="prev()">\r
        <mat-icon>chevron_left</mat-icon> Previous\r
      </button>\r
      <button mat-stroked-button type="button" [disabled]="currentPage() >= totalPages() - 1 || loading()"\r
        (click)="next()">\r
        Next <mat-icon>chevron_right</mat-icon>\r
      </button>\r
    </div>\r
  </div>\r
</section>\r
\r
} <!-- end bundle -->\r
} <!-- end skeleton/else -->\r
\r
<!-- \u2500\u2500 Pie Tooltip (fixed overlay) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
@if (tooltipVisible()) {\r
<div class="pie-tooltip" [style.left.px]="tooltipX()" [style.top.px]="tooltipY()">\r
  <span class="pie-tooltip-label">{{ tooltipLabel() }}</span>\r
  <span class="pie-tooltip-body">\r
    {{ tooltipCount() }} templates &nbsp;\xB7&nbsp; {{ tooltipPct() }}%\r
  </span>\r
</div>\r
}`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-consent-inventory-tab/mis-report-consent-inventory-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n  flex-wrap: wrap;\n}\n.toolbar-left {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.toolbar-title {\n  font-weight: 700;\n  font-size: var(--text-17);\n  color: var(--input-text-color);\n  letter-spacing: -0.01em;\n}\n.toolbar-sub {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.exports {\n  display: flex;\n  gap: var(--space-2);\n}\n.skeleton-panel {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.sk-table,\n.sk-block {\n  border-radius: var(--card-radius);\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 0%,\n      #f3f4f6 50%,\n      #e5e7eb 100%);\n  background-size: 200% 100%;\n  animation: sk-sweep 1.1s ease-in-out infinite;\n}\n.sk-grid2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3);\n}\n.sk-block {\n  height: 200px;\n}\n.sk-table {\n  height: 280px;\n}\n@keyframes sk-sweep {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.panel {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.chart-card {\n  margin-bottom: 0;\n}\n.chart-title {\n  font-size: var(--text-13);\n  font-weight: 600;\n  color: var(--sidebar-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  margin: 0 0 var(--space-4);\n}\n.pie-wrapper {\n  display: flex;\n  align-items: center;\n  gap: var(--space-5);\n  flex-wrap: wrap;\n}\n.pie-container {\n  position: relative;\n  width: 180px;\n  height: 180px;\n  flex-shrink: 0;\n  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.13));\n}\n#statusPieCanvas {\n  display: block;\n}\n.pie-center {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.pie-total {\n  font-size: var(--text-24);\n  font-weight: 700;\n  color: var(--input-text-color);\n  line-height: 1;\n}\n.pie-label {\n  font-size: var(--text-11);\n  color: var(--sidebar-text-muted);\n  margin-top: 3px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.legend {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n  min-width: 160px;\n}\n.legend-item {\n  display: grid;\n  grid-template-columns: 10px 1fr auto auto;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--text-13);\n}\n.legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.legend-name {\n  color: var(--input-text-color);\n  font-size: var(--text-12);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.legend-pct {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: var(--input-text-color);\n  min-width: 34px;\n  text-align: right;\n}\n.legend-count {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  min-width: 24px;\n  text-align: right;\n}\n.pie-tooltip {\n  position: fixed;\n  z-index: 1000;\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.14);\n  padding: 8px 14px;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 160px;\n}\n.pie-tooltip-label {\n  font-size: var(--text-13);\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.pie-tooltip-body {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.vbar-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding-top: var(--space-1);\n}\n.vbar-row {\n  display: grid;\n  grid-template-columns: 130px 1fr 40px;\n  align-items: center;\n  gap: 10px;\n}\n.vbar-name {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.vbar-track {\n  height: 8px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.vbar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1a4f8a,\n      #378add);\n  border-radius: 999px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.vbar-meta {\n  font-size: var(--text-12);\n  font-weight: 600;\n  text-align: right;\n  color: var(--input-text-color);\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: flex-end;\n  margin-bottom: var(--space-4);\n}\n.ff {\n  min-width: 180px;\n}\n.ff-grow {\n  flex: 1;\n  min-width: 220px;\n}\n.table-panel {\n  padding: 0;\n  overflow: hidden;\n}\n.horiz-scroll {\n  overflow-x: auto;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n}\n.data-table thead tr {\n  border-bottom: 1px solid var(--input-border-color);\n}\n.data-table th {\n  padding: 0;\n  text-align: left;\n  background: var(--input-bg-disabled);\n  white-space: nowrap;\n}\n.th-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 11px 14px;\n  width: 100%;\n  background: none;\n  border: none;\n  font: inherit;\n  font-size: var(--text-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.th-btn:hover {\n  color: var(--color-primary);\n}\n.sort-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: var(--input-border-color);\n  transition: color 0.15s;\n}\n.sort-icon--active {\n  color: var(--color-primary);\n}\n.data-table tbody .data-row {\n  border-bottom: 1px solid var(--input-border-color);\n  transition: background 0.1s;\n}\n.data-table tbody .data-row:last-child {\n  border-bottom: none;\n}\n.data-table tbody .data-row:hover {\n  background: var(--input-bg-disabled);\n}\n.data-table td {\n  padding: 12px 14px;\n  vertical-align: middle;\n  white-space: nowrap;\n  color: var(--input-text-color);\n}\n.td-name {\n  max-width: 200px;\n}\n.name-text {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n}\n.td-muted {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-12);\n}\n.td-channels {\n  white-space: normal;\n  max-width: 200px;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.td-num {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.category-pill {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 999px;\n  font-size: var(--text-11);\n  font-weight: 600;\n  background: rgba(26, 79, 138, 0.1);\n  color: #1a4f8a;\n  letter-spacing: 0.04em;\n}\n.version-pill {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-size: var(--text-11);\n  font-weight: 600;\n  background: var(--input-bg-disabled);\n  color: var(--sidebar-text-muted);\n  font-family: var(--font-mono, monospace);\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: var(--text-12);\n  font-weight: 600;\n}\n.badge-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.badge--ok {\n  background: rgba(34, 197, 94, 0.1);\n  color: #166534;\n}\n.badge--ok .badge-dot {\n  background: #22c55e;\n}\n.badge--warn {\n  background: rgba(245, 158, 11, 0.12);\n  color: #92400e;\n}\n.badge--warn .badge-dot {\n  background: #f59e0b;\n}\n.badge--bad {\n  background: rgba(239, 68, 68, 0.1);\n  color: #991b1b;\n}\n.badge--bad .badge-dot {\n  background: #ef4444;\n}\n.badge--default {\n  background: var(--input-bg-disabled);\n  color: var(--sidebar-text-muted);\n}\n.badge--default .badge-dot {\n  background: var(--sidebar-text-muted);\n}\n.empty-row {\n  text-align: center;\n  padding: var(--space-8) !important;\n}\n.empty-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  color: var(--sidebar-text-muted);\n}\n.empty-card p {\n  font-size: var(--text-14);\n  margin: 0;\n}\n.ph-icon {\n  font-size: 40px !important;\n  width: 40px !important;\n  height: 40px !important;\n  opacity: 0.3;\n}\n.empty.dashed {\n  text-align: center;\n  padding: var(--space-6);\n  border: 1px dashed var(--input-border-color);\n  border-radius: var(--card-radius);\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n}\n.pager {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px var(--space-5);\n  border-top: 1px solid var(--input-border-color);\n  flex-wrap: wrap;\n  gap: var(--space-2);\n}\n.pager-info {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.pager-info strong {\n  color: var(--input-text-color);\n}\n.pager-btns {\n  display: flex;\n  gap: var(--space-2);\n}\n@media (max-width: 1024px) {\n  .vbar-row {\n    grid-template-columns: 100px 1fr 36px;\n  }\n}\n@media (max-width: 768px) {\n  .charts-row {\n    grid-template-columns: 1fr;\n  }\n  .pie-wrapper {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .legend-item {\n    grid-template-columns: 10px 1fr auto;\n  }\n  .legend-count {\n    display: none;\n  }\n}\n/*# sourceMappingURL=mis-report-consent-inventory-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportConsentInventoryTabComponent, { className: "MisReportConsentInventoryTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-consent-inventory-tab/mis-report-consent-inventory-tab.component.ts", lineNumber: 53 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-active-consents-tab/mis-report-active-consents-tab.component.ts
var _forTrack010 = ($index, $item) => $item.period;
function MisReportActiveConsentsTabComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275element(2, "div", 17)(3, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("trend--up", d_r1.currentLiveTemplates.changePercentVsPrior >= 0)("trend--down", d_r1.currentLiveTemplates.changePercentVsPrior < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.trendArrow(d_r1.currentLiveTemplates.changePercentVsPrior), " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 6, d_r1.currentLiveTemplates.changePercentVsPrior, "1.0-1"), "% vs range start ");
  }
}
function MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("trend--up", d_r1.peakBucketActivations.changePercentVsPrior >= 0)("trend--down", d_r1.peakBucketActivations.changePercentVsPrior < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.trendArrow(d_r1.peakBucketActivations.changePercentVsPrior), " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 6, d_r1.peakBucketActivations.changePercentVsPrior, "1.0-1"), "% vs prior window ");
  }
}
function MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_27_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 58);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const pt_r3 = ctx.$implicit;
    \u0275\u0275property("matTooltip", pt_r3.period + ": " + \u0275\u0275pipeBind1(1, 3, pt_r3.count));
    \u0275\u0275attribute("cx", pt_r3.x)("cy", pt_r3.y);
  }
}
function MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_27_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.period);
  }
}
function MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "Activation timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 43)(8, "defs")(9, "linearGradient", 44);
    \u0275\u0275element(10, "stop", 45)(11, "stop", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "filter", 47);
    \u0275\u0275element(13, "feGaussianBlur", 48);
    \u0275\u0275elementStart(14, "feMerge");
    \u0275\u0275element(15, "feMergeNode", 49)(16, "feMergeNode", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "use", 52)(19, "use", 53)(20, "use", 54)(21, "use", 55)(22, "polygon", 56)(23, "polyline", 57);
    \u0275\u0275repeaterCreate(24, MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_27_For_25_Template, 2, 5, ":svg:circle", 58, _forTrack010);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 59);
    \u0275\u0275repeaterCreate(27, MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_27_For_28_Template, 2, 1, "span", null, _forTrack010);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Peak: ", \u0275\u0275pipeBind1(5, 3, ctx_r1.trendMax()), " ");
    \u0275\u0275advance(18);
    \u0275\u0275attribute("points", ctx_r1.areaPolygon());
    \u0275\u0275advance();
    \u0275\u0275attribute("points", ctx_r1.polyline());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dotPoints());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.points());
  }
}
function MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "path", 61)(3, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No activations found in this window.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Try adjusting the date range or grouping.");
    \u0275\u0275elementEnd()();
  }
}
function MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "article", 20)(2, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 22);
    \u0275\u0275element(4, "path", 23)(5, "polyline", 24)(6, "line", 25)(7, "line", 26)(8, "polyline", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 29);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_14_Template, 5, 9, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "article", 31)(16, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 22);
    \u0275\u0275element(18, "polyline", 33)(19, "polyline", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 28);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 29);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_25_Template, 5, 9, "div", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 35);
    \u0275\u0275template(27, MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_27_Template, 29, 5)(28, MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Conditional_28_Template, 8, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", d_r1.currentLiveTemplates.tooltip);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(d_r1.currentLiveTemplates.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, d_r1.currentLiveTemplates.value), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r1.currentLiveTemplates.changePercentVsPrior != null ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", d_r1.peakBucketActivations.tooltip);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r1.peakBucketActivations.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 11, d_r1.peakBucketActivations.value), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r1.peakBucketActivations.changePercentVsPrior != null ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.points().length ? 27 : 28);
  }
}
function MisReportActiveConsentsTabComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MisReportActiveConsentsTabComponent_Conditional_34_Conditional_0_Template, 29, 13);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.data()) ? 0 : -1, tmp_1_0);
  }
}
var MisReportActiveConsentsTabComponent = class _MisReportActiveConsentsTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.data = signal(null);
    this.loading = signal(false);
    this.groupBy = "MONTHLY";
    this.from = "";
    this.to = "";
    this.W = 620;
    this.H = 180;
    this.PAD = 10;
    this.trendMax = computed(() => {
      const s = this.data()?.series ?? [];
      return s.reduce((m, p) => Math.max(m, p.count), 1);
    });
  }
  // ── Lifecycle ───────────────────────────────────────────────────────────────
  ngOnInit() {
    this.reload();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ── Date helpers ────────────────────────────────────────────────────────────
  isoStart(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T00:00:00")).toISOString() : void 0;
  }
  isoEnd(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T23:59:59")).toISOString() : void 0;
  }
  // ── API ─────────────────────────────────────────────────────────────────────
  reload() {
    this.loading.set(true);
    this.adminApi.getMisActiveConsentsTimeline({
      groupBy: this.groupBy,
      fromDate: this.isoStart(this.from),
      toDate: this.isoEnd(this.to)
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.data.set(res.data);
        }
      },
      error: (e) => {
        this.loading.set(false);
        this.logger.error("MisActive", "timeline", e);
        this.notify.error("Active consents", e?.error?.message ?? "Load failed.");
      }
    });
  }
  // ── Point helpers ───────────────────────────────────────────────────────────
  points() {
    return this.data()?.series ?? [];
  }
  /** Shared (x, y) calculation for a point at index i */
  ptCoords(i, count) {
    const pts = this.points();
    const max = this.trendMax();
    const x = this.PAD + i * (this.W - this.PAD * 2) / Math.max(1, pts.length - 1);
    const y = this.H - this.PAD - (max === 0 ? 0 : count / max * (this.H - this.PAD * 2));
    return { x, y };
  }
  /** Polyline string for the line stroke */
  polyline() {
    return this.points().map((p, i) => {
      const { x, y } = this.ptCoords(i, p.count);
      return `${x},${y}`;
    }).join(" ");
  }
  /** Polygon string for the area fill */
  areaPolygon() {
    const pts = this.points();
    if (!pts.length) {
      return "";
    }
    const top = pts.map((p, i) => {
      const { x, y } = this.ptCoords(i, p.count);
      return `${x},${y}`;
    }).join(" ");
    return `${this.PAD},${this.H - this.PAD} ${top} ${this.W - this.PAD},${this.H - this.PAD}`;
  }
  /** Pre-computed dot positions for interactive circles */
  dotPoints() {
    return this.points().map((p, i) => {
      const { x, y } = this.ptCoords(i, p.count);
      return __spreadProps(__spreadValues({}, p), { x, y });
    });
  }
  /** ▲ / ▼ / — trend arrow */
  trendArrow(delta) {
    if (delta == null) {
      return "\u2014";
    }
    return delta >= 0 ? "\u25B2" : "\u25BC";
  }
  static {
    this.\u0275fac = function MisReportActiveConsentsTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportActiveConsentsTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportActiveConsentsTabComponent, selectors: [["app-mis-report-active-consents-tab"]], decls: 35, vars: 9, consts: [[1, "panel"], [1, "panel-head"], [1, "head-left"], [1, "eyebrow"], [1, "panel-title"], [1, "toggle-row"], ["type", "button", 1, "chip", 3, "click"], [1, "filters"], [1, "ff-date"], [1, "ff-label"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "apply-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], [1, "skeleton-wrap"], [1, "sk-kpi-row"], [1, "sk-kpi"], [1, "sk-chart"], [1, "kpi-row"], ["matTooltipPosition", "above", 1, "kpi-card", 3, "matTooltip"], [1, "kpi-icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-trend", 3, "trend--up", "trend--down"], ["matTooltipPosition", "above", 1, "kpi-card", "kpi-card--accent", 3, "matTooltip"], [1, "kpi-icon", "kpi-icon--accent"], ["points", "23 6 13.5 15.5 8.5 10.5 1 18"], ["points", "17 6 23 6 23 12"], [1, "chart-wrap"], [1, "empty-state"], [1, "kpi-trend"], [1, "trend-arrow"], [1, "chart-header"], [1, "chart-title"], [1, "chart-peak-badge"], [1, "chart-body"], ["viewBox", "0 0 620 180", "preserveAspectRatio", "xMidYMid meet", 1, "area-chart"], ["id", "areaGrad", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["offset", "0%", "stop-color", "#d4a843", "stop-opacity", "0.22"], ["offset", "100%", "stop-color", "#d4a843", "stop-opacity", "0"], ["id", "glow"], ["stdDeviation", "2.5", "result", "coloredBlur"], ["in", "coloredBlur"], ["in", "SourceGraphic"], ["id", "gl", "x1", "8", "x2", "612", "stroke", "#d1d5db", "stroke-opacity", "0.7", "stroke-width", "1"], ["href", "#gl", "y", "44"], ["href", "#gl", "y", "88"], ["href", "#gl", "y", "132"], ["href", "#gl", "y", "168"], [1, "area-fill"], ["filter", "url(#glow)", 1, "line-stroke"], ["r", "4", "matTooltipPosition", "above", 1, "dot", 3, "matTooltip"], [1, "x-labels"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", "opacity", "0.4"], ["d", "M3 3v18h18"], ["d", "m19 9-5 5-4-4-3 3"]], template: function MisReportActiveConsentsTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Consent Intelligence");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2", 4);
        \u0275\u0275text(6, " Templates reaching\xA0");
        \u0275\u0275elementStart(7, "em");
        \u0275\u0275text(8, "Published");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " / ");
        \u0275\u0275elementStart(10, "em");
        \u0275\u0275text(11, "Approved");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 5)(13, "button", 6);
        \u0275\u0275listener("click", function MisReportActiveConsentsTabComponent_Template_button_click_13_listener() {
          ctx.groupBy = "DAILY";
          return ctx.reload();
        });
        \u0275\u0275text(14, " Daily ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function MisReportActiveConsentsTabComponent_Template_button_click_15_listener() {
          ctx.groupBy = "WEEKLY";
          return ctx.reload();
        });
        \u0275\u0275text(16, " Weekly ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 6);
        \u0275\u0275listener("click", function MisReportActiveConsentsTabComponent_Template_button_click_17_listener() {
          ctx.groupBy = "MONTHLY";
          return ctx.reload();
        });
        \u0275\u0275text(18, " Monthly ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 7)(20, "label", 8)(21, "span", 9);
        \u0275\u0275text(22, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportActiveConsentsTabComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.from, $event) || (ctx.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "label", 8)(25, "span", 9);
        \u0275\u0275text(26, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function MisReportActiveConsentsTabComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.to, $event) || (ctx.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "button", 11);
        \u0275\u0275listener("click", function MisReportActiveConsentsTabComponent_Template_button_click_28_listener() {
          return ctx.reload();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(29, "svg", 12);
        \u0275\u0275element(30, "circle", 13)(31, "path", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " Apply range ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(33, MisReportActiveConsentsTabComponent_Conditional_33_Template, 5, 0, "div", 15)(34, MisReportActiveConsentsTabComponent_Conditional_34_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("chip--on", ctx.groupBy === "DAILY");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("chip--on", ctx.groupBy === "WEEKLY");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("chip--on", ctx.groupBy === "MONTHLY");
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.to);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading() && !ctx.data() ? 33 : 34);
      }
    }, dependencies: [DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatTooltipModule, MatTooltip], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05), 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -60px;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(212, 168, 67, 0.06) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n.head-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #d4a843;\n  opacity: 0.9;\n}\n.panel-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 1.35;\n  letter-spacing: -0.01em;\n  color: #0f172a;\n}\n.panel-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #d4a843;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  padding: 4px;\n}\n.chip[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  border-radius: 999px;\n  padding: 5px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  white-space: nowrap;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.chip[_ngcontent-%COMP%]:hover:not(.chip--on) {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.chip.chip--on[_ngcontent-%COMP%] {\n  background: #d4a843;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 4px 10px rgba(212, 168, 67, 0.22);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-end;\n  margin-bottom: 24px;\n  padding-bottom: 22px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.ff-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.ff-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.ff-date[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 7px 11px;\n  font-size: 13px;\n  color: #0f172a;\n  outline: none;\n  transition: border-color 0.16s, box-shadow 0.16s;\n  color-scheme: light;\n}\n.ff-date[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:hover, \n.ff-date[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus {\n  border-color: rgba(212, 168, 67, 0.55);\n  box-shadow: 0 0 0 3px rgba(212, 168, 67, 0.12);\n}\n.apply-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(212, 168, 67, 0.08);\n  border: 1px solid rgba(212, 168, 67, 0.28);\n  border-radius: 6px;\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #9a6b00;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    border-color 0.18s,\n    transform 0.12s;\n}\n.apply-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 168, 67, 0.16);\n  border-color: #d4a843;\n  transform: translateY(-1px);\n}\n.apply-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 18px 20px 16px;\n  position: relative;\n  overflow: hidden;\n  transition:\n    border-color 0.2s,\n    transform 0.18s,\n    box-shadow 0.18s;\n}\n.kpi-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0 auto auto 0;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(148, 163, 184, 0.25),\n      transparent);\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);\n}\n.kpi-card.kpi-card--accent[_ngcontent-%COMP%] {\n  border-color: rgba(212, 168, 67, 0.22);\n}\n.kpi-card.kpi-card--accent[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(212, 168, 67, 0.25),\n      transparent);\n}\n.kpi-card.kpi-card--accent[_ngcontent-%COMP%]:hover {\n  border-color: rgba(212, 168, 67, 0.4);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  margin-bottom: 12px;\n}\n.kpi-icon.kpi-icon--accent[_ngcontent-%COMP%] {\n  background: rgba(212, 168, 67, 0.08);\n  color: #d4a843;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.kpi-trend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n  font-size: 11px;\n  color: #64748b;\n}\n.kpi-trend[_ngcontent-%COMP%]   .trend-arrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.kpi-trend.trend--up[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.kpi-trend.trend--down[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.chart-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.chart-peak-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9a6b00;\n  background: rgba(212, 168, 67, 0.08);\n  border: 1px solid rgba(212, 168, 67, 0.22);\n  border-radius: 999px;\n  padding: 2px 10px;\n}\n.chart-body[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 4px 4px;\n  overflow: hidden;\n}\n.area-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.area-fill[_ngcontent-%COMP%] {\n  fill: url(#areaGrad);\n}\n.line-stroke[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #d4a843;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.dot[_ngcontent-%COMP%] {\n  fill: #ffffff;\n  stroke: #d4a843;\n  stroke-width: 2;\n  cursor: pointer;\n  transition: r 0.15s, fill 0.15s;\n}\n.dot[_ngcontent-%COMP%]:hover {\n  fill: #d4a843;\n  r: 6;\n}\n.x-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  overflow: hidden;\n  margin-top: 8px;\n  padding: 0 8px;\n  font-size: 10px;\n  color: #64748b;\n}\n.x-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 44px 24px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 10px;\n  color: #64748b;\n  text-align: center;\n  background: #f8fafc;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #334155;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.sk-chart[_ngcontent-%COMP%], \n.sk-kpi[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 0%,\n      #e2e8f0 50%,\n      #f1f5f9 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease-in-out infinite;\n}\n.skeleton-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sk-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.sk-kpi[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.sk-chart[_ngcontent-%COMP%] {\n  height: 210px;\n}\n/*# sourceMappingURL=mis-report-active-consents-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportActiveConsentsTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-active-consents-tab", standalone: true, imports: [DecimalPipe, FormsModule, MatButtonModule, MatTooltipModule], template: `<!-- <section class="panel">\r
  <div class="panel-head">\r
    <h2>Templates reaching PUBLISHED / APPROVED</h2>\r
    <div class="toggle-row">\r
      <button type="button" class="chip" [class.chip--on]="groupBy === 'DAILY'" (click)="groupBy = 'DAILY'; reload()">Daily</button>\r
      <button type="button" class="chip" [class.chip--on]="groupBy === 'WEEKLY'" (click)="groupBy = 'WEEKLY'; reload()">Weekly</button>\r
      <button type="button" class="chip" [class.chip--on]="groupBy === 'MONTHLY'" (click)="groupBy = 'MONTHLY'; reload()">Monthly</button>\r
    </div>\r
  </div>\r
  <div class="filters">\r
    <label class="ff-date"><span>From</span><input type="date" [(ngModel)]="from" /></label>\r
    <label class="ff-date"><span>To</span><input type="date" [(ngModel)]="to" /></label>\r
    <button mat-stroked-button type="button" (click)="reload()">Apply range</button>\r
  </div>\r
  @if (loading() && !data()) {\r
    <div class="sk-chart"></div>\r
  } @else {\r
    @if (data(); as d) {\r
    <section class="kpi-row">\r
      <article\r
        class="kpi-card"\r
        [matTooltip]="d.currentLiveTemplates.tooltip"\r
        matTooltipPosition="above"\r
      >\r
        <div class="kpi-label">{{ d.currentLiveTemplates.label }}</div>\r
        <div class="kpi-value">{{ d.currentLiveTemplates.value }}</div>\r
        <div class="kpi-trend">\r
          @if (d.currentLiveTemplates.changePercentVsPrior != null) {\r
            {{ trendArrow(d.currentLiveTemplates.changePercentVsPrior) }}\r
            {{ d.currentLiveTemplates.changePercentVsPrior | number: '1.0-1' }}% vs range start\r
          }\r
        </div>\r
      </article>\r
      <article\r
        class="kpi-card kpi-card--accent"\r
        [matTooltip]="d.peakBucketActivations.tooltip"\r
        matTooltipPosition="above"\r
      >\r
        <div class="kpi-label">{{ d.peakBucketActivations.label }}</div>\r
        <div class="kpi-value">{{ d.peakBucketActivations.value }}</div>\r
        <div class="kpi-trend">\r
          @if (d.peakBucketActivations.changePercentVsPrior != null) {\r
            {{ trendArrow(d.peakBucketActivations.changePercentVsPrior) }}\r
            {{ d.peakBucketActivations.changePercentVsPrior | number: '1.0-1' }}% vs prior window\r
          }\r
        </div>\r
      </article>\r
    </section>\r
    <div class="chart-wrap">\r
      @if (points().length) {\r
        <svg class="area-chart" viewBox="0 0 600 180" preserveAspectRatio="xMidYMid meet">\r
          <polygon class="area" [attr.points]="areaPolygon()" />\r
          <polyline class="line" [attr.points]="polyline()" />\r
        </svg>\r
        <div class="x-labels">\r
          @for (p of points(); track p.period) {\r
            <span>{{ p.period }}</span>\r
          }\r
        </div>\r
      } @else {\r
        <div class="empty dashed">No activations in this window.</div>\r
      }\r
    </div>\r
    }\r
  }\r
</section> -->\r
\r
<section class="panel">\r
\r
  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="panel-head">\r
    <div class="head-left">\r
      <span class="eyebrow">Consent Intelligence</span>\r
      <h2 class="panel-title">\r
        Templates reaching&nbsp;<em>Published</em> / <em>Approved</em>\r
      </h2>\r
    </div>\r
\r
    <div class="toggle-row">\r
      <button\r
        type="button"\r
        class="chip"\r
        [class.chip--on]="groupBy === 'DAILY'"\r
        (click)="groupBy = 'DAILY'; reload()"\r
      >\r
        Daily\r
      </button>\r
\r
      <button\r
        type="button"\r
        class="chip"\r
        [class.chip--on]="groupBy === 'WEEKLY'"\r
        (click)="groupBy = 'WEEKLY'; reload()"\r
      >\r
        Weekly\r
      </button>\r
\r
      <button\r
        type="button"\r
        class="chip"\r
        [class.chip--on]="groupBy === 'MONTHLY'"\r
        (click)="groupBy = 'MONTHLY'; reload()"\r
      >\r
        Monthly\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Filters \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="filters">\r
    <label class="ff-date">\r
      <span class="ff-label">From</span>\r
      <input type="date" [(ngModel)]="from" />\r
    </label>\r
\r
    <label class="ff-date">\r
      <span class="ff-label">To</span>\r
      <input type="date" [(ngModel)]="to" />\r
    </label>\r
\r
    <button type="button" class="apply-btn" (click)="reload()">\r
      <svg\r
        width="14"\r
        height="14"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2.5"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
      >\r
        <circle cx="11" cy="11" r="8"></circle>\r
        <path d="m21 21-4.35-4.35"></path>\r
      </svg>\r
\r
      Apply range\r
    </button>\r
  </div>\r
\r
  <!-- \u2500\u2500 Skeleton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (loading() && !data()) {\r
    <div class="skeleton-wrap">\r
      <div class="sk-kpi-row">\r
        <div class="sk-kpi"></div>\r
        <div class="sk-kpi"></div>\r
      </div>\r
      <div class="sk-chart"></div>\r
    </div>\r
  } @else {\r
    @if (data(); as d) {\r
\r
      <!-- \u2500\u2500 KPI Row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <section class="kpi-row">\r
\r
        <!-- Current Live Templates -->\r
        <article\r
          class="kpi-card"\r
          [matTooltip]="d.currentLiveTemplates.tooltip"\r
          matTooltipPosition="above"\r
        >\r
          <div class="kpi-icon">\r
            <svg\r
              width="18"\r
              height="18"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
            >\r
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\r
              <polyline points="14 2 14 8 20 8"></polyline>\r
              <line x1="16" y1="13" x2="8" y2="13"></line>\r
              <line x1="16" y1="17" x2="8" y2="17"></line>\r
              <polyline points="10 9 9 9 8 9"></polyline>\r
            </svg>\r
          </div>\r
\r
          <div class="kpi-label">{{ d.currentLiveTemplates.label }}</div>\r
          <div class="kpi-value">\r
            {{ d.currentLiveTemplates.value | number }}\r
          </div>\r
\r
          @if (d.currentLiveTemplates.changePercentVsPrior != null) {\r
            <div\r
              class="kpi-trend"\r
              [class.trend--up]="d.currentLiveTemplates.changePercentVsPrior >= 0"\r
              [class.trend--down]="d.currentLiveTemplates.changePercentVsPrior < 0"\r
            >\r
              <span class="trend-arrow">\r
                {{ trendArrow(d.currentLiveTemplates.changePercentVsPrior) }}\r
              </span>\r
\r
              {{ d.currentLiveTemplates.changePercentVsPrior | number:'1.0-1' }}%\r
              vs range start\r
            </div>\r
          }\r
        </article>\r
\r
        <!-- Peak Bucket Activations -->\r
        <article\r
          class="kpi-card kpi-card--accent"\r
          [matTooltip]="d.peakBucketActivations.tooltip"\r
          matTooltipPosition="above"\r
        >\r
          <div class="kpi-icon kpi-icon--accent">\r
            <svg\r
              width="18"\r
              height="18"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
            >\r
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>\r
              <polyline points="17 6 23 6 23 12"></polyline>\r
            </svg>\r
          </div>\r
\r
          <div class="kpi-label">{{ d.peakBucketActivations.label }}</div>\r
          <div class="kpi-value">\r
            {{ d.peakBucketActivations.value | number }}\r
          </div>\r
\r
          @if (d.peakBucketActivations.changePercentVsPrior != null) {\r
            <div\r
              class="kpi-trend"\r
              [class.trend--up]="d.peakBucketActivations.changePercentVsPrior >= 0"\r
              [class.trend--down]="d.peakBucketActivations.changePercentVsPrior < 0"\r
            >\r
              <span class="trend-arrow">\r
                {{ trendArrow(d.peakBucketActivations.changePercentVsPrior) }}\r
              </span>\r
\r
              {{ d.peakBucketActivations.changePercentVsPrior | number:'1.0-1' }}%\r
              vs prior window\r
            </div>\r
          }\r
        </article>\r
\r
      </section>\r
\r
      <!-- \u2500\u2500 Chart \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="chart-wrap">\r
\r
        @if (points().length) {\r
\r
          <div class="chart-header">\r
            <span class="chart-title">Activation timeline</span>\r
            <span class="chart-peak-badge">\r
              Peak: {{ trendMax() | number }}\r
            </span>\r
          </div>\r
\r
          <div class="chart-body">\r
            <svg\r
              class="area-chart"\r
              viewBox="0 0 620 180"\r
              preserveAspectRatio="xMidYMid meet"\r
            >\r
              <defs>\r
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">\r
                  <stop\r
                    offset="0%"\r
                    stop-color="#d4a843"\r
                    stop-opacity="0.22"\r
                  />\r
                  <stop\r
                    offset="100%"\r
                    stop-color="#d4a843"\r
                    stop-opacity="0"\r
                  />\r
                </linearGradient>\r
\r
                <filter id="glow">\r
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />\r
                  <feMerge>\r
                    <feMergeNode in="coloredBlur" />\r
                    <feMergeNode in="SourceGraphic" />\r
                  </feMerge>\r
                </filter>\r
\r
                <line\r
                  id="gl"\r
                  x1="8"\r
                  x2="612"\r
                  stroke="#d1d5db"\r
                  stroke-opacity="0.7"\r
                  stroke-width="1"\r
                />\r
              </defs>\r
\r
              <!-- Grid -->\r
              <use href="#gl" y="44"></use>\r
              <use href="#gl" y="88"></use>\r
              <use href="#gl" y="132"></use>\r
              <use href="#gl" y="168"></use>\r
\r
              <!-- Area -->\r
              <polygon\r
                class="area-fill"\r
                [attr.points]="areaPolygon()"\r
              ></polygon>\r
\r
              <!-- Line -->\r
              <polyline\r
                class="line-stroke"\r
                [attr.points]="polyline()"\r
                filter="url(#glow)"\r
              ></polyline>\r
\r
              <!-- Dots -->\r
              @for (pt of dotPoints(); track pt.period) {\r
                <circle\r
                  [attr.cx]="pt.x"\r
                  [attr.cy]="pt.y"\r
                  r="4"\r
                  class="dot"\r
                  [matTooltip]="pt.period + ': ' + (pt.count | number)"\r
                  matTooltipPosition="above"\r
                ></circle>\r
              }\r
            </svg>\r
          </div>\r
\r
          <!-- X Labels -->\r
          <div class="x-labels">\r
            @for (p of points(); track p.period) {\r
              <span>{{ p.period }}</span>\r
            }\r
          </div>\r
\r
        } @else {\r
\r
          <div class="empty-state">\r
            <svg\r
              width="32"\r
              height="32"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="1.5"\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
              opacity="0.4"\r
            >\r
              <path d="M3 3v18h18"></path>\r
              <path d="m19 9-5 5-4-4-3 3"></path>\r
            </svg>\r
\r
            <p>No activations found in this window.</p>\r
            <span>Try adjusting the date range or grouping.</span>\r
          </div>\r
\r
        }\r
      </div>\r
\r
    }\r
  }\r
</section>`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-active-consents-tab/mis-report-active-consents-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05), 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n.panel::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -60px;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(212, 168, 67, 0.06) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.panel-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n.head-left {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.eyebrow {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #d4a843;\n  opacity: 0.9;\n}\n.panel-title {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 1.35;\n  letter-spacing: -0.01em;\n  color: #0f172a;\n}\n.panel-title em {\n  font-style: normal;\n  color: #d4a843;\n}\n.toggle-row {\n  display: flex;\n  gap: 6px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  padding: 4px;\n}\n.chip {\n  border: none;\n  background: transparent;\n  border-radius: 999px;\n  padding: 5px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  white-space: nowrap;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n.chip:hover:not(.chip--on) {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.chip.chip--on {\n  background: #d4a843;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 4px 10px rgba(212, 168, 67, 0.22);\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-end;\n  margin-bottom: 24px;\n  padding-bottom: 22px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.ff-date {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.ff-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.ff-date input[type=date] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 7px 11px;\n  font-size: 13px;\n  color: #0f172a;\n  outline: none;\n  transition: border-color 0.16s, box-shadow 0.16s;\n  color-scheme: light;\n}\n.ff-date input[type=date]:hover,\n.ff-date input[type=date]:focus {\n  border-color: rgba(212, 168, 67, 0.55);\n  box-shadow: 0 0 0 3px rgba(212, 168, 67, 0.12);\n}\n.apply-btn {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(212, 168, 67, 0.08);\n  border: 1px solid rgba(212, 168, 67, 0.28);\n  border-radius: 6px;\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #9a6b00;\n  cursor: pointer;\n  transition:\n    background 0.18s,\n    border-color 0.18s,\n    transform 0.12s;\n}\n.apply-btn:hover {\n  background: rgba(212, 168, 67, 0.16);\n  border-color: #d4a843;\n  transform: translateY(-1px);\n}\n.apply-btn:active {\n  transform: translateY(0);\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 18px 20px 16px;\n  position: relative;\n  overflow: hidden;\n  transition:\n    border-color 0.2s,\n    transform 0.18s,\n    box-shadow 0.18s;\n}\n.kpi-card::after {\n  content: "";\n  position: absolute;\n  inset: 0 auto auto 0;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(148, 163, 184, 0.25),\n      transparent);\n}\n.kpi-card:hover {\n  border-color: #cbd5e1;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);\n}\n.kpi-card.kpi-card--accent {\n  border-color: rgba(212, 168, 67, 0.22);\n}\n.kpi-card.kpi-card--accent::after {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(212, 168, 67, 0.25),\n      transparent);\n}\n.kpi-card.kpi-card--accent:hover {\n  border-color: rgba(212, 168, 67, 0.4);\n}\n.kpi-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  margin-bottom: 12px;\n}\n.kpi-icon.kpi-icon--accent {\n  background: rgba(212, 168, 67, 0.08);\n  color: #d4a843;\n}\n.kpi-label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.kpi-value {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.kpi-trend {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n  font-size: 11px;\n  color: #64748b;\n}\n.kpi-trend .trend-arrow {\n  font-size: 10px;\n}\n.kpi-trend.trend--up {\n  color: #16a34a;\n}\n.kpi-trend.trend--down {\n  color: #dc2626;\n}\n.chart-wrap {\n  width: 100%;\n}\n.chart-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.chart-title {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.chart-peak-badge {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9a6b00;\n  background: rgba(212, 168, 67, 0.08);\n  border: 1px solid rgba(212, 168, 67, 0.22);\n  border-radius: 999px;\n  padding: 2px 10px;\n}\n.chart-body {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 4px 4px;\n  overflow: hidden;\n}\n.area-chart {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.area-fill {\n  fill: url(#areaGrad);\n}\n.line-stroke {\n  fill: none;\n  stroke: #d4a843;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.dot {\n  fill: #ffffff;\n  stroke: #d4a843;\n  stroke-width: 2;\n  cursor: pointer;\n  transition: r 0.15s, fill 0.15s;\n}\n.dot:hover {\n  fill: #d4a843;\n  r: 6;\n}\n.x-labels {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  overflow: hidden;\n  margin-top: 8px;\n  padding: 0 8px;\n  font-size: 10px;\n  color: #64748b;\n}\n.x-labels span {\n  flex: 1;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 44px 24px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 10px;\n  color: #64748b;\n  text-align: center;\n  background: #f8fafc;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #334155;\n}\n.empty-state span {\n  font-size: 12px;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.sk-chart,\n.sk-kpi {\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 0%,\n      #e2e8f0 50%,\n      #f1f5f9 100%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s ease-in-out infinite;\n}\n.skeleton-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sk-kpi-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.sk-kpi {\n  height: 100px;\n}\n.sk-chart {\n  height: 210px;\n}\n/*# sourceMappingURL=mis-report-active-consents-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportActiveConsentsTabComponent, { className: "MisReportActiveConsentsTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-active-consents-tab/mis-report-active-consents-tab.component.ts", lineNumber: 29 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-channel-deep-dive-tab/mis-report-channel-deep-dive-tab.component.ts
var _forTrack011 = ($index, $item) => $item.channel;
var _forTrack15 = ($index, $item) => $item.channel + "-" + $item.consentDbId;
function MisReportChannelDeepDiveTabComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 7);
    \u0275\u0275element(2, "div", 8)(3, "div", 8)(4, "div", 8)(5, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 9)(7, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function MisReportChannelDeepDiveTabComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 30)(2, "div", 31)(3, "mat-icon");
    \u0275\u0275text(4, "send");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32)(6, "span", 33);
    \u0275\u0275text(7, "Total Invites Sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 36)(13, "div", 37)(14, "mat-icon");
    \u0275\u0275text(15, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 32)(17, "span", 33);
    \u0275\u0275text(18, "Avg Success Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 34);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 39)(23, "div", 40)(24, "mat-icon");
    \u0275\u0275text(25, "emoji_events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 32)(27, "span", 33);
    \u0275\u0275text(28, "Top Channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 41);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 43)(33, "div", 44)(34, "mat-icon");
    \u0275\u0275text(35, "layers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 32)(37, "span", 33);
    \u0275\u0275text(38, "Active Channels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 34);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, ctx_r1.totalInvites(), "1.0-0"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r1.avgSuccessRate(), "%");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.topChannel());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.channelOptions().length);
  }
}
function MisReportChannelDeepDiveTabComponent_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("mouseenter", function MisReportChannelDeepDiveTabComponent_Conditional_16_For_10_Template_div_mouseenter_0_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hoveredChannel.set(c_r4.channel));
    })("mouseleave", function MisReportChannelDeepDiveTabComponent_Conditional_16_For_10_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hoveredChannel.set(null));
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "span", 48)(3, "mat-icon", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 50);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 51);
    \u0275\u0275element(10, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 53)(12, "span", 54);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 55);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("channel-bar-card--active", ctx_r1.hoveredChannel() === c_r4.channel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.channelIcon(c_r4.channel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.channel, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.heatColor(c_r4.successRatePercent));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 17, c_r4.successRatePercent, "1.0-1"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.barWidth(c_r4.totalInvitesSent, ctx_r1.channels()))("background", ctx_r1.heatGradient(c_r4.successRatePercent));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 20, c_r4.totalInvitesSent, "1.0-0"), " invites");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.heatBg(c_r4.successRatePercent))("color", ctx_r1.heatColor(c_r4.successRatePercent));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.rateLabel(c_r4.successRatePercent), " ");
  }
}
function MisReportChannelDeepDiveTabComponent_Conditional_16_ForEmpty_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon", 56);
    \u0275\u0275text(2, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No aggregate channel data available.");
    \u0275\u0275elementEnd()();
  }
}
function MisReportChannelDeepDiveTabComponent_Conditional_16_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r5 = ctx.$implicit;
    \u0275\u0275property("value", ch_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ch_r5);
  }
}
function MisReportChannelDeepDiveTabComponent_Conditional_16_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 57)(1, "td")(2, "div", 58)(3, "mat-icon", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 61)(8, "span", 62);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 64);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 64)(16, "span", 65);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 64)(20, "span", 66);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 67)(24, "div", 68)(25, "span", 69);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 70);
    \u0275\u0275element(29, "div", 71);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const \u0275$index_228_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("data-row--odd", \u0275$index_228_r7 % 2 !== 0)("data-row--highlighted", ctx_r1.hoveredChannel() === r_r6.channel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.channelIcon(r_r6.channel));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.channelBadgeClass(r_r6.channel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r6.channel, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r6.consentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.consentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 22, r_r6.invitesSent, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 25, r_r6.acceptedCount, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 28, r_r6.declinedOrPendingCount, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.heatBg(r_r6.successRatePercent));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.heatColor(r_r6.successRatePercent));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 31, r_r6.successRatePercent, "1.0-1"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", r_r6.successRatePercent, "%")("background", ctx_r1.heatColor(r_r6.successRatePercent));
  }
}
function MisReportChannelDeepDiveTabComponent_Conditional_16_ForEmpty_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72)(2, "div", 19)(3, "mat-icon", 56);
    \u0275\u0275text(4, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No invite rows match the selected filter.");
    \u0275\u0275elementEnd()()()();
  }
}
function MisReportChannelDeepDiveTabComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, MisReportChannelDeepDiveTabComponent_Conditional_16_Conditional_0_Template, 42, 7, "div", 11);
    \u0275\u0275elementStart(1, "section", 12)(2, "div", 13)(3, "div", 14)(4, "h3", 15);
    \u0275\u0275text(5, "Overall Channel Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 16);
    \u0275\u0275text(7, "Invite volume with success rate heatmap");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275repeaterCreate(9, MisReportChannelDeepDiveTabComponent_Conditional_16_For_10_Template, 17, 23, "div", 18, _forTrack011, false, MisReportChannelDeepDiveTabComponent_Conditional_16_ForEmpty_11_Template, 5, 0, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "section", 12)(13, "div", 13)(14, "div", 14)(15, "h3", 15);
    \u0275\u0275text(16, "Channel \xD7 Template Matrix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 16);
    \u0275\u0275text(18, "Heatmap scales red \u2192 green by success rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "mat-form-field", 21)(21, "mat-label");
    \u0275\u0275text(22, "Filter by channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportChannelDeepDiveTabComponent_Conditional_16_Template_mat_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.channelFilter, $event) || (ctx_r1.channelFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "mat-option", 23);
    \u0275\u0275text(25, "All channels");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, MisReportChannelDeepDiveTabComponent_Conditional_16_For_27_Template, 2, 2, "mat-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 25);
    \u0275\u0275listener("click", function MisReportChannelDeepDiveTabComponent_Conditional_16_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementStart(29, "mat-icon");
    \u0275\u0275text(30, "filter_list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Apply ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 26)(33, "table", 27)(34, "thead")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 28);
    \u0275\u0275text(41, "Invites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 28);
    \u0275\u0275text(43, "Accepted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 28);
    \u0275\u0275text(45, "Non-success");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 28);
    \u0275\u0275text(47, "Success %");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "tbody");
    \u0275\u0275repeaterCreate(49, MisReportChannelDeepDiveTabComponent_Conditional_16_For_50_Template, 30, 34, "tr", 29, _forTrack15, false, MisReportChannelDeepDiveTabComponent_Conditional_16_ForEmpty_51_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.channels().length ? 0 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.channels());
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.channelFilter);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.channelOptions());
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r1.matrix());
  }
}
var MisReportChannelDeepDiveTabComponent = class _MisReportChannelDeepDiveTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.channels = signal([]);
    this.matrix = signal([]);
    this.loading = signal(false);
    this.exporting = signal(false);
    this.hoveredChannel = signal(null);
    this.channelFilter = "";
    this.channelOptions = computed(() => {
      const labels = new Set(this.channels().map((c) => c.channel));
      this.matrix().forEach((r) => labels.add(r.channel));
      return [...labels].sort();
    });
    this.totalInvites = computed(() => this.channels().reduce((s, c) => s + c.totalInvitesSent, 0));
    this.avgSuccessRate = computed(() => {
      const rows = this.channels();
      if (!rows.length)
        return 0;
      return Math.round(rows.reduce((s, c) => s + c.successRatePercent, 0) / rows.length);
    });
    this.topChannel = computed(() => {
      const rows = this.channels();
      if (!rows.length)
        return "\u2014";
      return [...rows].sort((a, b) => b.successRatePercent - a.successRatePercent)[0].channel;
    });
  }
  ngOnInit() {
    this.reload();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  reload() {
    this.loading.set(true);
    forkJoin({
      base: this.adminApi.getMisChannelPerformance(),
      deep: this.adminApi.getMisChannelTemplatePerformance(this.channelFilter || void 0)
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ base, deep }) => {
        this.loading.set(false);
        if (base.success && base.data)
          this.channels.set(base.data);
        if (deep.success && deep.data)
          this.matrix.set(deep.data);
      },
      error: (e) => {
        this.loading.set(false);
        this.logger.error("MisChannelDeep", "load", e);
        this.notify.error("Channel deep-dive", e?.error?.message ?? "Load failed.");
      }
    });
  }
  applyFilter() {
    this.reload();
  }
  // ── Heat helpers ────────────────────────────────────────────────────────────
  heatBg(rate) {
    const t = Math.max(0, Math.min(100, rate)) / 100;
    const r = Math.round(239 + (34 - 239) * t);
    const g = Math.round(68 + (197 - 68) * t);
    const b = Math.round(68 + (94 - 68) * t);
    return `rgba(${r},${g},${b},0.14)`;
  }
  heatColor(rate) {
    const t = Math.max(0, Math.min(100, rate)) / 100;
    const r = Math.round(185 + (21 - 185) * t);
    const g = Math.round(28 + (163 - 28) * t);
    const b = Math.round(28 + (74 - 28) * t);
    return `rgb(${r},${g},${b})`;
  }
  heatGradient(rate) {
    const color = this.heatColor(rate);
    return `linear-gradient(90deg, ${color}cc, ${color})`;
  }
  rateLabel(rate) {
    if (rate >= 75)
      return "High";
    if (rate >= 40)
      return "Medium";
    return "Low";
  }
  barWidth(v, list) {
    const m = list.reduce((x, r) => Math.max(x, r.totalInvitesSent), 1);
    return `${m === 0 ? 0 : v / m * 100}%`;
  }
  // ── Channel icon mapping ────────────────────────────────────────────────────
  channelIcon(channel) {
    const ch = (channel ?? "").toLowerCase();
    if (ch.includes("email"))
      return "email";
    if (ch.includes("sms"))
      return "sms";
    if (ch.includes("whatsapp"))
      return "chat";
    if (ch.includes("push"))
      return "notifications";
    return "send";
  }
  channelBadgeClass(channel) {
    const ch = (channel ?? "").toLowerCase();
    if (ch.includes("email"))
      return "channel-badge channel-badge--email";
    if (ch.includes("sms"))
      return "channel-badge channel-badge--sms";
    if (ch.includes("whatsapp"))
      return "channel-badge channel-badge--whatsapp";
    if (ch.includes("push"))
      return "channel-badge channel-badge--push";
    return "channel-badge channel-badge--default";
  }
  // ── Export helpers ──────────────────────────────────────────────────────────
  dl(blob, name) {
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = name;
    a.click();
    URL.revokeObjectURL(u);
  }
  exportCsv() {
    this.exporting.set(true);
    this.adminApi.exportMisChannelTemplatePerformanceCsv(this.channelFilter || void 0).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "channel-template-performance.csv");
        this.notify.success("Export", "CSV started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  exportExcel() {
    this.exporting.set(true);
    this.adminApi.exportMisChannelTemplatePerformanceExcel(this.channelFilter || void 0).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "channel-template-performance.xlsx");
        this.notify.success("Export", "Excel started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function MisReportChannelDeepDiveTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportChannelDeepDiveTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportChannelDeepDiveTabComponent, selectors: [["app-mis-report-channel-deep-dive-tab"]], decls: 17, vars: 3, consts: [[1, "tab-toolbar"], [1, "toolbar-left"], [1, "toolbar-title"], [1, "toolbar-sub"], [1, "exports"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "skeleton-panel"], [1, "sk-kpi-row"], [1, "sk-kpi"], [1, "sk-block", "sk-block--chart"], [1, "sk-block", "sk-block--table"], [1, "kpi-row"], [1, "panel"], [1, "panel-header"], [1, "panel-title-group"], [1, "panel-title"], [1, "panel-sub"], [1, "channel-bars-grid"], [1, "channel-bar-card", 3, "channel-bar-card--active"], [1, "empty-card"], [1, "filters"], ["appearance", "outline", 1, "ff"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "horiz-scroll"], [1, "data-table"], [1, "th-num"], [1, "data-row", 3, "data-row--odd", "data-row--highlighted"], [1, "kpi-card", "kpi-card--blue"], [1, "kpi-icon-wrap", "kpi-icon-wrap--blue"], [1, "kpi-body"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-accent", "kpi-accent--blue"], [1, "kpi-card", "kpi-card--green"], [1, "kpi-icon-wrap", "kpi-icon-wrap--green"], [1, "kpi-accent", "kpi-accent--green"], [1, "kpi-card", "kpi-card--amber"], [1, "kpi-icon-wrap", "kpi-icon-wrap--amber"], [1, "kpi-value", "kpi-value--sm"], [1, "kpi-accent", "kpi-accent--amber"], [1, "kpi-card", "kpi-card--purple"], [1, "kpi-icon-wrap", "kpi-icon-wrap--purple"], [1, "kpi-accent", "kpi-accent--purple"], [1, "channel-bar-card", 3, "mouseenter", "mouseleave"], [1, "cbc-top"], [1, "cbc-name"], [1, "cbc-icon"], [1, "cbc-rate"], [1, "cbc-bar-track"], [1, "cbc-bar-fill"], [1, "cbc-bottom"], [1, "cbc-invites"], [1, "cbc-badge"], [1, "ph-icon"], [1, "data-row"], [1, "channel-cell"], [1, "ch-cell-icon"], [1, "channel-badge"], [1, "td-template"], [1, "template-name"], [1, "consent-id"], [1, "td-num"], [1, "num-accepted"], [1, "num-declined"], [1, "td-heat"], [1, "heat-cell"], [1, "heat-value"], [1, "heat-mini-bar"], [1, "heat-mini-fill"], ["colspan", "6", 1, "empty-row"]], template: function MisReportChannelDeepDiveTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Channel Deep-Dive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Per-template invite outcomes across delivery channels");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function MisReportChannelDeepDiveTabComponent_Template_button_click_7_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function MisReportChannelDeepDiveTabComponent_Template_button_click_11_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275elementStart(12, "mat-icon");
        \u0275\u0275text(13, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, MisReportChannelDeepDiveTabComponent_Conditional_15_Template, 8, 0, "section", 6)(16, MisReportChannelDeepDiveTabComponent_Conditional_16_Template, 52, 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 15 : 16);
      }
    }, dependencies: [
      DecimalPipe,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatInputModule,
      MatIconModule,
      MatIcon,
      MatTooltipModule
    ], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.toolbar-title[_ngcontent-%COMP%] {\n  font-size: var(--text-18);\n  font-weight: 800;\n  color: var(--input-text-color);\n  letter-spacing: -0.3px;\n}\n.toolbar-sub[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.exports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.skeleton-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.sk-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--space-3);\n}\n.sk-kpi[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 0%,\n      #f3f4f6 50%,\n      #e5e7eb 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_sk-sweep 1.1s ease-in-out infinite;\n  border-radius: var(--card-radius);\n  height: 88px;\n}\n.sk-block[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 0%,\n      #f3f4f6 50%,\n      #e5e7eb 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_sk-sweep 1.1s ease-in-out infinite;\n  border-radius: var(--card-radius);\n}\n.sk-block--chart[_ngcontent-%COMP%] {\n  height: 180px;\n}\n.sk-block--table[_ngcontent-%COMP%] {\n  height: 300px;\n}\n@keyframes _ngcontent-%COMP%_sk-sweep {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.kpi-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-4);\n  overflow: hidden;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);\n}\n.kpi-card--blue[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 28px rgba(26, 79, 138, 0.15);\n}\n.kpi-card--green[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 28px rgba(22, 163, 74, 0.15);\n}\n.kpi-card--amber[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 28px rgba(217, 119, 6, 0.15);\n}\n.kpi-card--purple[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 28px rgba(124, 58, 237, 0.15);\n}\n.kpi-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 0 var(--card-radius) var(--card-radius) 0;\n}\n.kpi-accent--blue[_ngcontent-%COMP%] {\n  background: #1a4f8a;\n}\n.kpi-accent--green[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.kpi-accent--amber[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.kpi-accent--purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.kpi-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.kpi-icon-wrap--blue[_ngcontent-%COMP%] {\n  background: rgba(26, 79, 138, 0.1);\n  color: #1a4f8a;\n}\n.kpi-icon-wrap--green[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.kpi-icon-wrap--amber[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.kpi-icon-wrap--purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n  flex: 1;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  white-space: nowrap;\n  font-weight: 500;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--input-text-color);\n  line-height: 1;\n  letter-spacing: -0.5px;\n}\n.kpi-value--sm[_ngcontent-%COMP%] {\n  font-size: var(--text-16);\n  font-weight: 700;\n  letter-spacing: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  margin-bottom: var(--space-5);\n  overflow: hidden;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  padding: var(--space-4) var(--space-5);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.panel-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--text-15);\n  font-weight: 700;\n  color: var(--input-text-color);\n  margin: 0;\n  letter-spacing: -0.1px;\n}\n.panel-sub[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  margin: 0;\n}\n.channel-bars-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: var(--space-3);\n  padding: var(--space-4) var(--space-5) var(--space-5);\n}\n.channel-bar-card[_ngcontent-%COMP%] {\n  padding: var(--space-3) var(--space-4);\n  border: 1.5px solid var(--input-border-color);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  cursor: default;\n  transition:\n    border-color 0.18s,\n    box-shadow 0.18s,\n    transform 0.18s;\n}\n.channel-bar-card[_ngcontent-%COMP%]:hover, \n.channel-bar-card--active[_ngcontent-%COMP%] {\n  border-color: rgba(26, 79, 138, 0.35);\n  box-shadow: 0 4px 20px rgba(26, 79, 138, 0.1);\n  transform: translateY(-1px);\n}\n.cbc-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cbc-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--text-13);\n  font-weight: 700;\n  color: var(--input-text-color);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.cbc-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  opacity: 0.65;\n}\n.cbc-rate[_ngcontent-%COMP%] {\n  font-size: var(--text-18);\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.cbc-bar-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.cbc-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.cbc-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cbc-invites[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  font-weight: 500;\n}\n.cbc-badge[_ngcontent-%COMP%] {\n  font-size: var(--text-10);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 2px 8px;\n  border-radius: 999px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.ff[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.horiz-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 2px solid rgba(26, 79, 138, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  text-align: left;\n  font-size: var(--text-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--sidebar-text-muted);\n  background: rgba(26, 79, 138, 0.025);\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   th.th-num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--input-border-color);\n  transition: background 0.12s;\n}\n.data-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-row[_ngcontent-%COMP%]:hover {\n  background: rgba(26, 79, 138, 0.03);\n}\n.data-row--odd[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.015);\n}\n.data-row--odd[_ngcontent-%COMP%]:hover {\n  background: rgba(26, 79, 138, 0.04);\n}\n.data-row--highlighted[_ngcontent-%COMP%] {\n  background: rgba(26, 79, 138, 0.06) !important;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  vertical-align: middle;\n}\n.td-num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  font-weight: 500;\n  color: var(--input-text-color);\n}\n.channel-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ch-cell-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  color: var(--sidebar-text-muted);\n  opacity: 0.7;\n}\n.channel-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: var(--text-11);\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.channel-badge--email[_ngcontent-%COMP%] {\n  background: rgba(26, 79, 138, 0.1);\n  color: #1a4f8a;\n}\n.channel-badge--sms[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.channel-badge--push[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.channel-badge--whatsapp[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.channel-badge--default[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n  color: #475569;\n}\n.td-template[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n.template-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--input-text-color);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.consent-id[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--text-11);\n  color: var(--sidebar-text-muted);\n  margin-top: 2px;\n}\n.num-accepted[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.num-declined[_ngcontent-%COMP%] {\n  color: var(--sidebar-text-muted);\n}\n.td-heat[_ngcontent-%COMP%] {\n  transition: background 0.2s;\n  min-width: 110px;\n}\n.heat-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.heat-value[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.3px;\n}\n.heat-mini-bar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 4px;\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.heat-mini-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.5s ease;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.empty-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-8);\n  color: var(--sidebar-text-muted);\n}\n.empty-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-14);\n  margin: 0;\n}\n.ph-icon[_ngcontent-%COMP%] {\n  font-size: 44px !important;\n  width: 44px !important;\n  height: 44px !important;\n  opacity: 0.25;\n}\n@media (max-width: 1024px) {\n  .channel-bars-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sk-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .channel-bars-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .kpi-value[_ngcontent-%COMP%] {\n    font-size: var(--text-20);\n  }\n}\n/*# sourceMappingURL=mis-report-channel-deep-dive-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportChannelDeepDiveTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-channel-deep-dive-tab", standalone: true, imports: [
      DecimalPipe,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatIconModule,
      MatTooltipModule
    ], template: `<!-- <section class="panel">\r
  <div class="tab-toolbar">\r
    <h2>Channel \xD7 template matrix</h2>\r
    <div class="exports">\r
      <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportCsv()">\r
        <mat-icon>download</mat-icon> CSV\r
      </button>\r
      <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportExcel()">\r
        <mat-icon>table_chart</mat-icon> Excel\r
      </button>\r
    </div>\r
  </div>\r
  <p class="muted">Extends aggregate channel performance with per-consent-template invite outcomes.</p>\r
  <div class="filters">\r
    <mat-form-field appearance="outline" class="ff">\r
      <mat-label>Channel filter</mat-label>\r
      <mat-select [(ngModel)]="channelFilter">\r
        <mat-option value="">All channels</mat-option>\r
        @for (ch of channelOptions(); track ch) {\r
          <mat-option [value]="ch">{{ ch }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
    <button mat-stroked-button type="button" (click)="applyFilter()">Apply</button>\r
  </div>\r
  @if (loading()) {\r
    <div class="sk-table"></div>\r
  } @else {\r
    <div class="horiz-scroll">\r
      <table class="data-table heatmap">\r
        <thead>\r
          <tr>\r
            <th>Channel</th>\r
            <th>Template</th>\r
            <th>Invites</th>\r
            <th>Accepted</th>\r
            <th>Non-success</th>\r
            <th>Success %</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (r of matrix(); track r.channel + '-' + r.consentDbId) {\r
            <tr>\r
              <td>{{ r.channel }}</td>\r
              <td>{{ r.consentName }} <span class="muted">({{ r.consentId }})</span></td>\r
              <td>{{ r.invitesSent }}</td>\r
              <td>{{ r.acceptedCount }}</td>\r
              <td>{{ r.declinedOrPendingCount }}</td>\r
              <td class="heat" [style.background]="heatBg(r.successRatePercent)">\r
                {{ r.successRatePercent | number: '1.0-1' }}%\r
              </td>\r
            </tr>\r
          } @empty {\r
            <tr>\r
              <td colspan="6" class="empty">\r
                <mat-icon class="ph-icon">analytics</mat-icon>\r
                No invite rows match the filter.\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  }\r
</section>\r
\r
<section class="panel">\r
  <h2>Overall channel success (existing MIS)</h2>\r
  <div class="hbar-wrap">\r
    @for (c of channels(); track c.channel) {\r
      <div class="hbar-row">\r
        <span class="hbar-name">{{ c.channel }}</span>\r
        <div class="hbar-track">\r
          <div class="hbar-fill" [style.width]="barWidth(c.totalInvitesSent, channels())"></div>\r
        </div>\r
        <span class="hbar-meta">{{ c.successRatePercent | number: '1.0-1' }}%</span>\r
      </div>\r
    } @empty {\r
      <p class="empty">No aggregate channel data.</p>\r
    }\r
  </div>\r
</section> -->\r
\r
<!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="tab-toolbar">\r
  <div class="toolbar-left">\r
    <span class="toolbar-title">Channel Deep-Dive</span>\r
    <span class="toolbar-sub">Per-template invite outcomes across delivery channels</span>\r
  </div>\r
  <div class="exports">\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportCsv()">\r
      <mat-icon>download</mat-icon> CSV\r
    </button>\r
    <button mat-stroked-button type="button" [disabled]="exporting()" (click)="exportExcel()">\r
      <mat-icon>table_chart</mat-icon> Excel\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 Skeleton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
@if (loading()) {\r
<section class="skeleton-panel" aria-hidden="true">\r
  <div class="sk-kpi-row">\r
    <div class="sk-kpi"></div>\r
    <div class="sk-kpi"></div>\r
    <div class="sk-kpi"></div>\r
    <div class="sk-kpi"></div>\r
  </div>\r
  <div class="sk-block sk-block--chart"></div>\r
  <div class="sk-block sk-block--table"></div>\r
</section>\r
} @else {\r
\r
<!-- \u2500\u2500 KPI Cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
@if (channels().length) {\r
<div class="kpi-row">\r
  <div class="kpi-card kpi-card--blue">\r
    <div class="kpi-icon-wrap kpi-icon-wrap--blue">\r
      <mat-icon>send</mat-icon>\r
    </div>\r
    <div class="kpi-body">\r
      <span class="kpi-label">Total Invites Sent</span>\r
      <span class="kpi-value">{{ totalInvites() | number:'1.0-0' }}</span>\r
    </div>\r
    <div class="kpi-accent kpi-accent--blue"></div>\r
  </div>\r
\r
  <div class="kpi-card kpi-card--green">\r
    <div class="kpi-icon-wrap kpi-icon-wrap--green">\r
      <mat-icon>check_circle</mat-icon>\r
    </div>\r
    <div class="kpi-body">\r
      <span class="kpi-label">Avg Success Rate</span>\r
      <span class="kpi-value">{{ avgSuccessRate() }}%</span>\r
    </div>\r
    <div class="kpi-accent kpi-accent--green"></div>\r
  </div>\r
\r
  <div class="kpi-card kpi-card--amber">\r
    <div class="kpi-icon-wrap kpi-icon-wrap--amber">\r
      <mat-icon>emoji_events</mat-icon>\r
    </div>\r
    <div class="kpi-body">\r
      <span class="kpi-label">Top Channel</span>\r
      <span class="kpi-value kpi-value--sm">{{ topChannel() }}</span>\r
    </div>\r
    <div class="kpi-accent kpi-accent--amber"></div>\r
  </div>\r
\r
  <div class="kpi-card kpi-card--purple">\r
    <div class="kpi-icon-wrap kpi-icon-wrap--purple">\r
      <mat-icon>layers</mat-icon>\r
    </div>\r
    <div class="kpi-body">\r
      <span class="kpi-label">Active Channels</span>\r
      <span class="kpi-value">{{ channelOptions().length }}</span>\r
    </div>\r
    <div class="kpi-accent kpi-accent--purple"></div>\r
  </div>\r
</div>\r
}\r
\r
<!-- \u2500\u2500 Channel Performance Bars \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<section class="panel">\r
  <div class="panel-header">\r
    <div class="panel-title-group">\r
      <h3 class="panel-title">Overall Channel Performance</h3>\r
      <p class="panel-sub">Invite volume with success rate heatmap</p>\r
    </div>\r
  </div>\r
  <div class="channel-bars-grid">\r
    @for (c of channels(); track c.channel; let i = $index) {\r
    <div class="channel-bar-card" [class.channel-bar-card--active]="hoveredChannel() === c.channel"\r
      (mouseenter)="hoveredChannel.set(c.channel)" (mouseleave)="hoveredChannel.set(null)">\r
      <div class="cbc-top">\r
        <span class="cbc-name">\r
          <mat-icon class="cbc-icon">{{ channelIcon(c.channel) }}</mat-icon>\r
          {{ c.channel }}\r
        </span>\r
        <span class="cbc-rate" [style.color]="heatColor(c.successRatePercent)">\r
          {{ c.successRatePercent | number:'1.0-1' }}%\r
        </span>\r
      </div>\r
      <div class="cbc-bar-track">\r
        <div class="cbc-bar-fill" [style.width]="barWidth(c.totalInvitesSent, channels())"\r
          [style.background]="heatGradient(c.successRatePercent)"></div>\r
      </div>\r
      <div class="cbc-bottom">\r
        <span class="cbc-invites">{{ c.totalInvitesSent | number:'1.0-0' }} invites</span>\r
        <span class="cbc-badge" [style.background]="heatBg(c.successRatePercent)"\r
          [style.color]="heatColor(c.successRatePercent)">\r
          {{ rateLabel(c.successRatePercent) }}\r
        </span>\r
      </div>\r
    </div>\r
    } @empty {\r
    <div class="empty-card">\r
      <mat-icon class="ph-icon">bar_chart</mat-icon>\r
      <p>No aggregate channel data available.</p>\r
    </div>\r
    }\r
  </div>\r
</section>\r
\r
<!-- \u2500\u2500 Channel \xD7 Template Matrix \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<section class="panel">\r
  <div class="panel-header">\r
    <div class="panel-title-group">\r
      <h3 class="panel-title">Channel \xD7 Template Matrix</h3>\r
      <p class="panel-sub">Heatmap scales red \u2192 green by success rate</p>\r
    </div>\r
    <div class="filters">\r
      <mat-form-field appearance="outline" class="ff">\r
        <mat-label>Filter by channel</mat-label>\r
        <mat-select [(ngModel)]="channelFilter">\r
          <mat-option value="">All channels</mat-option>\r
          @for (ch of channelOptions(); track ch) {\r
          <mat-option [value]="ch">{{ ch }}</mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
      <button mat-flat-button color="primary" type="button" (click)="applyFilter()">\r
        <mat-icon>filter_list</mat-icon> Apply\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="horiz-scroll">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>Channel</th>\r
          <th>Template</th>\r
          <th class="th-num">Invites</th>\r
          <th class="th-num">Accepted</th>\r
          <th class="th-num">Non-success</th>\r
          <th class="th-num">Success %</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (r of matrix(); track r.channel + '-' + r.consentDbId; let odd = $odd) {\r
        <tr class="data-row" [class.data-row--odd]="odd" [class.data-row--highlighted]="hoveredChannel() === r.channel">\r
          <td>\r
            <div class="channel-cell">\r
              <mat-icon class="ch-cell-icon">{{ channelIcon(r.channel) }}</mat-icon>\r
              <span class="channel-badge" [class]="channelBadgeClass(r.channel)">\r
                {{ r.channel }}\r
              </span>\r
            </div>\r
          </td>\r
          <td class="td-template">\r
            <span class="template-name">{{ r.consentName }}</span>\r
            <span class="consent-id">{{ r.consentId }}</span>\r
          </td>\r
          <td class="td-num">{{ r.invitesSent | number:'1.0-0' }}</td>\r
          <td class="td-num">\r
            <span class="num-accepted">{{ r.acceptedCount | number:'1.0-0' }}</span>\r
          </td>\r
          <td class="td-num">\r
            <span class="num-declined">{{ r.declinedOrPendingCount | number:'1.0-0' }}</span>\r
          </td>\r
          <td class="td-heat" [style.background]="heatBg(r.successRatePercent)">\r
            <div class="heat-cell">\r
              <span class="heat-value" [style.color]="heatColor(r.successRatePercent)">\r
                {{ r.successRatePercent | number:'1.0-1' }}%\r
              </span>\r
              <div class="heat-mini-bar">\r
                <div class="heat-mini-fill" [style.width.%]="r.successRatePercent"\r
                  [style.background]="heatColor(r.successRatePercent)"></div>\r
              </div>\r
            </div>\r
          </td>\r
        </tr>\r
        } @empty {\r
        <tr>\r
          <td colspan="6" class="empty-row">\r
            <div class="empty-card">\r
              <mat-icon class="ph-icon">analytics</mat-icon>\r
              <p>No invite rows match the selected filter.</p>\r
            </div>\r
          </td>\r
        </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
</section>\r
\r
}`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-channel-deep-dive-tab/mis-report-channel-deep-dive-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.tab-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n  flex-wrap: wrap;\n}\n.toolbar-left {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.toolbar-title {\n  font-size: var(--text-18);\n  font-weight: 800;\n  color: var(--input-text-color);\n  letter-spacing: -0.3px;\n}\n.toolbar-sub {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.exports {\n  display: flex;\n  gap: var(--space-2);\n}\n.skeleton-panel {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.sk-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--space-3);\n}\n.sk-kpi {\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 0%,\n      #f3f4f6 50%,\n      #e5e7eb 100%);\n  background-size: 200% 100%;\n  animation: sk-sweep 1.1s ease-in-out infinite;\n  border-radius: var(--card-radius);\n  height: 88px;\n}\n.sk-block {\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 0%,\n      #f3f4f6 50%,\n      #e5e7eb 100%);\n  background-size: 200% 100%;\n  animation: sk-sweep 1.1s ease-in-out infinite;\n  border-radius: var(--card-radius);\n}\n.sk-block--chart {\n  height: 180px;\n}\n.sk-block--table {\n  height: 300px;\n}\n@keyframes sk-sweep {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.kpi-card {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-4);\n  overflow: hidden;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);\n}\n.kpi-card--blue:hover {\n  box-shadow: 0 8px 28px rgba(26, 79, 138, 0.15);\n}\n.kpi-card--green:hover {\n  box-shadow: 0 8px 28px rgba(22, 163, 74, 0.15);\n}\n.kpi-card--amber:hover {\n  box-shadow: 0 8px 28px rgba(217, 119, 6, 0.15);\n}\n.kpi-card--purple:hover {\n  box-shadow: 0 8px 28px rgba(124, 58, 237, 0.15);\n}\n.kpi-accent {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 0 var(--card-radius) var(--card-radius) 0;\n}\n.kpi-accent--blue {\n  background: #1a4f8a;\n}\n.kpi-accent--green {\n  background: #16a34a;\n}\n.kpi-accent--amber {\n  background: #d97706;\n}\n.kpi-accent--purple {\n  background: #7c3aed;\n}\n.kpi-icon-wrap {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon-wrap mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.kpi-icon-wrap--blue {\n  background: rgba(26, 79, 138, 0.1);\n  color: #1a4f8a;\n}\n.kpi-icon-wrap--green {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.kpi-icon-wrap--amber {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.kpi-icon-wrap--purple {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.kpi-body {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n  flex: 1;\n}\n.kpi-label {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  white-space: nowrap;\n  font-weight: 500;\n}\n.kpi-value {\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--input-text-color);\n  line-height: 1;\n  letter-spacing: -0.5px;\n}\n.kpi-value--sm {\n  font-size: var(--text-16);\n  font-weight: 700;\n  letter-spacing: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.panel {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  margin-bottom: var(--space-5);\n  overflow: hidden;\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  padding: var(--space-4) var(--space-5);\n  border-bottom: 1px solid var(--input-border-color);\n}\n.panel-title-group {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.panel-title {\n  font-size: var(--text-15);\n  font-weight: 700;\n  color: var(--input-text-color);\n  margin: 0;\n  letter-spacing: -0.1px;\n}\n.panel-sub {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  margin: 0;\n}\n.channel-bars-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: var(--space-3);\n  padding: var(--space-4) var(--space-5) var(--space-5);\n}\n.channel-bar-card {\n  padding: var(--space-3) var(--space-4);\n  border: 1.5px solid var(--input-border-color);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  cursor: default;\n  transition:\n    border-color 0.18s,\n    box-shadow 0.18s,\n    transform 0.18s;\n}\n.channel-bar-card:hover,\n.channel-bar-card--active {\n  border-color: rgba(26, 79, 138, 0.35);\n  box-shadow: 0 4px 20px rgba(26, 79, 138, 0.1);\n  transform: translateY(-1px);\n}\n.cbc-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cbc-name {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--text-13);\n  font-weight: 700;\n  color: var(--input-text-color);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.cbc-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  opacity: 0.65;\n}\n.cbc-rate {\n  font-size: var(--text-18);\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.cbc-bar-track {\n  height: 8px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.cbc-bar-fill {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.cbc-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cbc-invites {\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  font-weight: 500;\n}\n.cbc-badge {\n  font-size: var(--text-10);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 2px 8px;\n  border-radius: 999px;\n}\n.filters {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.ff {\n  min-width: 200px;\n}\n.horiz-scroll {\n  overflow-x: auto;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n}\n.data-table thead tr {\n  border-bottom: 2px solid rgba(26, 79, 138, 0.12);\n}\n.data-table th {\n  padding: 11px 16px;\n  text-align: left;\n  font-size: var(--text-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--sidebar-text-muted);\n  background: rgba(26, 79, 138, 0.025);\n  white-space: nowrap;\n}\n.data-table th.th-num {\n  text-align: right;\n}\n.data-row {\n  border-bottom: 1px solid var(--input-border-color);\n  transition: background 0.12s;\n}\n.data-row:last-child {\n  border-bottom: none;\n}\n.data-row:hover {\n  background: rgba(26, 79, 138, 0.03);\n}\n.data-row--odd {\n  background: rgba(0, 0, 0, 0.015);\n}\n.data-row--odd:hover {\n  background: rgba(26, 79, 138, 0.04);\n}\n.data-row--highlighted {\n  background: rgba(26, 79, 138, 0.06) !important;\n}\n.data-table td {\n  padding: 12px 16px;\n  vertical-align: middle;\n}\n.td-num {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  font-weight: 500;\n  color: var(--input-text-color);\n}\n.channel-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ch-cell-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  color: var(--sidebar-text-muted);\n  opacity: 0.7;\n}\n.channel-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: var(--text-11);\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.channel-badge--email {\n  background: rgba(26, 79, 138, 0.1);\n  color: #1a4f8a;\n}\n.channel-badge--sms {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.channel-badge--push {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.channel-badge--whatsapp {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.channel-badge--default {\n  background: rgba(100, 116, 139, 0.1);\n  color: #475569;\n}\n.td-template {\n  max-width: 260px;\n}\n.template-name {\n  display: block;\n  font-weight: 600;\n  color: var(--input-text-color);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.consent-id {\n  display: block;\n  font-size: var(--text-11);\n  color: var(--sidebar-text-muted);\n  margin-top: 2px;\n}\n.num-accepted {\n  color: #16a34a;\n  font-weight: 600;\n}\n.num-declined {\n  color: var(--sidebar-text-muted);\n}\n.td-heat {\n  transition: background 0.2s;\n  min-width: 110px;\n}\n.heat-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.heat-value {\n  font-size: var(--text-13);\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.3px;\n}\n.heat-mini-bar {\n  width: 72px;\n  height: 4px;\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.heat-mini-fill {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.5s ease;\n}\n.empty-row {\n  text-align: center;\n}\n.empty-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-8);\n  color: var(--sidebar-text-muted);\n}\n.empty-card p {\n  font-size: var(--text-14);\n  margin: 0;\n}\n.ph-icon {\n  font-size: 44px !important;\n  width: 44px !important;\n  height: 44px !important;\n  opacity: 0.25;\n}\n@media (max-width: 1024px) {\n  .channel-bars-grid {\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sk-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .channel-bars-grid {\n    grid-template-columns: 1fr;\n  }\n  .panel-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .kpi-value {\n    font-size: var(--text-20);\n  }\n}\n/*# sourceMappingURL=mis-report-channel-deep-dive-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportChannelDeepDiveTabComponent, { className: "MisReportChannelDeepDiveTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-channel-deep-dive-tab/mis-report-channel-deep-dive-tab.component.ts", lineNumber: 32 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-consent-leaderboard-tab/mis-report-consent-leaderboard-tab.component.ts
var _forTrack012 = ($index, $item) => $item.consentDbId;
var _forTrack16 = ($index, $item) => $item.channel;
function MisReportConsentLeaderboardTabComponent_Conditional_41_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 28);
  }
  if (rf & 2) {
    const $index_r1 = ctx.$index;
    \u0275\u0275styleProp("opacity", 1 - $index_r1 * 0.1);
  }
}
function MisReportConsentLeaderboardTabComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275repeaterCreate(2, MisReportConsentLeaderboardTabComponent_Conditional_41_For_3_Template, 1, 2, "div", 27, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.skRows);
  }
}
function MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_122_r5 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.medal(\u0275$index_122_r5));
  }
}
function MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_122_r5 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentPage() * ctx_r1.pageSize + \u0275$index_122_r5 + 1);
  }
}
function MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_33_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 66)(1, "td")(2, "span", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 49);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 51)(11, "div", 68);
    \u0275\u0275element(12, "div", 69);
    \u0275\u0275elementStart(13, "span", 54);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r7.channel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, c_r7.invitesSent));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, c_r7.acceptedCount));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.sparkWidth(c_r7.successRatePercent));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 10, c_r7.successRatePercent, "1.0-1"), "%");
  }
}
function MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_33_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 70);
    \u0275\u0275text(2, "No per-channel traffic available.");
    \u0275\u0275elementEnd()();
  }
}
function MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 59)(1, "td", 60)(2, "div", 61)(3, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 63);
    \u0275\u0275element(5, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Channel breakdown ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "table", 65)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 32);
    \u0275\u0275text(13, "Invites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 32);
    \u0275\u0275text(15, "Accepted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 33);
    \u0275\u0275text(17, "Success rate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_33_For_20_Template, 16, 13, "tr", 66, _forTrack16, false, MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_33_ForEmpty_21_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(19);
    \u0275\u0275repeater(r_r6.channelSplits);
  }
}
function MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 43)(1, "td", 44);
    \u0275\u0275template(2, MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_2_Template, 2, 1, "span", 45)(3, MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_3_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 47)(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 49);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 49);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 50);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 51)(17, "div", 52);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275element(19, "div", 53);
    \u0275\u0275elementStart(20, "span", 54);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td", 49)(24, "span", 55);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 49);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 56)(30, "button", 57);
    \u0275\u0275listener("click", function MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Template_button_click_30_listener() {
      const r_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggle(r_r6.consentDbId));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 40);
    \u0275\u0275element(32, "polyline", 58);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(33, MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Conditional_33_Template, 22, 1, "tr", 59);
  }
  if (rf & 2) {
    let tmp_23_0;
    const r_r6 = ctx.$implicit;
    const \u0275$index_122_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("data-row--expanded", ctx_r1.expandedId === r_r6.consentDbId);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.medal(\u0275$index_122_r5) ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r6.consentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 19, r_r6.totalBroadcastExecutions));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 21, r_r6.totalRecipientsInvited));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 23, r_r6.totalAccepted));
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", "Acceptance rate: " + \u0275\u0275pipeBind2(18, 25, r_r6.acceptanceRatePercent, "1.0-1") + "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.sparkWidth(r_r6.acceptanceRatePercent));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 28, r_r6.acceptanceRatePercent, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("rate-pill--high", r_r6.reEngagementRatePercent >= 50);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 31, r_r6.reEngagementRatePercent, "1.0-1"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_23_0 = r_r6.averageHoursToAccept) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("expand-btn--open", ctx_r1.expandedId === r_r6.consentDbId);
    \u0275\u0275property("matTooltip", ctx_r1.expandedId === r_r6.consentDbId ? "Hide channels" : "View channels");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.expandedId === r_r6.consentDbId ? 33 : -1);
  }
}
function MisReportConsentLeaderboardTabComponent_Conditional_42_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 60)(2, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 72);
    \u0275\u0275element(4, "circle", 73)(5, "path", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "No published templates to rank.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Templates will appear here once they reach Published or Approved status.");
    \u0275\u0275elementEnd()()()();
  }
}
function MisReportConsentLeaderboardTabComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "table", 30)(2, "thead")(3, "tr")(4, "th", 31);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 32);
    \u0275\u0275text(9, "Broadcasts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 32);
    \u0275\u0275text(11, "Invites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 32);
    \u0275\u0275text(13, "Accepted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 33);
    \u0275\u0275text(15, "Acceptance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 32);
    \u0275\u0275text(17, "Re-engage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 32);
    \u0275\u0275text(19, "Avg TAT\xA0");
    \u0275\u0275elementStart(20, "span", 34);
    \u0275\u0275text(21, "(h)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "th", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, MisReportConsentLeaderboardTabComponent_Conditional_42_For_25_Template, 34, 34, null, null, _forTrack012, false, MisReportConsentLeaderboardTabComponent_Conditional_42_ForEmpty_26_Template, 10, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 36)(28, "span", 37);
    \u0275\u0275text(29, " Page ");
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " of ");
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 38)(36, "button", 39);
    \u0275\u0275listener("click", function MisReportConsentLeaderboardTabComponent_Conditional_42_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 40);
    \u0275\u0275element(38, "polyline", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "button", 39);
    \u0275\u0275listener("click", function MisReportConsentLeaderboardTabComponent_Conditional_42_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(41, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 40);
    \u0275\u0275element(43, "polyline", 42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r1.rows());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.currentPage() + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.totalPages() || 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() <= 0 || ctx_r1.loading());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.currentPage() >= ctx_r1.totalPages() - 1 || ctx_r1.loading());
  }
}
var MisReportConsentLeaderboardTabComponent = class _MisReportConsentLeaderboardTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.rows = signal([]);
    this.loading = signal(false);
    this.exporting = signal(false);
    this.totalPages = signal(0);
    this.currentPage = signal(0);
    this.pageSize = 10;
    this.skRows = Array(this.pageSize).fill(0);
    this.sortKey = "REACH";
    this.expandedId = null;
  }
  // ── Lifecycle ─────────────────────────────────────────────────────────────────
  ngOnInit() {
    this.load(0);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ── Data ──────────────────────────────────────────────────────────────────────
  load(page) {
    this.loading.set(true);
    this.adminApi.getMisConsentPerformanceLeaderboard({ page, size: this.pageSize, sort: this.sortKey }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.rows.set(res.data.content);
          this.totalPages.set(res.data.totalPages);
          this.currentPage.set(res.data.currentPage);
        }
      },
      error: (e) => {
        this.loading.set(false);
        this.logger.error("MisLeaderboard", "load", e);
        this.notify.error("Leaderboard", e?.error?.message ?? "Load failed.");
      }
    });
  }
  applySort() {
    this.load(0);
  }
  prev() {
    const p = this.currentPage();
    if (p > 0)
      this.load(p - 1);
  }
  next() {
    const p = this.currentPage();
    if (p < this.totalPages() - 1)
      this.load(p + 1);
  }
  // ── Row helpers ───────────────────────────────────────────────────────────────
  toggle(id) {
    this.expandedId = this.expandedId === id ? null : id;
  }
  medal(rankIndex) {
    if (this.currentPage() !== 0)
      return "";
    return ["\u{1F947}", "\u{1F948}", "\u{1F949}"][rankIndex] ?? "";
  }
  sparkWidth(pct) {
    return `${Math.max(4, Math.min(100, pct ?? 0))}%`;
  }
  // ── Exports ───────────────────────────────────────────────────────────────────
  dl(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement("a"), { href: url, download: filename });
    a.click();
    URL.revokeObjectURL(url);
  }
  exportCsv() {
    this.exporting.set(true);
    this.adminApi.exportMisConsentPerformanceLeaderboardCsv(this.sortKey).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "consent-performance-leaderboard.csv");
        this.notify.success("Export", "CSV download started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "CSV export failed.");
      }
    });
  }
  exportExcel() {
    this.exporting.set(true);
    this.adminApi.exportMisConsentPerformanceLeaderboardExcel(this.sortKey).pipe(takeUntil(this.destroy$)).subscribe({
      next: (b) => {
        this.exporting.set(false);
        this.dl(b, "consent-performance-leaderboard.xlsx");
        this.notify.success("Export", "Excel download started.");
      },
      error: () => {
        this.exporting.set(false);
        this.notify.error("Export", "Excel export failed.");
      }
    });
  }
  static {
    this.\u0275fac = function MisReportConsentLeaderboardTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportConsentLeaderboardTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportConsentLeaderboardTabComponent, selectors: [["app-mis-report-consent-leaderboard-tab"]], decls: 43, vars: 9, consts: [[1, "panel"], [1, "panel-head"], [1, "head-left"], [1, "eyebrow"], [1, "panel-title"], [1, "export-group"], ["type", "button", 1, "export-btn", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["d", "M3 9h18M3 15h18M9 3v18"], [1, "filters"], [1, "sort-group"], [1, "sort-label"], [1, "sort-chips"], ["type", "button", 1, "sort-chip", 3, "click"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 4h16v16H4z"], ["d", "M9 9h6M9 13h4"], ["points", "20 6 9 17 4 12"], ["points", "17 1 21 5 17 9"], ["d", "M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"], ["d", "M21 13v2a4 4 0 0 1-4 4H3"], [1, "skeleton-wrap"], [1, "sk-thead"], [1, "sk-row", 3, "opacity"], [1, "sk-row"], [1, "horiz-scroll"], [1, "data-table"], [1, "th-rank"], [1, "th-num"], [1, "th-bar"], [1, "th-unit"], [1, "th-action"], [1, "pager"], [1, "pager-info"], [1, "pager-controls"], ["type", "button", 1, "pager-btn", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "15 18 9 12 15 6"], ["points", "9 18 15 12 9 6"], [1, "data-row"], [1, "td-rank"], [1, "medal"], [1, "rank-num"], [1, "td-name"], [1, "name-text"], [1, "td-num"], [1, "td-num", "td-accepted"], [1, "td-bar"], ["matTooltipPosition", "above", 1, "bar-track", 3, "matTooltip"], [1, "bar-fill"], [1, "bar-label"], [1, "rate-pill"], [1, "td-action"], ["type", "button", "matTooltipPosition", "above", 1, "expand-btn", 3, "click", "matTooltip"], ["points", "6 9 12 15 18 9"], [1, "detail-row"], ["colspan", "9"], [1, "detail-inner"], [1, "detail-header"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.26 19.79 19.79 0 0 1 1.65 4.59 2 2 0 0 1 3.62 2.4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.9a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 17z"], [1, "sub-table"], [1, "sub-row"], [1, "channel-badge"], [1, "bar-track", "bar-track--sub"], [1, "bar-fill", "bar-fill--teal"], ["colspan", "4", 1, "empty-sub"], [1, "empty-state"], ["width", "36", "height", "36", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round", "stroke-linejoin", "round", "opacity", "0.35"], ["cx", "12", "cy", "8", "r", "6"], ["d", "M12 14v7M8 18h8"]], template: function MisReportConsentLeaderboardTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "MIS Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2", 4);
        \u0275\u0275text(6, "Consent Performance ");
        \u0275\u0275elementStart(7, "em");
        \u0275\u0275text(8, "Leaderboard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function MisReportConsentLeaderboardTabComponent_Template_button_click_10_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 7);
        \u0275\u0275element(12, "path", 8)(13, "polyline", 9)(14, "line", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " CSV ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "button", 6);
        \u0275\u0275listener("click", function MisReportConsentLeaderboardTabComponent_Template_button_click_16_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 7);
        \u0275\u0275element(18, "rect", 11)(19, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "span", 15);
        \u0275\u0275text(24, "Sort by");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 16)(26, "button", 17);
        \u0275\u0275listener("click", function MisReportConsentLeaderboardTabComponent_Template_button_click_26_listener() {
          ctx.sortKey = "REACH";
          return ctx.applySort();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 18);
        \u0275\u0275element(28, "path", 19)(29, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Reach ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "button", 17);
        \u0275\u0275listener("click", function MisReportConsentLeaderboardTabComponent_Template_button_click_31_listener() {
          ctx.sortKey = "ACCEPTANCE";
          return ctx.applySort();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 18);
        \u0275\u0275element(33, "polyline", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " Acceptance ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(35, "button", 17);
        \u0275\u0275listener("click", function MisReportConsentLeaderboardTabComponent_Template_button_click_35_listener() {
          ctx.sortKey = "REENGAGEMENT";
          return ctx.applySort();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 18);
        \u0275\u0275element(37, "polyline", 22)(38, "path", 23)(39, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " Re-engagement ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(41, MisReportConsentLeaderboardTabComponent_Conditional_41_Template, 4, 0, "div", 25)(42, MisReportConsentLeaderboardTabComponent_Conditional_42_Template, 44, 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(10);
        \u0275\u0275classProp("sort-chip--on", ctx.sortKey === "REACH");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("sort-chip--on", ctx.sortKey === "ACCEPTANCE");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("sort-chip--on", ctx.sortKey === "REENGAGEMENT");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading() ? 41 : 42);
      }
    }, dependencies: [
      DecimalPipe,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatTooltip
    ], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e4e7ef;\n  border-radius: 14px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06), 0 4px 16px rgba(15, 23, 42, 0.04);\n}\n.panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -60px;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.06) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.head-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #6366f1;\n}\n.panel-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.35;\n  letter-spacing: -0.015em;\n}\n.panel-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #4f46e5;\n}\n.export-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.export-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #f8f9fc;\n  border: 1px solid #e4e7ef;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition:\n    background 0.16s,\n    border-color 0.16s,\n    color 0.16s,\n    transform 0.12s,\n    box-shadow 0.16s;\n}\n.export-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(79, 70, 229, 0.08);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.12);\n}\n.export-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.export-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eef0f6;\n  flex-wrap: wrap;\n}\n.sort-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.sort-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.sort-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: #f1f3f8;\n  border: 1px solid #e4e7ef;\n  border-radius: 999px;\n  padding: 4px;\n}\n.sort-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  background: transparent;\n  border-radius: 999px;\n  padding: 5px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition:\n    background 0.16s,\n    color 0.16s,\n    box-shadow 0.16s;\n  white-space: nowrap;\n}\n.sort-chip[_ngcontent-%COMP%]:hover:not(.sort-chip--on) {\n  background: #ffffff;\n  color: #0f172a;\n}\n.sort-chip.sort-chip--on[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.sk-row[_ngcontent-%COMP%], \n.sk-thead[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f3f8 0%,\n      #e8eaf2 50%,\n      #f1f3f8 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease-in-out infinite;\n}\n.skeleton-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sk-thead[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 6px 6px 0 0;\n  margin-bottom: 2px;\n}\n.sk-row[_ngcontent-%COMP%] {\n  height: 52px;\n}\n.horiz-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e4e7ef;\n  border-radius: 10px;\n}\n.horiz-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.horiz-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.horiz-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e4e7ef;\n  border-radius: 2px;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #f8f9fc;\n  border-bottom: 1px solid #e4e7ef;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  white-space: nowrap;\n  text-align: left;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   .th-num[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   .td-num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table[_ngcontent-%COMP%]   .th-unit[_ngcontent-%COMP%] {\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n  font-size: 9px;\n}\n.data-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eef0f6;\n  transition: background 0.12s;\n}\n.data-row[_ngcontent-%COMP%]:hover {\n  background: #eef0f7;\n}\n.data-row.data-row--expanded[_ngcontent-%COMP%] {\n  background: #f8f9fc;\n  border-bottom-color: transparent;\n}\n.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 14px;\n  vertical-align: middle;\n  color: #0f172a;\n}\n.td-rank[_ngcontent-%COMP%] {\n  width: 48px;\n  padding-left: 16px !important;\n}\n.rank-num[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #94a3b8;\n  font-variant-numeric: tabular-nums;\n}\n.medal[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1;\n}\n.td-name[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n.name-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #0f172a;\n}\n.td-num[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-size: 13px;\n  color: #475569;\n  white-space: nowrap;\n}\n.td-accepted[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 700;\n}\n.th-bar[_ngcontent-%COMP%], \n.td-bar[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.bar-track[_ngcontent-%COMP%] {\n  position: relative;\n  height: 22px;\n  background: #f1f3f8;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  cursor: default;\n  min-width: 110px;\n  border: 1px solid #eef0f6;\n}\n.bar-track.bar-track--sub[_ngcontent-%COMP%] {\n  background: #f8f9fc;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(22, 163, 74, 0.22),\n      rgba(22, 163, 74, 0.42));\n  border-radius: 4px 0 0 4px;\n  transition: width 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.bar-fill.bar-fill--teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(13, 148, 136, 0.2),\n      rgba(13, 148, 136, 0.38));\n}\n.bar-label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: 11px;\n  font-weight: 700;\n  color: #0f172a;\n  padding: 0 8px;\n  white-space: nowrap;\n}\n.rate-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: #f1f3f8;\n  color: #475569;\n  font-variant-numeric: tabular-nums;\n  border: 1px solid #eef0f6;\n}\n.rate-pill.rate-pill--high[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.1);\n  color: #0d9488;\n  border-color: rgba(13, 148, 136, 0.2);\n}\n.td-action[_ngcontent-%COMP%] {\n  width: 40px;\n  padding-right: 14px !important;\n  text-align: center;\n}\n.expand-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1px solid #e4e7ef;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #475569;\n  margin: 0 auto;\n  transition:\n    background 0.16s,\n    border-color 0.16s,\n    color 0.16s,\n    box-shadow 0.16s;\n}\n.expand-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.expand-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 70, 229, 0.08);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n  box-shadow: 0 2px 6px rgba(79, 70, 229, 0.12);\n}\n.expand-btn.expand-btn--open[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.08);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n}\n.expand-btn.expand-btn--open[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.detail-row[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  padding: 0;\n  background: #f5f7fc;\n  border-bottom: 1px solid #e4e7ef;\n}\n.detail-inner[_ngcontent-%COMP%] {\n  padding: 16px 20px 18px 56px;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-bottom: 12px;\n}\n.sub-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n  max-width: 560px;\n}\n.sub-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  padding: 6px 10px;\n  border-bottom: 1px solid #e4e7ef;\n  text-align: left;\n  vertical-align: middle;\n}\n.sub-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eef0f6;\n  transition: background 0.1s;\n}\n.sub-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sub-row[_ngcontent-%COMP%]:hover {\n  background: #eef0f7;\n}\n.sub-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  vertical-align: middle;\n  color: #475569;\n}\n.channel-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: #ffffff;\n  color: #0f172a;\n  border: 1px solid #e4e7ef;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);\n}\n.empty-sub[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  font-style: italic;\n  padding: 14px !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 52px 24px;\n  color: #94a3b8;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #475569;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  max-width: 300px;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 18px;\n}\n.pager-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.pager-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #475569;\n  font-weight: 600;\n}\n.pager-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.pager-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #f8f9fc;\n  border: 1px solid #e4e7ef;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition:\n    background 0.16s,\n    border-color 0.16s,\n    color 0.16s,\n    transform 0.12s,\n    box-shadow 0.16s;\n}\n.pager-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(79, 70, 229, 0.08);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.1);\n}\n.pager-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.pager-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-consent-leaderboard-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportConsentLeaderboardTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-consent-leaderboard-tab", standalone: true, imports: [
      DecimalPipe,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule
    ], template: `<section class="panel">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="panel-head">
    <div class="head-left">
      <span class="eyebrow">MIS Analytics</span>
      <h2 class="panel-title">Consent Performance <em>Leaderboard</em></h2>
    </div>
    <div class="export-group">
      <button type="button" class="export-btn" [disabled]="exporting()" (click)="exportCsv()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        CSV
      </button>
      <button type="button" class="export-btn" [disabled]="exporting()" (click)="exportExcel()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>
        Excel
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 Sort filter \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="filters">
    <div class="sort-group">
      <span class="sort-label">Sort by</span>
      <div class="sort-chips">
        <button type="button" class="sort-chip" [class.sort-chip--on]="sortKey === 'REACH'"        (click)="sortKey = 'REACH'; applySort()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M9 9h6M9 13h4"/></svg>
          Reach
        </button>
        <button type="button" class="sort-chip" [class.sort-chip--on]="sortKey === 'ACCEPTANCE'"   (click)="sortKey = 'ACCEPTANCE'; applySort()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Acceptance
        </button>
        <button type="button" class="sort-chip" [class.sort-chip--on]="sortKey === 'REENGAGEMENT'" (click)="sortKey = 'REENGAGEMENT'; applySort()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
          Re-engagement
        </button>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Skeleton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (loading()) {
    <div class="skeleton-wrap">
      <div class="sk-thead"></div>
      @for (_ of skRows; track $index) {
        <div class="sk-row" [style.opacity]="1 - $index * 0.10"></div>
      }
    </div>
  } @else {

    <!-- \u2500\u2500 Table \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="horiz-scroll">
      <table class="data-table">
        <thead>
          <tr>
            <th class="th-rank">#</th>
            <th>Template</th>
            <th class="th-num">Broadcasts</th>
            <th class="th-num">Invites</th>
            <th class="th-num">Accepted</th>
            <th class="th-bar">Acceptance</th>
            <th class="th-num">Re-engage</th>
            <th class="th-num">Avg TAT&nbsp;<span class="th-unit">(h)</span></th>
            <th class="th-action"></th>
          </tr>
        </thead>
        <tbody>
          @for (r of rows(); track r.consentDbId; let i = $index) {

            <!-- Main row -->
            <tr class="data-row" [class.data-row--expanded]="expandedId === r.consentDbId">
              <td class="td-rank">
                @if (medal(i)) {
                  <span class="medal">{{ medal(i) }}</span>
                } @else {
                  <span class="rank-num">{{ currentPage() * pageSize + i + 1 }}</span>
                }
              </td>
              <td class="td-name">
                <span class="name-text">{{ r.consentName }}</span>
              </td>
              <td class="td-num">{{ r.totalBroadcastExecutions | number }}</td>
              <td class="td-num">{{ r.totalRecipientsInvited | number }}</td>
              <td class="td-num td-accepted">{{ r.totalAccepted | number }}</td>
              <td class="td-bar">
                <div class="bar-track"
                  [matTooltip]="'Acceptance rate: ' + (r.acceptanceRatePercent | number:'1.0-1') + '%'"
                  matTooltipPosition="above">
                  <div class="bar-fill" [style.width]="sparkWidth(r.acceptanceRatePercent)"></div>
                  <span class="bar-label">{{ r.acceptanceRatePercent | number: '1.0-1' }}%</span>
                </div>
              </td>
              <td class="td-num">
                <span class="rate-pill" [class.rate-pill--high]="r.reEngagementRatePercent >= 50">
                  {{ r.reEngagementRatePercent | number: '1.0-1' }}%
                </span>
              </td>
              <td class="td-num">{{ r.averageHoursToAccept ?? '\u2014' }}</td>
              <td class="td-action">
                <button
                  type="button"
                  class="expand-btn"
                  [class.expand-btn--open]="expandedId === r.consentDbId"
                  (click)="toggle(r.consentDbId)"
                  [matTooltip]="expandedId === r.consentDbId ? 'Hide channels' : 'View channels'"
                  matTooltipPosition="above"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
              </td>
            </tr>

            <!-- Expanded channel detail -->
            @if (expandedId === r.consentDbId) {
              <tr class="detail-row">
                <td colspan="9">
                  <div class="detail-inner">
                    <div class="detail-header">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.26 19.79 19.79 0 0 1 1.65 4.59 2 2 0 0 1 3.62 2.4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.9a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 17z"/></svg>
                      Channel breakdown
                    </div>
                    <table class="sub-table">
                      <thead>
                        <tr>
                          <th>Channel</th>
                          <th class="th-num">Invites</th>
                          <th class="th-num">Accepted</th>
                          <th class="th-bar">Success rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        @for (c of r.channelSplits; track c.channel) {
                          <tr class="sub-row">
                            <td><span class="channel-badge">{{ c.channel }}</span></td>
                            <td class="td-num">{{ c.invitesSent | number }}</td>
                            <td class="td-num">{{ c.acceptedCount | number }}</td>
                            <td class="td-bar">
                              <div class="bar-track bar-track--sub">
                                <div class="bar-fill bar-fill--teal" [style.width]="sparkWidth(c.successRatePercent)"></div>
                                <span class="bar-label">{{ c.successRatePercent | number: '1.0-1' }}%</span>
                              </div>
                            </td>
                          </tr>
                        } @empty {
                          <tr><td colspan="4" class="empty-sub">No per-channel traffic available.</td></tr>
                        }
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            }

          } @empty {
            <tr>
              <td colspan="9">
                <div class="empty-state">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" opacity="0.35"><circle cx="12" cy="8" r="6"/><path d="M12 14v7M8 18h8"/></svg>
                  <p>No published templates to rank.</p>
                  <span>Templates will appear here once they reach Published or Approved status.</span>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- \u2500\u2500 Pagination \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="pager">
      <span class="pager-info">
        Page <strong>{{ currentPage() + 1 }}</strong> of <strong>{{ totalPages() || 1 }}</strong>
      </span>
      <div class="pager-controls">
        <button type="button" class="pager-btn" [disabled]="currentPage() <= 0 || loading()" (click)="prev()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Prev
        </button>
        <button type="button" class="pager-btn" [disabled]="currentPage() >= totalPages() - 1 || loading()" (click)="next()">
          Next
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>

  }
</section>
`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-consent-leaderboard-tab/mis-report-consent-leaderboard-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel {\n  background: #ffffff;\n  border: 1px solid #e4e7ef;\n  border-radius: 14px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06), 0 4px 16px rgba(15, 23, 42, 0.04);\n}\n.panel::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -60px;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.06) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.panel-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.head-left {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.eyebrow {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #6366f1;\n}\n.panel-title {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.35;\n  letter-spacing: -0.015em;\n}\n.panel-title em {\n  font-style: normal;\n  color: #4f46e5;\n}\n.export-group {\n  display: flex;\n  gap: 8px;\n}\n.export-btn {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #f8f9fc;\n  border: 1px solid #e4e7ef;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition:\n    background 0.16s,\n    border-color 0.16s,\n    color 0.16s,\n    transform 0.12s,\n    box-shadow 0.16s;\n}\n.export-btn:hover:not(:disabled) {\n  background: rgba(79, 70, 229, 0.08);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.12);\n}\n.export-btn:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.export-btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.filters {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eef0f6;\n  flex-wrap: wrap;\n}\n.sort-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.sort-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.sort-chips {\n  display: flex;\n  gap: 4px;\n  background: #f1f3f8;\n  border: 1px solid #e4e7ef;\n  border-radius: 999px;\n  padding: 4px;\n}\n.sort-chip {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  background: transparent;\n  border-radius: 999px;\n  padding: 5px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition:\n    background 0.16s,\n    color 0.16s,\n    box-shadow 0.16s;\n  white-space: nowrap;\n}\n.sort-chip:hover:not(.sort-chip--on) {\n  background: #ffffff;\n  color: #0f172a;\n}\n.sort-chip.sort-chip--on {\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.sk-row,\n.sk-thead {\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f3f8 0%,\n      #e8eaf2 50%,\n      #f1f3f8 100%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s ease-in-out infinite;\n}\n.skeleton-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sk-thead {\n  height: 40px;\n  border-radius: 6px 6px 0 0;\n  margin-bottom: 2px;\n}\n.sk-row {\n  height: 52px;\n}\n.horiz-scroll {\n  overflow-x: auto;\n  border: 1px solid #e4e7ef;\n  border-radius: 10px;\n}\n.horiz-scroll::-webkit-scrollbar {\n  height: 4px;\n}\n.horiz-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.horiz-scroll::-webkit-scrollbar-thumb {\n  background: #e4e7ef;\n  border-radius: 2px;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table thead tr {\n  background: #f8f9fc;\n  border-bottom: 1px solid #e4e7ef;\n}\n.data-table thead th {\n  padding: 12px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  white-space: nowrap;\n  text-align: left;\n  vertical-align: middle;\n}\n.data-table .th-num,\n.data-table .td-num {\n  text-align: right;\n}\n.data-table .th-unit {\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n  font-size: 9px;\n}\n.data-row {\n  border-bottom: 1px solid #eef0f6;\n  transition: background 0.12s;\n}\n.data-row:hover {\n  background: #eef0f7;\n}\n.data-row.data-row--expanded {\n  background: #f8f9fc;\n  border-bottom-color: transparent;\n}\n.data-row td {\n  padding: 13px 14px;\n  vertical-align: middle;\n  color: #0f172a;\n}\n.td-rank {\n  width: 48px;\n  padding-left: 16px !important;\n}\n.rank-num {\n  font-size: 12px;\n  font-weight: 700;\n  color: #94a3b8;\n  font-variant-numeric: tabular-nums;\n}\n.medal {\n  font-size: 16px;\n  line-height: 1;\n}\n.td-name {\n  max-width: 220px;\n}\n.name-text {\n  font-weight: 600;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #0f172a;\n}\n.td-num {\n  font-variant-numeric: tabular-nums;\n  font-size: 13px;\n  color: #475569;\n  white-space: nowrap;\n}\n.td-accepted {\n  color: #16a34a;\n  font-weight: 700;\n}\n.th-bar,\n.td-bar {\n  min-width: 140px;\n}\n.bar-track {\n  position: relative;\n  height: 22px;\n  background: #f1f3f8;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  cursor: default;\n  min-width: 110px;\n  border: 1px solid #eef0f6;\n}\n.bar-track.bar-track--sub {\n  background: #f8f9fc;\n}\n.bar-fill {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(22, 163, 74, 0.22),\n      rgba(22, 163, 74, 0.42));\n  border-radius: 4px 0 0 4px;\n  transition: width 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.bar-fill.bar-fill--teal {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(13, 148, 136, 0.2),\n      rgba(13, 148, 136, 0.38));\n}\n.bar-label {\n  position: relative;\n  z-index: 1;\n  font-size: 11px;\n  font-weight: 700;\n  color: #0f172a;\n  padding: 0 8px;\n  white-space: nowrap;\n}\n.rate-pill {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: #f1f3f8;\n  color: #475569;\n  font-variant-numeric: tabular-nums;\n  border: 1px solid #eef0f6;\n}\n.rate-pill.rate-pill--high {\n  background: rgba(13, 148, 136, 0.1);\n  color: #0d9488;\n  border-color: rgba(13, 148, 136, 0.2);\n}\n.td-action {\n  width: 40px;\n  padding-right: 14px !important;\n  text-align: center;\n}\n.expand-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1px solid #e4e7ef;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #475569;\n  margin: 0 auto;\n  transition:\n    background 0.16s,\n    border-color 0.16s,\n    color 0.16s,\n    box-shadow 0.16s;\n}\n.expand-btn svg {\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.expand-btn:hover {\n  background: rgba(79, 70, 229, 0.08);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n  box-shadow: 0 2px 6px rgba(79, 70, 229, 0.12);\n}\n.expand-btn.expand-btn--open {\n  background: rgba(79, 70, 229, 0.08);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n}\n.expand-btn.expand-btn--open svg {\n  transform: rotate(180deg);\n}\n.detail-row > td {\n  padding: 0;\n  background: #f5f7fc;\n  border-bottom: 1px solid #e4e7ef;\n}\n.detail-inner {\n  padding: 16px 20px 18px 56px;\n}\n.detail-header {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-bottom: 12px;\n}\n.sub-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n  max-width: 560px;\n}\n.sub-table thead th {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  padding: 6px 10px;\n  border-bottom: 1px solid #e4e7ef;\n  text-align: left;\n  vertical-align: middle;\n}\n.sub-row {\n  border-bottom: 1px solid #eef0f6;\n  transition: background 0.1s;\n}\n.sub-row:last-child {\n  border-bottom: none;\n}\n.sub-row:hover {\n  background: #eef0f7;\n}\n.sub-row td {\n  padding: 9px 10px;\n  vertical-align: middle;\n  color: #475569;\n}\n.channel-badge {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: #ffffff;\n  color: #0f172a;\n  border: 1px solid #e4e7ef;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);\n}\n.empty-sub {\n  text-align: center;\n  color: #94a3b8;\n  font-style: italic;\n  padding: 14px !important;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 52px 24px;\n  color: #94a3b8;\n  text-align: center;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #475569;\n}\n.empty-state span {\n  font-size: 12px;\n  max-width: 300px;\n}\n.pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 18px;\n}\n.pager-info {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.pager-info strong {\n  color: #475569;\n  font-weight: 600;\n}\n.pager-controls {\n  display: flex;\n  gap: 6px;\n}\n.pager-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #f8f9fc;\n  border: 1px solid #e4e7ef;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition:\n    background 0.16s,\n    border-color 0.16s,\n    color 0.16s,\n    transform 0.12s,\n    box-shadow 0.16s;\n}\n.pager-btn:hover:not(:disabled) {\n  background: rgba(79, 70, 229, 0.08);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.1);\n}\n.pager-btn:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.pager-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=mis-report-consent-leaderboard-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportConsentLeaderboardTabComponent, { className: "MisReportConsentLeaderboardTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-consent-leaderboard-tab/mis-report-consent-leaderboard-tab.component.ts", lineNumber: 26 });
})();

// src/app/features/admin/admin-mis-reports/mis-report-demographics-tab/mis-report-demographics-tab.component.ts
var _forTrack013 = ($index, $item) => $item.cityOrRegion;
function MisReportDemographicsTabComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275element(3, "div", 3)(4, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 3);
    \u0275\u0275elementEnd();
  }
}
function MisReportDemographicsTabComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 8)(2, "div")(3, "h2");
    \u0275\u0275text(4, "VIP vs Non-VIP Consent Rates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, "Comparing active consent adoption across customer tiers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "mat-icon");
    \u0275\u0275text(11, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " VIP ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14)(17, "div", 15);
    \u0275\u0275element(18, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 17);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 18)(22, "span");
    \u0275\u0275text(23, "vs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 19)(25, "div", 20)(26, "mat-icon");
    \u0275\u0275text(27, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Non-VIP ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 21);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 14)(33, "div", 22);
    \u0275\u0275element(34, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "p", 17);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const v_r1 = ctx;
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 10, v_r1.vipConsentRatePercent, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", v_r1.vipConsentRatePercent, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", v_r1.vipActiveConsents, " of ", v_r1.vipTotalCustomers, " customers consented");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(31, 13, v_r1.nonVipConsentRatePercent, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", v_r1.nonVipConsentRatePercent, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", v_r1.nonVipActiveConsents, " of ", v_r1.nonVipTotalCustomers, " customers consented");
  }
}
function MisReportDemographicsTabComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 8)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Lifecycle Adoption");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, "New vs existing customer consent adoption in a date window");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "label", 25)(9, "span");
    \u0275\u0275text(10, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportDemographicsTabComponent_Conditional_1_Conditional_1_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.lifeFrom, $event) || (ctx_r2.lifeFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 25)(13, "span");
    \u0275\u0275text(14, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function MisReportDemographicsTabComponent_Conditional_1_Conditional_1_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.lifeTo, $event) || (ctx_r2.lifeTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 27);
    \u0275\u0275listener("click", function MisReportDemographicsTabComponent_Conditional_1_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyLife());
    });
    \u0275\u0275text(17, "Apply");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "p", 28)(19, "mat-icon", 29);
    \u0275\u0275text(20, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 30)(25, "div", 31)(26, "div", 32)(27, "mat-icon");
    \u0275\u0275text(28, "person_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "h3");
    \u0275\u0275text(30, "New Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 33);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 34);
    \u0275\u0275element(35, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 36);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 31)(39, "div", 37)(40, "mat-icon");
    \u0275\u0275text(41, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "h3");
    \u0275\u0275text(43, "Existing Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 38);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 34);
    \u0275\u0275element(48, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 36);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const l_r4 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.lifeFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.lifeTo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(22, 14, l_r4.windowStart, "mediumDate"), " \u2014 ", \u0275\u0275pipeBind2(23, 17, l_r4.windowEnd, "mediumDate"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(33, 20, l_r4.newCustomerAdoptionRatePercent, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", l_r4.newCustomerAdoptionRatePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", l_r4.newCustomersWithActiveConsent, " / ", l_r4.newCustomersInWindow, " active");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(46, 23, l_r4.existingCustomerAdoptionRatePercent, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", l_r4.existingCustomerAdoptionRatePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", l_r4.existingCustomersWithActiveConsent, " / ", l_r4.existingCustomersBeforeWindow, " active");
  }
}
function MisReportDemographicsTabComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 8)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Re-engagement Funnel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, "Tracking customer journey from invite to response");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 40)(8, "div", 41)(9, "div", 42)(10, "div", 43)(11, "mat-icon");
    \u0275\u0275text(12, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 44);
    \u0275\u0275text(14, "Invited");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong", 45);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(17, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 41)(19, "div", 47)(20, "div", 43)(21, "mat-icon");
    \u0275\u0275text(22, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 44);
    \u0275\u0275text(24, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong", 45);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 41)(29, "div", 48)(30, "div", 43)(31, "mat-icon");
    \u0275\u0275text(32, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 44);
    \u0275\u0275text(34, "Accepted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "strong", 45);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(37, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 49)(39, "div", 50)(40, "div", 43)(41, "mat-icon");
    \u0275\u0275text(42, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 44);
    \u0275\u0275text(44, "Declined / Withdrawn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "strong", 45);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const f_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275styleProp("--pct", ctx_r2.funnelPct(f_r5.invitedCustomers) + "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(f_r5.invitedCustomers);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("--pct", ctx_r2.funnelPct(f_r5.pendingNoResponse) + "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(f_r5.pendingNoResponse);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("--pct", ctx_r2.funnelPct(f_r5.accepted) + "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(f_r5.accepted);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("--pct", ctx_r2.funnelPct(f_r5.declinedOrWithdrawn) + "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(f_r5.declinedOrWithdrawn);
  }
}
function MisReportDemographicsTabComponent_Conditional_1_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "mat-icon", 53);
    \u0275\u0275text(2, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Coming Soon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(g_r6.messageWhenUnavailable);
  }
}
function MisReportDemographicsTabComponent_Conditional_1_Conditional_3_Conditional_8_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57)(2, "mat-icon", 58);
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 60)(10, "div", 61);
    \u0275\u0275element(11, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 63);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const \u0275$index_290_r8 = ctx.$index;
    \u0275\u0275classProp("row-odd", \u0275$index_290_r8 % 2 !== 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", r_r7.cityOrRegion, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.customerCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.withActiveConsentCount);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", r_r7.withActiveConsentCount / r_r7.customerCount * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 8, r_r7.withActiveConsentCount / r_r7.customerCount * 100, "1.0-0"), "% ");
  }
}
function MisReportDemographicsTabComponent_Conditional_1_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "table", 55)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "City / Region");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Active Consents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Coverage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, MisReportDemographicsTabComponent_Conditional_1_Conditional_3_Conditional_8_For_14_Template, 15, 11, "tr", 56, _forTrack013);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const g_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(g_r6.topCities);
  }
}
function MisReportDemographicsTabComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 8)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Geographic Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, "Consent activity by city or region");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, MisReportDemographicsTabComponent_Conditional_1_Conditional_3_Conditional_7_Template, 7, 1, "div", 51)(8, MisReportDemographicsTabComponent_Conditional_1_Conditional_3_Conditional_8_Template, 15, 0, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx.geoDataAvailable ? 7 : 8);
  }
}
function MisReportDemographicsTabComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MisReportDemographicsTabComponent_Conditional_1_Conditional_0_Template, 37, 16, "section", 4)(1, MisReportDemographicsTabComponent_Conditional_1_Conditional_1_Template, 51, 26, "section", 5)(2, MisReportDemographicsTabComponent_Conditional_1_Conditional_2_Template, 47, 12, "section", 6)(3, MisReportDemographicsTabComponent_Conditional_1_Conditional_3_Template, 9, 1, "section", 7);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.vip()) ? 0 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.lifecycle()) ? 1 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r2.funnel()) ? 2 : -1, tmp_3_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r2.geo()) ? 3 : -1, tmp_4_0);
  }
}
var MisReportDemographicsTabComponent = class _MisReportDemographicsTabComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.destroy$ = new Subject();
    this.loading = signal(false);
    this.vip = signal(null);
    this.lifecycle = signal(null);
    this.funnel = signal(null);
    this.geo = signal(null);
    this.lifeFrom = "";
    this.lifeTo = "";
  }
  ngOnInit() {
    this.reloadLifecycle();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  isoStart(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T00:00:00")).toISOString() : void 0;
  }
  isoEnd(s) {
    return s ? (/* @__PURE__ */ new Date(s + "T23:59:59")).toISOString() : void 0;
  }
  reloadLifecycle() {
    this.loading.set(true);
    forkJoin({
      vip: this.adminApi.getMisDemographicVipSplit(),
      life: this.adminApi.getMisDemographicLifecycle({
        fromDate: this.isoStart(this.lifeFrom),
        toDate: this.isoEnd(this.lifeTo)
      }),
      funnel: this.adminApi.getMisReEngagementFunnel(),
      geo: this.adminApi.getMisDemographicGeo()
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ vip, life, funnel, geo }) => {
        this.loading.set(false);
        if (vip.success && vip.data)
          this.vip.set(vip.data);
        if (life.success && life.data)
          this.lifecycle.set(life.data);
        if (funnel.success && funnel.data)
          this.funnel.set(funnel.data);
        if (geo.success && geo.data)
          this.geo.set(geo.data);
      },
      error: (e) => {
        this.loading.set(false);
        this.logger.error("MisDemo", "load", e);
        this.notify.error("Demographics", e?.error?.message ?? "Load failed.");
      }
    });
  }
  applyLife() {
    this.reloadLifecycle();
  }
  funnelMax() {
    const f = this.funnel();
    if (!f)
      return 1;
    return Math.max(1, f.invitedCustomers, f.pendingNoResponse, f.accepted, f.declinedOrWithdrawn);
  }
  funnelPct(v) {
    return v / this.funnelMax() * 100;
  }
  static {
    this.\u0275fac = function MisReportDemographicsTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MisReportDemographicsTabComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReportDemographicsTabComponent, selectors: [["app-mis-report-demographics-tab"]], decls: 2, vars: 1, consts: [[1, "sk-page"], [1, "sk-block", "sk-block--half"], [1, "sk-grid2"], [1, "sk-block"], [1, "panel", "vip-panel"], [1, "panel", "lifecycle-panel"], [1, "panel", "funnel-panel"], [1, "panel", "geo-panel"], [1, "section-header"], [1, "section-sub"], [1, "split-bars"], [1, "split-card", "split-card--vip"], [1, "split-badge"], [1, "split-rate"], [1, "split-bar-track"], [1, "split-bar-fill", "split-bar-fill--vip"], [1, "split-bar-glow", "split-bar-glow--vip"], [1, "split-meta"], [1, "split-divider"], [1, "split-card", "split-card--non"], [1, "split-badge", "split-badge--non"], [1, "split-rate", "split-rate--non"], [1, "split-bar-fill", "split-bar-fill--non"], [1, "split-bar-glow", "split-bar-glow--non"], [1, "lifecycle-filters"], [1, "ff-date"], ["type", "date", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "window-label"], [1, "window-icon"], [1, "life-grid"], [1, "life-card"], [1, "life-card-icon", "life-card-icon--new"], [1, "life-rate"], [1, "life-bar-track"], [1, "life-bar-fill", "life-bar-fill--new"], [1, "life-meta"], [1, "life-card-icon", "life-card-icon--existing"], [1, "life-rate", "life-rate--existing"], [1, "life-bar-fill", "life-bar-fill--existing"], [1, "funnel-container"], [1, "funnel-step-wrap"], [1, "funnel-step", "funnel-step--blue"], [1, "funnel-step-inner"], [1, "funnel-label"], [1, "funnel-count"], [1, "funnel-connector"], [1, "funnel-step", "funnel-step--amber"], [1, "funnel-step", "funnel-step--green"], [1, "funnel-step-wrap", "funnel-step-wrap--last"], [1, "funnel-step", "funnel-step--red"], [1, "placeholder-card"], [1, "horiz-scroll"], [1, "ph-icon"], [1, "muted"], [1, "data-table"], [3, "row-odd"], [1, "td-city"], [1, "city-icon"], [1, "td-num"], [1, "td-coverage"], [1, "cov-bar-track"], [1, "cov-bar-fill"], [1, "cov-pct"]], template: function MisReportDemographicsTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MisReportDemographicsTabComponent_Conditional_0_Template, 6, 0, "div", 0)(1, MisReportDemographicsTabComponent_Conditional_1_Template, 4, 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.loading() && !ctx.vip() ? 0 : 1);
      }
    }, dependencies: [DatePipe, DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatIconModule, MatIcon, MatTooltipModule], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: var(--text-16);\n  font-weight: 800;\n  color: var(--input-text-color);\n  letter-spacing: -0.2px;\n}\n.section-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.split-bars[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: var(--space-4);\n  align-items: center;\n}\n.split-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.split-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 700;\n  color: var(--sidebar-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: var(--input-bg-disabled);\n  padding: 6px 10px;\n  border-radius: 999px;\n}\n.split-card[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  border-radius: 14px;\n  border: 1.5px solid transparent;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  transition: box-shadow 0.2s;\n}\n.split-card--vip[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(26, 79, 138, 0.06) 0%,\n      rgba(99, 102, 241, 0.04) 100%);\n  border-color: rgba(26, 79, 138, 0.18);\n}\n.split-card--vip[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(26, 79, 138, 0.12);\n}\n.split-card--non[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.05) 0%,\n      rgba(20, 184, 166, 0.04) 100%);\n  border-color: rgba(34, 197, 94, 0.18);\n}\n.split-card--non[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(34, 197, 94, 0.1);\n}\n.split-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: var(--text-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #1a4f8a;\n  background: rgba(26, 79, 138, 0.1);\n  padding: 4px 10px;\n  border-radius: 999px;\n  width: fit-content;\n}\n.split-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.split-badge--non[_ngcontent-%COMP%] {\n  color: #16a34a;\n  background: rgba(34, 197, 94, 0.1);\n}\n.split-rate[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 900;\n  color: #1a4f8a;\n  line-height: 1;\n  letter-spacing: -2px;\n}\n.split-rate--non[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.split-bar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n  position: relative;\n}\n.split-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  position: relative;\n  transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.split-bar-fill--vip[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1a4f8a,\n      #6366f1);\n}\n.split-bar-fill--non[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #14b8a6);\n}\n.split-bar-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n}\n.split-bar-glow--vip[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.6);\n  filter: blur(4px);\n}\n.split-bar-glow--non[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.6);\n  filter: blur(4px);\n}\n.split-meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.lifecycle-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.ff-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  font-weight: 500;\n}\n.ff-date[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1.5px solid var(--input-border-color);\n  border-radius: 8px;\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  font-size: var(--text-13);\n  font-family: inherit;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ff-date[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1a4f8a;\n}\n.window-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  margin: 0 0 var(--space-4);\n  font-weight: 500;\n}\n.window-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  opacity: 0.6;\n}\n.life-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: var(--space-4);\n}\n.life-card[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  border: 1.5px solid var(--input-border-color);\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.life-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  border-color: rgba(26, 79, 138, 0.3);\n}\n.life-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-13);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.life-card-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.life-card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.life-card-icon--new[_ngcontent-%COMP%] {\n  background: rgba(26, 79, 138, 0.1);\n  color: #1a4f8a;\n}\n.life-card-icon--existing[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.life-rate[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 900;\n  color: #1a4f8a;\n  line-height: 1;\n  letter-spacing: -1.5px;\n}\n.life-rate--existing[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.life-bar-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.life-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.life-bar-fill--new[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1a4f8a,\n      #6366f1);\n}\n.life-bar-fill--existing[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #14b8a6);\n}\n.life-meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.funnel-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.funnel-step-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.funnel-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 12px;\n  background: var(--input-border-color);\n  margin: 0 auto;\n}\n.funnel-step[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1.5px solid transparent;\n  transition: transform 0.2s, box-shadow 0.2s;\n  cursor: default;\n}\n.funnel-step[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.funnel-step--blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(26, 79, 138, 0.07),\n      rgba(99, 102, 241, 0.05));\n  border-color: rgba(26, 79, 138, 0.2);\n}\n.funnel-step--blue[_ngcontent-%COMP%]   .funnel-step-inner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1a4f8a;\n}\n.funnel-step--blue[_ngcontent-%COMP%]   .funnel-count[_ngcontent-%COMP%] {\n  color: #1a4f8a;\n}\n.funnel-step--amber[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.07),\n      rgba(251, 191, 36, 0.05));\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.funnel-step--amber[_ngcontent-%COMP%]   .funnel-step-inner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.funnel-step--amber[_ngcontent-%COMP%]   .funnel-count[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.funnel-step--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.07),\n      rgba(20, 184, 166, 0.05));\n  border-color: rgba(34, 197, 94, 0.2);\n}\n.funnel-step--green[_ngcontent-%COMP%]   .funnel-step-inner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.funnel-step--green[_ngcontent-%COMP%]   .funnel-count[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.funnel-step--red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.07),\n      rgba(220, 38, 38, 0.04));\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.funnel-step--red[_ngcontent-%COMP%]   .funnel-step-inner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.funnel-step--red[_ngcontent-%COMP%]   .funnel-count[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.funnel-step-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) var(--space-4);\n}\n.funnel-step-inner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.funnel-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: var(--text-13);\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.funnel-count[_ngcontent-%COMP%] {\n  font-size: var(--text-18);\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.horiz-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 2px solid rgba(26, 79, 138, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: var(--text-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--sidebar-text-muted);\n  background: rgba(26, 79, 138, 0.03);\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--input-border-color);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.12s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(26, 79, 138, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-odd[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.016);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-odd[_ngcontent-%COMP%]:hover {\n  background: rgba(26, 79, 138, 0.05);\n}\n.td-city[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--input-text-color);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.city-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #1a4f8a;\n  opacity: 0.7;\n}\n.td-num[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.td-coverage[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-width: 140px;\n}\n.cov-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.cov-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1a4f8a,\n      #6366f1);\n  border-radius: 999px;\n  transition: width 0.6s ease;\n}\n.cov-pct[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 700;\n  color: #1a4f8a;\n  min-width: 36px;\n  text-align: right;\n}\n.placeholder-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-10);\n  border: 1.5px dashed var(--input-border-color);\n  border-radius: var(--card-radius);\n  background: rgba(0, 0, 0, 0.015);\n}\n.placeholder-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 var(--space-1);\n  font-size: var(--text-15);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.ph-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  opacity: 0.25;\n  display: block;\n  margin: 0 auto;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n  margin: 0;\n}\n.sk-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.sk-block[_ngcontent-%COMP%] {\n  height: 180px;\n  border-radius: var(--card-radius);\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 0%,\n      #f3f4f6 50%,\n      #e5e7eb 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_sk 1.1s ease-in-out infinite;\n}\n.sk-block--half[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 40%;\n}\n.sk-grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3);\n}\n@keyframes _ngcontent-%COMP%_sk {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .split-bars[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .split-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .life-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=mis-report-demographics-tab.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReportDemographicsTabComponent, [{
    type: Component,
    args: [{ selector: "app-mis-report-demographics-tab", standalone: true, imports: [DatePipe, DecimalPipe, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule], template: `<!-- @if (loading() && !vip()) {\r
  <div class="sk-page"></div>\r
} @else {\r
  @if (vip(); as v) {\r
    <section class="panel">\r
      <h2>VIP vs non-VIP consent rates</h2>\r
      <div class="split-bars">\r
        <div class="split">\r
          <div class="split-head">\r
            <span>VIP</span>\r
            <strong>{{ v.vipConsentRatePercent | number: '1.0-1' }}%</strong>\r
          </div>\r
          <div class="stack">\r
            <div class="stack-ok" [style.width.%]="v.vipConsentRatePercent"></div>\r
          </div>\r
          <p class="muted small">{{ v.vipActiveConsents }} / {{ v.vipTotalCustomers }} customers</p>\r
        </div>\r
        <div class="split">\r
          <div class="split-head">\r
            <span>Non-VIP</span>\r
            <strong>{{ v.nonVipConsentRatePercent | number: '1.0-1' }}%</strong>\r
          </div>\r
          <div class="stack">\r
            <div class="stack-neutral" [style.width.%]="v.nonVipConsentRatePercent"></div>\r
          </div>\r
          <p class="muted small">{{ v.nonVipActiveConsents }} / {{ v.nonVipTotalCustomers }} customers</p>\r
        </div>\r
      </div>\r
    </section>\r
  }\r
\r
  @if (lifecycle(); as l) {\r
    <section class="panel">\r
      <h2>Lifecycle adoption (new vs existing)</h2>\r
      <div class="filters">\r
        <label class="ff-date"><span>From</span><input type="date" [(ngModel)]="lifeFrom" /></label>\r
        <label class="ff-date"><span>To</span><input type="date" [(ngModel)]="lifeTo" /></label>\r
        <button mat-stroked-button type="button" (click)="applyLife()">Apply</button>\r
      </div>\r
      <p class="muted small">Window: {{ l.windowStart | date: 'medium' }} \u2014 {{ l.windowEnd | date: 'medium' }}</p>\r
      <div class="life-grid">\r
        <div>\r
          <h3>New in window</h3>\r
          <p>{{ l.newCustomersWithActiveConsent }} / {{ l.newCustomersInWindow }} active-like</p>\r
          <div class="stack">\r
            <div class="stack-ok" [style.width.%]="l.newCustomerAdoptionRatePercent"></div>\r
          </div>\r
          <p class="muted">{{ l.newCustomerAdoptionRatePercent | number: '1.0-1' }}%</p>\r
        </div>\r
        <div>\r
          <h3>Existing before window</h3>\r
          <p>{{ l.existingCustomersWithActiveConsent }} / {{ l.existingCustomersBeforeWindow }} active-like</p>\r
          <div class="stack">\r
            <div class="stack-neutral" [style.width.%]="l.existingCustomerAdoptionRatePercent"></div>\r
          </div>\r
          <p class="muted">{{ l.existingCustomerAdoptionRatePercent | number: '1.0-1' }}%</p>\r
        </div>\r
      </div>\r
    </section>\r
  }\r
\r
  @if (funnel(); as f) {\r
    <section class="panel">\r
      <h2>Re-engagement funnel</h2>\r
      <div class="funnel">\r
        <div class="funnel-step" [style.flex]="funnelPct(f.invitedCustomers)">\r
          <span>Invited</span><strong>{{ f.invitedCustomers }}</strong>\r
        </div>\r
        <div class="funnel-step funnel-step--warn" [style.flex]="funnelPct(f.pendingNoResponse)">\r
          <span>Pending</span><strong>{{ f.pendingNoResponse }}</strong>\r
        </div>\r
        <div class="funnel-step funnel-step--ok" [style.flex]="funnelPct(f.accepted)">\r
          <span>Accepted</span><strong>{{ f.accepted }}</strong>\r
        </div>\r
        <div class="funnel-step funnel-step--bad" [style.flex]="funnelPct(f.declinedOrWithdrawn)">\r
          <span>Declined / withdrawn</span><strong>{{ f.declinedOrWithdrawn }}</strong>\r
        </div>\r
      </div>\r
    </section>\r
  }\r
\r
  @if (geo(); as g) {\r
    <section class="panel">\r
      <h2>Geographic distribution</h2>\r
      @if (!g.geoDataAvailable) {\r
        <div class="placeholder-card">\r
          <mat-icon class="ph-icon">map</mat-icon>\r
          <h3>Coming soon</h3>\r
          <p class="muted">{{ g.messageWhenUnavailable }}</p>\r
        </div>\r
      } @else {\r
        <div class="horiz-scroll">\r
          <table class="data-table">\r
            <thead>\r
              <tr>\r
                <th>City / region</th>\r
                <th>Customers</th>\r
                <th>Active-like</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (r of g.topCities; track r.cityOrRegion) {\r
                <tr>\r
                  <td>{{ r.cityOrRegion }}</td>\r
                  <td>{{ r.customerCount }}</td>\r
                  <td>{{ r.withActiveConsentCount }}</td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      }\r
    </section>\r
  }\r
} -->\r
\r
\r
@if (loading() && !vip()) {\r
<div class="sk-page">\r
  <div class="sk-block sk-block--half"></div>\r
  <div class="sk-grid2">\r
    <div class="sk-block"></div>\r
    <div class="sk-block"></div>\r
  </div>\r
  <div class="sk-block"></div>\r
</div>\r
} @else {\r
\r
@if (vip(); as v) {\r
<section class="panel vip-panel">\r
  <div class="section-header">\r
    <div>\r
      <h2>VIP vs Non-VIP Consent Rates</h2>\r
      <p class="section-sub">Comparing active consent adoption across customer tiers</p>\r
    </div>\r
  </div>\r
  <div class="split-bars">\r
    <div class="split-card split-card--vip">\r
      <div class="split-badge">\r
        <mat-icon>star</mat-icon> VIP\r
      </div>\r
      <div class="split-rate">{{ v.vipConsentRatePercent | number: '1.0-1' }}%</div>\r
      <div class="split-bar-track">\r
        <div class="split-bar-fill split-bar-fill--vip" [style.width.%]="v.vipConsentRatePercent">\r
          <div class="split-bar-glow split-bar-glow--vip"></div>\r
        </div>\r
      </div>\r
      <p class="split-meta">{{ v.vipActiveConsents }} of {{ v.vipTotalCustomers }} customers consented</p>\r
    </div>\r
\r
    <div class="split-divider">\r
      <span>vs</span>\r
    </div>\r
\r
    <div class="split-card split-card--non">\r
      <div class="split-badge split-badge--non">\r
        <mat-icon>person</mat-icon> Non-VIP\r
      </div>\r
      <div class="split-rate split-rate--non">{{ v.nonVipConsentRatePercent | number: '1.0-1' }}%</div>\r
      <div class="split-bar-track">\r
        <div class="split-bar-fill split-bar-fill--non" [style.width.%]="v.nonVipConsentRatePercent">\r
          <div class="split-bar-glow split-bar-glow--non"></div>\r
        </div>\r
      </div>\r
      <p class="split-meta">{{ v.nonVipActiveConsents }} of {{ v.nonVipTotalCustomers }} customers consented</p>\r
    </div>\r
  </div>\r
</section>\r
}\r
\r
@if (lifecycle(); as l) {\r
<section class="panel lifecycle-panel">\r
  <div class="section-header">\r
    <div>\r
      <h2>Lifecycle Adoption</h2>\r
      <p class="section-sub">New vs existing customer consent adoption in a date window</p>\r
    </div>\r
    <div class="lifecycle-filters">\r
      <label class="ff-date">\r
        <span>From</span>\r
        <input type="date" [(ngModel)]="lifeFrom" />\r
      </label>\r
      <label class="ff-date">\r
        <span>To</span>\r
        <input type="date" [(ngModel)]="lifeTo" />\r
      </label>\r
      <button mat-flat-button color="primary" type="button" (click)="applyLife()">Apply</button>\r
    </div>\r
  </div>\r
  <p class="window-label">\r
    <mat-icon class="window-icon">calendar_today</mat-icon>\r
    {{ l.windowStart | date: 'mediumDate' }} \u2014 {{ l.windowEnd | date: 'mediumDate' }}\r
  </p>\r
  <div class="life-grid">\r
    <div class="life-card">\r
      <div class="life-card-icon life-card-icon--new">\r
        <mat-icon>person_add</mat-icon>\r
      </div>\r
      <h3>New Customers</h3>\r
      <div class="life-rate">{{ l.newCustomerAdoptionRatePercent | number: '1.0-1' }}%</div>\r
      <div class="life-bar-track">\r
        <div class="life-bar-fill life-bar-fill--new" [style.width.%]="l.newCustomerAdoptionRatePercent"></div>\r
      </div>\r
      <p class="life-meta">{{ l.newCustomersWithActiveConsent }} / {{ l.newCustomersInWindow }} active</p>\r
    </div>\r
    <div class="life-card">\r
      <div class="life-card-icon life-card-icon--existing">\r
        <mat-icon>people</mat-icon>\r
      </div>\r
      <h3>Existing Customers</h3>\r
      <div class="life-rate life-rate--existing">{{ l.existingCustomerAdoptionRatePercent | number: '1.0-1' }}%</div>\r
      <div class="life-bar-track">\r
        <div class="life-bar-fill life-bar-fill--existing" [style.width.%]="l.existingCustomerAdoptionRatePercent">\r
        </div>\r
      </div>\r
      <p class="life-meta">{{ l.existingCustomersWithActiveConsent }} / {{ l.existingCustomersBeforeWindow }} active</p>\r
    </div>\r
  </div>\r
</section>\r
}\r
\r
@if (funnel(); as f) {\r
<section class="panel funnel-panel">\r
  <div class="section-header">\r
    <div>\r
      <h2>Re-engagement Funnel</h2>\r
      <p class="section-sub">Tracking customer journey from invite to response</p>\r
    </div>\r
  </div>\r
  <div class="funnel-container">\r
    <div class="funnel-step-wrap">\r
      <div class="funnel-step funnel-step--blue" [style.--pct]="funnelPct(f.invitedCustomers) + '%'">\r
        <div class="funnel-step-inner">\r
          <mat-icon>email</mat-icon>\r
          <span class="funnel-label">Invited</span>\r
          <strong class="funnel-count">{{ f.invitedCustomers }}</strong>\r
        </div>\r
      </div>\r
      <div class="funnel-connector"></div>\r
    </div>\r
\r
    <div class="funnel-step-wrap">\r
      <div class="funnel-step funnel-step--amber" [style.--pct]="funnelPct(f.pendingNoResponse) + '%'">\r
        <div class="funnel-step-inner">\r
          <mat-icon>hourglass_empty</mat-icon>\r
          <span class="funnel-label">Pending</span>\r
          <strong class="funnel-count">{{ f.pendingNoResponse }}</strong>\r
        </div>\r
      </div>\r
      <div class="funnel-connector"></div>\r
    </div>\r
\r
    <div class="funnel-step-wrap">\r
      <div class="funnel-step funnel-step--green" [style.--pct]="funnelPct(f.accepted) + '%'">\r
        <div class="funnel-step-inner">\r
          <mat-icon>check_circle</mat-icon>\r
          <span class="funnel-label">Accepted</span>\r
          <strong class="funnel-count">{{ f.accepted }}</strong>\r
        </div>\r
      </div>\r
      <div class="funnel-connector"></div>\r
    </div>\r
\r
    <div class="funnel-step-wrap funnel-step-wrap--last">\r
      <div class="funnel-step funnel-step--red" [style.--pct]="funnelPct(f.declinedOrWithdrawn) + '%'">\r
        <div class="funnel-step-inner">\r
          <mat-icon>cancel</mat-icon>\r
          <span class="funnel-label">Declined / Withdrawn</span>\r
          <strong class="funnel-count">{{ f.declinedOrWithdrawn }}</strong>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
}\r
\r
@if (geo(); as g) {\r
<section class="panel geo-panel">\r
  <div class="section-header">\r
    <div>\r
      <h2>Geographic Distribution</h2>\r
      <p class="section-sub">Consent activity by city or region</p>\r
    </div>\r
  </div>\r
  @if (!g.geoDataAvailable) {\r
  <div class="placeholder-card">\r
    <mat-icon class="ph-icon">map</mat-icon>\r
    <h3>Coming Soon</h3>\r
    <p class="muted">{{ g.messageWhenUnavailable }}</p>\r
  </div>\r
  } @else {\r
  <div class="horiz-scroll">\r
    <table class="data-table">\r
      <thead>\r
        <tr>\r
          <th>City / Region</th>\r
          <th>Customers</th>\r
          <th>Active Consents</th>\r
          <th>Coverage</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (r of g.topCities; track r.cityOrRegion; let odd = $odd) {\r
        <tr [class.row-odd]="odd">\r
          <td class="td-city">\r
            <mat-icon class="city-icon">location_on</mat-icon>\r
            {{ r.cityOrRegion }}\r
          </td>\r
          <td class="td-num">{{ r.customerCount }}</td>\r
          <td class="td-num">{{ r.withActiveConsentCount }}</td>\r
          <td class="td-coverage">\r
            <div class="cov-bar-track">\r
              <div class="cov-bar-fill" [style.width.%]="(r.withActiveConsentCount / r.customerCount) * 100"></div>\r
            </div>\r
            <span class="cov-pct">\r
              {{ (r.withActiveConsentCount / r.customerCount * 100) | number:'1.0-0' }}%\r
            </span>\r
          </td>\r
        </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
  }\r
</section>\r
}\r
}`, styles: ['/* src/app/features/admin/admin-mis-reports/mis-report-demographics-tab/mis-report-demographics-tab.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panel {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.section-header h2 {\n  margin: 0 0 4px;\n  font-size: var(--text-16);\n  font-weight: 800;\n  color: var(--input-text-color);\n  letter-spacing: -0.2px;\n}\n.section-sub {\n  margin: 0;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.split-bars {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: var(--space-4);\n  align-items: center;\n}\n.split-divider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.split-divider span {\n  font-size: var(--text-12);\n  font-weight: 700;\n  color: var(--sidebar-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: var(--input-bg-disabled);\n  padding: 6px 10px;\n  border-radius: 999px;\n}\n.split-card {\n  padding: var(--space-4);\n  border-radius: 14px;\n  border: 1.5px solid transparent;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  transition: box-shadow 0.2s;\n}\n.split-card--vip {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(26, 79, 138, 0.06) 0%,\n      rgba(99, 102, 241, 0.04) 100%);\n  border-color: rgba(26, 79, 138, 0.18);\n}\n.split-card--vip:hover {\n  box-shadow: 0 6px 24px rgba(26, 79, 138, 0.12);\n}\n.split-card--non {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.05) 0%,\n      rgba(20, 184, 166, 0.04) 100%);\n  border-color: rgba(34, 197, 94, 0.18);\n}\n.split-card--non:hover {\n  box-shadow: 0 6px 24px rgba(34, 197, 94, 0.1);\n}\n.split-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: var(--text-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #1a4f8a;\n  background: rgba(26, 79, 138, 0.1);\n  padding: 4px 10px;\n  border-radius: 999px;\n  width: fit-content;\n}\n.split-badge mat-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.split-badge--non {\n  color: #16a34a;\n  background: rgba(34, 197, 94, 0.1);\n}\n.split-rate {\n  font-size: 40px;\n  font-weight: 900;\n  color: #1a4f8a;\n  line-height: 1;\n  letter-spacing: -2px;\n}\n.split-rate--non {\n  color: #16a34a;\n}\n.split-bar-track {\n  height: 10px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n  position: relative;\n}\n.split-bar-fill {\n  height: 100%;\n  border-radius: 999px;\n  position: relative;\n  transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.split-bar-fill--vip {\n  background:\n    linear-gradient(\n      90deg,\n      #1a4f8a,\n      #6366f1);\n}\n.split-bar-fill--non {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #14b8a6);\n}\n.split-bar-glow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n}\n.split-bar-glow--vip {\n  background: rgba(99, 102, 241, 0.6);\n  filter: blur(4px);\n}\n.split-bar-glow--non {\n  background: rgba(20, 184, 166, 0.6);\n  filter: blur(4px);\n}\n.split-meta {\n  margin: 0;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.lifecycle-filters {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.ff-date {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  font-weight: 500;\n}\n.ff-date input[type=date] {\n  padding: 6px 10px;\n  border: 1.5px solid var(--input-border-color);\n  border-radius: 8px;\n  background: var(--card-bg);\n  color: var(--input-text-color);\n  font-size: var(--text-13);\n  font-family: inherit;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ff-date input[type=date]:focus {\n  outline: none;\n  border-color: #1a4f8a;\n}\n.window-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  margin: 0 0 var(--space-4);\n  font-weight: 500;\n}\n.window-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  opacity: 0.6;\n}\n.life-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: var(--space-4);\n}\n.life-card {\n  padding: var(--space-4);\n  border: 1.5px solid var(--input-border-color);\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.life-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  border-color: rgba(26, 79, 138, 0.3);\n}\n.life-card h3 {\n  margin: 0;\n  font-size: var(--text-13);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.life-card-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.life-card-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.life-card-icon--new {\n  background: rgba(26, 79, 138, 0.1);\n  color: #1a4f8a;\n}\n.life-card-icon--existing {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.life-rate {\n  font-size: 34px;\n  font-weight: 900;\n  color: #1a4f8a;\n  line-height: 1;\n  letter-spacing: -1.5px;\n}\n.life-rate--existing {\n  color: #16a34a;\n}\n.life-bar-track {\n  height: 8px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.life-bar-fill {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.life-bar-fill--new {\n  background:\n    linear-gradient(\n      90deg,\n      #1a4f8a,\n      #6366f1);\n}\n.life-bar-fill--existing {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #14b8a6);\n}\n.life-meta {\n  margin: 0;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n}\n.funnel-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.funnel-step-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.funnel-connector {\n  width: 2px;\n  height: 12px;\n  background: var(--input-border-color);\n  margin: 0 auto;\n}\n.funnel-step {\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1.5px solid transparent;\n  transition: transform 0.2s, box-shadow 0.2s;\n  cursor: default;\n}\n.funnel-step:hover {\n  transform: translateX(4px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.funnel-step--blue {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(26, 79, 138, 0.07),\n      rgba(99, 102, 241, 0.05));\n  border-color: rgba(26, 79, 138, 0.2);\n}\n.funnel-step--blue .funnel-step-inner mat-icon {\n  color: #1a4f8a;\n}\n.funnel-step--blue .funnel-count {\n  color: #1a4f8a;\n}\n.funnel-step--amber {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.07),\n      rgba(251, 191, 36, 0.05));\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.funnel-step--amber .funnel-step-inner mat-icon {\n  color: #d97706;\n}\n.funnel-step--amber .funnel-count {\n  color: #d97706;\n}\n.funnel-step--green {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.07),\n      rgba(20, 184, 166, 0.05));\n  border-color: rgba(34, 197, 94, 0.2);\n}\n.funnel-step--green .funnel-step-inner mat-icon {\n  color: #16a34a;\n}\n.funnel-step--green .funnel-count {\n  color: #16a34a;\n}\n.funnel-step--red {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.07),\n      rgba(220, 38, 38, 0.04));\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.funnel-step--red .funnel-step-inner mat-icon {\n  color: #dc2626;\n}\n.funnel-step--red .funnel-count {\n  color: #dc2626;\n}\n.funnel-step-inner {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) var(--space-4);\n}\n.funnel-step-inner mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.funnel-label {\n  flex: 1;\n  font-size: var(--text-13);\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.funnel-count {\n  font-size: var(--text-18);\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.horiz-scroll {\n  overflow-x: auto;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-13);\n}\n.data-table thead tr {\n  border-bottom: 2px solid rgba(26, 79, 138, 0.15);\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: var(--text-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--sidebar-text-muted);\n  background: rgba(26, 79, 138, 0.03);\n  white-space: nowrap;\n}\n.data-table td {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--input-border-color);\n  vertical-align: middle;\n}\n.data-table tbody tr {\n  transition: background 0.12s;\n}\n.data-table tbody tr:hover {\n  background: rgba(26, 79, 138, 0.04);\n}\n.data-table tbody tr.row-odd {\n  background: rgba(0, 0, 0, 0.016);\n}\n.data-table tbody tr.row-odd:hover {\n  background: rgba(26, 79, 138, 0.05);\n}\n.td-city {\n  font-weight: 600;\n  color: var(--input-text-color);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.city-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #1a4f8a;\n  opacity: 0.7;\n}\n.td-num {\n  font-weight: 600;\n  color: var(--input-text-color);\n}\n.td-coverage {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-width: 140px;\n}\n.cov-bar-track {\n  flex: 1;\n  height: 8px;\n  background: var(--input-bg-disabled);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.cov-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1a4f8a,\n      #6366f1);\n  border-radius: 999px;\n  transition: width 0.6s ease;\n}\n.cov-pct {\n  font-size: var(--text-12);\n  font-weight: 700;\n  color: #1a4f8a;\n  min-width: 36px;\n  text-align: right;\n}\n.placeholder-card {\n  text-align: center;\n  padding: var(--space-10);\n  border: 1.5px dashed var(--input-border-color);\n  border-radius: var(--card-radius);\n  background: rgba(0, 0, 0, 0.015);\n}\n.placeholder-card h3 {\n  margin: var(--space-2) 0 var(--space-1);\n  font-size: var(--text-15);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.ph-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  opacity: 0.25;\n  display: block;\n  margin: 0 auto;\n}\n.muted {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-13);\n  margin: 0;\n}\n.sk-page {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.sk-block {\n  height: 180px;\n  border-radius: var(--card-radius);\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 0%,\n      #f3f4f6 50%,\n      #e5e7eb 100%);\n  background-size: 200% 100%;\n  animation: sk 1.1s ease-in-out infinite;\n}\n.sk-block--half {\n  height: 24px;\n  width: 40%;\n}\n.sk-grid2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3);\n}\n@keyframes sk {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .split-bars {\n    grid-template-columns: 1fr;\n  }\n  .split-divider {\n    display: none;\n  }\n  .life-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=mis-report-demographics-tab.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReportDemographicsTabComponent, { className: "MisReportDemographicsTabComponent", filePath: "src/app/features/admin/admin-mis-reports/mis-report-demographics-tab/mis-report-demographics-tab.component.ts", lineNumber: 135 });
})();

// src/app/features/admin/admin-mis-reports/admin-mis-reports.component.ts
function AdminMisReportsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, " Executive");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-executive-tab");
  }
}
function AdminMisReportsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2, " Customer Consent");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-customer-consent-tab");
  }
}
function AdminMisReportsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2, " Consent Audit");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-audit-tab");
  }
}
function AdminMisReportsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2, " Expiry");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-expiry-tab");
  }
}
function AdminMisReportsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, " Revocations");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-revocation-tab");
  }
}
function AdminMisReportsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2, " Compliance");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-compliance-tab");
  }
}
function AdminMisReportsComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2, " Operational");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-operational-tab");
  }
}
function AdminMisReportsComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2, " Scheduled");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-scheduled-tab");
  }
}
function AdminMisReportsComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2, " Consent inventory");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-consent-inventory-tab");
  }
}
function AdminMisReportsComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2, " Active consents");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-active-consents-tab");
  }
}
function AdminMisReportsComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " Channel deep-dive");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-channel-deep-dive-tab");
  }
}
function AdminMisReportsComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2, " Leaderboard");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-consent-leaderboard-tab");
  }
}
function AdminMisReportsComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " Demographics");
    \u0275\u0275elementEnd();
  }
}
function AdminMisReportsComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mis-report-demographics-tab");
  }
}
var AdminMisReportsComponent = class _AdminMisReportsComponent {
  static {
    this.\u0275fac = function AdminMisReportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminMisReportsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminMisReportsComponent, selectors: [["app-admin-mis-reports"]], decls: 49, vars: 0, consts: [[1, "mis-page"], [1, "mis-header"], [1, "mis-header-text"], [1, "mis-eyebrow"], [1, "mis-lede"], ["animationDuration", "200ms", "dynamicHeight", "", 1, "mis-tabs"], ["mat-tab-label", ""], ["matTabContent", ""], [1, "tab-label"], [1, "ti", "ti-layout-dashboard"], [1, "ti", "ti-users"], [1, "ti", "ti-file-text"], [1, "ti", "ti-clock-exclamation"], [1, "ti", "ti-ban"], [1, "ti", "ti-shield-check"], [1, "ti", "ti-chart-bar"], [1, "ti", "ti-mail-forward"], [1, "ti", "ti-packages"], [1, "ti", "ti-chart-line"], [1, "ti", "ti-layout-grid"], [1, "ti", "ti-trophy"], [1, "ti", "ti-users-group"]], template: function AdminMisReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4, "Admin \xB7 Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "MIS Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, " Management information for consent operations, compliance posture, and channel performance. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "mat-tab-group", 5)(10, "mat-tab");
        \u0275\u0275template(11, AdminMisReportsComponent_ng_template_11_Template, 3, 0, "ng-template", 6)(12, AdminMisReportsComponent_ng_template_12_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab");
        \u0275\u0275template(14, AdminMisReportsComponent_ng_template_14_Template, 3, 0, "ng-template", 6)(15, AdminMisReportsComponent_ng_template_15_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-tab");
        \u0275\u0275template(17, AdminMisReportsComponent_ng_template_17_Template, 3, 0, "ng-template", 6)(18, AdminMisReportsComponent_ng_template_18_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-tab");
        \u0275\u0275template(20, AdminMisReportsComponent_ng_template_20_Template, 3, 0, "ng-template", 6)(21, AdminMisReportsComponent_ng_template_21_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-tab");
        \u0275\u0275template(23, AdminMisReportsComponent_ng_template_23_Template, 3, 0, "ng-template", 6)(24, AdminMisReportsComponent_ng_template_24_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-tab");
        \u0275\u0275template(26, AdminMisReportsComponent_ng_template_26_Template, 3, 0, "ng-template", 6)(27, AdminMisReportsComponent_ng_template_27_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-tab");
        \u0275\u0275template(29, AdminMisReportsComponent_ng_template_29_Template, 3, 0, "ng-template", 6)(30, AdminMisReportsComponent_ng_template_30_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-tab");
        \u0275\u0275template(32, AdminMisReportsComponent_ng_template_32_Template, 3, 0, "ng-template", 6)(33, AdminMisReportsComponent_ng_template_33_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-tab");
        \u0275\u0275template(35, AdminMisReportsComponent_ng_template_35_Template, 3, 0, "ng-template", 6)(36, AdminMisReportsComponent_ng_template_36_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-tab");
        \u0275\u0275template(38, AdminMisReportsComponent_ng_template_38_Template, 3, 0, "ng-template", 6)(39, AdminMisReportsComponent_ng_template_39_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-tab");
        \u0275\u0275template(41, AdminMisReportsComponent_ng_template_41_Template, 3, 0, "ng-template", 6)(42, AdminMisReportsComponent_ng_template_42_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-tab");
        \u0275\u0275template(44, AdminMisReportsComponent_ng_template_44_Template, 3, 0, "ng-template", 6)(45, AdminMisReportsComponent_ng_template_45_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-tab");
        \u0275\u0275template(47, AdminMisReportsComponent_ng_template_47_Template, 3, 0, "ng-template", 6)(48, AdminMisReportsComponent_ng_template_48_Template, 1, 0, "ng-template", 7);
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [
      MatTabsModule,
      MatTabContent,
      MatTabLabel,
      MatTab,
      MatTabGroup,
      MisReportExecutiveTabComponent,
      MisReportCustomerConsentTabComponent,
      MisReportAuditTabComponent,
      MisReportExpiryTabComponent,
      MisReportRevocationTabComponent,
      MisReportComplianceTabComponent,
      MisReportOperationalTabComponent,
      MisReportScheduledTabComponent,
      MisReportConsentInventoryTabComponent,
      MisReportActiveConsentsTabComponent,
      MisReportChannelDeepDiveTabComponent,
      MisReportConsentLeaderboardTabComponent,
      MisReportDemographicsTabComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.mis-page[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: var(--space-6, 24px) var(--space-4, 16px) 80px;\n}\n.mis-header[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 24px;\n  padding: 28px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.98) 0%,\n      rgba(30, 41, 59, 0.96) 45%,\n      rgba(37, 99, 235, 0.92) 100%);\n  border: 1px solid rgba(148, 163, 184, 0.14);\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.06);\n}\n.mis-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(255, 255, 255, 0.14),\n      transparent 42%);\n  pointer-events: none;\n}\n.mis-header-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.mis-eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(191, 219, 254, 0.95);\n}\n.mis-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: clamp(28px, 3vw, 38px);\n  font-weight: 700;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  color: #ffffff;\n}\n.mis-lede[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 780px;\n  font-size: 14px;\n  line-height: 1.7;\n  color: rgba(226, 232, 240, 0.92);\n}\n.mis-tabs[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n  .mis-tabs .mat-mdc-tab-header {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-bottom: 1px solid #e2e8f0;\n}\n  .mis-tabs .mat-mdc-tab-label-container {\n  padding: 0 10px;\n}\n  .mis-tabs .mdc-tab {\n  min-width: auto;\n  height: 64px;\n  padding: 0 8px;\n}\n  .mis-tabs .mdc-tab__content {\n  overflow: visible;\n}\n  .mis-tabs .mdc-tab-indicator__content--underline {\n  border-color: #2563eb !important;\n  border-top-width: 3px !important;\n  border-radius: 999px;\n}\n.tab-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  color: #64748b;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    transform 0.18s ease;\n}\n.tab-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1;\n}\n  .mis-tabs .mdc-tab:hover .tab-label {\n  background: rgba(37, 99, 235, 0.06);\n  color: #1d4ed8;\n}\n  .mis-tabs .mdc-tab--active .tab-label {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.12),\n      rgba(59, 130, 246, 0.08));\n  color: #1d4ed8;\n  box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.08);\n}\n  .mis-tabs .mdc-tab--active .tab-label i {\n  color: #2563eb;\n}\n  .mis-tabs .mat-ripple-element {\n  opacity: 0.06 !important;\n}\n  .mis-tabs .mat-mdc-tab-body-wrapper {\n  background: #f8fafc;\n}\n  .mis-tabs .mat-mdc-tab-body-content {\n  padding: 24px;\n}\n  .mis-tabs .mat-mdc-tab-header::-webkit-scrollbar {\n  height: 8px;\n}\n  .mis-tabs .mat-mdc-tab-header::-webkit-scrollbar-track {\n  background: transparent;\n}\n  .mis-tabs .mat-mdc-tab-header::-webkit-scrollbar-thumb {\n  background: rgba(148, 163, 184, 0.35);\n  border-radius: 999px;\n}\n  .mis-tabs .mat-mdc-tab-header::-webkit-scrollbar-thumb:hover {\n  background: rgba(100, 116, 139, 0.45);\n}\n@media (max-width: 1024px) {\n  .mis-header[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n    .mis-tabs .mat-mdc-tab-body-content {\n    padding: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .mis-page[_ngcontent-%COMP%] {\n    padding-inline: 12px;\n  }\n  .mis-header[_ngcontent-%COMP%] {\n    border-radius: 20px;\n    padding: 22px 20px;\n  }\n  .mis-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .mis-lede[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n    .mis-tabs {\n    border-radius: 18px;\n  }\n    .mis-tabs .mdc-tab {\n    height: 58px;\n  }\n  .tab-label[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    font-size: 12px;\n  }\n  .tab-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n    .mis-tabs .mat-mdc-tab-body-content {\n    padding: 16px;\n  }\n}\n@media (max-width: 560px) {\n  .mis-header[_ngcontent-%COMP%] {\n    padding: 20px 18px;\n  }\n  .mis-eyebrow[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .mis-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .tab-label[_ngcontent-%COMP%] {\n    gap: 6px;\n    padding: 8px;\n  }\n}\n  .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n/*# sourceMappingURL=admin-mis-reports.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminMisReportsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-mis-reports", standalone: true, imports: [
      MatTabsModule,
      MisReportExecutiveTabComponent,
      MisReportCustomerConsentTabComponent,
      MisReportAuditTabComponent,
      MisReportExpiryTabComponent,
      MisReportRevocationTabComponent,
      MisReportComplianceTabComponent,
      MisReportOperationalTabComponent,
      MisReportScheduledTabComponent,
      MisReportConsentInventoryTabComponent,
      MisReportActiveConsentsTabComponent,
      MisReportChannelDeepDiveTabComponent,
      MisReportConsentLeaderboardTabComponent,
      MisReportDemographicsTabComponent
    ], template: '<div class="mis-page">\r\n  <header class="mis-header">\r\n    <div class="mis-header-text">\r\n      <p class="mis-eyebrow">Admin \xB7 Reports</p>\r\n      <h1>MIS Reports</h1>\r\n      <p class="mis-lede">\r\n        Management information for consent operations, compliance posture, and channel performance.\r\n      </p>\r\n    </div>\r\n  </header>\r\n\r\n  <mat-tab-group class="mis-tabs" animationDuration="200ms" dynamicHeight>\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-layout-dashboard"></i> Executive</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-executive-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-users"></i> Customer Consent</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-customer-consent-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-file-text"></i> Consent Audit</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-audit-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-clock-exclamation"></i> Expiry</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-expiry-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-ban"></i> Revocations</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-revocation-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-shield-check"></i> Compliance</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-compliance-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-chart-bar"></i> Operational</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-operational-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-mail-forward"></i> Scheduled</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-scheduled-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-packages"></i> Consent inventory</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-consent-inventory-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-chart-line"></i> Active consents</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-active-consents-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-layout-grid"></i> Channel deep-dive</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-channel-deep-dive-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-trophy"></i> Leaderboard</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-consent-leaderboard-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <span class="tab-label"><i class="ti ti-users-group"></i> Demographics</span>\r\n      </ng-template>\r\n      <ng-template matTabContent>\r\n        <app-mis-report-demographics-tab />\r\n      </ng-template>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>', styles: ['@charset "UTF-8";\n\n/* src/app/features/admin/admin-mis-reports/admin-mis-reports.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.mis-page {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: var(--space-6, 24px) var(--space-4, 16px) 80px;\n}\n.mis-header {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 24px;\n  padding: 28px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.98) 0%,\n      rgba(30, 41, 59, 0.96) 45%,\n      rgba(37, 99, 235, 0.92) 100%);\n  border: 1px solid rgba(148, 163, 184, 0.14);\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.06);\n}\n.mis-header::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(255, 255, 255, 0.14),\n      transparent 42%);\n  pointer-events: none;\n}\n.mis-header-text {\n  position: relative;\n  z-index: 1;\n}\n.mis-eyebrow {\n  margin: 0 0 8px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(191, 219, 254, 0.95);\n}\n.mis-header h1 {\n  margin: 0 0 10px;\n  font-size: clamp(28px, 3vw, 38px);\n  font-weight: 700;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  color: #ffffff;\n}\n.mis-lede {\n  margin: 0;\n  max-width: 780px;\n  font-size: 14px;\n  line-height: 1.7;\n  color: rgba(226, 232, 240, 0.92);\n}\n.mis-tabs {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n::ng-deep .mis-tabs .mat-mdc-tab-header {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-bottom: 1px solid #e2e8f0;\n}\n::ng-deep .mis-tabs .mat-mdc-tab-label-container {\n  padding: 0 10px;\n}\n::ng-deep .mis-tabs .mdc-tab {\n  min-width: auto;\n  height: 64px;\n  padding: 0 8px;\n}\n::ng-deep .mis-tabs .mdc-tab__content {\n  overflow: visible;\n}\n::ng-deep .mis-tabs .mdc-tab-indicator__content--underline {\n  border-color: #2563eb !important;\n  border-top-width: 3px !important;\n  border-radius: 999px;\n}\n.tab-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  color: #64748b;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    transform 0.18s ease;\n}\n.tab-label i {\n  font-size: 16px;\n  line-height: 1;\n}\n::ng-deep .mis-tabs .mdc-tab:hover .tab-label {\n  background: rgba(37, 99, 235, 0.06);\n  color: #1d4ed8;\n}\n::ng-deep .mis-tabs .mdc-tab--active .tab-label {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.12),\n      rgba(59, 130, 246, 0.08));\n  color: #1d4ed8;\n  box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.08);\n}\n::ng-deep .mis-tabs .mdc-tab--active .tab-label i {\n  color: #2563eb;\n}\n::ng-deep .mis-tabs .mat-ripple-element {\n  opacity: 0.06 !important;\n}\n::ng-deep .mis-tabs .mat-mdc-tab-body-wrapper {\n  background: #f8fafc;\n}\n::ng-deep .mis-tabs .mat-mdc-tab-body-content {\n  padding: 24px;\n}\n::ng-deep .mis-tabs .mat-mdc-tab-header::-webkit-scrollbar {\n  height: 8px;\n}\n::ng-deep .mis-tabs .mat-mdc-tab-header::-webkit-scrollbar-track {\n  background: transparent;\n}\n::ng-deep .mis-tabs .mat-mdc-tab-header::-webkit-scrollbar-thumb {\n  background: rgba(148, 163, 184, 0.35);\n  border-radius: 999px;\n}\n::ng-deep .mis-tabs .mat-mdc-tab-header::-webkit-scrollbar-thumb:hover {\n  background: rgba(100, 116, 139, 0.45);\n}\n@media (max-width: 1024px) {\n  .mis-header {\n    padding: 24px;\n  }\n  ::ng-deep .mis-tabs .mat-mdc-tab-body-content {\n    padding: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .mis-page {\n    padding-inline: 12px;\n  }\n  .mis-header {\n    border-radius: 20px;\n    padding: 22px 20px;\n  }\n  .mis-header h1 {\n    font-size: 28px;\n  }\n  .mis-lede {\n    font-size: 13px;\n  }\n  ::ng-deep .mis-tabs {\n    border-radius: 18px;\n  }\n  ::ng-deep .mis-tabs .mdc-tab {\n    height: 58px;\n  }\n  .tab-label {\n    padding: 8px 10px;\n    font-size: 12px;\n  }\n  .tab-label i {\n    font-size: 15px;\n  }\n  ::ng-deep .mis-tabs .mat-mdc-tab-body-content {\n    padding: 16px;\n  }\n}\n@media (max-width: 560px) {\n  .mis-header {\n    padding: 20px 18px;\n  }\n  .mis-eyebrow {\n    font-size: 10px;\n  }\n  .mis-header h1 {\n    font-size: 24px;\n  }\n  .tab-label {\n    gap: 6px;\n    padding: 8px;\n  }\n}\n::ng-deep .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n/*# sourceMappingURL=admin-mis-reports.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminMisReportsComponent, { className: "AdminMisReportsComponent", filePath: "src/app/features/admin/admin-mis-reports/admin-mis-reports.component.ts", lineNumber: 39 });
})();
export {
  AdminMisReportsComponent
};
//# sourceMappingURL=chunk-FM7J62N7.js.map
