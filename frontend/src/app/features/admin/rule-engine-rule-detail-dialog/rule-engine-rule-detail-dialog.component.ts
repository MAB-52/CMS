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
                      <span class="action">{{ e.triggerType }} · {{ executionOutcomeLabel(e.status) }}</span>
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
    <mat-dialog-actions align="end" class="dlg-actions">
      <button class="close-btn" type="button" mat-stroked-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [`
    :host {
      display: block;
      color: #251f1b;
    }

    .dlg {
      min-width: min(560px, 92vw);
      max-width: 100%;
      max-height: 70vh;
      padding-top: 6px;
      background:
        radial-gradient(circle at top right, rgba(125, 86, 111, 0.06), transparent 28%),
        linear-gradient(to bottom, #fffdfa 0%, #f8f2ed 100%);
      border-top: 1px solid rgba(125, 86, 111, 0.08);
    }

    .spin {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 24px;
      min-height: 180px;
    }

    .empty {
      color: #736760;
      font-size: 14px;
      padding: 20px 2px;
      margin: 0;
    }

    .list {
      list-style: none;
      margin: 0;
      padding: 10px 0 0;
      max-height: 48vh;
      overflow: auto;
    }

    .list li {
      border: 1px solid #eadfd7;
      background: linear-gradient(180deg, #fffdfa 0%, #fbf6f1 100%);
      box-shadow: 0 8px 18px rgba(67, 42, 30, 0.05);
      border-radius: 16px;
      padding: 14px;
      margin-bottom: 12px;
    }

    .row-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      font-size: 13px;
    }

    .action {
      font-weight: 700;
      color: #2e2521;
      line-height: 1.4;
      word-break: break-word;
    }

    .time {
      color: #8a7a70;
      flex-shrink: 0;
      white-space: nowrap;
      font-size: 12px;
      font-weight: 600;
    }

    .meta {
      font-size: 12px;
      color: #736760;
      margin-top: 6px;
      line-height: 1.5;
    }

    .sum {
      font-size: 12px;
      color: #4a403b;
      margin-top: 8px;
      line-height: 1.5;
      padding: 10px 12px;
      border-radius: 12px;
      background: rgba(125, 86, 111, 0.05);
      border: 1px solid rgba(125, 86, 111, 0.08);
    }

    .sum--detail {
      white-space: pre-wrap;
      color: #5d514c;
      background: rgba(215, 132, 51, 0.06);
      border-color: rgba(215, 132, 51, 0.12);
    }

    .channels {
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.72);
      border: 1px solid #eee2d9;
      font-size: 12px;
      color: #5d514c;
    }

    .ch-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
      margin-top: 6px;
      line-height: 1.45;
    }

    .ch-row:first-child {
      margin-top: 0;
    }

    .ch-row strong {
      color: #7d566f;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-size: 11px;
      min-width: 78px;
    }

    .ch-meta {
      color: #736760;
      text-align: right;
      word-break: break-word;
    }

    .dlg-actions {
      padding: 12px 24px 20px;
      border-top: 1px solid #eee3da;
      background: linear-gradient(to bottom, rgba(255, 250, 246, 0.4), rgba(248, 242, 237, 0.85));
    }

    .close-btn {
      margin: 0;
      background: linear-gradient(135deg, #7d566f 0%, #d78433 100%);
      color: #ffffff !important;
      border: none !important;
      min-width: 140px;
      height: 42px;
      border-radius: 12px !important;
      font-weight: 700;
      box-shadow: 0 10px 22px rgba(125, 86, 111, 0.22);
    }

    .close-btn:hover {
      filter: brightness(1.02);
      box-shadow: 0 12px 26px rgba(125, 86, 111, 0.28);
    }

    ::ng-deep .mat-mdc-dialog-title {
      margin: 0;
      padding: 22px 24px 14px;
      font-size: 20px;
      line-height: 1.3;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #251f1b;
      background: linear-gradient(to bottom, #fffdfa 0%, #fbf5f0 100%);
      border-bottom: 1px solid #eee3da;
    }

    ::ng-deep .mat-mdc-tab-group {
      --mdc-tab-indicator-active-indicator-color: #7d566f;
      --mat-tab-header-active-label-text-color: #7d566f;
      --mat-tab-header-active-ripple-color: rgba(125, 86, 111, 0.16);
      --mat-tab-header-inactive-ripple-color: rgba(125, 86, 111, 0.08);
      --mat-tab-header-active-focus-label-text-color: #7d566f;
      --mat-tab-header-active-hover-label-text-color: #7d566f;
      --mat-tab-header-active-focus-indicator-color: #7d566f;
      --mat-tab-header-active-hover-indicator-color: #7d566f;
    }

    ::ng-deep .mat-mdc-tab-header {
      border-bottom: 1px solid #eee3da;
      margin-bottom: 4px;
    }

    ::ng-deep .mdc-tab {
      min-height: 46px;
    }

    ::ng-deep .mdc-tab__text-label {
      font-size: 13px;
      font-weight: 700;
      color: #736760;
    }

    ::ng-deep .mat-mdc-progress-spinner circle,
    ::ng-deep .mdc-circular-progress__indeterminate-circle-graphic {
      stroke: #7d566f !important;
    }

    @media (max-width: 640px) {
      .dlg {
        min-width: min(100vw - 24px, 100%);
        max-height: 72vh;
      }

      .row-top {
        flex-direction: column;
        align-items: flex-start;
      }

      .time {
        white-space: normal;
      }

      .ch-row {
        flex-direction: column;
      }

      .ch-meta {
        text-align: left;
      }

      .close-btn {
        width: 100%;
      }

      ::ng-deep .mat-mdc-dialog-title {
        padding: 18px 18px 12px;
        font-size: 18px;
      }

      .dlg-actions {
        padding: 12px 18px 18px;
      }
    }
  `],
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