// import { DatePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
// import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
// import { Subject, forkJoin, takeUntil } from 'rxjs';
// import { FormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatDialog } from '@angular/material/dialog';
// import {
//   AdminRuleEngineService,
//   AdminRuleEngineDashboardStats,
//   ConsentRuleExecutionRow,
// } from '../../../core/services/admin-rule-engine.service';
// import { ConsentRule, audienceSegmentLabel } from '../../../core/models/workflow.model';
// import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';
// import {
//   ConfirmDialogComponent,
//   ConfirmDialogData,
// } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
// import {
//   RuleEngineRuleDetailDialogComponent,
//   RuleEngineRuleDetailDialogData,
// } from '../rule-engine-rule-detail-dialog/rule-engine-rule-detail-dialog.component';

// const ALL_SCHEDULE_TYPES = ['IMMEDIATE', 'SCHEDULED', 'RECURRING'];

// @Component({
//   selector: 'app-admin-rule-engine-dashboard',
//   standalone: true,
//   imports: [
//     DatePipe,
//     TitleCasePipe,
//     LowerCasePipe,
//     FormsModule,
//     MatButtonModule,
//     MatIconModule,
//     MatProgressBarModule,
//     MatTooltipModule,
//     MatChipsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatSelectModule,
//     WorkflowStatusBadgeComponent,
//   ],
//   templateUrl: './admin-rule-engine-dashboard.component.html',
//   styleUrl: './admin-rule-engine-dashboard.component.scss',
// })
// export class AdminRuleEngineDashboardComponent implements OnInit, OnDestroy {
//   private readonly api = inject(AdminRuleEngineService);
//   private readonly dialog = inject(MatDialog);
//   private readonly destroy$ = new Subject<void>();

//   readonly min = Math.min;

//   readonly loading = signal(true);
//   readonly stats = signal<AdminRuleEngineDashboardStats | null>(null);

//   /** Raw rules loaded from the API - filtering is applied client-side via computed(). */
//   private readonly allRules = signal<ConsentRule[]>([]);

//   readonly totalPages = signal(0);
//   readonly totalItems = signal(0);
//   readonly pageIndex = signal(0);
//   readonly pageSize = signal(5);

//   // ── All-executions table ──────────────────────────────────────────────
//   readonly allExecRows = signal<ConsentRuleExecutionRow[]>([]);
//   readonly execPageIndex = signal(0);
//   readonly execPageSize = signal(10);
//   readonly execTotalPages = signal(0);
//   readonly execTotalItems = signal(0);
//   readonly execLoading = signal(false);

//   // Filters
//   filterSearch = '';
//   filterSchedule = '';

//   readonly allScheduleTypes = ALL_SCHEDULE_TYPES;

//   /**
//    * Filtered view of the current page - recomputes automatically whenever
//    * allRules changes. filterSearch/filterSchedule are plain properties so
//    * applyFilters() triggers a dummy signal write to force recomputation.
//    */
//   private readonly _filterTick = signal(0);

//   readonly rules = computed(() => {
//     this._filterTick(); // subscribe to manual filter trigger
//     const search = this.filterSearch.trim().toLowerCase();
//     const schedule = this.filterSchedule;
//     return this.allRules().filter((r) => {
//       const matchesSearch = !search || r.ruleName.toLowerCase().includes(search);
//       const matchesSchedule = !schedule || r.scheduleType === schedule;
//       return matchesSearch && matchesSchedule;
//     });
//   });

//   ngOnInit(): void {
//     this.loadAllExecutions();
//     this.loadAll();
//   }

//   ngOnDestroy(): void {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }

//   applyFilters(): void {
//     this.pageIndex.set(0);
//     this._filterTick.update((v) => v + 1);
//   }

//   clearFilters(): void {
//     this.filterSearch = '';
//     this.filterSchedule = '';
//     this.pageIndex.set(0);
//     this._filterTick.update((v) => v + 1);
//   }

//   loadAll(): void {
//     this.loading.set(true);
//     forkJoin({
//       stats: this.api.getDashboardStats(),
//       rules: this.api.listApprovedRules(this.pageIndex(), this.pageSize()),
//     })
//       .pipe(takeUntil(this.destroy$))
//       .subscribe({
//         next: ({ stats, rules }) => {
//           this.loading.set(false);
//           if (stats.success && stats.data) {
//             this.stats.set(stats.data);
//           }
//           if (rules.success && rules.data) {
//             this.allRules.set(rules.data.content);
//             this.totalPages.set(rules.data.totalPages);
//             this.totalItems.set(rules.data.totalElements);
//           }
//         },
//         error: () => this.loading.set(false),
//       });
//   }

//   channels(rule: ConsentRule): string {
//     return (rule.broadcastChannels ?? []).join(', ') || '—';
//   }

//   primarySegmentLabel(rule: ConsentRule): string {
//     return audienceSegmentLabel(rule.primarySegment);
//   }

//   onExecutionSlideChange(rule: ConsentRule, ev: Event): void {
//     const desired = (ev.target as HTMLInputElement).checked;
//     (ev.target as HTMLInputElement).checked = !desired;

