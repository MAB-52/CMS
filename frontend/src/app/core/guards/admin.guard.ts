import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const notify = inject(NotificationService);
  if (!auth.isLoggedIn()) {
    notify.warning('Session Required', 'Please log in to continue.');
    void router.navigateByUrl('/login');
    return false;
  }
  const role = auth.getRole();
  if (role !== 'ADMIN') {
    notify.warning('Admin only', 'You do not have access to the Admin portal.');
    if (role === 'MAKER') {
      void router.navigateByUrl('/maker/dashboard');
    } else if (role === 'CHECKER') {
      void router.navigateByUrl('/checker/dashboard');
    } else {
      void router.navigateByUrl('/login');
    }
    return false;
  }
  return true;
};
