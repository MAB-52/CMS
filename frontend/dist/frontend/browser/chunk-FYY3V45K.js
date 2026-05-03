import {
  StatusBadgeComponent
} from "./chunk-QO3SBNKX.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// src/app/features/maker/maker-dashboard/maker-dashboard.component.ts
var _c0 = () => ({ status: "REVISION_REQUESTED" });
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = (a0) => ["/maker/consents", a0, "edit"];
var _forTrack0 = ($index, $item) => $item.id;
function MakerDashboardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2, "\u21A9 ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " consent(s) require your attention \u2014 revision requested by checker.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 17);
    \u0275\u0275text(7, "View Now \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.revisionCount());
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(2, _c0));
  }
}
function MakerDashboardComponent_Conditional_53_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275element(2, "div", 19);
    \u0275\u0275elementEnd()();
  }
}
function MakerDashboardComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MakerDashboardComponent_Conditional_53_For_1_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function MakerDashboardComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2, "No consents yet.");
    \u0275\u0275elementEnd()();
  }
}
function MakerDashboardComponent_Conditional_55_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "app-status-badge", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 23);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "timeAgo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "a", 24);
    \u0275\u0275text(10, "Open");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.consentName);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", c_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.submittedAt || c_r2.updatedAt ? \u0275\u0275pipeBind1(7, 4, c_r2.submittedAt || c_r2.updatedAt) : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c2, c_r2.id));
  }
}
function MakerDashboardComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MakerDashboardComponent_Conditional_55_For_1_Template, 11, 8, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.recent());
  }
}
var MakerDashboardComponent = class _MakerDashboardComponent {
  constructor() {
    this.api = inject(ConsentService);
    this.stats = signal(null);
    this.recent = signal([]);
    this.loading = signal(true);
  }
  ngOnInit() {
    this.api.getMakerStats().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.stats.set(res.data);
        }
      },
      error: () => {
      }
    });
    this.api.getMyConsents(0, 5).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data?.content) {
          this.recent.set(res.data.content);
        }
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  revisionCount() {
    return this.stats()?.revisionRequested ?? 0;
  }
  static {
    this.\u0275fac = function MakerDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MakerDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakerDashboardComponent, selectors: [["app-maker-dashboard"]], decls: 56, vars: 6, consts: [[1, "page"], [1, "stats"], [1, "stat-card", "stat--indigo"], [1, "stat-ico"], [1, "stat-label"], [1, "stat-val"], [1, "stat-card", "stat--amber"], [1, "stat-card", "stat--green"], [1, "stat-card", "stat--orange"], [1, "rev-banner"], [1, "card"], [1, "card-head"], [1, "card-title"], [1, "card-sub"], ["mat-stroked-button", "", "routerLink", "/maker/consents/new", 1, "ciq-btn-secondary"], [1, "table-wrap"], [1, "tbl"], ["routerLink", "/maker/consents", 1, "rev-link", 3, "queryParams"], ["colspan", "4"], [1, "skel"], ["colspan", "4", 1, "empty"], [1, "name"], [3, "status"], [1, "muted"], [1, "link", 3, "routerLink"]], template: function MakerDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275text(6, "Total Consents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 3);
        \u0275\u0275text(11, "\u23F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 4);
        \u0275\u0275text(13, "Pending Approval");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 5);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 7)(17, "div", 3);
        \u0275\u0275text(18, "\u2705");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 4);
        \u0275\u0275text(20, "Published & Live");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 5);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 8)(24, "div", 3);
        \u0275\u0275text(25, "\u21A9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 4);
        \u0275\u0275text(27, "Revision Requested");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 5);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(30, MakerDashboardComponent_Conditional_30_Template, 8, 3, "div", 9);
        \u0275\u0275elementStart(31, "div", 10)(32, "div", 11)(33, "div")(34, "h2", 12);
        \u0275\u0275text(35, "Recent Consents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p", 13);
        \u0275\u0275text(37, "Latest 5 records");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "a", 14);
        \u0275\u0275text(39, "Create New Consent \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 15)(41, "table", 16)(42, "thead")(43, "tr")(44, "th");
        \u0275\u0275text(45, "Consent name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49, "Submitted");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "th");
        \u0275\u0275text(51, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "tbody");
        \u0275\u0275template(53, MakerDashboardComponent_Conditional_53_Template, 2, 1)(54, MakerDashboardComponent_Conditional_54_Template, 3, 0, "tr")(55, MakerDashboardComponent_Conditional_55_Template, 2, 0);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate((tmp_0_0 = (tmp_0_0 = ctx.stats()) == null ? null : tmp_0_0.total) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "\u2014");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((tmp_1_0 = (tmp_1_0 = ctx.stats()) == null ? null : tmp_1_0.pendingApproval) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "\u2014");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((tmp_2_0 = (tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.published) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "\u2014");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((tmp_3_0 = (tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.revisionRequested) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.revisionCount() > 0 ? 30 : -1);
        \u0275\u0275advance(23);
        \u0275\u0275conditional(ctx.loading() ? 53 : ctx.recent().length === 0 ? 54 : 55);
      }
    }, dependencies: [RouterLink, MatButtonModule, MatAnchor, StatusBadgeComponent, TimeAgoPipe], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1024px) {\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 18px 20px;\n  box-shadow: var(--card-shadow, 0 1px 3px rgba(0, 0, 0, 0.08));\n  border: 1px solid #e2e8f0;\n  border-left-width: 4px;\n}\n.stat--indigo[_ngcontent-%COMP%] {\n  border-left-color: #6366f1;\n}\n.stat--amber[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.stat--green[_ngcontent-%COMP%] {\n  border-left-color: #16a34a;\n}\n.stat--orange[_ngcontent-%COMP%] {\n  border-left-color: #ea580c;\n}\n.stat-ico[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-top: 4px;\n}\n.rev-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding: 14px 18px;\n  border-radius: 12px;\n  background: #fff7ed;\n  border: 1px solid #fdba74;\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: #9a3412;\n}\n.rev-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #c2410c;\n  text-decoration: none;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  padding: 20px 22px 8px;\n}\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.card-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 8px;\n  color: #64748b;\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid #e2e8f0;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.link[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px !important;\n}\n.skel[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n/*# sourceMappingURL=maker-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakerDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-maker-dashboard", standalone: true, imports: [RouterLink, MatButtonModule, StatusBadgeComponent, TimeAgoPipe], template: `<div class="page">\r
  <div class="stats">\r
    <div class="stat-card stat--indigo">\r
      <div class="stat-ico">\u{1F4CB}</div>\r
      <div class="stat-label">Total Consents</div>\r
      <div class="stat-val">{{ stats()?.total ?? '\u2014' }}</div>\r
    </div>\r
    <div class="stat-card stat--amber">\r
      <div class="stat-ico">\u23F3</div>\r
      <div class="stat-label">Pending Approval</div>\r
      <div class="stat-val">{{ stats()?.pendingApproval ?? '\u2014' }}</div>\r
    </div>\r
    <div class="stat-card stat--green">\r
      <div class="stat-ico">\u2705</div>\r
      <div class="stat-label">Published &amp; Live</div>\r
      <div class="stat-val">{{ stats()?.published ?? '\u2014' }}</div>\r
    </div>\r
    <div class="stat-card stat--orange">\r
      <div class="stat-ico">\u21A9</div>\r
      <div class="stat-label">Revision Requested</div>\r
      <div class="stat-val">{{ stats()?.revisionRequested ?? '\u2014' }}</div>\r
    </div>\r
  </div>\r
\r
  @if (revisionCount() > 0) {\r
    <div class="rev-banner">\r
      <span>\u21A9 <strong>{{ revisionCount() }}</strong> consent(s) require your attention \u2014 revision requested by checker.</span>\r
      <a routerLink="/maker/consents" [queryParams]="{ status: 'REVISION_REQUESTED' }" class="rev-link">View Now \u2192</a>\r
    </div>\r
  }\r
\r
  <div class="card">\r
    <div class="card-head">\r
      <div>\r
        <h2 class="card-title">Recent Consents</h2>\r
        <p class="card-sub">Latest 5 records</p>\r
      </div>\r
      <a mat-stroked-button class="ciq-btn-secondary" routerLink="/maker/consents/new">Create New Consent \u2192</a>\r
    </div>\r
    <div class="table-wrap">\r
      <table class="tbl">\r
        <thead>\r
          <tr>\r
            <th>Consent name</th>\r
            <th>Status</th>\r
            <th>Submitted</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @if (loading()) {\r
            @for (x of [1, 2, 3, 4, 5]; track x) {\r
              <tr>\r
                <td colspan="4"><div class="skel"></div></td>\r
              </tr>\r
            }\r
          } @else if (recent().length === 0) {\r
            <tr>\r
              <td colspan="4" class="empty">No consents yet.</td>\r
            </tr>\r
          } @else {\r
            @for (c of recent(); track c.id) {\r
              <tr>\r
                <td class="name">{{ c.consentName }}</td>\r
                <td><app-status-badge [status]="c.status" /></td>\r
                <td class="muted">{{ (c.submittedAt || c.updatedAt) ? ((c.submittedAt || c.updatedAt) | timeAgo) : '\u2014' }}</td>\r
                <td>\r
                  <a class="link" [routerLink]="['/maker/consents', c.id, 'edit']">Open</a>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/maker/maker-dashboard/maker-dashboard.component.scss */\n.page {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1024px) {\n  .stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 18px 20px;\n  box-shadow: var(--card-shadow, 0 1px 3px rgba(0, 0, 0, 0.08));\n  border: 1px solid #e2e8f0;\n  border-left-width: 4px;\n}\n.stat--indigo {\n  border-left-color: #6366f1;\n}\n.stat--amber {\n  border-left-color: #f59e0b;\n}\n.stat--green {\n  border-left-color: #16a34a;\n}\n.stat--orange {\n  border-left-color: #ea580c;\n}\n.stat-ico {\n  font-size: 20px;\n}\n.stat-label {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.stat-val {\n  font-size: 26px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-top: 4px;\n}\n.rev-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding: 14px 18px;\n  border-radius: 12px;\n  background: #fff7ed;\n  border: 1px solid #fdba74;\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: #9a3412;\n}\n.rev-link {\n  font-weight: 600;\n  color: #c2410c;\n  text-decoration: none;\n}\n.card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  padding: 20px 22px 8px;\n}\n.card-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.card-title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.card-sub {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.table-wrap {\n  overflow: auto;\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.tbl th {\n  text-align: left;\n  padding: 10px 8px;\n  color: #64748b;\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid #e2e8f0;\n}\n.tbl td {\n  padding: 12px 8px;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.name {\n  font-weight: 600;\n  color: #0f172a;\n}\n.muted {\n  color: #64748b;\n}\n.link {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n}\n.empty {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px !important;\n}\n.skel {\n  height: 14px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.2s ease-in-out infinite;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n/*# sourceMappingURL=maker-dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerDashboardComponent, { className: "MakerDashboardComponent", filePath: "src/app/features/maker/maker-dashboard/maker-dashboard.component.ts", lineNumber: 16 });
})();
export {
  MakerDashboardComponent
};
//# sourceMappingURL=chunk-FYY3V45K.js.map
