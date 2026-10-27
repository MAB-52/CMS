import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { PublicConsentTranslationService } from '../../../core/services/public-consent-translation.service';
import { LoggerService } from '../../../core/services/logger.service';
import { sanitizeRichHtml } from '../../../core/utils/safe-html.util';

@Component({
  selector: 'app-public-consent-translation',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatIconModule, RouterLink],
  templateUrl: './public-consent-translation.component.html',
  styleUrls: ['../public-consent-respond/public-consent-respond.component.css', './public-consent-translation.component.css'],
})
export class PublicConsentTranslationComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(PublicConsentTranslationService);
  private readonly logger = inject(LoggerService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly consentTitle = signal<string>('');
  readonly customerDisplayName = signal<string>('');
  readonly safeHtml = signal<SafeHtml | null>(null);
  readonly token = signal<string>('');

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token')?.trim() ?? '';
    const consentDbIdRaw = this.route.snapshot.queryParamMap.get('consentDbId')?.trim() ?? '';
    const lang = this.route.snapshot.queryParamMap.get('lang')?.trim() ?? '';
    this.token.set(token);

    if (!token || !consentDbIdRaw || !lang) {
      this.loading.set(false);
      this.errorMessage.set('This page requires a valid link with token, consent, and language.');
      return;
    }

    const consentDbId = Number(consentDbIdRaw);
    if (!Number.isFinite(consentDbId) || consentDbId <= 0) {
      this.loading.set(false);
      this.errorMessage.set('Invalid consent reference in this link.');
      return;
    }

    this.api.getTranslation(token, consentDbId, lang).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (!res.success || !res.data) {
          this.errorMessage.set(res.message || 'We could not load this translation.');
          return;
        }
        this.consentTitle.set(res.data.consentTitle ?? '');
        this.customerDisplayName.set(res.data.customerDisplayName ?? '');
        const raw = res.data.translatedHtml ?? '';
        this.safeHtml.set(this.sanitizer.bypassSecurityTrustHtml(sanitizeRichHtml(raw)));
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.logger.error('PublicConsentTranslation', 'load failed', err);
        const body = err.error as { message?: string } | undefined;
        this.errorMessage.set(
          body?.message || err.message || 'Something went wrong while loading this page.',
        );
      },
    });
  }
}
