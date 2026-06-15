import {
  channelsLabel
} from "./chunk-QPL2KT7B.js";
import {
  ReviewActionDialogComponent
} from "./chunk-4RBO2DFQ.js";
import {
  ConfirmDialogComponent
} from "./chunk-GQSJPUX7.js";
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-JTDTIVJZ.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-T7T23VPO.js";
import {
  ConsentPreviewDialogComponent,
  MergeTagService
} from "./chunk-HI23A5RU.js";
import {
  MatDialog
} from "./chunk-5RTMJKSC.js";
import "./chunk-XINNQDUF.js";
import "./chunk-ASPSHXFC.js";
import {
  ConsentService
} from "./chunk-CSLDYKDC.js";
import "./chunk-VXKP42CX.js";
import "./chunk-OIBNGD5S.js";
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
import {
  DomSanitizer
} from "./chunk-23MDLYAU.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Input,
  JsonPipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
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

// src/app/features/checker/checker-channel-preview/checker-channel-preview.component.ts
function CheckerChannelPreviewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F4E1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No delivery channels configured for this consent");
    \u0275\u0275elementEnd()();
  }
}
function CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14);
    \u0275\u0275text(2, "From: noreply@consentiq.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4, "To: john.doe@example.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6, "Subject: Action Required: Consent Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 16);
    \u0275\u0275text(9, "[Company Logo Area]");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 17);
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275text(12, "ConsentIQ \xB7 Unsubscribe \xB7 Privacy Policy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275property("innerHTML", ctx_r1.processedEmailHtml(), \u0275\u0275sanitizeHtml);
  }
}
function CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "\u26A0\uFE0F Message will be split into 2 SMS");
    \u0275\u0275elementEnd();
  }
}
function CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 19)(2, "div", 20)(3, "div", 21);
    \u0275\u0275text(4, "ConsentIQ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275text(8, "9:41 AM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_2_Conditional_11_Template, 2, 0, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.smsBody());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.smsLen(), " / 160 characters");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.smsLen() > 160 ? 11 : -1);
  }
}
function CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 26)(2, "span");
    \u0275\u0275text(3, "\u{1F514} ConsentIQ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5, "now");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28);
    \u0275\u0275text(7, "Action Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.pushBody());
  }
}
function CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
  if (rf & 2) {
    const imgSrc_r3 = ctx.$implicit;
    \u0275\u0275property("src", imgSrc_r3, \u0275\u0275sanitizeUrl);
  }
}
function CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 30);
    \u0275\u0275text(2, "\u{1F7E2} ConsentIQ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32);
    \u0275\u0275repeaterCreate(5, CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_4_For_6_Template, 1, 1, "img", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275text(9, "9:41 \u2713\u2713");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.waData().images);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.waData().text, " ");
  }
}
function CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_5_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 38);
  }
  if (rf & 2) {
    const imgSrc_r4 = ctx.$implicit;
    \u0275\u0275property("src", imgSrc_r4, \u0275\u0275sanitizeUrl);
  }
}
function CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 35);
    \u0275\u0275text(2, "\u{1F310} ConsentIQ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "div", 37);
    \u0275\u0275repeaterCreate(5, CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_5_For_6_Template, 1, 1, "img", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 39);
    \u0275\u0275text(9, "9:41 \u2713\u2713");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.rcsData().images);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.rcsData().text, " ");
  }
}
function CheckerChannelPreviewComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 8);
    \u0275\u0275template(1, CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_1_Template, 13, 1, "div", 9)(2, CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_2_Template, 12, 3, "div", 10)(3, CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_3_Template, 10, 1, "div", 11)(4, CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_4_Template, 10, 1, "div", 12)(5, CheckerChannelPreviewComponent_Conditional_7_For_2_Conditional_5_Template, 10, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const id_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r1.tabLabel(id_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r5 === "EMAIL" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r5 === "SMS" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r5 === "PUSH" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r5 === "WHATSAPP" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r5 === "RCS" ? 5 : -1);
  }
}
function CheckerChannelPreviewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-group", 7);
    \u0275\u0275twoWayListener("selectedIndexChange", function CheckerChannelPreviewComponent_Conditional_7_Template_mat_tab_group_selectedIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeTab, $event) || (ctx_r1.activeTab = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(1, CheckerChannelPreviewComponent_Conditional_7_For_2_Template, 6, 6, "mat-tab", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("selectedIndex", ctx_r1.activeTab);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.activeChannels);
  }
}
var CheckerChannelPreviewComponent = class _CheckerChannelPreviewComponent {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
    this.channelEmail = false;
    this.channelSms = false;
    this.channelPush = false;
    this.channelWhatsapp = false;
    this.channelRcs = false;
    this.messageHtml = "";
    this.mergeTags = [];
    this.activeTab = 0;
    this.channelMeta = {
      EMAIL: { icon: "\u{1F4E7}", name: "Email" },
      SMS: { icon: "\u{1F4F1}", name: "SMS" },
      PUSH: { icon: "\u{1F514}", name: "Push" },
      WHATSAPP: { icon: "\u{1F4AC}", name: "WhatsApp" },
      RCS: { icon: "\u{1F310}", name: "RCS" }
    };
  }
  get activeChannels() {
    const order = [
      { id: "EMAIL", flag: this.channelEmail },
      { id: "SMS", flag: this.channelSms },
      { id: "PUSH", flag: this.channelPush },
      { id: "WHATSAPP", flag: this.channelWhatsapp },
      { id: "RCS", flag: this.channelRcs }
    ];
    return order.filter((c) => c.flag).map((c) => c.id);
  }
  ngOnChanges() {
    if (this.activeTab >= this.activeChannels.length) {
      this.activeTab = 0;
    }
  }
  tabLabel(id) {
    const m = this.channelMeta[id];
    return `${m.icon} ${m.name}`;
  }
  processedEmailHtml() {
    let html = this.messageHtml || "";
    for (const t of this.mergeTags) {
      const key = t.tagKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      html = html.replace(new RegExp(key, "g"), t.sampleValue || "");
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  extractImages(html) {
    if (!html)
      return [];
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return Array.from(tmp.querySelectorAll("img")).map((img) => img.getAttribute("src") || "").filter((src) => !!src);
  }
  stripHtml(html) {
    if (!html)
      return "";
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || "").replace(/\s+/g, " ").trim();
  }
  smsBody() {
    const t = this.stripHtml(this.messageHtml);
    return t.length > 160 ? t.slice(0, 157) + "..." : t;
  }
  smsLen() {
    return this.stripHtml(this.messageHtml).length;
  }
  pushBody() {
    return this.stripHtml(this.messageHtml).slice(0, 100);
  }
  waData() {
    return {
      text: this.stripHtml(this.messageHtml).slice(0, 200),
      images: this.extractImages(this.messageHtml)
    };
  }
  rcsData() {
    return {
      text: this.stripHtml(this.messageHtml).slice(0, 1e3),
      images: this.extractImages(this.messageHtml)
    };
  }
  static {
    this.\u0275fac = function CheckerChannelPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckerChannelPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckerChannelPreviewComponent, selectors: [["app-checker-channel-preview"]], inputs: { channelEmail: "channelEmail", channelSms: "channelSms", channelPush: "channelPush", channelWhatsapp: "channelWhatsapp", channelRcs: "channelRcs", messageHtml: "messageHtml", mergeTags: "mergeTags" }, features: [\u0275\u0275NgOnChangesFeature], decls: 8, vars: 1, consts: [[1, "preview-wrap"], [1, "preview-head"], [1, "preview-title"], [1, "preview-sub"], [1, "empty-prev"], ["animationDuration", "200ms", 1, "tabs", 3, "selectedIndex"], [1, "empty-ico"], ["animationDuration", "200ms", 1, "tabs", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [1, "mock-email"], [1, "mock-sms-wrap"], [1, "mock-push"], [1, "mock-wa"], [1, "mock-rcs"], [1, "mock-h"], [1, "mock-body"], [1, "logo-ph"], [1, "html-prev", 3, "innerHTML"], [1, "foot"], [1, "mock-phone"], [1, "sms-bubble"], [1, "sms-title"], [1, "sms-txt"], [1, "sms-time"], [1, "sms-meta"], [1, "sms-warn"], [1, "push-top"], [1, "now"], [1, "push-title"], [1, "push-body"], [1, "wa-head"], [1, "wa-body"], [1, "wa-bubble"], ["alt", "consent image", 1, "wa-img", 3, "src"], [1, "wa-meta"], [1, "rcs-head"], [1, "rcs-body"], [1, "rcs-bubble"], ["alt", "consent image", 1, "rcs-img", 3, "src"], [1, "rcs-meta"]], template: function CheckerChannelPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "\u{1F4F1} Channel Previews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Click a channel tab to see how the message will appear");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, CheckerChannelPreviewComponent_Conditional_6_Template, 5, 0, "div", 4)(7, CheckerChannelPreviewComponent_Conditional_7_Template, 3, 1, "mat-tab-group", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(!ctx.activeChannels.length ? 6 : 7);
      }
    }, dependencies: [CommonModule, MatTabsModule, MatTab, MatTabGroup], styles: [`@charset "UTF-8";



.preview-wrap[_ngcontent-%COMP%] {
  position: relative;
  padding: 1.6rem;
  border-radius: 24px;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.92),
      rgba(255, 255, 255, 0.8));
  border: 1px solid rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.06);
  overflow: hidden;
  margin-top: 1.5rem;
}
.preview-wrap[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at top right,
      rgba(99, 102, 241, 0.08),
      transparent 28%),
    radial-gradient(
      circle at bottom left,
      rgba(14, 165, 233, 0.06),
      transparent 24%);
  pointer-events: none;
}
.preview-head[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1.4rem;
}
.preview-title[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
}
.preview-sub[_ngcontent-%COMP%] {
  font-size: 0.88rem;
  color: #64748b;
}
.empty-prev[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  padding: 3rem 2rem;
  border-radius: 28px;
  text-align: center;
  background:
    linear-gradient(
      180deg,
      rgba(248, 250, 252, 0.95),
      rgba(241, 245, 249, 0.85));
  border: 1px dashed rgba(148, 163, 184, 0.24);
}
.empty-ico[_ngcontent-%COMP%] {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.empty-prev[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: #0f172a;
  font-size: 0.96rem;
  font-weight: 600;
}
.tabs[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
}
  .mat-mdc-tab-group {
  background: transparent;
}
  .mat-mdc-tab-header {
  margin-bottom: 1.2rem;
  border: none;
}
  .mat-mdc-tab-header-pagination {
  display: none !important;
}
  .mdc-tab {
  min-width: auto !important;
  margin-right: 0.65rem;
  border-radius: 999px;
  overflow: hidden;
  transition: background 0.2s ease, transform 0.2s ease;
}
  .mdc-tab__content {
  padding-inline: 0.8rem;
}
  .mdc-tab__text-label {
  color: #64748b !important;
  font-weight: 700 !important;
  transition: color 0.2s ease;
}
  .mdc-tab-indicator {
  display: none;
}
  .mdc-tab:hover {
  background: rgba(99, 102, 241, 0.08);
}
  .mdc-tab--active {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #2563eb) !important;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.22);
  transform: translateY(-1px);
}
  .mdc-tab--active .mdc-tab__text-label, 
  .mdc-tab--active .mdc-tab__content, 
  .mdc-tab--active .mdc-tab__ripple {
  color: #ffffff !important;
  opacity: 1 !important;
}
  .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: #ffffff !important;
  opacity: 1 !important;
}
  .mdc-tab:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
}
  .mat-mdc-tab-body-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 0.5rem;
}
.mock-email[_ngcontent-%COMP%], 
.mock-phone[_ngcontent-%COMP%], 
.mock-push[_ngcontent-%COMP%], 
.mock-wa[_ngcontent-%COMP%], 
.mock-rcs[_ngcontent-%COMP%] {
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 44px rgba(15, 23, 42, 0.08);
}
.mock-email[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid rgba(226, 232, 240, 0.9);
}
.mock-h[_ngcontent-%COMP%] {
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid rgba(226, 232, 240, 0.7);
  background: #f8fafc;
  color: black;
  font-size: 0.9rem;
  font-family:
    Arial,
    Helvetica,
    sans-serif;
  font-weight: bolder;
}
.mock-body[_ngcontent-%COMP%] {
  padding: 1.4rem;
}
.logo-ph[_ngcontent-%COMP%] {
  height: 90px;
  margin-bottom: 1.4rem;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background:
    linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.08),
      rgba(37, 99, 235, 0.06));
  color: #6366f1;
  font-weight: 700;
}
.html-prev[_ngcontent-%COMP%] {
  line-height: 1.7;
  color: #334155;
}
.foot[_ngcontent-%COMP%] {
  margin-top: 1.6rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  color: #94a3b8;
  font-size: 0.82rem;
}
.mock-sms-wrap[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mock-phone[_ngcontent-%COMP%] {
  width: 320px;
  padding: 1rem;
  border-radius: 34px;
  background:
    linear-gradient(
      180deg,
      #111827,
      #1e293b);
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.24);
}
.sms-bubble[_ngcontent-%COMP%] {
  max-width: 82%;
  padding: 0.95rem 1rem;
  border-radius: 22px 22px 22px 8px;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #2563eb);
  color: white;
}
.sms-title[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  font-weight: 800;
  opacity: 0.8;
  margin-bottom: 0.4rem;
}
.sms-txt[_ngcontent-%COMP%] {
  line-height: 1.6;
  font-size: 0.9rem;
}
.sms-time[_ngcontent-%COMP%] {
  margin-top: 0.9rem;
  text-align: center;
  color: #94a3b8;
  font-size: 0.72rem;
}
.sms-meta[_ngcontent-%COMP%] {
  margin-top: 1rem;
  color: #64748b;
  font-size: 0.82rem;
  font-weight: 700;
}
.sms-warn[_ngcontent-%COMP%] {
  margin-top: 0.7rem;
  padding: 0.65rem 0.9rem;
  border-radius: 12px;
  background: rgba(249, 115, 22, 0.12);
  color: #c2410c;
  font-size: 0.82rem;
  font-weight: 700;
}
.mock-push[_ngcontent-%COMP%] {
  max-width: 420px;
  padding: 1rem 1.1rem;
  background: white;
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 28px;
}
.push-top[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  color: #64748b;
  font-size: 0.78rem;
  font-weight: 700;
}
.push-title[_ngcontent-%COMP%] {
  margin-top: 0.7rem;
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
}
.push-body[_ngcontent-%COMP%] {
  margin-top: 0.45rem;
  line-height: 1.6;
  color: #475569;
}
.now[_ngcontent-%COMP%] {
  opacity: 0.7;
}
.mock-wa[_ngcontent-%COMP%] {
  width: 360px;
  border-radius: 34px;
  overflow: hidden;
  background: #0b141a;
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.28);
  border: 8px solid #111827;
  margin-inline: auto;
}
.wa-head[_ngcontent-%COMP%] {
  height: 64px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 1rem;
  background: #202c33;
  color: white;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.wa-head[_ngcontent-%COMP%]::before {
  content: "";
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #25d366,
      #128c7e);
  flex-shrink: 0;
}
.wa-body[_ngcontent-%COMP%] {
  min-height: 320px;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23182229' fill-opacity='0.35'%3E%3Cpath d='M0 0h40v40H0zM40 40h40v40H40z'/%3E%3C/g%3E%3C/svg%3E"), #0b141a;
}
.wa-bubble[_ngcontent-%COMP%] {
  position: relative;
  max-width: 85%;
  padding: 0.85rem 0.95rem 1.3rem;
  border-radius: 10px 10px 2px 10px;
  background: #005c4b;
  color: #e9edef;
  font-size: 0.92rem;
  line-height: 1.55;
  margin-left: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.22);
}
.wa-bubble[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  right: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  background: #005c4b;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
.wa-meta[_ngcontent-%COMP%] {
  position: absolute;
  right: 10px;
  bottom: 6px;
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.02em;
}
.wa-img[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 0.6rem;
  object-fit: cover;
}
.mock-rcs[_ngcontent-%COMP%] {
  width: 360px;
  border-radius: 34px;
  overflow: hidden;
  background: #f8fafc;
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.2);
  border: 8px solid #111827;
  margin-inline: auto;
}
.rcs-head[_ngcontent-%COMP%] {
  height: 64px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 1rem;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  color: #0f172a;
  font-weight: 700;
}
.rcs-head[_ngcontent-%COMP%]::before {
  content: "";
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #3b82f6,
      #2563eb);
  flex-shrink: 0;
}
.rcs-body[_ngcontent-%COMP%] {
  min-height: 220px;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background:
    linear-gradient(
      180deg,
      #f8fafc,
      #eef2ff);
}
.rcs-bubble[_ngcontent-%COMP%] {
  position: relative;
  max-width: 84%;
  padding: 0.9rem 1rem 1.35rem;
  border-radius: 22px 22px 6px 22px;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #3b82f6);
  color: white;
  line-height: 1.6;
  font-size: 0.92rem;
  margin-left: auto;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.18);
}
.rcs-meta[_ngcontent-%COMP%] {
  position: absolute;
  right: 12px;
  bottom: 7px;
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.78);
}
.rcs-img[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 0.6rem;
  object-fit: cover;
}
.mock-wa[_ngcontent-%COMP%]::after, 
.mock-rcs[_ngcontent-%COMP%]::after {
  content: "";
  display: block;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.04));
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}
@media (max-width: 768px) {
  .mock-wa[_ngcontent-%COMP%], 
   .mock-rcs[_ngcontent-%COMP%] {
    width: 100%;
    max-width: 100%;
  }
}
/*# sourceMappingURL=checker-channel-preview.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckerChannelPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-checker-channel-preview", standalone: true, imports: [CommonModule, MatTabsModule], template: `<div class="preview-wrap">\r
  <div class="preview-head">\r
    <span class="preview-title">\u{1F4F1} Channel Previews</span>\r
    <span class="preview-sub">Click a channel tab to see how the message will appear</span>\r
  </div>\r
\r
  @if (!activeChannels.length) {\r
    <div class="empty-prev">\r
      <div class="empty-ico">\u{1F4E1}</div>\r
      <p>No delivery channels configured for this consent</p>\r
    </div>\r
  } @else {\r
    <mat-tab-group [(selectedIndex)]="activeTab" class="tabs" animationDuration="200ms">\r
      @for (id of activeChannels; track id) {\r
        <mat-tab [label]="tabLabel(id)">\r
\r
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
\r
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
\r
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
\r
          @if (id === 'WHATSAPP') {\r
            <div class="mock-wa">\r
              <div class="wa-head">\u{1F7E2} ConsentIQ</div>\r
              <div class="wa-body">\r
                <div class="wa-bubble">\r
                  @for (imgSrc of waData().images; track imgSrc) {\r
                    <img [src]="imgSrc" alt="consent image" class="wa-img" />\r
                  }\r
                  {{ waData().text }}\r
                  <span class="wa-meta">9:41 \u2713\u2713</span>\r
                </div>\r
              </div>\r
            </div>\r
          }\r
\r
          @if (id === 'RCS') {\r
            <div class="mock-rcs">\r
              <div class="rcs-head">\u{1F310} ConsentIQ</div>\r
              <div class="rcs-body">\r
                <div class="rcs-bubble">\r
                  @for (imgSrc of rcsData().images; track imgSrc) {\r
                    <img [src]="imgSrc" alt="consent image" class="rcs-img" />\r
                  }\r
                  {{ rcsData().text }}\r
                  <span class="rcs-meta">9:41 \u2713\u2713</span>\r
                </div>\r
              </div>\r
            </div>\r
          }\r
\r
        </mat-tab>\r
      }\r
    </mat-tab-group>\r
  }\r
</div>`, styles: [`@charset "UTF-8";

/* src/app/features/checker/checker-channel-preview/checker-channel-preview.component.scss */
.preview-wrap {
  position: relative;
  padding: 1.6rem;
  border-radius: 24px;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.92),
      rgba(255, 255, 255, 0.8));
  border: 1px solid rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.06);
  overflow: hidden;
  margin-top: 1.5rem;
}
.preview-wrap::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at top right,
      rgba(99, 102, 241, 0.08),
      transparent 28%),
    radial-gradient(
      circle at bottom left,
      rgba(14, 165, 233, 0.06),
      transparent 24%);
  pointer-events: none;
}
.preview-head {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1.4rem;
}
.preview-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
}
.preview-sub {
  font-size: 0.88rem;
  color: #64748b;
}
.empty-prev {
  position: relative;
  z-index: 2;
  padding: 3rem 2rem;
  border-radius: 28px;
  text-align: center;
  background:
    linear-gradient(
      180deg,
      rgba(248, 250, 252, 0.95),
      rgba(241, 245, 249, 0.85));
  border: 1px dashed rgba(148, 163, 184, 0.24);
}
.empty-ico {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.empty-prev p {
  margin: 0;
  color: #0f172a;
  font-size: 0.96rem;
  font-weight: 600;
}
.tabs {
  position: relative;
  z-index: 2;
}
::ng-deep .mat-mdc-tab-group {
  background: transparent;
}
::ng-deep .mat-mdc-tab-header {
  margin-bottom: 1.2rem;
  border: none;
}
::ng-deep .mat-mdc-tab-header-pagination {
  display: none !important;
}
::ng-deep .mdc-tab {
  min-width: auto !important;
  margin-right: 0.65rem;
  border-radius: 999px;
  overflow: hidden;
  transition: background 0.2s ease, transform 0.2s ease;
}
::ng-deep .mdc-tab__content {
  padding-inline: 0.8rem;
}
::ng-deep .mdc-tab__text-label {
  color: #64748b !important;
  font-weight: 700 !important;
  transition: color 0.2s ease;
}
::ng-deep .mdc-tab-indicator {
  display: none;
}
::ng-deep .mdc-tab:hover {
  background: rgba(99, 102, 241, 0.08);
}
::ng-deep .mdc-tab--active {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #2563eb) !important;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.22);
  transform: translateY(-1px);
}
::ng-deep .mdc-tab--active .mdc-tab__text-label,
::ng-deep .mdc-tab--active .mdc-tab__content,
::ng-deep .mdc-tab--active .mdc-tab__ripple {
  color: #ffffff !important;
  opacity: 1 !important;
}
::ng-deep .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: #ffffff !important;
  opacity: 1 !important;
}
::ng-deep .mdc-tab:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
}
::ng-deep .mat-mdc-tab-body-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 0.5rem;
}
.mock-email,
.mock-phone,
.mock-push,
.mock-wa,
.mock-rcs {
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 44px rgba(15, 23, 42, 0.08);
}
.mock-email {
  background: white;
  border: 1px solid rgba(226, 232, 240, 0.9);
}
.mock-h {
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid rgba(226, 232, 240, 0.7);
  background: #f8fafc;
  color: black;
  font-size: 0.9rem;
  font-family:
    Arial,
    Helvetica,
    sans-serif;
  font-weight: bolder;
}
.mock-body {
  padding: 1.4rem;
}
.logo-ph {
  height: 90px;
  margin-bottom: 1.4rem;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background:
    linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.08),
      rgba(37, 99, 235, 0.06));
  color: #6366f1;
  font-weight: 700;
}
.html-prev {
  line-height: 1.7;
  color: #334155;
}
.foot {
  margin-top: 1.6rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  color: #94a3b8;
  font-size: 0.82rem;
}
.mock-sms-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mock-phone {
  width: 320px;
  padding: 1rem;
  border-radius: 34px;
  background:
    linear-gradient(
      180deg,
      #111827,
      #1e293b);
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.24);
}
.sms-bubble {
  max-width: 82%;
  padding: 0.95rem 1rem;
  border-radius: 22px 22px 22px 8px;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #2563eb);
  color: white;
}
.sms-title {
  font-size: 0.72rem;
  font-weight: 800;
  opacity: 0.8;
  margin-bottom: 0.4rem;
}
.sms-txt {
  line-height: 1.6;
  font-size: 0.9rem;
}
.sms-time {
  margin-top: 0.9rem;
  text-align: center;
  color: #94a3b8;
  font-size: 0.72rem;
}
.sms-meta {
  margin-top: 1rem;
  color: #64748b;
  font-size: 0.82rem;
  font-weight: 700;
}
.sms-warn {
  margin-top: 0.7rem;
  padding: 0.65rem 0.9rem;
  border-radius: 12px;
  background: rgba(249, 115, 22, 0.12);
  color: #c2410c;
  font-size: 0.82rem;
  font-weight: 700;
}
.mock-push {
  max-width: 420px;
  padding: 1rem 1.1rem;
  background: white;
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 28px;
}
.push-top {
  display: flex;
  justify-content: space-between;
  color: #64748b;
  font-size: 0.78rem;
  font-weight: 700;
}
.push-title {
  margin-top: 0.7rem;
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
}
.push-body {
  margin-top: 0.45rem;
  line-height: 1.6;
  color: #475569;
}
.now {
  opacity: 0.7;
}
.mock-wa {
  width: 360px;
  border-radius: 34px;
  overflow: hidden;
  background: #0b141a;
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.28);
  border: 8px solid #111827;
  margin-inline: auto;
}
.wa-head {
  height: 64px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 1rem;
  background: #202c33;
  color: white;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.wa-head::before {
  content: "";
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #25d366,
      #128c7e);
  flex-shrink: 0;
}
.wa-body {
  min-height: 320px;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23182229' fill-opacity='0.35'%3E%3Cpath d='M0 0h40v40H0zM40 40h40v40H40z'/%3E%3C/g%3E%3C/svg%3E"), #0b141a;
}
.wa-bubble {
  position: relative;
  max-width: 85%;
  padding: 0.85rem 0.95rem 1.3rem;
  border-radius: 10px 10px 2px 10px;
  background: #005c4b;
  color: #e9edef;
  font-size: 0.92rem;
  line-height: 1.55;
  margin-left: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.22);
}
.wa-bubble::after {
  content: "";
  position: absolute;
  right: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  background: #005c4b;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
.wa-meta {
  position: absolute;
  right: 10px;
  bottom: 6px;
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.02em;
}
.wa-img {
  display: block;
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 0.6rem;
  object-fit: cover;
}
.mock-rcs {
  width: 360px;
  border-radius: 34px;
  overflow: hidden;
  background: #f8fafc;
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.2);
  border: 8px solid #111827;
  margin-inline: auto;
}
.rcs-head {
  height: 64px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 1rem;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  color: #0f172a;
  font-weight: 700;
}
.rcs-head::before {
  content: "";
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #3b82f6,
      #2563eb);
  flex-shrink: 0;
}
.rcs-body {
  min-height: 220px;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background:
    linear-gradient(
      180deg,
      #f8fafc,
      #eef2ff);
}
.rcs-bubble {
  position: relative;
  max-width: 84%;
  padding: 0.9rem 1rem 1.35rem;
  border-radius: 22px 22px 6px 22px;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #3b82f6);
  color: white;
  line-height: 1.6;
  font-size: 0.92rem;
  margin-left: auto;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.18);
}
.rcs-meta {
  position: absolute;
  right: 12px;
  bottom: 7px;
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.78);
}
.rcs-img {
  display: block;
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 0.6rem;
  object-fit: cover;
}
.mock-wa::after,
.mock-rcs::after {
  content: "";
  display: block;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.04));
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}
@media (max-width: 768px) {
  .mock-wa,
  .mock-rcs {
    width: 100%;
    max-width: 100%;
  }
}
/*# sourceMappingURL=checker-channel-preview.component.css.map */
`] }]
  }], null, { channelEmail: [{
    type: Input
  }], channelSms: [{
    type: Input
  }], channelPush: [{
    type: Input
  }], channelWhatsapp: [{
    type: Input
  }], channelRcs: [{
    type: Input
  }], messageHtml: [{
    type: Input,
    args: [{ required: true }]
  }], mergeTags: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckerChannelPreviewComponent, { className: "CheckerChannelPreviewComponent", filePath: "src/app/features/checker/checker-channel-preview/checker-channel-preview.component.ts", lineNumber: 21 });
})();

// src/app/features/checker/consent-review/consent-review.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.fieldName;
function ConsentReviewComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u21A9 This consent may have prior revisions on record (v", c_r2.version, ").");
  }
}
function ConsentReviewComponent_Conditional_0_For_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u270F\uFE0F Modified \xB7 ", d_r3.fieldLabel, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.newValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Was: ", d_r3.oldValue, "");
  }
}
function ConsentReviewComponent_Conditional_0_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "No version rows.");
    \u0275\u0275elementEnd();
  }
}
function ConsentReviewComponent_Conditional_0_Conditional_85_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "pre");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, v_r4));
  }
}
function ConsentReviewComponent_Conditional_0_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 23);
    \u0275\u0275repeaterCreate(1, ConsentReviewComponent_Conditional_0_Conditional_85_For_2_Template, 4, 3, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.versions());
  }
}
function ConsentReviewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
    \u0275\u0275text(3, "\u2190 Pending Approvals");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
    \u0275\u0275text(11, "\u2705 CHECKER REVIEW MODE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 7);
    \u0275\u0275text(13, " You are reviewing a consent submitted by ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " \xB7 ");
    \u0275\u0275elementStart(17, "span", 8)(18, "span", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 10);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, ConsentReviewComponent_Conditional_0_Conditional_24_Template, 2, 1, "p", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 12)(26, "div", 13)(27, "span", 14);
    \u0275\u0275text(28, "Consent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 15);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 13)(32, "span", 14);
    \u0275\u0275text(33, "Consent ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 16);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 13)(37, "span", 14);
    \u0275\u0275text(38, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 15);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 13)(42, "span", 14);
    \u0275\u0275text(43, "Validity Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 15);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 13)(47, "span", 14);
    \u0275\u0275text(48, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 15);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 13)(52, "span", 14);
    \u0275\u0275text(53, "Delivery Channels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 15);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 17)(57, "span", 14);
    \u0275\u0275text(58, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 15);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 13)(62, "span", 14);
    \u0275\u0275text(63, "Submitted At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 18)(65, "span");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 19);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 13)(72, "span", 14);
    \u0275\u0275text(73, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 15);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(76, ConsentReviewComponent_Conditional_0_For_77_Template, 7, 3, "div", 20, _forTrack0);
    \u0275\u0275element(78, "app-checker-channel-preview", 21);
    \u0275\u0275elementStart(79, "mat-accordion")(80, "mat-expansion-panel")(81, "mat-expansion-panel-header")(82, "mat-panel-title");
    \u0275\u0275text(83, "Version history");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(84, ConsentReviewComponent_Conditional_0_Conditional_84_Template, 2, 0, "p", 22)(85, ConsentReviewComponent_Conditional_0_Conditional_85_Template, 3, 0, "ul", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(86, "div", 24);
    \u0275\u0275elementStart(87, "div", 25)(88, "div")(89, "div", 26);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 27);
    \u0275\u0275text(92, "Your decision will be logged and the maker will be notified.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 28)(94, "button", 29);
    \u0275\u0275listener("click", function ConsentReviewComponent_Conditional_0_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.approve());
    });
    \u0275\u0275text(95, " Approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 30);
    \u0275\u0275listener("click", function ConsentReviewComponent_Conditional_0_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.requestRevision());
    });
    \u0275\u0275text(97, " \u21A9 Request Revision ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "button", 31);
    \u0275\u0275listener("click", function ConsentReviewComponent_Conditional_0_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.reject());
    });
    \u0275\u0275text(99, " Reject ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_24_0;
    const c_r2 = ctx;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Reviewing: ", c_r2.consentName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.consentId);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((c_r2.createdBy == null ? null : c_r2.createdBy.fullName) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 31, c_r2.submittedAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 34, c_r2.submittedAt, "hh:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r2.version > 1 ? 24 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r2.consentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.consentId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", c_r2.validityPeriodDays, " days");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.channelsLabel(c_r2) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((c_r2.tagsUsed || \u0275\u0275pureFunction0(43, _c0)).join(", ") || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 37, c_r2.submittedAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 40, c_r2.submittedAt, "hh:mm a"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r2.createdBy == null ? null : c_r2.createdBy.fullName);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.diff());
    \u0275\u0275advance(2);
    \u0275\u0275property("channelEmail", c_r2.channelEmail)("channelSms", c_r2.channelSms)("channelPush", c_r2.channelPush)("channelWhatsapp", c_r2.channelWhatsapp)("channelRcs", c_r2.channelRcs)("messageHtml", (tmp_24_0 = c_r2.consentMessage) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : "")("mergeTags", ctx_r4.mergeTags);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r4.versions().length ? 84 : 85);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("dim", !ctx_r4.canDecide());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Make your decision for: ", c_r2.consentName, " v", c_r2.version, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r4.canDecide() || ctx_r4.busy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r4.canDecide() || ctx_r4.busy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r4.canDecide() || ctx_r4.busy());
  }
}
var ConsentReviewComponent = class _ConsentReviewComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.api = inject(ConsentService);
    this.mergeApi = inject(MergeTagService);
    this.dialog = inject(MatDialog);
    this.notify = inject(NotificationService);
    this.sanitizer = inject(DomSanitizer);
    this.consent = signal(null);
    this.diff = signal([]);
    this.versions = signal([]);
    this.busy = signal(false);
    this.mergeTags = [];
    this.channelsLabel = channelsLabel;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.mergeApi.getMergeTags().subscribe({
      next: (t) => this.mergeTags = t,
      error: () => {
      }
    });
    this.api.getConsentById(id).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.consent.set(res.data);
        }
      }
    });
    this.api.getConsentDiff(id).subscribe({
      next: (res) => {
        if (res.success && res.data?.differences) {
          this.diff.set(res.data.differences.filter((d) => d.isModified));
        }
      }
    });
    this.api.getVersionHistory(id).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.versions.set(res.data);
        }
      }
    });
  }
  messageHtml() {
    const raw = this.consent()?.consentMessage || "";
    let html = raw;
    for (const t of this.mergeTags) {
      const key = t.tagKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      html = html.replace(new RegExp(key, "g"), t.sampleValue || "");
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  fullPreview() {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data = {
      html: c.consentMessage || "",
      mergeTags: this.mergeTags
    };
    this.dialog.open(ConsentPreviewDialogComponent, { width: "760px", data });
  }
  approve() {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data = {
      icon: "\u2705",
      iconColor: "rgba(22,163,74,0.15)",
      title: "Approve this Consent?",
      body: `'${c.consentName}' will be marked as Approved and made ready to publish. This action will notify the maker.`,
      cancelLabel: "Cancel",
      confirmLabel: "Confirm Approval",
      confirmColor: "success"
    };
    const ref = this.dialog.open(ConfirmDialogComponent, { width: "460px", disableClose: true, data });
    ref.afterClosed().subscribe((ok) => {
      if (!ok) {
        return;
      }
      this.busy.set(true);
      this.api.reviewConsent(c.id, "APPROVE").subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.success("\u2705 Consent approved successfully!", res.message);
            setTimeout(() => void this.router.navigateByUrl("/checker/pending"), 1500);
          }
        },
        error: () => {
          this.busy.set(false);
        }
      });
    });
  }
  requestRevision() {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data = {
      title: "Request Revision",
      icon: "\u21A9",
      iconColor: "#d97706",
      textareaLabel: "What needs to be changed?",
      placeholder: "Be specific \u2014 describe exactly what the maker should update\u2026",
      confirmLabel: "Send Revision Request",
      confirmColor: "warning",
      minLength: 20
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: "520px", disableClose: true, data });
    ref.afterClosed().subscribe((msg) => {
      if (!msg) {
        return;
      }
      this.busy.set(true);
      this.api.reviewConsent(c.id, "REQUEST_REVISION", void 0, msg).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.warning("\u21A9 Revision request sent to maker.", res.message);
            setTimeout(() => void this.router.navigateByUrl("/checker/pending"), 1200);
          }
        },
        error: () => {
          this.busy.set(false);
        }
      });
    });
  }
  reject() {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data = {
      title: "Reject this Consent",
      icon: "\u274C",
      iconColor: "#dc2626",
      textareaLabel: "Reason for rejection",
      placeholder: "Provide a clear reason so the maker understands why this was rejected\u2026",
      confirmLabel: "Confirm Rejection",
      confirmColor: "warn",
      minLength: 20
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: "520px", disableClose: true, data });
    ref.afterClosed().subscribe((reason) => {
      if (!reason) {
        return;
      }
      this.busy.set(true);
      this.api.reviewConsent(c.id, "REJECT", reason).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.error("\u274C Consent rejected.", res.message || "");
            setTimeout(() => void this.router.navigateByUrl("/checker/pending"), 1200);
          }
        },
        error: () => {
          this.busy.set(false);
        }
      });
    });
  }
  canDecide() {
    return this.consent()?.status === "PENDING_APPROVAL";
  }
  static {
    this.\u0275fac = function ConsentReviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentReviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsentReviewComponent, selectors: [["app-consent-review"]], decls: 1, vars: 1, consts: [[1, "page"], [1, "subnav"], ["mat-stroked-button", "", "routerLink", "/checker/pending"], [1, "title-row"], [1, "pill-id"], [1, "mode-card"], [1, "mode-title"], [1, "mode-sub"], [1, "timestamp"], [1, "timestamp-date"], [1, "timestamp-time"], [1, "mode-note"], [1, "grid"], [1, "field"], [1, "k"], [1, "v"], [1, "v", "mono"], [1, "field", "full"], [1, "v", "timestamp-field"], [1, "time-chip"], [1, "diff-box"], [3, "channelEmail", "channelSms", "channelPush", "channelWhatsapp", "channelRcs", "messageHtml", "mergeTags"], [1, "muted"], [1, "ver-list"], [1, "spacer"], [1, "decision"], [1, "d-title"], [1, "d-sub"], [1, "d-btns"], ["mat-flat-button", "", 1, "ciq-btn-success", "ap", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "ciq-btn-warning", "rev", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "reject-btn", 3, "click", "disabled"], [1, "diff-title"], [1, "diff-new"], [1, "diff-old"]], template: function ConsentReviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConsentReviewComponent_Conditional_0_Template, 100, 44, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.consent()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [RouterLink, MatButtonModule, MatAnchor, MatButton, MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, JsonPipe, DatePipe, CheckerChannelPreviewComponent], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto 120px;\n  padding: 28px 20px 0;\n}\n.subnav[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.subnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 40px;\n  padding: 0 16px;\n  border-radius: 12px !important;\n  border-color: #dbe2ea !important;\n  background: rgba(255, 255, 255, 0.85);\n  color: #475569 !important;\n  font-weight: 700;\n  text-decoration: none;\n  transition: all 0.18s ease;\n}\n.subnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.3) !important;\n  background: #eef2ff !important;\n  color: #4f46e5 !important;\n}\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.title-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #6366f1;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(28px, 4vw, 38px);\n  line-height: 1.05;\n  font-weight: 850;\n  letter-spacing: -0.04em;\n  color: #0f172a;\n}\n.pill-id[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.12),\n      rgba(59, 130, 246, 0.12));\n  border: 1px solid rgba(99, 102, 241, 0.18);\n  color: #4338ca;\n  font-size: 12px;\n  font-weight: 800;\n  font-family: "JetBrains Mono", monospace;\n}\n.mode-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 22px 24px;\n  margin-bottom: 24px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #0f172a 50%,\n      #111827 100%);\n  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.14);\n}\n.mode-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.28),\n      transparent 26%);\n  pointer-events: none;\n}\n.mode-title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n}\n.mode-sub[_ngcontent-%COMP%], \n.mode-note[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 14px 0 0;\n  font-size: 14px;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.8);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 760px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 16px 18px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.field[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(99, 102, 241, 0.25);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n.field.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.k[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.v[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 1.5;\n  color: #0f172a;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n}\n.diff-box[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 14px;\n  padding: 18px 20px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.08),\n      rgba(251, 191, 36, 0.08));\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n.diff-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #92400e;\n}\n.diff-new[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.diff-old[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 13px;\n  color: #64748b;\n}\n.msg-card[_ngcontent-%COMP%] {\n  margin: 24px 0;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n}\n.msg-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 20px 22px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.msg-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.msg-head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  font-weight: 700;\n}\n.msg-body[_ngcontent-%COMP%] {\n  padding: 28px;\n  min-height: 180px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fafc);\n  line-height: 1.8;\n  font-size: 15px;\n  color: #1e293b;\n}\n.ver-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.ver-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 14px 0;\n  border-bottom: 1px dashed #e2e8f0;\n}\n.ver-list[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-wrap;\n  font-size: 12px;\n  line-height: 1.7;\n  color: #334155;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.spacer[_ngcontent-%COMP%] {\n  height: 120px;\n}\n.decision[_ngcontent-%COMP%] {\n  position: fixed;\n  left: var(--sidebar-width);\n  right: 0;\n  bottom: 0;\n  z-index: 40;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n  padding: 18px 30px;\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.94),\n      rgba(30, 41, 59, 0.96));\n  backdrop-filter: blur(22px);\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 -10px 30px rgba(15, 23, 42, 0.18);\n}\n@media (max-width: 900px) {\n  .decision[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.decision.dim[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.d-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: #ffffff;\n}\n.d-sub[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.d-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\nbutton.ap[_ngcontent-%COMP%] {\n  min-width: 150px;\n  height: 38px;\n  padding: 0 1rem;\n  border: none;\n  border-radius: 16px !important;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(16, 185, 129, 0.24);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    opacity 0.18s ease;\n}\nbutton.ap[_ngcontent-%COMP%]:hover:not([disabled]) {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 32px rgba(16, 185, 129, 0.32);\n}\nbutton.ap[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\nbutton.rev[_ngcontent-%COMP%] {\n  min-width: 190px;\n  height: 38px;\n  padding: 0 1rem;\n  border: none;\n  border-radius: 16px !important;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(245, 158, 11, 0.24);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    opacity 0.18s ease;\n}\nbutton.rev[_ngcontent-%COMP%]:hover:not([disabled]) {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 32px rgba(245, 158, 11, 0.32);\n}\nbutton.rev[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\nbutton.reject-btn[_ngcontent-%COMP%] {\n  min-width: 130px;\n  height: 38px;\n  padding: 0 1rem;\n  border: none;\n  border-radius: 16px !important;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(239, 68, 68, 0.24);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    opacity 0.18s ease;\n}\nbutton.reject-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 32px rgba(239, 68, 68, 0.32);\n}\nbutton.reject-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n  .mat-expansion-panel {\n  border-radius: 18px !important;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05) !important;\n}\n  .mat-expansion-panel-header {\n  padding: 0 20px !important;\n}\n  .mat-expansion-panel-body {\n  padding: 0 20px 20px !important;\n}\n.timestamp[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  vertical-align: middle;\n}\n.timestamp-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #4338ca;\n}\n.timestamp-time[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  font-size: 12px;\n  font-weight: 700;\n  color: #4f46e5;\n  letter-spacing: 0.02em;\n}\n.timestamp-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.time-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 999px;\n  background: #eef2ff;\n  border: 1px solid #c7d2fe;\n  color: #4338ca;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n/*# sourceMappingURL=consent-review.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentReviewComponent, [{
    type: Component,
    args: [{ selector: "app-consent-review", standalone: true, imports: [RouterLink, MatButtonModule, MatExpansionModule, JsonPipe, DatePipe, CheckerChannelPreviewComponent], template: `@if (consent(); as c) {\r
  <div class="page">\r
\r
    <div class="subnav">\r
      <a mat-stroked-button routerLink="/checker/pending">\u2190 Pending Approvals</a>\r
    </div>\r
\r
    <div class="title-row">\r
      <h1>Reviewing: {{ c.consentName }}</h1>\r
      <span class="pill-id">{{ c.consentId }}</span>\r
    </div>\r
\r
    <div class="mode-card">\r
      <div class="mode-title">\u2705 CHECKER REVIEW MODE</div>\r
      <p class="mode-sub">\r
        You are reviewing a consent submitted by\r
        <strong>{{ c.createdBy?.fullName || '\u2014' }}</strong> \xB7\r
        <span class="timestamp">\r
          <span class="timestamp-date">{{ c.submittedAt | date:'dd MMM yyyy' }}</span>\r
          <span class="timestamp-time">{{ c.submittedAt | date:'hh:mm a' }}</span>\r
        </span>\r
      </p>\r
      @if (c.version > 1) {\r
        <p class="mode-note">\u21A9 This consent may have prior revisions on record (v{{ c.version }}).</p>\r
      }\r
    </div>\r
\r
    <div class="grid">\r
      <div class="field">\r
        <span class="k">Consent Name</span>\r
        <span class="v">{{ c.consentName }}</span>\r
      </div>\r
      <div class="field">\r
        <span class="k">Consent ID</span>\r
        <span class="v mono">{{ c.consentId }}</span>\r
      </div>\r
      <div class="field">\r
        <span class="k">Category</span>\r
        <span class="v">{{ c.category }}</span>\r
      </div>\r
      <div class="field">\r
        <span class="k">Validity Period</span>\r
        <span class="v">{{ c.validityPeriodDays }} days</span>\r
      </div>\r
      <div class="field">\r
        <span class="k">Status</span>\r
        <span class="v">{{ c.status }}</span>\r
      </div>\r
      <div class="field">\r
        <span class="k">Delivery Channels</span>\r
        <span class="v">{{ channelsLabel(c) || '\u2014' }}</span>\r
      </div>\r
      <div class="field full">\r
        <span class="k">Tags</span>\r
        <span class="v">{{ (c.tagsUsed || []).join(', ') || '\u2014' }}</span>\r
      </div>\r
      <div class="field">\r
        <span class="k">Submitted At</span>\r
        <span class="v timestamp-field">\r
          <span>{{ c.submittedAt | date:'dd MMM yyyy' }}</span>\r
          <span class="time-chip">{{ c.submittedAt | date:'hh:mm a' }}</span>\r
        </span>\r
      </div>\r
      <div class="field">\r
        <span class="k">Created By</span>\r
        <span class="v">{{ c.createdBy?.fullName }}</span>\r
      </div>\r
    </div>\r
\r
    @for (d of diff(); track d.fieldName) {\r
      <div class="diff-box">\r
        <div class="diff-title">\u270F\uFE0F Modified \xB7 {{ d.fieldLabel }}</div>\r
        <div class="diff-new">{{ d.newValue }}</div>\r
        <div class="diff-old">Was: {{ d.oldValue }}</div>\r
      </div>\r
    }\r
\r
    <app-checker-channel-preview\r
      [channelEmail]="c.channelEmail"\r
      [channelSms]="c.channelSms"\r
      [channelPush]="c.channelPush"\r
      [channelWhatsapp]="c.channelWhatsapp"\r
      [channelRcs]="c.channelRcs"\r
      [messageHtml]="c.consentMessage ?? ''"\r
      [mergeTags]="mergeTags">\r
    </app-checker-channel-preview>\r
\r
    <mat-accordion>\r
      <mat-expansion-panel>\r
        <mat-expansion-panel-header>\r
          <mat-panel-title>Version history</mat-panel-title>\r
        </mat-expansion-panel-header>\r
        @if (!versions().length) {\r
          <p class="muted">No version rows.</p>\r
        } @else {\r
          <ul class="ver-list">\r
            @for (v of versions(); track $index) {\r
              <li>\r
                <pre>{{ v | json }}</pre>\r
              </li>\r
            }\r
          </ul>\r
        }\r
      </mat-expansion-panel>\r
    </mat-accordion>\r
\r
    <div class="spacer"></div>\r
\r
    <div class="decision" [class.dim]="!canDecide()">\r
      <div>\r
        <div class="d-title">Make your decision for: {{ c.consentName }} v{{ c.version }}</div>\r
        <div class="d-sub">Your decision will be logged and the maker will be notified.</div>\r
      </div>\r
      <div class="d-btns">\r
        <button\r
          mat-flat-button\r
          class="ciq-btn-success ap"\r
          [disabled]="!canDecide() || busy()"\r
          (click)="approve()">\r
          Approve\r
        </button>\r
        <button\r
          mat-stroked-button\r
          class="ciq-btn-warning rev"\r
          [disabled]="!canDecide() || busy()"\r
          (click)="requestRevision()">\r
          \u21A9 Request Revision\r
        </button>\r
        <button\r
          mat-stroked-button\r
          class="reject-btn"\r
          [disabled]="!canDecide() || busy()"\r
          (click)="reject()">\r
          Reject\r
        </button>\r
      </div>\r
    </div>\r
\r
  </div>\r
}`, styles: ['@charset "UTF-8";\n\n/* src/app/features/checker/consent-review/consent-review.component.scss */\n.page {\n  max-width: 1100px;\n  margin: 0 auto 120px;\n  padding: 28px 20px 0;\n}\n.subnav {\n  margin-bottom: 18px;\n}\n.subnav a {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 40px;\n  padding: 0 16px;\n  border-radius: 12px !important;\n  border-color: #dbe2ea !important;\n  background: rgba(255, 255, 255, 0.85);\n  color: #475569 !important;\n  font-weight: 700;\n  text-decoration: none;\n  transition: all 0.18s ease;\n}\n.subnav a:hover {\n  border-color: rgba(99, 102, 241, 0.3) !important;\n  background: #eef2ff !important;\n  color: #4f46e5 !important;\n}\n.title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.title-content {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.eyebrow {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #6366f1;\n}\nh1 {\n  margin: 0;\n  font-size: clamp(28px, 4vw, 38px);\n  line-height: 1.05;\n  font-weight: 850;\n  letter-spacing: -0.04em;\n  color: #0f172a;\n}\n.pill-id {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.12),\n      rgba(59, 130, 246, 0.12));\n  border: 1px solid rgba(99, 102, 241, 0.18);\n  color: #4338ca;\n  font-size: 12px;\n  font-weight: 800;\n  font-family: "JetBrains Mono", monospace;\n}\n.mode-card {\n  position: relative;\n  overflow: hidden;\n  padding: 22px 24px;\n  margin-bottom: 24px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #0f172a 50%,\n      #111827 100%);\n  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.14);\n}\n.mode-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.28),\n      transparent 26%);\n  pointer-events: none;\n}\n.mode-title {\n  position: relative;\n  z-index: 1;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n}\n.mode-sub,\n.mode-note {\n  position: relative;\n  z-index: 1;\n  margin: 14px 0 0;\n  font-size: 14px;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.8);\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 760px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 16px 18px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n.field:hover {\n  transform: translateY(-2px);\n  border-color: rgba(99, 102, 241, 0.25);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n.field.full {\n  grid-column: 1/-1;\n}\n.k {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.v {\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 1.5;\n  color: #0f172a;\n}\n.mono {\n  font-family: "JetBrains Mono", monospace;\n}\n.diff-box {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 14px;\n  padding: 18px 20px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.08),\n      rgba(251, 191, 36, 0.08));\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n.diff-title {\n  font-size: 13px;\n  font-weight: 800;\n  color: #92400e;\n}\n.diff-new {\n  margin-top: 10px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.diff-old {\n  margin-top: 6px;\n  font-size: 13px;\n  color: #64748b;\n}\n.msg-card {\n  margin: 24px 0;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n}\n.msg-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 20px 22px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.msg-head h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.msg-head button {\n  border-radius: 12px !important;\n  font-weight: 700;\n}\n.msg-body {\n  padding: 28px;\n  min-height: 180px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fafc);\n  line-height: 1.8;\n  font-size: 15px;\n  color: #1e293b;\n}\n.ver-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.ver-list li {\n  padding: 14px 0;\n  border-bottom: 1px dashed #e2e8f0;\n}\n.ver-list pre {\n  margin: 0;\n  white-space: pre-wrap;\n  font-size: 12px;\n  line-height: 1.7;\n  color: #334155;\n}\n.muted {\n  color: #94a3b8;\n}\n.spacer {\n  height: 120px;\n}\n.decision {\n  position: fixed;\n  left: var(--sidebar-width);\n  right: 0;\n  bottom: 0;\n  z-index: 40;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n  padding: 18px 30px;\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.94),\n      rgba(30, 41, 59, 0.96));\n  backdrop-filter: blur(22px);\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 -10px 30px rgba(15, 23, 42, 0.18);\n}\n@media (max-width: 900px) {\n  .decision {\n    left: 0;\n  }\n}\n.decision.dim {\n  opacity: 0.55;\n}\n.d-title {\n  font-size: 15px;\n  font-weight: 800;\n  color: #ffffff;\n}\n.d-sub {\n  margin-top: 4px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.d-btns {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\nbutton.ap {\n  min-width: 150px;\n  height: 38px;\n  padding: 0 1rem;\n  border: none;\n  border-radius: 16px !important;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(16, 185, 129, 0.24);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    opacity 0.18s ease;\n}\nbutton.ap:hover:not([disabled]) {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 32px rgba(16, 185, 129, 0.32);\n}\nbutton.ap:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\nbutton.rev {\n  min-width: 190px;\n  height: 38px;\n  padding: 0 1rem;\n  border: none;\n  border-radius: 16px !important;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(245, 158, 11, 0.24);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    opacity 0.18s ease;\n}\nbutton.rev:hover:not([disabled]) {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 32px rgba(245, 158, 11, 0.32);\n}\nbutton.rev:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\nbutton.reject-btn {\n  min-width: 130px;\n  height: 38px;\n  padding: 0 1rem;\n  border: none;\n  border-radius: 16px !important;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(239, 68, 68, 0.24);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    opacity 0.18s ease;\n}\nbutton.reject-btn:hover:not([disabled]) {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 32px rgba(239, 68, 68, 0.32);\n}\nbutton.reject-btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n::ng-deep .mat-expansion-panel {\n  border-radius: 18px !important;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05) !important;\n}\n::ng-deep .mat-expansion-panel-header {\n  padding: 0 20px !important;\n}\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 20px 20px !important;\n}\n.timestamp {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  vertical-align: middle;\n}\n.timestamp-date {\n  font-size: 13px;\n  font-weight: 500;\n  color: #4338ca;\n}\n.timestamp-time {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  font-size: 12px;\n  font-weight: 700;\n  color: #4f46e5;\n  letter-spacing: 0.02em;\n}\n.timestamp-field {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.time-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 999px;\n  background: #eef2ff;\n  border: 1px solid #c7d2fe;\n  color: #4338ca;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n/*# sourceMappingURL=consent-review.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsentReviewComponent, { className: "ConsentReviewComponent", filePath: "src/app/features/checker/consent-review/consent-review.component.ts", lineNumber: 32 });
})();
export {
  ConsentReviewComponent
};
//# sourceMappingURL=chunk-Z6TR5HCR.js.map
