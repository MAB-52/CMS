import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-UE7UOPB6.js";
import {
  DomSanitizer
} from "./chunk-W4T3EBZ5.js";
import {
  NotificationService
} from "./chunk-4RAWTRTP.js";
import {
  Component,
  HttpClient,
  Injectable,
  LoggerService,
  MatButton,
  MatButtonModule,
  catchError,
  environment,
  inject,
  map,
  setClassMetadata,
  shareReplay,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext
} from "./chunk-QBB4LLCG.js";

// src/app/core/services/merge-tag.service.ts
var MergeTagService = class _MergeTagService {
  constructor() {
    this.http = inject(HttpClient);
    this.logger = inject(LoggerService);
    this.notify = inject(NotificationService);
    this.cache$ = null;
  }
  getMergeTags() {
    if (!this.cache$) {
      this.logger.info("MergeTagService", "Loading merge tags from API");
      const shared$ = this.http.get(`${environment.apiUrl}/merge-tags`).pipe(map((res) => {
        if (!res.success || !res.data) {
          throw new Error(res.message || "Failed to load merge tags");
        }
        return res.data;
      }), tap(() => this.logger.info("MergeTagService", "Merge tags loaded into cache")), shareReplay(1));
      this.cache$ = shared$.pipe(catchError((err) => {
        this.logger.error("MergeTagService", "getMergeTags failed", err);
        this.notify.error("Merge tags", "Could not load merge tags.");
        this.cache$ = null;
        return throwError(() => err);
      }));
    } else {
      this.logger.debug("MergeTagService", "Returning merge tags from cache");
    }
    return this.cache$;
  }
  clearCache() {
    this.cache$ = null;
  }
  static {
    this.\u0275fac = function MergeTagService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MergeTagService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MergeTagService, factory: _MergeTagService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MergeTagService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/consent-preview-dialog/consent-preview-dialog.component.ts
var ConsentPreviewDialogComponent = class _ConsentPreviewDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.sanitizer = inject(DomSanitizer);
  }
  get sanitized() {
    let html = this.data.html || "";
    for (const t of this.data.mergeTags || []) {
      const key = t.tagKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(key, "g");
      const span = `<span class="preview-tag">${this.escape(t.sampleValue || "")}</span>`;
      html = html.replace(re, span);
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  escape(s) {
    return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  }
  static {
    this.\u0275fac = function ConsentPreviewDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentPreviewDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsentPreviewDialogComponent, selectors: [["app-consent-preview-dialog"]], decls: 13, vars: 1, consts: [[1, "dlg"], [1, "dlg-head"], ["mat-dialog-title", "", 1, "dlg-title"], ["type", "button", "mat-dialog-close", "", "aria-label", "Close", 1, "dlg-x"], [1, "dlg-info"], [1, "dlg-preview", 3, "innerHTML"], ["align", "center"], ["mat-flat-button", "", "mat-dialog-close", "", 1, "ciq-btn-secondary"]], template: function ConsentPreviewDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "\u{1F441} Message Preview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275text(5, "\xD7");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-dialog-content")(7, "div", 4);
        \u0275\u0275text(8, " \u2139\uFE0F Dynamic fields shown with sample values for preview only. Actual values will be used in production. ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-dialog-actions", 6)(11, "button", 7);
        \u0275\u0275text(12, "Close");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("innerHTML", ctx.sanitized, \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton], styles: ["\n\n.dlg[_ngcontent-%COMP%] {\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.dlg-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 8px;\n}\n.dlg-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n}\n.dlg-x[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 22px;\n  cursor: pointer;\n  color: #64748b;\n}\n.dlg-info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #1e40af;\n  margin-bottom: 16px;\n}\n.dlg-preview[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 32px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 15px;\n  line-height: 1.8;\n  overflow: auto;\n  max-height: 60vh;\n}\n[_nghost-%COMP%]     .preview-tag {\n  background: #e0e7ff;\n  color: #4338ca;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 13px;\n}\n/*# sourceMappingURL=consent-preview-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentPreviewDialogComponent, [{
    type: Component,
    args: [{ selector: "app-consent-preview-dialog", standalone: true, imports: [MatDialogModule, MatButtonModule], template: `
    <div class="dlg">
      <div class="dlg-head">
        <h2 mat-dialog-title class="dlg-title">\u{1F441} Message Preview</h2>
        <button type="button" class="dlg-x" mat-dialog-close aria-label="Close">\xD7</button>
      </div>
      <mat-dialog-content>
        <div class="dlg-info">
          \u2139\uFE0F Dynamic fields shown with sample values for preview only. Actual values will be used in production.
        </div>
        <div class="dlg-preview" [innerHTML]="sanitized"></div>
      </mat-dialog-content>
      <mat-dialog-actions align="center">
        <button mat-flat-button class="ciq-btn-secondary" mat-dialog-close>Close</button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;ed1f2b179fdf030ed47c8b1236372ab0bdf7e7aa8f1f1f8db54ed16bd97b090c;D:/CMSV1/frontend/src/app/shared/components/consent-preview-dialog/consent-preview-dialog.component.ts */\n.dlg {\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.dlg-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 8px;\n}\n.dlg-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n}\n.dlg-x {\n  border: none;\n  background: transparent;\n  font-size: 22px;\n  cursor: pointer;\n  color: #64748b;\n}\n.dlg-info {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #1e40af;\n  margin-bottom: 16px;\n}\n.dlg-preview {\n  background: #fff;\n  padding: 32px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 15px;\n  line-height: 1.8;\n  overflow: auto;\n  max-height: 60vh;\n}\n:host ::ng-deep .preview-tag {\n  background: #e0e7ff;\n  color: #4338ca;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 13px;\n}\n/*# sourceMappingURL=consent-preview-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsentPreviewDialogComponent, { className: "ConsentPreviewDialogComponent", filePath: "src/app/shared/components/consent-preview-dialog/consent-preview-dialog.component.ts", lineNumber: 88 });
})();

export {
  MergeTagService,
  ConsentPreviewDialogComponent
};
//# sourceMappingURL=chunk-YWOCPWDM.js.map
