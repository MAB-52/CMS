import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  timestamp?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  forgotPassword(email: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/auth/password/forgot`, { email });
  }

  verifyOtp(email: string, otp: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/auth/password/verify-otp`, { email, otp });
  }

  resetPassword(email: string, otp: string, newPassword: string, confirmPassword: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/auth/password/reset`, { 
      email, otp, newPassword, confirmPassword 
    });
  }
}