//     const ref = this.dialog.open(ConfirmDialogComponent, {
//       data: {
//         title: desired ? 'Activate rule for execution?' : 'Deactivate rule?',
//         body: desired
//           ? `Enable automatic and manual runs for "${rule.ruleName}" according to its schedule.`
//           : `Automatic runs will stop for "${rule.ruleName}". The rule remains approved and visible here.`,
//         confirmLabel: desired ? 'Activate' : 'Deactivate',
//         confirmColor: desired ? 'primary' : 'warn',
//       } as ConfirmDialogData,
//     });

//     ref.afterClosed().subscribe((ok) => {
//       if (!ok) return;
//       this.api.setExecutionActive(rule.id, desired).subscribe({
//         next: (r) => {
//           if (r.success) {
//             rule.executionActive = desired;
//             this.allRules.set([...this.allRules()]);
//             this.loadAll();
//           }
//         },
//       });
//     });
//   }

//   manualRun(rule: ConsentRule): void {
//     const tplId = rule.consentTemplateId;
//     const run = (n: number, infoPanel?: string) => {
//       const ref = this.dialog.open(ConfirmDialogComponent, {
//         data: {
//           title: 'Run rule now?',
//           body: `About ${n} customer(s) match the audience for "${rule.ruleName}". Communications will be sent for configured channels (email uses secure consent links to the customer's registered address).`,
//           infoPanel,
//           confirmLabel: 'Run now',
//           confirmColor: 'success',
//         } as ConfirmDialogData,
//       });
//       ref.afterClosed().subscribe((ok) => {
//         if (!ok) return;
//         this.api.manualRun(rule.id).subscribe({
//           next: () => this.loadAll(),
//         });
//       });
//     };

//     if (tplId != null) {
//       forkJoin({
//         eligible: this.api.previewAudience(rule.id),
//         breakdown: this.api.previewAudienceBreakdown(rule.id),
//       })
//         .pipe(takeUntil(this.destroy$))
//         .subscribe({
//           next: ({ eligible, breakdown }) => {
//             const n = eligible.data ?? 0;
//             let info: string | undefined;
//             if (breakdown.success && breakdown.data) {
//               const d = breakdown.data;
//               info = `${d.alreadyAcceptedExcludedCount} of ${d.grossAudienceCount} segment matches have already accepted this template and will be excluded from re-invite.`;
//             }
//             run(n, info);
//           },
//         });
//     } else {
//       this.api
//         .previewAudience(rule.id)
//         .pipe(takeUntil(this.destroy$))
//         .subscribe({
//           next: (prev) => run(prev.data ?? 0),
//         });
//     }
//   }

//   openHistory(rule: ConsentRule): void {
//     this.dialog.open(RuleEngineRuleDetailDialogComponent, {
//       data: { ruleId: rule.id, ruleName: rule.ruleName } as RuleEngineRuleDetailDialogData,
//       width: '560px',
//     });
//   }

//   onPageChange(newPage: number): void {
//     this.pageIndex.set(newPage);
//     this.loadRulesOnly();
//   }

//   onPageSizeChange(ev: Event): void {
//     this.pageSize.set(Number((ev.target as HTMLSelectElement).value));
//     this.pageIndex.set(0);
//     this.loadRulesOnly();
//   }

//   trackById(_i: number, r: ConsentRule): number {
//     return r.id;
//   }

//   recent(): ConsentRuleExecutionRow[] {
//     return this.stats()?.recentExecutions ?? [];
//   }

//   executionRecentLabel(status: string): string {
//     if (status === 'PARTIAL') {
//       return 'Partially Delivered';
//     }
//     return status;
//   }

//   /** Page changes only reload rules - stats stay cached to avoid redundant calls. */
//   private loadRulesOnly(): void {
//     this.loading.set(true);
//     this.api
//       .listApprovedRules(this.pageIndex(), this.pageSize())
//       .pipe(takeUntil(this.destroy$))
//       .subscribe({
//         next: (rules) => {
//           this.loading.set(false);
//           if (rules.success && rules.data) {
//             this.allRules.set(rules.data.content);
//             this.totalPages.set(rules.data.totalPages);
//             this.totalItems.set(rules.data.totalElements);
//           }
//         },
//         error: () => this.loading.set(false),
//       });
//   }

//   loadAllExecutions(): void {
//     this.execLoading.set(true);
//     this.api
//       .listAllExecutions(this.execPageIndex(), this.execPageSize())
//       .pipe(takeUntil(this.destroy$))
//       .subscribe({
//         next: (res) => {
//           this.execLoading.set(false);
//           if (res.success && res.data) {
//             this.allExecRows.set(res.data.content);
//             this.execTotalPages.set(res.data.totalPages);
//             this.execTotalItems.set(res.data.totalElements);
//           }
//         },
//         error: () => this.execLoading.set(false),
//       });
//   }

//   onExecPageChange(newPage: number): void {
//     this.execPageIndex.set(newPage);
//     this.loadAllExecutions();
//   }

