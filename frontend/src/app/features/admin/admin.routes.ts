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
    ],
  },
];
