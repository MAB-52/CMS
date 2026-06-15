// import { Injectable, inject } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';
// import { environment } from '../../../environments/environment';
// import { ApiResponse } from '../models/api-response.model';
// import { ConsentRule } from '../models/workflow.model';
// import { RuleAudiencePreviewBreakdown } from '../models/customer-consent-record.model';
// import { NotificationService } from './notification.service';

// export interface PagedResponse<T> {
//   content: T[];
//   totalElements: number;
//   totalPages: number;
//   currentPage: number;
//   pageSize: number;
//   hasNext: boolean;
//   hasPrevious: boolean;
// }

// export interface AdminRuleEngineDashboardStats {
//   approvedRulesCount: number;
//   activeForExecutionCount: number;
//   inactiveForExecutionCount: number;
//   pendingImmediateFirstRunCount: number;
//   executedInLast24HoursCount: number;
//   recentExecutions: ConsentRuleExecutionRow[];
// }

// export interface ConsentRuleExecutionRow {
//   id: number;
//   consentRuleId: number;
//   ruleName: string;
//   triggerType: string;
//   triggeredByUserId?: number | null;
//   triggeredByName?: string | null;
//   status: 'SUCCESS' | 'FAILED' | 'PARTIAL';
//   audienceEvaluated: number;
//   eligibleCount: number;
//   channelResults?: Record<string, unknown> | null;
//   summaryNotes?: string | null;
//   startedAt: string;
//   completedAt?: string | null;
//   chunksTotal?: number | null;
//   chunksCompleted?: number | null;
//   progressNotes?: string | null;
// }

// @Injectable({ providedIn: 'root' })
// export class AdminRuleEngineService {
//   private readonly http = inject(HttpClient);
//   private readonly notify = inject(NotificationService);

//   private readonly base = `${environment.apiUrl}/admin/rule-engine`;

//   private handle(name: string) {
//     return (err: HttpErrorResponse) => {
//       const msg = (err.error as ApiResponse<unknown>)?.message || err.message || 'Request failed';
//       if (err.status !== 401) {
//         this.notify.error(name, msg);
//       }
//       return throwError(() => err);
//     };
//   }

//   getDashboardStats(): Observable<ApiResponse<AdminRuleEngineDashboardStats>> {
//     return this.http
//       .get<ApiResponse<AdminRuleEngineDashboardStats>>(`${this.base}/dashboard-stats`)
//       .pipe(catchError(this.handle('Rule engine')));
//   }

//   listApprovedRules(page = 0, size = 10): Observable<ApiResponse<PagedResponse<ConsentRule>>> {
//     const params = new HttpParams()
//       .set('page', String(page))
//       .set('size', String(size));
//     return this.http
//       .get<ApiResponse<PagedResponse<ConsentRule>>>(`${this.base}/approved-rules`, { params })
//       .pipe(catchError(this.handle('Rules')));
//   }

//   setExecutionActive(ruleId: number, active: boolean): Observable<ApiResponse<unknown>> {
//     const params = new HttpParams().set('active', String(active));
//     return this.http
//       .post<ApiResponse<unknown>>(`${this.base}/rules/${ruleId}/execution-active`, {}, { params })
//       .pipe(catchError(this.handle('Rule')));
//   }

//   previewAudience(ruleId: number): Observable<ApiResponse<number>> {
//     return this.http
//       .get<ApiResponse<number>>(`${this.base}/rules/${ruleId}/audience-preview`)
//       .pipe(catchError(this.handle('Audience')));
//   }

//   previewAudienceBreakdown(ruleId: number): Observable<ApiResponse<RuleAudiencePreviewBreakdown>> {
//     return this.http
//       .get<ApiResponse<RuleAudiencePreviewBreakdown>>(`${this.base}/rules/${ruleId}/audience-preview-breakdown`)
//       .pipe(catchError(this.handle('Audience')));
//   }

//   manualRun(ruleId: number): Observable<ApiResponse<ConsentRuleExecutionRow>> {
//     return this.http
//       .post<ApiResponse<ConsentRuleExecutionRow>>(`${this.base}/rules/${ruleId}/manual-run`, {})
//       .pipe(catchError(this.handle('Execution')));
//   }

//   listExecutions(ruleId: number): Observable<ApiResponse<ConsentRuleExecutionRow[]>> {
//     return this.http
//       .get<ApiResponse<ConsentRuleExecutionRow[]>>(`${this.base}/rules/${ruleId}/executions`)
//       .pipe(catchError(this.handle('Executions')));
//   }

