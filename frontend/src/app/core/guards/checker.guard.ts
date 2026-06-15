import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

export const checkerGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const notify = inject(NotificationService);
  if (!auth.isLoggedIn()) {
    notify.warning('Session Required', 'Please log in to continue.');
    void router.navigateByUrl('/login');
    return false;
  }
  const role = auth.getRole();
  if (role === 'MAKER') {
    notify.warning('Checker area only', '⚠️ Checker area only. Redirected to your dashboard.');
    void router.navigateByUrl('/maker/dashboard');
    return false;
  }
  if (role === 'ADMIN') {
    notify.warning('Admin portal', 'Open the Admin console from your dashboard.');
    void router.navigateByUrl('/admin/dashboard');
    return false;
  }
  if (role !== 'CHECKER') {
    notify.warning('Access denied', 'You do not have access to the Checker portal.');
    void router.navigateByUrl('/login');
    return false;
  }
  return true;
};