//   onExecPageSizeChange(ev: Event): void {
//     this.execPageSize.set(Number((ev.target as HTMLSelectElement).value));
//     this.execPageIndex.set(0);
//     this.loadAllExecutions();
//   }
// }


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
import { MatDialog } from '@angular/material/dialog';
import {
  AdminRuleEngineService,
  AdminRuleEngineDashboardStats,
  ConsentRuleExecutionRow,
} from '../../../core/services/admin-rule-engine.service';
import { ConsentRule, audienceSegmentLabel } from '../../../core/models/workflow.model';
import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import {
  RuleEngineRuleDetailDialogComponent,
  RuleEngineRuleDetailDialogData,
} from '../rule-engine-rule-detail-dialog/rule-engine-rule-detail-dialog.component';

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
    WorkflowStatusBadgeComponent,
  ],
  templateUrl: './admin-rule-engine-dashboard.component.html',
  styleUrl: './admin-rule-engine-dashboard.component.scss',
})
export class AdminRuleEngineDashboardComponent implements OnInit, OnDestroy {
  private readonly api = inject(AdminRuleEngineService);
  private readonly dialog = inject(MatDialog);
  private readonly destroy$ = new Subject<void>();

  readonly min = Math.min;

  readonly loading = signal(true);
  readonly stats = signal<AdminRuleEngineDashboardStats | null>(null);

  /** Raw rules loaded from the API - filtering is applied client-side via computed(). */
  private readonly allRules = signal<ConsentRule[]>([]);

  readonly totalPages = signal(0);
  readonly totalItems = signal(0);
  readonly pageIndex = signal(0);
  readonly pageSize = signal(5);

  // Filters
  filterSearch = '';
  filterSchedule = '';

  readonly allScheduleTypes = ALL_SCHEDULE_TYPES;

  /**
   * Filtered view of the current page - recomputes automatically whenever
   * allRules changes. filterSearch/filterSchedule are plain properties so
   * applyFilters() triggers a dummy signal write to force recomputation.
   */
  private readonly _filterTick = signal(0);

  readonly rules = computed(() => {
    this._filterTick(); // subscribe to manual filter trigger
    const search = this.filterSearch.trim().toLowerCase();
    const schedule = this.filterSchedule;
    return this.allRules().filter((r) => {
      const matchesSearch = !search || r.ruleName.toLowerCase().includes(search);
      const matchesSchedule = !schedule || r.scheduleType === schedule;
      return matchesSearch && matchesSchedule;
    });
  });

  // Execution signals
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
    this.destroy$.next();
    this.destroy$.complete();
  }

  applyFilters(): void {
    this.pageIndex.set(0);
    this._filterTick.update((v) => v + 1);
  }

  clearFilters(): void {
    this.filterSearch = '';
    this.filterSchedule = '';
    this.pageIndex.set(0);
    this._filterTick.update((v) => v + 1);
  }

  /** Returns an observable so it can be used inside forkJoin */
  loadExecutions() {
    return this.api.listAllExecutionsPaged(this.execPageIndex(), this.execPageSize());
  }

  loadAll(): void {
    this.loading.set(true);
    this.execLoading.set(true);

    forkJoin({
      stats: this.api.getDashboardStats(),
      rules: this.api.listApprovedRules(this.pageIndex(), this.pageSize()),
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

    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: desired ? 'Activate rule for execution?' : 'Deactivate rule?',
        body: desired
          ? `Enable automatic and manual runs for "${rule.ruleName}" according to its schedule.`
          : `Automatic runs will stop for "${rule.ruleName}". The rule remains approved and visible here.`,
        confirmLabel: desired ? 'Activate' : 'Deactivate',
        confirmColor: desired ? 'primary' : 'warn',
      } as ConfirmDialogData,
    });

    ref.afterClosed().subscribe((ok) => {
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

  manualRun(rule: ConsentRule): void {
    const tplId = rule.consentTemplateId;
    const run = (n: number, infoPanel?: string) => {
      const ref = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Run rule now?',
          body: `About ${n} customer(s) match the audience for "${rule.ruleName}". Communications will be sent for configured channels (email uses secure consent links to the customer's registered address).`,
          infoPanel,
          confirmLabel: 'Run now',
          confirmColor: 'success',
        } as ConfirmDialogData,
      });
      ref.afterClosed().subscribe((ok) => {
        if (!ok) return;
        this.api.manualRun(rule.id).subscribe({
          next: () => this.loadAll(),
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
    this.dialog.open(RuleEngineRuleDetailDialogComponent, {
      data: { ruleId: rule.id, ruleName: rule.ruleName } as RuleEngineRuleDetailDialogData,
      width: '560px',
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

  /** Page changes only reload rules - stats stay cached to avoid redundant calls. */
  private loadRulesOnly(): void {
    this.loading.set(true);
    this.api
      .listApprovedRules(this.pageIndex(), this.pageSize())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (rules) => {
          this.loading.set(false);
          if (rules.success && rules.data) {
            this.allRules.set(rules.data.content);
            this.totalPages.set(rules.data.totalPages);
            this.totalItems.set(rules.data.totalElements);
          }
        },
        error: () => this.loading.set(false),
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

  /** Separate method for pagination-only execution reload (not via forkJoin) */
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
}