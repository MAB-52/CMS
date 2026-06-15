import {
  customerConsentStatusLabel
} from "./chunk-OV2M2LWC.js";
import {
  AdminService
} from "./chunk-4ANL3VVD.js";
import {
  CustomerConsentRecordService
} from "./chunk-GBUHMVH7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4V3JZOCF.js";
import {
  MatExpansionModule
} from "./chunk-JTDTIVJZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VXKP42CX.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-EJZSSRS2.js";
import "./chunk-F54MANF6.js";
import {
  LoggerService
} from "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import {
  Component,
  DatePipe,
  LowerCasePipe,
  SlicePipe,
  UpperCasePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SKWF3SJ6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/admin/admin-capture-consent/admin-capture-consent.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function AdminCaptureConsentComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
}
function AdminCaptureConsentComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Search ");
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 69);
    \u0275\u0275element(2, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " VIP ");
    \u0275\u0275elementEnd();
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ch_r2);
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, AdminCaptureConsentComponent_Conditional_17_Conditional_27_For_2_Template, 2, 1, "span", 71, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(c_r3.activeDeliveryChannels);
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "mat-spinner", 72);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading records\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No consent records found for this customer");
    \u0275\u0275elementEnd()();
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_36_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 79)(1, "td", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 81);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 81);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 81);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const row_r4 = ctx.$implicit;
    const \u0275$index_155_r5 = ctx.$index;
    \u0275\u0275styleProp("animation-delay", \u0275$index_155_r5 * 40 + "ms");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.consentName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("cc-status cc-status--" + ((tmp_16_0 = row_r4.status == null ? null : (tmp_16_0 = row_r4.status.toString()) == null ? null : tmp_16_0.toLowerCase()) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.respondedAt ? \u0275\u0275pipeBind2(8, 9, row_r4.respondedAt, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.consentValidUntil ? \u0275\u0275pipeBind2(11, 12, row_r4.consentValidUntil, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.lastInviteSentAt ? \u0275\u0275pipeBind2(14, 15, row_r4.lastInviteSentAt, "dd MMM yyyy") : "\u2014");
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "table", 77)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Consent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Responded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Valid until");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Last invite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, AdminCaptureConsentComponent_Conditional_17_Conditional_36_For_16_Template, 15, 18, "tr", 78, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r5.consentHistory());
  }
}
function AdminCaptureConsentComponent_Conditional_17_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275property("value", t_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7.consentName);
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1, "Select a template to see available channels.");
    \u0275\u0275elementEnd();
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_65_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 85)(1, "input", 86);
    \u0275\u0275listener("change", function AdminCaptureConsentComponent_Conditional_17_Conditional_65_For_2_Template_input_change_1_listener($event) {
      const ch_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.toggleChannel(ch_r9, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r9 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cc-toggle--on", ctx_r5.isChannelSelected(ch_r9));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r5.isChannelSelected(ch_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.channelLabel(ch_r9), " ");
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_65_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.channelSelectionHint());
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275repeaterCreate(1, AdminCaptureConsentComponent_Conditional_17_Conditional_65_For_2_Template, 3, 4, "label", 83, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminCaptureConsentComponent_Conditional_17_Conditional_65_Conditional_3_Template, 2, 1, "p", 84);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.deliveryChannels());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.channelSelectionHint() ? 3 : -1);
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 87);
    \u0275\u0275element(2, "circle", 88)(3, "path", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r5.infoMessage(), " ");
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 91);
    \u0275\u0275listener("click", function AdminCaptureConsentComponent_Conditional_17_Conditional_67_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.copyLink());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 92);
    \u0275\u0275element(5, "rect", 93)(6, "path", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Copy ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.lastInviteLink());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r5.canCopyLink());
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 95);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Sending\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 96);
    \u0275\u0275element(1, "line", 97)(2, "polygon", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Send consent email");
    \u0275\u0275elementEnd();
  }
}
function AdminCaptureConsentComponent_Conditional_17_For_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    \u0275\u0275property("value", t_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r11.consentName);
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_94_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 85)(1, "input", 86);
    \u0275\u0275listener("change", function AdminCaptureConsentComponent_Conditional_17_Conditional_94_For_7_Template_input_change_1_listener($event) {
      const ch_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.toggleRightChannel(ch_r13, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r13 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cc-toggle--on", ctx_r5.isRightChannelSelected(ch_r13));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r5.isRightChannelSelected(ch_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.channelLabel(ch_r13), " ");
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "label", 46);
    \u0275\u0275text(2, " Delivery channels ");
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4, "select customer's preferred channels");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 82);
    \u0275\u0275repeaterCreate(6, AdminCaptureConsentComponent_Conditional_17_Conditional_94_For_7_Template, 3, 4, "label", 83, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r5.rightAvailableChannels());
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_95_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 101)(1, "input", 86);
    \u0275\u0275listener("change", function AdminCaptureConsentComponent_Conditional_17_Conditional_95_For_7_Template_input_change_1_listener($event) {
      const lang_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.toggleLanguage(lang_r15, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r15 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cc-toggle--on", ctx_r5.isLanguageSelected(lang_r15));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r5.isLanguageSelected(lang_r15));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.formatLanguage(lang_r15), " ");
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "label", 46);
    \u0275\u0275text(2, " Languages ");
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4, "select customer's preferred languages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 99);
    \u0275\u0275repeaterCreate(6, AdminCaptureConsentComponent_Conditional_17_Conditional_95_For_7_Template, 3, 4, "label", 100, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r5.allLanguages);
  }
}
function AdminCaptureConsentComponent_Conditional_17_For_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r16 = ctx.$implicit;
    \u0275\u0275property("value", m_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r16);
  }
}
function AdminCaptureConsentComponent_Conditional_17_For_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    \u0275\u0275property("value", s_r17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r17);
  }
}
function AdminCaptureConsentComponent_Conditional_17_For_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 102)(1, "input", 103);
    \u0275\u0275listener("change", function AdminCaptureConsentComponent_Conditional_17_For_126_Template_input_change_1_listener() {
      const opt_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.rightConsentStatus.set(opt_r19.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cc-status-option--selected", ctx_r5.rightConsentStatus() === opt_r19.value);
    \u0275\u0275attribute("data-status", opt_r19.value.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275property("value", opt_r19.value)("checked", ctx_r5.rightConsentStatus() === opt_r19.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r19.label, " ");
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 95);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Recording\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminCaptureConsentComponent_Conditional_17_Conditional_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 104);
    \u0275\u0275element(1, "polyline", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Record consent");
    \u0275\u0275elementEnd();
  }
}
function AdminCaptureConsentComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 17)(6, "div", 18)(7, "div")(8, "p", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AdminCaptureConsentComponent_Conditional_17_Conditional_12_Template, 4, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 22)(14, "div", 23)(15, "span", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 25);
    \u0275\u0275element(17, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 23)(21, "span", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 25);
    \u0275\u0275element(23, "rect", 27)(24, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, AdminCaptureConsentComponent_Conditional_17_Conditional_27_Template, 3, 0, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 30)(29, "div", 31)(30, "span", 32);
    \u0275\u0275text(31, "Consent record history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 33);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, AdminCaptureConsentComponent_Conditional_17_Conditional_34_Template, 4, 0, "div", 34)(35, AdminCaptureConsentComponent_Conditional_17_Conditional_35_Template, 7, 0, "div", 35)(36, AdminCaptureConsentComponent_Conditional_17_Conditional_36_Template, 17, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 37)(38, "div", 38);
    \u0275\u0275element(39, "div", 39);
    \u0275\u0275elementStart(40, "div", 31)(41, "span", 32);
    \u0275\u0275text(42, "Send consent via link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 41);
    \u0275\u0275element(45, "path", 42)(46, "path", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "p", 44);
    \u0275\u0275text(48, "A secure one-time link is emailed to the customer's registered address.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 45)(50, "label", 46);
    \u0275\u0275text(51, "Consent template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 47)(53, "select", 48);
    \u0275\u0275listener("ngModelChange", function AdminCaptureConsentComponent_Conditional_17_Template_select_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onLeftTemplateChange($event));
    });
    \u0275\u0275elementStart(54, "option", 49);
    \u0275\u0275text(55, "Choose template\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(56, AdminCaptureConsentComponent_Conditional_17_For_57_Template, 2, 2, "option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 52);
    \u0275\u0275element(60, "polyline", 53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "div", 45)(62, "label", 46);
    \u0275\u0275text(63, "Delivery channels");
    \u0275\u0275elementEnd();
    \u0275\u0275template(64, AdminCaptureConsentComponent_Conditional_17_Conditional_64_Template, 2, 0, "p", 54)(65, AdminCaptureConsentComponent_Conditional_17_Conditional_65_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, AdminCaptureConsentComponent_Conditional_17_Conditional_66_Template, 5, 1, "div", 55)(67, AdminCaptureConsentComponent_Conditional_17_Conditional_67_Template, 8, 2, "div", 56);
    \u0275\u0275elementStart(68, "button", 57);
    \u0275\u0275listener("click", function AdminCaptureConsentComponent_Conditional_17_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.sendLink());
    });
    \u0275\u0275template(69, AdminCaptureConsentComponent_Conditional_17_Conditional_69_Template, 3, 0)(70, AdminCaptureConsentComponent_Conditional_17_Conditional_70_Template, 5, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 58);
    \u0275\u0275element(72, "div", 59);
    \u0275\u0275elementStart(73, "div", 31)(74, "span", 32);
    \u0275\u0275text(75, "Take consent on behalf");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(77, "svg", 41);
    \u0275\u0275element(78, "path", 61)(79, "path", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(80, "p", 44);
    \u0275\u0275text(81, "Record consent captured offline \u2014 branch visit, call, or written form.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 45)(83, "label", 46);
    \u0275\u0275text(84, "Consent type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 47)(86, "select", 48);
    \u0275\u0275listener("ngModelChange", function AdminCaptureConsentComponent_Conditional_17_Template_select_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onRightTemplateChange($event));
    });
    \u0275\u0275elementStart(87, "option", 49);
    \u0275\u0275text(88, "Choose consent type\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(89, AdminCaptureConsentComponent_Conditional_17_For_90_Template, 2, 2, "option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(92, "svg", 52);
    \u0275\u0275element(93, "polyline", 53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(94, AdminCaptureConsentComponent_Conditional_17_Conditional_94_Template, 8, 0, "div", 45)(95, AdminCaptureConsentComponent_Conditional_17_Conditional_95_Template, 8, 0, "div", 45);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(96, "div", 63)(97, "div", 45)(98, "label", 46);
    \u0275\u0275text(99, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 47)(101, "select", 48);
    \u0275\u0275listener("ngModelChange", function AdminCaptureConsentComponent_Conditional_17_Template_select_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rightMode.set($event));
    });
    \u0275\u0275elementStart(102, "option", 49);
    \u0275\u0275text(103, "Choose mode\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(104, AdminCaptureConsentComponent_Conditional_17_For_105_Template, 2, 2, "option", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(107, "svg", 52);
    \u0275\u0275element(108, "polyline", 53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(109, "div", 45)(110, "label", 46);
    \u0275\u0275text(111, "Source channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 47)(113, "select", 48);
    \u0275\u0275listener("ngModelChange", function AdminCaptureConsentComponent_Conditional_17_Template_select_ngModelChange_113_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rightSource.set($event));
    });
    \u0275\u0275elementStart(114, "option", 49);
    \u0275\u0275text(115, "Choose source\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(116, AdminCaptureConsentComponent_Conditional_17_For_117_Template, 2, 2, "option", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(119, "svg", 52);
    \u0275\u0275element(120, "polyline", 53);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(121, "div", 45)(122, "label", 46);
    \u0275\u0275text(123, "Consent status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 64);
    \u0275\u0275repeaterCreate(125, AdminCaptureConsentComponent_Conditional_17_For_126_Template, 3, 6, "label", 65, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 45)(128, "label", 46);
    \u0275\u0275text(129, "Evidence reference ");
    \u0275\u0275elementStart(130, "span", 66);
    \u0275\u0275text(131, "optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "input", 67);
    \u0275\u0275listener("ngModelChange", function AdminCaptureConsentComponent_Conditional_17_Template_input_ngModelChange_132_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.evidenceRef.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "button", 68);
    \u0275\u0275listener("click", function AdminCaptureConsentComponent_Conditional_17_Template_button_click_133_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.recordConsent());
    });
    \u0275\u0275template(134, AdminCaptureConsentComponent_Conditional_17_Conditional_134_Template, 3, 0)(135, AdminCaptureConsentComponent_Conditional_17_Conditional_135_Template, 4, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_18_0;
    const c_r3 = ctx;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((c_r3.fullName || "U").charAt(0).toUpperCase());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r3.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.customerId);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.vip ? 12 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(c_r3.mobileNumber || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(c_r3.email || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional((c_r3.activeDeliveryChannels == null ? null : c_r3.activeDeliveryChannels.length) ? 27 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r5.consentHistory().length, " record", ctx_r5.consentHistory().length !== 1 ? "s" : "", "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.consentHistoryLoading() ? 34 : ctx_r5.consentHistory().length === 0 ? 35 : 36);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngModel", (tmp_11_0 = (tmp_11_0 = ctx_r5.leftTemplateId()) == null ? null : tmp_11_0.toString()) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : "");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.templates());
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!ctx_r5.deliveryChannels().length ? 64 : 65);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.infoMessage() ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.lastInviteLink() ? 67 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r5.sendBusy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.sendBusy() ? 69 : 70);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngModel", (tmp_18_0 = (tmp_18_0 = ctx_r5.rightTemplateId()) == null ? null : tmp_18_0.toString()) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : "");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.templates());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r5.rightAvailableChannels().length ? 94 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.rightTemplateId() != null ? 95 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r5.rightMode());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.modeOptions);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r5.rightSource());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.sourceOptions);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r5.STATUS_OPTIONS);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r5.evidenceRef());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r5.recordBusy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.recordBusy() ? 134 : 135);
  }
}
var MODE_OPTIONS = ["Digital In-person", "Verbal", "Written"];
var SOURCE_OPTIONS = ["Branch Walk-in", "Call Centre", "Field Agent"];
var ALL_LANGUAGES = [
  "english",
  "hindi",
  "marathi",
  "gujarati",
  "bengali",
  "tamil",
  "telugu",
  "malayalam",
  "urdu"
];
var AdminCaptureConsentComponent = class _AdminCaptureConsentComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.consentRecordsApi = inject(CustomerConsentRecordService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.consentStatusLabel = customerConsentStatusLabel;
    this.templates = signal([]);
    this.searchQuery = signal("");
    this.searchBusy = signal(false);
    this.customer = signal(null);
    this.consentHistory = signal([]);
    this.consentHistoryLoading = signal(false);
    this.leftTemplateId = signal(null);
    this.deliveryChannels = signal([]);
    this.selectedCaptureChannels = signal([]);
    this.lastInviteLink = signal("");
    this.sendBusy = signal(false);
    this.rightTemplateId = signal(null);
    this.rightMode = signal("");
    this.rightSource = signal("");
    this.evidenceRef = signal("");
    this.recordBusy = signal(false);
    this.rightConsentStatus = signal("");
    this.rightAvailableChannels = signal([]);
    this.rightSelectedChannels = signal([]);
    this.allLanguages = ALL_LANGUAGES;
    this.rightSelectedLanguages = signal([]);
    this.modeOptions = MODE_OPTIONS;
    this.sourceOptions = SOURCE_OPTIONS;
    this.STATUS_OPTIONS = [
      { value: "ACCEPTED", label: "Accepted" },
      { value: "PENDING", label: "Pending" },
      { value: "WITHDRAWN", label: "Withdrawn" },
      { value: "REJECTED", label: "Rejected" }
    ];
    this.infoMessage = computed(() => {
      const channels = this.selectedCaptureChannels();
      const t = this.selectedLeftTemplateName();
      if (!channels.length || !t)
        return "";
      return `We will email a secure link to the customer's registered address. Channels recorded: ${channels.join(", ")}.`;
    });
    this.channelSelectionHint = computed(() => {
      const allowed = this.deliveryChannels();
      if (!allowed.length)
        return "";
      const hasEmail = allowed.some((c) => /email/i.test(c));
      if (!hasEmail)
        return "This template does not include Email. Use another capture method or add Email to the template.";
      return "Select one or more channels. Email must be selected so the secure link can be delivered.";
    });
    this.canCopyLink = computed(() => !!this.lastInviteLink().trim());
  }
  // ── Lifecycle ─────────────────────────────────────────────────────────────
  ngOnInit() {
    this.adminApi.listConsentTemplates().subscribe({
      next: (res) => {
        if (res.success && res.data)
          this.templates.set(res.data);
      },
      error: (err) => {
        this.logger.error("AdminCaptureConsent", "templates failed", err);
        this.notify.error("Templates", err?.error?.message || "Could not load consent templates.");
      }
    });
  }
  // ── Template name helpers ─────────────────────────────────────────────────
  selectedLeftTemplateName() {
    const id = this.leftTemplateId();
    if (id == null)
      return "";
    return this.templates().find((x) => x.id === id)?.consentName ?? "";
  }
  selectedRightConsentType() {
    const id = this.rightTemplateId();
    if (id == null)
      return "";
    return this.templates().find((x) => x.id === id)?.consentName ?? "";
  }
  // ── Left panel: send link ─────────────────────────────────────────────────
  onLeftTemplateChange(value) {
    const id = this.parseSelectNumber(value);
    this.leftTemplateId.set(id);
    this.lastInviteLink.set("");
    this.selectedCaptureChannels.set([]);
    if (id != null) {
      const tpl = this.templates().find((x) => x.id === id);
      const channels = [];
      if (tpl?.channelEmail)
        channels.push("EMAIL");
      if (tpl?.channelSms)
        channels.push("SMS");
      if (tpl?.channelPush)
        channels.push("PUSH");
      if (tpl?.channelWhatsapp)
        channels.push("WHATSAPP");
      if (tpl?.channelRcs)
        channels.push("RCS");
      this.deliveryChannels.set(channels);
    } else {
      this.deliveryChannels.set([]);
    }
  }
  isChannelSelected(ch) {
    return this.selectedCaptureChannels().includes(ch);
  }
  toggleChannel(ch, checked) {
    const allowed = this.deliveryChannels();
    const set = new Set(this.selectedCaptureChannels());
    if (checked)
      set.add(ch);
    else
      set.delete(ch);
    this.selectedCaptureChannels.set(allowed.filter((x) => set.has(x)));
    this.resetLinkOnLeftChange();
  }
  selectionIncludesEmail() {
    return this.selectedCaptureChannels().some((c) => /email/i.test(c));
  }
  // ── Right panel: on-behalf template change ────────────────────────────────
  // onRightTemplateChange(value: string): void {
  //   const id = this.parseSelectNumber(value);
  //   this.rightTemplateId.set(id);
  //   this.rightSelectedChannels.set([]);
  //   this.rightSelectedLanguages.set([]);
  //   this.rightAvailableChannels.set([]);
  //   if (id == null) return;
  //   const tpl = this.templates().find((x) => x.id === id);
  //   const channels: string[] = [];
  //   if (tpl?.channelEmail)    channels.push('EMAIL');
  //   if (tpl?.channelSms)      channels.push('SMS');
  //   if (tpl?.channelPush)     channels.push('PUSH');
  //   if (tpl?.channelWhatsapp) channels.push('WHATSAPP');
  //   if (tpl?.channelRcs)      channels.push('RCS');
  //   this.rightAvailableChannels.set(channels);
  //   const cust = this.customer();
  //   if (!cust) return;
  //   // Load existing channel preferences for this customer+template
  //   this.adminApi.getChannelPreferenceForAdmin(cust.customerId, id).subscribe({
  //     next: (res) => {
  //       if (!res.success || !res.data) return;
  //       const d = res.data;
  //       const pre: string[] = [];
  //       if (d.prefEmail)    pre.push('EMAIL');
  //       if (d.prefSms)      pre.push('SMS');
  //       if (d.prefPush)     pre.push('PUSH');
  //       if (d.prefWhatsapp) pre.push('WHATSAPP');
  //       if (d.prefRcs)      pre.push('RCS');
  //       // Only pre-select channels that are still on the template
  //       this.rightSelectedChannels.set(pre.filter((c) => channels.includes(c)));
  //     },
  //     error: () => { /* non-fatal — just no pre-selection */ },
  //   });
  //   // Load existing language preferences for this customer+template
  //   this.adminApi.getLanguagePreferenceForAdmin(cust.customerId, id).subscribe({
  //     next: (res) => {
  //       if (res.success && res.data) this.rightSelectedLanguages.set(res.data);
  //     },
  //     error: () => { /* non-fatal */ },
  //   });
  // }
  // ── Right panel: on-behalf template change ────────────────────────────────
  onRightTemplateChange(value) {
    const id = this.parseSelectNumber(value);
    this.rightTemplateId.set(id);
    this.rightSelectedChannels.set([]);
    this.rightSelectedLanguages.set([]);
    this.rightAvailableChannels.set([]);
    if (id == null)
      return;
    const tpl = this.templates().find((x) => x.id === id);
    const channels = [];
    if (tpl?.channelEmail)
      channels.push("EMAIL");
    if (tpl?.channelSms)
      channels.push("SMS");
    if (tpl?.channelPush)
      channels.push("PUSH");
    if (tpl?.channelWhatsapp)
      channels.push("WHATSAPP");
    if (tpl?.channelRcs)
      channels.push("RCS");
    this.rightAvailableChannels.set(channels);
    const cust = this.customer();
    if (!cust)
      return;
    this.adminApi.getChannelPreferenceForAdmin(cust.customerId, id).subscribe({
      next: (res) => {
        if (!res.success || !res.data)
          return;
        const d = res.data;
        const pre = [];
        if (d.prefEmail)
          pre.push("EMAIL");
        if (d.prefSms)
          pre.push("SMS");
        if (d.prefPush)
          pre.push("PUSH");
        if (d.prefWhatsapp)
          pre.push("WHATSAPP");
        if (d.prefRcs)
          pre.push("RCS");
        const available = this.rightAvailableChannels();
        this.rightSelectedChannels.set(pre.filter((c) => available.includes(c)));
      },
      error: () => {
      }
    });
    this.adminApi.getLanguagePreferenceForAdmin(cust.customerId, id).subscribe({
      next: (res) => {
        if (res.success && res.data && res.data.length > 0) {
          this.rightSelectedLanguages.set(res.data);
        }
      },
      error: () => {
      }
    });
  }
  isRightChannelSelected(ch) {
    return this.rightSelectedChannels().includes(ch);
  }
  toggleRightChannel(ch, checked) {
    const set = new Set(this.rightSelectedChannels());
    if (checked)
      set.add(ch);
    else
      set.delete(ch);
    this.rightSelectedChannels.set(this.rightAvailableChannels().filter((c) => set.has(c)));
  }
  isLanguageSelected(lang) {
    return this.rightSelectedLanguages().includes(lang);
  }
  toggleLanguage(lang, checked) {
    const set = new Set(this.rightSelectedLanguages());
    if (checked)
      set.add(lang);
    else
      set.delete(lang);
    this.rightSelectedLanguages.set(this.allLanguages.filter((l) => set.has(l)));
  }
  formatLanguage(lang) {
    return lang.charAt(0).toUpperCase() + lang.slice(1);
  }
  channelLabel(ch) {
    const labels = {
      EMAIL: "Email",
      SMS: "SMS",
      PUSH: "Push",
      WHATSAPP: "WhatsApp",
      RCS: "RCS"
    };
    return labels[ch] ?? ch;
  }
  // ── Search ────────────────────────────────────────────────────────────────
  onSearch() {
    const q = this.searchQuery().trim();
    if (!q) {
      this.notify.warning("Search", "Enter a Customer ID or mobile number.");
      return;
    }
    this.searchBusy.set(true);
    this.customer.set(null);
    this.consentHistory.set([]);
    this.lastInviteLink.set("");
    this.adminApi.captureSearch(q).subscribe({
      next: (res) => {
        this.searchBusy.set(false);
        if (!res.success || !res.data) {
          this.notify.warning("Search", res.message || "No customer found.");
          return;
        }
        this.customer.set(res.data);
        this.loadConsentHistory(res.data.customerId);
      },
      error: (err) => {
        this.searchBusy.set(false);
        this.logger.error("AdminCaptureConsent", "search failed", err);
        this.notify.error("Search", err?.error?.message || err?.message || "Search failed.");
      }
    });
  }
  // ── Copy link ─────────────────────────────────────────────────────────────
  copyLink() {
    const link = this.lastInviteLink();
    if (!link) {
      this.notify.info("Copy link", "Send the request first to generate a link.");
      return;
    }
    void navigator.clipboard.writeText(link).then(() => this.notify.success("Copied", "Consent link copied to clipboard."), () => this.notify.error("Copy failed", "Clipboard access was denied."));
  }
  // ── Send link ─────────────────────────────────────────────────────────────
  sendLink() {
    const cust = this.customer();
    const tid = this.leftTemplateId();
    const selected = this.selectedCaptureChannels();
    if (!cust) {
      this.notify.warning("Send", "Search and select a customer first.");
      return;
    }
    if (tid == null) {
      this.notify.warning("Send", "Select a consent template.");
      return;
    }
    if (!selected.length) {
      this.notify.warning("Send", "Select at least one delivery channel.");
      return;
    }
    if (!this.selectionIncludesEmail()) {
      this.notify.warning("Send", "Select Email as one of the channels. The secure consent link is delivered to the customer's registered mailbox.");
      return;
    }
    this.sendBusy.set(true);
    this.adminApi.sendConsentLink({
      customerId: cust.customerId,
      consentTemplateId: tid,
      deliveryChannels: [...selected],
      consentType: this.selectedLeftTemplateName()
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
        this.notify.error(err?.status === 503 ? "Email delivery failed" : "Send", err?.error?.message || err?.message || "Could not send consent link.");
      }
    });
  }
  // ── Record on-behalf ──────────────────────────────────────────────────────
  recordConsent() {
    const cust = this.customer();
    const tid = this.rightTemplateId();
    const mode = this.rightMode();
    const source = this.rightSource();
    const status = this.rightConsentStatus();
    if (!cust) {
      this.notify.warning("Record", "Search for a customer first.");
      return;
    }
    if (tid == null || !mode || !source || !status) {
      this.notify.warning("Record", "Select consent type, mode, source channel, and consent status.");
      return;
    }
    this.recordBusy.set(true);
    this.adminApi.recordOnBehalf({
      customerId: cust.customerId,
      consentType: this.selectedRightConsentType(),
      consentTemplateId: tid,
      mode,
      sourceChannel: source,
      consentStatus: status,
      evidenceReference: this.evidenceRef().trim() || void 0,
      selectedChannels: this.rightSelectedChannels().length ? [...this.rightSelectedChannels()] : void 0,
      selectedLanguages: this.rightSelectedLanguages().length ? [...this.rightSelectedLanguages()] : void 0
    }).subscribe({
      next: (res) => {
        this.recordBusy.set(false);
        if (!res.success) {
          this.notify.error("Record", res.message || "Record failed.");
          return;
        }
        this.customer.set(__spreadProps(__spreadValues({}, cust), { consentStatus: status }));
        this.loadConsentHistory(cust.customerId);
        this.notify.success("Recorded", res.message || "On-behalf consent recorded successfully.");
      },
      error: (err) => {
        this.recordBusy.set(false);
        this.logger.error("AdminCaptureConsent", "record failed", err);
        this.notify.error("Record", err?.error?.message || err?.error?.errors?.consentStatus || err?.message || "Could not record consent.");
      }
    });
  }
  // ── Misc helpers ──────────────────────────────────────────────────────────
  resetLinkOnLeftChange() {
    this.lastInviteLink.set("");
  }
  parseSelectNumber(v) {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? n : null;
  }
  recordStatusClass(status) {
    const map = {
      ACCEPTED: "ccr-pill ccr-pill--accepted",
      REJECTED: "ccr-pill ccr-pill--rejected",
      WITHDRAWN: "ccr-pill ccr-pill--withdrawn",
      PENDING: "ccr-pill ccr-pill--pending",
      EXPIRING_SOON: "ccr-pill ccr-pill--expiring",
      EXPIRED: "ccr-pill ccr-pill--expired"
    };
    return map[status] ?? "ccr-pill";
  }
  loadConsentHistory(customerId) {
    this.consentHistoryLoading.set(true);
    this.consentRecordsApi.getRecordsByCustomer(customerId).subscribe({
      next: (res) => {
        this.consentHistoryLoading.set(false);
        this.consentHistory.set(res.success && res.data ? res.data : []);
      },
      error: () => {
        this.consentHistoryLoading.set(false);
        this.consentHistory.set([]);
      }
    });
  }
  static {
    this.\u0275fac = function AdminCaptureConsentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminCaptureConsentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCaptureConsentComponent, selectors: [["app-admin-capture-consent"]], decls: 18, vars: 4, consts: [[1, "cc-page"], [1, "cc-header"], [1, "cc-header__text"], [1, "cc-header__title"], [1, "cc-header__sub"], [1, "cc-search-bar"], [1, "cc-search-bar__inner"], [1, "cc-search-bar__icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Enter Customer ID or mobile number\u2026", "autocomplete", "off", 1, "cc-search-bar__input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "cc-search-bar__btn", 3, "click", "disabled"], ["diameter", "16"], [1, "cc-results", "cc-results--visible"], [1, "cc-profile", "cc-card", "cc-animate", 2, "--delay", "0ms"], [1, "cc-profile__avatar"], [1, "cc-profile__body"], [1, "cc-profile__top"], [1, "cc-profile__name"], [1, "cc-profile__id"], [1, "cc-badge", "cc-badge--vip"], [1, "cc-profile__meta"], [1, "cc-meta-item"], [1, "cc-meta-item__icon"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.1 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92z"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [1, "cc-profile__channels"], [1, "cc-card", "cc-animate", 2, "--delay", "60ms"], [1, "cc-card__header"], [1, "cc-card__title"], [1, "cc-record-count"], [1, "cc-loading-row"], [1, "cc-empty"], [1, "cc-table-wrap"], [1, "cc-actions"], [1, "cc-card", "cc-action-card", "cc-animate", 2, "--delay", "120ms"], [1, "cc-action-card__accent", "cc-action-card__accent--blue"], [1, "cc-card__icon", "cc-card__icon--blue"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M22 7.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1.5"], ["d", "m22 12-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 12"], [1, "cc-action-card__desc"], [1, "cc-field"], [1, "cc-field__label"], [1, "cc-select-wrap"], [1, "cc-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "cc-select-wrap__arrow"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["points", "6 9 12 15 18 9"], [1, "cc-hint"], [1, "cc-info-banner"], [1, "cc-link-box"], [1, "cc-btn", "cc-btn--primary", 3, "click", "disabled"], [1, "cc-card", "cc-action-card", "cc-animate", 2, "--delay", "160ms"], [1, "cc-action-card__accent", "cc-action-card__accent--green"], [1, "cc-card__icon", "cc-card__icon--green"], ["d", "M12 20h9"], ["d", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"], [1, "cc-field-row"], [1, "cc-status-options"], [1, "cc-status-option", 3, "cc-status-option--selected"], [1, "cc-field__optional"], ["type", "text", "placeholder", "Call ID, document no., etc.", 1, "cc-input", 3, "ngModelChange", "ngModel"], [1, "cc-btn", "cc-btn--success", 3, "click", "disabled"], ["width", "11", "height", "11", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "cc-channel-tag"], ["diameter", "18"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.4", "stroke-linecap", "round"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "9", "y1", "13", "x2", "15", "y2", "13"], [1, "cc-table"], [1, "cc-table__row", 3, "animation-delay"], [1, "cc-table__row"], [1, "cc-table__name"], [1, "cc-table__muted"], [1, "cc-channel-toggles"], [1, "cc-toggle", 3, "cc-toggle--on"], [1, "cc-hint", "cc-hint--warn"], [1, "cc-toggle"], ["type", "checkbox", 3, "change", "checked"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 8v4M12 16h.01"], [1, "cc-link-box__url"], [1, "cc-link-box__copy", 3, "click", "disabled"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], ["diameter", "15"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "cc-lang-toggles"], [1, "cc-toggle", "cc-toggle--lang", 3, "cc-toggle--on"], [1, "cc-toggle", "cc-toggle--lang"], [1, "cc-status-option"], ["type", "radio", "name", "consentStatus", 3, "change", "value", "checked"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round"], ["points", "20 6 9 17 4 12"]], template: function AdminCaptureConsentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Capture Consent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Search a customer, review their consent history, and send or record a new consent.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "span", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 8);
        \u0275\u0275element(11, "circle", 9)(12, "path", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "input", 11);
        \u0275\u0275listener("ngModelChange", function AdminCaptureConsentComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.searchQuery.set($event);
        })("keyup.enter", function AdminCaptureConsentComponent_Template_input_keyup_enter_13_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 12);
        \u0275\u0275listener("click", function AdminCaptureConsentComponent_Template_button_click_14_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275template(15, AdminCaptureConsentComponent_Conditional_15_Template, 1, 0, "mat-spinner", 13)(16, AdminCaptureConsentComponent_Conditional_16_Template, 1, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(17, AdminCaptureConsentComponent_Conditional_17_Template, 136, 24, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance(13);
        \u0275\u0275property("ngModel", ctx.searchQuery());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.searchBusy());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.searchBusy() ? 15 : 16);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_3_0 = ctx.customer()) ? 17 : -1, tmp_3_0);
      }
    }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatProgressSpinnerModule, MatProgressSpinner, MatExpansionModule, DatePipe], styles: ['@import "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  --cc-font:\n    "DM Sans",\n    system-ui,\n    sans-serif;\n  --cc-font-mono: "DM Mono", monospace;\n  --cc-bg: #f6f7f9;\n  --cc-surface: #ffffff;\n  --cc-surface-2: #f9fafb;\n  --cc-border: rgba(0, 0, 0, 0.07);\n  --cc-border-md: rgba(0, 0, 0, 0.11);\n  --cc-text-1: #0d0f12;\n  --cc-text-2: #4b5563;\n  --cc-text-3: #9ca3af;\n  --cc-blue: #2563eb;\n  --cc-blue-bg: #eff6ff;\n  --cc-blue-border: #bfdbfe;\n  --cc-green: #059669;\n  --cc-green-bg: #ecfdf5;\n  --cc-green-border: #a7f3d0;\n  --cc-amber: #d97706;\n  --cc-amber-bg: #fffbeb;\n  --cc-amber-border: #fde68a;\n  --cc-red: #dc2626;\n  --cc-red-bg: #fef2f2;\n  --cc-red-border: #fecaca;\n  --cc-radius-sm: 6px;\n  --cc-radius: 10px;\n  --cc-radius-lg: 14px;\n  --cc-radius-xl: 18px;\n  --cc-radius-pill: 999px;\n  --cc-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --cc-shadow: 0 2px 8px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.04);\n  --cc-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.09), 0 2px 6px rgba(0, 0, 0, 0.05);\n  font-family: var(--cc-font);\n  -webkit-font-smoothing: antialiased;\n}\n.cc-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  padding: 1.75rem 0 3rem;\n  max-width: 1000px;\n}\n.cc-header[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.cc-header__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--cc-text-1);\n  letter-spacing: -0.4px;\n  margin: 0 0 4px;\n}\n.cc-header__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--cc-text-2);\n  margin: 0;\n  line-height: 1.5;\n}\n.cc-search-bar__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--cc-surface);\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius-lg);\n  box-shadow: var(--cc-shadow-sm);\n  overflow: hidden;\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.cc-search-bar__inner[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--cc-blue);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12), var(--cc-shadow-sm);\n}\n.cc-search-bar__icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px 0 16px;\n  color: var(--cc-text-3);\n  flex-shrink: 0;\n}\n.cc-search-bar__input[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 48px;\n  border: none;\n  outline: none;\n  font-family: var(--cc-font);\n  font-size: 14.5px;\n  color: var(--cc-text-1);\n  background: transparent;\n  padding: 0 8px;\n}\n.cc-search-bar__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--cc-text-3);\n}\n.cc-search-bar__btn[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 22px;\n  background: var(--cc-blue);\n  color: #fff;\n  border: none;\n  font-family: var(--cc-font);\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  transition: background 0.15s, opacity 0.15s;\n  flex-shrink: 0;\n  letter-spacing: 0.01em;\n}\n.cc-search-bar__btn[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.cc-search-bar__btn[_ngcontent-%COMP%]:active {\n  background: #1e40af;\n}\n.cc-search-bar__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cc-search-bar__btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  --mdc-circular-progress-active-indicator-color: rgba(255, 255, 255, 0.8);\n}\n.cc-card[_ngcontent-%COMP%] {\n  background: var(--cc-surface);\n  border: 1px solid var(--cc-border);\n  border-radius: var(--cc-radius-xl);\n  box-shadow: var(--cc-shadow-sm);\n  padding: 1.4rem 1.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.cc-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.cc-card__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--cc-text-2);\n}\n.cc-card__icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: var(--cc-radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cc-card__icon--blue[_ngcontent-%COMP%] {\n  background: var(--cc-blue-bg);\n  color: var(--cc-blue);\n}\n.cc-card__icon--green[_ngcontent-%COMP%] {\n  background: var(--cc-green-bg);\n  color: var(--cc-green);\n}\n.cc-animate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ccSlideIn 0.38s cubic-bezier(0.22, 1, 0.36, 1) both;\n  animation-delay: var(--delay, 0ms);\n}\n@keyframes _ngcontent-%COMP%_ccSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.cc-results[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.cc-profile[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  align-items: flex-start;\n}\n.cc-profile__avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--cc-blue);\n  flex-shrink: 0;\n  border: 2px solid var(--cc-blue-border);\n}\n.cc-profile__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cc-profile__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n.cc-profile__name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--cc-text-1);\n  letter-spacing: -0.2px;\n  margin: 0 0 2px;\n}\n.cc-profile__id[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--cc-text-3);\n  font-family: var(--cc-font-mono);\n  margin: 0;\n}\n.cc-profile__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.cc-profile__channels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cc-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13.5px;\n  color: var(--cc-text-2);\n}\n.cc-meta-item__icon[_ngcontent-%COMP%] {\n  color: var(--cc-text-3);\n  display: flex;\n  align-items: center;\n}\n.cc-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  padding: 3px 9px;\n  border-radius: var(--cc-radius-pill);\n}\n.cc-badge--vip[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.cc-record-count[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--cc-text-3);\n  background: var(--cc-surface-2);\n  border: 1px solid var(--cc-border);\n  border-radius: var(--cc-radius-pill);\n  padding: 2px 10px;\n}\n.cc-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin: 0 -1.5rem;\n  padding: 0 1.5rem;\n}\n.cc-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13.5px;\n}\n.cc-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--cc-text-3);\n  padding: 0 12px 10px;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--cc-border);\n}\n.cc-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 12px;\n  color: var(--cc-text-1);\n  border-bottom: 1px solid var(--cc-border);\n  vertical-align: middle;\n}\n.cc-table__row[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ccRowIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;\n  transition: background 0.12s;\n}\n.cc-table__row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--cc-surface-2);\n}\n.cc-table__row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cc-table__name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--cc-text-1);\n}\n.cc-table__muted[_ngcontent-%COMP%] {\n  color: var(--cc-text-2);\n  font-size: 13px;\n}\n@keyframes _ngcontent-%COMP%_ccRowIn {\n  from {\n    opacity: 0;\n    transform: translateX(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.cc-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11.5px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: var(--cc-radius-pill);\n  white-space: nowrap;\n}\n.cc-status--accepted[_ngcontent-%COMP%], \n.cc-status--active[_ngcontent-%COMP%] {\n  background: var(--cc-green-bg);\n  color: var(--cc-green);\n  border: 1px solid var(--cc-green-border);\n}\n.cc-status--pending[_ngcontent-%COMP%] {\n  background: var(--cc-amber-bg);\n  color: var(--cc-amber);\n  border: 1px solid var(--cc-amber-border);\n}\n.cc-status--rejected[_ngcontent-%COMP%] {\n  background: var(--cc-red-bg);\n  color: var(--cc-red);\n  border: 1px solid var(--cc-red-border);\n}\n.cc-status--withdrawn[_ngcontent-%COMP%] {\n  background: #fdf4ff;\n  color: #7c3aed;\n  border: 1px solid #e9d5ff;\n}\n.cc-status--expiring_soon[_ngcontent-%COMP%] {\n  background: var(--cc-amber-bg);\n  color: #b45309;\n  border: 1px solid var(--cc-amber-border);\n}\n.cc-status--expired[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: var(--cc-text-3);\n  border: 1px solid var(--cc-border-md);\n}\n.cc-channel-tag[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: var(--cc-radius-pill);\n  background: var(--cc-blue-bg);\n  color: var(--cc-blue);\n  border: 1px solid var(--cc-blue-border);\n}\n.cc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 2.5rem 1rem;\n  color: var(--cc-text-3);\n  text-align: center;\n}\n.cc-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.cc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13.5px;\n}\n.cc-loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 1.25rem 0;\n  font-size: 13.5px;\n  color: var(--cc-text-2);\n}\n.cc-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n}\n@media (max-width: 680px) {\n  .cc-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cc-action-card[_ngcontent-%COMP%] {\n  padding-top: 1.2rem;\n}\n.cc-action-card__accent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  border-radius: var(--cc-radius-xl) var(--cc-radius-xl) 0 0;\n}\n.cc-action-card__accent--blue[_ngcontent-%COMP%] {\n  background: var(--cc-blue);\n}\n.cc-action-card__accent--green[_ngcontent-%COMP%] {\n  background: var(--cc-green);\n}\n.cc-action-card__desc[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--cc-text-2);\n  margin: -4px 0 16px;\n  line-height: 1.55;\n}\n.cc-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.cc-field__label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--cc-text-2);\n}\n.cc-field__optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 11px;\n  color: var(--cc-text-3);\n}\n.cc-field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.cc-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cc-select-wrap__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--cc-text-3);\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n}\n.cc-select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  padding: 0 36px 0 12px;\n  font-family: var(--cc-font);\n  font-size: 13.5px;\n  color: var(--cc-text-1);\n  background: var(--cc-surface);\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius);\n  appearance: none;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.cc-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--cc-blue);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.cc-select[_ngcontent-%COMP%]:hover:not(:focus) {\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.cc-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  padding: 0 12px;\n  font-family: var(--cc-font);\n  font-size: 13.5px;\n  color: var(--cc-text-1);\n  background: var(--cc-surface);\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius);\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.cc-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--cc-text-3);\n}\n.cc-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--cc-blue);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.cc-channel-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cc-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0;\n  padding: 5px 13px;\n  font-size: 12.5px;\n  font-weight: 500;\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius-pill);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  background: var(--cc-surface);\n  color: var(--cc-text-2);\n  transition: all 0.15s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.cc-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.cc-toggle[_ngcontent-%COMP%]:hover {\n  border-color: var(--cc-blue);\n  color: var(--cc-blue);\n  background: var(--cc-blue-bg);\n}\n.cc-toggle--on[_ngcontent-%COMP%] {\n  background: var(--cc-blue);\n  color: #fff;\n  border-color: var(--cc-blue);\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.cc-toggle--on[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  border-color: #1d4ed8;\n  color: #fff;\n}\n.cc-lang-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cc-toggle--lang[_ngcontent-%COMP%] {\n  gap: 5px;\n  margin-top: 7px;\n}\n.cc-status-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cc-status-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 13px;\n  font-size: 12.5px;\n  font-weight: 500;\n  border-radius: var(--cc-radius-pill);\n  border: 1px solid var(--cc-border-md);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.15s cubic-bezier(0.22, 1, 0.36, 1);\n  background: var(--cc-surface);\n  color: var(--cc-text-2);\n}\n.cc-status-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.cc-status-option[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 0, 0, 0.2);\n  color: var(--cc-text-1);\n}\n.cc-status-option--selected[data-status=accepted][_ngcontent-%COMP%] {\n  background: var(--cc-green-bg);\n  color: var(--cc-green);\n  border-color: var(--cc-green-border);\n  box-shadow: 0 1px 4px rgba(5, 150, 105, 0.2);\n}\n.cc-status-option--selected[data-status=pending][_ngcontent-%COMP%] {\n  background: var(--cc-amber-bg);\n  color: var(--cc-amber);\n  border-color: var(--cc-amber-border);\n  box-shadow: 0 1px 4px rgba(217, 119, 6, 0.2);\n}\n.cc-status-option--selected[data-status=rejected][_ngcontent-%COMP%] {\n  background: var(--cc-red-bg);\n  color: var(--cc-red);\n  border-color: var(--cc-red-border);\n  box-shadow: 0 1px 4px rgba(220, 38, 38, 0.2);\n}\n.cc-status-option--selected[data-status=withdrawn][_ngcontent-%COMP%] {\n  background: #fdf4ff;\n  color: #7c3aed;\n  border-color: #e9d5ff;\n  box-shadow: 0 1px 4px rgba(124, 58, 237, 0.2);\n}\n.cc-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--cc-text-3);\n  margin: 0;\n  line-height: 1.5;\n}\n.cc-hint--warn[_ngcontent-%COMP%] {\n  color: var(--cc-amber);\n}\n.cc-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: var(--cc-blue-bg);\n  border: 1px solid var(--cc-blue-border);\n  border-radius: var(--cc-radius);\n  padding: 10px 12px;\n  font-size: 12.5px;\n  color: #1e40af;\n  line-height: 1.5;\n  margin-bottom: 14px;\n}\n.cc-info-banner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.cc-link-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--cc-surface-2);\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius);\n  padding: 8px 10px 8px 12px;\n  margin-bottom: 12px;\n}\n.cc-link-box__url[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: var(--cc-font-mono);\n  font-size: 11px;\n  color: var(--cc-text-2);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cc-link-box__copy[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 28px;\n  padding: 0 10px;\n  font-family: var(--cc-font);\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius-sm);\n  background: var(--cc-surface);\n  color: var(--cc-text-2);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.12s;\n}\n.cc-link-box__copy[_ngcontent-%COMP%]:hover {\n  background: var(--cc-blue-bg);\n  color: var(--cc-blue);\n  border-color: var(--cc-blue-border);\n}\n.cc-link-box__copy[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cc-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-family: var(--cc-font);\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  border-radius: var(--cc-radius);\n  cursor: pointer;\n  letter-spacing: 0.01em;\n  transition: all 0.15s cubic-bezier(0.22, 1, 0.36, 1);\n  position: relative;\n  overflow: hidden;\n}\n.cc-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.985);\n}\n.cc-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.cc-btn--primary[_ngcontent-%COMP%] {\n  background: var(--cc-blue);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);\n}\n.cc-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);\n  transform: translateY(-1px);\n}\n.cc-btn--primary[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  --mdc-circular-progress-active-indicator-color: rgba(255, 255, 255, 0.8);\n}\n.cc-btn--success[_ngcontent-%COMP%] {\n  background: var(--cc-green);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.28);\n}\n.cc-btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.38);\n  transform: translateY(-1px);\n}\n.cc-btn--success[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  --mdc-circular-progress-active-indicator-color: rgba(255, 255, 255, 0.8);\n}\n@media (max-width: 560px) {\n  .cc-profile[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cc-field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-capture-consent.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCaptureConsentComponent, [{
    type: Component,
    args: [{ selector: "app-admin-capture-consent", standalone: true, imports: [
      FormsModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      MatExpansionModule,
      DatePipe,
      SlicePipe,
      UpperCasePipe,
      LowerCasePipe
    ], template: `<div class="cc-page">\r
\r
  <!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="cc-header">\r
    <div class="cc-header__text">\r
      <h1 class="cc-header__title">Capture Consent</h1>\r
      <p class="cc-header__sub">Search a customer, review their consent history, and send or record a new consent.</p>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 SEARCH \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="cc-search-bar">\r
    <div class="cc-search-bar__inner">\r
      <span class="cc-search-bar__icon">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>\r
      </span>\r
      <input\r
        class="cc-search-bar__input"\r
        type="text"\r
        placeholder="Enter Customer ID or mobile number\u2026"\r
        [ngModel]="searchQuery()"\r
        (ngModelChange)="searchQuery.set($event)"\r
        (keyup.enter)="onSearch()"\r
        autocomplete="off"\r
      />\r
      <button class="cc-search-bar__btn" (click)="onSearch()" [disabled]="searchBusy()">\r
        @if (searchBusy()) { <mat-spinner diameter="16" /> } @else { Search }\r
      </button>\r
    </div>\r
  </div>\r
\r
  @if (customer(); as c) {\r
    <div class="cc-results cc-results--visible">\r
\r
      <!-- \u2500\u2500 CUSTOMER PROFILE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="cc-profile cc-card cc-animate" style="--delay: 0ms">\r
        <div class="cc-profile__avatar">\r
          <span>{{ (c.fullName || 'U').charAt(0).toUpperCase() }}</span>\r
        </div>\r
        <div class="cc-profile__body">\r
          <div class="cc-profile__top">\r
            <div>\r
              <p class="cc-profile__name">{{ c.fullName }}</p>\r
              <p class="cc-profile__id">{{ c.customerId }}</p>\r
            </div>\r
            @if (c.vip) {\r
              <span class="cc-badge cc-badge--vip">\r
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\r
                VIP\r
              </span>\r
            }\r
          </div>\r
          <div class="cc-profile__meta">\r
            <div class="cc-meta-item">\r
              <span class="cc-meta-item__icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.1 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92z"/></svg></span>\r
              <span>{{ c.mobileNumber || '\u2014' }}</span>\r
            </div>\r
            <div class="cc-meta-item">\r
              <span class="cc-meta-item__icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>\r
              <span>{{ c.email || '\u2014' }}</span>\r
            </div>\r
          </div>\r
          @if (c.activeDeliveryChannels?.length) {\r
            <div class="cc-profile__channels">\r
              @for (ch of c.activeDeliveryChannels; track ch) {\r
                <span class="cc-channel-tag">{{ ch }}</span>\r
              }\r
            </div>\r
          }\r
        </div>\r
      </div>\r
\r
      <!-- \u2500\u2500 CONSENT HISTORY \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="cc-card cc-animate" style="--delay: 60ms">\r
        <div class="cc-card__header">\r
          <span class="cc-card__title">Consent record history</span>\r
          <span class="cc-record-count">{{ consentHistory().length }} record{{ consentHistory().length !== 1 ? 's' : '' }}</span>\r
        </div>\r
        @if (consentHistoryLoading()) {\r
          <div class="cc-loading-row"><mat-spinner diameter="18" /><span>Loading records\u2026</span></div>\r
        } @else if (consentHistory().length === 0) {\r
          <div class="cc-empty">\r
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/></svg>\r
            <p>No consent records found for this customer</p>\r
          </div>\r
        } @else {\r
          <div class="cc-table-wrap">\r
            <table class="cc-table">\r
              <thead>\r
                <tr><th>Consent</th><th>Status</th><th>Responded</th><th>Valid until</th><th>Last invite</th></tr>\r
              </thead>\r
              <tbody>\r
                @for (row of consentHistory(); track row.id; let i = $index) {\r
                  <tr class="cc-table__row" [style.animation-delay]="(i * 40) + 'ms'">\r
                    <td class="cc-table__name">{{ row.consentName || '\u2014' }}</td>\r
                    <td><span [class]="'cc-status cc-status--' + (row.status?.toString()?.toLowerCase() ?? '')">{{ row.status }}</span></td>\r
                    <td class="cc-table__muted">{{ row.respondedAt ? (row.respondedAt | date: 'dd MMM yyyy') : '\u2014' }}</td>\r
                    <td class="cc-table__muted">{{ row.consentValidUntil ? (row.consentValidUntil | date: 'dd MMM yyyy') : '\u2014' }}</td>\r
                    <td class="cc-table__muted">{{ row.lastInviteSentAt ? (row.lastInviteSentAt | date: 'dd MMM yyyy') : '\u2014' }}</td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- \u2500\u2500 ACTION PANELS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="cc-actions">\r
\r
        <!-- LEFT: Send via link -->\r
        <div class="cc-card cc-action-card cc-animate" style="--delay: 120ms">\r
          <div class="cc-action-card__accent cc-action-card__accent--blue"></div>\r
          <div class="cc-card__header">\r
            <span class="cc-card__title">Send consent via link</span>\r
            <span class="cc-card__icon cc-card__icon--blue">\r
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M22 7.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1.5"/><path d="m22 12-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 12"/></svg>\r
            </span>\r
          </div>\r
          <p class="cc-action-card__desc">A secure one-time link is emailed to the customer's registered address.</p>\r
\r
          <div class="cc-field">\r
            <label class="cc-field__label">Consent template</label>\r
            <div class="cc-select-wrap">\r
              <select class="cc-select" [ngModel]="leftTemplateId()?.toString() ?? ''" (ngModelChange)="onLeftTemplateChange($event)">\r
                <option value="">Choose template\u2026</option>\r
                @for (t of templates(); track t.id) { <option [value]="t.id">{{ t.consentName }}</option> }\r
              </select>\r
              <span class="cc-select-wrap__arrow"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></span>\r
            </div>\r
          </div>\r
\r
          <div class="cc-field">\r
            <label class="cc-field__label">Delivery channels</label>\r
            @if (!deliveryChannels().length) {\r
              <p class="cc-hint">Select a template to see available channels.</p>\r
            } @else {\r
              <div class="cc-channel-toggles">\r
                @for (ch of deliveryChannels(); track ch) {\r
                  <label class="cc-toggle" [class.cc-toggle--on]="isChannelSelected(ch)">\r
                    <input type="checkbox" [checked]="isChannelSelected(ch)" (change)="toggleChannel(ch, $any($event.target).checked)" />\r
                    {{ channelLabel(ch) }}\r
                  </label>\r
                }\r
              </div>\r
              @if (channelSelectionHint()) { <p class="cc-hint cc-hint--warn">{{ channelSelectionHint() }}</p> }\r
            }\r
          </div>\r
\r
          @if (infoMessage()) {\r
            <div class="cc-info-banner">\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>\r
              {{ infoMessage() }}\r
            </div>\r
          }\r
\r
          @if (lastInviteLink()) {\r
            <div class="cc-link-box">\r
              <span class="cc-link-box__url">{{ lastInviteLink() }}</span>\r
              <button class="cc-link-box__copy" (click)="copyLink()" [disabled]="!canCopyLink()">\r
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>\r
                Copy\r
              </button>\r
            </div>\r
          }\r
\r
          <button class="cc-btn cc-btn--primary" (click)="sendLink()" [disabled]="sendBusy()">\r
            @if (sendBusy()) { <mat-spinner diameter="15" /><span>Sending\u2026</span> }\r
            @else { <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg><span>Send consent email</span> }\r
          </button>\r
        </div>\r
\r
        <!-- RIGHT: On behalf -->\r
        <div class="cc-card cc-action-card cc-animate" style="--delay: 160ms">\r
          <div class="cc-action-card__accent cc-action-card__accent--green"></div>\r
          <div class="cc-card__header">\r
            <span class="cc-card__title">Take consent on behalf</span>\r
            <span class="cc-card__icon cc-card__icon--green">\r
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>\r
            </span>\r
          </div>\r
          <p class="cc-action-card__desc">Record consent captured offline \u2014 branch visit, call, or written form.</p>\r
\r
          <!-- Consent type -->\r
          <div class="cc-field">\r
            <label class="cc-field__label">Consent type</label>\r
            <div class="cc-select-wrap">\r
              <select class="cc-select" [ngModel]="rightTemplateId()?.toString() ?? ''" (ngModelChange)="onRightTemplateChange($event)">\r
                <option value="">Choose consent type\u2026</option>\r
                @for (t of templates(); track t.id) { <option [value]="t.id">{{ t.consentName }}</option> }\r
              </select>\r
              <span class="cc-select-wrap__arrow"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></span>\r
            </div>\r
          </div>\r
\r
          <!-- Delivery channels (shown after template selection) -->\r
          @if (rightAvailableChannels().length) {\r
            <div class="cc-field">\r
              <label class="cc-field__label">\r
                Delivery channels\r
                <span class="cc-field__optional">select customer's preferred channels</span>\r
              </label>\r
              <div class="cc-channel-toggles">\r
                @for (ch of rightAvailableChannels(); track ch) {\r
                  <label class="cc-toggle" [class.cc-toggle--on]="isRightChannelSelected(ch)">\r
                    <input type="checkbox" [checked]="isRightChannelSelected(ch)" (change)="toggleRightChannel(ch, $any($event.target).checked)" />\r
                    {{ channelLabel(ch) }}\r
                  </label>\r
                }\r
              </div>\r
            </div>\r
          }\r
\r
          <!-- Languages (shown after template selection) -->\r
          @if (rightTemplateId() != null) {\r
            <div class="cc-field">\r
              <label class="cc-field__label">\r
                Languages\r
                <span class="cc-field__optional">select customer's preferred languages</span>\r
              </label>\r
              <div class="cc-lang-toggles">\r
                @for (lang of allLanguages; track lang) {\r
                  <label class="cc-toggle cc-toggle--lang" [class.cc-toggle--on]="isLanguageSelected(lang)">\r
                    <input type="checkbox" [checked]="isLanguageSelected(lang)" (change)="toggleLanguage(lang, $any($event.target).checked)" />\r
                    {{ formatLanguage(lang) }}\r
                  </label>\r
                }\r
              </div>\r
            </div>\r
          }\r
\r
          <!-- Mode + Source -->\r
          <div class="cc-field-row">\r
            <div class="cc-field">\r
              <label class="cc-field__label">Mode</label>\r
              <div class="cc-select-wrap">\r
                <select class="cc-select" [ngModel]="rightMode()" (ngModelChange)="rightMode.set($event)">\r
                  <option value="">Choose mode\u2026</option>\r
                  @for (m of modeOptions; track m) { <option [value]="m">{{ m }}</option> }\r
                </select>\r
                <span class="cc-select-wrap__arrow"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></span>\r
              </div>\r
            </div>\r
            <div class="cc-field">\r
              <label class="cc-field__label">Source channel</label>\r
              <div class="cc-select-wrap">\r
                <select class="cc-select" [ngModel]="rightSource()" (ngModelChange)="rightSource.set($event)">\r
                  <option value="">Choose source\u2026</option>\r
                  @for (s of sourceOptions; track s) { <option [value]="s">{{ s }}</option> }\r
                </select>\r
                <span class="cc-select-wrap__arrow"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Consent status -->\r
          <div class="cc-field">\r
            <label class="cc-field__label">Consent status</label>\r
            <div class="cc-status-options">\r
              @for (opt of STATUS_OPTIONS; track opt.value) {\r
                <label class="cc-status-option" [class.cc-status-option--selected]="rightConsentStatus() === opt.value" [attr.data-status]="opt.value.toLowerCase()">\r
                  <input type="radio" name="consentStatus" [value]="opt.value" [checked]="rightConsentStatus() === opt.value" (change)="rightConsentStatus.set(opt.value)" />\r
                  {{ opt.label }}\r
                </label>\r
              }\r
            </div>\r
          </div>\r
\r
          <!-- Evidence -->\r
          <div class="cc-field">\r
            <label class="cc-field__label">Evidence reference <span class="cc-field__optional">optional</span></label>\r
            <input class="cc-input" type="text" placeholder="Call ID, document no., etc." [ngModel]="evidenceRef()" (ngModelChange)="evidenceRef.set($event)" />\r
          </div>\r
\r
          <button class="cc-btn cc-btn--success" (click)="recordConsent()" [disabled]="recordBusy()">\r
            @if (recordBusy()) { <mat-spinner diameter="15" /><span>Recording\u2026</span> }\r
            @else { <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg><span>Record consent</span> }\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  }\r
\r
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap";\n\n/* src/app/features/admin/admin-capture-consent/admin-capture-consent.component.scss */\n:host {\n  --cc-font:\n    "DM Sans",\n    system-ui,\n    sans-serif;\n  --cc-font-mono: "DM Mono", monospace;\n  --cc-bg: #f6f7f9;\n  --cc-surface: #ffffff;\n  --cc-surface-2: #f9fafb;\n  --cc-border: rgba(0, 0, 0, 0.07);\n  --cc-border-md: rgba(0, 0, 0, 0.11);\n  --cc-text-1: #0d0f12;\n  --cc-text-2: #4b5563;\n  --cc-text-3: #9ca3af;\n  --cc-blue: #2563eb;\n  --cc-blue-bg: #eff6ff;\n  --cc-blue-border: #bfdbfe;\n  --cc-green: #059669;\n  --cc-green-bg: #ecfdf5;\n  --cc-green-border: #a7f3d0;\n  --cc-amber: #d97706;\n  --cc-amber-bg: #fffbeb;\n  --cc-amber-border: #fde68a;\n  --cc-red: #dc2626;\n  --cc-red-bg: #fef2f2;\n  --cc-red-border: #fecaca;\n  --cc-radius-sm: 6px;\n  --cc-radius: 10px;\n  --cc-radius-lg: 14px;\n  --cc-radius-xl: 18px;\n  --cc-radius-pill: 999px;\n  --cc-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --cc-shadow: 0 2px 8px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.04);\n  --cc-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.09), 0 2px 6px rgba(0, 0, 0, 0.05);\n  font-family: var(--cc-font);\n  -webkit-font-smoothing: antialiased;\n}\n.cc-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  padding: 1.75rem 0 3rem;\n  max-width: 1000px;\n}\n.cc-header {\n  margin-bottom: 0.25rem;\n}\n.cc-header__title {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--cc-text-1);\n  letter-spacing: -0.4px;\n  margin: 0 0 4px;\n}\n.cc-header__sub {\n  font-size: 13.5px;\n  color: var(--cc-text-2);\n  margin: 0;\n  line-height: 1.5;\n}\n.cc-search-bar__inner {\n  display: flex;\n  align-items: center;\n  background: var(--cc-surface);\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius-lg);\n  box-shadow: var(--cc-shadow-sm);\n  overflow: hidden;\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.cc-search-bar__inner:focus-within {\n  border-color: var(--cc-blue);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12), var(--cc-shadow-sm);\n}\n.cc-search-bar__icon {\n  display: flex;\n  align-items: center;\n  padding: 0 10px 0 16px;\n  color: var(--cc-text-3);\n  flex-shrink: 0;\n}\n.cc-search-bar__input {\n  flex: 1;\n  height: 48px;\n  border: none;\n  outline: none;\n  font-family: var(--cc-font);\n  font-size: 14.5px;\n  color: var(--cc-text-1);\n  background: transparent;\n  padding: 0 8px;\n}\n.cc-search-bar__input::placeholder {\n  color: var(--cc-text-3);\n}\n.cc-search-bar__btn {\n  height: 48px;\n  padding: 0 22px;\n  background: var(--cc-blue);\n  color: #fff;\n  border: none;\n  font-family: var(--cc-font);\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  transition: background 0.15s, opacity 0.15s;\n  flex-shrink: 0;\n  letter-spacing: 0.01em;\n}\n.cc-search-bar__btn:hover {\n  background: #1d4ed8;\n}\n.cc-search-bar__btn:active {\n  background: #1e40af;\n}\n.cc-search-bar__btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cc-search-bar__btn mat-spinner {\n  --mdc-circular-progress-active-indicator-color: rgba(255, 255, 255, 0.8);\n}\n.cc-card {\n  background: var(--cc-surface);\n  border: 1px solid var(--cc-border);\n  border-radius: var(--cc-radius-xl);\n  box-shadow: var(--cc-shadow-sm);\n  padding: 1.4rem 1.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.cc-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.cc-card__title {\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--cc-text-2);\n}\n.cc-card__icon {\n  width: 30px;\n  height: 30px;\n  border-radius: var(--cc-radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cc-card__icon--blue {\n  background: var(--cc-blue-bg);\n  color: var(--cc-blue);\n}\n.cc-card__icon--green {\n  background: var(--cc-green-bg);\n  color: var(--cc-green);\n}\n.cc-animate {\n  animation: ccSlideIn 0.38s cubic-bezier(0.22, 1, 0.36, 1) both;\n  animation-delay: var(--delay, 0ms);\n}\n@keyframes ccSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.cc-results {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.cc-profile {\n  display: flex;\n  gap: 1.25rem;\n  align-items: flex-start;\n}\n.cc-profile__avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--cc-blue);\n  flex-shrink: 0;\n  border: 2px solid var(--cc-blue-border);\n}\n.cc-profile__body {\n  flex: 1;\n  min-width: 0;\n}\n.cc-profile__top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n.cc-profile__name {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--cc-text-1);\n  letter-spacing: -0.2px;\n  margin: 0 0 2px;\n}\n.cc-profile__id {\n  font-size: 12px;\n  color: var(--cc-text-3);\n  font-family: var(--cc-font-mono);\n  margin: 0;\n}\n.cc-profile__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.cc-profile__channels {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cc-meta-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13.5px;\n  color: var(--cc-text-2);\n}\n.cc-meta-item__icon {\n  color: var(--cc-text-3);\n  display: flex;\n  align-items: center;\n}\n.cc-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  padding: 3px 9px;\n  border-radius: var(--cc-radius-pill);\n}\n.cc-badge--vip {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.cc-record-count {\n  font-size: 11.5px;\n  color: var(--cc-text-3);\n  background: var(--cc-surface-2);\n  border: 1px solid var(--cc-border);\n  border-radius: var(--cc-radius-pill);\n  padding: 2px 10px;\n}\n.cc-table-wrap {\n  overflow-x: auto;\n  margin: 0 -1.5rem;\n  padding: 0 1.5rem;\n}\n.cc-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13.5px;\n}\n.cc-table th {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--cc-text-3);\n  padding: 0 12px 10px;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--cc-border);\n}\n.cc-table td {\n  padding: 11px 12px;\n  color: var(--cc-text-1);\n  border-bottom: 1px solid var(--cc-border);\n  vertical-align: middle;\n}\n.cc-table__row {\n  animation: ccRowIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;\n  transition: background 0.12s;\n}\n.cc-table__row:hover td {\n  background: var(--cc-surface-2);\n}\n.cc-table__row:last-child td {\n  border-bottom: none;\n}\n.cc-table__name {\n  font-weight: 500;\n  color: var(--cc-text-1);\n}\n.cc-table__muted {\n  color: var(--cc-text-2);\n  font-size: 13px;\n}\n@keyframes ccRowIn {\n  from {\n    opacity: 0;\n    transform: translateX(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.cc-status {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11.5px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: var(--cc-radius-pill);\n  white-space: nowrap;\n}\n.cc-status--accepted,\n.cc-status--active {\n  background: var(--cc-green-bg);\n  color: var(--cc-green);\n  border: 1px solid var(--cc-green-border);\n}\n.cc-status--pending {\n  background: var(--cc-amber-bg);\n  color: var(--cc-amber);\n  border: 1px solid var(--cc-amber-border);\n}\n.cc-status--rejected {\n  background: var(--cc-red-bg);\n  color: var(--cc-red);\n  border: 1px solid var(--cc-red-border);\n}\n.cc-status--withdrawn {\n  background: #fdf4ff;\n  color: #7c3aed;\n  border: 1px solid #e9d5ff;\n}\n.cc-status--expiring_soon {\n  background: var(--cc-amber-bg);\n  color: #b45309;\n  border: 1px solid var(--cc-amber-border);\n}\n.cc-status--expired {\n  background: #f9fafb;\n  color: var(--cc-text-3);\n  border: 1px solid var(--cc-border-md);\n}\n.cc-channel-tag {\n  font-size: 11.5px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: var(--cc-radius-pill);\n  background: var(--cc-blue-bg);\n  color: var(--cc-blue);\n  border: 1px solid var(--cc-blue-border);\n}\n.cc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 2.5rem 1rem;\n  color: var(--cc-text-3);\n  text-align: center;\n}\n.cc-empty svg {\n  opacity: 0.4;\n}\n.cc-empty p {\n  margin: 0;\n  font-size: 13.5px;\n}\n.cc-loading-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 1.25rem 0;\n  font-size: 13.5px;\n  color: var(--cc-text-2);\n}\n.cc-actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n}\n@media (max-width: 680px) {\n  .cc-actions {\n    grid-template-columns: 1fr;\n  }\n}\n.cc-action-card {\n  padding-top: 1.2rem;\n}\n.cc-action-card__accent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  border-radius: var(--cc-radius-xl) var(--cc-radius-xl) 0 0;\n}\n.cc-action-card__accent--blue {\n  background: var(--cc-blue);\n}\n.cc-action-card__accent--green {\n  background: var(--cc-green);\n}\n.cc-action-card__desc {\n  font-size: 12.5px;\n  color: var(--cc-text-2);\n  margin: -4px 0 16px;\n  line-height: 1.55;\n}\n.cc-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.cc-field__label {\n  font-size: 11.5px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--cc-text-2);\n}\n.cc-field__optional {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 11px;\n  color: var(--cc-text-3);\n}\n.cc-field-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.cc-select-wrap {\n  position: relative;\n}\n.cc-select-wrap__arrow {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--cc-text-3);\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n}\n.cc-select {\n  width: 100%;\n  height: 40px;\n  padding: 0 36px 0 12px;\n  font-family: var(--cc-font);\n  font-size: 13.5px;\n  color: var(--cc-text-1);\n  background: var(--cc-surface);\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius);\n  appearance: none;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.cc-select:focus {\n  border-color: var(--cc-blue);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.cc-select:hover:not(:focus) {\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.cc-input {\n  width: 100%;\n  height: 40px;\n  padding: 0 12px;\n  font-family: var(--cc-font);\n  font-size: 13.5px;\n  color: var(--cc-text-1);\n  background: var(--cc-surface);\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius);\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.cc-input::placeholder {\n  color: var(--cc-text-3);\n}\n.cc-input:focus {\n  border-color: var(--cc-blue);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.cc-channel-toggles {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cc-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 0;\n  padding: 5px 13px;\n  font-size: 12.5px;\n  font-weight: 500;\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius-pill);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  background: var(--cc-surface);\n  color: var(--cc-text-2);\n  transition: all 0.15s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.cc-toggle input {\n  display: none;\n}\n.cc-toggle:hover {\n  border-color: var(--cc-blue);\n  color: var(--cc-blue);\n  background: var(--cc-blue-bg);\n}\n.cc-toggle--on {\n  background: var(--cc-blue);\n  color: #fff;\n  border-color: var(--cc-blue);\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.cc-toggle--on:hover {\n  background: #1d4ed8;\n  border-color: #1d4ed8;\n  color: #fff;\n}\n.cc-lang-toggles {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cc-toggle--lang {\n  gap: 5px;\n  margin-top: 7px;\n}\n.cc-status-options {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cc-status-option {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 13px;\n  font-size: 12.5px;\n  font-weight: 500;\n  border-radius: var(--cc-radius-pill);\n  border: 1px solid var(--cc-border-md);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.15s cubic-bezier(0.22, 1, 0.36, 1);\n  background: var(--cc-surface);\n  color: var(--cc-text-2);\n}\n.cc-status-option input {\n  display: none;\n}\n.cc-status-option:hover {\n  border-color: rgba(0, 0, 0, 0.2);\n  color: var(--cc-text-1);\n}\n.cc-status-option--selected[data-status=accepted] {\n  background: var(--cc-green-bg);\n  color: var(--cc-green);\n  border-color: var(--cc-green-border);\n  box-shadow: 0 1px 4px rgba(5, 150, 105, 0.2);\n}\n.cc-status-option--selected[data-status=pending] {\n  background: var(--cc-amber-bg);\n  color: var(--cc-amber);\n  border-color: var(--cc-amber-border);\n  box-shadow: 0 1px 4px rgba(217, 119, 6, 0.2);\n}\n.cc-status-option--selected[data-status=rejected] {\n  background: var(--cc-red-bg);\n  color: var(--cc-red);\n  border-color: var(--cc-red-border);\n  box-shadow: 0 1px 4px rgba(220, 38, 38, 0.2);\n}\n.cc-status-option--selected[data-status=withdrawn] {\n  background: #fdf4ff;\n  color: #7c3aed;\n  border-color: #e9d5ff;\n  box-shadow: 0 1px 4px rgba(124, 58, 237, 0.2);\n}\n.cc-hint {\n  font-size: 12px;\n  color: var(--cc-text-3);\n  margin: 0;\n  line-height: 1.5;\n}\n.cc-hint--warn {\n  color: var(--cc-amber);\n}\n.cc-info-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: var(--cc-blue-bg);\n  border: 1px solid var(--cc-blue-border);\n  border-radius: var(--cc-radius);\n  padding: 10px 12px;\n  font-size: 12.5px;\n  color: #1e40af;\n  line-height: 1.5;\n  margin-bottom: 14px;\n}\n.cc-info-banner svg {\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.cc-link-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--cc-surface-2);\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius);\n  padding: 8px 10px 8px 12px;\n  margin-bottom: 12px;\n}\n.cc-link-box__url {\n  flex: 1;\n  font-family: var(--cc-font-mono);\n  font-size: 11px;\n  color: var(--cc-text-2);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cc-link-box__copy {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 28px;\n  padding: 0 10px;\n  font-family: var(--cc-font);\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid var(--cc-border-md);\n  border-radius: var(--cc-radius-sm);\n  background: var(--cc-surface);\n  color: var(--cc-text-2);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.12s;\n}\n.cc-link-box__copy:hover {\n  background: var(--cc-blue-bg);\n  color: var(--cc-blue);\n  border-color: var(--cc-blue-border);\n}\n.cc-link-box__copy:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cc-btn {\n  width: 100%;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-family: var(--cc-font);\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  border-radius: var(--cc-radius);\n  cursor: pointer;\n  letter-spacing: 0.01em;\n  transition: all 0.15s cubic-bezier(0.22, 1, 0.36, 1);\n  position: relative;\n  overflow: hidden;\n}\n.cc-btn:active {\n  transform: scale(0.985);\n}\n.cc-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.cc-btn--primary {\n  background: var(--cc-blue);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);\n}\n.cc-btn--primary:hover:not(:disabled) {\n  background: #1d4ed8;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);\n  transform: translateY(-1px);\n}\n.cc-btn--primary mat-spinner {\n  --mdc-circular-progress-active-indicator-color: rgba(255, 255, 255, 0.8);\n}\n.cc-btn--success {\n  background: var(--cc-green);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.28);\n}\n.cc-btn--success:hover:not(:disabled) {\n  background: #047857;\n  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.38);\n  transform: translateY(-1px);\n}\n.cc-btn--success mat-spinner {\n  --mdc-circular-progress-active-indicator-color: rgba(255, 255, 255, 0.8);\n}\n@media (max-width: 560px) {\n  .cc-profile {\n    flex-direction: column;\n  }\n  .cc-field-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-capture-consent.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCaptureConsentComponent, { className: "AdminCaptureConsentComponent", filePath: "src/app/features/admin/admin-capture-consent/admin-capture-consent.component.ts", lineNumber: 327 });
})();
export {
  AdminCaptureConsentComponent
};
//# sourceMappingURL=chunk-BAENIQBB.js.map
