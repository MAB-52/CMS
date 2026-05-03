import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoggerService } from '../services/logger.service';
import { NotificationService } from '../services/notification.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const logger = inject(LoggerService);
  const notify = inject(NotificationService);

  if (req.url.includes('/auth/login')) {
    return next(req);
  }

  const token = auth.getToken();
  const authReq =
    token && !auth.isTokenExpired(token)
      ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
      : req;

  return next(authReq).pipe(
    catchError((err) => {
      const isPublicApi = req.url.includes('/api/public/');
      if (err.status === 401 && !req.url.includes('/auth/login') && !isPublicApi) {
        logger.warn('JwtInterceptor', '401 received — logging out');
        notify.warning('Session expired', 'Please sign in again to continue.');
        auth.logout({ sessionExpired: true });
      } else if (err.status === 403) {
        logger.warn('JwtInterceptor', `Access denied on ${req.url}`);
      } else if (err.status === 0) {
        logger.error('JwtInterceptor', 'Network unreachable', err);
      }
      return throwError(() => err);
    }),
  );
};
