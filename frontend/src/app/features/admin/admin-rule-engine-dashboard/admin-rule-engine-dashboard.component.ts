import { DatePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import {
  AdminRuleEngineService,
  AdminRuleEngineDashboardStats,
  ConsentRuleExecutionRow,
} from '../../../core/services/admin-rule-engine.service';
import { ConsentRule, audienceSegmentLabel } from '../../../core/models/workflow.model';
import { ConfirmDialogData } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { RuleEngineRuleDetailDialogComponent, RuleEngineRuleDetailDialogData } from '../rule-engine-rule-detail-dialog/rule-engine-rule-detail-dialog.component';
import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';
import { ConfirmDialogService } from '../../../shared/components/confirm-dialog/confirm-dialog.service';
import { NotificationService } from '../../../core/services/notification.service';

const ALL_SCHEDULE_TYPES = ['IMMEDIATE', 'SCHEDULED', 'RECURRING'];

@Component({
  selector: 'app-admin-rule-engine-dashboard',
  standalone: true,
  imports: [
    DatePipe,
    TitleCasePipe,
    LowerCasePipe,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ButtonModule,
    WorkflowStatusBadgeComponent,
  ],
  templateUrl: './admin-rule-engine-dashboard.component.html',
  styleUrl: './admin-rule-engine-dashboard.component.css',
})
export class AdminRuleEngineDashboardComponent implements OnInit, OnDestroy {
  private readonly api = inject(AdminRuleEngineService);
  private readonly dialogs = inject(DialogService);
  private readonly confirmDialog = inject(ConfirmDialogService);
  private readonly notify = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();

  readonly min = Math.min;

  readonly loading = signal(true);
  readonly stats = signal<AdminRuleEngineDashboardStats | null>(null);

  private readonly allRules = signal<ConsentRule[]>([]);

  readonly totalPages = signal(0);
  readonly totalItems = signal(0);
  readonly pageIndex = signal(0);
  readonly pageSize = signal(5);

  filterSearch = '';
  filterSchedule = '';

  readonly allScheduleTypes = ALL_SCHEDULE_TYPES;

  readonly rules = computed(() => this.allRules());
  readonly rulesLoading = signal(false);
  readonly appliedFilters = signal(false);
  private searchTimer?: ReturnType<typeof setTimeout>;

  readonly execPageIndex = signal(0);
  readonly execPageSize = signal(5);
  readonly execTotalPages = signal(0);
  readonly execTotalItems = signal(0);
  readonly execRows = signal<ConsentRuleExecutionRow[]>([]);
  readonly execLoading = signal(false);

  ngOnInit(): void {
    this.loadAll();
  }

  ngOnDestroy(): void {
    clearTimeout(this.searchTimer);
    this.destroy$.next();
    this.destroy$.complete();
  }

  applyFilters(): void {
    clearTimeout(this.searchTimer);
    this.pageIndex.set(0);
    this.loadRulesOnly();
  }

  onSearchInput(value: string): void {
    this.filterSearch = value;
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => this.applyFilters(), 300);
  }

  clearFilters(): void {
    this.filterSearch = '';
    this.filterSchedule = '';
    this.applyFilters();
  }

  loadExecutions() {
    return this.api.listAllExecutionsPaged(this.execPageIndex(), this.execPageSize());
  }

  loadAll(): void {
    this.loading.set(true);
    this.execLoading.set(true);

    forkJoin({
      stats: this.api.getDashboardStats(),
      rules: this.api.listApprovedRules(this.pageIndex(), this.pageSize(), this.filterSearch, this.filterSchedule),
      executions: this.loadExecutions(),
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ({ stats, rules, executions }) => {
          this.loading.set(false);
          this.execLoading.set(false);

          if (stats.success && stats.data) {
            this.stats.set(stats.data);
          }

          if (rules.success && rules.data) {
            this.allRules.set(rules.data.content);
            this.totalPages.set(rules.data.totalPages);
            this.totalItems.set(rules.data.totalElements);
          }

          if (executions.success && executions.data) {
            this.execRows.set(executions.data.content);
            this.execTotalPages.set(executions.data.totalPages);
            this.execTotalItems.set(executions.data.totalElements);
          }
        },
        error: () => {
          this.loading.set(false);
          this.execLoading.set(false);
        },
      });
  }

  channels(rule: ConsentRule): string {
    return (rule.broadcastChannels ?? []).join(', ') || '—';
  }

  primarySegmentLabel(rule: ConsentRule): string {
    return audienceSegmentLabel(rule.primarySegment);
  }

  onExecutionSlideChange(rule: ConsentRule, ev: Event): void {
    const desired = (ev.target as HTMLInputElement).checked;
    (ev.target as HTMLInputElement).checked = !desired;

    this.confirmDialog.open({
        title: desired ? 'Activate rule for execution?' : 'Deactivate rule?',
        body: desired
          ? `Enable automatic and manual runs for "${rule.ruleName}" according to its schedule.`
          : `Automatic runs will stop for "${rule.ruleName}". The rule remains approved and visible here.`,
        confirmLabel: desired ? 'Activate' : 'Deactivate',
        confirmColor: desired ? 'primary' : 'warn',
      } as ConfirmDialogData).subscribe((ok) => {
      if (!ok) return;
      this.api.setExecutionActive(rule.id, desired).subscribe({
        next: (r) => {
          if (r.success) {
            rule.executionActive = desired;
            this.allRules.set([...this.allRules()]);
            this.loadAll();
          }
        },
      });
    });
  }

  private notifyRunOutcome(
    name: string,
    status: string | undefined,
    eligible: number | undefined,
    notes: string | null | undefined,
  ): void {
    const detail = [eligible != null ? `${eligible} eligible customer(s)` : '', notes || ''].filter(Boolean).join(' · ');
    if (status === 'SUCCESS') {
      this.notify.success('Run completed', `"${name}" ran successfully${detail ? ' — ' + detail : ''}.`);
    } else if (status === 'PARTIAL') {
      this.notify.warning('Run partially completed', `"${name}" finished with some failures${detail ? ' — ' + detail : ''}.`);
    } else if (status === 'FAILED') {
      this.notify.error('Run failed', `"${name}" could not be delivered${detail ? ' — ' + detail : ''}.`);
    } else {
      this.notify.success('Run started', `"${name}" has been triggered. See the execution history for the result.`);
    }
  }

  canManualRun(rule: ConsentRule): boolean {
    return rule.status === 'LIVE' && !!rule.executionActive;
  }

  manualRun(rule: ConsentRule): void {
    if (!this.canManualRun(rule)) {
      this.notify.error('Execution', 'Only LIVE (active) rules can be run. Activate this rule first.');
      return;
    }
    const tplId = rule.consentTemplateId;
    const nonEmail = (rule.broadcastChannels || []).filter((c) => c !== 'EMAIL');
    const run = (n: number, infoPanel?: string) => {
      const channelNote = nonEmail.length
        ? ` Only Email is delivered at the moment; ${nonEmail.join(', ')} will be recorded as failed.`
        : '';
      this.confirmDialog.open({
          title: 'Run rule now?',
          body: `About ${n} customer(s) match the audience for "${rule.ruleName}". Communications will be sent for configured channels (email uses secure consent links to the customer's registered address).${channelNote}`,
          infoPanel,
          confirmLabel: 'Run now',
          confirmColor: 'success',
        } as ConfirmDialogData).subscribe((ok) => {
        if (!ok) return;
        this.api.manualRun(rule.id).subscribe({
          next: (res) => {
            this.loadAll();
            this.notifyRunOutcome(rule.ruleName, res.data?.status, res.data?.eligibleCount, res.data?.summaryNotes);
          },
        });
      });
    };

    if (tplId != null) {
      forkJoin({
        eligible: this.api.previewAudience(rule.id),
        breakdown: this.api.previewAudienceBreakdown(rule.id),
      })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: ({ eligible, breakdown }) => {
            const n = eligible.data ?? 0;
            let info: string | undefined;
            if (breakdown.success && breakdown.data) {
              const d = breakdown.data;
              info = `${d.alreadyAcceptedExcludedCount} of ${d.grossAudienceCount} segment matches have already accepted this template and will be excluded from re-invite.`;
            }
            run(n, info);
          },
        });
    } else {
      this.api
        .previewAudience(rule.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (prev) => run(prev.data ?? 0),
        });
    }
  }

  openHistory(rule: ConsentRule): void {
    this.dialogs.open(RuleEngineRuleDetailDialogComponent, {
      data: { ruleId: rule.id, ruleName: rule.ruleName } as RuleEngineRuleDetailDialogData,
      showHeader: false,
      modal: true,
      closable: false,
      closeOnEscape: true,
      dismissableMask: true,
      width: '46rem',
      breakpoints: { '760px': 'calc(100vw - 32px)' },
      // Shared dialog frame styling (src/styles/_primeng.scss).
      styleClass: 'review-action-dialog',
    });
  }

  onPageChange(newPage: number): void {
    this.pageIndex.set(newPage);
    this.loadRulesOnly();
  }

  onPageSizeChange(ev: Event): void {
    this.pageSize.set(Number((ev.target as HTMLSelectElement).value));
    this.pageIndex.set(0);
    this.loadRulesOnly();
  }

  trackById(_i: number, r: ConsentRule): number {
    return r.id;
  }

  recent(): ConsentRuleExecutionRow[] {
    return this.stats()?.recentExecutions ?? [];
  }

  executionRecentLabel(status: string): string {
    if (status === 'PARTIAL') {
      return 'Partially Delivered';
    }
    return status;
  }

  private loadRulesOnly(): void {
    this.rulesLoading.set(true);
    const filtered = !!(this.filterSearch.trim() || this.filterSchedule);
    this.api
      .listApprovedRules(this.pageIndex(), this.pageSize(), this.filterSearch, this.filterSchedule)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (rules) => {
          this.rulesLoading.set(false);
          if (rules.success && rules.data) {
            this.appliedFilters.set(filtered);
            this.allRules.set(rules.data.content);
            this.totalPages.set(rules.data.totalPages);
            this.totalItems.set(rules.data.totalElements);
          }
        },
        error: () => this.rulesLoading.set(false),
      });
  }

  onExecPageChange(page: number): void {
    this.execPageIndex.set(page);
    this.loadExecutionsViaSubscribe();
  }

  onExecSizeChange(ev: Event): void {
    this.execPageSize.set(Number((ev.target as HTMLSelectElement).value));
    this.execPageIndex.set(0);
    this.loadExecutionsViaSubscribe();
  }

  loadExecutionsViaSubscribe(): void {
    this.execLoading.set(true);
    this.api.listAllExecutionsPaged(this.execPageIndex(), this.execPageSize())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (r) => {
          this.execLoading.set(false);
          if (r.success && r.data) {
            this.execRows.set(r.data.content);
            this.execTotalPages.set(r.data.totalPages);
            this.execTotalItems.set(r.data.totalElements);
          }
        },
        error: () => this.execLoading.set(false),
      });
  }

  allSegmentLabels(rule: ConsentRule): string {
    const primary = audienceSegmentLabel(rule.primarySegment);
    const additional = (rule.additionalSegmentCodes ?? [])
      .map(code => audienceSegmentLabel(code as any));
    return [primary, ...additional].join(', ');
  }

  languages(rule: ConsentRule): string {
    return (rule.consentTemplateLanguages ?? []).join(', ') || '—';
  }
}