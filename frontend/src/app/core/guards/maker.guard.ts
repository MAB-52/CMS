import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

// Redirects are returned as UrlTrees (not navigateByUrl) so a Back-button navigation is
// replaced in history instead of stacking a new entry — no Back/redirect loop after logout.
export const makerGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const notify = inject(NotificationService);
  if (!auth.isLoggedIn()) {
    if (auth.getToken()) {
      // Had a session, but the token expired or is invalid
      auth.logout({ sessionExpired: true });
      return false;
    }
    notify.warning('Session Required', 'Please log in to continue.');
    return router.parseUrl('/login');
  }
  const role = auth.getRole();
  if (role === 'CHECKER') {
    notify.warning('Maker area only', '⚠️ Maker area only. Redirected to your dashboard.');
    return router.parseUrl('/checker/dashboard');
  }
  if (role === 'ADMIN') {
    notify.warning('Admin portal', 'Open the Admin console from your dashboard.');
    return router.parseUrl('/admin/dashboard');
  }
  if (role !== 'MAKER') {
    notify.warning('Access denied', 'You do not have access to the Maker portal.');
    return router.parseUrl('/login');
  }
  return true;
};
