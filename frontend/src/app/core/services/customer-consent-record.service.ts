import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import {
  CustomerConsentRecordRow,
  CustomerConsentRecordStats,
} from '../models/customer-consent-record.model';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class CustomerConsentRecordService {
  private readonly http = inject(HttpClient);
  private readonly notify = inject(NotificationService);

  private readonly base = `${environment.apiUrl}/admin/consent-records`;

  private handle(name: string) {
    return (err: HttpErrorResponse) => {
      const msg = (err.error as ApiResponse<unknown>)?.message || err.message || 'Request failed';
      if (err.status !== 401 && err.status !== 403) {
        this.notify.error(name, msg);
      }
      return throwError(() => err);
    };
  }

  getRecordsByTemplate(consentDbId: number): Observable<ApiResponse<CustomerConsentRecordRow[]>> {
    return this.http
      .get<ApiResponse<CustomerConsentRecordRow[]>>(`${this.base}/template/${consentDbId}`)
      .pipe(catchError(this.handle('Consent records')));
  }

  getRecordsByCustomer(customerId: string): Observable<ApiResponse<CustomerConsentRecordRow[]>> {
    return this.http
      .get<ApiResponse<CustomerConsentRecordRow[]>>(`${this.base}/customer/${encodeURIComponent(customerId)}`)
      .pipe(catchError(this.handle('Consent records')));
  }

  getTemplateStats(consentDbId: number): Observable<ApiResponse<CustomerConsentRecordStats>> {
    return this.http
      .get<ApiResponse<CustomerConsentRecordStats>>(`${this.base}/template/${consentDbId}/stats`)
      .pipe(catchError(this.handle('Consent record stats')));
  }
}
