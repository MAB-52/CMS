import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-public-consent-verify',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './public-consent-verify.component.html',
  styleUrl: './public-consent-verify.component.scss',
})
export class PublicConsentVerifyComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);

  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code')?.trim() ?? '';
    if (!code) {
      this.loading.set(false);
      this.errorMessage.set('Invalid link. Please use the link from your consent email.');
      return;
    }
    const url = `${environment.apiUrl}/public/consent/exchange`;
    this.http.post<{ status?: string }>(url, { code }, { withCredentials: true }).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res?.status === 'ok') {
          void this.router.navigate(['/public/consent/respond'], { replaceUrl: true });
          return;
        }
        this.errorMessage.set('Something went wrong. Please try again.');
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        if (err.status === 400 && err.error?.error === 'LINK_EXPIRED') {
          this.errorMessage.set('This link has expired or has already been used.');
          return;
        }
        this.errorMessage.set('Something went wrong. Please try again.');
      },
    });
  }
}
