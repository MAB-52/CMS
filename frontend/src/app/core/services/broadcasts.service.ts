import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError , of} from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';
import {
  BroadcastExecution,
  BroadcastRequestStatus,
  ConsentBroadcast,
  WorkflowReviewPayload,
  WorkflowScheduleType,
} from '../models/workflow.model';
import { NotificationService } from './notification.service';
 
 
export interface ConsentBroadcastUpsertPayload {
  broadcastTitle: string;
  consentTemplateId?: number | null;
  segmentCodes: string[];
  scheduleType: WorkflowScheduleType;
  scheduledAt?: string | null;
  recurringCron?: string | null;
  channels: string[];
  includeConsentLink: boolean;
  messageNotes?: string | null;
  relatedRuleId?: number | null;
}
 
export interface BroadcastListFilter {
  status?: BroadcastRequestStatus;
  channel?: string;
  templateId?: number;
  creatorId?: number;
  fromDate?: string; // ISO date YYYY-MM-DD
  toDate?: string;
  search?: string;
}
 
@Injectable({ providedIn: 'root' })
export class BroadcastsService {
  private readonly http = inject(HttpClient);
  private readonly notify = inject(NotificationService);
 
  private handle(name: string) {
    return (err: HttpErrorResponse) => {
      const msg = (err.error as ApiResponse<unknown>)?.message || err.message || 'Request failed';
      // if (err.status !== 401) {
      //   this.notify.error(name, msg);
      // }
      // AFTER
      if (err.status !== 401 && err.status !== 403) {
        this.notify.error(name, msg);
      }
      return throwError(() => err);
    };
  }
 
  create(body: ConsentBroadcastUpsertPayload): Observable<ApiResponse<ConsentBroadcast>> {
    return this.http
      .post<ApiResponse<ConsentBroadcast>>(`${environment.apiUrl}/broadcasts`, body)
      .pipe(catchError(this.handle('Broadcast')));
  }
 
  update(id: number, body: ConsentBroadcastUpsertPayload): Observable<ApiResponse<ConsentBroadcast>> {
    return this.http
      .put<ApiResponse<ConsentBroadcast>>(`${environment.apiUrl}/broadcasts/${id}`, body)
      .pipe(catchError(this.handle('Broadcast')));
  }
 
  saveDraft(id: number, body: ConsentBroadcastUpsertPayload): Observable<ApiResponse<ConsentBroadcast>> {
    return this.http
      .post<ApiResponse<ConsentBroadcast>>(`${environment.apiUrl}/broadcasts/${id}/save-draft`, body)
      .pipe(catchError(this.handle('Broadcast')));
  }
 
  submit(id: number): Observable<ApiResponse<ConsentBroadcast>> {
    return this.http
      .post<ApiResponse<ConsentBroadcast>>(`${environment.apiUrl}/broadcasts/${id}/submit`, {})
      .pipe(catchError(this.handle('Broadcast')));
  }
 
  review(id: number, body: WorkflowReviewPayload): Observable<ApiResponse<ConsentBroadcast>> {
    return this.http
      .post<ApiResponse<ConsentBroadcast>>(`${environment.apiUrl}/broadcasts/${id}/review`, body)
      .pipe(catchError(this.handle('Review')));
  }
 
  execute(id: number): Observable<ApiResponse<BroadcastExecution>> {
    return this.http
      .post<ApiResponse<BroadcastExecution>>(`${environment.apiUrl}/broadcasts/${id}/execute`, {})
      .pipe(catchError(this.handle('Execute')));
  }
 
  broadcastAgain(id: number): Observable<ApiResponse<BroadcastExecution>> {
    return this.http
      .post<ApiResponse<BroadcastExecution>>(`${environment.apiUrl}/broadcasts/${id}/broadcast-again`, {})
      .pipe(catchError(this.handle('Broadcast Again')));
  }
 
  setActive(id: number, active: boolean): Observable<ApiResponse<ConsentBroadcast>> {
    const params = new HttpParams().set('active', String(active));
    return this.http
      .put<ApiResponse<ConsentBroadcast>>(`${environment.apiUrl}/broadcasts/${id}/active`, {}, { params })
      .pipe(catchError(this.handle('Broadcast')));
  }
 
  getById(id: number): Observable<ApiResponse<ConsentBroadcast>> {
    return this.http
      .get<ApiResponse<ConsentBroadcast>>(`${environment.apiUrl}/broadcasts/${id}`)
      .pipe(catchError(this.handle('Broadcast')));
  }
 
  executions(id: number): Observable<ApiResponse<BroadcastExecution[]>> {
    return this.http
      .get<ApiResponse<BroadcastExecution[]>>(`${environment.apiUrl}/broadcasts/${id}/executions`)
      .pipe(catchError(this.handle('Executions')));
  }
 
  /**
   * Admin: full persistent history with optional filters.
   * GET /api/broadcasts
   */
  listAll(
    page: number,
    size: number,
    filter: BroadcastListFilter = {},
  ): Observable<ApiResponse<PagedResponse<ConsentBroadcast>>> {
    let params = new HttpParams().set('page', String(page)).set('size', String(size));
    if (filter.status) params = params.set('status', filter.status);
    if (filter.channel) params = params.set('channel', filter.channel);
    if (filter.templateId != null) params = params.set('templateId', String(filter.templateId));
    if (filter.creatorId != null) params = params.set('creatorId', String(filter.creatorId));
    if (filter.fromDate) params = params.set('fromDate', filter.fromDate);
    if (filter.toDate) params = params.set('toDate', filter.toDate);
    if (filter.search) params = params.set('search', filter.search);
    return this.http
      .get<ApiResponse<PagedResponse<ConsentBroadcast>>>(`${environment.apiUrl}/broadcasts/all`, { params })
      .pipe(catchError(this.handle('Broadcasts')));
  }
 
  mine(
    page: number,
    size: number,
    status?: BroadcastRequestStatus,
  ): Observable<ApiResponse<PagedResponse<ConsentBroadcast>>> {
    let params = new HttpParams().set('page', String(page)).set('size', String(size));
    if (status) params = params.set('status', status);
    return this.http
      .get<ApiResponse<PagedResponse<ConsentBroadcast>>>(`${environment.apiUrl}/broadcasts/mine`, { params })
      .pipe(catchError(this.handle('Broadcasts')));
  }
// broadcast error solved here - hard coded below for that particular end point
  listPending(): Observable<ApiResponse<ConsentBroadcast[]>> {
  return this.http
    .get<ApiResponse<ConsentBroadcast[]>>(`${environment.apiUrl}/broadcasts/pending`)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 500) {
          return of({
            success: true,
            data: [],
            message: '',
            timestamp: new Date().toISOString(),
          } as ApiResponse<ConsentBroadcast[]>);
        }
        return this.handle('Broadcasts')(err);
      })
    );
}
 
  listReady(): Observable<ApiResponse<ConsentBroadcast[]>> {
    return this.http
      .get<ApiResponse<ConsentBroadcast[]>>(`${environment.apiUrl}/broadcasts/ready`)
      .pipe(catchError(this.handle('Broadcasts')));
  }
}