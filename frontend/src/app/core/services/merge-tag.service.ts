import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, shareReplay, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { MergeTag } from '../models/consent.model';
import { LoggerService } from './logger.service';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class MergeTagService {
  private readonly http = inject(HttpClient);
  private readonly logger = inject(LoggerService);
  private readonly notify = inject(NotificationService);

  private cache$: Observable<MergeTag[]> | null = null;

  getMergeTags(): Observable<MergeTag[]> {
    if (!this.cache$) {
      this.logger.info('MergeTagService', 'Loading merge tags from API');
      const shared$ = this.http.get<ApiResponse<MergeTag[]>>(`${environment.apiUrl}/merge-tags`).pipe(
        map((res) => {
          if (!res.success || !res.data) {
            throw new Error(res.message || 'Failed to load merge tags');
          }
          return res.data;
        }),
        tap(() => this.logger.info('MergeTagService', 'Merge tags loaded into cache')),
        shareReplay(1),
      );
      this.cache$ = shared$.pipe(
        catchError((err) => {
          this.logger.error('MergeTagService', 'getMergeTags failed', err);
          this.notify.error('Merge tags', 'Could not load merge tags.');
          this.cache$ = null;
          return throwError(() => err);
        }),
      );
    } else {
      this.logger.debug('MergeTagService', 'Returning merge tags from cache');
    }
    return this.cache$;
  }

  clearCache(): void {
    this.cache$ = null;
  }
}
