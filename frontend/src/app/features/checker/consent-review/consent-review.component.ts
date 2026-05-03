import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { Consent, FieldDiff } from '../../../core/models/consent.model';
import { ConsentService } from '../../../core/services/consent.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MergeTagService } from '../../../core/services/merge-tag.service';
import { MergeTag } from '../../../core/models/consent.model';
import { ConfirmDialogComponent, ConfirmDialogData } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import {
  ConsentPreviewDialogComponent,
  ConsentPreviewDialogData,
} from '../../../shared/components/consent-preview-dialog/consent-preview-dialog.component';
import {
  ReviewActionDialogComponent,
  ReviewActionDialogData,
} from '../../../shared/components/review-action-dialog/review-action-dialog.component';

@Component({
  selector: 'app-consent-review',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatExpansionModule, JsonPipe],
  templateUrl: './consent-review.component.html',
  styleUrl: './consent-review.component.scss',
})
export class ConsentReviewComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly api = inject(ConsentService);
  private readonly mergeApi = inject(MergeTagService);
  private readonly dialog = inject(MatDialog);
  private readonly notify = inject(NotificationService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly consent = signal<Consent | null>(null);
  readonly diff = signal<FieldDiff[]>([]);
  readonly versions = signal<unknown[]>([]);
  readonly busy = signal(false);
  mergeTags: MergeTag[] = [];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mergeApi.getMergeTags().subscribe({
      next: (t) => (this.mergeTags = t),
      error: () => {
        /* */
      },
    });
    this.api.getConsentById(id).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.consent.set(res.data);
        }
      },
    });
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

  messageHtml(): SafeHtml {
    const raw = this.consent()?.consentMessage || '';
    let html = raw;
    for (const t of this.mergeTags) {
      const key = t.tagKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      html = html.replace(new RegExp(key, 'g'), t.sampleValue || '');
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  fullPreview(): void {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data: ConsentPreviewDialogData = {
      html: c.consentMessage || '',
      mergeTags: this.mergeTags,
    };
    this.dialog.open(ConsentPreviewDialogComponent, { width: '760px', data });
  }

  approve(): void {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data: ConfirmDialogData = {
      icon: '✅',
      iconColor: 'rgba(22,163,74,0.15)',
      title: 'Approve this Consent?',
      body: `'${c.consentName}' will be marked as Approved and made ready to publish. This action will notify the maker.`,
      cancelLabel: 'Cancel',
      confirmLabel: 'Confirm Approval',
      confirmColor: 'success',
    };
    const ref = this.dialog.open(ConfirmDialogComponent, { width: '460px', disableClose: true, data });
    ref.afterClosed().subscribe((ok) => {
      if (!ok) {
        return;
      }
      this.busy.set(true);
      this.api.reviewConsent(c.id, 'APPROVE').subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.success('✅ Consent approved successfully!', res.message);
            setTimeout(() => void this.router.navigateByUrl('/checker/pending'), 1500);
          }
        },
        error: () => {
          this.busy.set(false);
        },
      });
    });
  }

  requestRevision(): void {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data: ReviewActionDialogData = {
      title: 'Request Revision',
      icon: '↩',
      iconColor: '#d97706',
      textareaLabel: 'What needs to be changed?',
      placeholder: 'Be specific — describe exactly what the maker should update…',
      confirmLabel: 'Send Revision Request',
      confirmColor: 'warning',
      minLength: 20,
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: '520px', disableClose: true, data });
    ref.afterClosed().subscribe((msg) => {
      if (!msg) {
        return;
      }
      this.busy.set(true);
      this.api.reviewConsent(c.id, 'REQUEST_REVISION', undefined, msg).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.warning('↩ Revision request sent to maker.', res.message);
            setTimeout(() => void this.router.navigateByUrl('/checker/pending'), 1200);
          }
        },
        error: () => {
          this.busy.set(false);
        },
      });
    });
  }

  reject(): void {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data: ReviewActionDialogData = {
      title: 'Reject this Consent',
      icon: '❌',
      iconColor: '#dc2626',
      textareaLabel: 'Reason for rejection',
      placeholder: 'Provide a clear reason so the maker understands why this was rejected…',
      confirmLabel: 'Confirm Rejection',
      confirmColor: 'warn',
      minLength: 20,
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: '520px', disableClose: true, data });
    ref.afterClosed().subscribe((reason) => {
      if (!reason) {
        return;
      }
      this.busy.set(true);
      this.api.reviewConsent(c.id, 'REJECT', reason).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.error('❌ Consent rejected.', res.message || '');
            setTimeout(() => void this.router.navigateByUrl('/checker/pending'), 1200);
          }
        },
        error: () => {
          this.busy.set(false);
        },
      });
    });
  }

  canDecide(): boolean {
    return this.consent()?.status === 'PENDING_APPROVAL';
  }
}
