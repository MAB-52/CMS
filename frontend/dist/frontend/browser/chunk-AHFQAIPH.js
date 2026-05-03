import {
  ConsentTypeLabelPipe
} from "./chunk-EH3SUVWG.js";
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
import {
  StatusBadgeComponent
} from "./chunk-QO3SBNKX.js";
import "./chunk-W5JVEPNS.js";
import {
  TimeAgoPipe
} from "./chunk-4AVASXE7.js";
import {
  AuthService
} from "./chunk-7EWS7SGB.js";
import {
  ConsentService
} from "./chunk-5L2IXPPD.js";
import "./chunk-SPCMNNUE.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-W4T3EBZ5.js";
import {
  NotificationService
} from "./chunk-4RAWTRTP.js";
import {
  Component,
  MatAnchor,
  MatButton,
  MatButtonModule,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

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
function MyConsentsComponent_Conditional_26_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.revisionMessage);
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275text(1, "\u270F\uFE0F Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(c_r4));
    });
    \u0275\u0275text(3, "\u{1F5D1}\uFE0F Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_19_Template_button_click_4_listener() {
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
function MyConsentsComponent_Conditional_26_For_2_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "\u{1F441} View");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, c_r4.id))("queryParams", \u0275\u0275pureFunction0(4, _c1));
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1, "\u270F\uFE0F Edit & Resubmit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, c_r4.id));
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_22_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.publish(c_r4));
    });
    \u0275\u0275text(1, "\u{1F4E4} Publish");
    \u0275\u0275elementEnd();
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "\u{1F441} View");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, MyConsentsComponent_Conditional_26_For_2_Case_22_Conditional_2_Template, 2, 0, "button", 34);
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, c_r4.id))("queryParams", \u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isAdmin() ? 2 : -1);
  }
}
function MyConsentsComponent_Conditional_26_For_2_Case_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "\u{1F441} View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 12);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_23_Template_button_click_2_listener() {
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
function MyConsentsComponent_Conditional_26_For_2_Case_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "\u{1F441} View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 12);
    \u0275\u0275listener("click", function MyConsentsComponent_Conditional_26_For_2_Case_24_Template_button_click_2_listener() {
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
    \u0275\u0275elementStart(9, "span", 24);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "consentTypeLabel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "timeAgo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MyConsentsComponent_Conditional_26_For_2_Conditional_17_Template, 2, 1, "div", 27);
    \u0275\u0275elementStart(18, "div", 28);
    \u0275\u0275template(19, MyConsentsComponent_Conditional_26_For_2_Case_19_Template, 6, 3)(20, MyConsentsComponent_Conditional_26_For_2_Case_20_Template, 2, 5, "a", 29)(21, MyConsentsComponent_Conditional_26_For_2_Case_21_Template, 2, 3, "a", 30)(22, MyConsentsComponent_Conditional_26_For_2_Case_22_Template, 3, 6)(23, MyConsentsComponent_Conditional_26_For_2_Case_23_Template, 4, 5)(24, MyConsentsComponent_Conditional_26_For_2_Case_24_Template, 4, 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const c_r4 = ctx.$implicit;
    \u0275\u0275classProp("rev", c_r4.status === "REVISION_REQUESTED");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r4.consentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.consentId);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", c_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, c_r4.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", c_r4.category, " \xB7 Validity ", c_r4.validityPeriodDays, " days \xB7 v", c_r4.version, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Updated ", \u0275\u0275pipeBind1(16, 14, c_r4.updatedAt), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r4.status === "REVISION_REQUESTED" && c_r4.revisionMessage ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_19_0 = c_r4.status) === "DRAFT" ? 19 : tmp_19_0 === "PENDING_APPROVAL" ? 20 : tmp_19_0 === "REVISION_REQUESTED" ? 21 : tmp_19_0 === "APPROVED" ? 22 : tmp_19_0 === "PUBLISHED" ? 23 : tmp_19_0 === "REJECTED" ? 24 : -1);
  }
}
function MyConsentsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, MyConsentsComponent_Conditional_26_For_2_Template, 25, 16, "div", 17, _forTrack1);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyConsentsComponent, selectors: [["app-my-consents"]], decls: 27, vars: 3, consts: [[1, "page"], [1, "head"], ["mat-flat-button", "", "color", "primary", "routerLink", "/maker/consents/new"], [1, "filters"], [1, "tabs"], ["type", "button", 1, "tab", 3, "on"], ["appearance", "outline", 1, "search"], ["matInput", "", "placeholder", "Name or ID\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], ["appearance", "outline", 1, "sort"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", "updated"], ["value", "name"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "muted"], [1, "empty"], [1, "list"], ["type", "button", 1, "tab", 3, "click"], [1, "card", 3, "rev"], [1, "card"], [1, "row1"], [1, "name"], [1, "meta", "mono"], [1, "badges"], [3, "status"], [1, "type"], [1, "row2"], [1, "row3"], [1, "rev-note"], [1, "actions"], ["mat-stroked-button", "", 3, "routerLink", "queryParams"], ["mat-flat-button", "", "color", "accent", 3, "routerLink"], ["mat-stroked-button", "", 3, "routerLink"], ["mat-stroked-button", "", "type", "button", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary"]], template: function MyConsentsComponent_Template(rf, ctx) {
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
      ConsentTypeLabelPipe,
      TimeAgoPipe
    ], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tab[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.tab.on[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #6366f1;\n  color: #4338ca;\n  font-weight: 600;\n}\n.search[_ngcontent-%COMP%] {\n  width: 240px;\n}\n.sort[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #94a3b8;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px dashed #e2e8f0;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 18px 20px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.card.rev[_ngcontent-%COMP%] {\n  border-left: 4px solid #ea580c;\n}\n.row1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n}\n.badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: #e0e7ff;\n  color: #4338ca;\n  font-weight: 600;\n}\n.row2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 13px;\n  color: #64748b;\n}\n.row3[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.rev-note[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  background: #fff7ed;\n  border: 1px solid #fdba74;\n  font-size: 13px;\n  color: #9a3412;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n/*# sourceMappingURL=my-consents.component.css.map */'] });
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
        <button type="button" class="tab" [class.on]="filter() === t.key" (click)="setFilter(t.key)">{{ t.label }}</button>\r
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
        <div class="card" [class.rev]="c.status === 'REVISION_REQUESTED'">\r
          <div class="row1">\r
            <div>\r
              <div class="name">{{ c.consentName }}</div>\r
              <div class="meta mono">{{ c.consentId }}</div>\r
            </div>\r
            <div class="badges">\r
              <app-status-badge [status]="c.status" />\r
              <span class="type">{{ c.type | consentTypeLabel }}</span>\r
            </div>\r
          </div>\r
          <div class="row2">\r
            {{ c.category }} \xB7 Validity {{ c.validityPeriodDays }} days \xB7 v{{ c.version }}\r
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
</div>\r
`, styles: ['/* src/app/features/maker/my-consents/my-consents.component.scss */\n.page {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.head h1 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tab {\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.tab.on {\n  background: #eef2ff;\n  border-color: #6366f1;\n  color: #4338ca;\n  font-weight: 600;\n}\n.search {\n  width: 240px;\n}\n.sort {\n  width: 140px;\n}\n.muted {\n  color: #94a3b8;\n}\n.empty {\n  text-align: center;\n  padding: 48px;\n  color: #94a3b8;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px dashed #e2e8f0;\n}\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 18px 20px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.card.rev {\n  border-left: 4px solid #ea580c;\n}\n.row1 {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.name {\n  font-weight: 700;\n  font-size: 16px;\n}\n.meta {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.mono {\n  font-family: "JetBrains Mono", monospace;\n}\n.badges {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.type {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: #e0e7ff;\n  color: #4338ca;\n  font-weight: 600;\n}\n.row2 {\n  margin-top: 8px;\n  font-size: 13px;\n  color: #64748b;\n}\n.row3 {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.rev-note {\n  margin-top: 10px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  background: #fff7ed;\n  border: 1px solid #fdba74;\n  font-size: 13px;\n  color: #9a3412;\n}\n.actions {\n  margin-top: 14px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n/*# sourceMappingURL=my-consents.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyConsentsComponent, { className: "MyConsentsComponent", filePath: "src/app/features/maker/my-consents/my-consents.component.ts", lineNumber: 33 });
})();
export {
  MyConsentsComponent
};
//# sourceMappingURL=chunk-AHFQAIPH.js.map
