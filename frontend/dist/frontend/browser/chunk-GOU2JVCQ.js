import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4V3JZOCF.js";
import {
  LoggerService
} from "./chunk-RENR4JVC.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import {
  ActivatedRoute
} from "./chunk-2TGCEGVP.js";
import {
  DomSanitizer
} from "./chunk-23MDLYAU.js";
import {
  Component,
  DatePipe,
  Dir,
  HttpClient,
  HttpParams,
  Injectable,
  combineLatest,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/public-consent-invite.service.ts
var PublicConsentInviteService = class _PublicConsentInviteService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/public/consent-invite`;
  }
  /** Cookie-backed session (CONSENT_SESSION). */
  getInvite() {
    return this.http.get(this.base, { withCredentials: true });
  }
  respond(decision) {
    return this.http.post(`${this.base}/respond`, { decision }, { withCredentials: true });
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
var _forTrack0 = ($index, $item) => $item.value;
function PublicConsentRespondComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 18);
    \u0275\u0275element(2, "mat-progress-spinner", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4, "Loading your request\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2715 ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2139 ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275template(2, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_0_Conditional_2_Template, 1, 0)(3, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_0_Conditional_3_Template, 1, 0)(4, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_0_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("banner--ok", d_r1.state === "ACCEPTED")("banner--deny", d_r1.state === "REJECTED")("banner--muted", d_r1.state === "EXPIRED" || d_r1.state === "WITHDRAWN");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r1.state === "ACCEPTED" ? 2 : d_r1.state === "REJECTED" || d_r1.state === "WITHDRAWN" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.descriptionPreview);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " What you are being asked to approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("innerHTML", ctx_r1.safeResolvedHtml(d_r1.resolvedMessageHtml), \u0275\u0275sanitizeHtml);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " What you are being asked to approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r1.messagePreview);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_14_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ch_r3);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3, "\u{1F4E1}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275repeaterCreate(6, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_14_For_7_Template, 2, 1, "span", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", d_r1.deliveryChannelsSummary.includes(", ") ? "Channels" : "Channel", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(d_r1.deliveryChannelsSummary.split(", "));
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Consent valid for ", d_r1.validityPeriodDays, " day", d_r1.validityPeriodDays === 1 ? "" : "s", " from acceptance ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Valid until ", \u0275\u0275pipeBind2(3, 1, d_r1.expiresAt, "dd MMM yyyy"), " ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_For_11_Template_button_click_0_listener() {
      const ch_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleChannel(ch_r7));
    });
    \u0275\u0275elementStart(1, "span", 70);
    \u0275\u0275template(2, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_For_11_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ch_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("chip--active", ctx_r1.channelOn(ch_r7));
    \u0275\u0275attribute("aria-pressed", ctx_r1.channelOn(ch_r7));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.channelOn(ch_r7) ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ch_r7);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 72);
    \u0275\u0275text(1, "Saving\u2026 ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4BE} Save channel preference ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1, "\u2713 Channel preference saved.");
    \u0275\u0275elementEnd();
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 46)(2, "div", 65);
    \u0275\u0275text(3, " \u{1F4E1} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 48);
    \u0275\u0275text(6, "Preferred channels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 49);
    \u0275\u0275text(8, " Choose how you'd like to receive this consent communication. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 66);
    \u0275\u0275repeaterCreate(10, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_For_11_Template, 5, 5, "button", 67, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 68);
    \u0275\u0275listener("click", function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveChannelPreference());
    });
    \u0275\u0275template(13, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Conditional_13_Template, 2, 0)(14, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Conditional_14_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Conditional_15_Template, 2, 0, "p", 53)(16, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Conditional_16_Template, 2, 1, "p", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const d_r1 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(d_r1.availableChannels);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.channelPrefSaving() || ctx_r1.selectedChannels.size === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.channelPrefSaving() ? 13 : 14);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.channelPrefSaved() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.channelPrefError()) ? 16 : -1, tmp_10_0);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_For_12_Template_button_click_0_listener() {
      const lang_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleLang(lang_r9.value));
    });
    \u0275\u0275elementStart(1, "span", 70);
    \u0275\u0275template(2, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_For_12_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lang_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("chip--active", ctx_r1.selectedLangs.has(lang_r9.value))("chip--locked", lang_r9.value === "english");
    \u0275\u0275property("disabled", lang_r9.value === "english");
    \u0275\u0275attribute("aria-pressed", ctx_r1.selectedLangs.has(lang_r9.value));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedLangs.has(lang_r9.value) ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lang_r9.label);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 72);
    \u0275\u0275text(1, "Saving\u2026 ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4BE} Save language preference ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1, "\u2713 Language preference saved.");
    \u0275\u0275elementEnd();
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 74);
    \u0275\u0275text(1, " Processing\u2026 ");
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, " Accept consent ");
    \u0275\u0275elementStart(4, "span", 76);
    \u0275\u0275text(5, "I agree to receive communications");
    \u0275\u0275elementEnd()();
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_0_Template, 17, 4, "div", 44);
    \u0275\u0275elementStart(1, "div", 45)(2, "div", 46)(3, "div", 47);
    \u0275\u0275text(4, " \u{1F310} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3", 48);
    \u0275\u0275text(7, "Language preference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 49);
    \u0275\u0275text(9, " Choose the language(s) you'd like to receive this communication in. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 50);
    \u0275\u0275repeaterCreate(11, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_For_12_Template, 5, 8, "button", 51, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 52);
    \u0275\u0275listener("click", function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveLangPreference());
    });
    \u0275\u0275template(14, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_14_Template, 2, 0)(15, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_15_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_16_Template, 2, 0, "p", 53)(17, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_17_Template, 2, 1, "p", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 55)(19, "div", 56)(20, "span", 57);
    \u0275\u0275text(21, "\u2726 Your decision \u2726");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 58)(23, "button", 59);
    \u0275\u0275listener("click", function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.submit("ACCEPT"));
    });
    \u0275\u0275template(24, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_24_Template, 2, 0)(25, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Conditional_25_Template, 6, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 60)(27, "button", 61);
    \u0275\u0275listener("click", function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.submit("DECLINE"));
    });
    \u0275\u0275text(28, " \u2715 Decline ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 62);
    \u0275\u0275listener("click", function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.submit("WITHDRAW"));
    });
    \u0275\u0275text(30, " \u21A9 Withdraw ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "p", 63)(32, "span", 64);
    \u0275\u0275text(33, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " You can only submit once. Contact support if you need clarification before deciding. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(d_r1.availableChannels && d_r1.availableChannels.length >= 1 ? 0 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.languages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.langSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.langSaving() ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.langSaved() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.langError()) ? 17 : -1, tmp_10_0);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitting() ? 24 : 25);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_0_Template, 7, 8, "div", 23);
    \u0275\u0275elementStart(1, "section", 24);
    \u0275\u0275element(2, "div", 25);
    \u0275\u0275elementStart(3, "div", 26)(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Hello, ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h2", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_11_Template, 2, 1, "p", 29)(12, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_12_Template, 6, 1, "div", 30)(13, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_13_Template, 7, 1, "div", 30)(14, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_14_Template, 8, 1, "div", 31)(15, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_15_Template, 3, 2, "div", 32)(16, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_16_Template, 4, 4, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Conditional_17_Template, 35, 9);
  }
  if (rf & 2) {
    let tmp_4_0;
    const d_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.inlineNotice()) ? 0 : -1, tmp_4_0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r1.customerDisplayName == null ? null : d_r1.customerDisplayName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r1.customerDisplayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.consentTitle);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.descriptionPreview ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.resolvedMessageHtml ? 12 : d_r1.messagePreview ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r1.deliveryChannelsSummary ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.validityPeriodDays && d_r1.validityPeriodDays > 0 ? 15 : d_r1.expiresAt ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r1.state === "READY" ? 17 : -1);
  }
}
function PublicConsentRespondComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PublicConsentRespondComponent_Conditional_21_Conditional_1_Conditional_0_Template, 18, 9);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.detail()) ? 0 : -1, tmp_2_0);
  }
}
function PublicConsentRespondComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PublicConsentRespondComponent_Conditional_21_Conditional_0_Template, 5, 1, "div", 21)(1, PublicConsentRespondComponent_Conditional_21_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.errorMessage()) ? 0 : 1, tmp_1_0);
  }
}
var PublicConsentRespondComponent = class _PublicConsentRespondComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.api = inject(PublicConsentInviteService);
    this.logger = inject(LoggerService);
    this.http = inject(HttpClient);
    this.sanitizer = inject(DomSanitizer);
    this.consentPrefsBase = environment.apiUrl.replace(/\/api\/?$/, "") + "/api/public/consent";
    this.loading = signal(false);
    this.submitting = signal(false);
    this.errorMessage = signal(null);
    this.detail = signal(null);
    this.inlineNotice = signal(null);
    this.langSaved = signal(false);
    this.langSaving = signal(false);
    this.langError = signal(null);
    this.channelPrefSaved = signal(false);
    this.channelPrefSaving = signal(false);
    this.channelPrefError = signal(null);
    this.languages = [
      { value: "english", label: "English" },
      { value: "hindi", label: "Hindi" },
      { value: "marathi", label: "Marathi" },
      { value: "gujarati", label: "Gujarati" },
      { value: "bengali", label: "Bengali" },
      { value: "tamil", label: "Tamil" },
      { value: "telugu", label: "Telugu" },
      { value: "malayalam", label: "Malayalam" },
      { value: "urdu", label: "Urdu" }
    ];
    this.selectedLangs = /* @__PURE__ */ new Set(["english"]);
    this.selectedChannels = /* @__PURE__ */ new Set();
  }
  ngOnInit() {
    this.routeSub = combineLatest([this.route.data, this.route.queryParamMap]).subscribe(([data, params]) => {
      const resolved = data["consent"];
      this.loading.set(false);
      this.errorMessage.set(null);
      this.detail.set(null);
      this.inlineNotice.set(null);
      if (!resolved) {
        this.errorMessage.set("Something went wrong while loading this page.");
        return;
      }
      if (resolved.status === "session-error") {
        this.errorMessage.set("Your session is invalid or has expired. Please use the link from your consent email.");
        return;
      }
      if (resolved.status === "load-error") {
        this.errorMessage.set(resolved.message);
        return;
      }
      this.detail.set(resolved.detail);
      if (params.get("langSaved") === "true") {
        this.langSaved.set(true);
      }
      const d = resolved.detail;
      if (d.state === "EXPIRED") {
        this.inlineNotice.set("This link has expired. Please contact us if you still need to respond.");
      } else if (d.state === "ACCEPTED" || d.state === "REJECTED" || d.state === "WITHDRAWN") {
        this.inlineNotice.set("Thank you \u2014 your response is already on file. No further action is needed.");
      }
    });
  }
  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }
  safeResolvedHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html ?? "");
  }
  toggleLang(value) {
    if (value === "english") {
      this.selectedLangs.add("english");
      return;
    }
    if (this.selectedLangs.has(value)) {
      this.selectedLangs.delete(value);
    } else {
      this.selectedLangs.add(value);
    }
  }
  saveLangPreference() {
    const consentDbId = this.detail()?.consentDbId;
    if (consentDbId == null) {
      return;
    }
    this.langSaving.set(true);
    this.langError.set(null);
    let params = new HttpParams().set("consentDbId", String(consentDbId));
    for (const lang of this.selectedLangs) {
      params = params.append("lang", lang);
    }
    const url = `${this.consentPrefsBase}/language-preference`;
    this.http.post(url, null, { params, withCredentials: true }).subscribe({
      next: () => {
        this.langSaved.set(true);
        this.langSaving.set(false);
      },
      error: (err) => {
        const msg = err?.error?.message || err?.error?.error || err?.message || "Could not save preference. Please try again.";
        this.langError.set(typeof msg === "string" ? msg : "Could not save preference. Please try again.");
        this.langSaving.set(false);
      }
    });
  }
  saveChannelPreference() {
    const consentDbId = this.detail()?.consentDbId;
    if (consentDbId == null)
      return;
    this.channelPrefSaving.set(true);
    this.channelPrefError.set(null);
    let params = new HttpParams().set("consentDbId", String(consentDbId));
    for (const ch of this.selectedChannels) {
      params = params.append("channels", ch);
    }
    const url = `${this.consentPrefsBase}/channel-preference`;
    this.http.post(url, null, { params, withCredentials: true }).subscribe({
      next: () => {
        this.channelPrefSaved.set(true);
        this.channelPrefSaving.set(false);
      },
      error: (err) => {
        const body = err?.error;
        const msg = body?.message || (typeof body === "object" && body !== null && "error" in body ? body.error : null) || err?.message || "Could not save. Please try again.";
        this.channelPrefError.set(typeof msg === "string" ? msg : "Could not save. Please try again.");
        this.channelPrefSaving.set(false);
      }
    });
  }
  toggleChannel(ch) {
    if (this.selectedChannels.has(ch)) {
      this.selectedChannels.delete(ch);
    } else {
      this.selectedChannels.add(ch);
    }
  }
  channelOn(ch) {
    return this.selectedChannels.has(ch);
  }
  submit(decision) {
    const d = this.detail();
    if (!d || d.state !== "READY") {
      return;
    }
    this.submitting.set(true);
    this.errorMessage.set(null);
    this.api.respond(decision).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (!res.success || !res.data) {
          this.errorMessage.set(res.message || "We could not record your response.");
          return;
        }
        this.detail.set(res.data);
        this.inlineNotice.set(decision === "ACCEPT" ? "Thank you. Your consent has been recorded successfully." : decision === "WITHDRAW" ? "Your consent has been withdrawn as requested." : "Your choice has been recorded. You will not be contacted under this request.");
      },
      error: (err) => {
        this.submitting.set(false);
        this.logger.error("PublicConsentRespond", "respond failed", err);
        const body = err?.error;
        const msg = body?.message || (typeof body === "object" && body !== null && "error" in body ? body.error : null) || err?.message || "We could not record your response. Please try again.";
        this.errorMessage.set(typeof msg === "string" ? msg : "We could not record your response. Please try again.");
      }
    });
  }
  static {
    this.\u0275fac = function PublicConsentRespondComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicConsentRespondComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicConsentRespondComponent, selectors: [["app-public-consent-respond"]], decls: 33, vars: 1, consts: [["dir", "ltr", 1, "public-page"], ["aria-hidden", "true", 1, "bg-orb", "bg-orb--1"], ["aria-hidden", "true", 1, "bg-orb", "bg-orb--2"], ["aria-hidden", "true", 1, "bg-orb", "bg-orb--3"], ["aria-hidden", "true", 1, "bg-orb", "bg-orb--4"], [1, "shell-card"], [1, "card-header"], [1, "brand"], [1, "brand-icon-wrap"], [1, "brand-icon-inner"], [1, "header-badge"], [1, "header-badge__dot"], ["aria-hidden", "true", 1, "gradient-strip"], [1, "title"], [1, "lede"], [1, "center"], [1, "card-footer"], [1, "footer-sep"], [1, "spinner-wrap"], ["diameter", "40", "mode", "indeterminate"], [1, "muted"], ["role", "alert", 1, "banner", "banner--error"], [1, "banner-icon", "banner-icon--error"], ["role", "status", 1, "banner", 3, "banner--ok", "banner--deny", "banner--muted"], [1, "panel"], ["aria-hidden", "true", 1, "panel__accent"], [1, "greet"], [1, "greet__avatar"], [1, "consent-title"], [1, "body-text"], [1, "message-block"], ["role", "region", "aria-label", "Communication channels for this request", 1, "delivery-summary"], [1, "expiry-badge"], ["role", "status", 1, "banner"], [1, "banner-icon"], [1, "message-block__label"], [1, "label-icon"], [1, "message-preview", "message-preview--html", 3, "innerHTML"], [1, "message-preview"], [1, "delivery-summary__k"], [1, "ds-icon"], [1, "delivery-chips"], [1, "delivery-chip"], [1, "expiry-dot"], [1, "pref-section", "pref-section--purple"], [1, "pref-section", "pref-section--teal"], [1, "pref-section__head"], [1, "pref-section__icon-wrap", "pref-section__icon-wrap--teal"], [1, "pref-section__title"], [1, "pref-section__hint"], ["role", "group", "aria-label", "Language preferences", 1, "chip-grid", "chip-grid--teal"], ["type", "button", 1, "chip", 3, "chip--active", "chip--locked", "disabled"], ["mat-flat-button", "", "type", "button", 1, "btn-pref", "btn-pref--teal", 3, "click", "disabled"], [1, "feedback-ok"], [1, "feedback-err"], [1, "decision-section"], [1, "decision-divider"], [1, "decision-divider__text"], [1, "actions"], ["mat-flat-button", "", "type", "button", 1, "btn-action", "btn-accept", 3, "click", "disabled"], [1, "actions-row"], ["mat-stroked-button", "", "type", "button", 1, "btn-action", "btn-decline", 3, "click", "disabled"], ["mat-button", "", "type", "button", 1, "btn-action", "btn-withdraw", 3, "click", "disabled"], [1, "fine-print"], [1, "fine-print__icon"], [1, "pref-section__icon-wrap", "pref-section__icon-wrap--purple"], ["role", "group", "aria-label", "Channel preferences", 1, "chip-grid"], ["type", "button", 1, "chip", 3, "chip--active"], ["mat-flat-button", "", "type", "button", 1, "btn-pref", "btn-pref--purple", 3, "click", "disabled"], ["type", "button", 1, "chip", 3, "click"], ["aria-hidden", "true", 1, "chip__check"], [1, "chip__label"], [1, "btn-spinner"], ["type", "button", 1, "chip", 3, "click", "disabled"], [1, "btn-spinner", "btn-spinner--white"], ["aria-hidden", "true", 1, "btn-accept__icon"], [1, "btn-accept__sub"]], template: function PublicConsentRespondComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "header", 6)(7, "div", 7)(8, "div", 8)(9, "span", 9);
        \u0275\u0275text(10, "C");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(11, " ConsentIQ ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275element(13, "span", 11);
        \u0275\u0275text(14, " Secure Request ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(15, "div", 12);
        \u0275\u0275elementStart(16, "h1", 13);
        \u0275\u0275text(17, "Consent Request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 14);
        \u0275\u0275text(19, "Review the details below and let us know your decision.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, PublicConsentRespondComponent_Conditional_20_Template, 5, 0, "div", 15)(21, PublicConsentRespondComponent_Conditional_21_Template, 2, 1);
        \u0275\u0275elementStart(22, "footer", 16)(23, "span");
        \u0275\u0275text(24, "Powered by ConsentIQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 17);
        \u0275\u0275text(26, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span");
        \u0275\u0275text(28, "Privacy Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 17);
        \u0275\u0275text(30, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span");
        \u0275\u0275text(32, "Help");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275conditional(ctx.loading() ? 20 : 21);
      }
    }, dependencies: [DatePipe, MatButtonModule, MatButton, Dir, MatProgressSpinnerModule, MatProgressSpinner], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.public-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 40px 16px 64px;\n  background:\n    radial-gradient(\n      ellipse 90% 60% at 15% -5%,\n      rgba(124, 58, 237, 0.22) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 85% 105%,\n      rgba(219, 39, 119, 0.18) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 50% 40% at 50% 50%,\n      rgba(13, 148, 136, 0.08) 0%,\n      transparent 60%),\n    linear-gradient(\n      170deg,\n      #0c0d1a 0%,\n      #100b1f 40%,\n      #0f172a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: relative;\n  overflow: hidden;\n}\n.bg-orb[_ngcontent-%COMP%] {\n  position: fixed;\n  border-radius: 50%;\n  filter: blur(90px);\n  pointer-events: none;\n  z-index: 0;\n  animation: _ngcontent-%COMP%_orb-drift 20s ease-in-out infinite alternate;\n}\n.bg-orb--1[_ngcontent-%COMP%] {\n  width: 480px;\n  height: 480px;\n  top: -140px;\n  left: -120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(124, 58, 237, 0.28) 0%,\n      transparent 70%);\n  animation-duration: 18s;\n}\n.bg-orb--2[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  bottom: -100px;\n  right: -100px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(219, 39, 119, 0.22) 0%,\n      transparent 70%);\n  animation-duration: 24s;\n  animation-direction: alternate-reverse;\n}\n.bg-orb--3[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 260px;\n  top: 40%;\n  left: 55%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 148, 136, 0.15) 0%,\n      transparent 70%);\n  animation-duration: 16s;\n}\n.bg-orb--4[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  top: 20%;\n  right: 20%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(37, 99, 235, 0.12) 0%,\n      transparent 70%);\n  animation-duration: 28s;\n  animation-direction: alternate-reverse;\n}\n@keyframes _ngcontent-%COMP%_orb-drift {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  100% {\n    transform: translate(28px, 18px) scale(1.1);\n  }\n}\n.shell-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 620px;\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 24px;\n  box-shadow:\n    0 0 0 1px rgba(124, 58, 237, 0.1),\n    0 4px 6px rgba(0, 0, 0, 0.04),\n    0 20px 60px rgba(0, 0, 0, 0.16),\n    0 40px 100px rgba(124, 58, 237, 0.12);\n  padding: 32px 32px 36px;\n  animation: _ngcontent-%COMP%_card-rise 0.6s cubic-bezier(0.22, 0.68, 0, 1.2) both;\n}\n@media (max-width: 480px) {\n  .shell-card[_ngcontent-%COMP%] {\n    padding: 22px 18px 28px;\n    border-radius: 16px;\n  }\n}\n@keyframes _ngcontent-%COMP%_card-rise {\n  from {\n    opacity: 0;\n    transform: translateY(32px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.gradient-strip[_ngcontent-%COMP%] {\n  height: 3px;\n  border-radius: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #7c3aed,\n      #db2777,\n      #0d9488,\n      #2563eb);\n  margin-bottom: 24px;\n  opacity: 0.8;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #7c3aed;\n}\n.brand-icon-wrap[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_pulse-brand 3s ease-in-out infinite;\n}\n.brand-icon-inner[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 900;\n  color: white;\n  letter-spacing: 0;\n}\n@keyframes _ngcontent-%COMP%_pulse-brand {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.35);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(124, 58, 237, 0);\n  }\n}\n.header-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #16a34a;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 20px;\n  padding: 4px 11px;\n}\n.header-badge__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #16a34a;\n  animation: _ngcontent-%COMP%_blink-dot 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_blink-dot {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: clamp(22px, 5vw, 28px);\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.025em;\n  line-height: 1.15;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.lede[_ngcontent-%COMP%] {\n  margin: 0 0 28px;\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.65;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 48px 0;\n}\n.spinner-wrap[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-radius: 50%;\n  background: #ede9fe;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n}\n.banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 10px;\n  padding: 13px 15px;\n  font-size: 14px;\n  margin-bottom: 20px;\n  line-height: 1.55;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_fade-in 0.3s ease both;\n}\n.banner-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.3;\n  flex-shrink: 0;\n  font-weight: 700;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.banner--error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.banner--error[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n}\n.banner--ok[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n}\n.banner--ok[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n  color: #16a34a;\n}\n.banner--muted[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n}\n.banner--muted[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.banner--deny[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.banner--deny[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.panel[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #f8fafc 0%,\n      #f0f4ff 100%);\n  border: 1px solid #c4b5fd;\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n@media (max-width: 480px) {\n  .panel[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n.panel__accent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  border-radius: 16px 16px 0 0;\n}\n.greet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #475569;\n  margin-bottom: 10px;\n}\n.greet[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #7c3aed;\n  font-weight: 700;\n}\n.greet__avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  color: white;\n  font-size: 12px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.consent-title[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: clamp(17px, 4vw, 20px);\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.015em;\n  line-height: 1.3;\n}\n.body-text[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.75;\n}\n.message-block[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.message-block__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.09em;\n  color: #7c3aed;\n  margin-bottom: 8px;\n}\n.label-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.message-preview[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  font-size: 14px;\n  line-height: 1.75;\n  color: #475569;\n  background: white;\n  border: 1px solid #c4b5fd;\n  border-left: 4px solid #7c3aed;\n  border-radius: 6px;\n  padding: 14px 16px;\n  max-height: 200px;\n  overflow: auto;\n}\n.delivery-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 16px;\n  padding: 12px 14px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: white;\n}\n.delivery-summary__k[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #94a3b8;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ds-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.delivery-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.delivery-chip[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #ede9fe;\n  border: 1px solid #c4b5fd;\n  color: #7c3aed;\n}\n.expiry-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #d97706;\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 20px;\n  padding: 4px 12px;\n}\n.expiry-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #d97706;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_blink-dot 2s ease-in-out infinite;\n}\n.pref-section[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  padding: 22px 24px;\n  margin-bottom: 14px;\n  border: 1px solid;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.pref-section[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n@media (max-width: 480px) {\n  .pref-section[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n.pref-section--purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      white 0%,\n      #f8f5ff 100%);\n  border-color: #c4b5fd;\n}\n.pref-section--teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      white 0%,\n      #f0fdfa 100%);\n  border-color: #99f6e4;\n}\n.pref-section__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.pref-section__icon-wrap[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pref-section__icon-wrap--purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  border: 1px solid #c4b5fd;\n}\n.pref-section__icon-wrap--teal[_ngcontent-%COMP%] {\n  background: #ccfbf1;\n  border: 1px solid #99f6e4;\n}\n.pref-section__title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n.pref-section__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.55;\n}\n.chip-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.chip[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  min-height: 40px;\n  padding: 0 14px;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  background: white;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.12s ease,\n    box-shadow 0.18s ease;\n}\n.chip[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #7c3aed;\n  color: #7c3aed;\n  background: #ede9fe;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.15);\n}\n.chip[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.chip--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3);\n}\n.chip--active[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  color: white;\n}\n.chip--locked[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16a34a;\n  cursor: not-allowed;\n}\n.chip[_ngcontent-%COMP%]:disabled:not(.chip--locked) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.chip-grid--teal[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #0d9488;\n  color: #0d9488;\n  background: #ccfbf1;\n  box-shadow: 0 4px 12px rgba(13, 148, 136, 0.15);\n}\n.chip-grid--teal[_ngcontent-%COMP%]   .chip--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #2563eb 100%);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 4px 14px rgba(13, 148, 136, 0.3);\n}\n.chip__check[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  line-height: 1;\n  width: 14px;\n  flex-shrink: 0;\n  text-align: center;\n}\n.chip__label[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.btn-pref[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n  align-items: center;\n  gap: 7px;\n  height: 40px !important;\n  padding: 0 20px !important;\n  border-radius: 10px !important;\n  color: white !important;\n  font-size: 13px !important;\n  font-weight: 700 !important;\n  border: none !important;\n  cursor: pointer;\n  transition:\n    opacity 0.18s ease,\n    transform 0.12s ease,\n    box-shadow 0.18s ease;\n  margin-bottom: 10px;\n}\n.btn-pref--purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%) !important;\n}\n.btn-pref--teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #2563eb 100%) !important;\n}\n.btn-pref[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);\n}\n.btn-pref[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-pref[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.feedback-ok[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #16a34a;\n  animation: _ngcontent-%COMP%_fade-in 0.25s ease both;\n}\n.feedback-err[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #dc2626;\n  animation: _ngcontent-%COMP%_fade-in 0.25s ease both;\n}\n.decision-section[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.decision-divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 0 0 24px;\n}\n.decision-divider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #c4b5fd,\n      #fbcfe8,\n      transparent);\n}\n.decision-divider__text[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 0 14px;\n  background: white;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.actions-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 52px !important;\n  border-radius: 10px !important;\n  font-size: 15px !important;\n  font-weight: 700 !important;\n  letter-spacing: -0.01em;\n  cursor: pointer;\n  transition:\n    transform 0.12s ease,\n    box-shadow 0.18s ease,\n    opacity 0.15s ease !important;\n}\n.btn-action[_ngcontent-%COMP%]:not(:disabled):active {\n  transform: scale(0.98);\n}\n.btn-accept[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8 0%,\n      #7c3aed 50%,\n      #db2777 100%) !important;\n  color: white !important;\n  border: none !important;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.35) !important;\n  flex-direction: column;\n  gap: 2px !important;\n}\n.btn-accept[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 10px 32px rgba(124, 58, 237, 0.45) !important;\n  transform: translateY(-2px);\n  opacity: 0.95;\n}\n.btn-accept__icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n}\n.btn-accept__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  opacity: 0.8;\n  display: block;\n}\n.btn-decline[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0 !important;\n  color: #475569 !important;\n  background: white !important;\n  font-size: 14px !important;\n}\n.btn-decline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #dc2626 !important;\n  color: #dc2626 !important;\n  background: #fef2f2 !important;\n  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15) !important;\n}\n.btn-withdraw[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0 !important;\n  color: #94a3b8 !important;\n  background: #f8fafc !important;\n  font-size: 14px !important;\n}\n.btn-withdraw[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #e2e8f0 !important;\n  color: #475569 !important;\n  background: white !important;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.fine-print[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 18px 0 0;\n  font-size: 12px;\n  color: #94a3b8;\n  line-height: 1.65;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n}\n.fine-print__icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 28px;\n  padding-top: 20px;\n  border-top: 1px solid #e2e8f0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.footer-sep[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n/*# sourceMappingURL=public-consent-respond.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicConsentRespondComponent, [{
    type: Component,
    args: [{ selector: "app-public-consent-respond", standalone: true, imports: [DatePipe, MatButtonModule, MatProgressSpinnerModule], template: `<div class="public-page" dir="ltr">\r
\r
  <!-- Ambient background orbs -->\r
  <div class="bg-orb bg-orb--1" aria-hidden="true"></div>\r
  <div class="bg-orb bg-orb--2" aria-hidden="true"></div>\r
  <div class="bg-orb bg-orb--3" aria-hidden="true"></div>\r
  <div class="bg-orb bg-orb--4" aria-hidden="true"></div>\r
\r
  <div class="shell-card">\r
\r
    <!-- Header -->\r
    <header class="card-header">\r
      <div class="brand">\r
        <div class="brand-icon-wrap">\r
          <span class="brand-icon-inner">C</span>\r
        </div>\r
        ConsentIQ\r
      </div>\r
      <div class="header-badge">\r
        <span class="header-badge__dot"></span>\r
        Secure Request\r
      </div>\r
    </header>\r
\r
    <!-- Decorative gradient strip -->\r
    <div class="gradient-strip" aria-hidden="true"></div>\r
\r
    <h1 class="title">Consent Request</h1>\r
    <p class="lede">Review the details below and let us know your decision.</p>\r
\r
    <!-- Loading -->\r
    @if (loading()) {\r
    <div class="center">\r
      <div class="spinner-wrap">\r
        <mat-progress-spinner diameter="40" mode="indeterminate" />\r
      </div>\r
      <p class="muted">Loading your request\u2026</p>\r
    </div>\r
    } @else {\r
\r
    <!-- Error -->\r
    @if (errorMessage(); as err) {\r
    <div class="banner banner--error" role="alert">\r
      <span class="banner-icon banner-icon--error">\u26A0</span>\r
      <span>{{ err }}</span>\r
    </div>\r
    } @else {\r
\r
    @if (detail(); as d) {\r
\r
    <!-- Inline notice banner -->\r
    @if (inlineNotice(); as note) {\r
    <div class="banner" [class.banner--ok]="d.state === 'ACCEPTED'" [class.banner--deny]="d.state === 'REJECTED'"\r
      [class.banner--muted]="d.state === 'EXPIRED' || d.state === 'WITHDRAWN'" role="status">\r
      <span class="banner-icon">\r
        @if (d.state === 'ACCEPTED') { \u2713 }\r
        @else if (d.state === 'REJECTED' || d.state === 'WITHDRAWN') { \u2715 }\r
        @else { \u2139 }\r
      </span>\r
      <span>{{ note }}</span>\r
    </div>\r
    }\r
\r
    <!-- Consent details panel -->\r
    <section class="panel">\r
      <div class="panel__accent" aria-hidden="true"></div>\r
\r
      <div class="greet">\r
        <span class="greet__avatar">{{ d.customerDisplayName?.charAt(0) }}</span>\r
        Hello, <strong>{{ d.customerDisplayName }}</strong>\r
      </div>\r
\r
      <h2 class="consent-title">{{ d.consentTitle }}</h2>\r
\r
      @if (d.descriptionPreview) {\r
      <p class="body-text">{{ d.descriptionPreview }}</p>\r
      }\r
\r
      <!-- Message block: prefer resolved HTML (tags + images), fall back to plain text -->\r
      @if (d.resolvedMessageHtml) {\r
      <div class="message-block">\r
        <div class="message-block__label">\r
          <span class="label-icon">\u{1F4AC}</span>\r
          What you are being asked to approve\r
        </div>\r
        <div class="message-preview message-preview--html"\r
          [innerHTML]="safeResolvedHtml(d.resolvedMessageHtml)"></div>\r
      </div>\r
      } @else if (d.messagePreview) {\r
      <div class="message-block">\r
        <div class="message-block__label">\r
          <span class="label-icon">\u{1F4AC}</span>\r
          What you are being asked to approve\r
        </div>\r
        <div class="message-preview">{{ d.messagePreview }}</div>\r
      </div>\r
      }\r
\r
      @if (d.deliveryChannelsSummary) {\r
      <div class="delivery-summary" role="region" aria-label="Communication channels for this request">\r
        <div class="delivery-summary__k">\r
          <span class="ds-icon">\u{1F4E1}</span>\r
          {{ d.deliveryChannelsSummary.includes(', ')\r
          ? 'Channels'\r
          : 'Channel' }}\r
        </div>\r
        <div class="delivery-chips">\r
          @for (ch of d.deliveryChannelsSummary.split(', '); track ch) {\r
          <span class="delivery-chip">{{ ch }}</span>\r
          }\r
        </div>\r
      </div>\r
      }\r
\r
      @if (d.validityPeriodDays && d.validityPeriodDays > 0) {\r
      <div class="expiry-badge">\r
        <span class="expiry-dot"></span>\r
        Consent valid for {{ d.validityPeriodDays }} day{{ d.validityPeriodDays === 1 ? '' : 's' }} from acceptance\r
      </div>\r
      } @else if (d.expiresAt) {\r
      <div class="expiry-badge">\r
        <span class="expiry-dot"></span>\r
        Valid until {{ d.expiresAt | date: 'dd MMM yyyy' }}\r
      </div>\r
      }\r
    </section>\r
\r
    <!-- \u2500\u2500 READY STATE \u2500\u2500 -->\r
    @if (d.state === 'READY') {\r
\r
    <!-- \u2500\u2500 CHANNEL PREFERENCE \u2500\u2500 -->\r
    @if (d.availableChannels && d.availableChannels.length >= 1) {\r
    <div class="pref-section pref-section--purple">\r
      <div class="pref-section__head">\r
        <div class="pref-section__icon-wrap pref-section__icon-wrap--purple">\r
          \u{1F4E1}\r
        </div>\r
        <div>\r
          <h3 class="pref-section__title">Preferred channels</h3>\r
          <p class="pref-section__hint">\r
            Choose how you'd like to receive this consent communication.\r
          </p>\r
        </div>\r
      </div>\r
\r
      <div class="chip-grid" role="group" aria-label="Channel preferences">\r
        @for (ch of d.availableChannels; track ch) {\r
        <button type="button" class="chip" [class.chip--active]="channelOn(ch)" (click)="toggleChannel(ch)"\r
          [attr.aria-pressed]="channelOn(ch)">\r
          <span class="chip__check" aria-hidden="true">\r
            @if (channelOn(ch)) { \u2713 }\r
          </span>\r
          <span class="chip__label">{{ ch }}</span>\r
        </button>\r
        }\r
      </div>\r
\r
      <button mat-flat-button type="button" class="btn-pref btn-pref--purple"\r
        [disabled]="channelPrefSaving() || selectedChannels.size === 0" (click)="saveChannelPreference()">\r
        @if (channelPrefSaving()) {\r
        <span class="btn-spinner"></span>Saving\u2026\r
        } @else {\r
        \u{1F4BE} Save channel preference\r
        }\r
      </button>\r
\r
      @if (channelPrefSaved()) {\r
      <p class="feedback-ok">\u2713 Channel preference saved.</p>\r
      }\r
      @if (channelPrefError(); as chErr) {\r
      <p class="feedback-err">{{ chErr }}</p>\r
      }\r
    </div>\r
    }\r
\r
    <!-- \u2500\u2500 LANGUAGE PREFERENCE \u2500\u2500 -->\r
    <div class="pref-section pref-section--teal">\r
      <div class="pref-section__head">\r
        <div class="pref-section__icon-wrap pref-section__icon-wrap--teal">\r
          \u{1F310}\r
        </div>\r
        <div>\r
          <h3 class="pref-section__title">Language preference</h3>\r
          <p class="pref-section__hint">\r
            Choose the language(s) you'd like to receive this communication in.\r
          </p>\r
        </div>\r
      </div>\r
\r
      <div class="chip-grid chip-grid--teal" role="group" aria-label="Language preferences">\r
        @for (lang of languages; track lang.value) {\r
        <button type="button" class="chip" [class.chip--active]="selectedLangs.has(lang.value)"\r
          [class.chip--locked]="lang.value === 'english'" [disabled]="lang.value === 'english'"\r
          (click)="toggleLang(lang.value)" [attr.aria-pressed]="selectedLangs.has(lang.value)">\r
          <span class="chip__check" aria-hidden="true">\r
            @if (selectedLangs.has(lang.value)) { \u2713 }\r
          </span>\r
          <span class="chip__label">{{ lang.label }}</span>\r
        </button>\r
        }\r
      </div>\r
\r
      <button mat-flat-button type="button" class="btn-pref btn-pref--teal" [disabled]="langSaving()"\r
        (click)="saveLangPreference()">\r
        @if (langSaving()) {\r
        <span class="btn-spinner"></span>Saving\u2026\r
        } @else {\r
        \u{1F4BE} Save language preference\r
        }\r
      </button>\r
\r
      @if (langSaved()) {\r
      <p class="feedback-ok">\u2713 Language preference saved.</p>\r
      }\r
      @if (langError(); as langErr) {\r
      <p class="feedback-err">{{ langErr }}</p>\r
      }\r
    </div>\r
\r
    <!-- \u2500\u2500 DECISION \u2500\u2500 -->\r
    <div class="decision-section">\r
      <div class="decision-divider">\r
        <span class="decision-divider__text">\u2726 Your decision \u2726</span>\r
      </div>\r
\r
      <div class="actions">\r
        <button mat-flat-button type="button" class="btn-action btn-accept" [disabled]="submitting()"\r
          (click)="submit('ACCEPT')">\r
          @if (submitting()) {\r
          <span class="btn-spinner btn-spinner--white"></span>\r
          Processing\u2026\r
          } @else {\r
          <span class="btn-accept__icon" aria-hidden="true">\u2713</span>\r
          <span>\r
            Accept consent\r
            <span class="btn-accept__sub">I agree to receive communications</span>\r
          </span>\r
          }\r
        </button>\r
\r
        <div class="actions-row">\r
          <button mat-stroked-button type="button" class="btn-action btn-decline" [disabled]="submitting()"\r
            (click)="submit('DECLINE')">\r
            \u2715 Decline\r
          </button>\r
\r
          <button mat-button type="button" class="btn-action btn-withdraw" [disabled]="submitting()"\r
            (click)="submit('WITHDRAW')">\r
            \u21A9 Withdraw\r
          </button>\r
        </div>\r
      </div>\r
\r
      <p class="fine-print">\r
        <span class="fine-print__icon">\u{1F512}</span>\r
        You can only submit once. Contact support if you need clarification before deciding.\r
      </p>\r
    </div>\r
\r
    }\r
    }\r
    }\r
    }\r
\r
    <!-- Footer -->\r
    <footer class="card-footer">\r
      <span>Powered by ConsentIQ</span>\r
      <span class="footer-sep">\xB7</span>\r
      <span>Privacy Policy</span>\r
      <span class="footer-sep">\xB7</span>\r
      <span>Help</span>\r
    </footer>\r
\r
  </div>\r
</div>`, styles: ['/* src/app/features/public/public-consent-respond/public-consent-respond.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.public-page {\n  min-height: 100vh;\n  padding: 40px 16px 64px;\n  background:\n    radial-gradient(\n      ellipse 90% 60% at 15% -5%,\n      rgba(124, 58, 237, 0.22) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 85% 105%,\n      rgba(219, 39, 119, 0.18) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 50% 40% at 50% 50%,\n      rgba(13, 148, 136, 0.08) 0%,\n      transparent 60%),\n    linear-gradient(\n      170deg,\n      #0c0d1a 0%,\n      #100b1f 40%,\n      #0f172a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: relative;\n  overflow: hidden;\n}\n.bg-orb {\n  position: fixed;\n  border-radius: 50%;\n  filter: blur(90px);\n  pointer-events: none;\n  z-index: 0;\n  animation: orb-drift 20s ease-in-out infinite alternate;\n}\n.bg-orb--1 {\n  width: 480px;\n  height: 480px;\n  top: -140px;\n  left: -120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(124, 58, 237, 0.28) 0%,\n      transparent 70%);\n  animation-duration: 18s;\n}\n.bg-orb--2 {\n  width: 380px;\n  height: 380px;\n  bottom: -100px;\n  right: -100px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(219, 39, 119, 0.22) 0%,\n      transparent 70%);\n  animation-duration: 24s;\n  animation-direction: alternate-reverse;\n}\n.bg-orb--3 {\n  width: 260px;\n  height: 260px;\n  top: 40%;\n  left: 55%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 148, 136, 0.15) 0%,\n      transparent 70%);\n  animation-duration: 16s;\n}\n.bg-orb--4 {\n  width: 200px;\n  height: 200px;\n  top: 20%;\n  right: 20%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(37, 99, 235, 0.12) 0%,\n      transparent 70%);\n  animation-duration: 28s;\n  animation-direction: alternate-reverse;\n}\n@keyframes orb-drift {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  100% {\n    transform: translate(28px, 18px) scale(1.1);\n  }\n}\n.shell-card {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 620px;\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 24px;\n  box-shadow:\n    0 0 0 1px rgba(124, 58, 237, 0.1),\n    0 4px 6px rgba(0, 0, 0, 0.04),\n    0 20px 60px rgba(0, 0, 0, 0.16),\n    0 40px 100px rgba(124, 58, 237, 0.12);\n  padding: 32px 32px 36px;\n  animation: card-rise 0.6s cubic-bezier(0.22, 0.68, 0, 1.2) both;\n}\n@media (max-width: 480px) {\n  .shell-card {\n    padding: 22px 18px 28px;\n    border-radius: 16px;\n  }\n}\n@keyframes card-rise {\n  from {\n    opacity: 0;\n    transform: translateY(32px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.gradient-strip {\n  height: 3px;\n  border-radius: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #7c3aed,\n      #db2777,\n      #0d9488,\n      #2563eb);\n  margin-bottom: 24px;\n  opacity: 0.8;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #7c3aed;\n}\n.brand-icon-wrap {\n  width: 30px;\n  height: 30px;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: pulse-brand 3s ease-in-out infinite;\n}\n.brand-icon-inner {\n  font-size: 14px;\n  font-weight: 900;\n  color: white;\n  letter-spacing: 0;\n}\n@keyframes pulse-brand {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.35);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(124, 58, 237, 0);\n  }\n}\n.header-badge {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #16a34a;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 20px;\n  padding: 4px 11px;\n}\n.header-badge__dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #16a34a;\n  animation: blink-dot 2s ease-in-out infinite;\n}\n@keyframes blink-dot {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n.title {\n  margin: 0 0 8px;\n  font-size: clamp(22px, 5vw, 28px);\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.025em;\n  line-height: 1.15;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.lede {\n  margin: 0 0 28px;\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.65;\n}\n.center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 48px 0;\n}\n.spinner-wrap {\n  padding: 8px;\n  border-radius: 50%;\n  background: #ede9fe;\n}\n.muted {\n  color: #94a3b8;\n  font-size: 14px;\n}\n.banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 10px;\n  padding: 13px 15px;\n  font-size: 14px;\n  margin-bottom: 20px;\n  line-height: 1.55;\n  font-weight: 500;\n  animation: fade-in 0.3s ease both;\n}\n.banner-icon {\n  font-size: 16px;\n  line-height: 1.3;\n  flex-shrink: 0;\n  font-weight: 700;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.banner--error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.banner--error .banner-icon {\n  background: #fecaca;\n  color: #dc2626;\n}\n.banner--ok {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n}\n.banner--ok .banner-icon {\n  background: #bbf7d0;\n  color: #16a34a;\n}\n.banner--muted {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n}\n.banner--muted .banner-icon {\n  background: #e2e8f0;\n  color: #475569;\n}\n.banner--deny {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.banner--deny .banner-icon {\n  background: #fecaca;\n  color: #dc2626;\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.panel {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #f8fafc 0%,\n      #f0f4ff 100%);\n  border: 1px solid #c4b5fd;\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n@media (max-width: 480px) {\n  .panel {\n    padding: 18px;\n  }\n}\n.panel__accent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  border-radius: 16px 16px 0 0;\n}\n.greet {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #475569;\n  margin-bottom: 10px;\n}\n.greet strong {\n  color: #7c3aed;\n  font-weight: 700;\n}\n.greet__avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  color: white;\n  font-size: 12px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.consent-title {\n  margin: 0 0 14px;\n  font-size: clamp(17px, 4vw, 20px);\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.015em;\n  line-height: 1.3;\n}\n.body-text {\n  margin: 0 0 18px;\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.75;\n}\n.message-block {\n  margin-bottom: 18px;\n}\n.message-block__label {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.09em;\n  color: #7c3aed;\n  margin-bottom: 8px;\n}\n.label-icon {\n  font-size: 14px;\n}\n.message-preview {\n  white-space: pre-wrap;\n  font-size: 14px;\n  line-height: 1.75;\n  color: #475569;\n  background: white;\n  border: 1px solid #c4b5fd;\n  border-left: 4px solid #7c3aed;\n  border-radius: 6px;\n  padding: 14px 16px;\n  max-height: 200px;\n  overflow: auto;\n}\n.delivery-summary {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 16px;\n  padding: 12px 14px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: white;\n}\n.delivery-summary__k {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #94a3b8;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ds-icon {\n  font-size: 14px;\n}\n.delivery-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.delivery-chip {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #ede9fe;\n  border: 1px solid #c4b5fd;\n  color: #7c3aed;\n}\n.expiry-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #d97706;\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 20px;\n  padding: 4px 12px;\n}\n.expiry-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #d97706;\n  flex-shrink: 0;\n  animation: blink-dot 2s ease-in-out infinite;\n}\n.pref-section {\n  border-radius: 16px;\n  padding: 22px 24px;\n  margin-bottom: 14px;\n  border: 1px solid;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.pref-section:hover {\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n@media (max-width: 480px) {\n  .pref-section {\n    padding: 18px;\n  }\n}\n.pref-section--purple {\n  background:\n    linear-gradient(\n      145deg,\n      white 0%,\n      #f8f5ff 100%);\n  border-color: #c4b5fd;\n}\n.pref-section--teal {\n  background:\n    linear-gradient(\n      145deg,\n      white 0%,\n      #f0fdfa 100%);\n  border-color: #99f6e4;\n}\n.pref-section__head {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.pref-section__icon-wrap {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pref-section__icon-wrap--purple {\n  background: #ede9fe;\n  border: 1px solid #c4b5fd;\n}\n.pref-section__icon-wrap--teal {\n  background: #ccfbf1;\n  border: 1px solid #99f6e4;\n}\n.pref-section__title {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n.pref-section__hint {\n  margin: 0;\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.55;\n}\n.chip-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.chip {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  min-height: 40px;\n  padding: 0 14px;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  background: white;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition:\n    background 0.18s ease,\n    color 0.18s ease,\n    border-color 0.18s ease,\n    transform 0.12s ease,\n    box-shadow 0.18s ease;\n}\n.chip:hover:not(:disabled) {\n  border-color: #7c3aed;\n  color: #7c3aed;\n  background: #ede9fe;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.15);\n}\n.chip:active:not(:disabled) {\n  transform: translateY(0);\n}\n.chip--active {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3);\n}\n.chip--active:hover:not(:disabled) {\n  opacity: 0.9;\n  color: white;\n}\n.chip--locked {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n  color: #16a34a;\n  cursor: not-allowed;\n}\n.chip:disabled:not(.chip--locked) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.chip-grid--teal .chip:hover:not(:disabled) {\n  border-color: #0d9488;\n  color: #0d9488;\n  background: #ccfbf1;\n  box-shadow: 0 4px 12px rgba(13, 148, 136, 0.15);\n}\n.chip-grid--teal .chip--active {\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #2563eb 100%);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 4px 14px rgba(13, 148, 136, 0.3);\n}\n.chip__check {\n  font-size: 11px;\n  font-weight: 800;\n  line-height: 1;\n  width: 14px;\n  flex-shrink: 0;\n  text-align: center;\n}\n.chip__label {\n  line-height: 1;\n}\n.btn-pref {\n  display: inline-flex !important;\n  align-items: center;\n  gap: 7px;\n  height: 40px !important;\n  padding: 0 20px !important;\n  border-radius: 10px !important;\n  color: white !important;\n  font-size: 13px !important;\n  font-weight: 700 !important;\n  border: none !important;\n  cursor: pointer;\n  transition:\n    opacity 0.18s ease,\n    transform 0.12s ease,\n    box-shadow 0.18s ease;\n  margin-bottom: 10px;\n}\n.btn-pref--purple {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%) !important;\n}\n.btn-pref--teal {\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #2563eb 100%) !important;\n}\n.btn-pref:hover:not(:disabled) {\n  opacity: 0.88;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);\n}\n.btn-pref:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-pref:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.feedback-ok {\n  margin: 4px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #16a34a;\n  animation: fade-in 0.25s ease both;\n}\n.feedback-err {\n  margin: 4px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #dc2626;\n  animation: fade-in 0.25s ease both;\n}\n.decision-section {\n  margin-top: 10px;\n}\n.decision-divider {\n  position: relative;\n  text-align: center;\n  margin: 0 0 24px;\n}\n.decision-divider::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #c4b5fd,\n      #fbcfe8,\n      transparent);\n}\n.decision-divider__text {\n  position: relative;\n  display: inline-block;\n  padding: 0 14px;\n  background: white;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #db2777 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.actions {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.actions-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.btn-action {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 52px !important;\n  border-radius: 10px !important;\n  font-size: 15px !important;\n  font-weight: 700 !important;\n  letter-spacing: -0.01em;\n  cursor: pointer;\n  transition:\n    transform 0.12s ease,\n    box-shadow 0.18s ease,\n    opacity 0.15s ease !important;\n}\n.btn-action:not(:disabled):active {\n  transform: scale(0.98);\n}\n.btn-accept {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8 0%,\n      #7c3aed 50%,\n      #db2777 100%) !important;\n  color: white !important;\n  border: none !important;\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.35) !important;\n  flex-direction: column;\n  gap: 2px !important;\n}\n.btn-accept:hover:not(:disabled) {\n  box-shadow: 0 10px 32px rgba(124, 58, 237, 0.45) !important;\n  transform: translateY(-2px);\n  opacity: 0.95;\n}\n.btn-accept__icon {\n  font-size: 20px;\n  font-weight: 900;\n}\n.btn-accept__sub {\n  font-size: 11px;\n  font-weight: 500;\n  opacity: 0.8;\n  display: block;\n}\n.btn-decline {\n  border: 1.5px solid #e2e8f0 !important;\n  color: #475569 !important;\n  background: white !important;\n  font-size: 14px !important;\n}\n.btn-decline:hover:not(:disabled) {\n  border-color: #dc2626 !important;\n  color: #dc2626 !important;\n  background: #fef2f2 !important;\n  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15) !important;\n}\n.btn-withdraw {\n  border: 1.5px solid #e2e8f0 !important;\n  color: #94a3b8 !important;\n  background: #f8fafc !important;\n  font-size: 14px !important;\n}\n.btn-withdraw:hover:not(:disabled) {\n  border-color: #e2e8f0 !important;\n  color: #475569 !important;\n  background: white !important;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.fine-print {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 18px 0 0;\n  font-size: 12px;\n  color: #94a3b8;\n  line-height: 1.65;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n}\n.fine-print__icon {\n  font-size: 14px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 28px;\n  padding-top: 20px;\n  border-top: 1px solid #e2e8f0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.footer-sep {\n  color: #e2e8f0;\n}\n/*# sourceMappingURL=public-consent-respond.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicConsentRespondComponent, { className: "PublicConsentRespondComponent", filePath: "src/app/features/public/public-consent-respond/public-consent-respond.component.ts", lineNumber: 24 });
})();
export {
  PublicConsentRespondComponent
};
//# sourceMappingURL=chunk-GOU2JVCQ.js.map
