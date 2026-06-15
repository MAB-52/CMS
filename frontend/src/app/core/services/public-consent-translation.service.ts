import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { ConsentTranslationPayload } from '../models/consent-translation.model';

@Injectable({ providedIn: 'root' })
export class PublicConsentTranslationService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/public/consent-translation`;

  getTranslation(
    token: string,
    consentDbId: number,
    lang: string,
  ): Observable<ApiResponse<ConsentTranslationPayload>> {
    const params = new HttpParams()
      .set('token', token)
      .set('consentDbId', String(consentDbId))
      .set('lang', lang);
    return this.http.get<ApiResponse<ConsentTranslationPayload>>(this.base, { params });
  }
}
