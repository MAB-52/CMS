import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';
import { AuditLogEntry } from '../models/audit.model';
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

  getConsentAuditTrail(id: number): Observable<ApiResponse<AuditLogEntry[]>> {
    return this.http.get<ApiResponse<AuditLogEntry[]>>(`${environment.apiUrl}/audit/consent/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.logger.error('AuditService', 'getConsentAuditTrail failed', err);
        this.notify.error('Audit trail', 'Failed to load consent activity.');
        throw err;
      }),
    );
  }
}
