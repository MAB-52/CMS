import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { ConsentRuleType, PredefinedRuleScenario } from '../models/workflow.model';

export interface AudienceDrillDownPreview {
  totalCount: number;
  segmentCounts: { code: string; count: number }[];
}

export interface AudienceDrillDownParams {
  ruleType: ConsentRuleType;
  predefinedScenario?: PredefinedRuleScenario | null;
  selectedSegmentCodes: string[];
}

@Injectable({ providedIn: 'root' })
export class AudienceDrillDownService {
  private readonly http = inject(HttpClient);
  private readonly previewRequest$ = new Subject<AudienceDrillDownParams | null>();

  readonly preview$ = this.previewRequest$.pipe(
    debounceTime(350),
    distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    switchMap((params) => {
      if (!params || params.ruleType !== 'PREDEFINED_SCENARIO') {
        return of(null);
      }
      return this.http.post<ApiResponse<AudienceDrillDownPreview>>(
        `${environment.apiUrl}/consent-rules/audience-drill-down-preview`,
        {
          ruleType: params.ruleType,
          predefinedScenario: params.predefinedScenario ?? null,
          selectedSegmentCodes: params.selectedSegmentCodes ?? [],
        },
      );
    }),
  );

  schedulePreview(params: AudienceDrillDownParams | null): void {
    this.previewRequest$.next(params);
  }
}
