import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin-layout/admin-layout.component').then((m) => m.AdminLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        data: { title: 'Dashboard' },
        loadComponent: () =>
          import('./admin-dashboard/admin-dashboard.component').then((m) => m.AdminDashboardComponent),
      },
      {
        path: 'capture-consent',
        data: { title: 'Capture Consent' },
        loadComponent: () =>
          import('./admin-capture-consent/admin-capture-consent.component').then(
            (m) => m.AdminCaptureConsentComponent,
          ),
      },
      {
        path: 'user-management',
        data: { title: 'User Management' },
        loadComponent: () =>
          import('./admin-user-management/admin-user-management.component').then(
            (m) => m.AdminUserManagementComponent,
          ),
      },
      {
        path: 'mis-reports',
        data: { title: 'MIS Reports' },
        loadComponent: () =>
          import('./admin-mis-reports/admin-mis-reports.component').then((m) => m.AdminMisReportsComponent),
      },
       {
        path: 'rule-engine',
        data: { title: 'Rule Engine Dashboard' },
        loadComponent: () =>
          import(
            './admin-rule-engine-dashboard/admin-rule-engine-dashboard.component'
          ).then((m) => m.AdminRuleEngineDashboardComponent),
      },
    ],
  },
];
