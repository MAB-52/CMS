import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-RLCEEPU7.js";
import {
  ActivatedRoute
} from "./chunk-W4T3EBZ5.js";
import {
  Component,
  DatePipe,
  Dir,
  HttpClient,
  HttpParams,
  Injectable,
  LoggerService,
  MatButton,
  MatButtonModule,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// src/app/core/services/public-consent-invite.service.ts
var PublicConsentInviteService = class _PublicConsentInviteService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/public/consent-invite`;
  }
  getInvite(token) {
    const params = new HttpParams().set("token", token);
    return this.http.get(this.base, { params });
  }
  respond(token, decision) {
    return this.http.post(`${this.base}/respond`, { token, decision });
  }
  static {
    this.\u0275fac = function PublicConsentInviteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicConsentInviteService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PublicConsentInviteService, factory: _PublicConsentInviteService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicConsentInviteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/public/public-consent-respond/public-consent-respond.component.ts
function PublicConsentRespondComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-progress-spinner", 6);
    \u0275\u0275elementStart(2, "p", 7);
    \u0275\u0275text(3, "Loading your request\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("banner--ok", d_r1.state === "ACCEPTED")("banner--deny", d_r1.state === "REJECTED")("banner--muted", d_r1.state === "EXPIRED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.descriptionPreview);
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 16);
    \u0275\u0275text(1, "What you are being asked to approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r1.messagePreview);
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Link valid until ", \u0275\u0275pipeBind2(2, 1, d_r1.expiresAt, "medium"), "");
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving\u2026");
    \u0275\u0275elementEnd();
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Accept consent ");
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.submit("ACCEPT"));
    });
    \u0275\u0275template(2, PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_9_Conditional_2_Template, 2, 0, "span")(3, PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_9_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.submit("DECLINE"));
    });
    \u0275\u0275text(5, " Decline ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7, " You can only submit once. If you are unsure, contact support using the details provided in your email before deciding. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.submitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.submitting() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.submitting());
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_0_Template, 2, 7, "div", 9);
    \u0275\u0275elementStart(1, "section", 10)(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_6_Template, 2, 1, "p", 13)(7, PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_7_Template, 4, 1)(8, PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_8_Template, 3, 4, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Conditional_9_Template, 8, 3);
  }
  if (rf & 2) {
    let tmp_4_0;
    const d_r1 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r2.inlineNotice()) ? 0 : -1, tmp_4_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Hello, ", d_r1.customerDisplayName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.consentTitle);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.descriptionPreview ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.messagePreview ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.expiresAt ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.state === "READY" ? 9 : -1);
  }
}
function PublicConsentRespondComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PublicConsentRespondComponent_Conditional_9_Conditional_1_Conditional_0_Template, 10, 7);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.detail()) ? 0 : -1, tmp_2_0);
  }
}
function PublicConsentRespondComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PublicConsentRespondComponent_Conditional_9_Conditional_0_Template, 2, 1, "div", 8)(1, PublicConsentRespondComponent_Conditional_9_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.errorMessage()) ? 0 : 1, tmp_1_0);
  }
}
var PublicConsentRespondComponent = class _PublicConsentRespondComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.api = inject(PublicConsentInviteService);
    this.logger = inject(LoggerService);
    this.loading = signal(true);
    this.submitting = signal(false);
    this.errorMessage = signal(null);
    this.detail = signal(null);
    this.inlineNotice = signal(null);
  }
  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get("token")?.trim() ?? "";
    if (!token) {
      this.loading.set(false);
      this.errorMessage.set("This page requires a valid link from your consent email.");
      return;
    }
    this.api.getInvite(token).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (!res.success || !res.data) {
          this.errorMessage.set(res.message || "We could not load this consent request.");
          return;
        }
        if (res.data.state === "NOT_FOUND") {
          this.errorMessage.set(res.message || "This consent link is not valid.");
          return;
        }
        this.detail.set(res.data);
        if (res.data.state === "EXPIRED") {
          this.inlineNotice.set("This link has expired. Please contact us if you still need to respond.");
        } else if (res.data.state === "ACCEPTED" || res.data.state === "REJECTED") {
          this.inlineNotice.set("Thank you \u2014 your response is already on file. No further action is needed.");
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.logger.error("PublicConsentRespond", "load failed", err);
        this.errorMessage.set(err?.error?.message || "Something went wrong while loading this page.");
      }
    });
  }
  submit(decision) {
    const token = this.route.snapshot.queryParamMap.get("token")?.trim() ?? "";
    const d = this.detail();
    if (!token || !d || d.state !== "READY") {
      return;
    }
    this.submitting.set(true);
    this.errorMessage.set(null);
    this.api.respond(token, decision).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (!res.success || !res.data) {
          this.errorMessage.set(res.message || "We could not record your response.");
          return;
        }
        this.detail.set(res.data);
        this.inlineNotice.set(decision === "ACCEPT" ? "Thank you. Your consent has been recorded successfully." : "Your choice has been recorded. You will not be contacted under this request.");
      },
      error: (err) => {
        this.submitting.set(false);
        this.logger.error("PublicConsentRespond", "respond failed", err);
        this.errorMessage.set(err?.error?.message || "We could not record your response. Please try again.");
      }
    });
  }
  static {
    this.\u0275fac = function PublicConsentRespondComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicConsentRespondComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicConsentRespondComponent, selectors: [["app-public-consent-respond"]], decls: 10, vars: 1, consts: [["dir", "ltr", 1, "public-page"], [1, "shell-card"], [1, "brand"], [1, "title"], [1, "lede"], [1, "center"], ["diameter", "44", "mode", "indeterminate"], [1, "muted"], ["role", "alert", 1, "banner", "banner--error"], [1, "banner", 3, "banner--ok", "banner--deny", "banner--muted"], [1, "panel"], [1, "greet"], [1, "consent-title"], [1, "body-text"], [1, "meta", "muted"], [1, "banner"], [1, "subhead"], [1, "message-preview"], [1, "actions"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "btn-wide", 3, "click", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "btn-wide", "decline", 3, "click", "disabled"], [1, "fine-print"]], template: function PublicConsentRespondComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "ConsentIQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 3);
        \u0275\u0275text(5, "Consent request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "Review the information below, then choose whether to accept or decline this request.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, PublicConsentRespondComponent_Conditional_8_Template, 4, 0, "div", 5)(9, PublicConsentRespondComponent_Conditional_9_Template, 2, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.loading() ? 8 : 9);
      }
    }, dependencies: [DatePipe, MatButtonModule, MatButton, Dir, MatProgressSpinnerModule, MatProgressSpinner], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.public-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 32px 16px 48px;\n  background:\n    linear-gradient(\n      180deg,\n      #0f172a 0%,\n      #1e293b 40%,\n      var(--page-bg) 100%);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.shell-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  background: var(--card-bg);\n  border-radius: var(--card-radius);\n  box-shadow: var(--shadow-lg);\n  border: var(--card-border);\n  padding: 32px 28px 36px;\n}\n.brand[_ngcontent-%COMP%] {\n  font-size: var(--text-12);\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--color-info);\n  margin-bottom: var(--space-2);\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.lede[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-5);\n  font-size: var(--text-14);\n  color: var(--sidebar-text-muted);\n  line-height: 1.55;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-6) 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-14);\n}\n.banner[_ngcontent-%COMP%] {\n  border-radius: var(--input-radius);\n  padding: 12px 14px;\n  font-size: var(--text-14);\n  margin-bottom: var(--space-4);\n  line-height: 1.5;\n}\n.banner--error[_ngcontent-%COMP%] {\n  background: var(--color-error-light);\n  border: 1px solid var(--color-error-border);\n  color: var(--color-error);\n}\n.banner--ok[_ngcontent-%COMP%] {\n  background: var(--color-success-light);\n  border: 1px solid var(--color-success-border);\n  color: var(--color-success);\n}\n.banner--muted[_ngcontent-%COMP%] {\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  color: var(--input-text-color);\n}\n.banner--deny[_ngcontent-%COMP%] {\n  background: var(--color-error-light);\n  border: 1px solid var(--color-error-border);\n  color: var(--color-error);\n}\n.panel[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.greet[_ngcontent-%COMP%] {\n  font-size: var(--text-14);\n  font-weight: 600;\n  color: var(--sidebar-text-muted);\n  margin-bottom: var(--space-2);\n}\n.consent-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-3);\n  font-size: var(--text-18);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.body-text[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: var(--text-14);\n  color: #334155;\n  line-height: 1.65;\n}\n.subhead[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n  font-size: var(--text-13);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n}\n.message-preview[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  font-size: var(--text-14);\n  line-height: 1.65;\n  color: #334155;\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  padding: var(--space-4);\n  max-height: 280px;\n  overflow: auto;\n}\n.meta[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  font-size: var(--text-12);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.btn-wide[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: var(--input-height);\n  font-weight: 700 !important;\n}\n.decline[_ngcontent-%COMP%] {\n  border-color: var(--input-border-color) !important;\n  color: var(--input-text-color) !important;\n}\n.fine-print[_ngcontent-%COMP%] {\n  margin: var(--space-4) 0 0;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=public-consent-respond.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicConsentRespondComponent, [{
    type: Component,
    args: [{ selector: "app-public-consent-respond", standalone: true, imports: [DatePipe, MatButtonModule, MatProgressSpinnerModule], template: `<div class="public-page" dir="ltr">\r
  <div class="shell-card">\r
    <div class="brand">ConsentIQ</div>\r
    <h1 class="title">Consent request</h1>\r
    <p class="lede">Review the information below, then choose whether to accept or decline this request.</p>\r
\r
    @if (loading()) {\r
      <div class="center">\r
        <mat-progress-spinner diameter="44" mode="indeterminate" />\r
        <p class="muted">Loading your request\u2026</p>\r
      </div>\r
    } @else {\r
      @if (errorMessage(); as err) {\r
        <div class="banner banner--error" role="alert">{{ err }}</div>\r
      } @else {\r
        @if (detail(); as d) {\r
          @if (inlineNotice(); as note) {\r
            <div\r
              class="banner"\r
              [class.banner--ok]="d.state === 'ACCEPTED'"\r
              [class.banner--deny]="d.state === 'REJECTED'"\r
              [class.banner--muted]="d.state === 'EXPIRED'"\r
            >\r
              {{ note }}\r
            </div>\r
          }\r
\r
          <section class="panel">\r
            <div class="greet">Hello, {{ d.customerDisplayName }}</div>\r
            <h2 class="consent-title">{{ d.consentTitle }}</h2>\r
            @if (d.descriptionPreview) {\r
              <p class="body-text">{{ d.descriptionPreview }}</p>\r
            }\r
            @if (d.messagePreview) {\r
              <h3 class="subhead">What you are being asked to approve</h3>\r
              <div class="message-preview">{{ d.messagePreview }}</div>\r
            }\r
            @if (d.expiresAt) {\r
              <div class="meta muted">Link valid until {{ d.expiresAt | date: 'medium' }}</div>\r
            }\r
          </section>\r
\r
          @if (d.state === 'READY') {\r
            <div class="actions">\r
              <button\r
                mat-flat-button\r
                color="primary"\r
                type="button"\r
                class="btn-wide"\r
                [disabled]="submitting()"\r
                (click)="submit('ACCEPT')"\r
              >\r
                @if (submitting()) {\r
                  <span>Saving\u2026</span>\r
                } @else {\r
                  Accept consent\r
                }\r
              </button>\r
              <button\r
                mat-stroked-button\r
                type="button"\r
                class="btn-wide decline"\r
                [disabled]="submitting()"\r
                (click)="submit('DECLINE')"\r
              >\r
                Decline\r
              </button>\r
            </div>\r
            <p class="fine-print">\r
              You can only submit once. If you are unsure, contact support using the details provided in your email\r
              before deciding.\r
            </p>\r
          }\r
        }\r
      }\r
    }\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/public/public-consent-respond/public-consent-respond.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.public-page {\n  min-height: 100vh;\n  padding: 32px 16px 48px;\n  background:\n    linear-gradient(\n      180deg,\n      #0f172a 0%,\n      #1e293b 40%,\n      var(--page-bg) 100%);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.shell-card {\n  width: 100%;\n  max-width: 640px;\n  background: var(--card-bg);\n  border-radius: var(--card-radius);\n  box-shadow: var(--shadow-lg);\n  border: var(--card-border);\n  padding: 32px 28px 36px;\n}\n.brand {\n  font-size: var(--text-12);\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--color-info);\n  margin-bottom: var(--space-2);\n}\n.title {\n  margin: 0 0 var(--space-2);\n  font-size: var(--text-24);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.lede {\n  margin: 0 0 var(--space-5);\n  font-size: var(--text-14);\n  color: var(--sidebar-text-muted);\n  line-height: 1.55;\n}\n.center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-6) 0;\n}\n.muted {\n  color: var(--sidebar-text-muted);\n  font-size: var(--text-14);\n}\n.banner {\n  border-radius: var(--input-radius);\n  padding: 12px 14px;\n  font-size: var(--text-14);\n  margin-bottom: var(--space-4);\n  line-height: 1.5;\n}\n.banner--error {\n  background: var(--color-error-light);\n  border: 1px solid var(--color-error-border);\n  color: var(--color-error);\n}\n.banner--ok {\n  background: var(--color-success-light);\n  border: 1px solid var(--color-success-border);\n  color: var(--color-success);\n}\n.banner--muted {\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  color: var(--input-text-color);\n}\n.banner--deny {\n  background: var(--color-error-light);\n  border: 1px solid var(--color-error-border);\n  color: var(--color-error);\n}\n.panel {\n  margin-bottom: var(--space-5);\n}\n.greet {\n  font-size: var(--text-14);\n  font-weight: 600;\n  color: var(--sidebar-text-muted);\n  margin-bottom: var(--space-2);\n}\n.consent-title {\n  margin: 0 0 var(--space-3);\n  font-size: var(--text-18);\n  font-weight: 800;\n  color: var(--input-text-color);\n}\n.body-text {\n  margin: 0 0 var(--space-4);\n  font-size: var(--text-14);\n  color: #334155;\n  line-height: 1.65;\n}\n.subhead {\n  margin: 0 0 var(--space-2);\n  font-size: var(--text-13);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--sidebar-text-muted);\n}\n.message-preview {\n  white-space: pre-wrap;\n  font-size: var(--text-14);\n  line-height: 1.65;\n  color: #334155;\n  background: var(--input-bg-disabled);\n  border: 1px solid var(--input-border-color);\n  border-radius: var(--input-radius);\n  padding: var(--space-4);\n  max-height: 280px;\n  overflow: auto;\n}\n.meta {\n  margin-top: var(--space-4);\n  font-size: var(--text-12);\n}\n.actions {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.btn-wide {\n  width: 100%;\n  min-height: var(--input-height);\n  font-weight: 700 !important;\n}\n.decline {\n  border-color: var(--input-border-color) !important;\n  color: var(--input-text-color) !important;\n}\n.fine-print {\n  margin: var(--space-4) 0 0;\n  font-size: var(--text-12);\n  color: var(--sidebar-text-muted);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=public-consent-respond.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicConsentRespondComponent, { className: "PublicConsentRespondComponent", filePath: "src/app/features/public/public-consent-respond/public-consent-respond.component.ts", lineNumber: 17 });
})();
export {
  PublicConsentRespondComponent
};
//# sourceMappingURL=chunk-FXMEOKM6.js.map
