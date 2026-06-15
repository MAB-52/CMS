import {
  WorkflowStatusBadgeComponent
} from "./chunk-AAN5W7BG.js";
import {
  ConsentRulesService
} from "./chunk-ZJPKKVVC.js";
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
  TimeAgoPipe
} from "./chunk-K3ZYD44P.js";
import "./chunk-5EC44GU6.js";
import {
  MatAnchor,
  MatButton,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/maker/maker-rules-workbench/maker-rules-workbench.component.ts
var _c0 = (a0) => ["/maker/rules", a0];
var _forTrack0 = ($index, $item) => $item.id;
function MakerRulesWorkbenchComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Loading rules\u2026");
    \u0275\u0275elementEnd();
  }
}
function MakerRulesWorkbenchComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2, "No rules yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Create your first scenario rule to align consent journeys with customer segments. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8);
    \u0275\u0275text(6, "Create rule");
    \u0275\u0275elementEnd()();
  }
}
function MakerRulesWorkbenchComponent_Conditional_13_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngValue", st_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatStatusLabel(st_r3));
  }
}
function MakerRulesWorkbenchComponent_Conditional_13_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.predefinedScenario);
  }
}
function MakerRulesWorkbenchComponent_Conditional_13_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17)(1, "div", 19);
    \u0275\u0275element(2, "app-workflow-status-badge", 20);
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "timeAgo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 23)(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, MakerRulesWorkbenchComponent_Conditional_13_For_16_Conditional_13_Template, 2, 1, "span", 25);
    \u0275\u0275elementStart(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, r_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("status", r_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, r_r4.updatedAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.ruleName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.ruleDescription || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r4.ruleType === "PREDEFINED_SCENARIO" ? "Scenario" : "Custom", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r4.predefinedScenario ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.primarySegment);
  }
}
function MakerRulesWorkbenchComponent_Conditional_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " No rules on this page match your name filter. ");
    \u0275\u0275elementEnd();
  }
}
function MakerRulesWorkbenchComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function MakerRulesWorkbenchComponent_Conditional_13_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function MakerRulesWorkbenchComponent_Conditional_13_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function MakerRulesWorkbenchComponent_Conditional_13_Template_select_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusChange());
    });
    \u0275\u0275elementStart(3, "option", 12);
    \u0275\u0275text(4, "All statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, MakerRulesWorkbenchComponent_Conditional_13_For_6_Template, 2, 2, "option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "button", 14);
    \u0275\u0275listener("click", function MakerRulesWorkbenchComponent_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275text(9, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 14);
    \u0275\u0275listener("click", function MakerRulesWorkbenchComponent_Conditional_13_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(13, " Next ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 16);
    \u0275\u0275repeaterCreate(15, MakerRulesWorkbenchComponent_Conditional_13_For_16_Template, 16, 12, "a", 17, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MakerRulesWorkbenchComponent_Conditional_13_Conditional_17_Template, 2, 0, "div", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.ruleStatuses);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Page ", ctx_r1.page() + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.hasNext());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.displayedRows());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.rows().length && !ctx_r1.displayedRows().length ? 17 : -1);
  }
}
var PAGE_SIZE = 9;
var MakerRulesWorkbenchComponent = class _MakerRulesWorkbenchComponent {
  constructor() {
    this.rulesApi = inject(ConsentRulesService);
    this.rows = signal([]);
    this.loading = signal(true);
    this.page = signal(0);
    this.hasNext = signal(false);
    this.statusFilter = "";
    this.searchQuery = "";
    this.ruleStatuses = [
      "DRAFT",
      "PENDING_CHECKER_APPROVAL",
      "APPROVED",
      "REJECTED",
      "REVISION_REQUESTED",
      "LIVE"
    ];
  }
  displayedRows() {
    const q = this.searchQuery.trim().toLowerCase();
    const list = this.rows();
    if (!q) {
      return list;
    }
    return list.filter((r) => (r.ruleName ?? "").toLowerCase().includes(q));
  }
  formatStatusLabel(status) {
    return status.replace(/_/g, " ");
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    const status = this.statusFilter ? this.statusFilter : void 0;
    this.rulesApi.mine(this.page(), PAGE_SIZE, status).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data?.content) {
          this.rows.set(res.data.content);
          this.hasNext.set(!!res.data.hasNext);
        } else {
          this.rows.set([]);
          this.hasNext.set(false);
        }
      },
      error: () => {
        this.loading.set(false);
        this.rows.set([]);
        this.hasNext.set(false);
      }
    });
  }
  onStatusChange() {
    this.page.set(0);
    this.load();
  }
  nextPage() {
    if (this.hasNext()) {
      this.page.update((p) => p + 1);
      this.load();
    }
  }
  prevPage() {
    if (this.page() > 0) {
      this.page.update((p) => p - 1);
      this.load();
    }
  }
  static {
    this.\u0275fac = function MakerRulesWorkbenchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MakerRulesWorkbenchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakerRulesWorkbenchComponent, selectors: [["app-maker-rules-workbench"]], decls: 14, vars: 1, consts: [[1, "page"], [1, "hero"], [1, "eyebrow"], [1, "lede"], ["mat-flat-button", "", "color", "primary", "routerLink", "/maker/rules/new", 1, "cta"], [1, "state-card"], [1, "state-card", "empty"], [1, "state-title"], ["mat-stroked-button", "", "routerLink", "/maker/rules/new"], [1, "toolbar"], ["type", "search", "placeholder", "Filter by name (this page)", "name", "ruleSearch", 1, "field", 3, "ngModelChange", "ngModel"], ["name", "ruleStatus", 1, "field", "select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "pager"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "page-label"], [1, "grid"], [1, "rule-card", 3, "routerLink"], [1, "no-matches"], [1, "card-top"], [3, "status"], [1, "muted"], [1, "desc"], [1, "chips"], [1, "chip"], [1, "chip", "accent"]], template: function MakerRulesWorkbenchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "p", 2);
        \u0275\u0275text(4, "Rule engine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Scenario & automation rules");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8, " Define consent-related outreach rules with maker\u2013checker control. Approved rules can be published live when you are ready. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 4);
        \u0275\u0275text(10, " + New rule ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, MakerRulesWorkbenchComponent_Conditional_11_Template, 2, 0, "div", 5)(12, MakerRulesWorkbenchComponent_Conditional_12_Template, 7, 0, "div", 6)(13, MakerRulesWorkbenchComponent_Conditional_13_Template, 18, 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.loading() ? 11 : !ctx.rows().length ? 12 : 13);
      }
    }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatAnchor, MatButton, WorkflowStatusBadgeComponent, TimeAgoPipe], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6);\n  animation: _ngcontent-%COMP%_fadeIn 0.28s ease;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-6);\n  flex-wrap: wrap;\n  padding: var(--space-6);\n  border-radius: 28px;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(59, 130, 246, 0.14),\n      transparent 34%),\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8fbff 100%);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.75);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: var(--color-primary);\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 3vw, 2.5rem);\n  font-weight: 900;\n  line-height: 1.05;\n  color: #0f172a;\n}\n.lede[_ngcontent-%COMP%] {\n  margin: var(--space-3) 0 0;\n  max-width: 760px;\n  font-size: 15px;\n  line-height: 1.75;\n  color: #64748b;\n}\n.cta[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n  padding-inline: 1.35rem !important;\n  height: 48px !important;\n  font-weight: 700 !important;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.22);\n}\n.state-card[_ngcontent-%COMP%] {\n  padding: var(--space-8);\n  border-radius: 24px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.86);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);\n  color: #64748b;\n  font-size: 15px;\n}\n.state-card.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-4);\n}\n.state-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  padding: var(--space-5);\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.05);\n}\n.field[_ngcontent-%COMP%] {\n  height: 46px;\n  min-width: 240px;\n  padding: 0 1rem;\n  border-radius: 14px;\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  background: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n  color: #0f172a;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(37, 99, 235, 0.45);\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);\n}\n.select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.pager[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.page-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #475569;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: var(--space-5);\n}\n.rule-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  padding: var(--space-5);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96) 0%,\n      rgba(248, 250, 252, 0.94) 100%);\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.rule-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(59, 130, 246, 0.18);\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fbff 100%);\n  box-shadow:\n    0 24px 48px rgba(15, 23, 42, 0.08),\n    0 8px 20px rgba(59, 130, 246, 0.08),\n    inset 0 1px 0 rgba(255, 255, 255, 0.96);\n}\n.rule-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 24px;\n  right: 24px;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(59, 130, 246, 0.28),\n      transparent);\n  opacity: 0.7;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n}\n.muted[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.rule-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n  line-height: 1.3;\n  color: #0f172a;\n}\n.desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.75;\n  color: #64748b;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 30px;\n  padding: 0 0.9rem;\n  border-radius: 999px;\n  background: rgba(241, 245, 249, 0.9);\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  color: #475569;\n}\n.chip.accent[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  border-color: rgba(59, 130, 246, 0.2);\n  color: #2563eb;\n}\n.no-matches[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  border-radius: 18px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.75);\n  border: 1px dashed rgba(148, 163, 184, 0.28);\n  color: #64748b;\n  font-size: 14px;\n}\n[_nghost-%COMP%]     .mat-mdc-stroked-button {\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n}\n[_nghost-%COMP%]     .mat-mdc-unelevated-button {\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n}\n@media (max-width: 900px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: var(--space-5);\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .pager[_ngcontent-%COMP%] {\n    margin-left: 0;\n    justify-content: space-between;\n  }\n  .field[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=maker-rules-workbench.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakerRulesWorkbenchComponent, [{
    type: Component,
    args: [{ selector: "app-maker-rules-workbench", standalone: true, imports: [RouterLink, FormsModule, MatButtonModule, WorkflowStatusBadgeComponent, TimeAgoPipe], template: `<div class="page">\r
  <div class="hero">\r
    <div>\r
      <p class="eyebrow">Rule engine</p>\r
      <h1>Scenario &amp; automation rules</h1>\r
      <p class="lede">\r
        Define consent-related outreach rules with maker\u2013checker control.\r
        Approved rules can be published live when you are ready.\r
      </p>\r
    </div>\r
    <a\r
      mat-flat-button\r
      color="primary"\r
      routerLink="/maker/rules/new"\r
      class="cta"\r
    >\r
      + New rule\r
    </a>\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="state-card">Loading rules\u2026</div>\r
  } @else if (!rows().length) {\r
    <div class="state-card empty">\r
      <div class="state-title">No rules yet</div>\r
      <p>\r
        Create your first scenario rule to align consent journeys with customer\r
        segments.\r
      </p>\r
      <a mat-stroked-button routerLink="/maker/rules/new">Create rule</a>\r
    </div>\r
  } @else {\r
    <!-- Top toolbar -->\r
    <div class="toolbar">\r
      <input\r
        type="search"\r
        class="field"\r
        placeholder="Filter by name (this page)"\r
        [(ngModel)]="searchQuery"\r
        name="ruleSearch"\r
      />\r
\r
      <select\r
        class="field select"\r
        [(ngModel)]="statusFilter"\r
        name="ruleStatus"\r
        (ngModelChange)="onStatusChange()"\r
      >\r
        <option [ngValue]="''">All statuses</option>\r
        @for (st of ruleStatuses; track st) {\r
          <option [ngValue]="st">{{ formatStatusLabel(st) }}</option>\r
        }\r
      </select>\r
\r
      <div class="pager">\r
        <button\r
          mat-stroked-button\r
          type="button"\r
          [disabled]="page() === 0"\r
          (click)="prevPage()"\r
        >\r
          Previous\r
        </button>\r
\r
        <span class="page-label">Page {{ page() + 1 }}</span>\r
\r
        <button\r
          mat-stroked-button\r
          type="button"\r
          [disabled]="!hasNext()"\r
          (click)="nextPage()"\r
        >\r
          Next\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Rule cards grid -->\r
    <div class="grid">\r
      @for (r of displayedRows(); track r.id) {\r
        <a class="rule-card" [routerLink]="['/maker/rules', r.id]">\r
          <div class="card-top">\r
            <app-workflow-status-badge [status]="r.status" />\r
            <span class="muted">{{ r.updatedAt | timeAgo }}</span>\r
          </div>\r
\r
          <h2>{{ r.ruleName }}</h2>\r
\r
          <p class="desc">{{ r.ruleDescription || '\u2014' }}</p>\r
\r
          <div class="chips">\r
            <span class="chip">\r
              {{\r
                r.ruleType === 'PREDEFINED_SCENARIO'\r
                  ? 'Scenario'\r
                  : 'Custom'\r
              }}\r
            </span>\r
\r
            @if (r.predefinedScenario) {\r
              <span class="chip accent">{{ r.predefinedScenario }}</span>\r
            }\r
\r
            <span class="chip">{{ r.primarySegment }}</span>\r
          </div>\r
        </a>\r
      }\r
    </div>\r
\r
    <!-- No matches message -->\r
    @if (rows().length && !displayedRows().length) {\r
      <div class="no-matches">\r
        No rules on this page match your name filter.\r
      </div>\r
    }\r
  }\r
</div>\r
\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/maker/maker-rules-workbench/maker-rules-workbench.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.page {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6);\n  animation: fadeIn 0.28s ease;\n}\n.hero {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-6);\n  flex-wrap: wrap;\n  padding: var(--space-6);\n  border-radius: 28px;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(59, 130, 246, 0.14),\n      transparent 34%),\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8fbff 100%);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.75);\n}\n.eyebrow {\n  margin: 0 0 var(--space-2);\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: var(--color-primary);\n}\n.hero h1 {\n  margin: 0;\n  font-size: clamp(2rem, 3vw, 2.5rem);\n  font-weight: 900;\n  line-height: 1.05;\n  color: #0f172a;\n}\n.lede {\n  margin: var(--space-3) 0 0;\n  max-width: 760px;\n  font-size: 15px;\n  line-height: 1.75;\n  color: #64748b;\n}\n.cta {\n  border-radius: 16px !important;\n  padding-inline: 1.35rem !important;\n  height: 48px !important;\n  font-weight: 700 !important;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.22);\n}\n.state-card {\n  padding: var(--space-8);\n  border-radius: 24px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.86);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);\n  color: #64748b;\n  font-size: 15px;\n}\n.state-card.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-4);\n}\n.state-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  padding: var(--space-5);\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.05);\n}\n.field {\n  height: 46px;\n  min-width: 240px;\n  padding: 0 1rem;\n  border-radius: 14px;\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  background: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n  color: #0f172a;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.2s ease;\n}\n.field:focus {\n  outline: none;\n  border-color: rgba(37, 99, 235, 0.45);\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);\n}\n.select {\n  cursor: pointer;\n}\n.pager {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.page-label {\n  font-size: 13px;\n  font-weight: 700;\n  color: #475569;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: var(--space-5);\n}\n.rule-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  padding: var(--space-5);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96) 0%,\n      rgba(248, 250, 252, 0.94) 100%);\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.rule-card:hover {\n  transform: translateY(-4px);\n  border-color: rgba(59, 130, 246, 0.18);\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fbff 100%);\n  box-shadow:\n    0 24px 48px rgba(15, 23, 42, 0.08),\n    0 8px 20px rgba(59, 130, 246, 0.08),\n    inset 0 1px 0 rgba(255, 255, 255, 0.96);\n}\n.rule-card::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 24px;\n  right: 24px;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(59, 130, 246, 0.28),\n      transparent);\n  opacity: 0.7;\n}\n.card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n}\n.muted {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.rule-card h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n  line-height: 1.3;\n  color: #0f172a;\n}\n.desc {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.75;\n  color: #64748b;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 30px;\n  padding: 0 0.9rem;\n  border-radius: 999px;\n  background: rgba(241, 245, 249, 0.9);\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  color: #475569;\n}\n.chip.accent {\n  background: rgba(59, 130, 246, 0.12);\n  border-color: rgba(59, 130, 246, 0.2);\n  color: #2563eb;\n}\n.no-matches {\n  padding: var(--space-5);\n  border-radius: 18px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.75);\n  border: 1px dashed rgba(148, 163, 184, 0.28);\n  color: #64748b;\n  font-size: 14px;\n}\n:host ::ng-deep .mat-mdc-stroked-button {\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n}\n:host ::ng-deep .mat-mdc-unelevated-button {\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n}\n@media (max-width: 900px) {\n  .hero {\n    padding: var(--space-5);\n  }\n  .toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .pager {\n    margin-left: 0;\n    justify-content: space-between;\n  }\n  .field {\n    width: 100%;\n    min-width: 100%;\n  }\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=maker-rules-workbench.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerRulesWorkbenchComponent, { className: "MakerRulesWorkbenchComponent", filePath: "src/app/features/maker/maker-rules-workbench/maker-rules-workbench.component.ts", lineNumber: 19 });
})();
export {
  MakerRulesWorkbenchComponent
};
//# sourceMappingURL=chunk-VEOSS33B.js.map
