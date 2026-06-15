import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule
} from "./chunk-5RTMJKSC.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SKWF3SJ6.js";

// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
function ConfirmDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r0.data.iconColor || "rgba(59,130,246,0.12)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.icon, " ");
  }
}
function ConfirmDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.infoPanel, " ");
  }
}
function ConfirmDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8);
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
function ConfirmDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 9);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 13, vars: 6, consts: [[1, "wrap"], [1, "bg-glow"], [1, "icon-wrap", 3, "background"], [1, "title"], [1, "body"], [1, "info-panel"], [1, "actions"], ["type", "button", "mat-stroked-button", "", "mat-dialog-close", "", 1, "cancel-btn"], ["type", "button", "mat-flat-button", "", 1, "success-btn", 3, "mat-dialog-close"], ["type", "button", "mat-flat-button", "", 1, "confirm-btn", 3, "color", "mat-dialog-close"], [1, "icon-wrap"], [1, "icon"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275template(2, ConfirmDialogComponent_Conditional_2_Template, 3, 3, "div", 2);
        \u0275\u0275elementStart(3, "h2", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ConfirmDialogComponent_Conditional_7_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ConfirmDialogComponent_Conditional_11_Template, 2, 2, "button", 8)(12, ConfirmDialogComponent_Conditional_12_Template, 2, 3, "button", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.icon ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.data.title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.data.body, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.infoPanel ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.data.cancelLabel || "Cancel", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.confirmColor === "success" ? 11 : 12);
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatButtonModule, MatButton], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.wrap[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 34px 30px 28px;\n  text-align: center;\n  border-radius: 28px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(18px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.1), 0 2px 10px rgba(15, 23, 42, 0.06);\n}\n.bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(59, 130, 246, 0.08),\n      transparent 35%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(14, 165, 233, 0.06),\n      transparent 35%);\n  pointer-events: none;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);\n  position: relative;\n  z-index: 1;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 1;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n  position: relative;\n  z-index: 1;\n}\n.body[_ngcontent-%COMP%] {\n  margin: 0 auto 22px;\n  max-width: 420px;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.65;\n  color: #64748b;\n  position: relative;\n  z-index: 1;\n}\n.info-panel[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding: 14px 16px;\n  border-radius: 18px;\n  background: rgba(14, 165, 233, 0.08);\n  border: 1px solid rgba(14, 165, 233, 0.12);\n  color: #0f766e;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.6;\n  text-align: left;\n  white-space: pre-line;\n  backdrop-filter: blur(12px);\n  position: relative;\n  z-index: 1;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  position: relative;\n  z-index: 1;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n  height: 46px;\n  border-radius: 14px !important;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    filter 0.22s ease;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7) !important;\n  border: 1px solid rgba(148, 163, 184, 0.18) !important;\n  color: #475569 !important;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04) !important;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(59, 130, 246, 0.22) !important;\n  color: #2563eb !important;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9) !important;\n  color: white !important;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.26) !important;\n}\n.confirm-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 34px rgba(37, 99, 235, 0.34) !important;\n}\n.success-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a) !important;\n  color: #fff !important;\n  box-shadow: 0 10px 24px rgba(22, 163, 74, 0.28) !important;\n}\n.success-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 34px rgba(22, 163, 74, 0.36) !important;\n}\n@media (max-width: 640px) {\n  .wrap[_ngcontent-%COMP%] {\n    padding: 28px 22px 24px;\n    border-radius: 24px;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", standalone: true, imports: [MatDialogModule, MatButtonModule], template: `
    <div class="wrap">

      <!-- Glow -->
      <div class="bg-glow"></div>

      <!-- Icon -->
      @if (data.icon) {
        <div
          class="icon-wrap"
          [style.background]="data.iconColor || 'rgba(59,130,246,0.12)'"
        >
          <span class="icon">
            {{ data.icon }}
          </span>
        </div>
      }

      <!-- Title -->
      <h2 class="title">
        {{ data.title }}
      </h2>

      <!-- Body -->
      <p class="body">
        {{ data.body }}
      </p>

      <!-- Info Panel -->
      @if (data.infoPanel) {
        <div class="info-panel">
          {{ data.infoPanel }}
        </div>
      }

      <!-- Actions -->
      <div class="actions">

        <button
          type="button"
          mat-stroked-button
          class="cancel-btn"
          mat-dialog-close
        >
          {{ data.cancelLabel || 'Cancel' }}
        </button>

        @if (data.confirmColor === 'success') {

          <button
            type="button"
            mat-flat-button
            class="success-btn"
            [mat-dialog-close]="true"
          >
            {{ data.confirmLabel || 'Confirm' }}
          </button>

        } @else {

          <button
            type="button"
            mat-flat-button
            class="confirm-btn"
            [color]="matColor()"
            [mat-dialog-close]="true"
          >
            {{ data.confirmLabel || 'Confirm' }}
          </button>

        }

      </div>

    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;83102a8a284abe79eee8a41f933056ec0629bf948292d6506ff639992d729bc7;D:/Mustafa/CMS-17.4-CLEAN/frontend/src/app/shared/components/confirm-dialog/confirm-dialog.component.ts */\n:host {\n  display: block;\n}\n.wrap {\n  position: relative;\n  padding: 34px 30px 28px;\n  text-align: center;\n  border-radius: 28px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(18px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.1), 0 2px 10px rgba(15, 23, 42, 0.06);\n}\n.bg-glow {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(59, 130, 246, 0.08),\n      transparent 35%),\n    radial-gradient(\n      circle at bottom right,\n      rgba(14, 165, 233, 0.06),\n      transparent 35%);\n  pointer-events: none;\n}\n.icon-wrap {\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);\n  position: relative;\n  z-index: 1;\n}\n.icon {\n  font-size: 30px;\n  line-height: 1;\n}\n.title {\n  margin: 0 0 10px;\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n  position: relative;\n  z-index: 1;\n}\n.body {\n  margin: 0 auto 22px;\n  max-width: 420px;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.65;\n  color: #64748b;\n  position: relative;\n  z-index: 1;\n}\n.info-panel {\n  margin-bottom: 24px;\n  padding: 14px 16px;\n  border-radius: 18px;\n  background: rgba(14, 165, 233, 0.08);\n  border: 1px solid rgba(14, 165, 233, 0.12);\n  color: #0f766e;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.6;\n  text-align: left;\n  white-space: pre-line;\n  backdrop-filter: blur(12px);\n  position: relative;\n  z-index: 1;\n}\n.actions {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  position: relative;\n  z-index: 1;\n}\n.actions button {\n  min-width: 120px;\n  height: 46px;\n  border-radius: 14px !important;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    filter 0.22s ease;\n}\n.actions button:hover {\n  transform: translateY(-2px);\n}\n.cancel-btn {\n  background: rgba(255, 255, 255, 0.7) !important;\n  border: 1px solid rgba(148, 163, 184, 0.18) !important;\n  color: #475569 !important;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04) !important;\n}\n.cancel-btn:hover {\n  border-color: rgba(59, 130, 246, 0.22) !important;\n  color: #2563eb !important;\n}\n.confirm-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #0ea5e9) !important;\n  color: white !important;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.26) !important;\n}\n.confirm-btn:hover {\n  box-shadow: 0 16px 34px rgba(37, 99, 235, 0.34) !important;\n}\n.success-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a) !important;\n  color: #fff !important;\n  box-shadow: 0 10px 24px rgba(22, 163, 74, 0.28) !important;\n}\n.success-btn:hover {\n  box-shadow: 0 16px 34px rgba(22, 163, 74, 0.36) !important;\n}\n@media (max-width: 640px) {\n  .wrap {\n    padding: 28px 22px 24px;\n    border-radius: 24px;\n  }\n  .title {\n    font-size: 21px;\n  }\n  .actions {\n    flex-direction: column;\n  }\n  .actions button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/components/confirm-dialog/confirm-dialog.component.ts", lineNumber: 519 });
})();

export {
  ConfirmDialogComponent
};
//# sourceMappingURL=chunk-GQSJPUX7.js.map
