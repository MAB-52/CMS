import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4V3JZOCF.js";
import {
  LoggerService
} from "./chunk-RENR4JVC.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-2TGCEGVP.js";
import {
  DomSanitizer
} from "./chunk-23MDLYAU.js";
import {
  Component,
  Dir,
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/public-consent-translation.service.ts
var PublicConsentTranslationService = class _PublicConsentTranslationService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/public/consent-translation`;
  }
  getTranslation(token, consentDbId, lang) {
    const params = new HttpParams().set("token", token).set("consentDbId", String(consentDbId)).set("lang", lang);
    return this.http.get(this.base, { params });
  }
  static {
    this.\u0275fac = function PublicConsentTranslationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicConsentTranslationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PublicConsentTranslationService, factory: _PublicConsentTranslationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicConsentTranslationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/public/public-consent-translation/public-consent-translation.component.ts
var _c0 = (a0) => ({ token: a0 });
function PublicConsentTranslationComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-progress-spinner", 6);
    \u0275\u0275elementStart(2, "p", 7);
    \u0275\u0275text(3, "Loading translation\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PublicConsentTranslationComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
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
function PublicConsentTranslationComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1, " \u2190 Back to consent request ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(4, _c0, ctx_r0.token()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Hello, ", ctx_r0.customerDisplayName(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.consentTitle());
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.safeHtml(), \u0275\u0275sanitizeHtml);
  }
}
function PublicConsentTranslationComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PublicConsentTranslationComponent_Conditional_9_Conditional_0_Template, 2, 1, "div", 8)(1, PublicConsentTranslationComponent_Conditional_9_Conditional_1_Template, 8, 6);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.errorMessage()) ? 0 : 1, tmp_1_0);
  }
}
var PublicConsentTranslationComponent = class _PublicConsentTranslationComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.api = inject(PublicConsentTranslationService);
    this.logger = inject(LoggerService);
    this.sanitizer = inject(DomSanitizer);
    this.loading = signal(true);
    this.errorMessage = signal(null);
    this.consentTitle = signal("");
    this.customerDisplayName = signal("");
    this.safeHtml = signal(null);
    this.token = signal("");
  }
  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get("token")?.trim() ?? "";
    const consentDbIdRaw = this.route.snapshot.queryParamMap.get("consentDbId")?.trim() ?? "";
    const lang = this.route.snapshot.queryParamMap.get("lang")?.trim() ?? "";
    this.token.set(token);
    if (!token || !consentDbIdRaw || !lang) {
      this.loading.set(false);
      this.errorMessage.set("This page requires a valid link with token, consent, and language.");
      return;
    }
    const consentDbId = Number(consentDbIdRaw);
    if (!Number.isFinite(consentDbId) || consentDbId <= 0) {
      this.loading.set(false);
      this.errorMessage.set("Invalid consent reference in this link.");
      return;
    }
    this.api.getTranslation(token, consentDbId, lang).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (!res.success || !res.data) {
          this.errorMessage.set(res.message || "We could not load this translation.");
          return;
        }
        this.consentTitle.set(res.data.consentTitle ?? "");
        this.customerDisplayName.set(res.data.customerDisplayName ?? "");
        const raw = res.data.translatedHtml ?? "";
        this.safeHtml.set(this.sanitizer.bypassSecurityTrustHtml(raw));
      },
      error: (err) => {
        this.loading.set(false);
        this.logger.error("PublicConsentTranslation", "load failed", err);
        const body = err.error;
        this.errorMessage.set(body?.message || err.message || "Something went wrong while loading this page.");
      }
    });
  }
  static {
    this.\u0275fac = function PublicConsentTranslationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicConsentTranslationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicConsentTranslationComponent, selectors: [["app-public-consent-translation"]], decls: 10, vars: 1, consts: [["dir", "ltr", 1, "public-page"], [1, "shell-card"], [1, "brand"], [1, "title"], [1, "lede"], [1, "center"], ["diameter", "44", "mode", "indeterminate"], [1, "muted"], ["role", "alert", 1, "banner", "banner--error"], ["routerLink", "/public/consent/respond", 1, "back-link", 3, "queryParams"], [1, "panel"], [1, "greet"], [1, "consent-title"], [1, "translated-content", 3, "innerHTML"]], template: function PublicConsentTranslationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "ConsentIQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 3);
        \u0275\u0275text(5, "Consent message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "Read the full consent text in the language you selected.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, PublicConsentTranslationComponent_Conditional_8_Template, 4, 0, "div", 5)(9, PublicConsentTranslationComponent_Conditional_9_Template, 2, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.loading() ? 8 : 9);
      }
    }, dependencies: [MatProgressSpinnerModule, MatProgressSpinner, Dir, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n[_nghost-%COMP%] {\n  display: block;\n  color-scheme: dark;\n}\n.public-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 34px 16px 80px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(168, 85, 247, 0.18),\n      transparent 28%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(34, 193, 255, 0.1),\n      transparent 26%),\n    linear-gradient(\n      180deg,\n      #0b0d12 0%,\n      #13161d 48%,\n      #0f1117 100%);\n}\n.public-page[_ngcontent-%COMP%]::before, \n.public-page[_ngcontent-%COMP%]::after {\n  content: "";\n  position: fixed;\n  border-radius: 50%;\n  filter: blur(100px);\n  pointer-events: none;\n  z-index: 0;\n}\n.public-page[_ngcontent-%COMP%]::before {\n  width: 320px;\n  height: 320px;\n  top: -120px;\n  left: -80px;\n  background: rgba(168, 85, 247, 0.18);\n}\n.public-page[_ngcontent-%COMP%]::after {\n  width: 260px;\n  height: 260px;\n  right: -60px;\n  bottom: 60px;\n  background: rgba(34, 193, 255, 0.12);\n}\n.shell-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 760px;\n  padding: 30px;\n  border-radius: 28px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.055),\n      rgba(255, 255, 255, 0.02));\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 12px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.04);\n  overflow: hidden;\n}\n.shell-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #9333ea 0%,\n      #ec4899 45%,\n      #22c1ff 100%);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 18px;\n  color: #c084fc;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.brand[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      #f0abfc,\n      #9333ea);\n  box-shadow: 0 0 10px rgba(168, 85, 247, 0.55), 0 0 22px rgba(168, 85, 247, 0.28);\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: white;\n  font-size: clamp(30px, 5vw, 38px);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n}\n.lede[_ngcontent-%COMP%] {\n  margin: 0 0 28px;\n  color: #b8bcc8;\n  font-size: 15px;\n  line-height: 1.7;\n  max-width: 580px;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 50px 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #8f96a3;\n  font-size: 14px;\n}\n.banner[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 14px;\n  font-size: 14px;\n  line-height: 1.6;\n  margin-bottom: 22px;\n}\n.banner--error[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  border: 1px solid rgba(220, 38, 38, 0.25);\n  color: #fca5a5;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  text-decoration: none;\n  color: #d1d5db;\n  font-size: 13px;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.05),\n      rgba(255, 255, 255, 0.025));\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition:\n    transform 0.15s ease,\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: rgba(168, 85, 247, 0.45);\n  background:\n    linear-gradient(\n      145deg,\n      rgba(168, 85, 247, 0.12),\n      rgba(236, 72, 153, 0.05));\n}\n.panel[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 26px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.045),\n      rgba(255, 255, 255, 0.02));\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(14px);\n  overflow: hidden;\n}\n.panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  padding: 1px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 85, 247, 0.45),\n      rgba(255, 255, 255, 0.03),\n      rgba(34, 193, 255, 0.18));\n  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n}\n.greet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #b8bcc8;\n  font-size: 14px;\n  font-weight: 500;\n}\n.consent-title[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  color: white;\n  font-size: clamp(22px, 4vw, 30px);\n  font-weight: 800;\n  line-height: 1.3;\n  letter-spacing: -0.02em;\n}\n.translated-content[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  font-size: 15px;\n  line-height: 1.9;\n  word-break: break-word;\n}\n[_nghost-%COMP%]     .translated-content p {\n  margin: 0 0 18px;\n}\n[_nghost-%COMP%]     .translated-content h1, \n[_nghost-%COMP%]     .translated-content h2, \n[_nghost-%COMP%]     .translated-content h3, \n[_nghost-%COMP%]     .translated-content h4 {\n  margin-top: 28px;\n  margin-bottom: 14px;\n  color: white;\n  line-height: 1.3;\n}\n[_nghost-%COMP%]     .translated-content ul, \n[_nghost-%COMP%]     .translated-content ol {\n  padding-left: 22px;\n  margin-bottom: 18px;\n}\n[_nghost-%COMP%]     .translated-content li {\n  margin-bottom: 8px;\n}\n[_nghost-%COMP%]     .translated-content a {\n  color: #93c5fd;\n  text-decoration: underline;\n}\n[_nghost-%COMP%]     .translated-content blockquote {\n  margin: 20px 0;\n  padding: 16px 18px;\n  border-left: 3px solid #9333ea;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 0 12px 12px 0;\n  color: #e5e7eb;\n}\n[_nghost-%COMP%]     .translated-content img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 16px;\n  margin: 20px 0;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n[_nghost-%COMP%]     .translated-content table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 20px 0;\n  overflow: hidden;\n  border-radius: 14px;\n}\n[_nghost-%COMP%]     .translated-content th, \n[_nghost-%COMP%]     .translated-content td {\n  padding: 12px 14px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  text-align: left;\n}\n[_nghost-%COMP%]     .translated-content th {\n  background: rgba(255, 255, 255, 0.05);\n  color: white;\n  font-weight: 700;\n}\n[_nghost-%COMP%]     .translated-content td {\n  color: #d1d5db;\n}\n[_nghost-%COMP%]     .translated-content code {\n  padding: 2px 6px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  color: #f9a8d4;\n  font-size: 13px;\n}\n@media (max-width: 640px) {\n  .shell-card[_ngcontent-%COMP%] {\n    padding: 22px;\n    border-radius: 24px;\n  }\n  .panel[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .translated-content[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 1.8;\n  }\n  .back-link[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=public-consent-translation.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicConsentTranslationComponent, [{
    type: Component,
    args: [{ selector: "app-public-consent-translation", standalone: true, imports: [MatProgressSpinnerModule, RouterLink], template: '<div class="public-page" dir="ltr">\r\n  <div class="shell-card">\r\n    <div class="brand">ConsentIQ</div>\r\n    <h1 class="title">Consent message</h1>\r\n    <p class="lede">Read the full consent text in the language you selected.</p>\r\n\r\n    @if (loading()) {\r\n      <div class="center">\r\n        <mat-progress-spinner diameter="44" mode="indeterminate" />\r\n        <p class="muted">Loading translation\u2026</p>\r\n      </div>\r\n    } @else {\r\n      @if (errorMessage(); as err) {\r\n        <div class="banner banner--error" role="alert">{{ err }}</div>\r\n      } @else {\r\n        <a\r\n          class="back-link"\r\n          routerLink="/public/consent/respond"\r\n          [queryParams]="{ token: token() }"\r\n        >\r\n          \u2190 Back to consent request\r\n        </a>\r\n\r\n        <section class="panel">\r\n          <div class="greet">Hello, {{ customerDisplayName() }}</div>\r\n          <h2 class="consent-title">{{ consentTitle() }}</h2>\r\n          <div class="translated-content" [innerHTML]="safeHtml()"></div>\r\n        </section>\r\n      }\r\n    }\r\n  </div>\r\n</div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/features/public/public-consent-translation/public-consent-translation.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n:host {\n  display: block;\n  color-scheme: dark;\n}\n.public-page {\n  min-height: 100vh;\n  padding: 34px 16px 80px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(168, 85, 247, 0.18),\n      transparent 28%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(34, 193, 255, 0.1),\n      transparent 26%),\n    linear-gradient(\n      180deg,\n      #0b0d12 0%,\n      #13161d 48%,\n      #0f1117 100%);\n}\n.public-page::before,\n.public-page::after {\n  content: "";\n  position: fixed;\n  border-radius: 50%;\n  filter: blur(100px);\n  pointer-events: none;\n  z-index: 0;\n}\n.public-page::before {\n  width: 320px;\n  height: 320px;\n  top: -120px;\n  left: -80px;\n  background: rgba(168, 85, 247, 0.18);\n}\n.public-page::after {\n  width: 260px;\n  height: 260px;\n  right: -60px;\n  bottom: 60px;\n  background: rgba(34, 193, 255, 0.12);\n}\n.shell-card {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 760px;\n  padding: 30px;\n  border-radius: 28px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.055),\n      rgba(255, 255, 255, 0.02));\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 12px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.04);\n  overflow: hidden;\n}\n.shell-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #9333ea 0%,\n      #ec4899 45%,\n      #22c1ff 100%);\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 18px;\n  color: #c084fc;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.brand::before {\n  content: "";\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      #f0abfc,\n      #9333ea);\n  box-shadow: 0 0 10px rgba(168, 85, 247, 0.55), 0 0 22px rgba(168, 85, 247, 0.28);\n}\n.title {\n  margin: 0 0 10px;\n  color: white;\n  font-size: clamp(30px, 5vw, 38px);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n}\n.lede {\n  margin: 0 0 28px;\n  color: #b8bcc8;\n  font-size: 15px;\n  line-height: 1.7;\n  max-width: 580px;\n}\n.center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 50px 0;\n}\n.muted {\n  color: #8f96a3;\n  font-size: 14px;\n}\n.banner {\n  padding: 14px 16px;\n  border-radius: 14px;\n  font-size: 14px;\n  line-height: 1.6;\n  margin-bottom: 22px;\n}\n.banner--error {\n  background: rgba(220, 38, 38, 0.1);\n  border: 1px solid rgba(220, 38, 38, 0.25);\n  color: #fca5a5;\n}\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  text-decoration: none;\n  color: #d1d5db;\n  font-size: 13px;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.05),\n      rgba(255, 255, 255, 0.025));\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition:\n    transform 0.15s ease,\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n.back-link:hover {\n  transform: translateY(-1px);\n  border-color: rgba(168, 85, 247, 0.45);\n  background:\n    linear-gradient(\n      145deg,\n      rgba(168, 85, 247, 0.12),\n      rgba(236, 72, 153, 0.05));\n}\n.panel {\n  position: relative;\n  padding: 26px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.045),\n      rgba(255, 255, 255, 0.02));\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(14px);\n  overflow: hidden;\n}\n.panel::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  padding: 1px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 85, 247, 0.45),\n      rgba(255, 255, 255, 0.03),\n      rgba(34, 193, 255, 0.18));\n  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n}\n.greet {\n  margin-bottom: 10px;\n  color: #b8bcc8;\n  font-size: 14px;\n  font-weight: 500;\n}\n.consent-title {\n  margin: 0 0 24px;\n  color: white;\n  font-size: clamp(22px, 4vw, 30px);\n  font-weight: 800;\n  line-height: 1.3;\n  letter-spacing: -0.02em;\n}\n.translated-content {\n  color: #d1d5db;\n  font-size: 15px;\n  line-height: 1.9;\n  word-break: break-word;\n}\n:host ::ng-deep .translated-content p {\n  margin: 0 0 18px;\n}\n:host ::ng-deep .translated-content h1,\n:host ::ng-deep .translated-content h2,\n:host ::ng-deep .translated-content h3,\n:host ::ng-deep .translated-content h4 {\n  margin-top: 28px;\n  margin-bottom: 14px;\n  color: white;\n  line-height: 1.3;\n}\n:host ::ng-deep .translated-content ul,\n:host ::ng-deep .translated-content ol {\n  padding-left: 22px;\n  margin-bottom: 18px;\n}\n:host ::ng-deep .translated-content li {\n  margin-bottom: 8px;\n}\n:host ::ng-deep .translated-content a {\n  color: #93c5fd;\n  text-decoration: underline;\n}\n:host ::ng-deep .translated-content blockquote {\n  margin: 20px 0;\n  padding: 16px 18px;\n  border-left: 3px solid #9333ea;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 0 12px 12px 0;\n  color: #e5e7eb;\n}\n:host ::ng-deep .translated-content img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 16px;\n  margin: 20px 0;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n:host ::ng-deep .translated-content table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 20px 0;\n  overflow: hidden;\n  border-radius: 14px;\n}\n:host ::ng-deep .translated-content th,\n:host ::ng-deep .translated-content td {\n  padding: 12px 14px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  text-align: left;\n}\n:host ::ng-deep .translated-content th {\n  background: rgba(255, 255, 255, 0.05);\n  color: white;\n  font-weight: 700;\n}\n:host ::ng-deep .translated-content td {\n  color: #d1d5db;\n}\n:host ::ng-deep .translated-content code {\n  padding: 2px 6px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  color: #f9a8d4;\n  font-size: 13px;\n}\n@media (max-width: 640px) {\n  .shell-card {\n    padding: 22px;\n    border-radius: 24px;\n  }\n  .panel {\n    padding: 20px;\n  }\n  .title {\n    font-size: 30px;\n  }\n  .translated-content {\n    font-size: 14px;\n    line-height: 1.8;\n  }\n  .back-link {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=public-consent-translation.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicConsentTranslationComponent, { className: "PublicConsentTranslationComponent", filePath: "src/app/features/public/public-consent-translation/public-consent-translation.component.ts", lineNumber: 16 });
})();
export {
  PublicConsentTranslationComponent
};
//# sourceMappingURL=chunk-CNM46R3W.js.map
