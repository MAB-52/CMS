import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoggerService } from '../services/logger.service';
 
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const logger = inject(LoggerService);
 
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
          auth.logout({ reason: 'account_inactive' });
        } else if (errorCode === 'ACCOUNT_CHANGED') {
          logger.warn('JwtInterceptor', '401 received — sign-in details changed');
          auth.logout({ reason: 'account_changed' });
        } else if (errorCode === 'SESSION_INVALIDATED_ELSEWHERE') {
          logger.warn('JwtInterceptor', '401 received — session invalidated');
          auth.logout({ reason: 'session_invalidated' });
        } else {
          logger.warn('JwtInterceptor', '401 received — logging out');
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