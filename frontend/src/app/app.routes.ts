import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { adminGuard } from './core/guards/admin.guard';
import { makerGuard } from './core/guards/maker.guard';
import { checkerGuard } from './core/guards/checker.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'maker',
    canActivate: [makerGuard],
    loadComponent: () =>
      import('./features/maker/maker-layout/maker-layout.component').then((m) => m.MakerLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        data: { title: 'Dashboard', makerCrumb: 'Dashboard' },
        loadComponent: () =>
          import('./features/maker/maker-dashboard/maker-dashboard.component').then((m) => m.MakerDashboardComponent),
      },
      {
        path: 'consents',
        data: { title: 'My Consents', makerCrumb: 'My Consents' },
        loadComponent: () =>
          import('./features/maker/my-consents/my-consents.component').then((m) => m.MyConsentsComponent),
      },
      {
        path: 'consents/new',
        data: { title: 'Create New Consent', makerCrumb: 'Create Consent' },
        loadComponent: () =>
          import('./features/maker/create-consent/create-consent.component').then((m) => m.CreateConsentComponent),
      },
      {
        path: 'consents/:id/edit',
        data: { title: 'Edit Consent', makerCrumb: 'Edit Consent' },
        loadComponent: () =>
          import('./features/maker/create-consent/create-consent.component').then((m) => m.CreateConsentComponent),
      },
      {
        path: 'audit',
        data: { title: 'Audit Trail', makerCrumb: 'Audit Trail' },
        loadComponent: () =>
          import('./features/maker/audit-trail/audit-trail.component').then((m) => m.AuditTrailComponent),
      },
    ],
  },
  {
    path: 'checker',
    canActivate: [checkerGuard],
    loadComponent: () =>
      import('./features/checker/checker-layout/checker-layout.component').then((m) => m.CheckerLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        data: { title: 'Dashboard', checkerCrumb: 'Dashboard' },
        loadComponent: () =>
          import('./features/checker/checker-dashboard/checker-dashboard.component').then(
            (m) => m.CheckerDashboardComponent,
          ),
      },
      {
        path: 'pending',
        data: { title: 'Pending Approvals', checkerCrumb: 'Pending Approvals' },
        loadComponent: () =>
          import('./features/checker/pending-approvals/pending-approvals.component').then(
            (m) => m.PendingApprovalsComponent,
          ),
      },
      {
        path: 'consents/:id/review',
        data: { title: 'Review Consent', checkerCrumb: 'Review' },
        loadComponent: () =>
          import('./features/checker/consent-review/consent-review.component').then((m) => m.ConsentReviewComponent),
      },
      {
        path: 'history',
        data: { title: 'Review History', checkerCrumb: 'Review History' },
        loadComponent: () =>
          import('./features/checker/review-history/review-history.component').then((m) => m.ReviewHistoryComponent),
      },
    ],
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.adminRoutes),
  },
  {
    path: 'public/consent/respond',
    loadComponent: () =>
      import('./features/public/public-consent-respond/public-consent-respond.component').then(
        (m) => m.PublicConsentRespondComponent,
      ),
  },
  { path: '**', redirectTo: 'login' },
];
