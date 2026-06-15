import {
  ConsentTypeLabelPipe
} from "./chunk-SCFZFJFM.js";
import {
  AuthService
} from "./chunk-KO2HYL5G.js";
import {
  StatusBadgeComponent
} from "./chunk-ASM6YEB2.js";
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
import {
  TimeAgoPipe
} from "./chunk-K3ZYD44P.js";
import "./chunk-EJZSSRS2.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import {
  ActivatedRoute,
  Router,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/maker/my-consents/my-consents.component.ts
var _c0 = (a0) => ["/maker/consents", a0, "edit"];
var _c1 = () => ({ view: 1 });
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function MyConsentsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function MyConsentsComponent_For_9_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(t_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r2.filter() === t_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.label);
  }
}
function MyConsentsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function MyConsentsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "No consents match this filter.");
    \u0275\u0275elementEnd();
  }
}
function MyConsentsComponent_Conditional_26_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.revisionMessage);
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1, "\u270F\uFE0F Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(c_r4));
    });
    \u0275\u0275text(3, "\u{1F5D1}\uFE0F Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 32);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submit(c_r4));
    });
    \u0275\u0275text(5, "\u{1F4E4} Submit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, c_r4.id));
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1, "\u{1F441} View");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, c_r4.id))("queryParams", \u0275\u0275pureFunction0(4, _c1));
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "\u270F\uFE0F Edit & Resubmit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, c_r4.id));
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_19_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.publish(c_r4));
    });
    \u0275\u0275text(1, "\u{1F4E4} Publish");
    \u0275\u0275elementEnd();
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1, "\u{1F441} View");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, MyConsentsComponent_Conditional_26_For_2_Case_19_Conditional_2_Template, 2, 0, "button", 33);
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, c_r4.id))("queryParams", \u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isAdmin() ? 2 : -1);
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1, "\u{1F441} View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 12);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_20_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.duplicateNav(c_r4));
    });
    \u0275\u0275text(3, "\u{1F4CB} Duplicate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, c_r4.id))("queryParams", \u0275\u0275pureFunction0(4, _c1));
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1, "\u{1F441} View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 12);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_21_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.duplicateNav(c_r4));
    });
    \u0275\u0275text(3, "\u{1F4CB} Duplicate as New");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, c_r4.id))("queryParams", \u0275\u0275pureFunction0(4, _c1));
  }
}
function MyConsentsComponent_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div")(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22);
    \u0275\u0275element(8, "app-status-badge", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 25);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "timeAgo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MyConsentsComponent_Conditional_26_For_2_Conditional_14_Template, 2, 1, "div", 26);
    \u0275\u0275elementStart(15, "div", 27);
    \u0275\u0275template(16, MyConsentsComponent_Conditional_26_For_2_Case_16_Template, 6, 3)(17, MyConsentsComponent_Conditional_26_For_2_Case_17_Template, 2, 5, "a", 28)(18, MyConsentsComponent_Conditional_26_For_2_Case_18_Template, 2, 3, "a", 29)(19, MyConsentsComponent_Conditional_26_For_2_Case_19_Template, 3, 6)(20, MyConsentsComponent_Conditional_26_For_2_Case_20_Template, 4, 5)(21, MyConsentsComponent_Conditional_26_For_2_Case_21_Template, 4, 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_23_0;
    const c_r4 = ctx.$implicit;
    \u0275\u0275classProp("rev", c_r4.status === "REVISION_REQUESTED")("approved", c_r4.status === "APPROVED")("rejected", c_r4.status === "REJECTED")("draft", c_r4.status === "DRAFT")("pending", c_r4.status === "PENDING_APPROVAL")("published", c_r4.status === "PUBLISHED");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r4.consentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.consentId);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", c_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", c_r4.category, " \xB7 Validity ", c_r4.validityPeriodDays, " days ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Updated ", \u0275\u0275pipeBind1(13, 20, c_r4.updatedAt), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r4.status === "REVISION_REQUESTED" && c_r4.revisionMessage ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_23_0 = c_r4.status) === "DRAFT" ? 16 : tmp_23_0 === "PENDING_APPROVAL" ? 17 : tmp_23_0 === "REVISION_REQUESTED" ? 18 : tmp_23_0 === "APPROVED" ? 19 : tmp_23_0 === "PUBLISHED" ? 20 : tmp_23_0 === "REJECTED" ? 21 : -1);
  }
}
function MyConsentsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, MyConsentsComponent_Conditional_26_For_2_Template, 22, 22, "div", 17, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.rows());
  }
}
var MyConsentsComponent = class _MyConsentsComponent {
  constructor() {
    this.api = inject(ConsentService);
    this.auth = inject(AuthService);
    this.notify = inject(NotificationService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.rows = signal([]);
    this.loading = signal(true);
    this.filter = signal("ALL");
    this.search = "";
    this.sort = "updated";
    this.tabs = [
      { key: "ALL", label: "All" },
      { key: "DRAFT", label: "Draft" },
      { key: "PENDING_APPROVAL", label: "Pending" },
      { key: "APPROVED", label: "Approved" },
      { key: "PUBLISHED", label: "Published" },
      { key: "REVISION_REQUESTED", label: "Revision" }
    ];
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((q) => {
      const s = q.get("status");
      if (s && this.tabs.some((t) => t.key === s)) {
        this.filter.set(s);
      }
    });
    this.reload();
  }
  setFilter(k) {
    this.filter.set(k);
    void this.router.navigate([], { relativeTo: this.route, queryParams: k === "ALL" ? {} : { status: k } });
    this.reload();
  }
  reload() {
    this.loading.set(true);
    const st = this.filter();
    this.api.getMyConsents(0, 50, st === "ALL" ? void 0 : st).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data?.content) {
          let list = res.data.content;
          const q = this.search.trim().toLowerCase();
          if (q) {
            list = list.filter((c) => c.consentName.toLowerCase().includes(q) || c.consentId.toLowerCase().includes(q));
          }
          if (this.sort === "name") {
            list = [...list].sort((a, b) => a.consentName.localeCompare(b.consentName));
          } else {
            list = [...list].sort((a, b) => a.updatedAt < b.updatedAt ? 1 : -1);
          }
          this.rows.set(list);
        }
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  isAdmin() {
    return this.auth.getRole() === "ADMIN";
  }
  delete(c) {
    if (!confirm(`Delete ${c.consentName}?`)) {
      return;
    }
    this.api.deleteConsent(c.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Deleted", res.message || "Consent removed.");
          this.reload();
        }
      }
    });
  }
  publish(c) {
    this.api.publishConsent(c.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Published", res.message || "Live.");
          this.reload();
        }
      }
    });
  }
  duplicateNav(c) {
    void this.router.navigate(["/maker/consents/new"], { state: { from: c } });
  }
  submit(c) {
    this.api.submitForApproval(c.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success("Submitted", res.message || "Sent for approval.");
          this.reload();
        }
      }
    });
  }
  static {
    this.\u0275fac = function MyConsentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyConsentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyConsentsComponent, selectors: [["app-my-consents"]], decls: 27, vars: 3, consts: [[1, "page"], [1, "head"], ["mat-flat-button", "", "color", "primary", "routerLink", "/maker/consents/new"], [1, "filters"], [1, "tabs"], ["type", "button", 1, "tab", 3, "on"], ["appearance", "outline", 1, "search"], ["matInput", "", "placeholder", "Name or ID\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], ["appearance", "outline", 1, "sort"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", "updated"], ["value", "name"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "muted"], [1, "empty"], [1, "list"], ["type", "button", 1, "tab", 3, "click"], [1, "card", 3, "rev", "approved", "rejected", "draft", "pending", "published"], [1, "card"], [1, "row1"], [1, "name"], [1, "meta", "mono"], [1, "badges"], [3, "status"], [1, "row2"], [1, "row3"], [1, "rev-note"], [1, "actions"], ["mat-stroked-button", "", 3, "routerLink", "queryParams"], ["mat-flat-button", "", "color", "accent", 3, "routerLink"], ["mat-stroked-button", "", 3, "routerLink"], ["mat-stroked-button", "", "type", "button", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary"]], template: function MyConsentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My Consents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 2);
        \u0275\u0275text(5, "+ Create New");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4);
        \u0275\u0275repeaterCreate(8, MyConsentsComponent_For_9_Template, 2, 3, "button", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-label");
        \u0275\u0275text(12, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function MyConsentsComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function MyConsentsComponent_Template_input_keyup_enter_13_listener() {
          return ctx.reload();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "mat-form-field", 8)(15, "mat-label");
        \u0275\u0275text(16, "Sort");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function MyConsentsComponent_Template_mat_select_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sort, $event) || (ctx.sort = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function MyConsentsComponent_Template_mat_select_selectionChange_17_listener() {
          return ctx.reload();
        });
        \u0275\u0275elementStart(18, "mat-option", 10);
        \u0275\u0275text(19, "Date \u2193");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-option", 11);
        \u0275\u0275text(21, "Name A\u2013Z");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "button", 12);
        \u0275\u0275listener("click", function MyConsentsComponent_Template_button_click_22_listener() {
          return ctx.reload();
        });
        \u0275\u0275text(23, "Apply");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, MyConsentsComponent_Conditional_24_Template, 2, 0, "p", 13)(25, MyConsentsComponent_Conditional_25_Template, 2, 0, "div", 14)(26, MyConsentsComponent_Conditional_26_Template, 3, 0, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.sort);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.loading() ? 24 : !ctx.rows().length ? 25 : 26);
      }
    }, dependencies: [
      RouterLink,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatInputModule,
      MatInput,
      StatusBadgeComponent,
      TimeAgoPipe
    ], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 2rem;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(99, 102, 241, 0.1),\n      transparent 30%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(14, 165, 233, 0.08),\n      transparent 28%),\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef2ff 100%);\n  color: #0f172a;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.8rem;\n  flex-wrap: wrap;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 3vw, 2.5rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.head[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%] {\n  height: 48px;\n  padding-inline: 1.4rem;\n  border-radius: 14px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #2563eb) !important;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.24);\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.head[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 14px 32px rgba(37, 99, 235, 0.34);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding: 1.1rem 1.2rem;\n  margin-bottom: 1.8rem;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(16px);\n  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.06);\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 1rem;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.7);\n  color: #475569;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: rgb(255, 255, 255);\n  border-color: rgba(99, 102, 241, 0.22);\n}\n.tab.on[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #2563eb);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.22);\n}\n.search[_ngcontent-%COMP%], \n.sort[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n.filters[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%] {\n  height: 46px;\n  padding-inline: 1.2rem;\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(148, 163, 184, 0.2) !important;\n  transition: all 0.18s ease;\n}\n.filters[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: white;\n  border-color: rgba(99, 102, 241, 0.28) !important;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);\n}\n.muted[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 24px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(14px);\n  color: #64748b;\n  font-weight: 600;\n  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);\n}\n.list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 1.4rem;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.35rem;\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(255, 255, 255, 0.72);\n  backdrop-filter: blur(18px);\n  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: rgba(99, 102, 241, 0.18);\n  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.1);\n}\n.card.rev[_ngcontent-%COMP%] {\n  border-color: rgba(249, 115, 22, 0.22);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 247, 237, 0.92),\n      rgba(255, 255, 255, 0.78));\n}\n.card.rev[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(249, 115, 22, 0.14),\n      transparent 28%);\n  pointer-events: none;\n}\n.card.rev[_ngcontent-%COMP%] {\n  border-color: rgba(249, 115, 22, 0.22);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 247, 237, 0.92),\n      rgba(255, 255, 255, 0.78));\n}\n.card.rev[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(249, 115, 22, 0.14),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.approved[_ngcontent-%COMP%] {\n  border-color: rgba(22, 163, 74, 0.18);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(240, 253, 244, 0.95),\n      rgba(255, 255, 255, 0.8));\n}\n.card.approved[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(22, 163, 74, 0.311),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.rejected[_ngcontent-%COMP%] {\n  border-color: rgba(220, 38, 38, 0.18);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(254, 242, 242, 0.95),\n      rgba(255, 255, 255, 0.8));\n}\n.card.rejected[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(255, 0, 0, 0.169),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.draft[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.14);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(238, 242, 255, 0.9),\n      rgba(255, 255, 255, 0.8));\n}\n.card.draft[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 101, 241, 0.274),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.pending[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.18);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 235, 0.95),\n      rgba(255, 255, 255, 0.8));\n}\n.card.pending[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(245, 158, 11, 0.1),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.published[_ngcontent-%COMP%] {\n  border-color: rgba(164, 6, 212, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(236, 254, 255, 0.95),\n      rgba(255, 255, 255, 0.8));\n}\n.card.published[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(164, 6, 212, 0.365),\n      transparent 48%);\n  pointer-events: none;\n}\n.row1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.3;\n}\n.meta[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  color: #64748b;\n  font-size: 0.82rem;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n}\n.badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.type[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.7rem;\n  border-radius: 999px;\n  background: rgba(99, 102, 241, 0.1);\n  color: #4338ca;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.row2[_ngcontent-%COMP%], \n.row3[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.88rem;\n  line-height: 1.5;\n}\n.row3[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.rev-note[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(249, 115, 22, 0.1),\n      rgba(251, 146, 60, 0.08));\n  border: 1px solid rgba(249, 115, 22, 0.14);\n  color: #9a3412;\n  font-size: 0.88rem;\n  line-height: 1.5;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  flex-wrap: wrap;\n  margin-top: auto;\n  padding-top: 0.4rem;\n}\n.actions[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%], \n.actions[_ngcontent-%COMP%]   a[mat-stroked-button][_ngcontent-%COMP%] {\n  height: 42px;\n  padding-inline: 1rem;\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n  background: rgba(255, 255, 255, 0.78);\n  border: 1px solid rgba(148, 163, 184, 0.18) !important;\n  transition: all 0.18s ease;\n}\n.actions[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover, \n.actions[_ngcontent-%COMP%]   a[mat-stroked-button][_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: white;\n  border-color: rgba(99, 102, 241, 0.24) !important;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);\n}\n.actions[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%], \n.actions[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%] {\n  height: 42px;\n  padding-inline: 1rem;\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #2563eb) !important;\n  box-shadow: 0 8px 22px rgba(37, 99, 235, 0.24);\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.actions[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]:hover, \n.actions[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.34);\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  border-radius: 16px !important;\n  background: rgba(255, 255, 255, 0.92) !important;\n  transition: background 0.18s ease, box-shadow 0.18s ease;\n}\n.filters[_ngcontent-%COMP%]     .mdc-notched-outline__leading, \n.filters[_ngcontent-%COMP%]     .mdc-notched-outline__notch, \n.filters[_ngcontent-%COMP%]     .mdc-notched-outline__trailing {\n  border-color: rgba(148, 163, 184, 0.28) !important;\n  transition: border-color 0.18s ease;\n}\n.filters[_ngcontent-%COMP%]     .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-form-field:hover .mdc-notched-outline__leading, \n.filters[_ngcontent-%COMP%]     .mat-mdc-form-field:hover .mdc-notched-outline__notch, \n.filters[_ngcontent-%COMP%]     .mat-mdc-form-field:hover .mdc-notched-outline__trailing {\n  border-color: rgba(99, 102, 241, 0.35) !important;\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading, \n.filters[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch, \n.filters[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {\n  border-color: #6366f1 !important;\n  border-width: 2px !important;\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  background: #ffffff !important;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-floating-label {\n  color: #64748b !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mat-mdc-floating-label {\n  color: #6366f1 !important;\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-input-element {\n  color: #0f172a !important;\n  font-size: 14px !important;\n  font-weight: 500;\n  caret-color: #6366f1;\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-select-value {\n  color: #0f172a !important;\n  font-size: 14px;\n  font-weight: 500;\n}\n.filters[_ngcontent-%COMP%]     .mat-mdc-select-arrow {\n  color: #64748b;\n}\n  .mat-mdc-select-panel {\n  border-radius: 16px !important;\n  padding: 6px !important;\n  background: #ffffff !important;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12) !important;\n}\n  .mat-mdc-option {\n  border-radius: 10px !important;\n  font-size: 14px !important;\n  font-weight: 500;\n  min-height: 42px !important;\n  transition: background 0.14s ease;\n}\n  .mat-mdc-option:hover {\n  background: rgba(99, 102, 241, 0.08) !important;\n}\n  .mat-mdc-option.mdc-list-item--selected {\n  background: rgba(99, 102, 241, 0.1) !important;\n  color: #4338ca !important;\n  font-weight: 700 !important;\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .filters[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .search[_ngcontent-%COMP%], \n   .sort[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .row1[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=my-consents.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyConsentsComponent, [{
    type: Component,
    args: [{ selector: "app-my-consents", standalone: true, imports: [
      RouterLink,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      StatusBadgeComponent,
      ConsentTypeLabelPipe,
      TimeAgoPipe
    ], template: `<div class="page">\r
  <div class="head">\r
    <h1>My Consents</h1>\r
    <a mat-flat-button color="primary" routerLink="/maker/consents/new">+ Create New</a>\r
  </div>\r
\r
  <div class="filters">\r
    <div class="tabs">\r
      @for (t of tabs; track t.key) {\r
      <button type="button" class="tab" [class.on]="filter() === t.key" (click)="setFilter(t.key)">{{ t.label\r
        }}</button>\r
      }\r
    </div>\r
    <mat-form-field appearance="outline" class="search">\r
      <mat-label>Search</mat-label>\r
      <input matInput [(ngModel)]="search" (keyup.enter)="reload()" placeholder="Name or ID\u2026" />\r
    </mat-form-field>\r
    <mat-form-field appearance="outline" class="sort">\r
      <mat-label>Sort</mat-label>\r
      <mat-select [(ngModel)]="sort" (selectionChange)="reload()">\r
        <mat-option value="updated">Date \u2193</mat-option>\r
        <mat-option value="name">Name A\u2013Z</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
    <button mat-stroked-button type="button" (click)="reload()">Apply</button>\r
  </div>\r
\r
  @if (loading()) {\r
  <p class="muted">Loading\u2026</p>\r
  } @else if (!rows().length) {\r
  <div class="empty">No consents match this filter.</div>\r
  } @else {\r
  <div class="list">\r
    @for (c of rows(); track c.id) {\r
    <!-- <div class="card" [class.rev]="c.status === 'REVISION_REQUESTED'"> -->\r
    <div class="card" [class.rev]="c.status === 'REVISION_REQUESTED'" [class.approved]="c.status === 'APPROVED'"\r
      [class.rejected]="c.status === 'REJECTED'" [class.draft]="c.status === 'DRAFT'"\r
      [class.pending]="c.status === 'PENDING_APPROVAL'" [class.published]="c.status === 'PUBLISHED'">\r
      <div class="row1">\r
        <div>\r
          <div class="name">{{ c.consentName }}</div>\r
          <div class="meta mono">{{ c.consentId }}</div>\r
        </div>\r
        <div class="badges">\r
          <app-status-badge [status]="c.status" />\r
        </div>\r
      </div>\r
      <div class="row2">\r
        {{ c.category }} \xB7 Validity {{ c.validityPeriodDays }} days\r
      </div>\r
      <div class="row3">Updated {{ c.updatedAt | timeAgo }}</div>\r
      @if (c.status === 'REVISION_REQUESTED' && c.revisionMessage) {\r
      <div class="rev-note">{{ c.revisionMessage }}</div>\r
      }\r
      <div class="actions">\r
        @switch (c.status) {\r
        @case ('DRAFT') {\r
        <a mat-stroked-button [routerLink]="['/maker/consents', c.id, 'edit']">\u270F\uFE0F Edit</a>\r
        <button mat-stroked-button type="button" color="warn" (click)="delete(c)">\u{1F5D1}\uFE0F Delete</button>\r
        <button mat-flat-button color="primary" (click)="submit(c)">\u{1F4E4} Submit</button>\r
        }\r
        @case ('PENDING_APPROVAL') {\r
        <a mat-stroked-button [routerLink]="['/maker/consents', c.id, 'edit']" [queryParams]="{ view: 1 }">\u{1F441} View</a>\r
        }\r
        @case ('REVISION_REQUESTED') {\r
        <a mat-flat-button color="accent" [routerLink]="['/maker/consents', c.id, 'edit']">\u270F\uFE0F Edit &amp; Resubmit</a>\r
        }\r
        @case ('APPROVED') {\r
        <a mat-stroked-button [routerLink]="['/maker/consents', c.id, 'edit']" [queryParams]="{ view: 1 }">\u{1F441} View</a>\r
        @if (isAdmin()) {\r
        <button mat-flat-button color="primary" (click)="publish(c)">\u{1F4E4} Publish</button>\r
        }\r
        }\r
        @case ('PUBLISHED') {\r
        <a mat-stroked-button [routerLink]="['/maker/consents', c.id, 'edit']" [queryParams]="{ view: 1 }">\u{1F441} View</a>\r
        <button mat-stroked-button type="button" (click)="duplicateNav(c)">\u{1F4CB} Duplicate</button>\r
        }\r
        @case ('REJECTED') {\r
        <a mat-stroked-button [routerLink]="['/maker/consents', c.id, 'edit']" [queryParams]="{ view: 1 }">\u{1F441} View</a>\r
        <button mat-stroked-button type="button" (click)="duplicateNav(c)">\u{1F4CB} Duplicate as New</button>\r
        }\r
        }\r
      </div>\r
    </div>\r
    }\r
  </div>\r
  }\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/features/maker/my-consents/my-consents.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.page {\n  min-height: 100vh;\n  padding: 2rem;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(99, 102, 241, 0.1),\n      transparent 30%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(14, 165, 233, 0.08),\n      transparent 28%),\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef2ff 100%);\n  color: #0f172a;\n}\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.8rem;\n  flex-wrap: wrap;\n}\n.head h1 {\n  margin: 0;\n  font-size: clamp(2rem, 3vw, 2.5rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.head a[mat-flat-button] {\n  height: 48px;\n  padding-inline: 1.4rem;\n  border-radius: 14px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #2563eb) !important;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.24);\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.head a[mat-flat-button]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 14px 32px rgba(37, 99, 235, 0.34);\n}\n.filters {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding: 1.1rem 1.2rem;\n  margin-bottom: 1.8rem;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(16px);\n  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.06);\n}\n.tabs {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  flex-wrap: wrap;\n}\n.tab {\n  height: 42px;\n  padding: 0 1rem;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.7);\n  color: #475569;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.tab:hover {\n  transform: translateY(-1px);\n  background: rgb(255, 255, 255);\n  border-color: rgba(99, 102, 241, 0.22);\n}\n.tab.on {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #2563eb);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.22);\n}\n.search,\n.sort {\n  min-width: 220px;\n}\n.filters button[mat-stroked-button] {\n  height: 46px;\n  padding-inline: 1.2rem;\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(148, 163, 184, 0.2) !important;\n  transition: all 0.18s ease;\n}\n.filters button[mat-stroked-button]:hover {\n  transform: translateY(-1px);\n  background: white;\n  border-color: rgba(99, 102, 241, 0.28) !important;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);\n}\n.muted,\n.empty {\n  padding: 2rem;\n  border-radius: 24px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(14px);\n  color: #64748b;\n  font-weight: 600;\n  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);\n}\n.list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 1.4rem;\n}\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.35rem;\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(255, 255, 255, 0.72);\n  backdrop-filter: blur(18px);\n  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.card:hover {\n  transform: translateY(-3px);\n  border-color: rgba(99, 102, 241, 0.18);\n  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.1);\n}\n.card.rev {\n  border-color: rgba(249, 115, 22, 0.22);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 247, 237, 0.92),\n      rgba(255, 255, 255, 0.78));\n}\n.card.rev::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(249, 115, 22, 0.14),\n      transparent 28%);\n  pointer-events: none;\n}\n.card.rev {\n  border-color: rgba(249, 115, 22, 0.22);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 247, 237, 0.92),\n      rgba(255, 255, 255, 0.78));\n}\n.card.rev::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(249, 115, 22, 0.14),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.approved {\n  border-color: rgba(22, 163, 74, 0.18);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(240, 253, 244, 0.95),\n      rgba(255, 255, 255, 0.8));\n}\n.card.approved::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(22, 163, 74, 0.311),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.rejected {\n  border-color: rgba(220, 38, 38, 0.18);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(254, 242, 242, 0.95),\n      rgba(255, 255, 255, 0.8));\n}\n.card.rejected::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(255, 0, 0, 0.169),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.draft {\n  border-color: rgba(99, 102, 241, 0.14);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(238, 242, 255, 0.9),\n      rgba(255, 255, 255, 0.8));\n}\n.card.draft::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 101, 241, 0.274),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.pending {\n  border-color: rgba(245, 158, 11, 0.18);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 235, 0.95),\n      rgba(255, 255, 255, 0.8));\n}\n.card.pending::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(245, 158, 11, 0.1),\n      transparent 48%);\n  pointer-events: none;\n}\n.card.published {\n  border-color: rgba(164, 6, 212, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(236, 254, 255, 0.95),\n      rgba(255, 255, 255, 0.8));\n}\n.card.published::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(164, 6, 212, 0.365),\n      transparent 48%);\n  pointer-events: none;\n}\n.row1 {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.name {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.3;\n}\n.meta {\n  margin-top: 0.35rem;\n  color: #64748b;\n  font-size: 0.82rem;\n}\n.mono {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n}\n.badges {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.type {\n  padding: 0.38rem 0.7rem;\n  border-radius: 999px;\n  background: rgba(99, 102, 241, 0.1);\n  color: #4338ca;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.row2,\n.row3 {\n  color: #64748b;\n  font-size: 0.88rem;\n  line-height: 1.5;\n}\n.row3 {\n  font-weight: 600;\n}\n.rev-note {\n  padding: 0.9rem 1rem;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(249, 115, 22, 0.1),\n      rgba(251, 146, 60, 0.08));\n  border: 1px solid rgba(249, 115, 22, 0.14);\n  color: #9a3412;\n  font-size: 0.88rem;\n  line-height: 1.5;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  flex-wrap: wrap;\n  margin-top: auto;\n  padding-top: 0.4rem;\n}\n.actions button[mat-stroked-button],\n.actions a[mat-stroked-button] {\n  height: 42px;\n  padding-inline: 1rem;\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n  background: rgba(255, 255, 255, 0.78);\n  border: 1px solid rgba(148, 163, 184, 0.18) !important;\n  transition: all 0.18s ease;\n}\n.actions button[mat-stroked-button]:hover,\n.actions a[mat-stroked-button]:hover {\n  transform: translateY(-1px);\n  background: white;\n  border-color: rgba(99, 102, 241, 0.24) !important;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);\n}\n.actions button[mat-flat-button],\n.actions a[mat-flat-button] {\n  height: 42px;\n  padding-inline: 1rem;\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #2563eb) !important;\n  box-shadow: 0 8px 22px rgba(37, 99, 235, 0.24);\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.actions button[mat-flat-button]:hover,\n.actions a[mat-flat-button]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.34);\n}\n.filters ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.filters ::ng-deep .mat-mdc-text-field-wrapper {\n  border-radius: 16px !important;\n  background: rgba(255, 255, 255, 0.92) !important;\n  transition: background 0.18s ease, box-shadow 0.18s ease;\n}\n.filters ::ng-deep .mdc-notched-outline__leading,\n.filters ::ng-deep .mdc-notched-outline__notch,\n.filters ::ng-deep .mdc-notched-outline__trailing {\n  border-color: rgba(148, 163, 184, 0.28) !important;\n  transition: border-color 0.18s ease;\n}\n.filters ::ng-deep .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n.filters ::ng-deep .mat-mdc-form-field:hover .mdc-notched-outline__leading,\n.filters ::ng-deep .mat-mdc-form-field:hover .mdc-notched-outline__notch,\n.filters ::ng-deep .mat-mdc-form-field:hover .mdc-notched-outline__trailing {\n  border-color: rgba(99, 102, 241, 0.35) !important;\n}\n.filters ::ng-deep .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,\n.filters ::ng-deep .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,\n.filters ::ng-deep .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {\n  border-color: #6366f1 !important;\n  border-width: 2px !important;\n}\n.filters ::ng-deep .mat-mdc-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  background: #ffffff !important;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);\n}\n.filters ::ng-deep .mat-mdc-floating-label {\n  color: #64748b !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n}\n.filters ::ng-deep .mat-mdc-form-field.mat-focused .mat-mdc-floating-label {\n  color: #6366f1 !important;\n}\n.filters ::ng-deep .mat-mdc-input-element {\n  color: #0f172a !important;\n  font-size: 14px !important;\n  font-weight: 500;\n  caret-color: #6366f1;\n}\n.filters ::ng-deep .mat-mdc-select-value {\n  color: #0f172a !important;\n  font-size: 14px;\n  font-weight: 500;\n}\n.filters ::ng-deep .mat-mdc-select-arrow {\n  color: #64748b;\n}\n::ng-deep .mat-mdc-select-panel {\n  border-radius: 16px !important;\n  padding: 6px !important;\n  background: #ffffff !important;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12) !important;\n}\n::ng-deep .mat-mdc-option {\n  border-radius: 10px !important;\n  font-size: 14px !important;\n  font-weight: 500;\n  min-height: 42px !important;\n  transition: background 0.14s ease;\n}\n::ng-deep .mat-mdc-option:hover {\n  background: rgba(99, 102, 241, 0.08) !important;\n}\n::ng-deep .mat-mdc-option.mdc-list-item--selected {\n  background: rgba(99, 102, 241, 0.1) !important;\n  color: #4338ca !important;\n  font-weight: 700 !important;\n}\n@media (max-width: 768px) {\n  .page {\n    padding: 1rem;\n  }\n  .filters {\n    padding: 1rem;\n  }\n  .search,\n  .sort {\n    width: 100%;\n  }\n  .list {\n    grid-template-columns: 1fr;\n  }\n  .row1 {\n    flex-direction: column;\n  }\n  .actions {\n    width: 100%;\n  }\n  .actions button,\n  .actions a {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=my-consents.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyConsentsComponent, { className: "MyConsentsComponent", filePath: "src/app/features/maker/my-consents/my-consents.component.ts", lineNumber: 33 });
})();
export {
  MyConsentsComponent
};
//# sourceMappingURL=chunk-YMWFN5OV.js.map
