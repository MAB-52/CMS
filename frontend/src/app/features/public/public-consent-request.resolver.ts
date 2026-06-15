import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../../core/models/api-response.model';
import { PublicConsentInviteDetail } from '../../core/models/public-consent-invite.model';

export type PublicConsentRespondResolve =
  | { status: 'ok'; detail: PublicConsentInviteDetail }
  | { status: 'session-error' }
  | { status: 'load-error'; message: string };

export const publicConsentRequestResolver: ResolveFn<PublicConsentRespondResolve> = () => {
  const http = inject(HttpClient);
  const url = `${environment.apiUrl}/public/consent/request`;
  return http.get<ApiResponse<PublicConsentInviteDetail>>(url, { withCredentials: true }).pipe(
    map((res) => {
      if (!res.success || !res.data || res.data.state === 'NOT_FOUND') {
        return {
          status: 'load-error' as const,
          message: res.message || 'This consent link is not valid.',
        };
      }
      return { status: 'ok' as const, detail: res.data };
    }),
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        return of({ status: 'session-error' as const });
      }
      return of({
        status: 'load-error' as const,
        message: 'Something went wrong. Please try again.',
      });
    }),
  );
};
