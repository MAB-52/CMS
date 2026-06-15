import "./chunk-YB33ZBVX.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EKTRGZNL.js";
import "./chunk-4UOF66IB.js";
import {
  WorkflowStatusBadgeComponent
} from "./chunk-AAN5W7BG.js";
import {
  ConsentRulesService
} from "./chunk-ZJPKKVVC.js";
import "./chunk-FIYZFADG.js";
import "./chunk-ASPSHXFC.js";
import {
  MatTooltipModule
} from "./chunk-T6DLIJPT.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import "./chunk-5EC44GU6.js";
import {
  MatAnchor,
  MatButtonModule,
  MatRipple,
  MatRippleModule
} from "./chunk-DBZCAWGK.js";
import {
  RouterLink
} from "./chunk-2TGCEGVP.js";
import "./chunk-23MDLYAU.js";
import {
  CommonModule,
  Component,
  DatePipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/checker/checker-rules-queue/checker-rules-queue.component.ts
var _c0 = (a0) => ["/checker/rules", a0, "review"];
var _forTrack0 = ($index, $item) => $item.id;
function CheckerRulesQueueComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12)(2, "mat-icon");
    \u0275\u0275text(3, "task_alt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "All caught up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " There are currently no consent rules awaiting approval. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 13);
    \u0275\u0275text(9, " Back to Dashboard ");
    \u0275\u0275elementEnd()();
  }
}
function CheckerRulesQueueComponent_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "mat-icon");
    \u0275\u0275text(5, "rule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "app-workflow-status-badge", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 20)(11, "span", 21)(12, "mat-icon");
    \u0275\u0275text(13, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 22);
    \u0275\u0275text(16, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 21)(18, "mat-icon");
    \u0275\u0275text(19, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 22);
    \u0275\u0275text(23, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 21)(25, "mat-icon");
    \u0275\u0275text(26, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 23)(30, "span", 24);
    \u0275\u0275text(31, " Open Review ");
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33, " arrow_forward ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, r_r1.id));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", r_r1.ruleName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("status", r_r1.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r1.createdByName, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 6, r_r1.submittedAt, "dd MMM yyyy"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 9, r_r1.submittedAt, "hh:mm a"), " ");
  }
}
function CheckerRulesQueueComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, CheckerRulesQueueComponent_Conditional_28_For_2_Template, 34, 14, "a", 14, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.rows());
  }
}
var CheckerRulesQueueComponent = class _CheckerRulesQueueComponent {
  constructor() {
    this.api = inject(ConsentRulesService);
    this.rows = signal([]);
  }
  ngOnInit() {
    this.api.listPending().subscribe((res) => {
      if (res.success && res.data) {
        this.rows.set(res.data);
      }
    });
  }
  static {
    this.\u0275fac = function CheckerRulesQueueComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckerRulesQueueComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckerRulesQueueComponent, selectors: [["app-checker-rules-queue"]], decls: 29, vars: 3, consts: [[1, "queue-page"], [1, "queue-hero"], [1, "queue-hero__content"], [1, "queue-hero__eyebrow"], [1, "queue-stats"], [1, "queue-stat"], [1, "queue-stat__value"], [1, "queue-stat__label"], [1, "queue-hero__actions"], ["mat-flat-button", "", "color", "primary", "routerLink", "/checker/dashboard"], [1, "empty-state"], [1, "rules-grid"], [1, "empty-state__icon"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/checker/dashboard"], ["matRipple", "", 1, "rule-card", 3, "routerLink"], [1, "rule-card__top"], [1, "rule-title-wrap"], [1, "rule-icon"], [1, "rule-card__content"], [3, "status"], [1, "rule-meta-inline"], [1, "meta-chip"], [1, "meta-divider"], [1, "rule-card__footer"], [1, "review-link"]], template: function CheckerRulesQueueComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        \u0275\u0275text(5, "fact_check");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Checker Workspace ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1");
        \u0275\u0275text(8, "Rules Pending Approval");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, " Review consent rules submitted by makers, validate compliance, and approve or request revisions. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "span", 6);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 7);
        \u0275\u0275text(16, " Pending Reviews ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 5)(18, "span", 6);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 7);
        \u0275\u0275text(21, " Queue Status ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "div", 8)(23, "a", 9)(24, "mat-icon");
        \u0275\u0275text(25, "dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Dashboard ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, CheckerRulesQueueComponent_Conditional_27_Template, 10, 0, "div", 10)(28, CheckerRulesQueueComponent_Conditional_28_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1(" ", ctx.rows().length, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.rows().length ? "Active" : "Idle", " ");
        \u0275\u0275advance(8);
        \u0275\u0275conditional(!ctx.rows().length ? 27 : 28);
      }
    }, dependencies: [
      CommonModule,
      DatePipe,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatIconModule,
      MatIcon,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      WorkflowStatusBadgeComponent
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(99, 102, 241, 0.08),\n      transparent 24%),\n    radial-gradient(\n      circle at top right,\n      rgba(59, 130, 246, 0.08),\n      transparent 20%),\n    #f8fafc;\n}\n.queue-page[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 24px 16px 60px;\n}\n.queue-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 24px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #0f172a 45%,\n      #111827 100%);\n  color: white;\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);\n  margin-bottom: 24px;\n}\n.queue-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.25),\n      transparent 26%);\n  pointer-events: none;\n}\n.queue-hero__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 720px;\n}\n.queue-hero__eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.queue-hero__eyebrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.queue-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(26px, 4vw, 36px);\n  line-height: 1.1;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.queue-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  max-width: 620px;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 14px;\n  line-height: 1.6;\n}\n.queue-hero__actions[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.queue-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 22px;\n}\n.queue-stat[_ngcontent-%COMP%] {\n  min-width: 120px;\n  padding: 14px 16px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.queue-stat__value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n}\n.queue-stat__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.rules-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.rule-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  padding: 18px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  text-decoration: none;\n  color: inherit;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.rule-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(99, 102, 241, 0.35);\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.1);\n}\n.rule-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: auto -50px -50px auto;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.1),\n      transparent 70%);\n}\n.rule-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.rule-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.rule-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.14),\n      rgba(59, 130, 246, 0.14));\n  color: #4f46e5;\n}\n.rule-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.rule-card__content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.rule-card__content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.35;\n  color: #0f172a;\n  word-break: break-word;\n}\n.rule-meta-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid #e2e8f0;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.meta-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #6366f1;\n}\n.meta-divider[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 12px;\n}\n.rule-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.review-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #4f46e5;\n}\n.review-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  transition: transform 0.2s ease;\n}\n.rule-card[_ngcontent-%COMP%]:hover   .review-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 56px 20px;\n  border-radius: 22px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.14),\n      rgba(59, 130, 246, 0.14));\n  color: #10b981;\n  margin-bottom: 18px;\n}\n.empty-state__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 34px;\n  width: 34px;\n  height: 34px;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 24px;\n  max-width: 460px;\n  color: #64748b;\n  line-height: 1.6;\n  font-size: 14px;\n}\n@media (max-width: 900px) {\n  .queue-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .queue-hero__actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .queue-hero__actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .queue-page[_ngcontent-%COMP%] {\n    padding: 18px 12px 50px;\n  }\n  .queue-hero[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .rule-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .queue-stat[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .rule-card__top[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=checker-rules-queue.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckerRulesQueueComponent, [{
    type: Component,
    args: [{ selector: "app-checker-rules-queue", standalone: true, imports: [
      CommonModule,
      RouterLink,
      MatButtonModule,
      MatIconModule,
      MatRippleModule,
      MatTooltipModule,
      WorkflowStatusBadgeComponent
    ], template: `
    <div class="queue-page">
      <div class="queue-hero">
        <div class="queue-hero__content">
          <div class="queue-hero__eyebrow">
            <mat-icon>fact_check</mat-icon>
            Checker Workspace
          </div>

          <h1>Rules Pending Approval</h1>

          <p>
            Review consent rules submitted by makers,
            validate compliance, and approve or request revisions.
          </p>

          <div class="queue-stats">
            <div class="queue-stat">
              <span class="queue-stat__value">
                {{ rows().length }}
              </span>

              <span class="queue-stat__label">
                Pending Reviews
              </span>
            </div>

            <div class="queue-stat">
              <span class="queue-stat__value">
                {{ rows().length ? 'Active' : 'Idle' }}
              </span>

              <span class="queue-stat__label">
                Queue Status
              </span>
            </div>
          </div>
        </div>

        <div class="queue-hero__actions">
          <a
            mat-flat-button
            color="primary"
            routerLink="/checker/dashboard"
          >
            <mat-icon>dashboard</mat-icon>
            Dashboard
          </a>
        </div>
      </div>

      @if (!rows().length) {

        <div class="empty-state">
          <div class="empty-state__icon">
            <mat-icon>task_alt</mat-icon>
          </div>

          <h2>All caught up</h2>

          <p>
            There are currently no consent rules awaiting approval.
          </p>

          <a
            mat-stroked-button
            color="primary"
            routerLink="/checker/dashboard"
          >
            Back to Dashboard
          </a>
        </div>
      } @else {

        <div class="rules-grid">
          @for (r of rows(); track r.id) {
            <a
              class="rule-card"
              matRipple
              [routerLink]="['/checker/rules', r.id, 'review']"
            >

              <div class="rule-card__top">
                <div class="rule-title-wrap">
                  <div class="rule-icon">
                    <mat-icon>rule</mat-icon>
                  </div>

                  <div class="rule-card__content">
                    <h3>
                      {{ r.ruleName }}
                    </h3>
                  </div>
                </div>

                <app-workflow-status-badge
                  [status]="r.status"
                />
              </div>

              <div class="rule-meta-inline">
                <span class="meta-chip">
                  <mat-icon>person</mat-icon>
                  {{ r.createdByName }}
                </span>

                <span class="meta-divider">\u2022</span>

                <span class="meta-chip">
                  <mat-icon>calendar_today</mat-icon>
                  {{ r.submittedAt | date:'dd MMM yyyy' }}
                </span>
                <span class="meta-divider">\u2022</span>

                <span class="meta-chip">
                  <mat-icon>schedule</mat-icon>
                  {{ r.submittedAt | date:'hh:mm a' }}
                </span>
              </div>

              <div class="rule-card__footer">
                <span class="review-link">
                  Open Review
                  <mat-icon>
                    arrow_forward
                  </mat-icon>
                </span>
              </div>
            </a>
          }
        </div>
      }
    </div>
  `, styles: ['/* angular:styles/component:scss;02f92b88074ce6c6a1df01e6dc6101dcd83dae7fcedd1b9a6cfd708e45fb7f90;D:/Mustafa/CMS-17.4-CLEAN/frontend/src/app/features/checker/checker-rules-queue/checker-rules-queue.component.ts */\n:host {\n  display: block;\n  min-height: 100%;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(99, 102, 241, 0.08),\n      transparent 24%),\n    radial-gradient(\n      circle at top right,\n      rgba(59, 130, 246, 0.08),\n      transparent 20%),\n    #f8fafc;\n}\n.queue-page {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 24px 16px 60px;\n}\n.queue-hero {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 24px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #0f172a 45%,\n      #111827 100%);\n  color: white;\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);\n  margin-bottom: 24px;\n}\n.queue-hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(99, 102, 241, 0.25),\n      transparent 26%);\n  pointer-events: none;\n}\n.queue-hero__content {\n  position: relative;\n  z-index: 1;\n  max-width: 720px;\n}\n.queue-hero__eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.queue-hero__eyebrow mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.queue-hero h1 {\n  margin: 0;\n  font-size: clamp(26px, 4vw, 36px);\n  line-height: 1.1;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.queue-hero p {\n  margin: 12px 0 0;\n  max-width: 620px;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 14px;\n  line-height: 1.6;\n}\n.queue-hero__actions {\n  position: relative;\n  z-index: 1;\n}\n.queue-stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 22px;\n}\n.queue-stat {\n  min-width: 120px;\n  padding: 14px 16px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.queue-stat__value {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n}\n.queue-stat__label {\n  display: block;\n  margin-top: 4px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.rules-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.rule-card {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  padding: 18px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  text-decoration: none;\n  color: inherit;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.rule-card:hover {\n  transform: translateY(-4px);\n  border-color: rgba(99, 102, 241, 0.35);\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.1);\n}\n.rule-card::after {\n  content: "";\n  position: absolute;\n  inset: auto -50px -50px auto;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.1),\n      transparent 70%);\n}\n.rule-card__top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.rule-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.rule-icon {\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.14),\n      rgba(59, 130, 246, 0.14));\n  color: #4f46e5;\n}\n.rule-icon mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.rule-card__content {\n  min-width: 0;\n}\n.rule-card__content h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.35;\n  color: #0f172a;\n  word-break: break-word;\n}\n.rule-meta-inline {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid #e2e8f0;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.meta-chip mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #6366f1;\n}\n.meta-divider {\n  color: #cbd5e1;\n  font-size: 12px;\n}\n.rule-card__footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.review-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #4f46e5;\n}\n.review-link mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  transition: transform 0.2s ease;\n}\n.rule-card:hover .review-link mat-icon {\n  transform: translateX(4px);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 56px 20px;\n  border-radius: 22px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);\n}\n.empty-state__icon {\n  width: 72px;\n  height: 72px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.14),\n      rgba(59, 130, 246, 0.14));\n  color: #10b981;\n  margin-bottom: 18px;\n}\n.empty-state__icon mat-icon {\n  font-size: 34px;\n  width: 34px;\n  height: 34px;\n}\n.empty-state h2 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.empty-state p {\n  margin: 10px 0 24px;\n  max-width: 460px;\n  color: #64748b;\n  line-height: 1.6;\n  font-size: 14px;\n}\n@media (max-width: 900px) {\n  .queue-hero {\n    flex-direction: column;\n  }\n  .queue-hero__actions {\n    width: 100%;\n  }\n  .queue-hero__actions a {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .queue-page {\n    padding: 18px 12px 50px;\n  }\n  .queue-hero {\n    padding: 20px;\n  }\n  .rule-card {\n    padding: 16px;\n  }\n  .queue-stat {\n    flex: 1;\n  }\n  .rule-card__top {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=checker-rules-queue.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckerRulesQueueComponent, { className: "CheckerRulesQueueComponent", filePath: "src/app/features/checker/checker-rules-queue/checker-rules-queue.component.ts", lineNumber: 542 });
})();
export {
  CheckerRulesQueueComponent
};
//# sourceMappingURL=chunk-VHMMTWYZ.js.map
