import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Sends cookies (CONSENT_SESSION) on public consent API calls only.
 */
export const publicConsentCredentialsInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('/api/public/consent')) {
    return next(req.clone({ withCredentials: true }));
  }
  return next(req);
};
