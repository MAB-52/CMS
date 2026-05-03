import {
  ConsentPreviewDialogComponent,
  MergeTagService
} from "./chunk-YWOCPWDM.js";
import {
  QuillEditorComponent,
  QuillModule
} from "./chunk-YT4GQN4Y.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-64LAGNVY.js";
import {
  MatOption
} from "./chunk-YPOMW3J5.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  SharedResizeObserver
} from "./chunk-4SZDVV34.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators
} from "./chunk-3TIZOPIA.js";
import {
  StatusBadgeComponent
} from "./chunk-QO3SBNKX.js";
import {
  AuditService
} from "./chunk-QVQJAN6Y.js";
import "./chunk-W5JVEPNS.js";
import {
  TimeAgoPipe
} from "./chunk-4AVASXE7.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-UE7UOPB6.js";
import {
  ConsentService
} from "./chunk-5L2IXPPD.js";
import "./chunk-OIBNGD5S.js";
import {
  CdkPortal,
  CdkPortalOutlet,
  CdkScrollable,
  TemplatePortal,
  ViewportRuler
} from "./chunk-SPCMNNUE.js";
import {
  ActivatedRoute,
  DomSanitizer,
  Router,
  RouterLink
} from "./chunk-W4T3EBZ5.js";
import {
  NotificationService
} from "./chunk-4RAWTRTP.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  CdkMonitorFocus,
  CdkObserveContent,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Dir,
  Directionality,
  Directive,
  EMPTY,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  HostAttributeToken,
  InjectionToken,
  Injector,
  Input,
  LoggerService,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatRipple,
  NgModule,
  NgZone,
  Observable,
  Output,
  Platform,
  QueryList,
  Renderer2,
  SPACE,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _bindEventWithOptions,
  afterNextRender,
  booleanAttribute,
  computed,
  debounceTime,
  filter,
  forwardRef,
  hasModifierKey,
  inject,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  skip,
  startWith,
  switchMap,
  takeUntil,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// src/app/core/utils/merge-tags.util.ts
function groupMergeTagsByCategory(tags) {
  const grouped = {};
  for (const t of tags) {
    const cat = t.tagCategory || "Other";
    if (!grouped[cat]) {
      grouped[cat] = [];
    }
    grouped[cat].push(t);
  }
  return grouped;
}

