import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';
import { ConsentRule, ConsentRuleStatus, ConsentRuleType, PredefinedRuleScenario, WorkflowScheduleType, WorkflowReviewPayload, AudienceSegmentCode } from '../models/workflow.model';
import { NotificationService } from './notification.service';

// export interface ConsentRuleUpsertPayload {
//   ruleName: string;
//   ruleDescription?: string;
//   ruleType: ConsentRuleType;
//   predefinedScenario?: PredefinedRuleScenario | null;
//   triggerEvent?: string;
//   primarySegment: AudienceSegmentCode;
//   additionalSegmentCodes?: string[];
//   scheduleType: WorkflowScheduleType;
//   scheduledAt?: string | null;
//   recurringCron?: string | null;
//   broadcastChannels: string[];
//   consentTemplateId?: number | null;
// }


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
      const msg = (err.error as ApiResponse<unknown>)?.message || err.message || 'Request failed';
      // if (err.status !== 401) {
      //   this.notify.error(name, msg);
      // }
      if (err.status !== 401 && err.status !== 403) {
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

  publishLive(id: number): Observable<ApiResponse<ConsentRule>> {
    return this.http
      .post<ApiResponse<ConsentRule>>(`${environment.apiUrl}/consent-rules/${id}/publish-live`, {})
      .pipe(catchError(this.handle('Rule')));
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
