import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule
} from "./chunk-UE7UOPB6.js";
import {
  Component,
  MatButton,
  MatButtonModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QBB4LLCG.js";

// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
function ConfirmDialogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r0.data.iconColor || "rgba(99,102,241,0.12)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data.icon);
  }
}
function ConfirmDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("mat-dialog-close", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.confirmLabel || "Confirm", " ");
  }
}
function ConfirmDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("color", ctx_r0.matColor())("mat-dialog-close", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.confirmLabel || "Confirm", " ");
  }
}
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
  }
  matColor() {
    const c = this.data.confirmColor;
    if (c === "warn") {
      return "warn";
    }
    if (c === "accent") {
      return "accent";
    }
    return "primary";
  }
  static {
    this.\u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 11, vars: 5, consts: [[1, "wrap"], [1, "icon-wrap", 3, "background"], [1, "title"], [1, "body"], [1, "actions"], ["type", "button", "mat-stroked-button", "", "mat-dialog-close", "", 1, "ciq-btn-secondary"], ["type", "button", "mat-flat-button", "", 1, "ciq-btn-success", 3, "mat-dialog-close"], ["type", "button", "mat-flat-button", "", 3, "color", "mat-dialog-close"], [1, "icon-wrap"], [1, "icon"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ConfirmDialogComponent_Conditional_1_Template, 3, 3, "div", 1);
        \u0275\u0275elementStart(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ConfirmDialogComponent_Conditional_9_Template, 2, 2, "button", 6)(10, ConfirmDialogComponent_Conditional_10_Template, 2, 3, "button", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.icon ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data.body);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.data.cancelLabel || "Cancel", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.confirmColor === "success" ? 9 : 10);
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatButtonModule, MatButton], styles: ["\n\n.wrap[_ngcontent-%COMP%] {\n  padding: 8px 8px 0;\n  text-align: center;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 18px;\n  font-weight: 700;\n}\n.body[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.5;\n  max-height: 4.5em;\n  overflow: auto;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", standalone: true, imports: [MatDialogModule, MatButtonModule], template: `
    <div class="wrap">
      @if (data.icon) {
        <div class="icon-wrap" [style.background]="data.iconColor || 'rgba(99,102,241,0.12)'">
          <span class="icon">{{ data.icon }}</span>
        </div>
      }
      <h2 class="title">{{ data.title }}</h2>
      <p class="body">{{ data.body }}</p>
      <div class="actions">
        <button type="button" mat-stroked-button class="ciq-btn-secondary" mat-dialog-close>
          {{ data.cancelLabel || 'Cancel' }}
        </button>
        @if (data.confirmColor === 'success') {
          <button type="button" mat-flat-button class="ciq-btn-success" [mat-dialog-close]="true">
            {{ data.confirmLabel || 'Confirm' }}
          </button>
        } @else {
          <button type="button" mat-flat-button [color]="matColor()" [mat-dialog-close]="true">
            {{ data.confirmLabel || 'Confirm' }}
          </button>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;63813169cff4ea293836c7bdb8f10767264b19bf729d5930991542bdb754a068;D:/CMSV1/frontend/src/app/shared/components/confirm-dialog/confirm-dialog.component.ts */\n.wrap {\n  padding: 8px 8px 0;\n  text-align: center;\n}\n.icon-wrap {\n  width: 48px;\n  height: 48px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n}\n.icon {\n  font-size: 26px;\n}\n.title {\n  margin: 0 0 8px;\n  font-size: 18px;\n  font-weight: 700;\n}\n.body {\n  margin: 0 0 20px;\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.5;\n  max-height: 4.5em;\n  overflow: auto;\n}\n.actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/components/confirm-dialog/confirm-dialog.component.ts", lineNumber: 85 });
})();

export {
  ConfirmDialogComponent
};
//# sourceMappingURL=chunk-GJSWBWWB.js.map
