import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-QBB4LLCG.js";

// src/app/shared/pipes/time-ago.pipe.ts
var TimeAgoPipe = class _TimeAgoPipe {
  transform(iso) {
    if (!iso) {
      return "";
    }
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) {
      return "";
    }
    const diffMs = Date.now() - d.getTime();
    const sec = Math.floor(diffMs / 1e3);
    if (sec < 45) {
      return "just now";
    }
    const min = Math.floor(sec / 60);
    if (min < 60) {
      return min === 1 ? "1 min ago" : `${min} min ago`;
    }
    const hr = Math.floor(min / 60);
    if (hr < 24) {
      return hr === 1 ? "1 hr ago" : `${hr} hrs ago`;
    }
    const day = Math.floor(hr / 24);
    if (day === 1) {
      return "yesterday";
    }
    if (day < 7) {
      return `${day} days ago`;
    }
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  }
  static {
    this.\u0275fac = function TimeAgoPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeAgoPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "timeAgo", type: _TimeAgoPipe, pure: false });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeAgoPipe, [{
    type: Pipe,
    args: [{
      name: "timeAgo",
      standalone: true,
      pure: false
    }]
  }], null, null);
})();

export {
  TimeAgoPipe
};
//# sourceMappingURL=chunk-4AVASXE7.js.map
