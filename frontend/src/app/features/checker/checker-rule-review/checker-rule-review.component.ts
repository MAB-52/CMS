import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConsentRulesService } from '../../../core/services/consent-rules.service';
import { AuditService } from '../../../core/services/audit.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConsentRule } from '../../../core/models/workflow.model';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { ConfirmDialogComponent, ConfirmDialogData } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ReviewActionDialogData } from '../../../shared/components/review-action-dialog/review-action-dialog.component';
import { ReviewActionDialogService } from '../../../shared/components/review-action-dialog/review-action-dialog.service';
import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';
import { DecisionBarComponent } from '../../../shared/components/decision-bar/decision-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checker-rule-review',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, WorkflowStatusBadgeComponent, CommonModule, DecisionBarComponent],
  templateUrl: './checker-rule-review.component.html',
  styleUrl: './checker-rule-review.component.css',
})
export class CheckerRuleReviewComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly api = inject(ConsentRulesService);
  private readonly auditApi = inject(AuditService);
  private readonly reviewDialog = inject(ReviewActionDialogService);
  private readonly notify = inject(NotificationService);

  readonly rule = signal<ConsentRule | null>(null);
  readonly audit = signal<AuditLogEntry[]>([]);
  readonly busy = signal(false);
  readonly loading = signal(true);
  readonly loadState = signal<'ok' | 'notFound' | 'error'>('ok');
  private ruleId = 0;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ruleId = id;
    if (!Number.isFinite(id) || id <= 0) {
      this.loading.set(false);
      this.loadState.set('notFound');
      return;
    }
    this.loadRule(id);
    this.auditApi.getEntityAuditTrail('CONSENT_RULE', id).subscribe((r) => {
      if (r.success && r.data) {
        this.audit.set(r.data);
      }
    });
  }

  private loadRule(id: number): void {
    this.loading.set(true);
    this.api.getById(id).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.rule.set(res.data);
          this.loadState.set('ok');
        } else {
          this.loadState.set('notFound');
        }
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.loadState.set(err.status === 404 || err.status === 400 ? 'notFound' : 'error');
      },
    });
  }

  retry(): void {
    this.loadRule(this.ruleId);
  }

  statusBanner(r: ConsentRule): { title: string; desc: string; icon: string; tone: string } {
    switch (r.status) {
      case 'PENDING_CHECKER_APPROVAL':
        return {
          title: 'Review Pending Approval',
          desc: 'Validate the rule configuration carefully before approving, rejecting, or requesting changes.',
          icon: 'settings_suggest',
          tone: 'pending',
        };
      case 'LIVE':
      case 'APPROVED':
        return {
          title: r.status === 'LIVE' ? 'Approved and live' : 'Approved · execution paused',
          desc: 'This rule has already been approved. No further checker decision is needed.',
          icon: 'task_alt',
          tone: 'done',
        };
      case 'REJECTED':
        return {
          title: 'Rejected',
          desc: r.rejectionReason || 'This rule was rejected.',
          icon: 'cancel',
          tone: 'rejected',
        };
      case 'REVISION_REQUESTED':
        return {
          title: 'Revision requested',
          desc: r.revisionReason || 'Sent back to the maker for changes.',
          icon: 'assignment_return',
          tone: 'revision',
        };
      default:
        return {
          title: 'Not submitted yet',
          desc: 'This rule is still a draft with the maker.',
          icon: 'edit_note',
          tone: 'draft',
        };
    }
  }

  private onDecisionError(id: number, err: HttpErrorResponse): void {
    this.busy.set(false);
    if (err.status === 409) {
      this.loadRule(id);
    }
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
  //     iconColor: 'rgba(25,135,84,0.15)',
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
      iconColor: 'rgba(25,135,84,0.15)',
      textareaLabel: 'Reason for approval',
      placeholder: 'Describe why this rule meets the required criteria…',
      confirmLabel: 'Confirm Approval',
      confirmColor: 'success',
      minLength: 10,
    };

    this.reviewDialog.open(data).subscribe((result) => {
      if (!result) return;   // user cancelled
      const approveReason = result.message;

      this.busy.set(true);
      this.api.review(r.id, { action: 'APPROVE', approveReason }).subscribe({
        next: (res) => {
          if (!res.success) {
            this.busy.set(false);
          }
          if (res.success) {
            this.notify.success('Approved', res.message || '');
            setTimeout(() => void this.router.navigateByUrl('/checker/rules/pending'), 1200);
          }
        },
        error: (err: HttpErrorResponse) => this.onDecisionError(r.id, err),
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
      iconColor: '#EA6B28',
      textareaLabel: 'What should the maker change?',
      placeholder: 'Be specific about policy, segments, or schedule…',
      confirmLabel: 'Send revision request',
      confirmColor: 'warning',
      minLength: 20,
    };
    this.reviewDialog.open(data).subscribe((result) => {
      if (!result) {
        return;
      }
      this.busy.set(true);
      this.api.review(r.id, { action: 'REQUEST_REVISION', revisionMessage: result.message }).subscribe({
        next: (res) => {
          if (!res.success) {
            this.busy.set(false);
          }
          if (res.success) {
            this.notify.warning('Revision requested', res.message || '');
            setTimeout(() => void this.router.navigateByUrl('/checker/rules/pending'), 1200);
          }
        },
        error: (err: HttpErrorResponse) => this.onDecisionError(r.id, err),
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
      iconColor: '#DC3545',
      textareaLabel: 'Reason for rejection',
      placeholder: 'Provide a clear reason…',
      confirmLabel: 'Reject',
      confirmColor: 'warn',
      minLength: 20,
    };
    this.reviewDialog.open(data).subscribe((result) => {
      if (!result) {
        return;
      }
      this.busy.set(true);
      this.api.review(r.id, { action: 'REJECT', reason: result.message }).subscribe({
        next: (res) => {
          if (!res.success) {
            this.busy.set(false);
          }
          if (res.success) {
            this.notify.error('Rejected', res.message || '');
            setTimeout(() => void this.router.navigateByUrl('/checker/rules/pending'), 1200);
          }
        },
        error: (err: HttpErrorResponse) => this.onDecisionError(r.id, err),
      });
    });
  }
}
