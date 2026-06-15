import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { AudienceSegment } from '../models/workflow.model';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class SegmentsService {
  private readonly http = inject(HttpClient);
  private readonly notify = inject(NotificationService);

  list(): Observable<ApiResponse<AudienceSegment[]>> {
    return this.http.get<ApiResponse<AudienceSegment[]>>(`${environment.apiUrl}/segments`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.notify.error('Segments', err.error?.message || 'Failed to load audience segments.');
        return throwError(() => err);
      }),
    );
  }
}
