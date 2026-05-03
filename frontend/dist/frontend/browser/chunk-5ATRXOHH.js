import "./chunk-4MWRP73S.js";

// src/app/features/admin/admin.routes.ts
var adminRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-POSECJHX.js").then((m) => m.AdminLayoutComponent),
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      {
        path: "dashboard",
        data: { title: "Dashboard" },
        loadComponent: () => import("./chunk-ZATTOT45.js").then((m) => m.AdminDashboardComponent)
      },
      {
        path: "capture-consent",
        data: { title: "Capture Consent" },
        loadComponent: () => import("./chunk-HLZIFVZE.js").then((m) => m.AdminCaptureConsentComponent)
      }
    ]
  }
];
export {
  adminRoutes
};
//# sourceMappingURL=chunk-5ATRXOHH.js.map
