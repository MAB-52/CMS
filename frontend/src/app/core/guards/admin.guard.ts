import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

export const adminGuard: CanActivateFn = () => {
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

  if (role !== 'ADMIN') {
    notify.warning('Access denied', 'You do not have permission to access the Admin portal.');

    if (role === 'MAKER') {
      return router.parseUrl('/maker/dashboard');
    }

    if (role === 'CHECKER') {
      return router.parseUrl('/checker/dashboard');
    }

    return router.parseUrl('/login');
  }

  return true;
};