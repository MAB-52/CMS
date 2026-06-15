import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5RTMJKSC.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-XINNQDUF.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-VXKP42CX.js";
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
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SKWF3SJ6.js";

// src/app/shared/components/review-action-dialog/review-action-dialog.component.ts
function ReviewActionDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-color", ctx_r0.data.confirmColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data.icon);
  }
}
function ReviewActionDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Please enter at least ", ctx_r0.data.minLength, " characters.");
  }
}
var ReviewActionDialogComponent = class _ReviewActionDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.ref = inject(MatDialogRef);
    this.text = new FormControl("", { nonNullable: true });
    this.submitted = false;
    this.text.setValidators([
      Validators.required,
      Validators.minLength(this.data.minLength)
    ]);
  }
  submit() {
    this.submitted = true;
    this.text.markAsTouched();
    if (this.text.invalid)
      return;
    this.ref.close(this.text.value.trim());
  }
  static {
    this.\u0275fac = function ReviewActionDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewActionDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewActionDialogComponent, selectors: [["app-review-action-dialog"]], decls: 20, vars: 10, consts: [[1, "dlg"], [1, "head"], [1, "icon-wrap"], [1, "ttl"], [1, "divider"], [1, "content"], ["appearance", "outline", "floatLabel", "always", 1, "full"], ["matInput", "", "rows", "4", 3, "formControl", "placeholder"], ["align", "end"], [1, "err"], [1, "actions"], ["type", "button", "mat-button", "", "mat-dialog-close", "", 1, "cancel-btn"], ["type", "button", "mat-flat-button", "", 1, "confirm-btn", 3, "click"], [1, "ico"]], template: function ReviewActionDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ReviewActionDialogComponent_Conditional_2_Template, 3, 2, "div", 2);
        \u0275\u0275elementStart(3, "div")(4, "h2", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "div", 4);
        \u0275\u0275elementStart(7, "mat-dialog-content", 5)(8, "mat-form-field", 6)(9, "mat-label");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "textarea", 7);
        \u0275\u0275elementStart(12, "mat-hint", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, ReviewActionDialogComponent_Conditional_14_Template, 2, 1, "p", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-dialog-actions", 10)(16, "button", 11);
        \u0275\u0275text(17, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function ReviewActionDialogComponent_Template_button_click_18_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-color", ctx.data.confirmColor);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.icon ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.data.title);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.data.textareaLabel);
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.text)("placeholder", ctx.data.placeholder);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2(" ", (ctx.text.value || "").length, " / min ", ctx.data.minLength, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.text.invalid ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.data.confirmLabel, " ");
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatInputModule, MatInput, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.dlg[_ngcontent-%COMP%] {\n  width: 560px;\n  max-width: 100%;\n  border-radius: 20px;\n  background: #ffffff;\n  overflow: hidden;\n  box-shadow: 0 4px 6px rgba(15, 23, 42, 0.04), 0 24px 56px rgba(15, 23, 42, 0.14);\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 24px 24px 20px;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icon-wrap[data-color=warn][_ngcontent-%COMP%] {\n  background: #fef2f2;\n}\n.icon-wrap[data-color=success][_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.icon-wrap[data-color=warning][_ngcontent-%COMP%] {\n  background: #fffbeb;\n}\n.icon-wrap[data-color=primary][_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.icon-wrap[data-color=accent][_ngcontent-%COMP%] {\n  background: #f5f3ff;\n}\n.ico[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.ttl[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 19px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n  line-height: 1.25;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #f1f5f9;\n  margin: 0 24px;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 20px 24px 4px !important;\n  overflow: visible !important;\n  max-height: unset !important;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .full .mat-mdc-text-field-wrapper {\n  border-radius: 12px !important;\n  background: #f8fafc !important;\n  transition: background 0.15s ease, box-shadow 0.15s ease;\n}\n  .full .mdc-notched-outline__leading, \n  .full .mdc-notched-outline__notch, \n  .full .mdc-notched-outline__trailing {\n  border-color: #e2e8f0 !important;\n  transition: border-color 0.15s ease;\n}\n  .full .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n  .full:hover .mdc-notched-outline__leading, \n  .full:hover .mdc-notched-outline__notch, \n  .full:hover .mdc-notched-outline__trailing {\n  border-color: #cbd5e1 !important;\n}\n  .full.mat-focused .mdc-notched-outline__leading, \n  .full.mat-focused .mdc-notched-outline__notch, \n  .full.mat-focused .mdc-notched-outline__trailing {\n  border-color: #3b82f6 !important;\n  border-width: 1.5px !important;\n}\n  .full.mat-focused .mat-mdc-text-field-wrapper {\n  background: #ffffff !important;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n  .full .mat-mdc-floating-label {\n  color: #64748b !important;\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n  .full.mat-focused .mat-mdc-floating-label {\n  color: #3b82f6 !important;\n}\n  .full textarea.mat-mdc-input-element {\n  color: #0f172a !important;\n  font-size: 14px !important;\n  font-weight: 400;\n  line-height: 1.65 !important;\n  resize: none !important;\n  min-height: 96px !important;\n}\n  .full textarea.mat-mdc-input-element::placeholder {\n  color: #94a3b8 !important;\n}\n  .full .mat-mdc-form-field-infix {\n  padding-top: 20px !important;\n  padding-bottom: 10px !important;\n}\n  .full .mat-mdc-form-field-hint {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n}\n  .full .mat-mdc-form-field-subscript-wrapper {\n  margin-top: 6px;\n  padding-inline: 2px;\n}\n.err[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #ef4444;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.err[_ngcontent-%COMP%]::before {\n  content: "\\26a0";\n  font-size: 11px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px 20px !important;\n  min-height: unset !important;\n  margin-top: 0 !important;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 20px !important;\n  border-radius: 10px !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  color: #64748b !important;\n  letter-spacing: 0;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9 !important;\n  color: #334155 !important;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 22px !important;\n  border-radius: 10px !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0;\n  color: #ffffff !important;\n  transition: filter 0.15s ease, transform 0.15s ease;\n}\n.confirm-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.07);\n}\n.confirm-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.dlg[data-color=warn][_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  background: #ef4444 !important;\n}\n.dlg[data-color=success][_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  background: #16a34a !important;\n}\n.dlg[data-color=warning][_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  background: #d97706 !important;\n}\n.dlg[data-color=primary][_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  background: #2563eb !important;\n}\n.dlg[data-color=accent][_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  background: #7c3aed !important;\n}\n@media (max-width: 560px) {\n  .dlg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head[_ngcontent-%COMP%] {\n    padding: 20px 18px 16px;\n  }\n  .divider[_ngcontent-%COMP%] {\n    margin: 0 18px;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding: 16px 18px 4px !important;\n  }\n  .actions[_ngcontent-%COMP%] {\n    padding: 14px 18px 18px !important;\n    flex-direction: column-reverse;\n    gap: 8px;\n  }\n  .cancel-btn[_ngcontent-%COMP%], \n   .confirm-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 44px;\n  }\n  .ttl[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=review-action-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewActionDialogComponent, [{
    type: Component,
    args: [{ selector: "app-review-action-dialog", standalone: true, imports: [
      MatDialogModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule
    ], template: `
    <div class="dlg" [attr.data-color]="data.confirmColor">

      <!-- Header -->
      <div class="head">
        @if (data.icon) {
          <div class="icon-wrap" [attr.data-color]="data.confirmColor">
            <span class="ico">{{ data.icon }}</span>
          </div>
        }
        <div>
          <h2 class="ttl">{{ data.title }}</h2>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Content -->
      <mat-dialog-content class="content">
        <mat-form-field appearance="outline" floatLabel="always" class="full">
          <mat-label>{{ data.textareaLabel }}</mat-label>
          <textarea
            matInput
            rows="4"
            [formControl]="text"
            [placeholder]="data.placeholder"
          ></textarea>
          <mat-hint align="end">
            {{ (text.value || '').length }} / min {{ data.minLength }}
          </mat-hint>
        </mat-form-field>

        @if (submitted && text.invalid) {
          <p class="err">Please enter at least {{ data.minLength }} characters.</p>
        }
      </mat-dialog-content>

      <!-- Actions -->
      <mat-dialog-actions class="actions">
        <button type="button" mat-button class="cancel-btn" mat-dialog-close>
          Cancel
        </button>
        <button type="button" mat-flat-button class="confirm-btn" (click)="submit()">
          {{ data.confirmLabel }}
        </button>
      </mat-dialog-actions>

    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;9a6ad4bec16d5964223b072f6b9ba05998a6ef0a6820f742f0346f824fc4bf34;D:/Mustafa/CMS-17.4-CLEAN/frontend/src/app/shared/components/review-action-dialog/review-action-dialog.component.ts */\n:host {\n  display: block;\n}\n.dlg {\n  width: 560px;\n  max-width: 100%;\n  border-radius: 20px;\n  background: #ffffff;\n  overflow: hidden;\n  box-shadow: 0 4px 6px rgba(15, 23, 42, 0.04), 0 24px 56px rgba(15, 23, 42, 0.14);\n}\n.head {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 24px 24px 20px;\n}\n.icon-wrap {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icon-wrap[data-color=warn] {\n  background: #fef2f2;\n}\n.icon-wrap[data-color=success] {\n  background: #f0fdf4;\n}\n.icon-wrap[data-color=warning] {\n  background: #fffbeb;\n}\n.icon-wrap[data-color=primary] {\n  background: #eff6ff;\n}\n.icon-wrap[data-color=accent] {\n  background: #f5f3ff;\n}\n.ico {\n  font-size: 22px;\n  line-height: 1;\n}\n.ttl {\n  margin: 0;\n  font-size: 19px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n  line-height: 1.25;\n}\n.divider {\n  height: 1px;\n  background: #f1f5f9;\n  margin: 0 24px;\n}\n.content {\n  padding: 20px 24px 4px !important;\n  overflow: visible !important;\n  max-height: unset !important;\n}\n.full {\n  width: 100%;\n}\n::ng-deep .full .mat-mdc-text-field-wrapper {\n  border-radius: 12px !important;\n  background: #f8fafc !important;\n  transition: background 0.15s ease, box-shadow 0.15s ease;\n}\n::ng-deep .full .mdc-notched-outline__leading,\n::ng-deep .full .mdc-notched-outline__notch,\n::ng-deep .full .mdc-notched-outline__trailing {\n  border-color: #e2e8f0 !important;\n  transition: border-color 0.15s ease;\n}\n::ng-deep .full .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n::ng-deep .full:hover .mdc-notched-outline__leading,\n::ng-deep .full:hover .mdc-notched-outline__notch,\n::ng-deep .full:hover .mdc-notched-outline__trailing {\n  border-color: #cbd5e1 !important;\n}\n::ng-deep .full.mat-focused .mdc-notched-outline__leading,\n::ng-deep .full.mat-focused .mdc-notched-outline__notch,\n::ng-deep .full.mat-focused .mdc-notched-outline__trailing {\n  border-color: #3b82f6 !important;\n  border-width: 1.5px !important;\n}\n::ng-deep .full.mat-focused .mat-mdc-text-field-wrapper {\n  background: #ffffff !important;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n::ng-deep .full .mat-mdc-floating-label {\n  color: #64748b !important;\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n::ng-deep .full.mat-focused .mat-mdc-floating-label {\n  color: #3b82f6 !important;\n}\n::ng-deep .full textarea.mat-mdc-input-element {\n  color: #0f172a !important;\n  font-size: 14px !important;\n  font-weight: 400;\n  line-height: 1.65 !important;\n  resize: none !important;\n  min-height: 96px !important;\n}\n::ng-deep .full textarea.mat-mdc-input-element::placeholder {\n  color: #94a3b8 !important;\n}\n::ng-deep .full .mat-mdc-form-field-infix {\n  padding-top: 20px !important;\n  padding-bottom: 10px !important;\n}\n::ng-deep .full .mat-mdc-form-field-hint {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n}\n::ng-deep .full .mat-mdc-form-field-subscript-wrapper {\n  margin-top: 6px;\n  padding-inline: 2px;\n}\n.err {\n  margin: 6px 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #ef4444;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.err::before {\n  content: "\\26a0";\n  font-size: 11px;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px 20px !important;\n  min-height: unset !important;\n  margin-top: 0 !important;\n}\n.cancel-btn {\n  height: 40px;\n  padding: 0 20px !important;\n  border-radius: 10px !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  color: #64748b !important;\n  letter-spacing: 0;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.cancel-btn:hover {\n  background: #f1f5f9 !important;\n  color: #334155 !important;\n}\n.confirm-btn {\n  height: 40px;\n  padding: 0 22px !important;\n  border-radius: 10px !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0;\n  color: #ffffff !important;\n  transition: filter 0.15s ease, transform 0.15s ease;\n}\n.confirm-btn:hover {\n  filter: brightness(1.07);\n}\n.confirm-btn:active {\n  transform: scale(0.98);\n}\n.dlg[data-color=warn] .confirm-btn {\n  background: #ef4444 !important;\n}\n.dlg[data-color=success] .confirm-btn {\n  background: #16a34a !important;\n}\n.dlg[data-color=warning] .confirm-btn {\n  background: #d97706 !important;\n}\n.dlg[data-color=primary] .confirm-btn {\n  background: #2563eb !important;\n}\n.dlg[data-color=accent] .confirm-btn {\n  background: #7c3aed !important;\n}\n@media (max-width: 560px) {\n  .dlg {\n    width: 100%;\n  }\n  .head {\n    padding: 20px 18px 16px;\n  }\n  .divider {\n    margin: 0 18px;\n  }\n  .content {\n    padding: 16px 18px 4px !important;\n  }\n  .actions {\n    padding: 14px 18px 18px !important;\n    flex-direction: column-reverse;\n    gap: 8px;\n  }\n  .cancel-btn,\n  .confirm-btn {\n    width: 100%;\n    height: 44px;\n  }\n  .ttl {\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=review-action-dialog.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewActionDialogComponent, { className: "ReviewActionDialogComponent", filePath: "src/app/shared/components/review-action-dialog/review-action-dialog.component.ts", lineNumber: 322 });
})();

export {
  ReviewActionDialogComponent
};
//# sourceMappingURL=chunk-4RBO2DFQ.js.map
