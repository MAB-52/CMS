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
  AuditService
} from "./chunk-QTPUEVRL.js";
import {
  TimeAgoPipe
} from "./chunk-K3ZYD44P.js";
import "./chunk-RENR4JVC.js";
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
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/checker/review-history/review-history.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReviewHistoryComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReviewHistoryComponent_Conditional_9_Conditional_18_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No matching review actions on this page. Try another page or adjust filters. ");
  }
}
function ReviewHistoryComponent_Conditional_9_Conditional_18_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No matching review actions yet. Approve, reject, or request revisions from the checker workbenches to populate this list. ");
  }
}
function ReviewHistoryComponent_Conditional_9_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, ReviewHistoryComponent_Conditional_9_Conditional_18_Conditional_0_Conditional_1_Template, 1, 0)(2, ReviewHistoryComponent_Conditional_9_Conditional_18_Conditional_0_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.page() > 0 ? 1 : 2);
  }
}
function ReviewHistoryComponent_Conditional_9_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " No rows match your search or type filter on this page. ");
    \u0275\u0275elementEnd();
  }
}
function ReviewHistoryComponent_Conditional_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReviewHistoryComponent_Conditional_9_Conditional_18_Conditional_0_Template, 3, 1, "div", 14)(1, ReviewHistoryComponent_Conditional_9_Conditional_18_Conditional_1_Template, 2, 0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.rows().length ? 0 : 1);
  }
}
function ReviewHistoryComponent_Conditional_9_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 24)(13, "span", 25);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "timeAgo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("action-badge--" + ctx_r1.actionBadgeTone(e_r3.action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatActionLabel(e_r3.action), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap("type-chip--" + ctx_r1.entityChipKind(e_r3.entityType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.entityChipLabel(e_r3.entityType), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r3.entityName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 9, e_r3.performedAt));
  }
}
function ReviewHistoryComponent_Conditional_9_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ReviewHistoryComponent_Conditional_9_Conditional_19_For_2_Template, 16, 11, "div", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.displayedRows());
  }
}
function ReviewHistoryComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "input", 6);
    \u0275\u0275listener("ngModelChange", function ReviewHistoryComponent_Conditional_9_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "select", 7);
    \u0275\u0275listener("ngModelChange", function ReviewHistoryComponent_Conditional_9_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.typeFilter.set($event));
    });
    \u0275\u0275elementStart(3, "option", 8);
    \u0275\u0275text(4, "All types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 8);
    \u0275\u0275text(6, "Consents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 8);
    \u0275\u0275text(8, "Broadcasts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 8);
    \u0275\u0275text(10, "Rules");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
    \u0275\u0275listener("click", function ReviewHistoryComponent_Conditional_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275text(13, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 10);
    \u0275\u0275listener("click", function ReviewHistoryComponent_Conditional_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(17, " Next ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ReviewHistoryComponent_Conditional_9_Conditional_18_Template, 2, 1)(19, ReviewHistoryComponent_Conditional_9_Conditional_19_Template, 3, 0, "div", 12);
    \u0275\u0275elementStart(20, "div", 13)(21, "button", 10);
    \u0275\u0275listener("click", function ReviewHistoryComponent_Conditional_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275text(22, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 10);
    \u0275\u0275listener("click", function ReviewHistoryComponent_Conditional_9_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(26, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.searchQuery());
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.typeFilter());
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", "all");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", "consents");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", "broadcasts");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", "rules");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Page ", ctx_r1.page() + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.hasNext());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.displayedRows().length ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Page ", ctx_r1.page() + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.hasNext());
  }
}
var CHECKER_REVIEW_HISTORY_ACTIONS = /* @__PURE__ */ new Set([
  "CONSENT_APPROVED",
  "CONSENT_REJECTED",
  "CONSENT_REVISION_REQUESTED",
  "CONSENT_PUBLISHED",
  "BROADCAST_APPROVED",
  "BROADCAST_REJECTED",
  "BROADCAST_REVISION_REQUESTED",
  "RULE_APPROVED",
  "RULE_REJECTED",
  "RULE_REVISION_REQUESTED"
]);
var ReviewHistoryComponent = class _ReviewHistoryComponent {
  constructor() {
    this.audit = inject(AuditService);
    this.rows = signal([]);
    this.loading = signal(true);
    this.page = signal(0);
    this.size = signal(15);
    this.hasNext = signal(false);
    this.searchQuery = signal("");
    this.typeFilter = signal("all");
    this.displayedRows = computed(() => {
      let list = this.rows();
      const tf = this.typeFilter();
      if (tf !== "all") {
        list = list.filter((e) => this.matchesTypeFilter(e, tf));
      }
      const q = this.searchQuery().trim().toLowerCase();
      if (q) {
        list = list.filter((e) => (e.entityName ?? "").toLowerCase().includes(q) || (e.description ?? "").toLowerCase().includes(q));
      }
      return list;
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.audit.getMyActivity(this.page(), this.size()).subscribe({
      next: (res) => {
        this.loading.set(false);
        const content = res.success && res.data?.content ? res.data.content : [];
        const filtered = content.filter((e) => CHECKER_REVIEW_HISTORY_ACTIONS.has(e.action));
        this.rows.set(filtered);
        this.hasNext.set(!!res.data?.hasNext);
      },
      error: () => {
        this.loading.set(false);
        this.rows.set([]);
        this.hasNext.set(false);
      }
    });
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
  formatActionLabel(action) {
    return (action ?? "").replace(/_/g, " ");
  }
  entityChipLabel(entityType) {
    const t = (entityType ?? "").toUpperCase();
    if (t === "CONSENT_RULE") {
      return "RULE";
    }
    if (t === "BROADCAST_REQUEST") {
      return "BROADCAST";
    }
    if (t === "CONSENT") {
      return "CONSENT";
    }
    return t || "\u2014";
  }
  entityChipKind(entityType) {
    const t = (entityType ?? "").toUpperCase();
    if (t === "CONSENT") {
      return "consent";
    }
    if (t === "BROADCAST_REQUEST") {
      return "broadcast";
    }
    if (t === "CONSENT_RULE") {
      return "rule";
    }
    return "other";
  }
  actionBadgeTone(action) {
    const a = (action ?? "").toUpperCase();
    if (a.endsWith("_APPROVED") || a === "CONSENT_PUBLISHED") {
      return "ok";
    }
    if (a.endsWith("_REJECTED")) {
      return "bad";
    }
    if (a.endsWith("_REVISION_REQUESTED")) {
      return "warn";
    }
    return "neutral";
  }
  matchesTypeFilter(e, tf) {
    const t = (e.entityType ?? "").toUpperCase();
    const a = (e.action ?? "").toUpperCase();
    if (tf === "consents") {
      return t === "CONSENT" || a.startsWith("CONSENT_");
    }
    if (tf === "broadcasts") {
      return t === "BROADCAST_REQUEST" || a.startsWith("BROADCAST_");
    }
    if (tf === "rules") {
      return t === "CONSENT_RULE" || a.startsWith("RULE_");
    }
    return true;
  }
  static {
    this.\u0275fac = function ReviewHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewHistoryComponent, selectors: [["app-review-history"]], decls: 10, vars: 1, consts: [[1, "page"], [1, "head"], ["mat-stroked-button", "", "routerLink", "/checker/dashboard"], [1, "sub"], [1, "state-loading"], [1, "filters"], ["type", "search", "placeholder", "Search by entity name or description", "name", "reviewSearch", 1, "field", 3, "ngModelChange", "ngModel"], ["name", "reviewType", 1, "field", "select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "pager-bar", "pager-bar--top"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "page-label"], [1, "list"], [1, "pager-bar"], [1, "empty"], [1, "empty", "empty--soft"], [1, "row"], [1, "row-main"], [1, "row-badges"], [1, "action-badge"], [1, "type-chip"], [1, "row-body"], [1, "entity-name"], [1, "desc"], [1, "row-aside"], [1, "when"]], template: function ReviewHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Review History");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 2);
        \u0275\u0275text(5, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, " Broadcast, rule, and consent decisions you performed as Checker (from audit log). ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, ReviewHistoryComponent_Conditional_8_Template, 2, 0, "div", 4)(9, ReviewHistoryComponent_Conditional_9_Template, 27, 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.loading() ? 8 : 9);
      }
    }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatAnchor, MatButton, TimeAgoPipe], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: var(--space-6) var(--space-4);\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--space-3);\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: #0f172a;\n}\n.sub[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 0;\n  color: #64748b;\n  font-size: var(--text-14);\n  line-height: 1.55;\n  max-width: 640px;\n}\n.state-loading[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n  padding: var(--space-8);\n  text-align: center;\n  color: #64748b;\n  font-size: var(--text-14);\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n}\n.empty[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n  padding: var(--space-8);\n  text-align: center;\n  color: #64748b;\n  font-size: var(--text-14);\n  line-height: 1.5;\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n}\n.empty--soft[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.filters[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: center;\n}\n.filters--bottom[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n.field[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  min-width: 180px;\n  padding: var(--space-2) var(--space-3);\n  font-size: var(--text-14);\n  border-radius: var(--btn-radius);\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #0f172a;\n}\n.field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(99, 102, 241, 0.45);\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);\n}\n.select[_ngcontent-%COMP%] {\n  flex: 0 1 200px;\n  cursor: pointer;\n}\n.pager-bar[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n}\n.pager-bar--top[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n.page-label[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  color: #64748b;\n  font-weight: 600;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-4) var(--space-5);\n}\n.row-main[_ngcontent-%COMP%] {\n  flex: 1 1 280px;\n  min-width: 0;\n}\n.row-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--space-2);\n}\n.action-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: var(--text-12);\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  padding: 4px 10px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  text-transform: none;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.action-badge--ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n  border-color: rgba(22, 163, 74, 0.35);\n}\n.action-badge--bad[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #b91c1c;\n  border-color: rgba(220, 38, 38, 0.35);\n}\n.action-badge--warn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #b45309;\n  border-color: rgba(245, 158, 11, 0.4);\n}\n.action-badge--neutral[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.type-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  padding: 4px 10px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n}\n.type-chip--consent[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #4338ca;\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.type-chip--broadcast[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.12);\n  color: #0369a1;\n  border-color: rgba(14, 165, 233, 0.35);\n}\n.type-chip--rule[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.12);\n  color: #7e22ce;\n  border-color: rgba(168, 85, 247, 0.35);\n}\n.type-chip--other[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  border-color: #e2e8f0;\n}\n.row-body[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n}\n.entity-name[_ngcontent-%COMP%] {\n  font-size: var(--text-16);\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.35;\n  word-break: break-word;\n}\n.desc[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  font-size: var(--text-13);\n  color: #64748b;\n  line-height: 1.45;\n  word-break: break-word;\n}\n.row-aside[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  align-self: flex-start;\n}\n.when[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n@media (max-width: 640px) {\n  .row-aside[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=review-history.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-review-history", standalone: true, imports: [RouterLink, FormsModule, MatButtonModule, TimeAgoPipe], template: `<div class="page">\r
  <div class="head">\r
    <h1>Review History</h1>\r
    <a mat-stroked-button routerLink="/checker/dashboard">Dashboard</a>\r
  </div>\r
\r
  <p class="sub">\r
    Broadcast, rule, and consent decisions you performed as Checker (from audit\r
    log).\r
  </p>\r
\r
  @if (loading()) {\r
  <div class="state-loading">Loading\u2026</div>\r
  } @else {\r
  <!-- Top Filters -->\r
  <div class="filters">\r
    <input type="search" class="field" placeholder="Search by entity name or description" [ngModel]="searchQuery()"\r
      (ngModelChange)="searchQuery.set($event)" name="reviewSearch" />\r
\r
    <select class="field select" [ngModel]="typeFilter()" (ngModelChange)="typeFilter.set($event)" name="reviewType">\r
      <option [ngValue]="'all'">All types</option>\r
      <option [ngValue]="'consents'">Consents</option>\r
      <option [ngValue]="'broadcasts'">Broadcasts</option>\r
      <option [ngValue]="'rules'">Rules</option>\r
    </select>\r
  </div>\r
\r
  <!-- Top Pagination -->\r
  <div class="pager-bar pager-bar--top">\r
    <button mat-stroked-button type="button" [disabled]="page() === 0" (click)="prevPage()">\r
      Previous\r
    </button>\r
\r
    <span class="page-label">Page {{ page() + 1 }}</span>\r
\r
    <button mat-stroked-button type="button" [disabled]="!hasNext()" (click)="nextPage()">\r
      Next\r
    </button>\r
  </div>\r
\r
  <!-- Empty States -->\r
  @if (!displayedRows().length) {\r
  @if (!rows().length) {\r
  <div class="empty">\r
    @if (page() > 0) {\r
    No matching review actions on this page. Try another page or adjust\r
    filters.\r
    } @else {\r
    No matching review actions yet. Approve, reject, or request revisions\r
    from the checker workbenches to populate this list.\r
    }\r
  </div>\r
  } @else {\r
  <div class="empty empty--soft">\r
    No rows match your search or type filter on this page.\r
  </div>\r
  }\r
  } @else {\r
  <!-- Review List -->\r
  <div class="list">\r
    @for (e of displayedRows(); track e.id) {\r
    <div class="row">\r
      <div class="row-main">\r
        <div class="row-badges">\r
          <span class="action-badge" [class]="'action-badge--' + actionBadgeTone(e.action)">\r
            {{ formatActionLabel(e.action) }}\r
          </span>\r
\r
          <span class="type-chip" [class]="'type-chip--' + entityChipKind(e.entityType)">\r
            {{ entityChipLabel(e.entityType) }}\r
          </span>\r
        </div>\r
\r
        <div class="row-body">\r
          <div class="entity-name">{{ e.entityName }}</div>\r
          <div class="desc">{{ e.description }}</div>\r
        </div>\r
      </div>\r
\r
      <div class="row-aside">\r
        <span class="when">{{ e.performedAt | timeAgo }}</span>\r
      </div>\r
    </div>\r
    }\r
  </div>\r
  }\r
\r
  <!-- Bottom Pagination Only -->\r
  <div class="pager-bar">\r
    <button mat-stroked-button type="button" [disabled]="page() === 0" (click)="prevPage()">\r
      Previous\r
    </button>\r
\r
    <span class="page-label">Page {{ page() + 1 }}</span>\r
\r
    <button mat-stroked-button type="button" [disabled]="!hasNext()" (click)="nextPage()">\r
      Next\r
    </button>\r
  </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/checker/review-history/review-history.component.scss */\n.page {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: var(--space-6) var(--space-4);\n}\n.head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--space-3);\n}\nh1 {\n  margin: 0;\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: #0f172a;\n}\n.sub {\n  margin: var(--space-2) 0 0;\n  color: #64748b;\n  font-size: var(--text-14);\n  line-height: 1.55;\n  max-width: 640px;\n}\n.state-loading {\n  margin-top: var(--space-6);\n  padding: var(--space-8);\n  text-align: center;\n  color: #64748b;\n  font-size: var(--text-14);\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n}\n.empty {\n  margin-top: var(--space-6);\n  padding: var(--space-8);\n  text-align: center;\n  color: #64748b;\n  font-size: var(--text-14);\n  line-height: 1.5;\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n}\n.empty--soft {\n  color: #94a3b8;\n}\n.filters {\n  margin-top: var(--space-5);\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  align-items: center;\n}\n.filters--bottom {\n  margin-top: var(--space-4);\n}\n.field {\n  flex: 1 1 220px;\n  min-width: 180px;\n  padding: var(--space-2) var(--space-3);\n  font-size: var(--text-14);\n  border-radius: var(--btn-radius);\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #0f172a;\n}\n.field:focus {\n  outline: none;\n  border-color: rgba(99, 102, 241, 0.45);\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);\n}\n.select {\n  flex: 0 1 200px;\n  cursor: pointer;\n}\n.pager-bar {\n  margin-top: var(--space-4);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n}\n.pager-bar--top {\n  margin-top: var(--space-4);\n}\n.page-label {\n  font-size: var(--text-13);\n  color: #64748b;\n  font-weight: 600;\n}\n.list {\n  margin-top: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--card-shadow);\n  padding: var(--space-4) var(--space-5);\n}\n.row-main {\n  flex: 1 1 280px;\n  min-width: 0;\n}\n.row-badges {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--space-2);\n}\n.action-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: var(--text-12);\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  padding: 4px 10px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  text-transform: none;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.action-badge--ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n  border-color: rgba(22, 163, 74, 0.35);\n}\n.action-badge--bad {\n  background: rgba(220, 38, 38, 0.1);\n  color: #b91c1c;\n  border-color: rgba(220, 38, 38, 0.35);\n}\n.action-badge--warn {\n  background: rgba(245, 158, 11, 0.12);\n  color: #b45309;\n  border-color: rgba(245, 158, 11, 0.4);\n}\n.action-badge--neutral {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.type-chip {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  padding: 4px 10px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n}\n.type-chip--consent {\n  background: rgba(99, 102, 241, 0.12);\n  color: #4338ca;\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.type-chip--broadcast {\n  background: rgba(14, 165, 233, 0.12);\n  color: #0369a1;\n  border-color: rgba(14, 165, 233, 0.35);\n}\n.type-chip--rule {\n  background: rgba(168, 85, 247, 0.12);\n  color: #7e22ce;\n  border-color: rgba(168, 85, 247, 0.35);\n}\n.type-chip--other {\n  background: #f1f5f9;\n  color: #64748b;\n  border-color: #e2e8f0;\n}\n.row-body {\n  margin-top: var(--space-3);\n}\n.entity-name {\n  font-size: var(--text-16);\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.35;\n  word-break: break-word;\n}\n.desc {\n  margin-top: var(--space-2);\n  font-size: var(--text-13);\n  color: #64748b;\n  line-height: 1.45;\n  word-break: break-word;\n}\n.row-aside {\n  flex: 0 0 auto;\n  align-self: flex-start;\n}\n.when {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n@media (max-width: 640px) {\n  .row-aside {\n    width: 100%;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=review-history.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewHistoryComponent, { className: "ReviewHistoryComponent", filePath: "src/app/features/checker/review-history/review-history.component.ts", lineNumber: 31 });
})();
export {
  ReviewHistoryComponent
};
//# sourceMappingURL=chunk-RK62C6QK.js.map
