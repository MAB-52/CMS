import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { PublicConsentInviteDetail } from '../models/public-consent-invite.model';

@Injectable({ providedIn: 'root' })
export class PublicConsentInviteService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/public/consent-invite`;

  /** Cookie-backed session (CONSENT_SESSION). */
  getInvite(): Observable<ApiResponse<PublicConsentInviteDetail>> {
    return this.http.get<ApiResponse<PublicConsentInviteDetail>>(this.base, { withCredentials: true });
  }

  respond(decision: 'ACCEPT' | 'DECLINE' | 'WITHDRAW'): Observable<ApiResponse<PublicConsentInviteDetail>> {
    return this.http.post<ApiResponse<PublicConsentInviteDetail>>(`${this.base}/respond`, { decision }, { withCredentials: true });
  }
}
