import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConsentRulesService } from '../../../core/services/consent-rules.service';
import { AuditService } from '../../../core/services/audit.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConsentRule } from '../../../core/models/workflow.model';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { ConfirmDialogComponent, ConfirmDialogData } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ReviewActionDialogComponent, ReviewActionDialogData } from '../../../shared/components/review-action-dialog/review-action-dialog.component';
import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checker-rule-review',
  standalone: true,
  imports: [RouterLink, MatButtonModule, WorkflowStatusBadgeComponent, CommonModule],
  templateUrl: './checker-rule-review.component.html',
  styleUrl: './checker-rule-review.component.scss',
})
export class CheckerRuleReviewComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly api = inject(ConsentRulesService);
  private readonly auditApi = inject(AuditService);
  private readonly dialog = inject(MatDialog);
  private readonly notify = inject(NotificationService);

  readonly rule = signal<ConsentRule | null>(null);
  readonly audit = signal<AuditLogEntry[]>([]);
  readonly busy = signal(false);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getById(id).subscribe((res) => {
      if (res.success && res.data) {
        this.rule.set(res.data);
      }
    });
    this.auditApi.getEntityAuditTrail('CONSENT_RULE', id).subscribe((r) => {
      if (r.success && r.data) {
        this.audit.set(r.data);
      }
    });
  }

  canDecide(): boolean {
    return this.rule()?.status === 'PENDING_CHECKER_APPROVAL';
  }

  // approve(): void {
  //   const r = this.rule();
  //   if (!r) {
  //     return;
  //   }
  //   const data: ConfirmDialogData = {
  //     icon: '✅',
  //     iconColor: 'rgba(22,163,74,0.15)',
  //     title: 'Approve this rule?',
  //     body: `'${r.ruleName}' will be marked approved. The maker can publish it live when ready.`,
  //     cancelLabel: 'Cancel',
  //     confirmLabel: 'Approve',
  //     confirmColor: 'success',
  //   };
  //   const ref = this.dialog.open(ConfirmDialogComponent, { width: '460px', disableClose: true, data });
  //   ref.afterClosed().subscribe((ok) => {
  //     if (!ok) {
  //       return;
  //     }
  //     this.busy.set(true);
  //     this.api.review(r.id, { action: 'APPROVE' }).subscribe({
  //       next: (res) => {
  //         this.busy.set(false);
  //         if (res.success) {
  //           this.notify.success('Approved', res.message || '');
  //           setTimeout(() => void this.router.navigateByUrl('/checker/rules/pending'), 1200);
  //         }
  //       },
  //       error: () => this.busy.set(false),
  //     });
  //   });
  // }

  approve(): void {
    const r = this.rule();
    if (!r) return;

    // Collect mandatory approval reason via the same dialog used for reject/revision
    const data: ReviewActionDialogData = {
      title: 'Approve this rule',
      icon: '✅',
      iconColor: 'rgba(22,163,74,0.15)',
      textareaLabel: 'Reason for approval',
      placeholder: 'Describe why this rule meets the required criteria…',
      confirmLabel: 'Confirm Approval',
      confirmColor: 'success',
      minLength: 10,
    };

    const ref = this.dialog.open(ReviewActionDialogComponent, {
      width: '520px',
      disableClose: true,
      data,
    });

    ref.afterClosed().subscribe((approveReason: string | undefined) => {
      if (!approveReason) return;   // user cancelled

      this.busy.set(true);
      this.api.review(r.id, { action: 'APPROVE', approveReason }).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.success('Approved', res.message || '');
            setTimeout(() => void this.router.navigateByUrl('/checker/rules/pending'), 1200);
          }
        },
        error: () => this.busy.set(false),
      });
    });
  }

  revision(): void {
    const r = this.rule();
    if (!r) {
      return;
    }
    const data: ReviewActionDialogData = {
      title: 'Request revision',
      icon: '↩',
      iconColor: '#d97706',
      textareaLabel: 'What should the maker change?',
      placeholder: 'Be specific about policy, segments, or schedule…',
      confirmLabel: 'Send revision request',
      confirmColor: 'warning',
      minLength: 20,
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: '520px', disableClose: true, data });
    ref.afterClosed().subscribe((msg) => {
      if (!msg) {
        return;
      }
      this.busy.set(true);
      this.api.review(r.id, { action: 'REQUEST_REVISION', revisionMessage: msg }).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.warning('Revision requested', res.message || '');
            setTimeout(() => void this.router.navigateByUrl('/checker/rules/pending'), 1200);
          }
        },
        error: () => this.busy.set(false),
      });
    });
  }

  reject(): void {
    const r = this.rule();
    if (!r) {
      return;
    }
    const data: ReviewActionDialogData = {
      title: 'Reject rule',
      icon: '❌',
      iconColor: '#dc2626',
      textareaLabel: 'Reason for rejection',
      placeholder: 'Provide a clear reason…',
      confirmLabel: 'Reject',
      confirmColor: 'warn',
      minLength: 20,
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: '520px', disableClose: true, data });
    ref.afterClosed().subscribe((reason) => {
      if (!reason) {
        return;
      }
      this.busy.set(true);
      this.api.review(r.id, { action: 'REJECT', reason }).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.error('Rejected', res.message || '');
            setTimeout(() => void this.router.navigateByUrl('/checker/rules/pending'), 1200);
          }
        },
        error: () => this.busy.set(false),
      });
    });
  }
}
