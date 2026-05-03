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
  ɵNgSelectMultipleOption
} from "./chunk-3TIZOPIA.js";
import {
  NotificationService
} from "./chunk-4RAWTRTP.js";
import {
  Component,
  Dir,
  LoggerService,
  MatButton,
  MatButtonModule,
  computed,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// src/app/features/admin/admin-capture-consent/admin-capture-consent.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminCaptureConsentComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Registered email: ", c_r1.email || "\u2014", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Customer ID: ", c_r1.customerId, " \xB7 ", c_r1.mobileNumber, "");
  }
}
function AdminCaptureConsentComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275property("value", t_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.consentName);
  }
}
function AdminCaptureConsentComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r3 = ctx.$implicit;
    \u0275\u0275property("value", ch_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ch_r3);
  }
}
function AdminCaptureConsentComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.infoMessage());
  }
}
function AdminCaptureConsentComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 15);
  }
}
function AdminCaptureConsentComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Search for a customer in the left panel to attach this record.");
    \u0275\u0275elementEnd();
  }
}
function AdminCaptureConsentComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275property("value", t_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5.consentName);
  }
}
function AdminCaptureConsentComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    \u0275\u0275property("value", m_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r6);
  }
}
function AdminCaptureConsentComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("value", s_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7);
  }
}
var DELIVERY_OPTIONS = ["WhatsApp", "SMS", "Email"];
var MODE_OPTIONS = ["Digital In-person", "Verbal", "Written"];
var SOURCE_OPTIONS = ["Branch Walk-in", "Call Centre", "Field Agent"];
var AdminCaptureConsentComponent = class _AdminCaptureConsentComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.templates = signal([]);
    this.searchQuery = signal("");
    this.searchBusy = signal(false);
    this.customer = signal(null);
    this.leftTemplateId = signal(null);
    this.leftDelivery = signal("");
    this.lastInviteLink = signal("");
    this.sendBusy = signal(false);
    this.rightTemplateId = signal(null);
    this.rightMode = signal("");
    this.rightSource = signal("");
    this.evidenceRef = signal("");
    this.recordBusy = signal(false);
    this.deliveryOptions = DELIVERY_OPTIONS;
    this.modeOptions = MODE_OPTIONS;
    this.sourceOptions = SOURCE_OPTIONS;
    this.infoMessage = computed(() => {
      const d = this.leftDelivery();
      const t = this.selectedLeftTemplateName();
      if (!d || !t) {
        return "";
      }
      return `We will send a consent request to the customer's registered email, asking for their permission to contact them via ${d} for ${t}.`;
    });
    this.canCopyLink = computed(() => !!this.lastInviteLink().trim());
  }
  ngOnInit() {
    this.adminApi.listConsentTemplates().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.templates.set(res.data);
        }
      },
      error: (err) => {
        this.logger.error("AdminCaptureConsent", "templates failed", err);
        this.notify.error("Templates", err?.error?.message || "Could not load consent templates.");
      }
    });
  }
  selectedLeftTemplateName() {
    const id = this.leftTemplateId();
    if (id == null) {
      return "";
    }
    return this.templates().find((x) => x.id === id)?.consentName ?? "";
  }
  selectedRightConsentType() {
    const id = this.rightTemplateId();
    if (id == null) {
      return "";
    }
    return this.templates().find((x) => x.id === id)?.consentName ?? "";
  }
  onSearch() {
    const q = this.searchQuery().trim();
    if (!q) {
      this.notify.warning("Search", "Enter a Customer ID or mobile number.");
      return;
    }
    this.searchBusy.set(true);
    this.customer.set(null);
    this.lastInviteLink.set("");
    this.adminApi.captureSearch(q).subscribe({
      next: (res) => {
        this.searchBusy.set(false);
        if (!res.success || !res.data) {
          this.notify.warning("Search", res.message || "No customer found.");
          return;
        }
        this.customer.set(res.data);
      },
      error: (err) => {
        this.searchBusy.set(false);
        const msg = err?.error?.message || err?.message || "Search failed.";
        this.logger.error("AdminCaptureConsent", "search failed", err);
        this.notify.error("Search", msg);
      }
    });
  }
  copyLink() {
    const link = this.lastInviteLink();
    if (!link) {
      this.notify.info("Copy link", "Send the request first to generate a link.");
      return;
    }
    void navigator.clipboard.writeText(link).then(() => this.notify.success("Copied", "Consent link copied to clipboard."), () => this.notify.error("Copy failed", "Clipboard access was denied."));
  }
  sendLink() {
    const cust = this.customer();
    const tid = this.leftTemplateId();
    const delivery = this.leftDelivery();
    if (!cust) {
      this.notify.warning("Send", "Search and select a customer first.");
      return;
    }
    if (tid == null || !delivery) {
      this.notify.warning("Send", "Select consent type and delivery channel.");
      return;
    }
    const consentType = this.selectedLeftTemplateName();
    this.sendBusy.set(true);
    this.adminApi.sendConsentLink({
      customerId: cust.customerId,
      consentTemplateId: tid,
      deliveryChannel: delivery,
      consentType
    }).subscribe({
      next: (res) => {
        this.sendBusy.set(false);
        if (!res.success || !res.data) {
          this.notify.error("Send", res.message || "Send failed.");
          return;
        }
        this.lastInviteLink.set(res.data.inviteLink || "");
        this.notify.success("Sent", res.data.message || res.message || "Email dispatched.");
      },
      error: (err) => {
        this.sendBusy.set(false);
        this.logger.error("AdminCaptureConsent", "send-link failed", err);
        const msg = err?.error?.message || err?.message || "Could not send consent link.";
        if (err?.status === 503) {
          this.notify.error("Email delivery failed", msg);
        } else {
          this.notify.error("Send", msg);
        }
      }
    });
  }
  recordConsent() {
    const cust = this.customer();
    if (!cust) {
      this.notify.warning("Record", "Search for a customer in the left panel first.");
      return;
    }
    const tid = this.rightTemplateId();
    const mode = this.rightMode();
    const source = this.rightSource();
    if (tid == null || !mode || !source) {
      this.notify.warning("Record", "Select consent type, mode, and source channel.");
      return;
    }
    const consentType = this.selectedRightConsentType();
    this.recordBusy.set(true);
    this.adminApi.recordOnBehalf({
      customerId: cust.customerId,
      consentType,
      mode,
      sourceChannel: source,
      evidenceReference: this.evidenceRef().trim() || void 0
    }).subscribe({
      next: (res) => {
        this.recordBusy.set(false);
        if (!res.success) {
          this.notify.error("Record", res.message || "Record failed.");
          return;
        }
        this.notify.success("Recorded", res.message || "On-behalf consent recorded.");
      },
      error: (err) => {
        this.recordBusy.set(false);
        this.logger.error("AdminCaptureConsent", "record failed", err);
        this.notify.error("Record", err?.error?.message || "Could not record consent.");
      }
    });
  }
  resetLinkOnLeftChange() {
    this.lastInviteLink.set("");
  }
  parseSelectNumber(v) {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? n : null;
  }
  static {
    this.\u0275fac = function AdminCaptureConsentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminCaptureConsentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCaptureConsentComponent, selectors: [["app-admin-capture-consent"]], decls: 71, vars: 18, consts: [["dir", "ltr", 1, "panels"], ["aria-labelledby", "send-link-title", 1, "panel"], ["id", "send-link-title", 1, "panel-title"], [1, "search-row"], ["type", "text", "placeholder", "Customer ID or Mobile Number", 1, "ctl", "grow", 3, "ngModelChange", "keyup.enter", "ngModel"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "customer-block"], [1, "stack"], [1, "lbl"], [1, "ctl", 3, "change", "value"], ["value", ""], [3, "value"], [1, "info-msg"], [1, "send-note"], [1, "btn-row"], ["diameter", "28", "mode", "indeterminate", 1, "send-spin"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["aria-labelledby", "behalf-title", 1, "panel"], ["id", "behalf-title", 1, "panel-title"], [1, "hint"], ["type", "text", "placeholder", "Call ID, Document No.", 1, "ctl", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "record-btn", 3, "click", "disabled"], [1, "customer-name"], [1, "customer-meta"]], template: function AdminCaptureConsentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Send Consent via Link");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "input", 4);
        \u0275\u0275listener("ngModelChange", function AdminCaptureConsentComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.searchQuery.set($event);
        })("keyup.enter", function AdminCaptureConsentComponent_Template_input_keyup_enter_5_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 5);
        \u0275\u0275listener("click", function AdminCaptureConsentComponent_Template_button_click_6_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, AdminCaptureConsentComponent_Conditional_8_Template, 7, 4, "div", 6);
        \u0275\u0275elementStart(9, "label", 7)(10, "span", 8);
        \u0275\u0275text(11, "Select Consent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "select", 9);
        \u0275\u0275listener("change", function AdminCaptureConsentComponent_Template_select_change_12_listener($event) {
          ctx.leftTemplateId.set(ctx.parseSelectNumber($event.target.value));
          return ctx.resetLinkOnLeftChange();
        });
        \u0275\u0275elementStart(13, "option", 10);
        \u0275\u0275text(14, "Choose template\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(15, AdminCaptureConsentComponent_For_16_Template, 2, 2, "option", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "label", 7)(18, "span", 8);
        \u0275\u0275text(19, "Delivery Channel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "select", 9);
        \u0275\u0275listener("change", function AdminCaptureConsentComponent_Template_select_change_20_listener($event) {
          ctx.leftDelivery.set($event.target.value || "");
          return ctx.resetLinkOnLeftChange();
        });
        \u0275\u0275elementStart(21, "option", 10);
        \u0275\u0275text(22, "Choose channel\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(23, AdminCaptureConsentComponent_For_24_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, AdminCaptureConsentComponent_Conditional_25_Template, 2, 1, "p", 12);
        \u0275\u0275elementStart(26, "p", 13);
        \u0275\u0275text(27, " A professional consent-request email is always sent to the customer\u2019s ");
        \u0275\u0275elementStart(28, "strong");
        \u0275\u0275text(29, "registered email address");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, ". The delivery channel you select describes how you intend to reach them after consent \u2014 it does not disable this email. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 14);
        \u0275\u0275template(32, AdminCaptureConsentComponent_Conditional_32_Template, 1, 0, "mat-progress-spinner", 15);
        \u0275\u0275elementStart(33, "button", 5);
        \u0275\u0275listener("click", function AdminCaptureConsentComponent_Template_button_click_33_listener() {
          return ctx.copyLink();
        });
        \u0275\u0275text(34, " Copy Link ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 16);
        \u0275\u0275listener("click", function AdminCaptureConsentComponent_Template_button_click_35_listener() {
          return ctx.sendLink();
        });
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "section", 17)(38, "h2", 18);
        \u0275\u0275text(39, "Take Consent on Behalf");
        \u0275\u0275elementEnd();
        \u0275\u0275template(40, AdminCaptureConsentComponent_Conditional_40_Template, 2, 0, "p", 19);
        \u0275\u0275elementStart(41, "label", 7)(42, "span", 8);
        \u0275\u0275text(43, "Consent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "select", 9);
        \u0275\u0275listener("change", function AdminCaptureConsentComponent_Template_select_change_44_listener($event) {
          return ctx.rightTemplateId.set(ctx.parseSelectNumber($event.target.value));
        });
        \u0275\u0275elementStart(45, "option", 10);
        \u0275\u0275text(46, "Choose consent type\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(47, AdminCaptureConsentComponent_For_48_Template, 2, 2, "option", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "label", 7)(50, "span", 8);
        \u0275\u0275text(51, "Mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "select", 9);
        \u0275\u0275listener("change", function AdminCaptureConsentComponent_Template_select_change_52_listener($event) {
          return ctx.rightMode.set($event.target.value || "");
        });
        \u0275\u0275elementStart(53, "option", 10);
        \u0275\u0275text(54, "Choose mode\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(55, AdminCaptureConsentComponent_For_56_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "label", 7)(58, "span", 8);
        \u0275\u0275text(59, "Source Channel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "select", 9);
        \u0275\u0275listener("change", function AdminCaptureConsentComponent_Template_select_change_60_listener($event) {
          return ctx.rightSource.set($event.target.value || "");
        });
        \u0275\u0275elementStart(61, "option", 10);
        \u0275\u0275text(62, "Choose source\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(63, AdminCaptureConsentComponent_For_64_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "label", 7)(66, "span", 8);
        \u0275\u0275text(67, "Evidence Reference");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "input", 20);
        \u0275\u0275listener("ngModelChange", function AdminCaptureConsentComponent_Template_input_ngModelChange_68_listener($event) {
          return ctx.evidenceRef.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "button", 21);
        \u0275\u0275listener("click", function AdminCaptureConsentComponent_Template_button_click_69_listener() {
          return ctx.recordConsent();
        });
        \u0275\u0275text(70);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_14_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.searchQuery());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.searchBusy());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.searchBusy() ? "Searching\u2026" : "Search", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_3_0 = ctx.customer()) ? 8 : -1, tmp_3_0);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", (tmp_4_0 = ctx.leftTemplateId()) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.templates());
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.leftDelivery());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.deliveryOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.infoMessage() ? 25 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.sendBusy() ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.canCopyLink() || ctx.sendBusy());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.sendBusy());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.sendBusy() ? "Sending\u2026" : "Send consent email", " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.customer() ? 40 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", (tmp_14_0 = ctx.rightTemplateId()) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.templates());
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.rightMode());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.modeOptions);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.rightSource());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.sourceOptions);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.evidenceRef());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.recordBusy());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.recordBusy() ? "Recording\u2026" : "Record Consent", " ");
      }
    }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, Dir, MatProgressSpinnerModule, MatProgressSpinner], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panels[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\n  gap: var(--space-6);\n  align-items: stretch;\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--shadow-md);\n  padding: var(--space-6);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.panel-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  padding-bottom: var(--space-3);\n  border-bottom: 1px solid var(--input-border-color);\n  font-size: var(--text-18);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  align-items: stretch;\n}\n.grow[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.customer-block[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  border-radius: var(--input-radius);\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n}\n.customer-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--input-text-color);\n  margin-bottom: var(--space-2);\n}\n.customer-meta[_ngcontent-%COMP%] {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.lbl[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: var(--sidebar-text-muted);\n}\n.ctl[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.info-msg[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-14);\n  color: var(--sidebar-text-muted);\n  line-height: 1.5;\n}\n.send-note[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n  line-height: 1.55;\n  padding: var(--space-3);\n  border-radius: var(--input-radius);\n  background: var(--color-info-light);\n  border: 1px solid var(--color-info-border);\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--space-3);\n  margin-top: var(--space-2);\n}\n.send-spin[_ngcontent-%COMP%] {\n  margin-right: var(--space-1);\n}\n.hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-13);\n  color: var(--color-warning);\n}\n.record-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: var(--space-2);\n  min-height: var(--input-height);\n}\n/*# sourceMappingURL=admin-capture-consent.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCaptureConsentComponent, [{
    type: Component,
    args: [{ selector: "app-admin-capture-consent", standalone: true, imports: [FormsModule, MatButtonModule, MatProgressSpinnerModule], template: `<div class="panels" dir="ltr">\r
  <section class="panel" aria-labelledby="send-link-title">\r
    <h2 id="send-link-title" class="panel-title">Send Consent via Link</h2>\r
\r
    <div class="search-row">\r
      <input\r
        type="text"\r
        class="ctl grow"\r
        placeholder="Customer ID or Mobile Number"\r
        [ngModel]="searchQuery()"\r
        (ngModelChange)="searchQuery.set($event)"\r
        (keyup.enter)="onSearch()"\r
      />\r
      <button mat-stroked-button type="button" [disabled]="searchBusy()" (click)="onSearch()">\r
        {{ searchBusy() ? 'Searching\u2026' : 'Search' }}\r
      </button>\r
    </div>\r
\r
    @if (customer(); as c) {\r
      <div class="customer-block">\r
        <div class="customer-name">{{ c.fullName }}</div>\r
        <div class="customer-meta">Registered email: {{ c.email || '\u2014' }}</div>\r
        <div class="customer-meta">Customer ID: {{ c.customerId }} \xB7 {{ c.mobileNumber }}</div>\r
      </div>\r
    }\r
\r
    <label class="stack">\r
      <span class="lbl">Select Consent</span>\r
      <select\r
        class="ctl"\r
        [value]="leftTemplateId() ?? ''"\r
        (change)="\r
          leftTemplateId.set(parseSelectNumber($any($event.target).value));\r
          resetLinkOnLeftChange()\r
        "\r
      >\r
        <option value="">Choose template\u2026</option>\r
        @for (t of templates(); track t.id) {\r
          <option [value]="t.id">{{ t.consentName }}</option>\r
        }\r
      </select>\r
    </label>\r
\r
    <label class="stack">\r
      <span class="lbl">Delivery Channel</span>\r
      <select\r
        class="ctl"\r
        [value]="leftDelivery()"\r
        (change)="leftDelivery.set($any($any($event.target).value) || ''); resetLinkOnLeftChange()"\r
      >\r
        <option value="">Choose channel\u2026</option>\r
        @for (ch of deliveryOptions; track ch) {\r
          <option [value]="ch">{{ ch }}</option>\r
        }\r
      </select>\r
    </label>\r
\r
    @if (infoMessage()) {\r
      <p class="info-msg">{{ infoMessage() }}</p>\r
    }\r
\r
    <p class="send-note">\r
      A professional consent-request email is always sent to the customer\u2019s <strong>registered email address</strong>.\r
      The delivery channel you select describes how you intend to reach them after consent \u2014 it does not disable this\r
      email.\r
    </p>\r
\r
    <div class="btn-row">\r
      @if (sendBusy()) {\r
        <mat-progress-spinner class="send-spin" diameter="28" mode="indeterminate" />\r
      }\r
      <button mat-stroked-button type="button" [disabled]="!canCopyLink() || sendBusy()" (click)="copyLink()">\r
        Copy Link\r
      </button>\r
      <button mat-flat-button color="primary" type="button" [disabled]="sendBusy()" (click)="sendLink()">\r
        {{ sendBusy() ? 'Sending\u2026' : 'Send consent email' }}\r
      </button>\r
    </div>\r
  </section>\r
\r
  <section class="panel" aria-labelledby="behalf-title">\r
    <h2 id="behalf-title" class="panel-title">Take Consent on Behalf</h2>\r
\r
    @if (!customer()) {\r
      <p class="hint">Search for a customer in the left panel to attach this record.</p>\r
    }\r
\r
    <label class="stack">\r
      <span class="lbl">Consent</span>\r
      <select class="ctl" [value]="rightTemplateId() ?? ''" (change)="rightTemplateId.set(parseSelectNumber($any($event.target).value))">\r
        <option value="">Choose consent type\u2026</option>\r
        @for (t of templates(); track t.id) {\r
          <option [value]="t.id">{{ t.consentName }}</option>\r
        }\r
      </select>\r
    </label>\r
\r
    <label class="stack">\r
      <span class="lbl">Mode</span>\r
      <select class="ctl" [value]="rightMode()" (change)="rightMode.set($any($event.target).value || '')">\r
        <option value="">Choose mode\u2026</option>\r
        @for (m of modeOptions; track m) {\r
          <option [value]="m">{{ m }}</option>\r
        }\r
      </select>\r
    </label>\r
\r
    <label class="stack">\r
      <span class="lbl">Source Channel</span>\r
      <select class="ctl" [value]="rightSource()" (change)="rightSource.set($any($event.target).value || '')">\r
        <option value="">Choose source\u2026</option>\r
        @for (s of sourceOptions; track s) {\r
          <option [value]="s">{{ s }}</option>\r
        }\r
      </select>\r
    </label>\r
\r
    <label class="stack">\r
      <span class="lbl">Evidence Reference</span>\r
      <input\r
        type="text"\r
        class="ctl"\r
        placeholder="Call ID, Document No."\r
        [ngModel]="evidenceRef()"\r
        (ngModelChange)="evidenceRef.set($event)"\r
      />\r
    </label>\r
\r
    <button\r
      mat-flat-button\r
      color="primary"\r
      type="button"\r
      class="record-btn"\r
      [disabled]="recordBusy()"\r
      (click)="recordConsent()"\r
    >\r
      {{ recordBusy() ? 'Recording\u2026' : 'Record Consent' }}\r
    </button>\r
  </section>\r
</div>\r
`, styles: ['/* src/app/features/admin/admin-capture-consent/admin-capture-consent.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.panels {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\n  gap: var(--space-6);\n  align-items: stretch;\n}\n.panel {\n  background: var(--card-bg);\n  border: var(--card-border);\n  border-radius: var(--card-radius);\n  box-shadow: var(--shadow-md);\n  padding: var(--space-6);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.panel-title {\n  margin: 0 0 var(--space-4);\n  padding-bottom: var(--space-3);\n  border-bottom: 1px solid var(--input-border-color);\n  font-size: var(--text-18);\n  font-weight: 700;\n  color: var(--input-text-color);\n}\n.search-row {\n  display: flex;\n  gap: var(--space-3);\n  align-items: stretch;\n}\n.grow {\n  flex: 1;\n  min-width: 0;\n}\n.customer-block {\n  padding: var(--space-4);\n  border-radius: var(--input-radius);\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n}\n.customer-name {\n  font-weight: 700;\n  color: var(--input-text-color);\n  margin-bottom: var(--space-2);\n}\n.customer-meta {\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n}\n.stack {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.lbl {\n  font-size: var(--text-12);\n  font-weight: 600;\n  color: var(--sidebar-text-muted);\n}\n.ctl {\n  width: 100%;\n}\n.info-msg {\n  margin: 0;\n  font-size: var(--text-14);\n  color: var(--sidebar-text-muted);\n  line-height: 1.5;\n}\n.send-note {\n  margin: 0;\n  font-size: var(--text-13);\n  color: var(--sidebar-text-muted);\n  line-height: 1.55;\n  padding: var(--space-3);\n  border-radius: var(--input-radius);\n  background: var(--color-info-light);\n  border: 1px solid var(--color-info-border);\n}\n.btn-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--space-3);\n  margin-top: var(--space-2);\n}\n.send-spin {\n  margin-right: var(--space-1);\n}\n.hint {\n  margin: 0;\n  font-size: var(--text-13);\n  color: var(--color-warning);\n}\n.record-btn {\n  width: 100%;\n  margin-top: var(--space-2);\n  min-height: var(--input-height);\n}\n/*# sourceMappingURL=admin-capture-consent.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCaptureConsentComponent, { className: "AdminCaptureConsentComponent", filePath: "src/app/features/admin/admin-capture-consent/admin-capture-consent.component.ts", lineNumber: 21 });
})();
export {
  AdminCaptureConsentComponent
};
//# sourceMappingURL=chunk-HLZIFVZE.js.map
