import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { UserSummary } from '../models/user.model';
import { LoggerService } from './logger.service';
import { NotificationService } from './notification.service';

interface JwtBody {
  sub: string;
  userId: number;
  email: string;
  role: string;
  exp: number;
}

interface JwtResponse {
  token: string;
  type: string;
  userId: number;
  email: string;
  fullName: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly logger = inject(LoggerService);
  private readonly notify = inject(NotificationService);

  private readonly tokenKey = 'ciq_token';
  private readonly userKey = 'ciq_user';
  #isLoggingOut = false;

  /** True while a logout is in progress (token cleared and navigation pending). */
  get isLoggingOut(): boolean {
    return this.#isLoggingOut;
  }

  login(email: string, password: string): Observable<ApiResponse<JwtResponse>> {
    return this.http
      .post<ApiResponse<JwtResponse>>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap((res) => {
          if (res.success && res.data?.token) {
            this.#isLoggingOut = false;
            this.notify.clearOnceKeys();
            localStorage.setItem(this.tokenKey, res.data.token);
            const user: UserSummary = {
              id: res.data.userId,
              fullName: res.data.fullName,
              email: res.data.email,
              role: res.data.role,
            };
            localStorage.setItem(this.userKey, JSON.stringify(user));
            this.logger.info('AuthService', `Login successful | email=${res.data.email} role=${res.data.role}`);
          }
        }),
      );
  }

  logout(options?: { sessionExpired?: boolean }): void {
    if (this.#isLoggingOut) {
      return;
    }
    this.#isLoggingOut = true;
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.logger.info('AuthService', 'Logout successful');
    const nav =
      options?.sessionExpired === true
        ? this.router.navigate(['/login'], { queryParams: { reason: 'session_expired' } })
        : this.router.navigateByUrl('/login');
    void nav.then(
      () => {
        this.#isLoggingOut = false;
      },
      () => {
        this.#isLoggingOut = false;
      },
    );
  }

  getRedirectPath(): string {
    const role = this.getRole();
    if (role === 'ADMIN') {
      return '/admin/dashboard';
    }
    if (role === 'CHECKER') {
      return '/checker/dashboard';
    }
    return '/maker/dashboard';
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getCurrentUser(): UserSummary | null {
    const raw = localStorage.getItem(this.userKey);
    if (!raw) {
      return null;
    }
    try {
      return JSON.parse(raw) as UserSummary;
    } catch {
      return null;
    }
  }

  getRole(): string {
    return this.getCurrentUser()?.role ?? '';
  }

  getUserId(): number {
    return this.getCurrentUser()?.id ?? 0;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtBody>(token);
      if (!decoded.exp) {
        return true;
      }
      return Date.now() >= decoded.exp * 1000;
    } catch {
      return true;
    }
  }

  isMakerPortal(): boolean {
    return this.getRole() === 'MAKER';
  }

  isCheckerPortal(): boolean {
    return this.getRole() === 'CHECKER';
  }

  isAdminPortal(): boolean {
    return this.getRole() === 'ADMIN';
  }
}
