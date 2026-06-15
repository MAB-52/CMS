import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { adminGuard } from './core/guards/admin.guard';
import { makerGuard } from './core/guards/maker.guard';
import { checkerGuard } from './core/guards/checker.guard';
import { ForgotPasswordComponent } from './features/auth/login/forget-password/forgot-password.component';
import { publicConsentRequestResolver } from './features/public/public-consent-request.resolver';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'forgot-password', component: ForgotPasswordComponent},
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
        path: 'rules',
        data: { title: 'Rule Engine', makerCrumb: 'Rules' },
        loadComponent: () =>
          import('./features/maker/maker-rules-workbench/maker-rules-workbench.component').then(
            (m) => m.MakerRulesWorkbenchComponent,
          ),
      },
      {
        path: 'rules/:id',
        data: { title: 'Rule', makerCrumb: 'Rules' },
        loadComponent: () =>
          import('./features/maker/maker-rule-edit/maker-rule-edit.component').then((m) => m.MakerRuleEditComponent),
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
        path: 'rules/pending',
        data: { title: 'Pending Rules', checkerCrumb: 'Rules' },
        loadComponent: () =>
          import('./features/checker/checker-rules-queue/checker-rules-queue.component').then(
            (m) => m.CheckerRulesQueueComponent,
          ),
      },
      {
        path: 'rules/:id/review',
        data: { title: 'Review Rule', checkerCrumb: 'Review Rule' },
        loadComponent: () =>
          import('./features/checker/checker-rule-review/checker-rule-review.component').then(
            (m) => m.CheckerRuleReviewComponent,
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
    path: 'public/consent/verify',
    loadComponent: () =>
      import('./features/public/public-consent-verify/public-consent-verify.component').then(
        (m) => m.PublicConsentVerifyComponent,
      ),
  },
  {
    path: 'public/consent/respond',
    resolve: { consent: publicConsentRequestResolver },
    loadComponent: () =>
      import('./features/public/public-consent-respond/public-consent-respond.component').then(
        (m) => m.PublicConsentRespondComponent,
      ),
  },
  {
    path: 'public/consent/translation',
    loadComponent: () =>
      import('./features/public/public-consent-translation/public-consent-translation.component').then(
        (m) => m.PublicConsentTranslationComponent,
      ),
  },
  { path: '**', redirectTo: 'login' },
];
