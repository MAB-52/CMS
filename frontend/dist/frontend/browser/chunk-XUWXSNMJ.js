import {
  ConsentTypeLabelPipe
} from "./chunk-EH3SUVWG.js";
import {
  ConsentPreviewDialogComponent,
  MergeTagService
} from "./chunk-YWOCPWDM.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-64LAGNVY.js";
import {
  MatOption
} from "./chunk-YPOMW3J5.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-4SZDVV34.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3TIZOPIA.js";
import "./chunk-W5JVEPNS.js";
import {
  TimeAgoPipe
} from "./chunk-4AVASXE7.js";
import {
  MatDialog
} from "./chunk-UE7UOPB6.js";
import {
  ConsentService
} from "./chunk-5L2IXPPD.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-SPCMNNUE.js";
import {
  Router
} from "./chunk-W4T3EBZ5.js";
import "./chunk-4RAWTRTP.js";
import {
  Component,
  MatButton,
  MatButtonModule,
  MatIconButton,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// src/app/features/checker/pending-approvals/pending-approvals.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PendingApprovalsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 15);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "All caught up!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No consents are waiting for your review.");
    \u0275\u0275elementEnd()();
  }
}
function PendingApprovalsComponent_Conditional_31_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Conditional_31_For_2_Template_div_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.review(c_r2));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "consentTypeLabel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8, "\u23F3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 21);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "timeAgo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 22);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Conditional_31_For_2_Template_div_click_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Conditional_31_For_2_Template_button_click_17_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.preview(c_r2));
    });
    \u0275\u0275text(18, "Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 23);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Conditional_31_For_2_Template_button_click_19_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.review(c_r2));
    });
    \u0275\u0275text(20, "Review \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.typeClass(c_r2.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, c_r2.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.consentName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("", c_r2.consentId, " \xB7 Submitted by ", (c_r2.createdBy == null ? null : c_r2.createdBy.fullName) || "\u2014", " \xB7 ", \u0275\u0275pipeBind1(11, 13, c_r2.submittedAt), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Category: ", c_r2.category, " \xB7 Channels: ", ctx_r2.channels(c_r2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Version: ", c_r2.version, " \xB7 Validity: ", c_r2.validityPeriodDays, " days");
  }
}
function PendingApprovalsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, PendingApprovalsComponent_Conditional_31_For_2_Template, 21, 15, "div", 16, _forTrack0);
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
    return (c.deliveryChannels || []).join(", ");
  }
  static {
    this.\u0275fac = function PendingApprovalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PendingApprovalsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingApprovalsComponent, selectors: [["app-pending-approvals"]], decls: 32, vars: 11, consts: [[1, "page"], [1, "head"], ["mat-icon-button", "", "type", "button", "title", "Refresh", 3, "click"], [1, "bar"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], ["appearance", "outline", 1, "search"], ["matInput", "", "placeholder", "Name or ID\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], ["appearance", "outline", 1, "sort"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", "date"], ["value", "name"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "empty"], [1, "cards"], [1, "big"], [1, "card"], [1, "card", 3, "click"], [1, "row1"], [1, "name"], [1, "ico"], [1, "meta"], [1, "acts", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function PendingApprovalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Pending Approvals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_4_listener() {
          return ctx.reload();
        });
        \u0275\u0275text(5, "\u{1F504}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_8_listener() {
          ctx.typeFilter = "ALL";
          return ctx.applyFilters();
        });
        \u0275\u0275text(9, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_10_listener() {
          ctx.typeFilter = "NEW_TEMPLATE";
          return ctx.applyFilters();
        });
        \u0275\u0275text(11, " New Template ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 5);
        \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_12_listener() {
          ctx.typeFilter = "VERSION_UPDATE";
          return ctx.applyFilters();
        });
        \u0275\u0275text(13, " Version Update ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 5);
        \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_14_listener() {
          ctx.typeFilter = "RENEWAL";
          return ctx.applyFilters();
        });
        \u0275\u0275text(15, "Renewal");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "mat-form-field", 6)(17, "mat-label");
        \u0275\u0275text(18, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function PendingApprovalsComponent_Template_input_keyup_enter_19_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "mat-form-field", 8)(21, "mat-label");
        \u0275\u0275text(22, "Sort");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function PendingApprovalsComponent_Template_mat_select_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sort, $event) || (ctx.sort = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function PendingApprovalsComponent_Template_mat_select_selectionChange_23_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(24, "mat-option", 10);
        \u0275\u0275text(25, "Date \u2193");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 11);
        \u0275\u0275text(27, "Name");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "button", 12);
        \u0275\u0275listener("click", function PendingApprovalsComponent_Template_button_click_28_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275text(29, "Apply");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, PendingApprovalsComponent_Conditional_30_Template, 7, 0, "div", 13)(31, PendingApprovalsComponent_Conditional_31_Template, 3, 0, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275classProp("on", ctx.typeFilter === "ALL");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.typeFilter === "NEW_TEMPLATE");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.typeFilter === "VERSION_UPDATE");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.typeFilter === "RENEWAL");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.sort);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(!ctx.filtered().length ? 30 : 31);
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
    ], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n}\n.bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  margin: 16px 0 20px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tab[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  padding: 6px 12px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.tab.on[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #6366f1;\n  font-weight: 600;\n}\n.search[_ngcontent-%COMP%] {\n  width: 220px;\n}\n.sort[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 16px;\n}\n.empty[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n.empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 12px 0 8px;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 18px;\n  cursor: pointer;\n  transition: box-shadow 0.15s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.row1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 999px;\n}\n.pill.blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.pill.orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.pill.green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 700;\n  font-size: 16px;\n}\n.ico[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 6px;\n}\n.acts[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n/*# sourceMappingURL=pending-approvals.component.css.map */"] });
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
  <div class="head">\r
    <h1>Pending Approvals</h1>\r
    <button mat-icon-button type="button" (click)="reload()" title="Refresh">\u{1F504}</button>\r
  </div>\r
\r
  <div class="bar">\r
    <div class="tabs">\r
      <button type="button" class="tab" [class.on]="typeFilter === 'ALL'" (click)="typeFilter = 'ALL'; applyFilters()">All</button>\r
      <button type="button" class="tab" [class.on]="typeFilter === 'NEW_TEMPLATE'" (click)="typeFilter = 'NEW_TEMPLATE'; applyFilters()">\r
        New Template\r
      </button>\r
      <button type="button" class="tab" [class.on]="typeFilter === 'VERSION_UPDATE'" (click)="typeFilter = 'VERSION_UPDATE'; applyFilters()">\r
        Version Update\r
      </button>\r
      <button type="button" class="tab" [class.on]="typeFilter === 'RENEWAL'" (click)="typeFilter = 'RENEWAL'; applyFilters()">Renewal</button>\r
    </div>\r
    <mat-form-field appearance="outline" class="search">\r
      <mat-label>Search</mat-label>\r
      <input matInput [(ngModel)]="search" (keyup.enter)="applyFilters()" placeholder="Name or ID\u2026" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="sort">\r
      <mat-label>Sort</mat-label>\r
      <mat-select [(ngModel)]="sort" (selectionChange)="applyFilters()">\r
        <mat-option value="date">Date \u2193</mat-option>\r
        <mat-option value="name">Name</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
    <button mat-stroked-button type="button" (click)="applyFilters()">Apply</button>\r
  </div>\r
\r
  @if (!filtered().length) {\r
    <div class="empty">\r
      <div class="big">\u2705</div>\r
      <h2>All caught up!</h2>\r
      <p>No consents are waiting for your review.</p>\r
    </div>\r
  } @else {\r
    <div class="cards">\r
      @for (c of filtered(); track c.id) {\r
        <div class="card" (click)="review(c)">\r
          <div class="row1">\r
            <span [class]="typeClass(c.type)">{{ c.type | consentTypeLabel }}</span>\r
            <span class="name">{{ c.consentName }}</span>\r
            <span class="ico">\u23F3</span>\r
          </div>\r
          <div class="meta">{{ c.consentId }} \xB7 Submitted by {{ c.createdBy?.fullName || '\u2014' }} \xB7 {{ c.submittedAt | timeAgo }}</div>\r
          <div class="meta">Category: {{ c.category }} \xB7 Channels: {{ channels(c) }}</div>\r
          <div class="meta">Version: {{ c.version }} \xB7 Validity: {{ c.validityPeriodDays }} days</div>\r
          <div class="acts" (click)="$event.stopPropagation()">\r
            <button mat-stroked-button type="button" (click)="preview(c)">Preview</button>\r
            <button mat-flat-button color="primary" type="button" (click)="review(c)">Review \u2192</button>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/checker/pending-approvals/pending-approvals.component.scss */\n.page {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nh1 {\n  font-size: 22px;\n  font-weight: 800;\n}\n.bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  margin: 16px 0 20px;\n}\n.tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tab {\n  border-radius: 999px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  padding: 6px 12px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.tab.on {\n  background: #eef2ff;\n  border-color: #6366f1;\n  font-weight: 600;\n}\n.search {\n  width: 220px;\n}\n.sort {\n  width: 130px;\n}\n.empty {\n  text-align: center;\n  padding: 48px 24px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 16px;\n}\n.empty .big {\n  font-size: 64px;\n}\n.empty h2 {\n  margin: 12px 0 8px;\n}\n.empty p {\n  color: #64748b;\n  margin: 0;\n}\n.cards {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 18px;\n  cursor: pointer;\n  transition: box-shadow 0.15s;\n}\n.card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.row1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.pill {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 999px;\n}\n.pill.blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.pill.orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.pill.green {\n  background: #dcfce7;\n  color: #15803d;\n}\n.name {\n  flex: 1;\n  font-weight: 700;\n  font-size: 16px;\n}\n.ico {\n  font-size: 18px;\n}\n.meta {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 6px;\n}\n.acts {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n/*# sourceMappingURL=pending-approvals.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingApprovalsComponent, { className: "PendingApprovalsComponent", filePath: "src/app/features/checker/pending-approvals/pending-approvals.component.ts", lineNumber: 35 });
})();
export {
  PendingApprovalsComponent
};
//# sourceMappingURL=chunk-XUWXSNMJ.js.map
