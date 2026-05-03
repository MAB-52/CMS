import {
  AuditService
} from "./chunk-QVQJAN6Y.js";
import {
  TimeAgoPipe
} from "./chunk-4AVASXE7.js";
import {
  ConsentService
} from "./chunk-5L2IXPPD.js";
import {
  RouterLink
} from "./chunk-W4T3EBZ5.js";
import "./chunk-4RAWTRTP.js";
import {
  Component,
  MatAnchor,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// src/app/features/checker/checker-dashboard/checker-dashboard.component.ts
var _c0 = (a0) => ["/checker/consents", a0, "review"];
var _forTrack0 = ($index, $item) => $item.id;
function CheckerDashboardComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "No pending items.");
    \u0275\u0275elementEnd();
  }
}
function CheckerDashboardComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "timeAgo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, c_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.consentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r1.consentId, " \xB7 ", \u0275\u0275pipeBind1(5, 4, c_r1.updatedAt), "");
  }
}
function CheckerDashboardComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 12);
    \u0275\u0275repeaterCreate(1, CheckerDashboardComponent_Conditional_29_For_2_Template, 6, 8, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pending());
  }
}
function CheckerDashboardComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "No recent actions.");
    \u0275\u0275elementEnd();
  }
}
function CheckerDashboardComponent_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "timeAgo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r3.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", e_r3.description, " \xB7 ", \u0275\u0275pipeBind1(5, 3, e_r3.performedAt), "");
  }
}
function CheckerDashboardComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 13);
    \u0275\u0275repeaterCreate(1, CheckerDashboardComponent_Conditional_34_For_2_Template, 6, 5, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.feed());
  }
}
var CheckerDashboardComponent = class _CheckerDashboardComponent {
  constructor() {
    this.api = inject(ConsentService);
    this.audit = inject(AuditService);
    this.stats = signal(null);
    this.pending = signal([]);
    this.feed = signal([]);
  }
  ngOnInit() {
    this.api.getCheckerStats().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.stats.set(res.data);
        }
      }
    });
    this.api.getPendingApprovals().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.pending.set(res.data.slice(0, 3));
        }
      }
    });
    this.audit.getMyActivity(0, 15).subscribe({
      next: (res) => {
        if (res.success && res.data?.content) {
          const rows = res.data.content.filter((e) => e.action.startsWith("CONSENT_"));
          this.feed.set(rows.slice(0, 8));
        }
      }
    });
  }
  static {
    this.\u0275fac = function CheckerDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckerDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckerDashboardComponent, selectors: [["app-checker-dashboard"]], decls: 35, vars: 6, consts: [[1, "page"], [1, "stats"], [1, "stat", "amber"], [1, "lbl"], [1, "val"], [1, "stat", "green"], [1, "stat", "red"], [1, "stat", "indigo"], [1, "card"], [1, "hd"], ["mat-stroked-button", "", "routerLink", "/checker/pending"], [1, "muted"], [1, "mini"], [1, "feed"], [3, "routerLink"], [1, "sub"]], template: function CheckerDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "\u23F3 Pending Review");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 3);
        \u0275\u0275text(9, "\u2705 Approved Today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 4);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 3);
        \u0275\u0275text(14, "\u274C Rejected");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 4);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 7)(18, "div", 3);
        \u0275\u0275text(19, "\u{1F4CA} Total Reviewed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 4);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 8)(23, "div", 9)(24, "h2");
        \u0275\u0275text(25, "Pending queue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 10);
        \u0275\u0275text(27, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, CheckerDashboardComponent_Conditional_28_Template, 2, 0, "p", 11)(29, CheckerDashboardComponent_Conditional_29_Template, 3, 0, "ul", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 8)(31, "h2");
        \u0275\u0275text(32, "Recent review activity");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, CheckerDashboardComponent_Conditional_33_Template, 2, 0, "p", 11)(34, CheckerDashboardComponent_Conditional_34_Template, 3, 0, "ul", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate((tmp_0_0 = (tmp_0_0 = ctx.stats()) == null ? null : tmp_0_0.pendingReview) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "\u2014");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((tmp_1_0 = (tmp_1_0 = ctx.stats()) == null ? null : tmp_1_0.approvedToday) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "\u2014");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((tmp_2_0 = (tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.rejectedTotal) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "\u2014");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((tmp_3_0 = (tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.totalReviewed) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
        \u0275\u0275advance(7);
        \u0275\u0275conditional(!ctx.pending().length ? 28 : 29);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.feed().length ? 33 : 34);
      }
    }, dependencies: [RouterLink, MatButtonModule, MatAnchor, TimeAgoPipe], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 900px) {\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n  border-left-width: 4px;\n}\n.stat.amber[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.stat.green[_ngcontent-%COMP%] {\n  border-left-color: #16a34a;\n}\n.stat.red[_ngcontent-%COMP%] {\n  border-left-color: #dc2626;\n}\n.stat.indigo[_ngcontent-%COMP%] {\n  border-left-color: #6366f1;\n}\n.lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  margin-top: 6px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 18px 20px;\n  margin-bottom: 16px;\n}\n.hd[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n}\n.mini[_ngcontent-%COMP%], \n.feed[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mini[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.feed[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.mini[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6366f1;\n  text-decoration: none;\n}\n.sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=checker-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckerDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-checker-dashboard", standalone: true, imports: [RouterLink, MatButtonModule, TimeAgoPipe], template: `<div class="page">\r
  <div class="stats">\r
    <div class="stat amber">\r
      <div class="lbl">\u23F3 Pending Review</div>\r
      <div class="val">{{ stats()?.pendingReview ?? '\u2014' }}</div>\r
    </div>\r
    <div class="stat green">\r
      <div class="lbl">\u2705 Approved Today</div>\r
      <div class="val">{{ stats()?.approvedToday ?? '\u2014' }}</div>\r
    </div>\r
    <div class="stat red">\r
      <div class="lbl">\u274C Rejected</div>\r
      <div class="val">{{ stats()?.rejectedTotal ?? '\u2014' }}</div>\r
    </div>\r
    <div class="stat indigo">\r
      <div class="lbl">\u{1F4CA} Total Reviewed</div>\r
      <div class="val">{{ stats()?.totalReviewed ?? '\u2014' }}</div>\r
    </div>\r
  </div>\r
\r
  <div class="card">\r
    <div class="hd">\r
      <h2>Pending queue</h2>\r
      <a mat-stroked-button routerLink="/checker/pending">View all</a>\r
    </div>\r
    @if (!pending().length) {\r
      <p class="muted">No pending items.</p>\r
    } @else {\r
      <ul class="mini">\r
        @for (c of pending(); track c.id) {\r
          <li>\r
            <a [routerLink]="['/checker/consents', c.id, 'review']">{{ c.consentName }}</a>\r
            <span class="sub">{{ c.consentId }} \xB7 {{ c.updatedAt | timeAgo }}</span>\r
          </li>\r
        }\r
      </ul>\r
    }\r
  </div>\r
\r
  <div class="card">\r
    <h2>Recent review activity</h2>\r
    @if (!feed().length) {\r
      <p class="muted">No recent actions.</p>\r
    } @else {\r
      <ul class="feed">\r
        @for (e of feed(); track e.id) {\r
          <li>\r
            <strong>{{ e.action }}</strong>\r
            <span class="sub">{{ e.description }} \xB7 {{ e.performedAt | timeAgo }}</span>\r
          </li>\r
        }\r
      </ul>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/checker/checker-dashboard/checker-dashboard.component.scss */\n.page {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 900px) {\n  .stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat {\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n  border-left-width: 4px;\n}\n.stat.amber {\n  border-left-color: #f59e0b;\n}\n.stat.green {\n  border-left-color: #16a34a;\n}\n.stat.red {\n  border-left-color: #dc2626;\n}\n.stat.indigo {\n  border-left-color: #6366f1;\n}\n.lbl {\n  font-size: 12px;\n  color: #64748b;\n}\n.val {\n  font-size: 24px;\n  font-weight: 800;\n  margin-top: 6px;\n}\n.card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 18px 20px;\n  margin-bottom: 16px;\n}\n.hd {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\nh2 {\n  margin: 0;\n  font-size: 16px;\n}\n.muted {\n  color: #94a3b8;\n  font-size: 14px;\n}\n.mini,\n.feed {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mini li,\n.feed li {\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.mini a {\n  font-weight: 600;\n  color: #6366f1;\n  text-decoration: none;\n}\n.sub {\n  display: block;\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=checker-dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckerDashboardComponent, { className: "CheckerDashboardComponent", filePath: "src/app/features/checker/checker-dashboard/checker-dashboard.component.ts", lineNumber: 17 });
})();
export {
  CheckerDashboardComponent
};
//# sourceMappingURL=chunk-WHWBFRA3.js.map
