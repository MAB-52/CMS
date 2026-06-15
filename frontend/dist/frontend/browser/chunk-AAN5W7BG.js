import {
  Component,
  Input,
  NgClass,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SKWF3SJ6.js";

// src/app/shared/components/workflow-status-badge/workflow-status-badge.component.ts
function WorkflowStatusBadgeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1, "\u25CF");
    \u0275\u0275elementEnd();
  }
}
var WorkflowStatusBadgeComponent = class _WorkflowStatusBadgeComponent {
  get dot() {
    return this.status !== "DRAFT";
  }
  get label() {
    const s = this.status;
    const map = {
      DRAFT: "Draft",
      PENDING_CHECKER_APPROVAL: "Pending checker approval",
      PENDING_APPROVAL: "Pending approval",
      APPROVED: "Approved",
      REJECTED: "Rejected",
      REVISION_REQUESTED: "Returned for revision",
      LIVE: "Live",
      READY_FOR_EXECUTION: "Ready for execution",
      EXECUTED: "Executed",
      FAILED: "Failed",
      PARTIALLY_EXECUTED: "Partially executed",
      PUBLISHED: "Published"
    };
    return map[s] || s.replace(/_/g, " ");
  }
  get variant() {
    switch (this.status) {
      case "DRAFT":
        return "slate";
      case "PENDING_CHECKER_APPROVAL":
      case "PENDING_APPROVAL":
        return "amber";
      case "APPROVED":
        return "emerald";
      case "REJECTED":
        return "red";
      case "REVISION_REQUESTED":
        return "orange";
      case "LIVE":
      case "PUBLISHED":
        return "indigo";
      case "READY_FOR_EXECUTION":
        return "teal";
      case "EXECUTED":
        return "emerald";
      case "FAILED":
        return "red";
      case "PARTIALLY_EXECUTED":
        return "amber";
      default:
        return "slate";
    }
  }
  static {
    this.\u0275fac = function WorkflowStatusBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WorkflowStatusBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkflowStatusBadgeComponent, selectors: [["app-workflow-status-badge"]], inputs: { status: "status" }, decls: 3, vars: 3, consts: [[1, "wf-badge", 3, "ngClass"], [1, "dot"]], template: function WorkflowStatusBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275template(1, WorkflowStatusBadgeComponent_Conditional_1_Template, 2, 0, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", "wf-" + ctx.variant);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.dot ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label, " ");
      }
    }, dependencies: [NgClass], styles: ["\n\n.wf-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 999px;\n  padding: 4px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  border: 1px solid transparent;\n}\n.dot[_ngcontent-%COMP%] {\n  font-size: 8px;\n  opacity: 0.85;\n}\n.wf-slate[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.12);\n  color: #475569;\n  border-color: rgba(100, 116, 139, 0.25);\n}\n.wf-amber[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.14);\n  color: #b45309;\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.wf-emerald[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n  border-color: rgba(22, 163, 74, 0.28);\n}\n.wf-red[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #b91c1c;\n  border-color: rgba(220, 38, 38, 0.28);\n}\n.wf-orange[_ngcontent-%COMP%] {\n  background: rgba(234, 88, 12, 0.12);\n  color: #c2410c;\n  border-color: rgba(234, 88, 12, 0.3);\n}\n.wf-indigo[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.14);\n  color: #4338ca;\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.wf-teal[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.12);\n  color: #0f766e;\n  border-color: rgba(13, 148, 136, 0.3);\n}\n.wf-rose[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.1);\n  color: #be123c;\n  border-color: rgba(244, 63, 94, 0.28);\n}\n/*# sourceMappingURL=workflow-status-badge.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowStatusBadgeComponent, [{
    type: Component,
    args: [{ selector: "app-workflow-status-badge", standalone: true, imports: [NgClass], template: `
    <span class="wf-badge" [ngClass]="'wf-' + variant">
      @if (dot) {
        <span class="dot">\u25CF</span>
      }
      {{ label }}
    </span>
  `, styles: ["/* angular:styles/component:scss;376ccb896ffc38ee93c98ad9723ecce3e6bbfe34fbe404a2231e2c3330b5a820;D:/Mustafa/CMS-17.4-CLEAN/frontend/src/app/shared/components/workflow-status-badge/workflow-status-badge.component.ts */\n.wf-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 999px;\n  padding: 4px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  border: 1px solid transparent;\n}\n.dot {\n  font-size: 8px;\n  opacity: 0.85;\n}\n.wf-slate {\n  background: rgba(100, 116, 139, 0.12);\n  color: #475569;\n  border-color: rgba(100, 116, 139, 0.25);\n}\n.wf-amber {\n  background: rgba(245, 158, 11, 0.14);\n  color: #b45309;\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.wf-emerald {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n  border-color: rgba(22, 163, 74, 0.28);\n}\n.wf-red {\n  background: rgba(220, 38, 38, 0.1);\n  color: #b91c1c;\n  border-color: rgba(220, 38, 38, 0.28);\n}\n.wf-orange {\n  background: rgba(234, 88, 12, 0.12);\n  color: #c2410c;\n  border-color: rgba(234, 88, 12, 0.3);\n}\n.wf-indigo {\n  background: rgba(99, 102, 241, 0.14);\n  color: #4338ca;\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.wf-teal {\n  background: rgba(13, 148, 136, 0.12);\n  color: #0f766e;\n  border-color: rgba(13, 148, 136, 0.3);\n}\n.wf-rose {\n  background: rgba(244, 63, 94, 0.1);\n  color: #be123c;\n  border-color: rgba(244, 63, 94, 0.28);\n}\n/*# sourceMappingURL=workflow-status-badge.component.css.map */\n"] }]
  }], null, { status: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkflowStatusBadgeComponent, { className: "WorkflowStatusBadgeComponent", filePath: "src/app/shared/components/workflow-status-badge/workflow-status-badge.component.ts", lineNumber: 84 });
})();

export {
  WorkflowStatusBadgeComponent
};
//# sourceMappingURL=chunk-AAN5W7BG.js.map
