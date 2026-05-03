import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { PublicConsentInviteDetail } from '../models/public-consent-invite.model';

@Injectable({ providedIn: 'root' })
export class PublicConsentInviteService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/public/consent-invite`;

  getInvite(token: string): Observable<ApiResponse<PublicConsentInviteDetail>> {
    const params = new HttpParams().set('token', token);
    return this.http.get<ApiResponse<PublicConsentInviteDetail>>(this.base, { params });
  }

  respond(token: string, decision: 'ACCEPT' | 'DECLINE'): Observable<ApiResponse<PublicConsentInviteDetail>> {
    return this.http.post<ApiResponse<PublicConsentInviteDetail>>(`${this.base}/respond`, { token, decision });
  }
}
