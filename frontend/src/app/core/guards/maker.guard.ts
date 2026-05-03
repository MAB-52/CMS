import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

export const makerGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const notify = inject(NotificationService);
  if (!auth.isLoggedIn()) {
    notify.warning('Session Required', 'Please log in to continue.');
    void router.navigateByUrl('/login');
    return false;
  }
  const role = auth.getRole();
  if (role === 'CHECKER') {
    notify.warning('Maker area only', '⚠️ Maker area only. Redirected to your dashboard.');
    void router.navigateByUrl('/checker/dashboard');
    return false;
  }
  if (role === 'ADMIN') {
    notify.warning('Admin portal', 'Open the Admin console from your dashboard.');
    void router.navigateByUrl('/admin/dashboard');
    return false;
  }
  if (role !== 'MAKER') {
    notify.warning('Access denied', 'You do not have access to the Maker portal.');
    void router.navigateByUrl('/login');
    return false;
  }
  return true;
};
