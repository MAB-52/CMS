import "./chunk-WDMUDEB6.js";

// src/app/features/admin/admin.routes.ts
var adminRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-SSXQI76Q.js").then((m) => m.AdminLayoutComponent),
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      {
        path: "dashboard",
        data: { title: "Dashboard" },
        loadComponent: () => import("./chunk-GWXT3IFC.js").then((m) => m.AdminDashboardComponent)
      },
      {
        path: "capture-consent",
        data: { title: "Capture Consent" },
        loadComponent: () => import("./chunk-BAENIQBB.js").then((m) => m.AdminCaptureConsentComponent)
      },
      {
        path: "user-management",
        data: { title: "User Management" },
        loadComponent: () => import("./chunk-UAG4XFCK.js").then((m) => m.AdminUserManagementComponent)
      },
      {
        path: "mis-reports",
        data: { title: "MIS Reports" },
        loadComponent: () => import("./chunk-FM7J62N7.js").then((m) => m.AdminMisReportsComponent)
      },
      {
        path: "rule-engine",
        data: { title: "Rule Engine Dashboard" },
        loadComponent: () => import("./chunk-VL6BXLDA.js").then((m) => m.AdminRuleEngineDashboardComponent)
      }
    ]
  }
];
export {
  adminRoutes
};
//# sourceMappingURL=chunk-2TXFZTIF.js.map
