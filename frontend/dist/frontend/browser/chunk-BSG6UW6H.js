import {
  AuditService
} from "./chunk-QVQJAN6Y.js";
import {
  TimeAgoPipe
} from "./chunk-4AVASXE7.js";
import {
  RouterLink
} from "./chunk-W4T3EBZ5.js";
import "./chunk-4RAWTRTP.js";
import {
  Component,
  MatAnchor,
  MatButton,
  MatButtonModule,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// src/app/features/checker/review-history/review-history.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReviewHistoryComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No review actions recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function ReviewHistoryComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "timeAgo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r2.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r2.entityName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, e_r2.performedAt));
  }
}
function ReviewHistoryComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ReviewHistoryComponent_Conditional_9_For_2_Template, 10, 6, "div", 6, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "button", 8);
    \u0275\u0275listener("click", function ReviewHistoryComponent_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(5, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 8);
    \u0275\u0275listener("click", function ReviewHistoryComponent_Conditional_9_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(9, "Next");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.rows());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.page === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Page ", ctx_r2.page + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.hasNext);
  }
}
var ReviewHistoryComponent = class _ReviewHistoryComponent {
  constructor() {
    this.audit = inject(AuditService);
    this.rows = signal([]);
    this.page = 0;
    this.size = 25;
    this.hasNext = false;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.audit.getMyActivity(this.page, this.size).subscribe({
      next: (res) => {
        if (res.success && res.data?.content) {
          const filtered = res.data.content.filter((e) => e.action === "CONSENT_APPROVED" || e.action === "CONSENT_REJECTED" || e.action === "CONSENT_REVISION_REQUESTED" || e.action === "CONSENT_PUBLISHED");
          this.rows.set(filtered);
          this.hasNext = res.data.hasNext;
        }
      }
    });
  }
  nextPage() {
    if (this.hasNext) {
      this.page++;
      this.load();
    }
  }
  prevPage() {
    this.page = Math.max(0, this.page - 1);
    this.load();
  }
  static {
    this.\u0275fac = function ReviewHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewHistoryComponent, selectors: [["app-review-history"]], decls: 10, vars: 1, consts: [[1, "page"], [1, "head"], ["mat-stroked-button", "", "routerLink", "/checker/dashboard"], [1, "sub"], [1, "empty"], [1, "list"], [1, "row"], [1, "pager"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "act"], [1, "desc"], [1, "ent"], [1, "when"]], template: function ReviewHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Review History");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 2);
        \u0275\u0275text(5, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "Actions you performed as Checker (from audit log).");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, ReviewHistoryComponent_Conditional_8_Template, 2, 0, "div", 4)(9, ReviewHistoryComponent_Conditional_9_Template, 10, 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(!ctx.rows().length ? 8 : 9);
      }
    }, dependencies: [RouterLink, MatButtonModule, MatAnchor, MatButton, TimeAgoPipe], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n}\n.sub[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n}\n.empty[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 32px;\n  text-align: center;\n  color: #94a3b8;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.row[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 14px;\n}\n.act[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 13px;\n}\n.desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  margin-top: 4px;\n}\n.ent[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6366f1;\n  margin-top: 4px;\n}\n.when[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 6px;\n}\n.pager[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=review-history.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-review-history", standalone: true, imports: [RouterLink, MatButtonModule, TimeAgoPipe], template: '<div class="page">\r\n  <div class="head">\r\n    <h1>Review History</h1>\r\n    <a mat-stroked-button routerLink="/checker/dashboard">Dashboard</a>\r\n  </div>\r\n  <p class="sub">Actions you performed as Checker (from audit log).</p>\r\n\r\n  @if (!rows().length) {\r\n    <div class="empty">No review actions recorded yet.</div>\r\n  } @else {\r\n    <div class="list">\r\n      @for (e of rows(); track e.id) {\r\n        <div class="row">\r\n          <div class="act">{{ e.action }}</div>\r\n          <div class="desc">{{ e.description }}</div>\r\n          <div class="ent">{{ e.entityName }}</div>\r\n          <div class="when">{{ e.performedAt | timeAgo }}</div>\r\n        </div>\r\n      }\r\n    </div>\r\n    <div class="pager">\r\n      <button mat-stroked-button type="button" [disabled]="page === 0" (click)="prevPage()">Previous</button>\r\n      <span>Page {{ page + 1 }}</span>\r\n      <button mat-stroked-button type="button" [disabled]="!hasNext" (click)="nextPage()">Next</button>\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/features/checker/review-history/review-history.component.scss */\n.page {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh1 {\n  font-size: 22px;\n  font-weight: 800;\n}\n.sub {\n  color: #64748b;\n  font-size: 14px;\n}\n.empty {\n  margin-top: 24px;\n  padding: 32px;\n  text-align: center;\n  color: #94a3b8;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.list {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.row {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 14px;\n}\n.act {\n  font-weight: 700;\n  font-size: 13px;\n}\n.desc {\n  font-size: 13px;\n  color: #475569;\n  margin-top: 4px;\n}\n.ent {\n  font-size: 12px;\n  color: #6366f1;\n  margin-top: 4px;\n}\n.when {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 6px;\n}\n.pager {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=review-history.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewHistoryComponent, { className: "ReviewHistoryComponent", filePath: "src/app/features/checker/review-history/review-history.component.ts", lineNumber: 15 });
})();
export {
  ReviewHistoryComponent
};
//# sourceMappingURL=chunk-BSG6UW6H.js.map
