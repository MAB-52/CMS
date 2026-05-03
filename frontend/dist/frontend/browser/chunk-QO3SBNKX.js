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
} from "./chunk-QBB4LLCG.js";

// src/app/shared/components/status-badge/status-badge.component.ts
function StatusBadgeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1, "\u25CF");
    \u0275\u0275elementEnd();
  }
}
var StatusBadgeComponent = class _StatusBadgeComponent {
  get dot() {
    return this.status !== "DRAFT";
  }
  get label() {
    switch (this.status) {
      case "DRAFT":
        return "Draft";
      case "PENDING_APPROVAL":
        return "Pending Approval";
      case "APPROVED":
        return "Approved";
      case "REJECTED":
        return "Rejected";
      case "PUBLISHED":
        return "Published";
      case "REVISION_REQUESTED":
        return "Revision Requested";
      default:
        return String(this.status);
    }
  }
  get classes() {
    return {
      "bg-slate-200 text-slate-700": this.status === "DRAFT",
      "bg-amber-100 text-amber-700": this.status === "PENDING_APPROVAL",
      "bg-emerald-100 text-emerald-700": this.status === "APPROVED",
      "bg-red-100 text-red-700": this.status === "REJECTED",
      "bg-violet-600 text-white": this.status === "PUBLISHED",
      "bg-orange-100 text-orange-700": this.status === "REVISION_REQUESTED"
    };
  }
  static {
    this.\u0275fac = function StatusBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatusBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusBadgeComponent, selectors: [["app-status-badge"]], inputs: { status: "status" }, decls: 3, vars: 3, consts: [[1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "text-[10px]"]], template: function StatusBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275template(1, StatusBadgeComponent_Conditional_1_Template, 2, 0, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.classes);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.dot ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label, " ");
      }
    }, dependencies: [NgClass], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusBadgeComponent, [{
    type: Component,
    args: [{
      selector: "app-status-badge",
      standalone: true,
      imports: [NgClass],
      template: `
    <span class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold" [ngClass]="classes">
      @if (dot) {
        <span class="text-[10px]">\u25CF</span>
      }
      {{ label }}
    </span>
  `
    }]
  }], null, { status: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusBadgeComponent, { className: "StatusBadgeComponent", filePath: "src/app/shared/components/status-badge/status-badge.component.ts", lineNumber: 18 });
})();

export {
  StatusBadgeComponent
};
//# sourceMappingURL=chunk-QO3SBNKX.js.map