// src/app/features/maker/create-consent/consent-details-card/consent-details-card.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.value;
function ConsentDetailsCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-status-badge", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("status", ctx_r1.status);
  }
}
function ConsentDetailsCardComponent_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r3);
  }
}
function ConsentDetailsCardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "strong");
    \u0275\u0275text(2, "Please fix the following errors:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, ConsentDetailsCardComponent_Conditional_17_For_5_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.validationErrors());
  }
}
function ConsentDetailsCardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function ConsentDetailsCardComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("value", c_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r4.icon, " ", c_r4.label, "");
  }
}
function ConsentDetailsCardComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275property("value", p_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5.label);
  }
}
function ConsentDetailsCardComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-form-field", 24)(2, "mat-label");
    \u0275\u0275text(3, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 24)(6, "mat-label");
    \u0275\u0275text(7, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 26);
    \u0275\u0275elementEnd()();
  }
}
function ConsentDetailsCardComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275listener("click", function ConsentDetailsCardComponent_For_54_Template_button_click_2_listener() {
      const t_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeTag(t_r8));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r8, " ");
  }
}
var ConsentDetailsCardComponent = class _ConsentDetailsCardComponent {
  constructor() {
    this.status = null;
    this.consentIdPreview = "";
    this.idLoading = false;
    this.submitted = false;
    this.categories = [
      { value: "MARKETING", label: "Marketing", icon: "\u{1F3AF}" },
      { value: "TRANSACTIONAL", label: "Transactional", icon: "\u{1F4B3}" },
      { value: "SERVICE", label: "Service", icon: "\u{1F527}" }
    ];
    this.presets = [
      { value: "30", label: "30 Days" },
      { value: "60", label: "60 Days" },
      { value: "90", label: "90 Days" },
      { value: "180", label: "6 Months" },
      { value: "365", label: "1 Year" },
      { value: "730", label: "2 Years" },
      { value: "custom", label: "Custom Range" }
    ];
  }
  addTag(raw) {
    const v = raw.replace(/,/g, "").trim();
    if (!v) {
      return;
    }
    const cur = this.form.controls["tagsUsed"].value || [];
    if (cur.includes(v)) {
      return;
    }
    this.form.controls["tagsUsed"].setValue([...cur, v]);
  }
  removeTag(tag) {
    const cur = this.form.controls["tagsUsed"].value || [];
    this.form.controls["tagsUsed"].setValue(cur.filter((t) => t !== tag));
  }
  validationErrors() {
    const errs = [];
    const n = this.form.controls["consentName"];
    if (n.touched || this.submitted) {
      if (n.hasError("required")) {
        errs.push("Consent Name is required");
      }
      if (n.hasError("maxlength")) {
        errs.push("Consent Name must be at most 200 characters");
      }
    }
    const d = this.form.controls["description"];
    if (d.touched || this.submitted) {
      if (d.hasError("required")) {
        errs.push("Description is required");
      }
      if (d.hasError("maxlength")) {
        errs.push("Description must be at most 1000 characters");
      }
    }
    const c = this.form.controls["category"];
    if (c.touched || this.submitted) {
      if (c.hasError("required")) {
        errs.push("Category must be selected");
      }
    }
    const p = this.form.controls["validityPreset"];
    if (p.value === "custom") {
      const s = this.form.controls["validityStartDate"].value;
      const e = this.form.controls["validityEndDate"].value;
      if (this.submitted && (!s || !e)) {
        errs.push("Custom validity requires start and end dates");
      }
    }
    return errs;
  }
  static {
    this.\u0275fac = function ConsentDetailsCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentDetailsCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsentDetailsCardComponent, selectors: [["app-consent-details-card"]], inputs: { form: "form", status: "status", consentIdPreview: "consentIdPreview", idLoading: "idLoading", submitted: "submitted" }, decls: 55, vars: 9, consts: [["tagIn", ""], ["dir", "ltr", 1, "card"], [1, "head"], [1, "title"], [1, "sub"], [3, "status"], ["appearance", "outline", 1, "full", "mono", "id-field"], ["matPrefix", "", 1, "pfx"], ["matInput", "", "readonly", "", 3, "value"], [3, "formGroup"], [1, "val-summary"], ["appearance", "outline", 1, "full"], ["matInput", "", "formControlName", "consentName", "maxlength", "200", "placeholder", "e.g. Marketing Communications v2.0"], ["align", "end"], ["matInput", "", "rows", "4", "formControlName", "description", "maxlength", "1000", "placeholder", "Describe the purpose\u2026"], ["formControlName", "category"], [3, "value"], ["formControlName", "validityPreset"], [1, "row-dates"], [1, "tags-block"], [1, "lbl"], ["matInput", "", 3, "keydown.enter"], [1, "chips"], [1, "chip"], ["appearance", "outline", 1, "half"], ["matInput", "", "type", "date", "formControlName", "validityStartDate"], ["matInput", "", "type", "date", "formControlName", "validityEndDate"], ["type", "button", "aria-label", "Remove", 1, "chip-x", 3, "click"]], template: function ConsentDetailsCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
        \u0275\u0275text(4, "Consent Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Basic information about this consent");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ConsentDetailsCardComponent_Conditional_7_Template, 1, 1, "app-status-badge", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-form-field", 6)(9, "mat-label");
        \u0275\u0275text(10, "Consent ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275text(12, "\u{1F512}\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 8);
        \u0275\u0275elementStart(14, "mat-hint");
        \u0275\u0275text(15, "Auto-generated unique identifier");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275template(17, ConsentDetailsCardComponent_Conditional_17_Template, 6, 0, "div", 10);
        \u0275\u0275elementStart(18, "mat-form-field", 11)(19, "mat-label");
        \u0275\u0275text(20, "Consent Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 12);
        \u0275\u0275elementStart(22, "mat-hint", 13);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, ConsentDetailsCardComponent_Conditional_24_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-form-field", 11)(26, "mat-label");
        \u0275\u0275text(27, "Description *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "textarea", 14);
        \u0275\u0275elementStart(29, "mat-hint", 13);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "mat-form-field", 11)(32, "mat-label");
        \u0275\u0275text(33, "Category *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-select", 15);
        \u0275\u0275repeaterCreate(35, ConsentDetailsCardComponent_For_36_Template, 2, 3, "mat-option", 16, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "mat-form-field", 11)(38, "mat-label");
        \u0275\u0275text(39, "Validity Period *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-select", 17);
        \u0275\u0275repeaterCreate(41, ConsentDetailsCardComponent_For_42_Template, 2, 2, "mat-option", 16, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(43, ConsentDetailsCardComponent_Conditional_43_Template, 9, 0, "div", 18);
        \u0275\u0275elementStart(44, "div", 19)(45, "label", 20);
        \u0275\u0275text(46, "Tags (optional)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "mat-form-field", 11)(48, "mat-label");
        \u0275\u0275text(49, "Add tag \u2014 press Enter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "input", 21, 0);
        \u0275\u0275listener("keydown.enter", function ConsentDetailsCardComponent_Template_input_keydown_enter_50_listener($event) {
          \u0275\u0275restoreView(_r1);
          const tagIn_r6 = \u0275\u0275reference(51);
          $event.preventDefault();
          ctx.addTag(tagIn_r6.value);
          return \u0275\u0275resetView(tagIn_r6.value = "");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 22);
        \u0275\u0275repeaterCreate(53, ConsentDetailsCardComponent_For_54_Template, 4, 1, "span", 23, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.status ? 7 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.idLoading ? "Generating\u2026" : ctx.consentIdPreview);
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.validationErrors().length ? 17 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", (ctx.form.controls["consentName"].value == null ? null : ctx.form.controls["consentName"].value.length) || 0, " / 200");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.controls["consentName"].touched && ctx.form.controls["consentName"].hasError("required") ? 24 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", (ctx.form.controls["description"].value == null ? null : ctx.form.controls["description"].value.length) || 0, " / 1000");
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.presets);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["validityPreset"].value === "custom" ? 43 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.form.controls["tagsUsed"].value || \u0275\u0275pureFunction0(8, _c0));
      }
    }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatPrefix, Dir, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, StatusBadgeComponent], styles: ['\n\n.id-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  height: 100%;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.val-summary[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #991b1b;\n}\n.val-summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 0 18px;\n  padding: 0;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.mono[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n  font-size: 13px;\n}\n.pfx[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  opacity: 0.7;\n}\n.row-dates[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.half[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.tags-block[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #eef2ff;\n  color: #4338ca;\n  font-size: 12px;\n  font-weight: 500;\n}\n.chip-x[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #6366f1;\n  font-size: 14px;\n  line-height: 1;\n}\n/*# sourceMappingURL=consent-details-card.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentDetailsCardComponent, [{
    type: Component,
    args: [{ selector: "app-consent-details-card", standalone: true, imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      StatusBadgeComponent
    ], template: `<div class="card" dir="ltr">\r
  <div class="head">\r
    <div>\r
      <h2 class="title">Consent Details</h2>\r
      <p class="sub">Basic information about this consent</p>\r
    </div>\r
    @if (status) {\r
      <app-status-badge [status]="status" />\r
    }\r
  </div>\r
\r
  <mat-form-field appearance="outline" class="full mono id-field">\r
    <mat-label>Consent ID</mat-label>\r
    <span matPrefix class="pfx">\u{1F512}&nbsp;</span>\r
    <input matInput readonly [value]="idLoading ? 'Generating\u2026' : consentIdPreview" />\r
    <mat-hint>Auto-generated unique identifier</mat-hint>\r
  </mat-form-field>\r
\r
  <div [formGroup]="form">\r
    @if (validationErrors().length) {\r
      <div class="val-summary">\r
        <strong>Please fix the following errors:</strong>\r
        <ul>\r
          @for (e of validationErrors(); track e) {\r
            <li>{{ e }}</li>\r
          }\r
        </ul>\r
      </div>\r
    }\r
\r
    <mat-form-field appearance="outline" class="full">\r
      <mat-label>Consent Name *</mat-label>\r
      <input matInput formControlName="consentName" maxlength="200" placeholder="e.g. Marketing Communications v2.0" />\r
      <mat-hint align="end">{{ form.controls['consentName'].value?.length || 0 }} / 200</mat-hint>\r
      @if (form.controls['consentName'].touched && form.controls['consentName'].hasError('required')) {\r
        <mat-error>Required</mat-error>\r
      }\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline" class="full">\r
      <mat-label>Description *</mat-label>\r
      <textarea matInput rows="4" formControlName="description" maxlength="1000" placeholder="Describe the purpose\u2026"></textarea>\r
      <mat-hint align="end">{{ form.controls['description'].value?.length || 0 }} / 1000</mat-hint>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline" class="full">\r
      <mat-label>Category *</mat-label>\r
      <mat-select formControlName="category">\r
        @for (c of categories; track c.value) {\r
          <mat-option [value]="c.value">{{ c.icon }} {{ c.label }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline" class="full">\r
      <mat-label>Validity Period *</mat-label>\r
      <mat-select formControlName="validityPreset">\r
        @for (p of presets; track p.value) {\r
          <mat-option [value]="p.value">{{ p.label }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
\r
    @if (form.controls['validityPreset'].value === 'custom') {\r
      <div class="row-dates">\r
        <mat-form-field appearance="outline" class="half">\r
          <mat-label>Start Date</mat-label>\r
          <input matInput type="date" formControlName="validityStartDate" />\r
        </mat-form-field>\r
        <mat-form-field appearance="outline" class="half">\r
          <mat-label>End Date</mat-label>\r
          <input matInput type="date" formControlName="validityEndDate" />\r
        </mat-form-field>\r
      </div>\r
    }\r
\r
    <div class="tags-block">\r
      <label class="lbl">Tags (optional)</label>\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Add tag \u2014 press Enter</mat-label>\r
        <input\r
          matInput\r
          #tagIn\r
          (keydown.enter)="$event.preventDefault(); addTag(tagIn.value); tagIn.value = ''"\r
        />\r
      </mat-form-field>\r
      <div class="chips">\r
        @for (t of form.controls['tagsUsed'].value || []; track t) {\r
          <span class="chip">\r
            {{ t }}\r
            <button type="button" class="chip-x" (click)="removeTag(t)" aria-label="Remove">\xD7</button>\r
          </span>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/maker/create-consent/consent-details-card/consent-details-card.component.scss */\n.id-field {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  height: 100%;\n}\n.head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.sub {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.val-summary {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #991b1b;\n}\n.val-summary ul {\n  margin: 8px 0 0 18px;\n  padding: 0;\n}\n.full {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.mono input {\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n  font-size: 13px;\n}\n.pfx {\n  margin-right: 4px;\n  opacity: 0.7;\n}\n.row-dates {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.half {\n  flex: 1;\n  min-width: 140px;\n}\n.tags-block {\n  margin-top: 8px;\n}\n.lbl {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #eef2ff;\n  color: #4338ca;\n  font-size: 12px;\n  font-weight: 500;\n}\n.chip-x {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #6366f1;\n  font-size: 14px;\n  line-height: 1;\n}\n/*# sourceMappingURL=consent-details-card.component.css.map */\n'] }]
  }], null, { form: [{
    type: Input,
    args: [{ required: true }]
  }], status: [{
    type: Input
  }], consentIdPreview: [{
    type: Input
  }], idLoading: [{
    type: Input
  }], submitted: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsentDetailsCardComponent, { className: "ConsentDetailsCardComponent", filePath: "src/app/features/maker/create-consent/consent-details-card/consent-details-card.component.ts", lineNumber: 22 });
})();

// src/app/features/maker/create-consent/consent-message-card/consent-message-card.component.ts
var _c02 = ["editor"];
var _forTrack02 = ($index, $item) => $item.tagKey;
function ConsentMessageCardComponent_For_23_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713 ");
    \u0275\u0275elementEnd();
  }
}
function ConsentMessageCardComponent_For_23_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ConsentMessageCardComponent_For_23_For_5_Template_button_click_0_listener() {
      const tag_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.insertTag(tag_r3));
    });
    \u0275\u0275template(1, ConsentMessageCardComponent_For_23_For_5_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("tag-chip--used", ctx_r3.usedKeys.has(tag_r3.tagKey))("tag-chip--disabled", !ctx_r3.isQuillReady());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.usedKeys.has(tag_r3.tagKey) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3.tagLabel, " ");
  }
}
function ConsentMessageCardComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275repeaterCreate(4, ConsentMessageCardComponent_For_23_For_5_Template, 3, 6, "button", 15, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.categoryIcon(cat_r5), " ", cat_r5, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.grouped[cat_r5]);
  }
}
var ConsentMessageCardComponent = class _ConsentMessageCardComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.logger = inject(LoggerService);
    this.notify = inject(NotificationService);
    this.grouped = {};
    this.allTags = [];
    this.tagsUsedChange = new EventEmitter();
    this.quillModules = {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ list: "bullet" }, { list: "ordered" }],
        [{ indent: "-1" }, { indent: "+1" }],
        ["link"]
      ]
    };
    this.usedKeys = /* @__PURE__ */ new Set();
  }
  get categories() {
    return Object.keys(this.grouped || {});
  }
  categoryIcon(cat) {
    switch (cat) {
      case "Customer":
        return "\u{1F464}";
      case "Company":
        return "\u{1F3E2}";
      case "Date":
        return "\u{1F4C5}";
      case "Links":
        return "\u{1F517}";
      default:
        return "\u{1F4CE}";
    }
  }
  isQuillReady() {
    return !!(this.quill || this.quillComp?.quillEditor);
  }
  get usedKeysList() {
    return Array.from(this.usedKeys).join(", ");
  }
  charCount() {
    const html = this.form.controls["consentMessage"].value || "";
    const div = typeof document !== "undefined" ? document.createElement("div") : null;
    if (!div) {
      return html.length;
    }
    div.innerHTML = html;
    return (div.textContent || "").length;
  }
  onEditorCreated(q) {
    this.quill = q;
  }
  onContentChanged(event) {
    const html = event.html ?? "";
    this.usedKeys = this.detectUsedTags(html);
    this.tagsUsedChange.emit(Array.from(this.usedKeys));
  }
  detectUsedTags(html) {
    const found = /* @__PURE__ */ new Set();
    const re = /\{\{[A-Z_]+\}\}/g;
    let m;
    while ((m = re.exec(html)) !== null) {
      const key = m[0];
      if (this.allTags.some((t) => t.tagKey === key)) {
        found.add(key);
      }
    }
    return found;
  }
  insertTag(tag) {
    const q = this.quill || this.quillComp?.quillEditor;
    if (!q) {
      this.logger.warn("ConsentMessageCard", "Quill not initialized");
      this.notify.warning("Editor", "Editor is still loading, please wait.");
      return;
    }
    const range = q.getSelection(true);
    const index = range ? range.index : q.getLength();
    const length = range && range.length ? range.length : 0;
    if (length > 0) {
      q.deleteText(index, length, "user");
    }
    const insert = ` ${tag.tagKey} `;
    q.insertText(index, insert, "user");
    try {
      q.formatText(index, insert.trim().length, "color", "#6366f1");
    } catch {
    }
    const newIndex = index + insert.length;
    q.setSelection(newIndex, 0, "silent");
    setTimeout(() => q.focus(), 50);
    this.logger.debug("ConsentMessageCard", `Inserted merge tag ${tag.tagKey}`);
  }
  openPreview() {
    const html = this.form.controls["consentMessage"].value || "";
    const text = html.replace(/<[^>]+>/g, "").trim();
    if (!text) {
      this.notify.warning("Preview", "\u26A0\uFE0F Please write a consent message first before previewing.");
      return;
    }
    const data = {
      html,
      mergeTags: this.allTags
    };
    this.dialog.open(ConsentPreviewDialogComponent, {
      width: "760px",
      maxHeight: "90vh",
      data
    });
  }
  static {
    this.\u0275fac = function ConsentMessageCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentMessageCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsentMessageCardComponent, selectors: [["app-consent-message-card"]], viewQuery: function ConsentMessageCardComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.quillComp = _t.first);
      }
    }, inputs: { form: "form", grouped: "grouped", allTags: "allTags" }, outputs: { tagsUsedChange: "tagsUsedChange" }, decls: 24, vars: 4, consts: [["editor", ""], ["dir", "ltr", 1, "card", 3, "formGroup"], [1, "head"], [1, "title"], [1, "sub"], ["mat-stroked-button", "", "type", "button", 1, "ciq-btn-secondary", 3, "click"], [1, "editor-wrap"], ["formControlName", "consentMessage", "theme", "snow", "placeholder", "Write your consent message here. Use the tags below to insert dynamic customer fields\u2026", 3, "onEditorCreated", "onContentChanged", "modules"], [1, "stats-bar"], [1, "tags-section"], [1, "sec-label"], [1, "sec-hint"], [1, "cat-block"], [1, "cat-pill"], [1, "tag-row"], ["type", "button", 1, "tag-chip", 3, "tag-chip--used", "tag-chip--disabled"], ["type", "button", 1, "tag-chip", 3, "click"]], template: function ConsentMessageCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
        \u0275\u0275text(4, "Consent Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "WYSIWYG Rich Text Editor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function ConsentMessageCardComponent_Template_button_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openPreview());
        });
        \u0275\u0275text(8, "\u{1F441} Preview");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "quill-editor", 7, 0);
        \u0275\u0275listener("onEditorCreated", function ConsentMessageCardComponent_Template_quill_editor_onEditorCreated_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onEditorCreated($event));
        })("onContentChanged", function ConsentMessageCardComponent_Template_quill_editor_onContentChanged_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onContentChanged($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "div", 10);
        \u0275\u0275text(19, "\u{1F4CE} Insert Field Tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p", 11);
        \u0275\u0275text(21, "Click any tag to insert it at your cursor position");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(22, ConsentMessageCardComponent_For_23_Template, 6, 2, "div", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(10);
        \u0275\u0275property("modules", ctx.quillModules);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Characters: ", ctx.charCount(), "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Tags used: ", ctx.usedKeys.size, "");
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.categories);
      }
    }, dependencies: [ReactiveFormsModule, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButtonModule, MatButton, Dir, MatDialogModule, QuillModule, QuillEditorComponent], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.editor-wrap[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n  .editor-wrap .ql-toolbar {\n  border: none;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 8px 8px 0 0;\n  background: #f8fafc;\n}\n  .editor-wrap .ql-container {\n  border: none;\n  min-height: 180px;\n  font-size: 14px;\n  direction: ltr;\n  text-align: left;\n}\n  .editor-wrap .ql-editor {\n  direction: ltr !important;\n  text-align: left !important;\n}\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  font-size: 12px;\n  color: #64748b;\n}\n.tags-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 12px;\n}\n.sec-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.sec-hint[_ngcontent-%COMP%] {\n  margin: 4px 0 10px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.cat-block[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.cat-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.tag-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tag-chip[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #374151;\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.tag-chip[_ngcontent-%COMP%]:hover:not(.tag-chip--disabled) {\n  border-color: #6366f1;\n  color: #6366f1;\n  background: #eef2ff;\n}\n.tag-chip--used[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n  border-color: #6366f1;\n}\n.tag-chip--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=consent-message-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentMessageCardComponent, [{
    type: Component,
    args: [{ selector: "app-consent-message-card", standalone: true, imports: [ReactiveFormsModule, MatButtonModule, MatDialogModule, QuillModule], template: '<div class="card" [formGroup]="form" dir="ltr">\r\n  <div class="head">\r\n    <div>\r\n      <h2 class="title">Consent Message</h2>\r\n      <p class="sub">WYSIWYG Rich Text Editor</p>\r\n    </div>\r\n    <button mat-stroked-button type="button" class="ciq-btn-secondary" (click)="openPreview()">\u{1F441} Preview</button>\r\n  </div>\r\n\r\n  <div class="editor-wrap">\r\n    <quill-editor\r\n      #editor\r\n      formControlName="consentMessage"\r\n      theme="snow"\r\n      [modules]="quillModules"\r\n      (onEditorCreated)="onEditorCreated($event)"\r\n      (onContentChanged)="onContentChanged($event)"\r\n      placeholder="Write your consent message here. Use the tags below to insert dynamic customer fields\u2026"\r\n    ></quill-editor>\r\n  </div>\r\n\r\n  <div class="stats-bar">\r\n    <span>Characters: {{ charCount() }}</span>\r\n    <span>Tags used: {{ usedKeys.size }}</span>\r\n  </div>\r\n\r\n  <div class="tags-section">\r\n    <div class="sec-label">\u{1F4CE} Insert Field Tags</div>\r\n    <p class="sec-hint">Click any tag to insert it at your cursor position</p>\r\n    @for (cat of categories; track cat) {\r\n      <div class="cat-block">\r\n        <span class="cat-pill">{{ categoryIcon(cat) }} {{ cat }}</span>\r\n        <div class="tag-row">\r\n          @for (tag of grouped[cat]; track tag.tagKey) {\r\n            <button\r\n              type="button"\r\n              class="tag-chip"\r\n              [class.tag-chip--used]="usedKeys.has(tag.tagKey)"\r\n              [class.tag-chip--disabled]="!isQuillReady()"\r\n              (click)="insertTag(tag)"\r\n            >\r\n              @if (usedKeys.has(tag.tagKey)) {\r\n                <span>\u2713 </span>\r\n              }\r\n              {{ tag.tagLabel }}\r\n            </button>\r\n          }\r\n        </div>\r\n      </div>\r\n    }\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/features/maker/create-consent/consent-message-card/consent-message-card.component.scss */\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.sub {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.editor-wrap {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n::ng-deep .editor-wrap .ql-toolbar {\n  border: none;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 8px 8px 0 0;\n  background: #f8fafc;\n}\n::ng-deep .editor-wrap .ql-container {\n  border: none;\n  min-height: 180px;\n  font-size: 14px;\n  direction: ltr;\n  text-align: left;\n}\n::ng-deep .editor-wrap .ql-editor {\n  direction: ltr !important;\n  text-align: left !important;\n}\n.stats-bar {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  font-size: 12px;\n  color: #64748b;\n}\n.tags-section {\n  margin-top: 16px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 12px;\n}\n.sec-label {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.sec-hint {\n  margin: 4px 0 10px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.cat-block {\n  margin-bottom: 12px;\n}\n.cat-pill {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.tag-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tag-chip {\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #374151;\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.tag-chip:hover:not(.tag-chip--disabled) {\n  border-color: #6366f1;\n  color: #6366f1;\n  background: #eef2ff;\n}\n.tag-chip--used {\n  background: #6366f1;\n  color: #fff;\n  border-color: #6366f1;\n}\n.tag-chip--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=consent-message-card.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input,
    args: [{ required: true }]
  }], grouped: [{
    type: Input,
    args: [{ required: true }]
  }], allTags: [{
    type: Input,
    args: [{ required: true }]
  }], tagsUsedChange: [{
    type: Output
  }], quillComp: [{
    type: ViewChild,
    args: ["editor"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsentMessageCardComponent, { className: "ConsentMessageCardComponent", filePath: "src/app/features/maker/create-consent/consent-message-card/consent-message-card.component.ts", lineNumber: 22 });
})();

// node_modules/@angular/material/fesm2022/tabs.mjs
var _c03 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c1 = ["tabListContainer"];
var _c2 = ["tabList"];
var _c3 = ["tabListInner"];
var _c4 = ["nextPaginator"];
var _c5 = ["previousPaginator"];
var _c6 = ["content"];
function MatTabBody_ng_template_2_Template(rf, ctx) {
}
var _c7 = ["tabBodyWrapper"];
var _c8 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {
}
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("cdkPortalOutlet", tab_r4.templateLabel);
  }
}
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(tab_r4.textLabel);
  }
}
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7, 2);
    \u0275\u0275listener("click", function MatTabGroup_For_3_Template_div_click_0_listener() {
      const ctx_r2 = \u0275\u0275restoreView(_r2);
      const tab_r4 = ctx_r2.$implicit;
      const $index_r5 = ctx_r2.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      const tabHeader_r7 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx_r5._handleClick(tab_r4, tabHeader_r7, $index_r5));
    })("cdkFocusChange", function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const $index_r5 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._tabFocusChanged($event, $index_r5));
    });
    \u0275\u0275element(2, "span", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "span", 10)(5, "span", 11);
    \u0275\u0275template(6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 12)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const tabNode_r8 = \u0275\u0275reference(1);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r4.labelClass);
    \u0275\u0275classProp("mdc-tab--active", ctx_r5.selectedIndex === $index_r5);
    \u0275\u0275property("id", ctx_r5._getTabLabelId(tab_r4, $index_r5))("disabled", tab_r4.disabled)("fitInkBarToContent", ctx_r5.fitInkBarToContent);
    \u0275\u0275attribute("tabIndex", ctx_r5._getTabIndex($index_r5))("aria-posinset", $index_r5 + 1)("aria-setsize", ctx_r5._tabs.length)("aria-controls", ctx_r5._getTabContentId($index_r5))("aria-selected", ctx_r5.selectedIndex === $index_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("matRippleTrigger", tabNode_r8)("matRippleDisabled", tab_r4.disabled || ctx_r5.disableRipple);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(tab_r4.templateLabel ? 6 : 7);
  }
}
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-body", 13);
    \u0275\u0275listener("_onCentered", function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._setTabBodyWrapperHeight($event));
    })("_beforeCentering", function MatTabGroup_For_8_Template_mat_tab_body__beforeCentering_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._bodyCentered($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const $index_r11 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r10.bodyClass);
    \u0275\u0275property("id", ctx_r5._getTabContentId($index_r11))("content", tab_r10.content)("position", tab_r10.position)("animationDuration", ctx_r5.animationDuration)("preserveContent", ctx_r5.preserveContent);
    \u0275\u0275attribute("tabindex", ctx_r5.contentTabIndex != null && ctx_r5.selectedIndex === $index_r11 ? ctx_r5.contentTabIndex : null)("aria-labelledby", ctx_r5._getTabLabelId(tab_r10, $index_r11))("aria-hidden", ctx_r5.selectedIndex !== $index_r11);
  }
}
var _c9 = ["mat-tab-nav-bar", ""];
var _c10 = ["mat-tab-link", ""];
var MAT_TAB_CONTENT = new InjectionToken("MatTabContent");
var MatTabContent = class _MatTabContent {
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function MatTabContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabContent,
    selectors: [["", "matTabContent", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB_CONTENT,
      useExisting: _MatTabContent
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabContent, [{
    type: Directive,
    args: [{
      selector: "[matTabContent]",
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }]
    }]
  }], () => [], null);
})();
var MAT_TAB_LABEL = new InjectionToken("MatTabLabel");
var MAT_TAB = new InjectionToken("MAT_TAB");
var MatTabLabel = class _MatTabLabel extends CdkPortal {
  _closestTab = inject(MAT_TAB, {
    optional: true
  });
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTabLabel_BaseFactory;
    return function MatTabLabel_Factory(__ngFactoryType__) {
      return (\u0275MatTabLabel_BaseFactory || (\u0275MatTabLabel_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabLabel)))(__ngFactoryType__ || _MatTabLabel);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabLabel,
    selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB_LABEL,
      useExisting: _MatTabLabel
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabel, [{
    type: Directive,
    args: [{
      selector: "[mat-tab-label], [matTabLabel]",
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }]
    }]
  }], null, null);
})();
var MAT_TAB_GROUP = new InjectionToken("MAT_TAB_GROUP");
var MatTab = class _MatTab {
  _viewContainerRef = inject(ViewContainerRef);
  _closestTabGroup = inject(MAT_TAB_GROUP, {
    optional: true
  });
  /** whether the tab is disabled. */
  disabled = false;
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  _templateLabel;
  /**
   * Template provided in the tab content that will be used if present, used to enable lazy-loading
   */
  _explicitContent = void 0;
  /** Template inside the MatTab view that contains an `<ng-content>`. */
  _implicitContent;
  /** Plain text label for the tab, used when there is no template label. */
  textLabel = "";
  /** Aria label for the tab. */
  ariaLabel;
  /**
   * Reference to the element that the tab is labelled by.
   * Will be cleared if `aria-label` is set at the same time.
   */
  ariaLabelledby;
  /** Classes to be passed to the tab label inside the mat-tab-header container. */
  labelClass;
  /** Classes to be passed to the tab mat-tab-body container. */
  bodyClass;
  /**
   * Custom ID for the tab, overriding the auto-generated one by Material.
   * Note that when using this input, it's your responsibility to ensure that the ID is unique.
   */
  id = null;
  /** Portal that will be the hosted content of the tab */
  _contentPortal = null;
  /** @docs-private */
  get content() {
    return this._contentPortal;
  }
  /** Emits whenever the internal state of the tab changes. */
  _stateChanges = new Subject();
  /**
   * The relatively indexed position where 0 represents the center, negative is left, and positive
   * represents the right.
   */
  position = null;
  // TODO(crisbeto): we no longer use this, but some internal apps appear to rely on it.
  /**
   * The initial relatively index origin of the tab if it was created and selected after there
   * was already a selected tab. Provides context of what position the tab should originate from.
   */
  origin = null;
  /**
   * Whether the tab is currently active.
   */
  isActive = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setTemplateLabelInput(value) {
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
  static \u0275fac = function MatTab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTab)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTab,
    selectors: [["mat-tab"]],
    contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTabLabel, 5);
        \u0275\u0275contentQuery(dirIndex, MatTabContent, 7, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._explicitContent = _t.first);
      }
    },
    viewQuery: function MatTab_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._implicitContent = _t.first);
      }
    },
    hostAttrs: ["hidden", ""],
    hostVars: 1,
    hostBindings: function MatTab_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", null);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      textLabel: [0, "label", "textLabel"],
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      labelClass: "labelClass",
      bodyClass: "bodyClass",
      id: "id"
    },
    exportAs: ["matTab"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB,
      useExisting: _MatTab
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function MatTab_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTab, [{
    type: Component,
    args: [{
      selector: "mat-tab",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matTab",
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      host: {
        // This element will be rendered on the server in order to support hydration.
        // Hide it so it doesn't cause a layout shift when it's removed on the client.
        "hidden": "",
        // Clear any custom IDs from the tab since they'll be forwarded to the actual tab.
        "[attr.id]": "null"
      },
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templateLabel: [{
      type: ContentChild,
      args: [MatTabLabel]
    }],
    _explicitContent: [{
      type: ContentChild,
      args: [MatTabContent, {
        read: TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: Input,
      args: ["label"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    labelClass: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  });
})();
var ACTIVE_CLASS = "mdc-tab-indicator--active";
var NO_TRANSITION_CLASS = "mdc-tab-indicator--no-transition";
var MatInkBar = class {
  _items;
  /** Item to which the ink bar is aligned currently. */
  _currentItem;
  constructor(_items) {
    this._items = _items;
  }
  /** Hides the ink bar. */
  hide() {
    this._items.forEach((item) => item.deactivateInkBar());
    this._currentItem = void 0;
  }
  /** Aligns the ink bar to a DOM node. */
  alignToElement(element) {
    const correspondingItem = this._items.find((item) => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
};
var InkBarItem = class _InkBarItem {
  _elementRef = inject(ElementRef);
  _inkBarElement;
  _inkBarContentElement;
  _fitToContent = false;
  /** Whether the ink bar should fit to the entire tab or just its content. */
  get fitInkBarToContent() {
    return this._fitToContent;
  }
  set fitInkBarToContent(newValue) {
    if (this._fitToContent !== newValue) {
      this._fitToContent = newValue;
      if (this._inkBarElement) {
        this._appendInkBarElement();
      }
    }
  }
  /** Aligns the ink bar to the current item. */
  activateInkBar(previousIndicatorClientRect) {
    const element = this._elementRef.nativeElement;
    if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
      element.classList.add(ACTIVE_CLASS);
      return;
    }
    const currentClientRect = element.getBoundingClientRect();
    const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    element.classList.add(NO_TRANSITION_CLASS);
    this._inkBarContentElement.style.setProperty("transform", `translateX(${xPosition}px) scaleX(${widthDelta})`);
    element.getBoundingClientRect();
    element.classList.remove(NO_TRANSITION_CLASS);
    element.classList.add(ACTIVE_CLASS);
    this._inkBarContentElement.style.setProperty("transform", "");
  }
  /** Removes the ink bar from the current item. */
  deactivateInkBar() {
    this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
  }
  /** Initializes the foundation. */
  ngOnInit() {
    this._createInkBarElement();
  }
  /** Destroys the foundation. */
  ngOnDestroy() {
    this._inkBarElement?.remove();
    this._inkBarElement = this._inkBarContentElement = null;
  }
  /** Creates and appends the ink bar element. */
  _createInkBarElement() {
    const documentNode = this._elementRef.nativeElement.ownerDocument || document;
    const inkBarElement = this._inkBarElement = documentNode.createElement("span");
    const inkBarContentElement = this._inkBarContentElement = documentNode.createElement("span");
    inkBarElement.className = "mdc-tab-indicator";
    inkBarContentElement.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline";
    inkBarElement.appendChild(this._inkBarContentElement);
    this._appendInkBarElement();
  }
  /**
   * Appends the ink bar to the tab host element or content, depending on whether
   * the ink bar should fit to content.
   */
  _appendInkBarElement() {
    if (!this._inkBarElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Ink bar element has not been created and cannot be appended");
    }
    const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector(".mdc-tab__content") : this._elementRef.nativeElement;
    if (!parentElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Missing element to host the ink bar");
    }
    parentElement.appendChild(this._inkBarElement);
  }
  static \u0275fac = function InkBarItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InkBarItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InkBarItem,
    inputs: {
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InkBarItem, [{
    type: Directive
  }], null, {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = (element) => ({
    left: element ? (element.offsetLeft || 0) + "px" : "0",
    width: element ? (element.offsetWidth || 0) + "px" : "0"
  });
  return method;
}
var _MAT_INK_BAR_POSITIONER = new InjectionToken("MatInkBarPositioner", {
  providedIn: "root",
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
var MatTabLabelWrapper = class _MatTabLabelWrapper extends InkBarItem {
  elementRef = inject(ElementRef);
  /** Whether the tab is disabled. */
  disabled = false;
  /** Sets focus on the wrapper element */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTabLabelWrapper_BaseFactory;
    return function MatTabLabelWrapper_Factory(__ngFactoryType__) {
      return (\u0275MatTabLabelWrapper_BaseFactory || (\u0275MatTabLabelWrapper_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabLabelWrapper)))(__ngFactoryType__ || _MatTabLabelWrapper);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabLabelWrapper,
    selectors: [["", "matTabLabelWrapper", ""]],
    hostVars: 3,
    hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", !!ctx.disabled);
        \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabelWrapper, [{
    type: Directive,
    args: [{
      selector: "[matTabLabelWrapper]",
      host: {
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[attr.aria-disabled]": "!!disabled"
      }
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var passiveEventListenerOptions = {
  passive: true
};
var HEADER_SCROLL_DELAY = 650;
var HEADER_SCROLL_INTERVAL = 100;
var MatPaginatedTabHeader = class _MatPaginatedTabHeader {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _viewportRuler = inject(ViewportRuler);
  _dir = inject(Directionality, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _sharedResizeObserver = inject(SharedResizeObserver);
  _injector = inject(Injector);
  _renderer = inject(Renderer2);
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _eventCleanups;
  /** The distance in pixels that the tab labels should be translated to the left. */
  _scrollDistance = 0;
  /** Whether the header should scroll to the selected index after the view has been checked. */
  _selectedIndexChanged = false;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Whether the controls for pagination should be displayed */
  _showPaginationControls = false;
  /** Whether the tab list can be scrolled more towards the end of the tab label list. */
  _disableScrollAfter = true;
  /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
  _disableScrollBefore = true;
  /**
   * The number of tab labels that are displayed on the header. When this changes, the header
   * should re-evaluate the scroll position.
   */
  _tabLabelCount;
  /** Whether the scroll distance has changed and should be applied after the view is checked. */
  _scrollDistanceChanged;
  /** Used to manage focus between the tabs. */
  _keyManager;
  /** Cached text content of the header. */
  _currentTextContent;
  /** Stream that will stop the automated scrolling. */
  _stopScrolling = new Subject();
  /**
   * Whether pagination should be disabled. This can be used to avoid unnecessary
   * layout recalculations if it's known that pagination won't be required.
   */
  disablePagination = false;
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(v) {
    const value = isNaN(v) ? 0 : v;
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  _selectedIndex = 0;
  /** Event emitted when the option is selected. */
  selectFocusedIndex = new EventEmitter();
  /** Event emitted when a label is focused. */
  indexFocused = new EventEmitter();
  constructor() {
    this._eventCleanups = this._ngZone.runOutsideAngular(() => [this._renderer.listen(this._elementRef.nativeElement, "mouseleave", () => this._stopInterval())]);
  }
  ngAfterViewInit() {
    this._eventCleanups.push(_bindEventWithOptions(this._renderer, this._previousPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("before"), passiveEventListenerOptions), _bindEventWithOptions(this._renderer, this._nextPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("after"), passiveEventListenerOptions));
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : of("ltr");
    const resize = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(debounceTime(32), takeUntil(this._destroyed));
    const viewportResize = this._viewportRuler.change(150).pipe(takeUntil(this._destroyed));
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => false);
    this._keyManager.updateActiveItem(Math.max(this._selectedIndex, 0));
    afterNextRender(realign, {
      injector: this._injector
    });
    merge(dirChange, viewportResize, resize, this._items.changes, this._itemsResized()).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());
    });
    this._keyManager.change.subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  /** Sends any changes that could affect the layout of the items. */
  _itemsResized() {
    if (typeof ResizeObserver !== "function") {
      return EMPTY;
    }
    return this._items.changes.pipe(
      startWith(this._items),
      switchMap((tabItems) => new Observable((observer) => this._ngZone.runOutsideAngular(() => {
        const resizeObserver = new ResizeObserver((entries) => observer.next(entries));
        tabItems.forEach((item) => resizeObserver.observe(item.elementRef.nativeElement));
        return () => {
          resizeObserver.disconnect();
        };
      }))),
      // Skip the first emit since the resize observer emits when an item
      // is observed for new items when the tab is already inserted
      skip(1),
      // Skip emissions where all the elements are invisible since we don't want
      // the header to try and re-render with invalid measurements. See #25574.
      filter((entries) => entries.some((e) => e.contentRect.width > 0 && e.contentRect.height > 0))
    );
  }
  ngAfterContentChecked() {
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  /** Handles keyboard events on the header. */
  _handleKeydown(event) {
    if (hasModifierKey(event)) {
      return;
    }
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
        }
        break;
      default:
        this._keyManager?.onKeydown(event);
    }
  }
  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || "";
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  _isValidIndex(index) {
    return this._items ? !!this._items.toArray()[index] : true;
  }
  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == "ltr") {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  /** The layout direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === "ltr" ? -scrollDistance : scrollDistance;
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const scrollAmount = (direction == "before" ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  /** Handles click events on the pagination arrows. */
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == "ltr") {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
    }
  }
  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const scrollWidth = this._tabListInner.nativeElement.scrollWidth;
      const containerWidth = this._elementRef.nativeElement.offsetWidth;
      const isEnabled = scrollWidth - containerWidth >= 5;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._showPaginationControls = isEnabled;
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Tells the ink-bar to align itself to the current label wrapper */
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  /** Stops the currently-running paginator interval.  */
  _stopInterval() {
    this._stopScrolling.next();
  }
  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */
  _handlePaginatorPress(direction, mouseEvent) {
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    this._stopInterval();
    timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(takeUntil(merge(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
  static \u0275fac = function MatPaginatedTabHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatedTabHeader)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatPaginatedTabHeader,
    inputs: {
      disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute]
    },
    outputs: {
      selectFocusedIndex: "selectFocusedIndex",
      indexFocused: "indexFocused"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatedTabHeader, [{
    type: Directive
  }], () => [], {
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectFocusedIndex: [{
      type: Output
    }],
    indexFocused: [{
      type: Output
    }]
  });
})();
var MatTabHeader = class _MatTabHeader extends MatPaginatedTabHeader {
  _items;
  _tabListContainer;
  _tabList;
  _tabListInner;
  _nextPaginator;
  _previousPaginator;
  _inkBar;
  /** Aria label of the header. */
  ariaLabel;
  /** Sets the `aria-labelledby` of the header. */
  ariaLabelledby;
  /** Whether the ripple effect is disabled or not. */
  disableRipple = false;
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  _itemSelected(event) {
    event.preventDefault();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTabHeader_BaseFactory;
    return function MatTabHeader_Factory(__ngFactoryType__) {
      return (\u0275MatTabHeader_BaseFactory || (\u0275MatTabHeader_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabHeader)))(__ngFactoryType__ || _MatTabHeader);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabHeader,
    selectors: [["mat-tab-header"]],
    contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTabLabelWrapper, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabHeader_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 7);
        \u0275\u0275viewQuery(_c2, 7);
        \u0275\u0275viewQuery(_c3, 7);
        \u0275\u0275viewQuery(_c4, 5);
        \u0275\u0275viewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-header"],
    hostVars: 4,
    hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 13,
    vars: 10,
    consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
    template: function MatTabHeader_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 5, 0);
        \u0275\u0275listener("click", function MatTabHeader_Template_div_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handlePaginatorClick("before"));
        })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handlePaginatorPress("before", $event));
        })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._stopInterval());
        });
        \u0275\u0275element(2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 7, 1);
        \u0275\u0275listener("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleKeydown($event));
        });
        \u0275\u0275elementStart(5, "div", 8, 2);
        \u0275\u0275listener("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onContentChanges());
        });
        \u0275\u0275elementStart(7, "div", 9, 3);
        \u0275\u0275projection(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 10, 4);
        \u0275\u0275listener("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handlePaginatorPress("after", $event));
        })("click", function MatTabHeader_Template_div_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handlePaginatorClick("after"));
        })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._stopInterval());
        });
        \u0275\u0275element(12, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby || null);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    dependencies: [MatRipple, CdkObserveContent],
    styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height, 1px);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height, 1px);border-top-color:var(--mat-tab-header-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabHeader, [{
    type: Component,
    args: [{
      selector: "mat-tab-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'"
      },
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div
  class="mat-mdc-tab-label-container"
  #tabListContainer
  (keydown)="_handleKeydown($event)"
  [class._mat-animation-noopable]="_animationMode === 'NoopAnimations'">
  <div
    #tabList
    class="mat-mdc-tab-list"
    role="tablist"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height, 1px);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height, 1px);border-top-color:var(--mat-tab-header-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}\n"]
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_TABS_CONFIG = new InjectionToken("MAT_TABS_CONFIG");
var MatTabBodyPortal = class _MatTabBodyPortal extends CdkPortalOutlet {
  _host = inject(MatTabBody);
  /** Subscription to events for when the tab body begins centering. */
  _centeringSub = Subscription.EMPTY;
  /** Subscription to events for when the tab body finishes leaving from center position. */
  _leavingSub = Subscription.EMPTY;
  constructor() {
    super();
  }
  /** Set initial visibility or set up subscription for changing visibility. */
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe(startWith(this._host._isCenterPosition())).subscribe((isCentering) => {
      if (this._host._content && isCentering && !this.hasAttached()) {
        this.attach(this._host._content);
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this.detach();
      }
    });
  }
  /** Clean up centering subscription. */
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
  static \u0275fac = function MatTabBodyPortal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabBodyPortal)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabBodyPortal,
    selectors: [["", "matTabBodyHost", ""]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBodyPortal, [{
    type: Directive,
    args: [{
      selector: "[matTabBodyHost]"
    }]
  }], () => [], null);
})();
var MatTabBody = class _MatTabBody {
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _renderer = inject(Renderer2);
  _animationsModule = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _eventCleanups;
  _initialized;
  _fallbackTimer;
  /** Current position of the tab-body in the tab-group. Zero means that the tab is visible. */
  _positionIndex;
  /** Subscription to the directionality change observable. */
  _dirChangeSubscription = Subscription.EMPTY;
  /** Current position of the body within the tab group. */
  _position;
  /** Previous position of the body. */
  _previousPosition;
  /** Event emitted when the tab begins to animate towards the center as the active tab. */
  _onCentering = new EventEmitter();
  /** Event emitted before the centering of the tab begins. */
  _beforeCentering = new EventEmitter();
  /** Event emitted before the centering of the tab begins. */
  _afterLeavingCenter = new EventEmitter();
  /** Event emitted when the tab completes its animation towards the center. */
  _onCentered = new EventEmitter(true);
  /** The portal host inside of this container into which the tab body content will be loaded. */
  _portalHost;
  /** Element in which the content is rendered. */
  _contentElement;
  /** The tab body content to display. */
  _content;
  // Note that the default value will always be overwritten by `MatTabBody`, but we need one
  // anyway to prevent the animations module from throwing an error if the body is used on its own.
  /** Duration for the tab's animation. */
  animationDuration = "500ms";
  /** Whether the tab's content should be kept in the DOM while it's off-screen. */
  preserveContent = false;
  /** The shifted index position of the tab body, where zero represents the active center tab. */
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor() {
    if (this._dir) {
      const changeDetectorRef = inject(ChangeDetectorRef);
      this._dirChangeSubscription = this._dir.change.subscribe((dir) => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
  }
  ngOnInit() {
    this._bindTransitionEvents();
    if (this._position === "center") {
      this._setActiveClass(true);
      afterNextRender(() => this._onCentering.emit(this._elementRef.nativeElement.clientHeight), {
        injector: this._injector
      });
    }
    this._initialized = true;
  }
  ngOnDestroy() {
    clearTimeout(this._fallbackTimer);
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._dirChangeSubscription.unsubscribe();
  }
  /** Sets up the transition events. */
  _bindTransitionEvents() {
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      const transitionDone = (event) => {
        if (event.target === this._contentElement?.nativeElement) {
          this._elementRef.nativeElement.classList.remove("mat-tab-body-animating");
          if (event.type === "transitionend") {
            this._transitionDone();
          }
        }
      };
      this._eventCleanups = [this._renderer.listen(element, "transitionstart", (event) => {
        if (event.target === this._contentElement?.nativeElement) {
          this._elementRef.nativeElement.classList.add("mat-tab-body-animating");
          this._transitionStarted();
        }
      }), this._renderer.listen(element, "transitionend", transitionDone), this._renderer.listen(element, "transitioncancel", transitionDone)];
    });
  }
  /** Called when a transition has started. */
  _transitionStarted() {
    clearTimeout(this._fallbackTimer);
    const isCentering = this._position === "center";
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  /** Called when a transition is done. */
  _transitionDone() {
    if (this._position === "center") {
      this._onCentered.emit();
    } else if (this._previousPosition === "center") {
      this._afterLeavingCenter.emit();
    }
  }
  /** Sets the active styling on the tab body based on its current position. */
  _setActiveClass(isActive) {
    this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active", isActive);
  }
  /** The text direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the provided position state is considered center, regardless of origin. */
  _isCenterPosition() {
    return this._positionIndex === 0;
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    this._previousPosition = this._position;
    if (this._positionIndex < 0) {
      this._position = dir == "ltr" ? "left" : "right";
    } else if (this._positionIndex > 0) {
      this._position = dir == "ltr" ? "right" : "left";
    } else {
      this._position = "center";
    }
    if (this._animationsDisabled()) {
      this._simulateTransitionEvents();
    } else if (this._initialized && (this._position === "center" || this._previousPosition === "center")) {
      clearTimeout(this._fallbackTimer);
      this._fallbackTimer = this._ngZone.runOutsideAngular(() => setTimeout(() => this._simulateTransitionEvents(), 100));
    }
  }
  /** Simulates the body's transition events in an environment where they might not fire. */
  _simulateTransitionEvents() {
    this._transitionStarted();
    afterNextRender(() => this._transitionDone(), {
      injector: this._injector
    });
  }
  /** Whether animations are disabled for the tab group. */
  _animationsDisabled() {
    return this._animationsModule === "NoopAnimations" || this.animationDuration === "0ms" || this.animationDuration === "0s";
  }
  static \u0275fac = function MatTabBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabBody)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabBody,
    selectors: [["mat-tab-body"]],
    viewQuery: function MatTabBody_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatTabBodyPortal, 5);
        \u0275\u0275viewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalHost = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-body"],
    hostVars: 1,
    hostBindings: function MatTabBody_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("inert", ctx._position === "center" ? null : "");
      }
    },
    inputs: {
      _content: [0, "content", "_content"],
      animationDuration: "animationDuration",
      preserveContent: "preserveContent",
      position: "position"
    },
    outputs: {
      _onCentering: "_onCentering",
      _beforeCentering: "_beforeCentering",
      _onCentered: "_onCentered"
    },
    decls: 3,
    vars: 6,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]],
    template: function MatTabBody_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275template(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-tab-body-content-left", ctx._position === "left")("mat-tab-body-content-right", ctx._position === "right")("mat-tab-body-content-can-animate", ctx._position === "center" || ctx._previousPosition === "center");
      }
    },
    dependencies: [MatTabBodyPortal, CdkScrollable],
    styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBody, [{
    type: Component,
    args: [{
      selector: "mat-tab-body",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-body",
        // In most cases the `visibility: hidden` that we set on the off-screen content is enough
        // to stop interactions with it, but if a child element sets its own `visibility`, it'll
        // override the one from the parent. This ensures that even those elements will be removed
        // from the accessibility tree.
        "[attr.inert]": '_position === "center" ? null : ""'
      },
      imports: [MatTabBodyPortal, CdkScrollable],
      template: `<div
   class="mat-mdc-tab-body-content"
   #content
   cdkScrollable
   [class.mat-tab-body-content-left]="_position === 'left'"
   [class.mat-tab-body-content-right]="_position === 'right'"
   [class.mat-tab-body-content-can-animate]="_position === 'center' || _previousPosition === 'center'">
  <ng-template matTabBodyHost></ng-template>
</div>
`,
      styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}\n"]
    }]
  }], () => [], {
    _onCentering: [{
      type: Output
    }],
    _beforeCentering: [{
      type: Output
    }],
    _onCentered: [{
      type: Output
    }],
    _portalHost: [{
      type: ViewChild,
      args: [MatTabBodyPortal]
    }],
    _contentElement: [{
      type: ViewChild,
      args: ["content"]
    }],
    _content: [{
      type: Input,
      args: ["content"]
    }],
    animationDuration: [{
      type: Input
    }],
    preserveContent: [{
      type: Input
    }],
    position: [{
      type: Input
    }]
  });
})();
var MatTabGroup = class _MatTabGroup {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _tabsSubscription = Subscription.EMPTY;
  _tabLabelSubscription = Subscription.EMPTY;
  _tabBodySubscription = Subscription.EMPTY;
  _diAnimationsDisabled = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  }) === "NoopAnimations";
  /**
   * All tabs inside the tab group. This includes tabs that belong to groups that are nested
   * inside the current one. We filter out only the tabs that belong to this group in `_tabs`.
   */
  _allTabs;
  _tabBodies;
  _tabBodyWrapper;
  _tabHeader;
  /** All of the tabs that belong to the group. */
  _tabs = new QueryList();
  /** The tab index that should be selected after the content has been checked. */
  _indexToSelect = 0;
  /** Index of the tab that was focused last. */
  _lastFocusedTabIndex = null;
  /** Snapshot of the height of the tab body wrapper before another tab is activated. */
  _tabBodyWrapperHeight = 0;
  /**
   * Theme color of the tab group. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent = value;
    this._changeDetectorRef.markForCheck();
  }
  _fitInkBarToContent = false;
  /** Whether tabs should be stretched to fill the header. */
  stretchTabs = true;
  /** Alignment for tabs label. */
  alignTabs = null;
  /** Whether the tab group should grow to the size of the active tab. */
  dynamicHeight = false;
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = isNaN(value) ? null : value;
  }
  _selectedIndex = null;
  /** Position of the tab header. */
  headerPosition = "above";
  /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  _animationDuration;
  /**
   * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
   * accessibility when the tab does not have focusable elements or if it has scrollable content.
   * The `tabindex` will be removed automatically for inactive tabs.
   * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
   */
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = isNaN(value) ? null : value;
  }
  _contentTabIndex;
  /**
   * Whether pagination should be disabled. This can be used to avoid unnecessary
   * layout recalculations if it's known that pagination won't be required.
   */
  disablePagination = false;
  /** Whether ripples in the tab group are disabled. */
  disableRipple = false;
  /**
   * By default tabs remove their content from the DOM while it's off-screen.
   * Setting this to `true` will keep it in the DOM which will prevent elements
   * like iframes and videos from reloading next time it comes back into the view.
   */
  preserveContent = false;
  /**
   * Theme color of the background of the tab group. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   *
   * @deprecated The background color should be customized through Sass theming APIs.
   * @breaking-change 20.0.0 Remove this input
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  _backgroundColor;
  /** Aria label of the inner `tablist` of the group. */
  ariaLabel;
  /** Sets the `aria-labelledby` of the inner `tablist` of the group. */
  ariaLabelledby;
  /** Output to enable support for two-way binding on `[(selectedIndex)]` */
  selectedIndexChange = new EventEmitter();
  /** Event emitted when focus has changed within a tab group. */
  focusChange = new EventEmitter();
  /** Event emitted when the body animation has completed */
  animationDone = new EventEmitter();
  /** Event emitted when the tab selection has changed. */
  selectedTabChange = new EventEmitter(true);
  _groupId;
  /** Whether the tab group is rendered on the server. */
  _isServer = !inject(Platform).isBrowser;
  constructor() {
    const defaultConfig = inject(MAT_TABS_CONFIG, {
      optional: true
    });
    this._groupId = inject(_IdGenerator).getId("mat-tab-group-");
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    if (defaultConfig?.contentTabIndex != null) {
      this.contentTabIndex = defaultConfig.contentTabIndex;
    }
    this.preserveContent = !!defaultConfig?.preserveContent;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
    this.alignTabs = defaultConfig && defaultConfig.alignTabs != null ? defaultConfig.alignTabs : null;
  }
  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */
  ngAfterContentChecked() {
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + "px";
      }
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          this._tabBodyWrapper.nativeElement.style.minHeight = "";
        }
      });
    }
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  ngAfterViewInit() {
    this._tabBodySubscription = this._tabBodies.changes.subscribe(() => this._bodyCentered(true));
  }
  /** Listens to changes in all of the tabs. */
  _subscribeToAllTabChanges() {
    this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs) => {
      this._tabs.reset(tabs.filter((tab) => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
    this._tabBodySubscription.unsubscribe();
  }
  /** Re-aligns the ink bar to the selected tab element. */
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  /**
   * Recalculates the tab group's pagination dimensions.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  /**
   * Sets focus to a particular tab.
   * @param index Index of the tab to be focused.
   */
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  /**
   * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
   * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
   * binding to be updated, we need to subscribe to changes in it and trigger change detection
   * manually.
   */
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = merge(...this._tabs.map((tab) => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Clamps the given index to the bounds of 0 and the tabs length. */
  _clampTabIndex(index) {
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  /** Returns a unique id for each tab label element */
  _getTabLabelId(tab, index) {
    return tab.id || `${this._groupId}-label-${index}`;
  }
  /** Returns a unique id for each tab content element */
  _getTabContentId(index) {
    return `${this._groupId}-content-${index}`;
  }
  /**
   * Sets the height of the body wrapper to the height of the activating tab if dynamic
   * height property is true.
   */
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
      this._tabBodyWrapperHeight = tabHeight;
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + "px";
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + "px";
    }
  }
  /** Removes the height of the tab body wrapper. */
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = "";
    this._ngZone.run(() => this.animationDone.emit());
  }
  /** Handle click events, setting new selected index if appropriate. */
  _handleClick(tab, tabHeader, index) {
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  /** Retrieves the tabindex for the tab. */
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  /** Callback for when the focused state of a tab has changed. */
  _tabFocusChanged(focusOrigin, index) {
    if (focusOrigin && focusOrigin !== "mouse" && focusOrigin !== "touch") {
      this._tabHeader.focusIndex = index;
    }
  }
  /**
   * Callback invoked when the centered state of a tab body changes.
   * @param isCenter Whether the tab will be in the center.
   */
  _bodyCentered(isCenter) {
    if (isCenter) {
      this._tabBodies?.forEach((body, i) => body._setActiveClass(i === this._selectedIndex));
    }
  }
  _animationsDisabled() {
    return this._diAnimationsDisabled || this.animationDuration === "0" || this.animationDuration === "0ms";
  }
  static \u0275fac = function MatTabGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabGroup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabGroup,
    selectors: [["mat-tab-group"]],
    contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTab, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allTabs = _t);
      }
    },
    viewQuery: function MatTabGroup_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c7, 5);
        \u0275\u0275viewQuery(_c8, 5);
        \u0275\u0275viewQuery(MatTabBody, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodyWrapper = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabHeader = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodies = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-group"],
    hostVars: 11,
    hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("mat-align-tabs", ctx.alignTabs);
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
        \u0275\u0275classProp("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
      }
    },
    inputs: {
      color: "color",
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
      stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
      alignTabs: [0, "mat-align-tabs", "alignTabs"],
      dynamicHeight: [2, "dynamicHeight", "dynamicHeight", booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
      headerPosition: "headerPosition",
      animationDuration: "animationDuration",
      contentTabIndex: [2, "contentTabIndex", "contentTabIndex", numberAttribute],
      disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      preserveContent: [2, "preserveContent", "preserveContent", booleanAttribute],
      backgroundColor: "backgroundColor",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"]
    },
    outputs: {
      selectedIndexChange: "selectedIndexChange",
      focusChange: "focusChange",
      animationDone: "animationDone",
      selectedTabChange: "selectedTabChange"
    },
    exportAs: ["matTabGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB_GROUP,
      useExisting: _MatTabGroup
    }])],
    ngContentSelectors: _c03,
    decls: 9,
    vars: 8,
    consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "class", "content", "position", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "_beforeCentering", "id", "content", "position", "animationDuration", "preserveContent"]],
    template: function MatTabGroup_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "mat-tab-header", 3, 0);
        \u0275\u0275listener("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._focusChanged($event));
        })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectedIndex = $event);
        });
        \u0275\u0275repeaterCreate(2, MatTabGroup_For_3_Template, 8, 17, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, MatTabGroup_Conditional_4_Template, 1, 0);
        \u0275\u0275elementStart(5, "div", 5, 1);
        \u0275\u0275repeaterCreate(7, MatTabGroup_For_8_Template, 1, 10, "mat-tab-body", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx._tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx._tabs);
      }
    },
    dependencies: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
    styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height, 48px);font-family:var(--mat-tab-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height, 2px);border-radius:var(--mdc-tab-indicator-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabGroup, [{
    type: Component,
    args: [{
      selector: "mat-tab-group",
      exportAs: "matTabGroup",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        "class": "mat-mdc-tab-group",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mat-mdc-tab-group-dynamic-height]": "dynamicHeight",
        "[class.mat-mdc-tab-group-inverted-header]": 'headerPosition === "below"',
        "[class.mat-mdc-tab-group-stretch-tabs]": "stretchTabs",
        "[attr.mat-align-tabs]": "alignTabs",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      imports: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
      template: '<mat-tab-header #tabHeader\n                [selectedIndex]="selectedIndex || 0"\n                [disableRipple]="disableRipple"\n                [disablePagination]="disablePagination"\n                [aria-label]="ariaLabel"\n                [aria-labelledby]="ariaLabelledby"\n                (indexFocused)="_focusChanged($event)"\n                (selectFocusedIndex)="selectedIndex = $event">\n\n  @for (tab of _tabs; track tab) {\n    <div class="mdc-tab mat-mdc-tab mat-focus-indicator"\n        #tabNode\n        role="tab"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]="_getTabLabelId(tab, $index)"\n        [attr.tabIndex]="_getTabIndex($index)"\n        [attr.aria-posinset]="$index + 1"\n        [attr.aria-setsize]="_tabs.length"\n        [attr.aria-controls]="_getTabContentId($index)"\n        [attr.aria-selected]="selectedIndex === $index"\n        [attr.aria-label]="tab.ariaLabel || null"\n        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"\n        [class.mdc-tab--active]="selectedIndex === $index"\n        [class]="tab.labelClass"\n        [disabled]="tab.disabled"\n        [fitInkBarToContent]="fitInkBarToContent"\n        (click)="_handleClick(tab, tabHeader, $index)"\n        (cdkFocusChange)="_tabFocusChanged($event, $index)">\n      <span class="mdc-tab__ripple"></span>\n\n      <!-- Needs to be a separate element, because we can\'t put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class="mat-mdc-tab-ripple"\n        mat-ripple\n        [matRippleTrigger]="tabNode"\n        [matRippleDisabled]="tab.disabled || disableRipple"></div>\n\n      <span class="mdc-tab__content">\n        <span class="mdc-tab__text-label">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don\'t have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class="mat-mdc-tab-body-wrapper"\n  [class._mat-animation-noopable]="_animationsDisabled()"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab;) {\n    <mat-tab-body role="tabpanel"\n                 [id]="_getTabContentId($index)"\n                 [attr.tabindex]="(contentTabIndex != null && selectedIndex === $index) ? contentTabIndex : null"\n                 [attr.aria-labelledby]="_getTabLabelId(tab, $index)"\n                 [attr.aria-hidden]="selectedIndex !== $index"\n                 [class]="tab.bodyClass"\n                 [content]="tab.content!"\n                 [position]="tab.position!"\n                 [animationDuration]="animationDuration"\n                 [preserveContent]="preserveContent"\n                 (_onCentered)="_removeTabBodyWrapperHeight()"\n                 (_onCentering)="_setTabBodyWrapperHeight($event)"\n                 (_beforeCentering)="_bodyCentered($event)"/>\n  }\n</div>\n',
      styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height, 48px);font-family:var(--mat-tab-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height, 2px);border-radius:var(--mdc-tab-indicator-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}\n']
    }]
  }], () => [], {
    _allTabs: [{
      type: ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodies: [{
      type: ViewChildren,
      args: [MatTabBody]
    }],
    _tabBodyWrapper: [{
      type: ViewChild,
      args: ["tabBodyWrapper"]
    }],
    _tabHeader: [{
      type: ViewChild,
      args: ["tabHeader"]
    }],
    color: [{
      type: Input
    }],
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    alignTabs: [{
      type: Input,
      args: [{
        alias: "mat-align-tabs"
      }]
    }],
    dynamicHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    contentTabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    selectedIndexChange: [{
      type: Output
    }],
    focusChange: [{
      type: Output
    }],
    animationDone: [{
      type: Output
    }],
    selectedTabChange: [{
      type: Output
    }]
  });
})();
var MatTabChangeEvent = class {
  /** Index of the currently-selected tab. */
  index;
  /** Reference to the currently-selected tab. */
  tab;
};
var MatTabNav = class _MatTabNav extends MatPaginatedTabHeader {
  _focusedItem = signal(null);
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent.next(value);
    this._changeDetectorRef.markForCheck();
  }
  _fitInkBarToContent = new BehaviorSubject(false);
  /** Whether tabs should be stretched to fill the header. */
  stretchTabs = true;
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  _animationDuration;
  /** Query list of all tab links of the tab navigation. */
  _items;
  /**
   * Theme color of the background of the tab nav. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  _backgroundColor;
  /** Whether the ripple effect is disabled or not. */
  disableRipple = false;
  /**
   * Theme color of the nav bar. This API is supported in M2 themes only, it has
   * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color = "primary";
  /**
   * Associated tab panel controlled by the nav bar. If not provided, then the nav bar
   * follows the ARIA link / navigation landmark pattern. If provided, it follows the
   * ARIA tabs design pattern.
   */
  tabPanel;
  _tabListContainer;
  _tabList;
  _tabListInner;
  _nextPaginator;
  _previousPaginator;
  _inkBar;
  constructor() {
    const elementRef = inject(ElementRef);
    const dir = inject(Directionality, {
      optional: true
    });
    const ngZone = inject(NgZone);
    const changeDetectorRef = inject(ChangeDetectorRef);
    const viewportRuler = inject(ViewportRuler);
    const platform = inject(Platform);
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    const defaultConfig = inject(MAT_TABS_CONFIG, {
      optional: true
    });
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  _itemSelected() {
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    this._items.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this.updateActiveLink());
    super.ngAfterContentInit();
    this._keyManager.change.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this._focusedItem.set(this._keyManager?.activeItem || null));
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new Error("A mat-tab-nav-panel must be specified via [tabPanel].");
    }
    super.ngAfterViewInit();
  }
  /** Notifies the component that the active link has been changed. */
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        this._focusedItem.set(items[i]);
        this._changeDetectorRef.markForCheck();
        return;
      }
    }
    this.selectedIndex = -1;
  }
  _getRole() {
    return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role");
  }
  _hasFocus(link) {
    return this._keyManager?.activeItem === link;
  }
  static \u0275fac = function MatTabNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabNav)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabNav,
    selectors: [["", "mat-tab-nav-bar", ""]],
    contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTabLink, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabNav_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 7);
        \u0275\u0275viewQuery(_c2, 7);
        \u0275\u0275viewQuery(_c3, 7);
        \u0275\u0275viewQuery(_c4, 5);
        \u0275\u0275viewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
    hostVars: 17,
    hostBindings: function MatTabNav_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._getRole());
        \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      }
    },
    inputs: {
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
      stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
      animationDuration: "animationDuration",
      backgroundColor: "backgroundColor",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      color: "color",
      tabPanel: "tabPanel"
    },
    exportAs: ["matTabNavBar", "matTabNav"],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c9,
    ngContentSelectors: _c03,
    decls: 13,
    vars: 6,
    consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
    template: function MatTabNav_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 5, 0);
        \u0275\u0275listener("click", function MatTabNav_Template_div_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handlePaginatorClick("before"));
        })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handlePaginatorPress("before", $event));
        })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._stopInterval());
        });
        \u0275\u0275element(2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 7, 1);
        \u0275\u0275listener("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleKeydown($event));
        });
        \u0275\u0275elementStart(5, "div", 8, 2);
        \u0275\u0275listener("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onContentChanges());
        });
        \u0275\u0275elementStart(7, "div", 9, 3);
        \u0275\u0275projection(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 10, 4);
        \u0275\u0275listener("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handlePaginatorPress("after", $event));
        })("click", function MatTabNav_Template_div_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handlePaginatorClick("after"));
        })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._stopInterval());
        });
        \u0275\u0275element(12, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        \u0275\u0275advance(10);
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    dependencies: [MatRipple, CdkObserveContent],
    styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height, 48px)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height, 1px);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNav, [{
    type: Component,
    args: [{
      selector: "[mat-tab-nav-bar]",
      exportAs: "matTabNavBar, matTabNav",
      host: {
        "[attr.role]": "_getRole()",
        "class": "mat-mdc-tab-nav-bar mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'",
        "[class.mat-mdc-tab-nav-bar-stretch-tabs]": "stretchTabs",
        "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"',
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div class="mat-mdc-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div class="mat-mdc-tab-list" #tabList (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height, 48px)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height, 1px);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}\n"]
    }]
  }], () => [], {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    animationDuration: [{
      type: Input
    }],
    _items: [{
      type: ContentChildren,
      args: [forwardRef(() => MatTabLink), {
        descendants: true
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    tabPanel: [{
      type: Input
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }]
  });
})();
var MatTabLink = class _MatTabLink extends InkBarItem {
  _tabNavBar = inject(MatTabNav);
  elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _destroyed = new Subject();
  /** Whether the tab link is active or not. */
  _isActive = false;
  _tabIndex = computed(() => this._tabNavBar._focusedItem() === this ? this.tabIndex : -1);
  /** Whether the link is active. */
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (value !== this._isActive) {
      this._isActive = value;
      this._tabNavBar.updateActiveLink();
    }
  }
  /** Whether the tab link is disabled. */
  disabled = false;
  /** Whether ripples are disabled on the tab link. */
  disableRipple = false;
  tabIndex = 0;
  /**
   * Ripple configuration for ripples that are launched on pointer down. The ripple config
   * is set to the global ripple options since we don't have any configurable options for
   * the tab link ripples.
   * @docs-private
   */
  rippleConfig;
  /**
   * Whether ripples are disabled on interaction.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  /** Unique id for the tab. */
  id = inject(_IdGenerator).getId("mat-tab-link-");
  constructor() {
    super();
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    if (animationMode === "NoopAnimations") {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
    this._tabNavBar._fitInkBarToContent.pipe(takeUntil(this._destroyed)).subscribe((fitInkBarToContent) => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  /** Focuses the tab link. */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this.disabled) {
        event.preventDefault();
      } else if (this._tabNavBar.tabPanel) {
        if (event.keyCode === SPACE) {
          event.preventDefault();
        }
        this.elementRef.nativeElement.click();
      }
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls");
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? "true" : "false";
    } else {
      return this.elementRef.nativeElement.getAttribute("aria-selected");
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? "page" : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role");
  }
  static \u0275fac = function MatTabLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabLink)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabLink,
    selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
    hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-focus-indicator"],
    hostVars: 11,
    hostBindings: function MatTabLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatTabLink_focus_HostBindingHandler() {
          return ctx._handleFocus();
        })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._tabIndex())("role", ctx._getRole());
        \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
      }
    },
    inputs: {
      active: [2, "active", "active", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      id: "id"
    },
    exportAs: ["matTabLink"],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c10,
    ngContentSelectors: _c03,
    decls: 5,
    vars: 2,
    consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
    template: function MatTabLink_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275element(0, "span", 0)(1, "div", 1);
        \u0275\u0275elementStart(2, "span", 2)(3, "span", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
      }
    },
    dependencies: [MatRipple],
    styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height, 48px);font-family:var(--mat-tab-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height, 2px);border-radius:var(--mdc-tab-indicator-active-indicator-shape, 0)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLink, [{
    type: Component,
    args: [{
      selector: "[mat-tab-link], [matTabLink]",
      exportAs: "matTabLink",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mdc-tab mat-mdc-tab-link mat-focus-indicator",
        "[attr.aria-controls]": "_getAriaControls()",
        "[attr.aria-current]": "_getAriaCurrent()",
        "[attr.aria-disabled]": "disabled",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.id]": "id",
        "[attr.tabIndex]": "_tabIndex()",
        "[attr.role]": "_getRole()",
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[class.mdc-tab--active]": "active",
        "(focus)": "_handleFocus()",
        "(keydown)": "_handleKeydown($event)"
      },
      imports: [MatRipple],
      template: '<span class="mdc-tab__ripple"></span>\n\n<div\n  class="mat-mdc-tab-ripple"\n  mat-ripple\n  [matRippleTrigger]="elementRef.nativeElement"\n  [matRippleDisabled]="rippleDisabled"></div>\n\n<span class="mdc-tab__content">\n  <span class="mdc-tab__text-label">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n',
      styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height, 48px);font-family:var(--mat-tab-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height, 2px);border-radius:var(--mdc-tab-indicator-active-indicator-shape, 0)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}\n']
    }]
  }], () => [], {
    active: [{
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
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var MatTabNavPanel = class _MatTabNavPanel {
  /** Unique id for the tab panel. */
  id = inject(_IdGenerator).getId("mat-tab-nav-panel-");
  /** Id of the active tab in the nav bar. */
  _activeTabId;
  static \u0275fac = function MatTabNavPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabNavPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabNavPanel,
    selectors: [["mat-tab-nav-panel"]],
    hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
    hostVars: 2,
    hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-labelledby", ctx._activeTabId)("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matTabNavPanel"],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function MatTabNavPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNavPanel, [{
    type: Component,
    args: [{
      selector: "mat-tab-nav-panel",
      exportAs: "matTabNavPanel",
      template: "<ng-content></ng-content>",
      host: {
        "[attr.aria-labelledby]": "_activeTabId",
        "[attr.id]": "id",
        "class": "mat-mdc-tab-nav-panel",
        "role": "tabpanel"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatTabsModule = class _MatTabsModule {
  static \u0275fac = function MatTabsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTabsModule,
    imports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
    exports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabsModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      exports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
    }]
  }], null, null);
})();

// src/app/features/maker/create-consent/delivery-channels-card/delivery-channels-card.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function DeliveryChannelsCardComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function DeliveryChannelsCardComponent_For_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Selected \u2713");
    \u0275\u0275elementEnd();
  }
}
function DeliveryChannelsCardComponent_For_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Click to select");
    \u0275\u0275elementEnd();
  }
}
function DeliveryChannelsCardComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function DeliveryChannelsCardComponent_For_8_Template_button_click_0_listener() {
      const ch_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(ch_r2.id));
    });
    \u0275\u0275template(1, DeliveryChannelsCardComponent_For_8_Conditional_1_Template, 2, 0, "span", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275template(11, DeliveryChannelsCardComponent_For_8_Conditional_11_Template, 2, 0, "span", 15)(12, DeliveryChannelsCardComponent_For_8_Conditional_12_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ch_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ch-card--on", ctx_r2.isOn(ch_r2.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isOn(ch_r2.id) ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ch_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ch_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ch_r2.desc);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isOn(ch_r2.id) ? 11 : 12);
  }
}
function DeliveryChannelsCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 17);
    \u0275\u0275text(2, "\u{1F4E1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Select a delivery channel above to preview your message");
    \u0275\u0275elementEnd()();
  }
}
function DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 24);
    \u0275\u0275text(2, "From: noreply@consentiq.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275text(4, "To: john.doe@example.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6, "Subject: Action Required: Consent Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25)(8, "div", 26);
    \u0275\u0275text(9, "[Company Logo Area]");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 27);
    \u0275\u0275elementStart(11, "div", 28);
    \u0275\u0275text(12, "ConsentIQ \xB7 Unsubscribe \xB7 Privacy Policy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275property("innerHTML", ctx_r2.processedEmailHtml(), \u0275\u0275sanitizeHtml);
  }
}
function DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "\u26A0\uFE0F Message will be split into 2 SMS");
    \u0275\u0275elementEnd();
  }
}
function DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 29)(2, "div", 30)(3, "div", 31);
    \u0275\u0275text(4, "ConsentIQ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 33);
    \u0275\u0275text(8, "9:41 AM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_2_Conditional_11_Template, 2, 0, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.smsBody());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.smsLen(), " / 160 characters");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.smsLen() > 160 ? 11 : -1);
  }
}
function DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 36)(2, "span");
    \u0275\u0275text(3, "\u{1F514} ConsentIQ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5, "now");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38);
    \u0275\u0275text(7, "Action Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.pushBody());
  }
}
function DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 40);
    \u0275\u0275text(2, "\u{1F7E2} ConsentIQ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 43);
    \u0275\u0275text(7, "9:41 \u2713\u2713");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.waBody());
  }
}
function DeliveryChannelsCardComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 19);
    \u0275\u0275template(1, DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_1_Template, 13, 1, "div", 20)(2, DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_2_Template, 12, 3, "div", 21)(3, DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_3_Template, 10, 1, "div", 22)(4, DeliveryChannelsCardComponent_Conditional_10_For_2_Conditional_4_Template, 8, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const id_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r2.tabHeader(id_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r5 === "EMAIL" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r5 === "SMS" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r5 === "PUSH" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r5 === "WHATSAPP" ? 4 : -1);
  }
}
function DeliveryChannelsCardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-group", 18);
    \u0275\u0275twoWayListener("selectedIndexChange", function DeliveryChannelsCardComponent_Conditional_10_Template_mat_tab_group_selectedIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.activeTab, $event) || (ctx_r2.activeTab = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(1, DeliveryChannelsCardComponent_Conditional_10_For_2_Template, 5, 5, "mat-tab", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("selectedIndex", ctx_r2.activeTab);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selected);
  }
}
var DeliveryChannelsCardComponent = class _DeliveryChannelsCardComponent {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
    this.previewHtml = "";
    this.mergeTags = [];
    this.channels = [
      { id: "EMAIL", icon: "\u{1F4E7}", name: "Email", desc: "HTML formatted email with full branding" },
      { id: "SMS", icon: "\u{1F4F1}", name: "SMS", desc: "Plain text, 160 characters max" },
      { id: "PUSH", icon: "\u{1F514}", name: "Push", desc: "Mobile push notification" },
      { id: "WHATSAPP", icon: "\u{1F4AC}", name: "WhatsApp", desc: "Rich message via WhatsApp Business" }
    ];
    this.selected = [];
    this.activeTab = 0;
  }
  ngOnChanges(changes) {
    if (changes["form"] && this.form) {
      this.sub?.unsubscribe();
      this.sub = this.form.controls["deliveryChannels"].valueChanges.subscribe(() => this.syncFromForm());
      this.syncFromForm();
    }
    if (changes["previewHtml"]) {
      this.syncFromForm();
    }
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  syncFromForm() {
    const v = this.form?.controls["deliveryChannels"]?.value || [];
    this.selected = v.filter((x) => ["EMAIL", "SMS", "PUSH", "WHATSAPP"].includes(x)) || [];
    if (this.activeTab >= this.selected.length) {
      this.activeTab = 0;
    }
  }
  isOn(id) {
    return this.selected.includes(id);
  }
  toggle(id) {
    const cur = [...this.form.controls["deliveryChannels"].value ?? []];
    const idx = cur.indexOf(id);
    if (idx >= 0) {
      cur.splice(idx, 1);
    } else {
      cur.push(id);
    }
    this.form.controls["deliveryChannels"].setValue(cur);
    this.form.controls["deliveryChannels"].markAsDirty();
    this.selected = cur;
    if (this.activeTab >= this.selected.length) {
      this.activeTab = Math.max(0, this.selected.length - 1);
    }
  }
  tabIcon(id) {
    return this.channels.find((c) => c.id === id)?.icon ?? "";
  }
  tabLabel(id) {
    return this.channels.find((c) => c.id === id)?.name ?? id;
  }
  tabHeader(id) {
    return `${this.tabIcon(id)} ${this.tabLabel(id)}`;
  }
  processedEmailHtml() {
    let html = this.previewHtml || "";
    for (const t of this.mergeTags) {
      const key = t.tagKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      html = html.replace(new RegExp(key, "g"), t.sampleValue || "");
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  smsText() {
    return this.stripHtml(this.previewHtml);
  }
  smsBody() {
    const t = this.smsText();
    return t.length > 160 ? t.slice(0, 157) + "..." : t;
  }
  smsLen() {
    return this.smsText().length;
  }
  pushBody() {
    return this.stripHtml(this.previewHtml).slice(0, 100);
  }
  waBody() {
    return this.stripHtml(this.previewHtml).slice(0, 200);
  }
  stripHtml(html) {
    if (!html) {
      return "";
    }
    return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  }
  static {
    this.\u0275fac = function DeliveryChannelsCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryChannelsCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryChannelsCardComponent, selectors: [["app-delivery-channels-card"]], inputs: { form: "form", previewHtml: "previewHtml", mergeTags: "mergeTags" }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 2, consts: [[1, "card", 3, "formGroup"], [1, "head"], [1, "title"], [1, "sub"], [1, "channel-row"], ["type", "button", 1, "ch-card", 3, "ch-card--on"], [1, "empty-prev"], ["animationDuration", "200ms", 1, "tabs", 3, "selectedIndex"], ["type", "button", 1, "ch-card", 3, "click"], [1, "check"], [1, "ch-top"], [1, "ch-ico"], [1, "ch-name"], [1, "ch-desc"], [1, "ch-foot"], [1, "sel-yes"], [1, "sel-no"], [1, "empty-ico"], ["animationDuration", "200ms", 1, "tabs", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [1, "mock-email"], [1, "mock-sms-wrap"], [1, "mock-push"], [1, "mock-wa"], [1, "mock-h"], [1, "mock-body"], [1, "logo-ph"], [1, "html-prev", 3, "innerHTML"], [1, "foot"], [1, "mock-phone"], [1, "sms-bubble"], [1, "sms-title"], [1, "sms-txt"], [1, "sms-time"], [1, "sms-meta"], [1, "sms-warn"], [1, "push-top"], [1, "now"], [1, "push-title"], [1, "push-body"], [1, "wa-head"], [1, "wa-body"], [1, "wa-bubble"], [1, "wa-meta"]], template: function DeliveryChannelsCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Delivery Channels & Message Preview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Select channels and preview how your message will appear to recipients");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275repeaterCreate(7, DeliveryChannelsCardComponent_For_8_Template, 13, 7, "button", 5, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, DeliveryChannelsCardComponent_Conditional_9_Template, 5, 0, "div", 6)(10, DeliveryChannelsCardComponent_Conditional_10_Template, 3, 1, "mat-tab-group", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.channels);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.selected.length ? 9 : 10);
      }
    }, dependencies: [ReactiveFormsModule, NgControlStatusGroup, FormGroupDirective, MatTabsModule, MatTab, MatTabGroup], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.head[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.channel-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.ch-card[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  text-align: left;\n  cursor: pointer;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px 20px;\n  background: #fff;\n  transition:\n    border-color 0.2s,\n    background 0.2s,\n    box-shadow 0.2s;\n  position: relative;\n}\n.ch-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.ch-card--on[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border: 2px solid #6366f1;\n}\n.ch-top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.ch-ico[_ngcontent-%COMP%] {\n  font-size: 32px;\n  line-height: 1;\n  opacity: 0.55;\n}\n.ch-card--on[_ngcontent-%COMP%]   .ch-ico[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: none;\n}\n.ch-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.ch-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.ch-foot[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 11px;\n}\n.sel-no[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.sel-yes[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 22px;\n  height: 22px;\n  border-radius: 999px;\n  background: #16a34a;\n  color: #fff;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-prev[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  min-height: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #94a3b8;\n  font-size: 14px;\n}\n.empty-ico[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 8px;\n}\n.tabs[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n  .tabs .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e2e8f0;\n}\n  .tabs .mdc-tab--active .mdc-tab__text-label {\n  color: #6366f1 !important;\n  font-weight: 700;\n}\n.mock-email[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: #e2e8f0;\n  padding: 12px;\n  border-radius: 10px;\n}\n.mock-h[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n  margin-bottom: 4px;\n}\n.mock-body[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.logo-ph[_ngcontent-%COMP%] {\n  height: 40px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 11px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.html-prev[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n}\n.foot[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 12px;\n  border-top: 1px solid #e2e8f0;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.mock-sms-wrap[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mock-phone[_ngcontent-%COMP%] {\n  max-width: 280px;\n  margin: 0 auto;\n  background: #cbd5e1;\n  border-radius: 20px;\n  padding: 16px 12px 12px;\n}\n.sms-bubble[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 10px 12px;\n}\n.sms-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 13px;\n}\n.sms-txt[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 6px;\n  color: #334155;\n}\n.sms-time[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 11px;\n  color: #64748b;\n  margin-top: 8px;\n}\n.sms-meta[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 8px;\n}\n.sms-warn[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #b45309;\n  font-size: 12px;\n  margin-top: 6px;\n}\n.mock-push[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  max-width: 360px;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 12px 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.push-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n}\n.now[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.push-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-top: 4px;\n}\n.push-body[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #334155;\n  margin-top: 4px;\n}\n.mock-wa[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.wa-head[_ngcontent-%COMP%] {\n  background: #075e54;\n  color: #fff;\n  padding: 10px 14px;\n  font-weight: 600;\n}\n.wa-body[_ngcontent-%COMP%] {\n  background: #e5ddd5;\n  padding: 16px;\n  min-height: 120px;\n}\n.wa-bubble[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 90%;\n  background: #dcf8c6;\n  padding: 8px 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111;\n}\n.wa-meta[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 8px;\n  font-size: 10px;\n  color: #64748b;\n}\n/*# sourceMappingURL=delivery-channels-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeliveryChannelsCardComponent, [{
    type: Component,
    args: [{ selector: "app-delivery-channels-card", standalone: true, imports: [ReactiveFormsModule, MatTabsModule], template: `<div class="card" [formGroup]="form">\r
  <div class="head">\r
    <h2 class="title">Delivery Channels &amp; Message Preview</h2>\r
    <p class="sub">Select channels and preview how your message will appear to recipients</p>\r
  </div>\r
\r
  <div class="channel-row">\r
    @for (ch of channels; track ch.id) {\r
      <button type="button" class="ch-card" [class.ch-card--on]="isOn(ch.id)" (click)="toggle(ch.id)">\r
        @if (isOn(ch.id)) {\r
          <span class="check">\u2713</span>\r
        }\r
        <div class="ch-top">\r
          <span class="ch-ico">{{ ch.icon }}</span>\r
          <div>\r
            <div class="ch-name">{{ ch.name }}</div>\r
            <div class="ch-desc">{{ ch.desc }}</div>\r
          </div>\r
        </div>\r
        <div class="ch-foot">\r
          @if (isOn(ch.id)) {\r
            <span class="sel-yes">Selected \u2713</span>\r
          } @else {\r
            <span class="sel-no">Click to select</span>\r
          }\r
        </div>\r
      </button>\r
    }\r
  </div>\r
\r
  @if (!selected.length) {\r
    <div class="empty-prev">\r
      <div class="empty-ico">\u{1F4E1}</div>\r
      <p>Select a delivery channel above to preview your message</p>\r
    </div>\r
  } @else {\r
    <mat-tab-group [(selectedIndex)]="activeTab" class="tabs" animationDuration="200ms">\r
      @for (id of selected; track id) {\r
        <mat-tab [label]="tabHeader(id)">\r
          @if (id === 'EMAIL') {\r
            <div class="mock-email">\r
              <div class="mock-h">From: noreply&#64;consentiq.com</div>\r
              <div class="mock-h">To: john.doe&#64;example.com</div>\r
              <div class="mock-h">Subject: Action Required: Consent Request</div>\r
              <div class="mock-body">\r
                <div class="logo-ph">[Company Logo Area]</div>\r
                <div class="html-prev" [innerHTML]="processedEmailHtml()"></div>\r
                <div class="foot">ConsentIQ \xB7 Unsubscribe \xB7 Privacy Policy</div>\r
              </div>\r
            </div>\r
          }\r
          @if (id === 'SMS') {\r
            <div class="mock-sms-wrap">\r
              <div class="mock-phone">\r
                <div class="sms-bubble">\r
                  <div class="sms-title">ConsentIQ</div>\r
                  <div class="sms-txt">{{ smsBody() }}</div>\r
                </div>\r
                <div class="sms-time">9:41 AM</div>\r
              </div>\r
              <div class="sms-meta">{{ smsLen() }} / 160 characters</div>\r
              @if (smsLen() > 160) {\r
                <div class="sms-warn">\u26A0\uFE0F Message will be split into 2 SMS</div>\r
              }\r
            </div>\r
          }\r
          @if (id === 'PUSH') {\r
            <div class="mock-push">\r
              <div class="push-top">\r
                <span>\u{1F514} ConsentIQ</span>\r
                <span class="now">now</span>\r
              </div>\r
              <div class="push-title">Action Required</div>\r
              <div class="push-body">{{ pushBody() }}</div>\r
            </div>\r
          }\r
          @if (id === 'WHATSAPP') {\r
            <div class="mock-wa">\r
              <div class="wa-head">\u{1F7E2} ConsentIQ</div>\r
              <div class="wa-body">\r
                <div class="wa-bubble">{{ waBody() }}<span class="wa-meta">9:41 \u2713\u2713</span></div>\r
              </div>\r
            </div>\r
          }\r
        </mat-tab>\r
      }\r
    </mat-tab-group>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/maker/create-consent/delivery-channels-card/delivery-channels-card.component.scss */\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.head {\n  margin-bottom: 16px;\n}\n.title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.sub {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.channel-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.ch-card {\n  flex: 1 1 200px;\n  text-align: left;\n  cursor: pointer;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px 20px;\n  background: #fff;\n  transition:\n    border-color 0.2s,\n    background 0.2s,\n    box-shadow 0.2s;\n  position: relative;\n}\n.ch-card:hover {\n  border-color: #cbd5e1;\n}\n.ch-card--on {\n  background: #eef2ff;\n  border: 2px solid #6366f1;\n}\n.ch-top {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.ch-ico {\n  font-size: 32px;\n  line-height: 1;\n  opacity: 0.55;\n}\n.ch-card--on .ch-ico {\n  opacity: 1;\n  filter: none;\n}\n.ch-name {\n  font-weight: 700;\n  color: #0f172a;\n}\n.ch-desc {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.ch-foot {\n  margin-top: 10px;\n  font-size: 11px;\n}\n.sel-no {\n  color: #94a3b8;\n}\n.sel-yes {\n  color: #16a34a;\n  font-weight: 600;\n}\n.check {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 22px;\n  height: 22px;\n  border-radius: 999px;\n  background: #16a34a;\n  color: #fff;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-prev {\n  margin-top: 20px;\n  min-height: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #94a3b8;\n  font-size: 14px;\n}\n.empty-ico {\n  font-size: 32px;\n  margin-bottom: 8px;\n}\n.tabs {\n  margin-top: 20px;\n}\n::ng-deep .tabs .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e2e8f0;\n}\n::ng-deep .tabs .mdc-tab--active .mdc-tab__text-label {\n  color: #6366f1 !important;\n  font-weight: 700;\n}\n.mock-email {\n  margin-top: 12px;\n  background: #e2e8f0;\n  padding: 12px;\n  border-radius: 10px;\n}\n.mock-h {\n  font-size: 12px;\n  color: #475569;\n  margin-bottom: 4px;\n}\n.mock-body {\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.logo-ph {\n  height: 40px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 11px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.html-prev {\n  font-size: 14px;\n  line-height: 1.7;\n}\n.foot {\n  margin-top: 16px;\n  padding-top: 12px;\n  border-top: 1px solid #e2e8f0;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.mock-sms-wrap {\n  margin-top: 12px;\n}\n.mock-phone {\n  max-width: 280px;\n  margin: 0 auto;\n  background: #cbd5e1;\n  border-radius: 20px;\n  padding: 16px 12px 12px;\n}\n.sms-bubble {\n  background: #fff;\n  border-radius: 12px;\n  padding: 10px 12px;\n}\n.sms-title {\n  font-weight: 700;\n  font-size: 13px;\n}\n.sms-txt {\n  font-size: 13px;\n  margin-top: 6px;\n  color: #334155;\n}\n.sms-time {\n  text-align: right;\n  font-size: 11px;\n  color: #64748b;\n  margin-top: 8px;\n}\n.sms-meta {\n  text-align: center;\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 8px;\n}\n.sms-warn {\n  text-align: center;\n  color: #b45309;\n  font-size: 12px;\n  margin-top: 6px;\n}\n.mock-push {\n  margin-top: 12px;\n  max-width: 360px;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 12px 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.push-top {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #64748b;\n}\n.now {\n  font-size: 11px;\n}\n.push-title {\n  font-weight: 700;\n  margin-top: 4px;\n}\n.push-body {\n  font-size: 13px;\n  color: #334155;\n  margin-top: 4px;\n}\n.mock-wa {\n  margin-top: 12px;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.wa-head {\n  background: #075e54;\n  color: #fff;\n  padding: 10px 14px;\n  font-weight: 600;\n}\n.wa-body {\n  background: #e5ddd5;\n  padding: 16px;\n  min-height: 120px;\n}\n.wa-bubble {\n  display: inline-block;\n  max-width: 90%;\n  background: #dcf8c6;\n  padding: 8px 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111;\n}\n.wa-meta {\n  float: right;\n  margin-left: 8px;\n  font-size: 10px;\n  color: #64748b;\n}\n/*# sourceMappingURL=delivery-channels-card.component.css.map */\n"] }]
  }], null, { form: [{
    type: Input,
    args: [{ required: true }]
  }], previewHtml: [{
    type: Input,
    args: [{ required: true }]
  }], mergeTags: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryChannelsCardComponent, { className: "DeliveryChannelsCardComponent", filePath: "src/app/features/maker/create-consent/delivery-channels-card/delivery-channels-card.component.ts", lineNumber: 24 });
})();

// src/app/features/maker/create-consent/audit-activity-card/audit-activity-card.component.ts
var _c04 = () => [1, 2, 3, 4, 5];
var _forTrack04 = ($index, $item) => $item.id;
function AuditActivityCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Save a draft to see audit entries for this consent.");
    \u0275\u0275elementEnd();
  }
}
function AuditActivityCardComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function AuditActivityCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, AuditActivityCardComponent_Conditional_7_For_2_Template, 1, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c04));
  }
}
function AuditActivityCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " Failed to load activity. ");
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function AuditActivityCardComponent_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(3, "Retry");
    \u0275\u0275elementEnd()();
  }
}
function AuditActivityCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No activity yet.");
    \u0275\u0275elementEnd();
  }
}
function AuditActivityCardComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "timeAgo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.iconFor(e_r3.action));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r3.action.replaceAll("_", " "));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r3.description);
    \u0275\u0275advance();
    \u0275\u0275property("title", e_r3.performedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, e_r3.performedAt));
  }
}
function AuditActivityCardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, AuditActivityCardComponent_Conditional_10_For_2_Template, 11, 7, "div", 11, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.entries);
  }
}
var AuditActivityCardComponent = class _AuditActivityCardComponent {
  constructor() {
    this.audit = inject(AuditService);
    this.logger = inject(LoggerService);
    this.consentDbId = null;
    this.entries = [];
    this.loading = false;
    this.error = false;
  }
  ngOnChanges(changes) {
    if (changes["consentDbId"]) {
      this.load();
    }
  }
  load() {
    if (!this.consentDbId) {
      this.entries = [];
      return;
    }
    this.loading = true;
    this.error = false;
    this.audit.getConsentAuditTrail(this.consentDbId).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data) {
          this.entries = res.data.slice(0, 5);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = true;
        this.logger.error("AuditActivityCard", "load failed", err);
      }
    });
  }
  iconFor(action) {
    switch (action) {
      case "CONSENT_CREATED":
        return "\u{1F535}";
      case "CONSENT_SUBMITTED":
        return "\u{1F7E1}";
      case "CONSENT_APPROVED":
        return "\u{1F7E2}";
      case "CONSENT_REJECTED":
        return "\u{1F534}";
      case "CONSENT_PUBLISHED":
        return "\u{1F7E3}";
      case "CONSENT_REVISION_REQUESTED":
        return "\u{1F7E0}";
      case "CONSENT_UPDATED":
        return "\u{1F537}";
      case "CONSENT_DRAFT_SAVED":
        return "\u26AB";
      default:
        return "\u26AA";
    }
  }
  static {
    this.\u0275fac = function AuditActivityCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditActivityCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditActivityCardComponent, selectors: [["app-audit-activity-card"]], inputs: { consentDbId: "consentDbId" }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 1, consts: [[1, "card"], [1, "head"], [1, "title"], ["routerLink", "/maker/audit", 1, "link"], [1, "muted"], [1, "skel-list"], [1, "err"], [1, "muted", "center"], [1, "timeline"], [1, "skel-row"], ["type", "button", "mat-stroked-button", "", 3, "click"], [1, "tl-row"], [1, "tl-dot"], [1, "tl-body"], [1, "tl-action"], [1, "tl-desc"], [1, "tl-time", 3, "title"]], template: function AuditActivityCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "\u{1F550} Recent Activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 3);
        \u0275\u0275text(5, "View All \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, AuditActivityCardComponent_Conditional_6_Template, 2, 0, "p", 4)(7, AuditActivityCardComponent_Conditional_7_Template, 3, 1, "div", 5)(8, AuditActivityCardComponent_Conditional_8_Template, 4, 0, "div", 6)(9, AuditActivityCardComponent_Conditional_9_Template, 2, 0, "p", 7)(10, AuditActivityCardComponent_Conditional_10_Template, 3, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(!ctx.consentDbId ? 6 : ctx.loading ? 7 : ctx.error ? 8 : !ctx.entries.length ? 9 : 10);
      }
    }, dependencies: [MatButtonModule, MatButton, TimeAgoPipe, RouterLink], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6366f1;\n  text-decoration: none;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n}\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 0;\n}\n.skel-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skel-row[_ngcontent-%COMP%] {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #b91c1c;\n  font-size: 14px;\n}\n.timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tl-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 36px 1fr auto;\n  gap: 12px;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.tl-dot[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n}\n.tl-action[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 13px;\n  color: #0f172a;\n}\n.tl-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.tl-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=audit-activity-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditActivityCardComponent, [{
    type: Component,
    args: [{ selector: "app-audit-activity-card", standalone: true, imports: [MatButtonModule, TimeAgoPipe, RouterLink], template: `<div class="card">\r
  <div class="head">\r
    <h2 class="title">\u{1F550} Recent Activity</h2>\r
    <a routerLink="/maker/audit" class="link">View All \u2192</a>\r
  </div>\r
\r
  @if (!consentDbId) {\r
    <p class="muted">Save a draft to see audit entries for this consent.</p>\r
  } @else if (loading) {\r
    <div class="skel-list">\r
      @for (x of [1, 2, 3, 4, 5]; track x) {\r
        <div class="skel-row"></div>\r
      }\r
    </div>\r
  } @else if (error) {\r
    <div class="err">\r
      Failed to load activity.\r
      <button type="button" mat-stroked-button (click)="load()">Retry</button>\r
    </div>\r
  } @else if (!entries.length) {\r
    <p class="muted center">No activity yet.</p>\r
  } @else {\r
    <div class="timeline">\r
      @for (e of entries; track e.id) {\r
        <div class="tl-row">\r
          <div class="tl-dot">{{ iconFor(e.action) }}</div>\r
          <div class="tl-body">\r
            <div class="tl-action">{{ e.action.replaceAll('_', ' ') }}</div>\r
            <div class="tl-desc">{{ e.description }}</div>\r
          </div>\r
          <div class="tl-time" [title]="e.performedAt">{{ e.performedAt | timeAgo }}</div>\r
        </div>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/maker/create-consent/audit-activity-card/audit-activity-card.component.scss */\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.link {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6366f1;\n  text-decoration: none;\n}\n.muted {\n  color: #94a3b8;\n  font-size: 14px;\n}\n.center {\n  text-align: center;\n  padding: 16px 0;\n}\n.skel-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skel-row {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.2s ease-in-out infinite;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.err {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #b91c1c;\n  font-size: 14px;\n}\n.timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tl-row {\n  display: grid;\n  grid-template-columns: 36px 1fr auto;\n  gap: 12px;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.tl-dot {\n  font-size: 16px;\n  text-align: center;\n}\n.tl-action {\n  font-weight: 700;\n  font-size: 13px;\n  color: #0f172a;\n}\n.tl-desc {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.tl-time {\n  font-size: 12px;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=audit-activity-card.component.css.map */\n"] }]
  }], null, { consentDbId: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditActivityCardComponent, { className: "AuditActivityCardComponent", filePath: "src/app/features/maker/create-consent/audit-activity-card/audit-activity-card.component.ts", lineNumber: 16 });
})();

// src/app/features/maker/create-consent/create-consent.component.ts
function CreateConsentComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Saving\u2026");
    \u0275\u0275elementEnd();
  }
}
function CreateConsentComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Last saved: ", ctx_r1.lastSaved(), "");
  }
}
function CreateConsentComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div")(2, "div", 20);
    \u0275\u0275text(3, "\u23F3 Pending Checker Approval ");
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "\u25CF Awaiting");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7, "Your consent is being reviewed by the Checker.");
    \u0275\u0275elementEnd()()();
  }
}
function CreateConsentComponent_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "blockquote", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u201C", ctx_r1.revisionMessage(), "\u201D");
  }
}
function CreateConsentComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 20);
    \u0275\u0275text(2, "\u21A9 Revision Requested by Checker");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CreateConsentComponent_Conditional_17_Conditional_3_Template, 2, 1, "blockquote", 23);
    \u0275\u0275elementStart(4, "p", 22);
    \u0275\u0275text(5, "Please update and resubmit.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.revisionMessage() ? 3 : -1);
  }
}
var CreateConsentComponent = class _CreateConsentComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.api = inject(ConsentService);
    this.mergeApi = inject(MergeTagService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.form = this.fb.nonNullable.group({
      consentName: ["", [Validators.required, Validators.maxLength(200)]],
      description: ["", [Validators.required, Validators.maxLength(1e3)]],
      category: this.fb.nonNullable.control("MARKETING", Validators.required),
      validityPreset: this.fb.nonNullable.control("365"),
      validityStartDate: [""],
      validityEndDate: [""],
      consentMessage: [""],
      deliveryChannels: this.fb.nonNullable.control([]),
      tagsUsed: this.fb.nonNullable.control([])
    });
    this.mergeTags = [];
    this.grouped = {};
    this.consentDbId = signal(null);
    this.consentIdPreview = signal("");
    this.idLoading = signal(false);
    this.loadedStatus = signal(null);
    this.lastSaved = signal(null);
    this.autosaveBusy = signal(false);
    this.formSubmitted = signal(false);
    this.previewHtml = signal("");
    this.viewOnly = signal(false);
    this.revisionMessage = signal("");
    this.subs = new Subscription();
  }
  ngOnInit() {
    this.subs.add(this.mergeApi.getMergeTags().subscribe({
      next: (tags) => {
        this.mergeTags = tags;
        this.grouped = groupMergeTagsByCategory(tags);
      },
      error: () => {
      }
    }));
    this.subs.add(this.form.controls.consentMessage.valueChanges.pipe(debounceTime(300)).subscribe((v) => {
      this.previewHtml.set(v || "");
    }));
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.loadConsent(Number(idParam));
    } else {
      const dup = history.state?.["from"];
      if (dup) {
        this.applyDuplicateAsNew(dup);
      } else {
        this.prefetchConsentId();
      }
    }
    this.viewOnly.set(this.route.snapshot.queryParamMap.get("view") === "1");
    this.subs.add(this.route.queryParamMap.subscribe((q) => {
      this.viewOnly.set(q.get("view") === "1");
    }));
    this.autoTimer = setInterval(() => void this.tryAutoSave(), 12e4);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
    }
  }
  applyDuplicateAsNew(c) {
    this.consentDbId.set(null);
    this.loadedStatus.set(null);
    this.revisionMessage.set("");
    this.prefetchConsentId();
    const preset = this.inferPreset(c);
    this.form.reset({
      consentName: `${c.consentName} (Copy)`,
      description: c.description || "",
      category: c.category,
      validityPreset: preset,
      validityStartDate: c.validityStartDate ? String(c.validityStartDate).slice(0, 10) : "",
      validityEndDate: c.validityEndDate ? String(c.validityEndDate).slice(0, 10) : "",
      consentMessage: c.consentMessage || "",
      deliveryChannels: [...c.deliveryChannels || []],
      tagsUsed: [...c.tagsUsed || []]
    });
    this.previewHtml.set(c.consentMessage || "");
  }
  prefetchConsentId() {
    this.idLoading.set(true);
    this.subs.add(this.api.generateConsentId().subscribe({
      next: (res) => {
        this.idLoading.set(false);
        if (res.success && res.data?.consentId) {
          this.consentIdPreview.set(res.data.consentId);
        }
      },
      error: () => {
        this.idLoading.set(false);
      }
    }));
  }
  loadConsent(id) {
    this.subs.add(this.api.getConsentById(id).subscribe({
      next: (res) => {
        if (!res.success || !res.data) {
          return;
        }
        const c = res.data;
        this.patchFromConsent(c);
      },
      error: () => {
        void this.router.navigate(["/maker/consents"]);
      }
    }));
  }
  patchFromConsent(c) {
    this.consentDbId.set(c.id);
    this.consentIdPreview.set(c.consentId);
    this.loadedStatus.set(c.status);
    this.revisionMessage.set(c.revisionMessage || "");
    const preset = this.inferPreset(c);
    this.form.patchValue({
      consentName: c.consentName,
      description: c.description || "",
      category: c.category,
      validityPreset: preset,
      validityStartDate: c.validityStartDate ? String(c.validityStartDate).slice(0, 10) : "",
      validityEndDate: c.validityEndDate ? String(c.validityEndDate).slice(0, 10) : "",
      consentMessage: c.consentMessage || "",
      deliveryChannels: [...c.deliveryChannels || []],
      tagsUsed: [...c.tagsUsed || []]
    });
    this.previewHtml.set(c.consentMessage || "");
    if (this.isReadOnlyStatus(c.status) || this.viewOnly()) {
      this.form.disable({ emitEvent: false });
    }
  }
  inferPreset(c) {
    if (c.validityStartDate && c.validityEndDate) {
      return "custom";
    }
    const d = c.validityPeriodDays;
    const presets = [30, 60, 90, 180, 365, 730];
    if (d != null && presets.includes(d)) {
      return String(d);
    }
    return "365";
  }
  isReadOnlyStatus(s) {
    return s === "PENDING_APPROVAL" || s === "APPROVED" || s === "PUBLISHED" || s === "REJECTED";
  }
  editable() {
    const s = this.loadedStatus();
    if (this.viewOnly()) {
      return false;
    }
    return !s || s === "DRAFT" || s === "REVISION_REQUESTED";
  }
  nameOk() {
    return !!this.form.controls.consentName.value?.trim();
  }
  canSubmit() {
    const ch = this.form.controls.deliveryChannels.value || [];
    const msg = (this.form.controls.consentMessage.value || "").replace(/<[^>]+>/g, "").trim();
    return this.nameOk() && ch.length > 0 && !!msg && !!this.consentDbId();
  }
  onTagsFromMessage(keys) {
    const cur = /* @__PURE__ */ new Set([...this.form.controls.tagsUsed.value || []]);
    for (const k of keys) {
      cur.add(k);
    }
    this.form.controls.tagsUsed.setValue(Array.from(cur));
  }
  buildPayload() {
    const v = this.form.getRawValue();
    let days = Number.parseInt(v.validityPreset, 10);
    let start;
    let end;
    if (v.validityPreset === "custom") {
      start = v.validityStartDate || void 0;
      end = v.validityEndDate || void 0;
      if (start && end) {
        const d0 = new Date(start);
        const d1 = new Date(end);
        days = Math.max(1, Math.ceil((d1.getTime() - d0.getTime()) / 864e5));
      } else {
        days = 365;
      }
    }
    if (!Number.isFinite(days) || days < 1) {
      days = 365;
    }
    return {
      consentName: v.consentName.trim(),
      description: v.description,
      category: v.category,
      validityPeriodDays: days,
      validityStartDate: v.validityPreset === "custom" ? start : void 0,
      validityEndDate: v.validityPreset === "custom" ? end : void 0,
      consentMessage: v.consentMessage || "",
      deliveryChannels: [...v.deliveryChannels || []],
      tagsUsed: [...v.tagsUsed || []],
      searchTags: (v.tagsUsed || []).join(",")
    };
  }
  saveDraft() {
    if (!this.editable()) {
      return;
    }
    this.formSubmitted.set(true);
    if (this.form.controls.consentName.invalid) {
      this.notify.warning("Validation", "Please enter a consent name before saving.");
      return;
    }
    this.form.controls.consentName.markAsTouched();
    const payload = this.buildPayload();
    const id = this.consentDbId();
    if (!id) {
      this.subs.add(this.api.createConsent(payload).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.consentDbId.set(res.data.id);
            this.consentIdPreview.set(res.data.consentId);
            this.loadedStatus.set(res.data.status);
            this.lastSaved.set((/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour12: false }));
            this.notify.success("Draft saved", res.message || "Draft created.");
            void this.router.navigate(["/maker/consents", res.data.id, "edit"], { replaceUrl: true });
          }
        }
      }));
      return;
    }
    this.autosaveBusy.set(true);
    this.subs.add(this.api.saveDraft(id, payload).subscribe({
      next: (res) => {
        this.autosaveBusy.set(false);
        if (res.success && res.data) {
          this.lastSaved.set((/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour12: false }));
          this.notify.success("Draft saved", res.message || "Saved.");
        }
      },
      error: () => {
        this.autosaveBusy.set(false);
      }
    }));
  }
  tryAutoSave() {
    if (!this.editable() || !this.consentDbId() || !this.nameOk()) {
      return;
    }
    this.logger.debug("CreateConsent", "Auto-save tick");
    this.autosaveBusy.set(true);
    const id = this.consentDbId();
    this.subs.add(this.api.saveDraft(id, this.buildPayload()).subscribe({
      next: (res) => {
        this.autosaveBusy.set(false);
        if (res.success) {
          this.lastSaved.set((/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour12: false }));
        }
      },
      error: () => {
        this.autosaveBusy.set(false);
      }
    }));
  }
  submitForApproval() {
    this.formSubmitted.set(true);
    this.form.markAllAsTouched();
    if (!this.canSubmit()) {
      this.notify.warning("Almost there", "Add a message, pick at least one channel, and ensure the name is set.");
      return;
    }
    const id = this.consentDbId();
    if (!id) {
      return;
    }
    this.subs.add(this.api.saveDraft(id, this.buildPayload()).subscribe({
      next: () => {
        this.subs.add(this.api.submitForApproval(id).subscribe({
          next: (res) => {
            if (res.success && res.data) {
              this.loadedStatus.set(res.data.status);
              this.notify.success("Submitted", res.message || "Submitted for approval.");
              void this.router.navigate(["/maker/consents", id, "edit"], { replaceUrl: true });
            }
          }
        }));
      }
    }));
  }
  isCreatePage() {
    return !this.route.snapshot.paramMap.get("id");
  }
  progress() {
    const d = this.form.controls.description.value?.trim() && this.form.controls.category.valid;
    const m = !!(this.form.controls.consentMessage.value || "").replace(/<[^>]+>/g, "").trim();
    const c = (this.form.controls.deliveryChannels.value || []).length > 0;
    return {
      details: this.nameOk() && !!d,
      message: m,
      channels: c,
      ready: this.canSubmit()
    };
  }
  static {
    this.\u0275fac = function CreateConsentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateConsentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateConsentComponent, selectors: [["app-create-consent"]], decls: 39, vars: 24, consts: [["dir", "ltr", 1, "page"], [1, "page-head"], [1, "crumb"], [1, "ttl"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 1, "ciq-btn-secondary", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "ciq-btn-primary", 3, "click", "disabled"], [1, "autosave"], [1, "muted"], [1, "banner", "banner--amber"], [1, "banner", "banner--orange"], [1, "grid-top"], [1, "col-left", 3, "form", "status", "consentIdPreview", "idLoading", "submitted"], [1, "col-right", 3, "tagsUsedChange", "form", "grouped", "allTags"], [1, "block", 3, "form", "previewHtml", "mergeTags"], [1, "block", 3, "consentDbId"], [1, "sticky-actions"], [1, "prog"], [1, "act"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], [1, "banner-title"], [1, "dot"], [1, "banner-text"], [1, "rev-q"]], template: function CreateConsentComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
        \u0275\u0275text(4, "Maker / Create Consent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function CreateConsentComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveDraft());
        });
        \u0275\u0275text(9, " \u{1F4BE} Save Draft ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 6);
        \u0275\u0275listener("click", function CreateConsentComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submitForApproval());
        });
        \u0275\u0275text(11, " \u{1F4E4} Submit for Approval ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275text(13, " \u{1F4BE} Draft auto-saves every 2 minutes. ");
        \u0275\u0275template(14, CreateConsentComponent_Conditional_14_Template, 2, 0, "span", 8)(15, CreateConsentComponent_Conditional_15_Template, 2, 1, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, CreateConsentComponent_Conditional_16_Template, 8, 0, "div", 9)(17, CreateConsentComponent_Conditional_17_Template, 6, 1, "div", 10);
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275element(19, "app-consent-details-card", 12);
        \u0275\u0275elementStart(20, "app-consent-message-card", 13);
        \u0275\u0275listener("tagsUsedChange", function CreateConsentComponent_Template_app_consent_message_card_tagsUsedChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTagsFromMessage($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(21, "app-delivery-channels-card", 14)(22, "app-audit-activity-card", 15);
        \u0275\u0275elementStart(23, "div", 16)(24, "div", 17);
        \u0275\u0275declareLet(25);
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 18)(35, "button", 5);
        \u0275\u0275listener("click", function CreateConsentComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveDraft());
        });
        \u0275\u0275text(36, " \u{1F4BE} Save Draft ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 19);
        \u0275\u0275listener("click", function CreateConsentComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submitForApproval());
        });
        \u0275\u0275text(38, " \u{1F4E4} Submit for Approval ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isCreatePage() ? "Create New Consent" : "Edit Consent");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.nameOk() || !ctx.editable());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.canSubmit() || !ctx.editable());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.autosaveBusy() ? 14 : ctx.lastSaved() ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loadedStatus() === "PENDING_APPROVAL" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loadedStatus() === "REVISION_REQUESTED" ? 17 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("form", ctx.form)("status", ctx.loadedStatus())("consentIdPreview", ctx.consentIdPreview())("idLoading", ctx.idLoading())("submitted", ctx.formSubmitted());
        \u0275\u0275advance();
        \u0275\u0275property("form", ctx.form)("grouped", ctx.grouped)("allTags", ctx.mergeTags);
        \u0275\u0275advance();
        \u0275\u0275property("form", ctx.form)("previewHtml", ctx.previewHtml())("mergeTags", ctx.mergeTags);
        \u0275\u0275advance();
        \u0275\u0275property("consentDbId", ctx.consentDbId());
        const p_r3 = ctx.progress();
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", p_r3.details ? "\u25CF" : "\u25CB", " Details");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", p_r3.message ? "\u25CF" : "\u25CB", " Message");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", p_r3.channels ? "\u25CF" : "\u25CB", " Channels");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", p_r3.ready ? "\u25CF" : "\u25CB", " Ready");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.nameOk() || !ctx.editable());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.canSubmit() || !ctx.editable());
      }
    }, dependencies: [
      ReactiveFormsModule,
      MatButtonModule,
      MatButton,
      Dir,
      ConsentDetailsCardComponent,
      ConsentMessageCardComponent,
      DeliveryChannelsCardComponent,
      AuditActivityCardComponent
    ], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto 96px;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n.crumb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n.ttl[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.autosave[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-bottom: 16px;\n}\n.autosave[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.banner[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 16px 18px;\n  margin-bottom: 16px;\n}\n.banner--amber[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fcd34d;\n}\n.banner--orange[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border: 1px solid #fdba74;\n}\n.banner-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #92400e;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.banner--orange[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n  color: #9a3412;\n}\n.dot[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #d97706;\n}\n.banner-text[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 14px;\n  color: #78350f;\n}\n.grid-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);\n  gap: 20px;\n  align-items: stretch;\n  margin-bottom: 20px;\n}\n@media (max-width: 1024px) {\n  .grid-top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.block[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n}\n.sticky-actions[_ngcontent-%COMP%] {\n  position: fixed;\n  left: calc(var(--sidebar-width) + 0px);\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 12px 24px;\n  background: #fff;\n  border-top: 1px solid #e2e8f0;\n  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 900px) {\n  .sticky-actions[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.prog[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.prog[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-weight: 600;\n}\n.act[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.rev-q[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  padding: 10px 12px;\n  background: rgba(255, 255, 255, 0.65);\n  border-left: 3px solid #ea580c;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #7c2d12;\n}\n/*# sourceMappingURL=create-consent.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateConsentComponent, [{
    type: Component,
    args: [{ selector: "app-create-consent", standalone: true, imports: [
      ReactiveFormsModule,
      MatButtonModule,
      ConsentDetailsCardComponent,
      ConsentMessageCardComponent,
      DeliveryChannelsCardComponent,
      AuditActivityCardComponent
    ], template: `<div class="page" dir="ltr">\r
  <div class="page-head">\r
    <div>\r
      <div class="crumb">Maker / Create Consent</div>\r
      <h1 class="ttl">{{ isCreatePage() ? 'Create New Consent' : 'Edit Consent' }}</h1>\r
    </div>\r
    <div class="actions">\r
      <button\r
        mat-stroked-button\r
        type="button"\r
        class="ciq-btn-secondary"\r
        [disabled]="!nameOk() || !editable()"\r
        (click)="saveDraft()"\r
      >\r
        \u{1F4BE} Save Draft\r
      </button>\r
      <button\r
        mat-flat-button\r
        color="primary"\r
        type="button"\r
        class="ciq-btn-primary"\r
        [disabled]="!canSubmit() || !editable()"\r
        (click)="submitForApproval()"\r
      >\r
        \u{1F4E4} Submit for Approval\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="autosave">\r
    \u{1F4BE} Draft auto-saves every 2 minutes.\r
    @if (autosaveBusy()) {\r
      <span class="muted">Saving\u2026</span>\r
    } @else if (lastSaved()) {\r
      <span class="muted">Last saved: {{ lastSaved() }}</span>\r
    }\r
  </div>\r
\r
  @if (loadedStatus() === 'PENDING_APPROVAL') {\r
    <div class="banner banner--amber">\r
      <div>\r
        <div class="banner-title">\u23F3 Pending Checker Approval <span class="dot">\u25CF Awaiting</span></div>\r
        <p class="banner-text">Your consent is being reviewed by the Checker.</p>\r
      </div>\r
    </div>\r
  }\r
\r
  @if (loadedStatus() === 'REVISION_REQUESTED') {\r
    <div class="banner banner--orange">\r
      <div class="banner-title">\u21A9 Revision Requested by Checker</div>\r
      @if (revisionMessage()) {\r
        <blockquote class="rev-q">\u201C{{ revisionMessage() }}\u201D</blockquote>\r
      }\r
      <p class="banner-text">Please update and resubmit.</p>\r
    </div>\r
  }\r
\r
  <div class="grid-top">\r
    <app-consent-details-card\r
      class="col-left"\r
      [form]="form"\r
      [status]="loadedStatus()"\r
      [consentIdPreview]="consentIdPreview()"\r
      [idLoading]="idLoading()"\r
      [submitted]="formSubmitted()"\r
    />\r
    <app-consent-message-card\r
      class="col-right"\r
      [form]="form"\r
      [grouped]="grouped"\r
      [allTags]="mergeTags"\r
      (tagsUsedChange)="onTagsFromMessage($event)"\r
    />\r
  </div>\r
\r
  <app-delivery-channels-card class="block" [form]="form" [previewHtml]="previewHtml()" [mergeTags]="mergeTags" />\r
\r
  <app-audit-activity-card class="block" [consentDbId]="consentDbId()" />\r
\r
  <div class="sticky-actions">\r
    <div class="prog">\r
      @let p = progress();\r
      <span>{{ p.details ? '\u25CF' : '\u25CB' }} Details</span>\r
      <span>{{ p.message ? '\u25CF' : '\u25CB' }} Message</span>\r
      <span>{{ p.channels ? '\u25CF' : '\u25CB' }} Channels</span>\r
      <span>{{ p.ready ? '\u25CF' : '\u25CB' }} Ready</span>\r
    </div>\r
    <div class="act">\r
      <button mat-stroked-button type="button" class="ciq-btn-secondary" [disabled]="!nameOk() || !editable()" (click)="saveDraft()">\r
        \u{1F4BE} Save Draft\r
      </button>\r
      <button mat-flat-button color="primary" type="button" [disabled]="!canSubmit() || !editable()" (click)="submitForApproval()">\r
        \u{1F4E4} Submit for Approval\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/maker/create-consent/create-consent.component.scss */\n.page {\n  max-width: 1280px;\n  margin: 0 auto 96px;\n}\n.page-head {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n.crumb {\n  font-size: 13px;\n  color: #64748b;\n}\n.ttl {\n  margin: 4px 0 0;\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.actions {\n  display: flex;\n  gap: 10px;\n}\n.autosave {\n  font-size: 12px;\n  color: #64748b;\n  margin-bottom: 16px;\n}\n.autosave .muted {\n  margin-left: 8px;\n}\n.banner {\n  border-radius: 12px;\n  padding: 16px 18px;\n  margin-bottom: 16px;\n}\n.banner--amber {\n  background: #fffbeb;\n  border: 1px solid #fcd34d;\n}\n.banner--orange {\n  background: #fff7ed;\n  border: 1px solid #fdba74;\n}\n.banner-title {\n  font-weight: 700;\n  color: #92400e;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.banner--orange .banner-title {\n  color: #9a3412;\n}\n.dot {\n  font-size: 12px;\n  color: #d97706;\n}\n.banner-text {\n  margin: 6px 0 0;\n  font-size: 14px;\n  color: #78350f;\n}\n.grid-top {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);\n  gap: 20px;\n  align-items: stretch;\n  margin-bottom: 20px;\n}\n@media (max-width: 1024px) {\n  .grid-top {\n    grid-template-columns: 1fr;\n  }\n}\n.block {\n  display: block;\n  margin-bottom: 20px;\n}\n.sticky-actions {\n  position: fixed;\n  left: calc(var(--sidebar-width) + 0px);\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 12px 24px;\n  background: #fff;\n  border-top: 1px solid #e2e8f0;\n  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 900px) {\n  .sticky-actions {\n    left: 0;\n  }\n}\n.prog {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.prog .on {\n  color: #6366f1;\n  font-weight: 600;\n}\n.act {\n  display: flex;\n  gap: 10px;\n}\n.rev-q {\n  margin: 8px 0 0;\n  padding: 10px 12px;\n  background: rgba(255, 255, 255, 0.65);\n  border-left: 3px solid #ea580c;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #7c2d12;\n}\n/*# sourceMappingURL=create-consent.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateConsentComponent, { className: "CreateConsentComponent", filePath: "src/app/features/maker/create-consent/create-consent.component.ts", lineNumber: 32 });
})();
export {
  CreateConsentComponent
};
//# sourceMappingURL=chunk-3KVYILZM.js.map
