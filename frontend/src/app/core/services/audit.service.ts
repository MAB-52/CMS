import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';
import {
  AuditLogEntry,
  MakerTrailResponse,
  MakerTrailScope,
  ReviewDecisionFilter,
  ReviewHistoryResponse,
  ReviewTypeFilter,
} from '../models/audit.model';
import { LoggerService } from './logger.service';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class AuditService {
  private readonly http = inject(HttpClient);
  private readonly logger = inject(LoggerService);
  private readonly notify = inject(NotificationService);

  getMyActivity(page: number, size: number): Observable<ApiResponse<PagedResponse<AuditLogEntry>>> {
    const params = new HttpParams().set('page', String(page)).set('size', String(size));
    return this.http
      .get<ApiResponse<PagedResponse<AuditLogEntry>>>(`${environment.apiUrl}/audit/my-activity`, { params })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.logger.error('AuditService', 'getMyActivity failed', err);
          this.notify.error('Audit trail', 'Failed to load your activity.');
          throw err;
        }),
      );
  }

  /** The signed-in checker's review decisions, filtered server-side, with summary counts. */
  getMyReviews(params: {
    page: number;
    size: number;
    type?: ReviewTypeFilter;
    decision?: ReviewDecisionFilter;
    search?: string;
    from?: string;
    to?: string;
  }): Observable<ApiResponse<ReviewHistoryResponse>> {
    let hp = new HttpParams().set('page', String(params.page)).set('size', String(params.size));
    if (params.type) hp = hp.set('type', params.type);
    if (params.decision) hp = hp.set('decision', params.decision);
    if (params.search?.trim()) hp = hp.set('search', params.search.trim());
    if (params.from) hp = hp.set('from', params.from);
    if (params.to) hp = hp.set('to', params.to);
    return this.http
      .get<ApiResponse<ReviewHistoryResponse>>(`${environment.apiUrl}/audit/my-reviews`, { params: hp })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.logger.error('AuditService', 'getMyReviews failed', err);
          this.notify.error('Review history', 'Failed to load your review history.');
          throw err;
        }),
      );
  }

  getMakerTrail(params: {
    page: number;
    size: number;
    scope?: MakerTrailScope;
    type?: ReviewTypeFilter;
    search?: string;
    from?: string;
    to?: string;
  }): Observable<ApiResponse<MakerTrailResponse>> {
    let hp = new HttpParams().set('page', String(params.page)).set('size', String(params.size));
    if (params.scope) hp = hp.set('scope', params.scope);
    if (params.type) hp = hp.set('type', params.type);
    if (params.search?.trim()) hp = hp.set('search', params.search.trim());
    if (params.from) hp = hp.set('from', params.from);
    if (params.to) hp = hp.set('to', params.to);
    return this.http
      .get<ApiResponse<MakerTrailResponse>>(`${environment.apiUrl}/audit/my-trail`, { params: hp })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.logger.error('AuditService', 'getMakerTrail failed', err);
          this.notify.error('Audit trail', 'Failed to load your audit trail.');
          throw err;
        }),
      );
  }

  getConsentAuditTrail(id: number): Observable<ApiResponse<AuditLogEntry[]>> {
    return this.http.get<ApiResponse<AuditLogEntry[]>>(`${environment.apiUrl}/audit/consent/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.logger.error('AuditService', 'getConsentAuditTrail failed', err);
        this.notify.error('Audit trail', 'Failed to load consent activity.');
        throw err;
      }),
    );
  }

  getEntityAuditTrail(entityType: string, id: number): Observable<ApiResponse<AuditLogEntry[]>> {
    const enc = encodeURIComponent(entityType);
    return this.http.get<ApiResponse<AuditLogEntry[]>>(`${environment.apiUrl}/audit/entity/${enc}/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.logger.error('AuditService', 'getEntityAuditTrail failed', err);
        this.notify.error('Audit trail', 'Failed to load activity for this item.');
        throw err;
      }),
    );
  }
}
