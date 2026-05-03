import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PagedResponse } from '../models/api-response.model';
import { AdminUser, CreateUserPayload, UpdateUserPayload } from '../models/admin.model';
import {
  AdminConsentTemplate,
  AdminCustomerRow,
  AdminDashboardStats,
  AdminMisDashboard,
  CaptureConsentSearchResult,
  RecordOnBehalfPayload,
  SendConsentLinkPayload,
  SendConsentLinkResult,
} from '../models/admin.model';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/admin`;

  getDashboardStats(): Observable<ApiResponse<AdminDashboardStats>> {
    return this.http.get<ApiResponse<AdminDashboardStats>>(`${this.base}/dashboard/stats`);
  }

  getMisDashboard(): Observable<ApiResponse<AdminMisDashboard>> {
    return this.http.get<ApiResponse<AdminMisDashboard>>(`${this.base}/dashboard/mis`);
  }

  getCustomers(params: {
    page: number;
    size: number;
    mobileNumber?: string;
    customerId?: string;
    consentStatus?: string;
    sortBy?: string;
    sortDir?: string;
  }): Observable<ApiResponse<PagedResponse<AdminCustomerRow>>> {
    let hp = new HttpParams()
      .set('page', String(params.page))
      .set('size', String(params.size));
    if (params.mobileNumber?.trim()) {
      hp = hp.set('mobileNumber', params.mobileNumber.trim());
    }
    if (params.customerId?.trim()) {
      hp = hp.set('customerId', params.customerId.trim());
    }
    if (params.consentStatus && params.consentStatus !== 'ALL') {
      hp = hp.set('consentStatus', params.consentStatus);
    }
    if (params.sortBy) {
      hp = hp.set('sortBy', params.sortBy);
    }
    if (params.sortDir) {
      hp = hp.set('sortDir', params.sortDir);
    }
    return this.http.get<ApiResponse<PagedResponse<AdminCustomerRow>>>(`${this.base}/customers`, { params: hp });
  }

  exportCustomersCsv(filters: { mobileNumber?: string; customerId?: string; consentStatus?: string }): Observable<Blob> {
    let hp = new HttpParams();
    if (filters.mobileNumber?.trim()) {
      hp = hp.set('mobileNumber', filters.mobileNumber.trim());
    }
    if (filters.customerId?.trim()) {
      hp = hp.set('customerId', filters.customerId.trim());
    }
    if (filters.consentStatus && filters.consentStatus !== 'ALL') {
      hp = hp.set('consentStatus', filters.consentStatus);
    }
    return this.http.get(`${this.base}/customers/export`, { params: hp, responseType: 'blob' });
  }

  captureSearch(q: string): Observable<ApiResponse<CaptureConsentSearchResult>> {
    const params = new HttpParams().set('q', q.trim());
    return this.http.get<ApiResponse<CaptureConsentSearchResult>>(`${this.base}/capture-consent/search`, { params });
  }

  listConsentTemplates(): Observable<ApiResponse<AdminConsentTemplate[]>> {
    return this.http.get<ApiResponse<AdminConsentTemplate[]>>(`${this.base}/consent-templates`);
  }

  sendConsentLink(body: SendConsentLinkPayload): Observable<ApiResponse<SendConsentLinkResult>> {
    return this.http.post<ApiResponse<SendConsentLinkResult>>(`${this.base}/capture-consent/send-link`, body);
  }

  recordOnBehalf(body: RecordOnBehalfPayload): Observable<ApiResponse<null>> {
    return this.http.post<ApiResponse<null>>(`${this.base}/capture-consent/record`, body);
  }

  listUsers(params: {
    page: number;
    size: number;
    search?: string;
    role?: string;
    active?: string;
    sortDir?: string;
  }): Observable<ApiResponse<PagedResponse<AdminUser>>> {
    let hp = new HttpParams()
      .set('page', String(params.page))
      .set('size', String(params.size));
    if (params.search?.trim()) hp = hp.set('search', params.search.trim());
    if (params.role && params.role !== 'ALL') hp = hp.set('role', params.role);
    if (params.active && params.active !== 'ALL') hp = hp.set('active', params.active);
    if (params.sortDir) hp = hp.set('sortDir', params.sortDir);
    return this.http.get<ApiResponse<PagedResponse<AdminUser>>>(`${this.base}/users`, { params: hp });
  }

  getUser(id: number): Observable<ApiResponse<AdminUser>> {
    return this.http.get<ApiResponse<AdminUser>>(`${this.base}/users/${id}`);
  }

  createUser(body: CreateUserPayload): Observable<ApiResponse<AdminUser>> {
    return this.http.post<ApiResponse<AdminUser>>(`${this.base}/users`, body);
  }

  updateUser(id: number, body: UpdateUserPayload): Observable<ApiResponse<AdminUser>> {
    return this.http.patch<ApiResponse<AdminUser>>(`${this.base}/users/${id}`, body);
  }

  deleteUser(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.base}/users/${id}`);
  }
}
