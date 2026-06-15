import { DatePipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { forkJoin, map } from 'rxjs';
import { AuditService } from '../../../core/services/audit.service';
import { AdminRuleEngineService, ConsentRuleExecutionRow } from '../../../core/services/admin-rule-engine.service';
import { AuditLogEntry } from '../../../core/models/audit.model';

export interface RuleEngineRuleDetailDialogData {
  ruleId: number;
  ruleName: string;
}

@Component({
  selector: 'app-rule-engine-rule-detail-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    DatePipe,
  ],
  template: `
    <h2 mat-dialog-title>Rule activity — {{ data.ruleName }}</h2>
    <mat-dialog-content class="dlg">
      @if (loading()) {
        <div class="spin">
          <mat-progress-spinner diameter="40" mode="indeterminate" />
        </div>
      } @else {
        <mat-tab-group>
          <mat-tab label="Audit history">
            @if (!audit().length) {
              <p class="empty">No audit entries recorded for this rule yet.</p>
            } @else {
              <ul class="list">
                @for (a of audit(); track a.id) {
                  <li>
                    <div class="row-top">
                      <span class="action">{{ a.action }}</span>
                      <span class="time">{{ a.performedAt | date : 'medium' }}</span>
                    </div>
                    <div class="meta">{{ a.userName }} · {{ a.description }}</div>
                  </li>
                }
              </ul>
            }
          </mat-tab>
          <mat-tab label="Execution history">
            @if (!executions().length) {
              <p class="empty">No executions recorded yet.</p>
            } @else {
              <ul class="list">
                @for (e of executions(); track e.id) {
                  <li>
                    <div class="row-top">
                      <span class="action"
                        >{{ e.triggerType }} · {{ executionOutcomeLabel(e.status) }}</span
                      >
                      <span class="time">{{ e.startedAt | date : 'medium' }}</span>
                    </div>
                    <div class="meta">
                      Audience {{ e.eligibleCount }}
                      @if (e.triggeredByName) {
                        · {{ e.triggeredByName }}
                      }
                      @if (e.chunksTotal != null && e.chunksTotal > 0 && e.chunksCompleted != null) {
                        · {{ e.chunksCompleted }} of {{ e.chunksTotal }} chunks
                      }
                    </div>
                    @if (e.summaryNotes) {
                      <div class="sum">{{ e.summaryNotes }}</div>
                    }
                    @if (e.progressNotes) {
                      <div class="sum sum--detail">{{ e.progressNotes }}</div>
                    }
                    @if (e.channelResults && channelEntries(e.channelResults).length) {
                      <div class="channels">
                        @for (ch of channelEntries(e.channelResults); track ch.key) {
                          <div class="ch-row">
                            <strong>{{ ch.key }}</strong>
                            <span class="ch-meta">
                              attempted {{ dig(ch.row, 'attempted') }} · delivered {{ dig(ch.row, 'delivered') }}
                              @if (dig(ch.row, 'failures') != null) {
                                · failures {{ dig(ch.row, 'failures') }}
                              }
                            </span>
                          </div>
                        }
                      </div>
                    }
                  </li>
                }
              </ul>
            }
          </mat-tab>
        </mat-tab-group>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button class="close-btn" type="button" mat-stroked-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: `
    .dlg {
      min-width: min(520px, 92vw);
      max-height: 70vh;
    }
    .spin {
      display: flex;
      justify-content: center;
      padding: 32px;
    }
    .empty {
      color: #64748b;
      font-size: 14px;
      padding: 16px 0;
    }
    .list {
      list-style: none;
      margin: 0;
      padding: 8px 0 0;
      max-height: 48vh;
      overflow: auto;
    }
    li {
      border-bottom: 1px solid #e2e8f0;
      padding: 12px 0;
    }
    .row-top {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      font-size: 13px;
    }
    .action {
      font-weight: 600;
      color: #0f172a;
    }
    .time {
      color: #64748b;
      flex-shrink: 0;
    }
    .meta {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
    }
    .sum {
      font-size: 12px;
      color: #334155;
      margin-top: 6px;
      line-height: 1.4;
    }
    .sum--detail {
      white-space: pre-wrap;
      color: #475569;
    }
    .channels {
      margin-top: 8px;
      font-size: 12px;
      color: #475569;
    }
    .ch-row {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      margin-top: 4px;
    }
    .ch-meta {
      flex-shrink: 0;
    }
    .close-btn
    {
      margin: 10px auto 10px;
      background-color: rgb(224, 68, 68);
      color: white;
      width: 90%;
    }
  `,
})
export class RuleEngineRuleDetailDialogComponent implements OnInit {
  readonly data = inject<RuleEngineRuleDetailDialogData>(MAT_DIALOG_DATA);
  private readonly auditApi = inject(AuditService);
  private readonly ruleEngine = inject(AdminRuleEngineService);

  readonly loading = signal(true);
  readonly audit = signal<AuditLogEntry[]>([]);
  readonly executions = signal<ConsentRuleExecutionRow[]>([]);

  executionOutcomeLabel(status: string): string {
    if (status === 'PARTIAL') {
      return 'Partially Delivered';
    }
    return status;
  }

  channelEntries(raw: Record<string, unknown>): { key: string; row: Record<string, unknown> }[] {
    const out: { key: string; row: Record<string, unknown> }[] = [];
    for (const [key, val] of Object.entries(raw)) {
      if (key.startsWith('_')) {
        continue;
      }
      if (val && typeof val === 'object' && !Array.isArray(val)) {
        out.push({ key, row: val as Record<string, unknown> });
      }
    }
    return out;
  }

  dig(row: Record<string, unknown>, k: string): unknown {
    return row[k];
  }

  ngOnInit(): void {
    forkJoin({
      audit: this.auditApi
        .getEntityAuditTrail('CONSENT_RULE', this.data.ruleId)
        .pipe(map((r) => r.data ?? [])),
      ex: this.ruleEngine.listExecutions(this.data.ruleId).pipe(map((r) => r.data ?? [])),
    }).subscribe({
      next: ({ audit, ex }) => {
        this.loading.set(false);
        this.audit.set(audit);
        this.executions.set(ex);
      },
      error: () => this.loading.set(false),
    });
  }
}
