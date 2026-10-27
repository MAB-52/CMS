import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { MessageModule } from 'primeng/message';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription, combineLatest, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PublicConsentInviteDetail } from '../../../core/models/public-consent-invite.model';
import { PublicConsentInviteService } from '../../../core/services/public-consent-invite.service';
import { LoggerService } from '../../../core/services/logger.service';
import { environment } from '../../../environments/environment';
import { PublicConsentRespondResolve } from '../public-consent-request.solver';
import { CHANNEL_META, ChannelId, ChannelMeta } from '../../../core/utils/channel.util';

@Component({
  selector: 'app-public-consent-respond',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    TagModule,
    AvatarModule,
    SkeletonModule,
    MessageModule,
  ],
  templateUrl: './public-consent-respond.component.html',
  styleUrl: './public-consent-respond.component.css',
})
export class PublicConsentRespondComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(PublicConsentInviteService);
  private readonly logger = inject(LoggerService);
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);

  private readonly consentPrefsBase =
    environment.apiUrl.replace(/\/api\/?$/, '') + '/api/public/consent';

  private routeSub?: Subscription;

  readonly loading = signal(false);
  readonly submitting = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly detail = signal<PublicConsentInviteDetail | null>(null);
  readonly inlineNotice = signal<string | null>(null);
  readonly langSaved = signal(false);
  readonly langSaving = signal(false);
  readonly langError = signal<string | null>(null);

  readonly channelPrefSaved = signal(false);
  readonly channelPrefSaving = signal(false);
  readonly channelPrefError = signal<string | null>(null);

  /** `native` is shown under each label so customers recognise their language at a glance. */
  readonly languages: ReadonlyArray<{ value: string; label: string; native: string }> = [
    { value: 'english', label: 'English', native: 'English' },
    { value: 'hindi', label: 'Hindi', native: 'हिन्दी' },
    { value: 'marathi', label: 'Marathi', native: 'मराठी' },
    { value: 'gujarati', label: 'Gujarati', native: 'ગુજરાતી' },
    { value: 'bengali', label: 'Bengali', native: 'বাংলা' },
    { value: 'tamil', label: 'Tamil', native: 'தமிழ்' },
    { value: 'telugu', label: 'Telugu', native: 'తెలుగు' },
    { value: 'malayalam', label: 'Malayalam', native: 'മലയാളം' },
    { value: 'urdu', label: 'Urdu', native: 'اردو' },
  ];

  selectedLangs = new Set<string>(['english']);
  selectedChannels = new Set<string>();

  /** Long consent messages start collapsed behind a "Show full message" toggle. */
  readonly messageExpanded = signal(false);
  /** Decision recorded in this session; drives the animated result screen. */
  readonly recordedNow = signal<'ACCEPT' | 'DECLINE' | 'WITHDRAW' | null>(null);

  readonly initial = computed(() => (this.detail()?.customerDisplayName ?? '').trim().charAt(0).toUpperCase() || '?');

  /** Labels for the "Your choices" summary shown above the decision buttons. */
  selectedLanguageLabels(): string[] {
    return this.languages.filter((l) => this.selectedLangs.has(l.value)).map((l) => l.label);
  }

  selectedChannelList(): string[] {
    return [...this.selectedChannels];
  }

  /** Channel display metadata; falls back gracefully for codes the UI does not know. */
  channelMeta(ch: string): ChannelMeta {
    return CHANNEL_META[ch.toUpperCase() as ChannelId] ?? { label: ch, icon: 'pi pi-send', color: '#45329E' };
  }

  ngOnInit(): void {
    this.routeSub = combineLatest([this.route.data, this.route.queryParamMap]).subscribe(([data, params]) => {
      const resolved = data['consent'] as PublicConsentRespondResolve | undefined;
      this.loading.set(false);
      this.errorMessage.set(null);
      this.detail.set(null);
      this.inlineNotice.set(null);

      if (!resolved) {
        this.errorMessage.set('Something went wrong while loading this page.');
        return;
      }

      if (resolved.status === 'session-error') {
        this.errorMessage.set(
          'Your session is invalid or has expired. Please use the link from your consent email.',
        );
        return;
      }

      if (resolved.status === 'load-error') {
        this.errorMessage.set(resolved.message);
        return;
      }

      this.detail.set(resolved.detail);
      if (params.get('langSaved') === 'true') {
        this.langSaved.set(true);
      }
      const d = resolved.detail;
      if (d.state === 'EXPIRED') {
        this.inlineNotice.set('This link has expired. Please contact us if you still need to respond.');
      } else if (d.state === 'ACCEPTED' || d.state === 'REJECTED' || d.state === 'WITHDRAWN') {
        this.inlineNotice.set('Thank you — your response is already on file. No further action is needed.');
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  safeResolvedHtml(html: string | null | undefined): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html ?? '');
  }

  toggleLang(value: string): void {
    if (value === 'english') {
      this.selectedLangs.add('english');
      return;
    }
    if (this.selectedLangs.has(value)) {
      this.selectedLangs.delete(value);
    } else {
      this.selectedLangs.add(value);
    }
  }

  saveLangPreference(): void {
    const consentDbId = this.detail()?.consentDbId;
    if (consentDbId == null) {
      return;
    }
    this.langSaving.set(true);
    this.langError.set(null);
    let params = new HttpParams().set('consentDbId', String(consentDbId));
    for (const lang of this.selectedLangs) {
      params = params.append('lang', lang);
    }
    const url = `${this.consentPrefsBase}/language-preference`;
    this.http.post(url, null, { params, withCredentials: true }).subscribe({
      next: () => {
        this.langSaved.set(true);
        this.langSaving.set(false);
      },
      error: (err) => {
        const msg =
          err?.error?.message ||
          err?.error?.error ||
          err?.message ||
          'Could not save preference. Please try again.';
        this.langError.set(typeof msg === 'string' ? msg : 'Could not save preference. Please try again.');
        this.langSaving.set(false);
      },
    });
  }

  saveChannelPreference(): void {
    const consentDbId = this.detail()?.consentDbId;
    if (consentDbId == null) return;

    this.channelPrefSaving.set(true);
    this.channelPrefError.set(null);

    let params = new HttpParams().set('consentDbId', String(consentDbId));
    for (const ch of this.selectedChannels) {
      params = params.append('channels', ch);
    }

    const url = `${this.consentPrefsBase}/channel-preference`;
    this.http.post(url, null, { params, withCredentials: true }).subscribe({
      next: () => {
        this.channelPrefSaved.set(true);
        this.channelPrefSaving.set(false);
      },
      error: (err) => {
        const body = err?.error;
        const msg =
          body?.message ||
          (typeof body === 'object' && body !== null && 'error' in body ? (body as { error?: string }).error : null) ||
          err?.message ||
          'Could not save. Please try again.';
        this.channelPrefError.set(typeof msg === 'string' ? msg : 'Could not save. Please try again.');
        this.channelPrefSaving.set(false);
      },
    });
  }

  toggleChannel(ch: string): void {
    if (this.selectedChannels.has(ch)) {
      this.selectedChannels.delete(ch);
    } else {
      this.selectedChannels.add(ch);
    }
    // Clear channel error once user makes a selection
    if (this.selectedChannels.size > 0) {
      this.channelPrefError.set(null);
    }
  }

  channelOn(ch: string): boolean {
    return this.selectedChannels.has(ch);
  }

  submit(decision: 'ACCEPT' | 'DECLINE' | 'WITHDRAW'): void {
    const d = this.detail();
    if (!d || d.state !== 'READY') {
      return;
    }

    // For ACCEPT: validate channel selection and save preferences first
    if (decision === 'ACCEPT') {
      const hasChannels = d.availableChannels && d.availableChannels.length >= 1;

      // Validate: at least one channel must be selected
      if (hasChannels && this.selectedChannels.size === 0) {
        this.channelPrefError.set('Please select at least one channel before accepting.');
        return;
      }

      this.submitting.set(true);
      this.errorMessage.set(null);
      this.channelPrefError.set(null);
      this.langError.set(null);

      const consentDbId = d.consentDbId;

      // Build save observables; skip channel save if no channels are available
      const channelSave$ = hasChannels && consentDbId != null
        ? this._buildChannelSaveRequest(consentDbId).pipe(catchError(() => of(null)))
        : of(null);

      const langSave$ = consentDbId != null
        ? this._buildLangSaveRequest(consentDbId).pipe(catchError(() => of(null)))
        : of(null);

      // Save both preferences in parallel, then submit the consent decision
      forkJoin([channelSave$, langSave$]).subscribe({
        next: () => {
          this._recordDecision(decision);
        },
        error: () => {
          // forkJoin errors are swallowed by catchError above; this is a safety net
          this._recordDecision(decision);
        },
      });

      return;
    }

    // For DECLINE / WITHDRAW: skip preference saving and go straight to decision
    this.submitting.set(true);
    this.errorMessage.set(null);
    this._recordDecision(decision);
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  private _buildChannelSaveRequest(consentDbId: number) {
    let params = new HttpParams().set('consentDbId', String(consentDbId));
    for (const ch of this.selectedChannels) {
      params = params.append('channels', ch);
    }
    return this.http.post(`${this.consentPrefsBase}/channel-preference`, null, { params, withCredentials: true });
  }

  private _buildLangSaveRequest(consentDbId: number) {
    let params = new HttpParams().set('consentDbId', String(consentDbId));
    for (const lang of this.selectedLangs) {
      params = params.append('lang', lang);
    }
    return this.http.post(`${this.consentPrefsBase}/language-preference`, null, { params, withCredentials: true });
  }

  private _recordDecision(decision: 'ACCEPT' | 'DECLINE' | 'WITHDRAW'): void {
    this.api.respond(decision).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (!res.success || !res.data) {
          this.errorMessage.set(res.message || 'We could not record your response.');
          return;
        }
        this.detail.set(res.data);
        this.recordedNow.set(decision);
        this.inlineNotice.set(
          decision === 'ACCEPT'
            ? 'Thank you. Your consent has been recorded successfully.'
            : decision === 'WITHDRAW'
              ? 'Your consent has been withdrawn as requested.'
              : 'Your choice has been recorded. You will not be contacted under this request.',
        );
      },
      error: (err) => {
        this.submitting.set(false);
        this.logger.error('PublicConsentRespond', 'respond failed', err);
        const body = err?.error;
        const msg =
          body?.message ||
          (typeof body === 'object' && body !== null && 'error' in body ? (body as { error?: string }).error : null) ||
          err?.message ||
          'We could not record your response. Please try again.';
        this.errorMessage.set(typeof msg === 'string' ? msg : 'We could not record your response. Please try again.');
      },
    });
  }
}