//   listAllExecutionsPaged(page = 0, size = 10): Observable<ApiResponse<PagedResponse<ConsentRuleExecutionRow>>> {
//     const params = new HttpParams()
//       .set('page', String(page))
//       .set('size', String(size));
//     return this.http
//       .get<ApiResponse<PagedResponse<ConsentRuleExecutionRow>>>(`${this.base}/executions`, { params })
//       .pipe(catchError(this.handle('Executions')));
//   }
// }



import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { ConsentRule } from '../models/workflow.model';
import { RuleAudiencePreviewBreakdown } from '../models/customer-consent-record.model';
import { NotificationService } from './notification.service';

export interface PagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface AdminRuleEngineDashboardStats {
  approvedRulesCount: number;
  activeForExecutionCount: number;
  inactiveForExecutionCount: number;
  pendingImmediateFirstRunCount: number;
  executedInLast24HoursCount: number;
  recentExecutions: ConsentRuleExecutionRow[];
}

export interface ConsentRuleExecutionRow {
  id: number;
  consentRuleId: number;
  ruleName: string;
  triggerType: string;
  triggeredByUserId?: number | null;
  triggeredByName?: string | null;
  status: 'SUCCESS' | 'FAILED' | 'PARTIAL';
  audienceEvaluated: number;
  eligibleCount: number;
  channelResults?: Record<string, unknown> | null;
  summaryNotes?: string | null;
  startedAt: string;
  completedAt?: string | null;
  chunksTotal?: number | null;
  chunksCompleted?: number | null;
  progressNotes?: string | null;
}

@Injectable({ providedIn: 'root' })
export class AdminRuleEngineService {
  private readonly http = inject(HttpClient);
  private readonly notify = inject(NotificationService);

  private readonly base = `${environment.apiUrl}/admin/rule-engine`;

  private handle(name: string) {
    return (err: HttpErrorResponse) => {
      const msg = (err.error as ApiResponse<unknown>)?.message || err.message || 'Request failed';
      if (err.status !== 401) {
        this.notify.error(name, msg);
      }
      return throwError(() => err);
    };
  }

  getDashboardStats(): Observable<ApiResponse<AdminRuleEngineDashboardStats>> {
    return this.http
      .get<ApiResponse<AdminRuleEngineDashboardStats>>(`${this.base}/dashboard-stats`)
      .pipe(catchError(this.handle('Rule engine')));
  }

  listApprovedRules(page = 0, size = 10): Observable<ApiResponse<PagedResponse<ConsentRule>>> {
    const params = new HttpParams()
      .set('page', String(page))
      .set('size', String(size));
    return this.http
      .get<ApiResponse<PagedResponse<ConsentRule>>>(`${this.base}/approved-rules`, { params })
      .pipe(catchError(this.handle('Rules')));
  }

  setExecutionActive(ruleId: number, active: boolean): Observable<ApiResponse<unknown>> {
    const params = new HttpParams().set('active', String(active));
    return this.http
      .post<ApiResponse<unknown>>(`${this.base}/rules/${ruleId}/execution-active`, {}, { params })
      .pipe(catchError(this.handle('Rule')));
  }

  previewAudience(ruleId: number): Observable<ApiResponse<number>> {
    return this.http
      .get<ApiResponse<number>>(`${this.base}/rules/${ruleId}/audience-preview`)
      .pipe(catchError(this.handle('Audience')));
  }

  previewAudienceBreakdown(ruleId: number): Observable<ApiResponse<RuleAudiencePreviewBreakdown>> {
    return this.http
      .get<ApiResponse<RuleAudiencePreviewBreakdown>>(`${this.base}/rules/${ruleId}/audience-preview-breakdown`)
      .pipe(catchError(this.handle('Audience')));
  }

  manualRun(ruleId: number): Observable<ApiResponse<ConsentRuleExecutionRow>> {
    return this.http
      .post<ApiResponse<ConsentRuleExecutionRow>>(`${this.base}/rules/${ruleId}/manual-run`, {})
      .pipe(catchError(this.handle('Execution')));
  }

  listExecutions(ruleId: number): Observable<ApiResponse<ConsentRuleExecutionRow[]>> {
    return this.http
      .get<ApiResponse<ConsentRuleExecutionRow[]>>(`${this.base}/rules/${ruleId}/executions`)
      .pipe(catchError(this.handle('Executions')));
  }

  listAllExecutionsPaged(page = 0, size = 10): Observable<ApiResponse<PagedResponse<ConsentRuleExecutionRow>>> {
    const params = new HttpParams()
      .set('page', String(page))
      .set('size', String(size));
    return this.http
      .get<ApiResponse<PagedResponse<ConsentRuleExecutionRow>>>(`${this.base}/executions`, { params })
      .pipe(catchError(this.handle('Executions')));
  }
}