import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

// Redirects are returned as UrlTrees (not navigateByUrl) so a Back-button navigation is
// replaced in history instead of stacking a new entry — no Back/redirect loop after logout.
export const checkerGuard: CanActivateFn = () => {
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
  if (role === 'MAKER') {
    notify.warning('Access denied', 'You do not have permission to access the Checker portal.');
    return router.parseUrl('/maker/dashboard');
  }
  if (role === 'ADMIN') {
    notify.warning('Access denied', 'You do not have permission to access the Checker portal.');
    return router.parseUrl('/admin/dashboard');
  }
  if (role !== 'CHECKER') {
    notify.warning('Access denied', 'You do not have access to the Checker portal.');
    return router.parseUrl('/login');
  }
  return true;
};
