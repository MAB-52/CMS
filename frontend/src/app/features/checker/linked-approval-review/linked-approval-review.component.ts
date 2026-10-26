
import { DatePipe } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Consent, MergeTag } from '../../../core/models/consent.model';
import { ConsentRuleType, WorkflowScheduleType, audienceSegmentLabel } from '../../../core/models/workflow.model';
import { ConsentService } from '../../../core/services/consent.service';
import { MergeTagService } from '../../../core/services/merge-tag.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ChannelId, getChannels } from '../../../core/utils/channel.util';

import { ChannelLanguageCombo, buildRenderMap } from '../../../core/models/consent-translation.types';
import { ConsentTypeLabelPipe } from '../../../shared/pipes/consent-type-label.pipe';
import { ConsentChannelLanguagePreviewComponent } from '../../../shared/components/consent-channel-language-preview/consent-channel-language-preview.component';
import { ReviewActionDialogComponent, ReviewActionDialogData, ReviewActionDialogResult } from '../../../shared/components/review-action-dialog/review-action-dialog.component';

const CHANNEL_CHIP_LABEL: Record<ChannelId, string> = {
  EMAIL: 'Email',
  SMS: 'SMS',
  PUSH: 'Push',
  WHATSAPP: 'WhatsApp',
  RCS: 'RCS',
};

