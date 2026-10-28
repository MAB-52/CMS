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
        if (auth.isLoggingOut || !token) {
          return throwError(() => err);
        }
 
        const errorCode = err.error?.errorCode;
 
        if (errorCode === 'ACCOUNT_INACTIVE') {
          logger.warn('JwtInterceptor', '401 received — account deactivated');
          notify.warnOnce(
            'account-inactive',
            'Your account has been deactivated. Please contact your administrator.',
          );
          auth.logout({ sessionExpired: true });
        } else if (errorCode === 'SESSION_INVALIDATED_ELSEWHERE') {
          logger.warn('JwtInterceptor', '401 received — session invalidated by another login');
          notify.warnOnce(
            'session-invalidated',
            'You were logged out because your account was accessed from another device or location.',
          );
          auth.logout({ reason: 'session_invalidated' });
        } else {
          logger.warn('JwtInterceptor', '401 received — logging out');
          notify.warnOnce('session-expired', 'Session expired. Please sign in again.');
          auth.logout({ sessionExpired: true });
        }
      } else if (err.status === 403) {
        logger.warn('JwtInterceptor', `Access denied on ${req.url}`);
      } else if (err.status === 0) {
        logger.error('JwtInterceptor', 'Network unreachable', err);
      }
      return throwError(() => err);
    }),
  );
};