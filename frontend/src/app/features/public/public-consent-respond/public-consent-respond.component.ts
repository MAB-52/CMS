import { DatePipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PublicConsentInviteDetail } from '../../../core/models/public-consent-invite.model';
import { PublicConsentInviteService } from '../../../core/services/public-consent-invite.service';
import { LoggerService } from '../../../core/services/logger.service';

@Component({
  selector: 'app-public-consent-respond',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './public-consent-respond.component.html',
  styleUrl: './public-consent-respond.component.scss',
})
export class PublicConsentRespondComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(PublicConsentInviteService);
  private readonly logger = inject(LoggerService);

  readonly loading = signal(true);
  readonly submitting = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly detail = signal<PublicConsentInviteDetail | null>(null);
  readonly inlineNotice = signal<string | null>(null);

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token')?.trim() ?? '';
    if (!token) {
      this.loading.set(false);
      this.errorMessage.set('This page requires a valid link from your consent email.');
      return;
    }
    this.api.getInvite(token).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.data?.state === 'NOT_FOUND') {
          this.errorMessage.set(res.message || 'This consent link is not valid.');
          return;
        }
        if (!res.success || !res.data) {
          this.errorMessage.set(res.message || 'We could not load this consent request.');
          return;
        }
        this.detail.set(res.data);
        if (res.data.state === 'EXPIRED') {
          this.inlineNotice.set('This link has expired. Please contact us if you still need to respond.');
        } else if (res.data.state === 'ACCEPTED' || res.data.state === 'REJECTED') {
          this.inlineNotice.set('Thank you — your response is already on file. No further action is needed.');
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.logger.error('PublicConsentRespond', 'load failed', err);
        this.errorMessage.set(err?.error?.message || 'Something went wrong while loading this page.');
      },
    });
  }

  submit(decision: 'ACCEPT' | 'DECLINE'): void {
    const token = this.route.snapshot.queryParamMap.get('token')?.trim() ?? '';
    const d = this.detail();
    if (!token || !d || d.state !== 'READY') {
      return;
    }
    this.submitting.set(true);
    this.errorMessage.set(null);
    this.api.respond(token, decision).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (!res.success || !res.data) {
          this.errorMessage.set(res.message || 'We could not record your response.');
          return;
        }
        this.detail.set(res.data);
        this.inlineNotice.set(
          decision === 'ACCEPT'
            ? 'Thank you. Your consent has been recorded successfully.'
            : 'Your choice has been recorded. You will not be contacted under this request.',
        );
      },
      error: (err) => {
        this.submitting.set(false);
        this.logger.error('PublicConsentRespond', 'respond failed', err);
        this.errorMessage.set(err?.error?.message || 'We could not record your response. Please try again.');
      },
    });
  }
}
