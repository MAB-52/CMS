import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-QBB4LLCG.js";

// src/app/shared/pipes/consent-type-label.pipe.ts
var ConsentTypeLabelPipe = class _ConsentTypeLabelPipe {
  transform(value) {
    switch (value) {
      case "NEW_TEMPLATE":
        return "New Template";
      case "VERSION_UPDATE":
        return "Version Update";
      case "RENEWAL":
        return "Renewal";
      default:
        return String(value ?? "");
    }
  }
  static {
    this.\u0275fac = function ConsentTypeLabelPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentTypeLabelPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "consentTypeLabel", type: _ConsentTypeLabelPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentTypeLabelPipe, [{
    type: Pipe,
    args: [{
      name: "consentTypeLabel",
      standalone: true
    }]
  }], null, null);
})();

export {
  ConsentTypeLabelPipe
};
//# sourceMappingURL=chunk-EH3SUVWG.js.map
