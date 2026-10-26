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
      color: var(--is-text);
      font-family: var(--is-font);
    }

    :host ::ng-deep .mat-mdc-dialog-title {
      position: relative;
      margin: 0;
      padding: 24px 24px 14px;
      font-size: var(--is-fs-lg);
      line-height: 26px;
      font-weight: var(--is-fw-bold);
      color: var(--is-text);
      border-bottom: 1px solid var(--is-border);
    }
    :host ::ng-deep .mat-mdc-dialog-title::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 4px;
      background: var(--is-grad-banner);
    }

    .dlg {
      min-width: min(600px, 92vw);
      max-width: 100%;
      max-height: 70vh;
      padding-top: 4px !important;
      background: var(--is-surface);
    }

    .spin {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 180px;
      padding: 40px 24px;
    }

    .empty {
      margin: 0;
      padding: 32px 4px;
      text-align: center;
      color: var(--is-text-2);
      font-size: var(--is-fs-body);
    }

    .list {
      list-style: none;
      margin: 0;
      padding: 14px 0 0;
      max-height: 48vh;
      overflow: auto;
      display: grid;
      gap: 10px;
    }

    .list li {
      position: relative;
      padding: 14px 16px 14px 20px;
      border: 1px solid var(--is-border);
      border-radius: var(--is-r-md);
      background: var(--is-surface-2);
      animation: is-fade-up var(--is-dur-slow) var(--is-ease) both;
    }
    .list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      bottom: 14px;
      width: 3px;
      border-radius: 0 3px 3px 0;
      background: var(--is-primary);
    }

    .row-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      font-size: var(--is-fs-sm);
    }

    .action {
      font-weight: var(--is-fw-bold);
      color: var(--is-text);
      line-height: 1.4;
      word-break: break-word;
    }

    .time {
      flex-shrink: 0;
      white-space: nowrap;
      color: var(--is-text-2);
      font-size: var(--is-fs-xs);
      font-weight: var(--is-fw-semibold);
    }

    .meta {
      margin-top: 6px;
      font-size: var(--is-fs-xs);
      line-height: 1.5;
      color: var(--is-text-2);
    }

    .sum {
      margin-top: 8px;
      padding: 10px 12px;
      border-radius: var(--is-r-sm);
      border: 1px solid var(--is-border-tint);
      background: var(--is-tint-purple);
      color: var(--is-text);
      font-size: var(--is-fs-xs);
      line-height: 1.5;
    }

    .sum--detail {
      white-space: pre-wrap;
      border-color: color-mix(in srgb, var(--is-secondary) 24%, white);
      background: var(--is-tint-orange);
    }

    .channels {
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: var(--is-r-sm);
      border: 1px solid var(--is-border);
      background: var(--is-surface);
      font-size: var(--is-fs-xs);
      color: var(--is-text-2);
    }

    .ch-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
      margin-top: 6px;
      line-height: 1.45;
    }
    .ch-row:first-child { margin-top: 0; }
    .ch-row strong {
      min-width: 78px;
      color: var(--is-primary);
      font-size: var(--is-fs-2xs);
      font-weight: var(--is-fw-bold);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .ch-meta { text-align: right; word-break: break-word; }

    .dlg-actions {
      padding: 14px 24px 20px !important;
      border-top: 1px solid var(--is-border);
      background: var(--is-surface-2);
    }
    .close-btn { min-width: 140px; }

    @media (max-width: 640px) {
      .dlg { min-width: min(100vw - 24px, 100%); max-height: 72vh; }
      .row-top, .ch-row { flex-direction: column; }
      .time { white-space: normal; }
      .ch-meta { text-align: left; }
      .close-btn { width: 100%; }
      :host ::ng-deep .mat-mdc-dialog-title { padding: 20px 18px 12px; }
      .dlg-actions { padding: 12px 18px 18px !important; }
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