import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4V3JZOCF.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-2TGCEGVP.js";
import "./chunk-23MDLYAU.js";
import {
  Component,
  HttpClient,
  environment,
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
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/public/public-consent-verify/public-consent-verify.component.ts
function PublicConsentVerifyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 1);
  }
}
function PublicConsentVerifyComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var PublicConsentVerifyComponent = class _PublicConsentVerifyComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.http = inject(HttpClient);
    this.loading = signal(true);
    this.errorMessage = signal(null);
  }
  ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get("code")?.trim() ?? "";
    if (!code) {
      this.loading.set(false);
      this.errorMessage.set("Invalid link. Please use the link from your consent email.");
      return;
    }
    const url = `${environment.apiUrl}/public/consent/exchange`;
    this.http.post(url, { code }, { withCredentials: true }).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res?.status === "ok") {
          void this.router.navigate(["/public/consent/respond"], { replaceUrl: true });
          return;
        }
        this.errorMessage.set("Something went wrong. Please try again.");
      },
      error: (err) => {
        this.loading.set(false);
        if (err.status === 400 && err.error?.error === "LINK_EXPIRED") {
          this.errorMessage.set("This link has expired or has already been used.");
          return;
        }
        this.errorMessage.set("Something went wrong. Please try again.");
      }
    });
  }
  static {
    this.\u0275fac = function PublicConsentVerifyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicConsentVerifyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicConsentVerifyComponent, selectors: [["app-public-consent-verify"]], decls: 3, vars: 1, consts: [[1, "wrap"], ["diameter", "48"], ["role", "alert", 1, "err"]], template: function PublicConsentVerifyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PublicConsentVerifyComponent_Conditional_1_Template, 1, 0, "mat-spinner", 1)(2, PublicConsentVerifyComponent_Conditional_2_Template, 2, 1, "p", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 1 : ctx.errorMessage() ? 2 : -1);
      }
    }, dependencies: [MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 40vh;\n  padding: 2rem;\n}\n.err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  text-align: center;\n  max-width: 28rem;\n}\n/*# sourceMappingURL=public-consent-verify.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicConsentVerifyComponent, [{
    type: Component,
    args: [{ selector: "app-public-consent-verify", standalone: true, imports: [MatProgressSpinnerModule], template: '<div class="wrap">\r\n  @if (loading()) {\r\n    <mat-spinner diameter="48" />\r\n  } @else if (errorMessage()) {\r\n    <p class="err" role="alert">{{ errorMessage() }}</p>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/features/public/public-consent-verify/public-consent-verify.component.scss */\n.wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 40vh;\n  padding: 2rem;\n}\n.err {\n  color: #b91c1c;\n  text-align: center;\n  max-width: 28rem;\n}\n/*# sourceMappingURL=public-consent-verify.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicConsentVerifyComponent, { className: "PublicConsentVerifyComponent", filePath: "src/app/features/public/public-consent-verify/public-consent-verify.component.ts", lineNumber: 14 });
})();
export {
  PublicConsentVerifyComponent
};
//# sourceMappingURL=chunk-WNEWYGJT.js.map
