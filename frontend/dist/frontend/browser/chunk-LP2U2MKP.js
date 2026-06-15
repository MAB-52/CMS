import {
  channelsLabel
} from "./chunk-QPL2KT7B.js";
import {
  ConsentTypeLabelPipe
} from "./chunk-SCFZFJFM.js";
import {
  ConsentPreviewDialogComponent,
  MergeTagService
} from "./chunk-HI23A5RU.js";
import {
  MatDialog
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
  MatLabel
} from "./chunk-XINNQDUF.js";
import {
  MatOption
} from "./chunk-FIYZFADG.js";
import "./chunk-ASPSHXFC.js";
import {
  ConsentService
} from "./chunk-CSLDYKDC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VXKP42CX.js";
import "./chunk-OIBNGD5S.js";
import {
  TimeAgoPipe
} from "./chunk-K3ZYD44P.js";
import "./chunk-EJZSSRS2.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import "./chunk-RENR4JVC.js";
import "./chunk-5EC44GU6.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-DBZCAWGK.js";
import {
  Router
} from "./chunk-2TGCEGVP.js";
import "./chunk-23MDLYAU.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/checker/pending-approvals/pending-approvals.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PendingApprovalsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 22);
    \u0275\u0275text(2, " \u2713 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, " All caught up! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " No consents are waiting for your review. ");
    \u0275\u0275elementEnd()();
  }
}
function PendingApprovalsComponent_Conditional_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Conditional_43_For_2_Template_div_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.review(c_r2));
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "div", 26)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "consentTypeLabel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 28);
    \u0275\u0275text(9, " \u23F3 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 29)(11, "span")(12, "strong");
    \u0275\u0275text(13, "ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 30);
    \u0275\u0275text(16, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span")(18, "strong");
    \u0275\u0275text(19, "Submitted by:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 30);
    \u0275\u0275text(22, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "timeAgo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 29)(27, "span")(28, "strong");
    \u0275\u0275text(29, "Category:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 30);
    \u0275\u0275text(32, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span")(34, "strong");
    \u0275\u0275text(35, "Channels:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "span")(39, "strong");
    \u0275\u0275text(40, "Version:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 30);
    \u0275\u0275text(43, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span")(45, "strong");
    \u0275\u0275text(46, "Validity:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 31);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Conditional_43_For_2_Template_div_click_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(49, "button", 32);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Conditional_43_For_2_Template_button_click_49_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.review(c_r2));
    });
    \u0275\u0275text(50, " Review \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.typeClass(c_r2.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 11, c_r2.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r2.consentName, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", c_r2.consentId, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (c_r2.createdBy == null ? null : c_r2.createdBy.fullName) || "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 13, c_r2.submittedAt), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", c_r2.category, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.channels(c_r2), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", c_r2.version, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", c_r2.validityPeriodDays, " days ");
  }
}
function PendingApprovalsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, PendingApprovalsComponent_Conditional_43_For_2_Template, 51, 15, "div", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filtered());
  }
}
var PendingApprovalsComponent = class _PendingApprovalsComponent {
  constructor() {
    this.api = inject(ConsentService);
    this.mergeApi = inject(MergeTagService);
    this.dialog = inject(MatDialog);
    this.router = inject(Router);
    this.list = signal([]);
    this.filtered = signal([]);
    this.mergeTags = signal([]);
    this.search = "";
    this.typeFilter = "ALL";
    this.sort = "date";
  }
  ngOnInit() {
    this.mergeApi.getMergeTags().subscribe({
      next: (t) => this.mergeTags.set(t),
      error: () => {
      }
    });
    this.reload();
  }
  reload() {
    this.api.getPendingApprovals().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.list.set(res.data);
          this.applyFilters();
        }
      }
    });
  }
  applyFilters() {
    let rows = [...this.list()];
    if (this.typeFilter !== "ALL") {
      rows = rows.filter((c) => c.type === this.typeFilter);
    }
    const q = this.search.trim().toLowerCase();
    if (q) {
      rows = rows.filter((c) => c.consentName.toLowerCase().includes(q) || c.consentId.toLowerCase().includes(q));
    }
    if (this.sort === "name") {
      rows.sort((a, b) => a.consentName.localeCompare(b.consentName));
    } else {
      rows.sort((a, b) => a.submittedAt < b.submittedAt ? 1 : -1);
    }
    this.filtered.set(rows);
  }
  preview(c) {
    const data = {
      html: c.consentMessage || "<p><em>No message body.</em></p>",
      mergeTags: this.mergeTags()
    };
    this.dialog.open(ConsentPreviewDialogComponent, { width: "760px", maxHeight: "90vh", data });
  }
  review(c) {
    void this.router.navigate(["/checker/consents", c.id, "review"]);
  }
  typeClass(t) {
    switch (t) {
      case "NEW_TEMPLATE":
        return "pill blue";
      case "VERSION_UPDATE":
        return "pill orange";
      case "RENEWAL":
        return "pill green";
      default:
        return "pill";
    }
  }
  channels(c) {
    return channelsLabel(c);
  }
  static {
    this.\u0275fac = function PendingApprovalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PendingApprovalsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingApprovalsComponent, selectors: [["app-pending-approvals"]], decls: 44, vars: 9, consts: [[1, "page"], [1, "hero"], [1, "hero__content"], [1, "hero__eyebrow"], [1, "hero__stats"], [1, "stat-card"], [1, "stat-card__value"], [1, "stat-card__label"], ["mat-icon-button", "", "type", "button", "title", "Refresh", 1, "refresh-btn", 3, "click"], [1, "toolbar"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], [1, "toolbar-right"], ["appearance", "outline", 1, "search"], ["matInput", "", "placeholder", "Name or ID\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], ["appearance", "outline", 1, "sort"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", "date"], ["value", "name"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "apply-btn", 3, "click"], [1, "empty"], [1, "cards"], [1, "empty__icon"], [1, "card"], [1, "card", 3, "click"], [1, "card__top"], [1, "left"], [1, "name"], [1, "pending-icon"], [1, "meta-row"], [1, "dot"], [1, "acts", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "review-btn", 3, "click"]], template: function PendingApprovalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, " Pending Review Queue ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, " Pending Approvals ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, " Review, validate, and approve pending consent requests submitted by makers. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "span", 6);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 7);
        \u0275\u0275text(14, " Pending Reviews ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "span", 6);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "consentTypeLabel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 7);
        \u0275\u0275text(20, " Active Filter ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "button", 8);
        \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_21_listener() {
          return ctx.reload();
        });
        \u0275\u0275text(22, " \u{1F504} ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 9)(24, "div", 10)(25, "button", 11);
        \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_25_listener() {
          ctx.typeFilter = "ALL";
          return ctx.applyFilters();
        });
        \u0275\u0275text(26, " All ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 12)(28, "mat-form-field", 13)(29, "mat-label");
        \u0275\u0275text(30, " Search ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function PendingApprovalsComponent_Template_input_keyup_enter_31_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "mat-form-field", 15)(33, "mat-label");
        \u0275\u0275text(34, " Sort ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_Template_mat_select_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sort, $event) || (ctx.sort = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function PendingApprovalsComponent_Template_mat_select_selectionChange_35_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(36, "mat-option", 17);
        \u0275\u0275text(37, " Date \u2193 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-option", 18);
        \u0275\u0275text(39, " Name ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "button", 19);
        \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_40_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275text(41, " Apply ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(42, PendingApprovalsComponent_Conditional_42_Template, 7, 0, "div", 20)(43, PendingApprovalsComponent_Conditional_43_Template, 3, 0, "div", 21);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" ", ctx.filtered().length, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.typeFilter === "ALL" ? "All" : \u0275\u0275pipeBind1(18, 7, ctx.typeFilter), " ");
        \u0275\u0275advance(8);
        \u0275\u0275classProp("on", ctx.typeFilter === "ALL");
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.sort);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(!ctx.filtered().length ? 42 : 43);
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIconButton,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      ConsentTypeLabelPipe,
      TimeAgoPipe
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  --primary: #4f46e5;\n  --primary-light: #eef2ff;\n  --surface: #ffffff;\n  --surface-alt: #f8fafc;\n  --border: #e2e8f0;\n  --text-primary: #0f172a;\n  --text-secondary: #475569;\n  --text-muted: #94a3b8;\n  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.05);\n  --shadow-md: 0 10px 24px rgba(15, 23, 42, 0.08);\n  font-family:\n    "DM Sans",\n    "Segoe UI",\n    sans-serif;\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 28px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #111827,\n      #1e293b);\n  color: white;\n  margin-bottom: 24px;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18);\n}\n.hero__content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.hero__eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 14px 0 10px;\n  font-size: 38px;\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 640px;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 15px;\n  line-height: 1.7;\n}\n.hero__stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  margin-top: 24px;\n  flex-wrap: wrap;\n}\n.stat-card[_ngcontent-%COMP%] {\n  min-width: 140px;\n  padding: 14px 18px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 22px;\n  font-weight: 800;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 58px;\n  height: 58px;\n  border-radius: 16px !important;\n  color: white !important;\n  transition: transform 0.3s ease, background 0.2s ease;\n}\n.refresh-btn[_ngcontent-%COMP%]:hover {\n  transform: rotate(180deg);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tab[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--border);\n  background: white;\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: var(--primary);\n}\n.tab.on[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  border-color: rgba(79, 70, 229, 0.3);\n  color: var(--primary);\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search[_ngcontent-%COMP%] {\n  width: 240px;\n}\n.sort[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.apply-btn[_ngcontent-%COMP%] {\n  height: 56px !important;\n  padding: 0 22px !important;\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 70px 24px;\n  text-align: center;\n  border-radius: 24px;\n  background: white;\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n.empty__icon[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 74px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.16),\n      rgba(59, 130, 246, 0.12));\n  color: #16a34a;\n  font-size: 30px;\n  margin-bottom: 18px;\n}\n.empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid var(--border);\n  cursor: pointer;\n  box-shadow: var(--shadow-sm);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: rgba(79, 70, 229, 0.2);\n  box-shadow: var(--shadow-md);\n}\n.card__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.pending-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  height: 28px;\n  padding: 0 12px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 800;\n}\n.pill.blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.pill.orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.pill.green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.meta-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 700;\n}\n.dot[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.acts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 22px;\n}\n.preview-btn[_ngcontent-%COMP%], \n.review-btn[_ngcontent-%COMP%] {\n  height: 42px !important;\n  padding: 0 18px !important;\n  border-radius: 12px !important;\n  font-weight: 700 !important;\n}\n  .search .mat-mdc-form-field-subscript-wrapper, \n  .sort .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n  .search .mdc-notched-outline__notch, \n  .sort .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n@media (max-width: 900px) {\n  .hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .toolbar-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search[_ngcontent-%COMP%], \n   .sort[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 18px 14px 40px;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .name[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .acts[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .acts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=pending-approvals.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingApprovalsComponent, [{
    type: Component,
    args: [{ selector: "app-pending-approvals", standalone: true, imports: [
      MatButtonModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ConsentTypeLabelPipe,
      TimeAgoPipe
    ], template: `<div class="page">\r
\r
  <!-- HEADER -->\r
  <div class="hero">\r
    <div class="hero__content">\r
      <div class="hero__eyebrow">\r
        Pending Review Queue\r
      </div>\r
      <h1>\r
        Pending Approvals\r
      </h1>\r
      <p>\r
        Review, validate, and approve pending consent requests submitted by makers.\r
      </p>\r
\r
      <div class="hero__stats">\r
        <div class="stat-card">\r
          <span class="stat-card__value">\r
            {{ filtered().length }}\r
          </span>\r
\r
          <span class="stat-card__label">\r
            Pending Reviews\r
          </span>\r
        </div>\r
\r
        <div class="stat-card">\r
          <span class="stat-card__value">\r
            {{ typeFilter === 'ALL' ? 'All' : (typeFilter | consentTypeLabel) }}\r
          </span>\r
          <span class="stat-card__label">\r
            Active Filter\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
    <button\r
      mat-icon-button\r
      type="button"\r
      class="refresh-btn"\r
      (click)="reload()"\r
      title="Refresh"\r
    >\r
      \u{1F504}\r
    </button>\r
  </div>\r
\r
  <!-- FILTER BAR -->\r
  <div class="toolbar">\r
    <div class="tabs">\r
      <button\r
        type="button"\r
        class="tab"\r
        [class.on]="typeFilter === 'ALL'"\r
        (click)="typeFilter = 'ALL'; applyFilters()"\r
      >\r
        All\r
      </button>\r
    </div>\r
\r
    <div class="toolbar-right">\r
      <mat-form-field appearance="outline" class="search">\r
        <mat-label>\r
          Search\r
        </mat-label>\r
\r
        <input\r
          matInput\r
          [(ngModel)]="search"\r
          (keyup.enter)="applyFilters()"\r
          placeholder="Name or ID\u2026"\r
        />\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline" class="sort">\r
        <mat-label>\r
          Sort\r
        </mat-label>\r
        <mat-select\r
          [(ngModel)]="sort"\r
          (selectionChange)="applyFilters()"\r
        >\r
          <mat-option value="date">\r
            Date \u2193\r
          </mat-option>\r
          <mat-option value="name">\r
            Name\r
          </mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
      <button\r
        mat-flat-button\r
        color="primary"\r
        type="button"\r
        class="apply-btn"\r
        (click)="applyFilters()"\r
      >\r
        Apply\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- EMPTY STATE -->\r
  @if (!filtered().length) {\r
    <div class="empty">\r
      <div class="empty__icon">\r
        \u2713\r
      </div>\r
      <h2>\r
        All caught up!\r
      </h2>\r
      <p>\r
        No consents are waiting for your review.\r
      </p>\r
    </div>\r
  } @else {\r
\r
    <!-- CARDS -->\r
    <div class="cards">\r
      @for (c of filtered(); track c.id) {\r
        <div\r
          class="card"\r
          (click)="review(c)"\r
        >\r
          <!-- TOP -->\r
          <div class="card__top">\r
            <div class="left">\r
\r
              <span [class]="typeClass(c.type)">\r
                {{ c.type | consentTypeLabel }}\r
              </span>\r
\r
              <h3 class="name">\r
                {{ c.consentName }}\r
              </h3>\r
\r
            </div>\r
            <div class="pending-icon">\r
              \u23F3\r
            </div>\r
          </div>\r
\r
          <!-- META -->\r
          <div class="meta-row">\r
\r
            <span>\r
              <strong>ID:</strong>\r
              {{ c.consentId }}\r
            </span>\r
\r
            <span class="dot">\u2022</span>\r
            <span>\r
              <strong>Submitted by:</strong>\r
              {{ c.createdBy?.fullName || '\u2014' }}\r
            </span>\r
\r
            <span class="dot">\u2022</span>\r
            <span>\r
              {{ c.submittedAt | timeAgo }}\r
            </span>\r
          </div>\r
          <div class="meta-row">\r
\r
            <span>\r
              <strong>Category:</strong>\r
              {{ c.category }}\r
            </span>\r
            <span class="dot">\u2022</span>\r
            <span>\r
              <strong>Channels:</strong>\r
              {{ channels(c) }}\r
            </span>\r
          </div>\r
          <div class="meta-row">\r
            <span>\r
              <strong>Version:</strong>\r
              {{ c.version }}\r
            </span>\r
            <span class="dot">\u2022</span>\r
            <span>\r
              <strong>Validity:</strong>\r
              {{ c.validityPeriodDays }} days\r
            </span>\r
          </div>\r
\r
          <!-- ACTIONS -->\r
          <div\r
            class="acts"\r
            (click)="$event.stopPropagation()"\r
          >\r
            <!-- <button\r
              mat-stroked-button\r
              type="button"\r
              class="preview-btn"\r
              (click)="preview(c)"\r
            >\r
              Preview\r
            </button> -->\r
            <button\r
              mat-flat-button\r
              color="primary"\r
              type="button"\r
              class="review-btn"\r
              (click)="review(c)"\r
            >\r
              Review \u2192\r
            </button>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  }\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/features/checker/pending-approvals/pending-approvals.component.scss */\n:host {\n  --primary: #4f46e5;\n  --primary-light: #eef2ff;\n  --surface: #ffffff;\n  --surface-alt: #f8fafc;\n  --border: #e2e8f0;\n  --text-primary: #0f172a;\n  --text-secondary: #475569;\n  --text-muted: #94a3b8;\n  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.05);\n  --shadow-md: 0 10px 24px rgba(15, 23, 42, 0.08);\n  font-family:\n    "DM Sans",\n    "Segoe UI",\n    sans-serif;\n  display: block;\n}\n.page {\n  width: 100%;\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n}\n.hero {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 28px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #111827,\n      #1e293b);\n  color: white;\n  margin-bottom: 24px;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18);\n}\n.hero__content {\n  flex: 1;\n  min-width: 0;\n}\n.hero__eyebrow {\n  display: inline-flex;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.hero h1 {\n  margin: 14px 0 10px;\n  font-size: 38px;\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n}\n.hero p {\n  margin: 0;\n  max-width: 640px;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 15px;\n  line-height: 1.7;\n}\n.hero__stats {\n  display: flex;\n  gap: 14px;\n  margin-top: 24px;\n  flex-wrap: wrap;\n}\n.stat-card {\n  min-width: 140px;\n  padding: 14px 18px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.stat-card__value {\n  display: block;\n  font-size: 22px;\n  font-weight: 800;\n}\n.stat-card__label {\n  display: block;\n  margin-top: 4px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.refresh-btn {\n  flex-shrink: 0;\n  width: 58px;\n  height: 58px;\n  border-radius: 16px !important;\n  color: white !important;\n  transition: transform 0.3s ease, background 0.2s ease;\n}\n.refresh-btn:hover {\n  transform: rotate(180deg);\n}\n.toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n}\n.tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tab {\n  height: 38px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--border);\n  background: white;\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.tab:hover {\n  background: var(--primary-light);\n  border-color: rgba(79, 70, 229, 0.25);\n  color: var(--primary);\n}\n.tab.on {\n  background: var(--primary-light);\n  border-color: rgba(79, 70, 229, 0.3);\n  color: var(--primary);\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search {\n  width: 240px;\n}\n.sort {\n  width: 150px;\n}\n.apply-btn {\n  height: 56px !important;\n  padding: 0 22px !important;\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 70px 24px;\n  text-align: center;\n  border-radius: 24px;\n  background: white;\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n.empty__icon {\n  width: 74px;\n  height: 74px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.16),\n      rgba(59, 130, 246, 0.12));\n  color: #16a34a;\n  font-size: 30px;\n  margin-bottom: 18px;\n}\n.empty h2 {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.empty p {\n  margin-top: 10px;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.cards {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.card {\n  padding: 22px;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid var(--border);\n  cursor: pointer;\n  box-shadow: var(--shadow-sm);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.card:hover {\n  transform: translateY(-3px);\n  border-color: rgba(79, 70, 229, 0.2);\n  box-shadow: var(--shadow-md);\n}\n.card__top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.name {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.pending-icon {\n  font-size: 20px;\n}\n.pill {\n  display: inline-flex;\n  align-items: center;\n  height: 28px;\n  padding: 0 12px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 800;\n}\n.pill.blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.pill.orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.pill.green {\n  background: #dcfce7;\n  color: #15803d;\n}\n.meta-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.meta-row strong {\n  color: var(--text-primary);\n  font-weight: 700;\n}\n.dot {\n  color: #cbd5e1;\n}\n.acts {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 22px;\n}\n.preview-btn,\n.review-btn {\n  height: 42px !important;\n  padding: 0 18px !important;\n  border-radius: 12px !important;\n  font-weight: 700 !important;\n}\n::ng-deep .search .mat-mdc-form-field-subscript-wrapper,\n::ng-deep .sort .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n::ng-deep .search .mdc-notched-outline__notch,\n::ng-deep .sort .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n@media (max-width: 900px) {\n  .hero {\n    flex-direction: column;\n  }\n  .toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .toolbar-right {\n    width: 100%;\n  }\n  .search,\n  .sort {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .page {\n    padding: 18px 14px 40px;\n  }\n  .hero {\n    padding: 22px;\n  }\n  .hero h1 {\n    font-size: 30px;\n  }\n  .card {\n    padding: 18px;\n  }\n  .name {\n    font-size: 18px;\n  }\n  .acts {\n    flex-direction: column;\n  }\n  .acts button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=pending-approvals.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingApprovalsComponent, { className: "PendingApprovalsComponent", filePath: "src/app/features/checker/pending-approvals/pending-approvals.component.ts", lineNumber: 36 });
})();
export {
  PendingApprovalsComponent
};
//# sourceMappingURL=chunk-LP2U2MKP.js.map
