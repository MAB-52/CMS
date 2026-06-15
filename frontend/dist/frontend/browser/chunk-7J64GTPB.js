import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-DDZDLAYC.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-T6DLIJPT.js";
import "./chunk-OIBNGD5S.js";
import {
  AuditService
} from "./chunk-QTPUEVRL.js";
import {
  TimeAgoPipe
} from "./chunk-K3ZYD44P.js";
import "./chunk-EJZSSRS2.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import {
  LoggerService
} from "./chunk-RENR4JVC.js";
import "./chunk-5EC44GU6.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import {
  RouterLink
} from "./chunk-2TGCEGVP.js";
import "./chunk-23MDLYAU.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  Input,
  MatCommonModule,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/card.mjs
var _c0 = ["*"];
var _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
var _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
var _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
var _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
var MAT_CARD_CONFIG = new InjectionToken("MAT_CARD_CONFIG");
var MatCard = class _MatCard {
  appearance;
  constructor() {
    const config = inject(MAT_CARD_CONFIG, {
      optional: true
    });
    this.appearance = config?.appearance || "raised";
  }
  static \u0275fac = function MatCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCard,
    selectors: [["mat-card"]],
    hostAttrs: [1, "mat-mdc-card", "mdc-card"],
    hostVars: 4,
    hostBindings: function MatCard_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined");
      }
    },
    inputs: {
      appearance: "appearance"
    },
    exportAs: ["matCard"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCard, [{
    type: Component,
    args: [{
      selector: "mat-card",
      host: {
        "class": "mat-mdc-card mdc-card",
        "[class.mat-mdc-card-outlined]": 'appearance === "outlined"',
        "[class.mdc-card--outlined]": 'appearance === "outlined"'
      },
      exportAs: "matCard",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n']
    }]
  }], () => [], {
    appearance: [{
      type: Input
    }]
  });
})();
var MatCardTitle = class _MatCardTitle {
  static \u0275fac = function MatCardTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardTitle,
    selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
    hostAttrs: [1, "mat-mdc-card-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        "class": "mat-mdc-card-title"
      }
    }]
  }], null, null);
})();
var MatCardTitleGroup = class _MatCardTitleGroup {
  static \u0275fac = function MatCardTitleGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardTitleGroup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCardTitleGroup,
    selectors: [["mat-card-title-group"]],
    hostAttrs: [1, "mat-mdc-card-title-group"],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 0,
    template: function MatCardTitleGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitleGroup, [{
    type: Component,
    args: [{
      selector: "mat-card-title-group",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-title-group"
      },
      template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var MatCardContent = class _MatCardContent {
  static \u0275fac = function MatCardContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardContent,
    selectors: [["mat-card-content"]],
    hostAttrs: [1, "mat-mdc-card-content"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardContent, [{
    type: Directive,
    args: [{
      selector: "mat-card-content",
      host: {
        "class": "mat-mdc-card-content"
      }
    }]
  }], null, null);
})();
var MatCardSubtitle = class _MatCardSubtitle {
  static \u0275fac = function MatCardSubtitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardSubtitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardSubtitle,
    selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
    hostAttrs: [1, "mat-mdc-card-subtitle"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSubtitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        "class": "mat-mdc-card-subtitle"
      }
    }]
  }], null, null);
})();
var MatCardActions = class _MatCardActions {
  // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
  // as to not conflict with the native `align` attribute.
  /** Position of the actions inside the card. */
  align = "start";
  static \u0275fac = function MatCardActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardActions)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardActions,
    selectors: [["mat-card-actions"]],
    hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
    hostVars: 2,
    hostBindings: function MatCardActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-card-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    exportAs: ["matCardActions"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardActions, [{
    type: Directive,
    args: [{
      selector: "mat-card-actions",
      exportAs: "matCardActions",
      host: {
        "class": "mat-mdc-card-actions mdc-card__actions",
        "[class.mat-mdc-card-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
var MatCardHeader = class _MatCardHeader {
  static \u0275fac = function MatCardHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCardHeader,
    selectors: [["mat-card-header"]],
    hostAttrs: [1, "mat-mdc-card-header"],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 0,
    consts: [[1, "mat-mdc-card-header-text"]],
    template: function MatCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c3);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275projection(2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardHeader, [{
    type: Component,
    args: [{
      selector: "mat-card-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-header"
      },
      template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var MatCardFooter = class _MatCardFooter {
  static \u0275fac = function MatCardFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardFooter)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardFooter,
    selectors: [["mat-card-footer"]],
    hostAttrs: [1, "mat-mdc-card-footer"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardFooter, [{
    type: Directive,
    args: [{
      selector: "mat-card-footer",
      host: {
        "class": "mat-mdc-card-footer"
      }
    }]
  }], null, null);
})();
var MatCardImage = class _MatCardImage {
  static \u0275fac = function MatCardImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardImage)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardImage,
    selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
    hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-image], [matCardImage]",
      host: {
        "class": "mat-mdc-card-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardSmImage = class _MatCardSmImage {
  static \u0275fac = function MatCardSmImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardSmImage)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardSmImage,
    selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
    hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSmImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-sm-image], [matCardImageSmall]",
      host: {
        "class": "mat-mdc-card-sm-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardMdImage = class _MatCardMdImage {
  static \u0275fac = function MatCardMdImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardMdImage)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardMdImage,
    selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
    hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardMdImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-md-image], [matCardImageMedium]",
      host: {
        "class": "mat-mdc-card-md-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardLgImage = class _MatCardLgImage {
  static \u0275fac = function MatCardLgImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardLgImage)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardLgImage,
    selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardLgImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-lg-image], [matCardImageLarge]",
      host: {
        "class": "mat-mdc-card-lg-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardXlImage = class _MatCardXlImage {
  static \u0275fac = function MatCardXlImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardXlImage)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardXlImage,
    selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardXlImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-xl-image], [matCardImageXLarge]",
      host: {
        "class": "mat-mdc-card-xl-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var MatCardAvatar = class _MatCardAvatar {
  static \u0275fac = function MatCardAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardAvatar)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCardAvatar,
    selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
    hostAttrs: [1, "mat-mdc-card-avatar"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardAvatar, [{
    type: Directive,
    args: [{
      selector: "[mat-card-avatar], [matCardAvatar]",
      host: {
        "class": "mat-mdc-card-avatar"
      }
    }]
  }], null, null);
})();
var CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
var MatCardModule = class _MatCardModule {
  static \u0275fac = function MatCardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatCardModule,
    imports: [MatCommonModule, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage],
    exports: [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, ...CARD_DIRECTIVES],
      exports: [CARD_DIRECTIVES, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/features/maker/audit-trail/audit-trail.component.ts
function AuditTrailComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function AuditTrailComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.action);
  }
}
function AuditTrailComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function AuditTrailComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.description);
  }
}
function AuditTrailComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Entity");
    \u0275\u0275elementEnd();
  }
}
function AuditTrailComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.entityName);
  }
}
function AuditTrailComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Performed");
    \u0275\u0275elementEnd();
  }
}
function AuditTrailComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "timeAgo");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275property("matTooltip", row_r4.performedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, row_r4.performedAt));
  }
}
function AuditTrailComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 20);
  }
}
function AuditTrailComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 21);
  }
}
var AuditTrailComponent = class _AuditTrailComponent {
  constructor() {
    this.auditService = inject(AuditService);
    this.logger = inject(LoggerService);
    this.rows = [];
    this.page = 0;
    this.size = 20;
    this.hasNext = false;
    this.displayedColumns = ["action", "description", "entity", "when"];
  }
  ngOnInit() {
    this.reload();
  }
  reload() {
    this.auditService.getMyActivity(this.page, this.size).subscribe({
      next: (res) => {
        if (!res.success || !res.data) {
          return;
        }
        this.rows = res.data.content;
        this.hasNext = res.data.hasNext;
      },
      error: (err) => {
        this.logger.error("AuditTrailComponent", "load failed", err);
      }
    });
  }
  prev() {
    this.page = Math.max(0, this.page - 1);
    this.reload();
  }
  next() {
    if (this.hasNext) {
      this.page += 1;
      this.reload();
    }
  }
  static {
    this.\u0275fac = function AuditTrailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditTrailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditTrailComponent, selectors: [["app-audit-trail"]], decls: 34, vars: 6, consts: [[1, "wrap"], [1, "top"], [1, "eyebrow"], ["mat-stroked-button", "", "routerLink", "/maker/dashboard"], [1, "table-wrap"], ["mat-table", "", 1, "tbl", 3, "dataSource"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "entity"], ["matColumnDef", "when"], ["mat-cell", "", 3, "matTooltip", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "pager"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "matTooltip"], ["mat-header-row", ""], ["mat-row", ""]], template: function AuditTrailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
        \u0275\u0275text(4, "Activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Audit Trail");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, "Back to Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-card")(10, "mat-card-content")(11, "div", 4)(12, "table", 5);
        \u0275\u0275elementContainerStart(13, 6);
        \u0275\u0275template(14, AuditTrailComponent_th_14_Template, 2, 0, "th", 7)(15, AuditTrailComponent_td_15_Template, 2, 1, "td", 8);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(16, 9);
        \u0275\u0275template(17, AuditTrailComponent_th_17_Template, 2, 0, "th", 7)(18, AuditTrailComponent_td_18_Template, 2, 1, "td", 8);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(19, 10);
        \u0275\u0275template(20, AuditTrailComponent_th_20_Template, 2, 0, "th", 7)(21, AuditTrailComponent_td_21_Template, 2, 1, "td", 8);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(22, 11);
        \u0275\u0275template(23, AuditTrailComponent_th_23_Template, 2, 0, "th", 7)(24, AuditTrailComponent_td_24_Template, 3, 4, "td", 12);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(25, AuditTrailComponent_tr_25_Template, 1, 0, "tr", 13)(26, AuditTrailComponent_tr_26_Template, 1, 0, "tr", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 15)(28, "button", 16);
        \u0275\u0275listener("click", function AuditTrailComponent_Template_button_click_28_listener() {
          return ctx.prev();
        });
        \u0275\u0275text(29, "Previous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 16);
        \u0275\u0275listener("click", function AuditTrailComponent_Template_button_click_32_listener() {
          return ctx.next();
        });
        \u0275\u0275text(33, "Next");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("dataSource", ctx.rows);
        \u0275\u0275advance(13);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.page === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Page ", ctx.page + 1, "");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.hasNext);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatAnchor, MatButton, MatTooltipModule, MatTooltip, RouterLink, TimeAgoPipe], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6);\n  max-width: 1500px;\n  margin: 0 auto;\n  padding: var(--space-5);\n  animation: _ngcontent-%COMP%_fadeIn 0.28s ease;\n}\n.top[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n  padding: 2rem 2.2rem;\n  border-radius: 30px;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(59, 130, 246, 0.1),\n      transparent 34%),\n    radial-gradient(\n      circle at bottom left,\n      rgba(37, 99, 235, 0.06),\n      transparent 30%),\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.96) 0%,\n      rgba(248, 250, 252, 0.98) 100%);\n  border: 1px solid rgba(148, 163, 184, 0.14);\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.85);\n}\n.top[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 240px;\n  height: 240px;\n  border-radius: 999px;\n  background: rgba(59, 130, 246, 0.1);\n  filter: blur(70px);\n  pointer-events: none;\n}\n.top[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-bottom: 0.9rem;\n  padding: 0.42rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.08);\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 4vw, 2.8rem);\n  font-weight: 900;\n  line-height: 1.05;\n  letter-spacing: -0.04em;\n  color: #0f172a;\n}\n[_nghost-%COMP%]     .mat-mdc-card {\n  overflow: hidden;\n  border-radius: 30px !important;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96) 0%,\n      rgba(248, 250, 252, 0.98) 100%);\n  border: 1px solid rgba(148, 163, 184, 0.14);\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n}\n[_nghost-%COMP%]     .mat-mdc-card-content {\n  padding: 0 !important;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n[_nghost-%COMP%]     .mat-mdc-header-row {\n  height: 60px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(248, 250, 252, 0.95),\n      rgba(241, 245, 249, 0.92));\n}\n[_nghost-%COMP%]     .mat-mdc-header-cell {\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9) !important;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n[_nghost-%COMP%]     .mat-mdc-row {\n  height: 74px;\n  transition: background 0.18s ease, transform 0.18s ease;\n}\n[_nghost-%COMP%]     .mat-mdc-row:hover {\n  background: rgba(248, 250, 252, 0.9);\n}\n[_nghost-%COMP%]     .mat-mdc-cell {\n  border-bottom: 1px solid rgba(241, 245, 249, 0.9) !important;\n  font-size: 14px;\n  color: #334155;\n}\n[_nghost-%COMP%]     .mat-column-action {\n  font-weight: 700;\n  color: #0f172a;\n}\n[_nghost-%COMP%]     .mat-column-entity {\n  color: #2563eb;\n  font-weight: 600;\n}\n[_nghost-%COMP%]     .mat-column-when {\n  white-space: nowrap;\n  color: #64748b;\n  font-size: 13px;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding: 1.2rem 1.5rem;\n  border-top: 1px solid rgba(226, 232, 240, 0.75);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.65),\n      rgba(248, 250, 252, 0.92));\n}\n.pager[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #475569;\n}\n[_nghost-%COMP%]     .mat-mdc-stroked-button, \n[_nghost-%COMP%]     .mat-mdc-unelevated-button {\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.01em;\n}\n[_nghost-%COMP%]     .mat-mdc-stroked-button {\n  border-color: rgba(148, 163, 184, 0.28) !important;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 10px;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 999px;\n  background: rgba(148, 163, 184, 0.35);\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n@media (max-width: 900px) {\n  .top[_ngcontent-%COMP%] {\n    padding: 1.8rem;\n    border-radius: 24px;\n  }\n  .pager[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 640px) {\n  .wrap[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .top[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    gap: 1.5rem;\n  }\n  .top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  [_nghost-%COMP%]     .mat-mdc-header-cell, \n   [_nghost-%COMP%]     .mat-mdc-cell {\n    padding-inline: 14px !important;\n  }\n  .pager[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=audit-trail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditTrailComponent, [{
    type: Component,
    args: [{ selector: "app-audit-trail", standalone: true, imports: [MatCardModule, MatTableModule, MatButtonModule, MatTooltipModule, RouterLink, TimeAgoPipe], template: '<div class="wrap">\r\n  <div class="top">\r\n    <div>\r\n      <div class="eyebrow">Activity</div>\r\n      <h1>Audit Trail</h1>\r\n    </div>\r\n    <a mat-stroked-button routerLink="/maker/dashboard">Back to Dashboard</a>\r\n  </div>\r\n\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div class="table-wrap">\r\n        <table mat-table [dataSource]="rows" class="tbl">\r\n          <ng-container matColumnDef="action">\r\n            <th mat-header-cell *matHeaderCellDef>Action</th>\r\n            <td mat-cell *matCellDef="let row">{{ row.action }}</td>\r\n          </ng-container>\r\n          <ng-container matColumnDef="description">\r\n            <th mat-header-cell *matHeaderCellDef>Description</th>\r\n            <td mat-cell *matCellDef="let row">{{ row.description }}</td>\r\n          </ng-container>\r\n          <ng-container matColumnDef="entity">\r\n            <th mat-header-cell *matHeaderCellDef>Entity</th>\r\n            <td mat-cell *matCellDef="let row">{{ row.entityName }}</td>\r\n          </ng-container>\r\n          <ng-container matColumnDef="when">\r\n            <th mat-header-cell *matHeaderCellDef>Performed</th>\r\n            <td mat-cell *matCellDef="let row" [matTooltip]="row.performedAt">{{ row.performedAt | timeAgo }}</td>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r\n        </table>\r\n      </div>\r\n      <div class="pager">\r\n        <button mat-stroked-button type="button" [disabled]="page === 0" (click)="prev()">Previous</button>\r\n        <span>Page {{ page + 1 }}</span>\r\n        <button mat-stroked-button type="button" [disabled]="!hasNext" (click)="next()">Next</button>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/features/maker/audit-trail/audit-trail.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6);\n  max-width: 1500px;\n  margin: 0 auto;\n  padding: var(--space-5);\n  animation: fadeIn 0.28s ease;\n}\n.top {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n  padding: 2rem 2.2rem;\n  border-radius: 30px;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(59, 130, 246, 0.1),\n      transparent 34%),\n    radial-gradient(\n      circle at bottom left,\n      rgba(37, 99, 235, 0.06),\n      transparent 30%),\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.96) 0%,\n      rgba(248, 250, 252, 0.98) 100%);\n  border: 1px solid rgba(148, 163, 184, 0.14);\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.85);\n}\n.top::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 240px;\n  height: 240px;\n  border-radius: 999px;\n  background: rgba(59, 130, 246, 0.1);\n  filter: blur(70px);\n  pointer-events: none;\n}\n.top > div {\n  position: relative;\n  z-index: 1;\n}\n.eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-bottom: 0.9rem;\n  padding: 0.42rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(37, 99, 235, 0.08);\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.top h1 {\n  margin: 0;\n  font-size: clamp(2rem, 4vw, 2.8rem);\n  font-weight: 900;\n  line-height: 1.05;\n  letter-spacing: -0.04em;\n  color: #0f172a;\n}\n:host ::ng-deep .mat-mdc-card {\n  overflow: hidden;\n  border-radius: 30px !important;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.96) 0%,\n      rgba(248, 250, 252, 0.98) 100%);\n  border: 1px solid rgba(148, 163, 184, 0.14);\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n}\n:host ::ng-deep .mat-mdc-card-content {\n  padding: 0 !important;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.tbl {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n:host ::ng-deep .mat-mdc-header-row {\n  height: 60px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(248, 250, 252, 0.95),\n      rgba(241, 245, 249, 0.92));\n}\n:host ::ng-deep .mat-mdc-header-cell {\n  border-bottom: 1px solid rgba(226, 232, 240, 0.9) !important;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n:host ::ng-deep .mat-mdc-row {\n  height: 74px;\n  transition: background 0.18s ease, transform 0.18s ease;\n}\n:host ::ng-deep .mat-mdc-row:hover {\n  background: rgba(248, 250, 252, 0.9);\n}\n:host ::ng-deep .mat-mdc-cell {\n  border-bottom: 1px solid rgba(241, 245, 249, 0.9) !important;\n  font-size: 14px;\n  color: #334155;\n}\n:host ::ng-deep .mat-column-action {\n  font-weight: 700;\n  color: #0f172a;\n}\n:host ::ng-deep .mat-column-entity {\n  color: #2563eb;\n  font-weight: 600;\n}\n:host ::ng-deep .mat-column-when {\n  white-space: nowrap;\n  color: #64748b;\n  font-size: 13px;\n}\n.pager {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding: 1.2rem 1.5rem;\n  border-top: 1px solid rgba(226, 232, 240, 0.75);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.65),\n      rgba(248, 250, 252, 0.92));\n}\n.pager span {\n  font-size: 13px;\n  font-weight: 700;\n  color: #475569;\n}\n:host ::ng-deep .mat-mdc-stroked-button,\n:host ::ng-deep .mat-mdc-unelevated-button {\n  border-radius: 14px !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.01em;\n}\n:host ::ng-deep .mat-mdc-stroked-button {\n  border-color: rgba(148, 163, 184, 0.28) !important;\n}\n.table-wrap::-webkit-scrollbar {\n  height: 10px;\n}\n.table-wrap::-webkit-scrollbar-thumb {\n  border-radius: 999px;\n  background: rgba(148, 163, 184, 0.35);\n}\n.table-wrap::-webkit-scrollbar-track {\n  background: transparent;\n}\n@media (max-width: 900px) {\n  .top {\n    padding: 1.8rem;\n    border-radius: 24px;\n  }\n  .pager {\n    justify-content: center;\n  }\n}\n@media (max-width: 640px) {\n  .wrap {\n    padding: 12px;\n  }\n  .top {\n    padding: 1.5rem;\n    gap: 1.5rem;\n  }\n  .top h1 {\n    font-size: 1.8rem;\n  }\n  :host ::ng-deep .mat-mdc-header-cell,\n  :host ::ng-deep .mat-mdc-cell {\n    padding-inline: 14px !important;\n  }\n  .pager {\n    flex-direction: column;\n  }\n  .pager button {\n    width: 100%;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=audit-trail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditTrailComponent, { className: "AuditTrailComponent", filePath: "src/app/features/maker/audit-trail/audit-trail.component.ts", lineNumber: 20 });
})();
export {
  AuditTrailComponent
};
//# sourceMappingURL=chunk-7J64GTPB.js.map
