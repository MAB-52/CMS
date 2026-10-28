
import { DatePipe } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Consent, FieldDiff } from '../../../core/models/consent.model';
import { ConsentService } from '../../../core/services/consent.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MergeTagService } from '../../../core/services/merge-tag.service';
import { MergeTag } from '../../../core/models/consent.model';
import { getChannels } from '../../../core/utils/channel.util';
import { ReviewActionDialogData, ReviewActionDialogResult } from '../../../shared/components/review-action-dialog/review-action-dialog.component';
import { ReviewActionDialogService } from '../../../shared/components/review-action-dialog/review-action-dialog.service';
import { ConsentChannelLanguagePreviewComponent } from '../../../shared/components/consent-channel-language-preview/consent-channel-language-preview.component';
import { DecisionBarComponent } from '../../../shared/components/decision-bar/decision-bar.component';
import { ChannelLanguageCombo, buildRenderMap, countReviewCombinations } from '../../../core/models/consent-translation.types';
import { ConsentHistoryTimelineComponent } from '../../../shared/components/consent-history-timeline/consent-history-timeline.component';
import { ChannelChipComponent } from '../../../shared/components/channel-chip/channel-chip.component';

@Component({
  selector: 'app-consent-review',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatExpansionModule, DatePipe, ConsentChannelLanguagePreviewComponent, DecisionBarComponent, ChannelChipComponent, ConsentHistoryTimelineComponent],
  templateUrl: './consent-review.component.html',
  styleUrl: './consent-review.component.css',
})
export class ConsentReviewComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly api = inject(ConsentService);
  private readonly mergeApi = inject(MergeTagService);
  private readonly reviewDialog = inject(ReviewActionDialogService);
  private readonly notify = inject(NotificationService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly consent = signal<Consent | null>(null);
  readonly diff = signal<FieldDiff[]>([]);
  readonly versions = signal<unknown[]>([]);
  readonly busy = signal(false);
  mergeTags: MergeTag[] = [];

  /** Tracks every {channel, languageCode} combo the checker has actually opened this session. */
  private readonly viewedCombos = signal<Map<string, ChannelLanguageCombo>>(new Map());
  /** The channel+language currently open in the preview — used for the "flag this" checkbox. */
  private readonly currentCombo = signal<{ channel: string; languageCode: string } | null>(null);

  readonly getChannels = getChannels;

  readonly renderMap = computed(() => buildRenderMap(this.consent()?.translations));

  readonly totalCombinations = computed(() => {
    const c = this.consent();
    if (!c) return 0;
    const channels = (
      [
        ['EMAIL', c.channelEmail],
        ['SMS', c.channelSms],
        ['PUSH', c.channelPush],
        ['WHATSAPP', c.channelWhatsapp],
        ['RCS', c.channelRcs],
      ] as const
    )
      .filter(([, on]) => on)
      .map(([id]) => id);
    return countReviewCombinations(channels, this.renderMap());
  });

  readonly viewedCount = computed(() => this.viewedCombos().size);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mergeApi.getMergeTags().subscribe({
      next: (t) => (this.mergeTags = t),
      error: () => {},
    });
    this.loadConsent(id);
    this.api.getConsentDiff(id).subscribe({
      next: (res) => {
        if (res.success && res.data?.differences) {
          this.diff.set(res.data.differences.filter((d) => d.isModified));
        }
      },
    });
    this.api.getVersionHistory(id).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.versions.set(res.data);
        }
      },
    });
  }

  private loadConsent(id: number): void {
    this.api.getConsentById(id).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.consent.set(res.data);
        }
      },
    });
  }

  private onDecisionError(id: number, err: HttpErrorResponse): void {
    this.busy.set(false);
    if (err.status === 409) {
      this.loadConsent(id);
    }
  }

  onCombinationViewed(event: { channel: string; languageCode: string }): void {
    this.currentCombo.set(event);
    const key = `${event.channel}::${event.languageCode}`;
    const map = new Map(this.viewedCombos());
    if (!map.has(key)) {
      map.set(key, { channel: event.channel, languageCode: event.languageCode });
      this.viewedCombos.set(map);
    }
  }

  private reviewedCombinationsList(): ChannelLanguageCombo[] {
    return Array.from(this.viewedCombos().values());
  }

  fullPreview(): void {
    // Retained for compatibility if referenced elsewhere; the shared preview component now
    // handles per-channel/language display inline, so this dialog is a supplementary full view.
  }

  approve(): void {
    const c = this.consent();
    if (!c) return;

    const data: ReviewActionDialogData = {
      title: 'Approve this consent',
      icon: '✅',
      iconColor: 'rgba(25,135,84,0.15)',
      textareaLabel: 'Reason for approval',
      placeholder: 'Describe why this consent meets the required criteria…',
      confirmLabel: 'Confirm Approval',
      confirmColor: 'success',
      minLength: 10,
      showFlagCombo: false,
    };

    this.reviewDialog.open(data).subscribe((result: ReviewActionDialogResult | null) => {
      if (!result) return;

      this.busy.set(true);
      this.api
        .reviewConsent(c.id, 'APPROVE', undefined, undefined, result.message, this.reviewedCombinationsList())
        .subscribe({
          next: (res) => {
            if (!res.success) {
              this.busy.set(false);
            }
            if (res.success) {
              this.notify.success('Consent approved and published', res.message);
              setTimeout(() => void this.router.navigateByUrl('/checker/pending'), 1500);
            }
          },
          error: (err: HttpErrorResponse) => this.onDecisionError(c.id, err),
        });
    });
  }

  requestRevision(): void {
    const c = this.consent();
    if (!c) return;

    const current = this.currentCombo();
    const data: ReviewActionDialogData = {
      title: 'Request Revision',
      icon: '↩',
      iconColor: '#EA6B28',
      textareaLabel: 'What needs to be changed?',
      placeholder: 'Be specific — describe exactly what the maker should update…',
      confirmLabel: 'Send Revision Request',
      confirmColor: 'warning',
      minLength: 20,
      showFlagCombo: false,
    };

    this.reviewDialog.open(data).subscribe((result: ReviewActionDialogResult | null) => {
      if (!result) return;

      const flagged: ChannelLanguageCombo[] =
        result.flagCurrentCombo && current ? [{ channel: current.channel, languageCode: current.languageCode }] : [];

      this.busy.set(true);
      this.api
        .reviewConsent(c.id, 'REQUEST_REVISION', undefined, result.message, undefined, this.reviewedCombinationsList(), flagged)
        .subscribe({
          next: (res) => {
            if (!res.success) {
              this.busy.set(false);
            }
            if (res.success) {
              this.notify.warning('↩ Revision request sent to maker.', res.message);
              setTimeout(() => void this.router.navigateByUrl('/checker/pending'), 1200);
            }
          },
          error: (err: HttpErrorResponse) => this.onDecisionError(c.id, err),
        });
    });
  }

  reject(): void {
    const c = this.consent();
    if (!c) return;

    const data: ReviewActionDialogData = {
      title: 'Reject this Consent',
      icon: '❌',
      iconColor: '#DC3545',
      textareaLabel: 'Reason for rejection',
      placeholder: 'Provide a clear reason so the maker understands why this was rejected…',
      confirmLabel: 'Confirm Rejection',
      confirmColor: 'warn',
      minLength: 20,
      showFlagCombo: false,
    };

    this.reviewDialog.open(data).subscribe((result: ReviewActionDialogResult | null) => {
      if (!result) return;

      this.busy.set(true);
      this.api
        .reviewConsent(c.id, 'REJECT', result.message, undefined, undefined, this.reviewedCombinationsList())
        .subscribe({
          next: (res) => {
            if (!res.success) {
              this.busy.set(false);
            }
            if (res.success) {
              this.notify.error('❌ Consent rejected.', res.message || '');
              setTimeout(() => void this.router.navigateByUrl('/checker/pending'), 1200);
            }
          },
          error: (err: HttpErrorResponse) => this.onDecisionError(c.id, err),
        });
    });
  }

  canDecide(): boolean {
    return this.consent()?.status === 'PENDING_APPROVAL';
  }
}