@Component({
  selector: 'app-linked-approval-review',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    DatePipe,
    ConsentTypeLabelPipe,
    ConsentChannelLanguagePreviewComponent,
  ],
  templateUrl: './linked-approval-review.component.html',
  styleUrl: './linked-approval-review.component.css',
})
export class LinkedApprovalReviewComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly consentApi = inject(ConsentService);
  private readonly mergeApi = inject(MergeTagService);
  private readonly dialog = inject(MatDialog);
  private readonly notify = inject(NotificationService);

  readonly consent = signal<Consent | null>(null);
  readonly loading = signal(true);
  readonly notFound = signal(false);
  readonly actingBusy = signal(false);
  mergeTags: MergeTag[] = [];

  private readonly viewedCombos = signal<Map<string, ChannelLanguageCombo>>(new Map());
  private readonly currentCombo = signal<{ channel: string; languageCode: string } | null>(null);

  readonly getChannels = getChannels;
  readonly channelChipLabel = CHANNEL_CHIP_LABEL;
  readonly audienceSegmentLabel = audienceSegmentLabel;

  readonly renderMap = computed(() => buildRenderMap(this.consent()?.translations));

  readonly totalCombinations = computed(() => {
    const c = this.consent();
    if (!c) return 0;
    const channels = [c.channelEmail, c.channelSms, c.channelPush, c.channelWhatsapp, c.channelRcs].filter(Boolean).length;
    const languageCount = c.translations?.length || 1;
    return Math.max(1, channels) * Math.max(1, languageCount);
  });

  readonly viewedCount = computed(() => this.viewedCombos().size);

  ngOnInit(): void {
    this.mergeApi.getMergeTags().subscribe({
      next: (t) => (this.mergeTags = t),
      error: () => {},
    });
    this.load();
  }

  private load(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.notFound.set(true);
      this.loading.set(false);
      return;
    }

    this.loading.set(true);
    this.consentApi.getLinkedPendingApprovals().subscribe({
      next: (res) => {
        this.loading.set(false);
        const found = res.success && res.data ? res.data.find((x) => String(x.id) === String(id)) : undefined;
        if (found) {
          this.consent.set(found);
        } else {
          this.notFound.set(true);
        }
      },
      error: () => {
        this.loading.set(false);
        this.notFound.set(true);
      },
    });
  }

  back(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  canDecide(c: Consent): boolean {
    return c.status === 'PENDING_APPROVAL';
  }

  ruleScheduleLabel(st: WorkflowScheduleType): string {
    switch (st) {
      case 'IMMEDIATE': return 'Immediate';
      case 'SCHEDULED': return 'Scheduled';
      case 'RECURRING': return 'Recurring';
      default: return st;
    }
  }

  scenarioLine(ruleType: ConsentRuleType, scenario: string | null | undefined): string {
    if (ruleType !== 'PREDEFINED_SCENARIO') return '—';
    return scenario || '—';
  }

  channelLabel(code: string): string {
    const u = String(code || '').toUpperCase() as ChannelId;
    return this.channelChipLabel[u] ?? code;
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

  approve(c: Consent): void {
    const r = c.linkedRule;
    if (!r) return;

    const data: ReviewActionDialogData = {
      title: 'Approve this consent',
      icon: '✅',
      iconColor: 'rgba(22,163,74,0.15)',
      textareaLabel: 'Reason for approval',
      placeholder: 'Describe why this consent meets the required criteria…',
      confirmLabel: 'Confirm Approval',
      confirmColor: 'success',
      minLength: 10,
      showFlagCombo: false,
    };

    const ref = this.dialog.open(ReviewActionDialogComponent, { width: '520px', disableClose: true, data });

    ref.afterClosed().subscribe((result: ReviewActionDialogResult | null) => {
      if (!result) return;
      this.actingBusy.set(true);
      this.consentApi
        .reviewConsent(c.id, 'APPROVE', undefined, undefined, result.message, this.reviewedCombinationsList())
        .subscribe({
          next: (res) => {
            this.actingBusy.set(false);
            if (res.success) {
              this.notify.success('Approved', res.message || 'Consent and linked rule approved.');
              this.back();
            }
          },
          error: () => this.actingBusy.set(false),
        });
    });
  }

  requestRevision(c: Consent): void {
    const r = c.linkedRule;
    if (!r) return;

    const current = this.currentCombo();
    const data: ReviewActionDialogData = {
      title: 'Request revision',
      icon: '↩',
      iconColor: '#d97706',
      textareaLabel: 'What should the maker change?',
      placeholder: `Describe updates for the consent and/or the rule "${r.ruleName}"…`,
      confirmLabel: 'Send revision request',
      confirmColor: 'warning',
      minLength: 20,
      showFlagCombo: true,
      currentChannel: current?.channel ?? null,
      currentLanguage: current?.languageCode ?? null,
    };

    const ref = this.dialog.open(ReviewActionDialogComponent, { width: '520px', disableClose: true, data });

    ref.afterClosed().subscribe((result: ReviewActionDialogResult | null) => {
      if (!result) return;

      const flagged: ChannelLanguageCombo[] =
        result.flagCurrentCombo && current ? [{ channel: current.channel, languageCode: current.languageCode }] : [];

      this.actingBusy.set(true);
      this.consentApi
        .reviewConsent(c.id, 'REQUEST_REVISION', undefined, result.message, undefined, this.reviewedCombinationsList(), flagged)
        .subscribe({
          next: (res) => {
            this.actingBusy.set(false);
            if (res.success) {
              this.notify.warning('Revision requested', res.message || '');
              this.back();
            }
          },
          error: () => this.actingBusy.set(false),
        });
    });
  }

  reject(c: Consent): void {
    const r = c.linkedRule;
    if (!r) return;

    const data: ReviewActionDialogData = {
      title: 'Reject consent and paired rule',
      icon: '❌',
      iconColor: '#dc2626',
      textareaLabel: 'Reason for rejection',
      placeholder: 'Provide a clear reason for the maker (applies to both the consent and the broadcast rule)…',
      confirmLabel: 'Confirm rejection',
      confirmColor: 'warn',
      minLength: 20,
      showFlagCombo: false,
    };

    const ref = this.dialog.open(ReviewActionDialogComponent, { width: '520px', disableClose: true, data });

    ref.afterClosed().subscribe((result: ReviewActionDialogResult | null) => {
      if (!result) return;
      this.actingBusy.set(true);
      this.consentApi
        .reviewConsent(c.id, 'REJECT', result.message, undefined, undefined, this.reviewedCombinationsList())
        .subscribe({
          next: (res) => {
            this.actingBusy.set(false);
            if (res.success) {
              this.notify.error('Rejected', res.message || '');
              this.back();
            }
          },
          error: () => this.actingBusy.set(false),
        });
    });
  }
}