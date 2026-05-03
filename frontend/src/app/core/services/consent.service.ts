import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';
import {
  CheckerStats,
  Consent,
  ConsentCategory,
  ConsentCreatePayload,
  ConsentDiff,
  ConsentStatus,
  MakerStats,
} from '../models/consent.model';
import { LoggerService } from './logger.service';
import { NotificationService } from './notification.service';

export interface ConsentServiceError extends HttpErrorResponse {
  userMessage?: string;
  errorCode?: string;
}

@Injectable({ providedIn: 'root' })
export class ConsentService {
  private readonly http = inject(HttpClient);
  private readonly logger = inject(LoggerService);
  private readonly notify = inject(NotificationService);

  parseDeliveryChannels(value: unknown): string[] {
    if (Array.isArray(value)) {
      return value.map((v) => String(v));
    }
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value) as unknown;
        if (Array.isArray(parsed)) {
          return parsed.map((v) => String(v));
        }
      } catch {
        return [];
      }
    }
    return [];
  }

  normalizeConsent(c: Consent): Consent {
    return {
      ...c,
      deliveryChannels: this.parseDeliveryChannels(c.deliveryChannels as unknown),
      tagsUsed: Array.isArray(c.tagsUsed) ? [...c.tagsUsed] : this.parseDeliveryChannels(c.tagsUsed as unknown),
    };
  }

  private mapPaged(res: ApiResponse<PagedResponse<Consent>>): ApiResponse<PagedResponse<Consent>> {
    if (!res.data?.content) {
      return res;
    }
    return {
      ...res,
      data: {
        ...res.data,
        content: res.data.content.map((x) => this.normalizeConsent(x)),
      },
    };
  }

  private handleError(operation: string) {
    return (err: HttpErrorResponse) => {
      const body = err.error as ApiResponse<unknown> | undefined;
      const msg = body?.message || err.message || 'Unknown error';
      const code = body?.errorCode || 'UNKNOWN_ERROR';
      this.logger.error(
        'ConsentService',
        `Operation '${operation}' failed | HTTP ${err.status} | Code: ${code} | Msg: ${msg}`,
        err,
      );
      let userMessage = msg;
      if (err.status === 401) {
        userMessage = 'Session expired. Please log in again.';
      } else if (err.status === 403) {
        userMessage = 'You do not have permission to perform this action.';
      } else if (err.status === 404) {
        userMessage = 'The requested consent could not be found.';
      } else if (err.status === 409 && code === 'INVALID_STATE_TRANSITION') {
        userMessage = msg;
      } else if (err.status === 409 && code === 'DUPLICATE_CONSENT') {
        userMessage = msg;
      } else if (err.status === 400) {
        userMessage = msg || 'Please check your inputs.';
      } else if (err.status === 0) {
        userMessage = 'Cannot reach the server. Check your connection.';
      } else {
        userMessage = msg || 'Something went wrong.';
      }
      if (err.status !== 401) {
        this.notify.error('Request failed', userMessage);
      }
      const enriched: ConsentServiceError = Object.assign(err, { userMessage, errorCode: code });
      return throwError(() => enriched);
    };
  }

  getMyConsents(page: number, size: number, status?: ConsentStatus): Observable<ApiResponse<PagedResponse<Consent>>> {
    let params = new HttpParams().set('page', String(page)).set('size', String(size));
    if (status) {
      params = params.set('status', status);
    }
    return this.http
      .get<ApiResponse<PagedResponse<Consent>>>(`${environment.apiUrl}/consents/my-consents`, { params })
      .pipe(
        map((r) => this.mapPaged(r)),
        tap((res) => this.logger.debug('ConsentService', `getMyConsents count=${res.data?.content?.length ?? 0}`)),
        catchError(this.handleError('getMyConsents')),
      );
  }

  getMakerStats(): Observable<ApiResponse<MakerStats>> {
    return this.http.get<ApiResponse<MakerStats>>(`${environment.apiUrl}/consents/stats/maker`).pipe(
      catchError(this.handleError('getMakerStats')),
    );
  }

  getCheckerStats(): Observable<ApiResponse<CheckerStats>> {
    return this.http.get<ApiResponse<CheckerStats>>(`${environment.apiUrl}/consents/stats/checker`).pipe(
      catchError(this.handleError('getCheckerStats')),
    );
  }

  getAllConsents(
    page: number,
    size: number,
    status?: ConsentStatus,
    category?: ConsentCategory,
  ): Observable<ApiResponse<PagedResponse<Consent>>> {
    let params = new HttpParams().set('page', String(page)).set('size', String(size));
    if (status) {
      params = params.set('status', status);
    }
    if (category) {
      params = params.set('category', category);
    }
    return this.http
      .get<ApiResponse<PagedResponse<Consent>>>(`${environment.apiUrl}/consents`, { params })
      .pipe(
        map((r) => this.mapPaged(r)),
        tap((res) =>
          this.logger.debug('ConsentService', `getAllConsents count=${res.data?.content?.length ?? 0}`),
        ),
        catchError(this.handleError('getAllConsents')),
      );
  }

  getConsentById(id: number): Observable<ApiResponse<Consent>> {
    return this.http.get<ApiResponse<Consent>>(`${environment.apiUrl}/consents/${id}`).pipe(
      map((res) => (res.data ? { ...res, data: this.normalizeConsent(res.data) } : res)),
      tap((res) => this.logger.debug('ConsentService', `getConsentById name=${res.data?.consentName}`)),
      catchError(this.handleError('getConsentById')),
    );
  }

  createConsent(data: ConsentCreatePayload): Observable<ApiResponse<Consent>> {
    const payload = { ...data, deliveryChannels: [...(data.deliveryChannels || [])] };
    return this.http.post<ApiResponse<Consent>>(`${environment.apiUrl}/consents`, payload).pipe(
      map((res) => (res.data ? { ...res, data: this.normalizeConsent(res.data) } : res)),
      tap((res) => this.logger.debug('ConsentService', `createConsent id=${res.data?.consentId}`)),
      catchError(this.handleError('createConsent')),
    );
  }

  updateConsent(id: number, data: ConsentCreatePayload): Observable<ApiResponse<Consent>> {
    const payload = { ...data, deliveryChannels: [...(data.deliveryChannels || [])] };
    return this.http.put<ApiResponse<Consent>>(`${environment.apiUrl}/consents/${id}`, payload).pipe(
      map((res) => (res.data ? { ...res, data: this.normalizeConsent(res.data) } : res)),
      tap((res) => this.logger.debug('ConsentService', `updateConsent version=${res.data?.version}`)),
      catchError(this.handleError('updateConsent')),
    );
  }

  deleteConsent(id: number): Observable<ApiResponse<void>> {
    return this.http
      .delete<ApiResponse<void>>(`${environment.apiUrl}/consents/${id}`)
      .pipe(catchError(this.handleError('deleteConsent')));
  }

  saveDraft(id: number, data: ConsentCreatePayload): Observable<ApiResponse<Consent>> {
    const headers = new HttpHeaders().set('X-Skip-Loading', 'true');
    const payload = { ...data, deliveryChannels: [...(data.deliveryChannels || [])] };
    return this.http
      .post<ApiResponse<Consent>>(`${environment.apiUrl}/consents/${id}/save-draft`, payload, { headers })
      .pipe(
        map((res) => (res.data ? { ...res, data: this.normalizeConsent(res.data) } : res)),
        tap(() =>
          this.logger.debug(
            'ConsentService',
            `saveDraft Auto-saved at ${new Date().toLocaleTimeString('en-IN', { hour12: false })}`,
          ),
        ),
        catchError(this.handleError('saveDraft')),
      );
  }

  submitForApproval(id: number): Observable<ApiResponse<Consent>> {
    return this.http.post<ApiResponse<Consent>>(`${environment.apiUrl}/consents/${id}/submit`, {}).pipe(
      map((res) => (res.data ? { ...res, data: this.normalizeConsent(res.data) } : res)),
      tap((res) => this.logger.debug('ConsentService', `submitForApproval id=${res.data?.consentId}`)),
      catchError(this.handleError('submitForApproval')),
    );
  }

  getPendingApprovals(): Observable<ApiResponse<Consent[]>> {
    return this.http.get<ApiResponse<Consent[]>>(`${environment.apiUrl}/consents/pending-approval`).pipe(
      map((res) =>
        res.data
          ? {
              ...res,
              data: res.data.map((c) => this.normalizeConsent(c)),
            }
          : res,
      ),
      tap((res) => this.logger.debug('ConsentService', `getPendingApprovals count=${res.data?.length ?? 0}`)),
      catchError(this.handleError('getPendingApprovals')),
    );
  }

  publishConsent(id: number): Observable<ApiResponse<Consent>> {
    return this.reviewConsent(id, 'PUBLISH');
  }

  reviewConsent(
    id: number,
    action: string,
    reason?: string,
    revisionMessage?: string,
  ): Observable<ApiResponse<Consent>> {
    return this.http
      .post<ApiResponse<Consent>>(`${environment.apiUrl}/consents/${id}/review`, {
        action,
        reason,
        revisionMessage,
      })
      .pipe(
        map((res) => (res.data ? { ...res, data: this.normalizeConsent(res.data) } : res)),
        tap((res) =>
          this.logger.debug(
            'ConsentService',
            `reviewConsent Action ${action} → status ${res.data?.status ?? 'unknown'}`,
          ),
        ),
        catchError(this.handleError('reviewConsent')),
      );
  }

  getConsentDiff(id: number): Observable<ApiResponse<ConsentDiff>> {
    return this.http.get<ApiResponse<ConsentDiff>>(`${environment.apiUrl}/consents/${id}/diff`).pipe(
      tap((res) => this.logger.debug('ConsentService', `getConsentDiff count=${res.data?.differences?.length ?? 0}`)),
      catchError(this.handleError('getConsentDiff')),
    );
  }

  generateConsentId(): Observable<ApiResponse<{ consentId: string }>> {
    return this.http
      .get<ApiResponse<{ consentId: string }>>(`${environment.apiUrl}/consents/generate-id`)
      .pipe(catchError(this.handleError('generateConsentId')));
  }

  getVersionHistory(id: number): Observable<ApiResponse<unknown[]>> {
    return this.http
      .get<ApiResponse<unknown[]>>(`${environment.apiUrl}/consents/${id}/versions`)
      .pipe(catchError(this.handleError('getVersionHistory')));
  }
}
