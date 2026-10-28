import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';
import { ConsentRule, ConsentRuleStatus, ConsentRuleType, PredefinedRuleScenario, WorkflowScheduleType, WorkflowReviewPayload, AudienceSegmentCode } from '../models/workflow.model';
import { ConsentRuleLinkedDraftPayload } from '../models/consent.model';
import { NotificationService } from './notification.service';

export interface ConsentRuleUpsertPayload {
  ruleName: string;
  ruleDescription?: string;
  ruleType: ConsentRuleType;
  predefinedScenario?: PredefinedRuleScenario | null;
  triggerEvent?: string;
  primarySegment: AudienceSegmentCode;
  additionalSegmentCodes?: string[];
  scheduleType: WorkflowScheduleType;
  scheduledAt?: string | null;
  recurringCron?: string | null;
  broadcastChannels: string[];
  consentTemplateId?: number | null;
  selectedSegments?: string[];   // ← add this
}

@Injectable({ providedIn: 'root' })
export class ConsentRulesService {
  private readonly http = inject(HttpClient);
  private readonly notify = inject(NotificationService);

  private handle(name: string) {
    return (err: HttpErrorResponse) => {
      const body = err.error as ApiResponse<unknown> | undefined;
      const code = body?.errorCode;
      let msg = body?.message || err.message || 'Request failed';
      if (err.status === 0) {
        msg = 'Cannot reach the server. Check your connection — your changes are still on this page.';
      } else if (code === 'VALIDATION_ERROR' && body?.data && typeof body.data === 'object') {
        msg = Object.values(body.data as Record<string, string>).join('; ') || msg;
      }
      if (err.status !== 401 && (err.status !== 403 || code === 'UNAUTHORIZED_ACTION')) {
        this.notify.error(name, msg);
      }
      return throwError(() => err);
    };
  }

  create(body: ConsentRuleUpsertPayload): Observable<ApiResponse<ConsentRule>> {
    return this.http.post<ApiResponse<ConsentRule>>(`${environment.apiUrl}/consent-rules`, body).pipe(
      catchError(this.handle('Rule')),
    );
  }

  update(id: number, body: ConsentRuleUpsertPayload): Observable<ApiResponse<ConsentRule>> {
    return this.http.put<ApiResponse<ConsentRule>>(`${environment.apiUrl}/consent-rules/${id}`, body).pipe(
      catchError(this.handle('Rule')),
    );
  }

  saveDraft(id: number, body: ConsentRuleUpsertPayload): Observable<ApiResponse<ConsentRule>> {
    return this.http
      .post<ApiResponse<ConsentRule>>(`${environment.apiUrl}/consent-rules/${id}/save-draft`, body)
      .pipe(catchError(this.handle('Rule')));
  }

  /**
   * Saves a draft of a linked-workflow rule WITHOUT a consent template.
   * The template is auto-wired on the backend after the paired consent is approved,
   * so this path must never send/validate consentTemplateId.
   */
  saveLinkedDraft(id: number, body: ConsentRuleLinkedDraftPayload): Observable<ApiResponse<ConsentRule>> {
    return this.http
      .post<ApiResponse<ConsentRule>>(`${environment.apiUrl}/consent-rules/${id}/save-linked-draft`, body)
      .pipe(catchError(this.handle('Rule')));
  }

  submit(id: number): Observable<ApiResponse<ConsentRule>> {
    return this.http
      .post<ApiResponse<ConsentRule>>(`${environment.apiUrl}/consent-rules/${id}/submit`, {})
      .pipe(catchError(this.handle('Rule')));
  }

  review(id: number, body: WorkflowReviewPayload): Observable<ApiResponse<ConsentRule>> {
    return this.http
      .post<ApiResponse<ConsentRule>>(`${environment.apiUrl}/consent-rules/${id}/review`, body)
      .pipe(catchError(this.handle('Review')));
  }

  getById(id: number): Observable<ApiResponse<ConsentRule>> {
    return this.http.get<ApiResponse<ConsentRule>>(`${environment.apiUrl}/consent-rules/${id}`).pipe(
      catchError(this.handle('Rule')),
    );
  }

  mine(page: number, size: number, status?: ConsentRuleStatus): Observable<ApiResponse<PagedResponse<ConsentRule>>> {
    let params = new HttpParams().set('page', String(page)).set('size', String(size));
    if (status) {
      params = params.set('status', status);
    }
    return this.http.get<ApiResponse<PagedResponse<ConsentRule>>>(`${environment.apiUrl}/consent-rules/mine`, { params }).pipe(
      catchError(this.handle('Rules')),
    );
  }

  listPending(): Observable<ApiResponse<ConsentRule[]>> {
    return this.http.get<ApiResponse<ConsentRule[]>>(`${environment.apiUrl}/consent-rules/pending`).pipe(
      catchError(this.handle('Rules')),
    );
  }
}
