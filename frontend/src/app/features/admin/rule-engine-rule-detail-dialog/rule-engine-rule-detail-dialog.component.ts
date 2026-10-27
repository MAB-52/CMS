import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { forkJoin, map } from 'rxjs';
import { AuditService } from '../../../core/services/audit.service';
import { AdminRuleEngineService, ConsentRuleExecutionRow } from '../../../core/services/admin-rule-engine.service';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { CHANNEL_META, ChannelId, ChannelMeta } from '../../../core/utils/channel.util';

export interface RuleEngineRuleDetailDialogData {
  ruleId: number;
  ruleName: string;
}

type Tone = 'success' | 'danger' | 'warn' | 'info' | 'primary' | 'secondary';

interface ChannelStat {
  key: string;
  meta: ChannelMeta;
  attempted: number | null;
  delivered: number | null;
  failures: number | null;
  rate: number | null;
}

/** Visual treatment for audit actions, matched on keywords in the action code. */
const ACTION_STYLES: { match: RegExp; icon: string; tone: Tone }[] = [
  { match: /REJECT|FAIL|DELETE/, icon: 'pi pi-times-circle', tone: 'danger' },
  { match: /REVISION|RETURN/, icon: 'pi pi-replay', tone: 'warn' },
  { match: /APPROV/, icon: 'pi pi-check-circle', tone: 'success' },
  { match: /COMPLETED|SUCCESS/, icon: 'pi pi-flag', tone: 'success' },
  { match: /SUBMIT/, icon: 'pi pi-send', tone: 'info' },
  { match: /RUN|EXECUT|TRIGGER/, icon: 'pi pi-play-circle', tone: 'primary' },
  { match: /ACTIVAT|DEACTIVAT|TOGGLE/, icon: 'pi pi-power-off', tone: 'secondary' },
  { match: /CREATE/, icon: 'pi pi-plus-circle', tone: 'primary' },
  { match: /UPDATE|EDIT/, icon: 'pi pi-pencil', tone: 'secondary' },
];

@Component({
  selector: 'app-rule-engine-rule-detail-dialog',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    ButtonModule,
    TabsModule,
    TimelineModule,
    TagModule,
    BadgeModule,
    ProgressBarModule,
    SkeletonModule,
    TooltipModule,
  ],
  template: `
    <div class="dlg">
      <div class="brand-bar" aria-hidden="true"></div>

      <header class="head">
        <span class="head-ico" aria-hidden="true"><i class="pi pi-history"></i></span>
        <div class="head-copy">
          <span class="eyebrow">Rule activity</span>
          <h2 class="ttl" [title]="data.ruleName">{{ data.ruleName }}</h2>
        </div>
        <p-button icon="pi pi-times" [rounded]="true" [text]="true" severity="secondary"
          ariaLabel="Close dialog" (onClick)="close()" />
      </header>

      <p-tabs [value]="tab()" (valueChange)="tab.set($any($event))" class="tabs">
        <p-tablist>
          <p-tab value="audit">
            <span class="tab-inner">
              <span class="tab-ico" aria-hidden="true"><i class="pi pi-file-check"></i></span>
              <span class="tab-label">Audit history</span>
              @if (!loading()) { <p-badge [value]="audit().length" severity="secondary" /> }
            </span>
          </p-tab>
          <p-tab value="runs">
            <span class="tab-inner">
              <span class="tab-ico" aria-hidden="true"><i class="pi pi-chart-line"></i></span>
              <span class="tab-label">Execution history</span>
              @if (!loading()) { <p-badge [value]="executions().length" severity="secondary" /> }
            </span>
          </p-tab>
        </p-tablist>
      </p-tabs>

      <div class="body">
        @if (loading()) {
          <div class="sk">
            @for (i of [1, 2, 3]; track i) {
              <div class="sk-row">
                <p-skeleton shape="circle" size="2.25rem" />
                <div class="sk-lines">
                  <p-skeleton width="55%" height="1rem" />
                  <p-skeleton width="80%" height="0.8rem" />
                </div>
              </div>
            }
          </div>
        } @else if (tab() === 'audit') {
          @if (!audit().length) {
            <div class="empty">
              <span class="empty-ico" aria-hidden="true"><i class="pi pi-inbox"></i></span>
              <p>No audit entries recorded for this rule yet.</p>
            </div>
          } @else {
            <p-timeline [value]="audit()" styleClass="audit-timeline">
              <ng-template #marker let-a>
                <span class="marker" [attr.data-tone]="actionStyle(a.action).tone">
                  <i [class]="actionStyle(a.action).icon" aria-hidden="true"></i>
                </span>
              </ng-template>
              <ng-template #content let-a let-i="index">
                <article class="event" [style.--i]="i">
                  <div class="event-top">
                    <span class="event-title">{{ humanize(a.action) }}</span>
                    <time class="event-time" [attr.datetime]="a.performedAt"
                      [pTooltip]="(a.performedAt | date: 'medium') ?? ''" tooltipPosition="top">
                      {{ a.performedAt | date: 'dd MMM, hh:mm a' }}
                    </time>
                  </div>
                  <div class="event-meta">
                    <span class="who"><i class="pi pi-user" aria-hidden="true"></i>{{ a.userName || 'System' }}</span>
                    @if (a.description) { <span class="what">{{ a.description }}</span> }
                  </div>
                </article>
              </ng-template>
            </p-timeline>
          }
        } @else {
          @if (!executions().length) {
            <div class="empty">
              <span class="empty-ico" aria-hidden="true"><i class="pi pi-bolt"></i></span>
              <p>No executions recorded yet.</p>
            </div>
          } @else {
            <div class="runs">
              @for (e of executions(); track e.id; let i = $index) {
                <article class="run" [attr.data-status]="e.status" [style.--i]="i">
                  <div class="run-top">
                    <div class="run-tags">
                      <p-tag [severity]="statusTone(e.status)" [icon]="statusIcon(e.status)"
                        [value]="executionOutcomeLabel(e.status)" [rounded]="true" />
                      <p-tag severity="secondary" [icon]="e.triggerType === 'MANUAL' ? 'pi pi-user' : 'pi pi-clock'"
                        [value]="humanize(e.triggerType)" [rounded]="true" />
                    </div>
                    <time class="event-time" [attr.datetime]="e.startedAt">{{ e.startedAt | date: 'dd MMM yyyy, hh:mm a' }}</time>
                  </div>

                  <div class="stats">
                    <div class="stat">
                      <span class="stat-k">Audience</span>
                      <span class="stat-v">{{ e.eligibleCount | number }}</span>
                    </div>
                    <div class="stat">
                      <span class="stat-k">Evaluated</span>
                      <span class="stat-v">{{ e.audienceEvaluated | number }}</span>
                    </div>
                    @if (durationLabel(e); as dur) {
                      <div class="stat">
                        <span class="stat-k">Duration</span>
                        <span class="stat-v">{{ dur }}</span>
                      </div>
                    }
                    @if (e.triggeredByName) {
                      <div class="stat">
                        <span class="stat-k">Triggered by</span>
                        <span class="stat-v stat-v--sm">{{ e.triggeredByName }}</span>
                      </div>
                    }
                  </div>

                  @if (e.chunksTotal != null && e.chunksTotal > 0 && e.chunksCompleted != null) {
                    <div class="chunks">
                      <div class="chunks-top">
                        <span>Batches</span>
                        <strong>{{ e.chunksCompleted }} of {{ e.chunksTotal }}</strong>
                      </div>
                      <p-progressbar [value]="pct(e.chunksCompleted, e.chunksTotal)" [showValue]="false" styleClass="bar" />
                    </div>
                  }

                  @if (e.summaryNotes) {
                    <p class="note"><i class="pi pi-info-circle" aria-hidden="true"></i>{{ e.summaryNotes }}</p>
                  }
                  @if (e.progressNotes) {
                    <p class="note note--detail"><i class="pi pi-list-check" aria-hidden="true"></i>{{ e.progressNotes }}</p>
                  }

                  @if (channelStats(e); as chs) {
                    @if (chs.length) {
                      <div class="channels">
                        @for (ch of chs; track ch.key) {
                          <div class="ch" [style.--ch]="ch.meta.color">
                            <span class="ch-ico" aria-hidden="true"><i [class]="ch.meta.icon"></i></span>
                            <div class="ch-body">
                              <div class="ch-top">
                                <span class="ch-name">{{ ch.meta.label }}</span>
                                @if (ch.rate !== null) { <span class="ch-rate">{{ ch.rate }}%</span> }
                              </div>
                              @if (ch.rate !== null) {
                                <p-progressbar [value]="ch.rate" [showValue]="false" styleClass="bar bar--ch" />
                              }
                              <div class="ch-meta">
                                <span>{{ ch.attempted ?? '—' }} attempted</span>
                                <span>{{ ch.delivered ?? '—' }} delivered</span>
                                @if (ch.failures !== null) {
                                  <span [class.ch-fail]="ch.failures > 0">{{ ch.failures }} failed</span>
                                }
                              </div>
                            </div>
                          </div>
                        }
                      </div>
                    }
                  }
                </article>
              }
            </div>
          }
        }
      </div>

      <footer class="actions">
        <p-button label="Close" severity="secondary" [outlined]="true" [rounded]="true" (onClick)="close()" />
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 0;
      color: var(--is-text);
      font-family: var(--is-font);
    }
    .dlg { flex: 1 1 auto; display: flex; flex-direction: column; min-height: 0; background: var(--is-surface); }
    .brand-bar, .head, .tabs, .actions { flex: none; }
    .brand-bar { height: 4px; background: var(--is-grad-banner); }

    .head { display: flex; align-items: center; gap: 12px; padding: 20px 16px 12px 24px; }
    .head-ico {
      flex: none; display: grid; place-items: center; width: 44px; height: 44px;
      border-radius: var(--is-r-nav); background: var(--is-tint-purple); color: var(--is-primary);
    }
    .head-ico .pi { font-size: 19px; }
    .head-copy { flex: 1; min-width: 0; }
    .eyebrow {
      font-size: var(--is-fs-2xs); font-weight: var(--is-fw-bold); letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--is-secondary);
    }
    .ttl {
      margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-size: var(--is-fs-h3); line-height: var(--is-lh-h3); font-weight: var(--is-fw-bold);
    }

    /* Tabs */
    .tabs { padding: 0 24px; }
    :host ::ng-deep .tabs .p-tablist-tab-list { gap: 4px; border-bottom: 1px solid var(--is-border); background: transparent; }
    :host ::ng-deep .tabs .p-tab {
      flex: 1; justify-content: center; gap: 8px; padding: 12px 10px;
      border: 0; background: transparent; color: var(--is-text-2);
      font-family: var(--is-font); font-weight: var(--is-fw-bold);
      transition: color var(--is-dur) ease, background var(--is-dur) ease;
    }
    :host ::ng-deep .tabs .p-tab:not(.p-tab-active):hover { color: var(--is-primary); background: var(--is-tint-purple); }
    :host ::ng-deep .tabs .p-tab-active { color: var(--is-primary); }
    :host ::ng-deep .tabs .p-tablist-active-bar { height: 3px; border-radius: 3px 3px 0 0; background: var(--is-grad-banner); }
    :host ::ng-deep .tabs .p-badge { min-width: 22px; height: 20px; font-size: 11px; }
    .tab-inner { display: inline-flex; align-items: center; gap: 10px; }
    .tab-ico {
      display: grid; place-items: center; width: 28px; height: 28px; border-radius: 9px;
      background: var(--is-neutral-bg); color: var(--is-text-2);
      transition: background var(--is-dur) ease, color var(--is-dur) ease, transform var(--is-dur) var(--is-ease);
    }
    .tab-ico .pi { font-size: 13px; }
    :host ::ng-deep .tabs .p-tab:not(.p-tab-active):hover .tab-ico { background: var(--is-surface); color: var(--is-primary); transform: scale(1.06); }
    :host ::ng-deep .tabs .p-tab-active .tab-ico { background: var(--is-grad-primary); color: #fff; box-shadow: 0 4px 10px rgba(69, 50, 158, 0.25); }
    :host ::ng-deep .tabs .p-tab-active .p-badge { background: var(--is-primary); color: #fff; }

    .body { flex: 1 1 auto; min-height: 160px; overflow-y: auto; padding: 18px 24px 20px; }

    /* Loading / empty */
    .sk { display: grid; gap: 18px; }
    .sk-row { display: flex; gap: 14px; align-items: center; }
    .sk-lines { flex: 1; display: grid; gap: 8px; }
    .empty { display: grid; justify-items: center; gap: 10px; padding: 36px 8px; text-align: center; color: var(--is-text-2); }
    .empty p { margin: 0; font-weight: var(--is-fw-semibold); }
    .empty-ico {
      display: grid; place-items: center; width: 56px; height: 56px; border-radius: 18px;
      background: var(--is-tint-purple); color: var(--is-primary);
    }
    .empty-ico .pi { font-size: 22px; }

    /* Audit timeline */
    :host ::ng-deep .audit-timeline .p-timeline-event-opposite { display: none; }
    :host ::ng-deep .audit-timeline .p-timeline-event-content { padding: 0 0 16px 14px; }
    :host ::ng-deep .audit-timeline .p-timeline-event-connector { background: var(--is-border); }
    .marker {
      --_t: var(--is-primary);
      display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%;
      background: color-mix(in srgb, var(--_t) 12%, white); color: var(--_t);
      box-shadow: 0 0 0 4px var(--is-surface);
      animation: is-scale-in var(--is-dur-slow) var(--is-ease) both;
    }
    .marker .pi { font-size: 15px; }
    .marker[data-tone='success'] { --_t: var(--is-success); }
    .marker[data-tone='danger'] { --_t: var(--is-danger); }
    .marker[data-tone='warn'] { --_t: var(--is-secondary); }
    .marker[data-tone='info'] { --_t: var(--is-blue); }
    .marker[data-tone='secondary'] { --_t: var(--is-neutral-text); }

    .event {
      padding: 12px 14px; border: 1px solid var(--is-border); border-radius: var(--is-r-md);
      background: var(--is-surface-2);
      transition: border-color var(--is-dur) ease, box-shadow var(--is-dur) ease, transform var(--is-dur) var(--is-ease);
      animation: is-fade-up var(--is-dur-slow) var(--is-ease) calc(var(--i, 0) * 50ms) both;
    }
    .event:hover { border-color: var(--is-border-tint); box-shadow: var(--is-shadow-soft); transform: translateX(2px); }
    .event-top { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
    .event-title { font-weight: var(--is-fw-bold); color: var(--is-text); }
    .event-time { flex: none; font-size: var(--is-fs-xs); font-weight: var(--is-fw-semibold); color: var(--is-text-2); white-space: nowrap; }
    .event-meta { display: flex; flex-wrap: wrap; gap: 4px 12px; margin-top: 4px; font-size: var(--is-fs-sm); color: var(--is-text-2); }
    .who { display: inline-flex; align-items: center; gap: 5px; font-weight: var(--is-fw-semibold); color: var(--is-primary); }
    .who .pi { font-size: 11px; }
    .what { overflow-wrap: anywhere; }

    /* Executions */
    .runs { display: grid; gap: 14px; }
    .run {
      --_s: var(--is-success);
      position: relative; display: grid; gap: 12px; padding: 16px 16px 16px 20px;
      border: 1px solid var(--is-border); border-radius: var(--is-r-md); background: var(--is-surface);
      box-shadow: var(--is-shadow-xs);
      animation: is-fade-up var(--is-dur-slow) var(--is-ease) calc(var(--i, 0) * 60ms) both;
    }
    .run::before {
      content: ''; position: absolute; left: 0; top: 14px; bottom: 14px; width: 4px;
      border-radius: 0 4px 4px 0; background: var(--_s);
    }
    .run[data-status='FAILED'] { --_s: var(--is-danger); }
    .run[data-status='PARTIAL'] { --_s: var(--is-secondary); }
    .run-top { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
    .run-tags { display: flex; flex-wrap: wrap; gap: 6px; }

    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 8px; }
    .stat { display: grid; gap: 2px; padding: 8px 12px; border-radius: var(--is-r-sm); background: var(--is-surface-2); border: 1px solid var(--is-border); }
    .stat-k { font-size: var(--is-fs-2xs); font-weight: var(--is-fw-bold); letter-spacing: 0.06em; text-transform: uppercase; color: var(--is-text-2); }
    .stat-v { font-size: var(--is-fs-lg); font-weight: var(--is-fw-bold); color: var(--is-text); }
    .stat-v--sm { font-size: var(--is-fs-sm); line-height: 26px; }

    .chunks { display: grid; gap: 6px; }
    .chunks-top { display: flex; justify-content: space-between; font-size: var(--is-fs-xs); color: var(--is-text-2); }
    :host ::ng-deep .bar { height: 8px; border-radius: 999px; background: var(--is-neutral-bg); }
    :host ::ng-deep .bar .p-progressbar-value { border-radius: 999px; background: var(--is-grad-banner); }
    :host ::ng-deep .bar--ch { height: 6px; }
    :host ::ng-deep .bar--ch .p-progressbar-value { background: var(--ch); }

    .note {
      display: flex; gap: 8px; margin: 0; padding: 10px 12px; border-radius: var(--is-r-sm);
      border: 1px solid var(--is-border-tint); background: var(--is-tint-purple);
      font-size: var(--is-fs-sm); line-height: 1.5; color: var(--is-text); overflow-wrap: anywhere;
    }
    .note .pi { margin-top: 3px; font-size: 12px; color: var(--is-primary); }
    .note--detail { white-space: pre-wrap; border-color: color-mix(in srgb, var(--is-secondary) 24%, white); background: var(--is-tint-orange); }
    .note--detail .pi { color: var(--is-secondary); }

    .channels { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px; }
    .ch {
      display: flex; gap: 10px; padding: 10px 12px; border-radius: var(--is-r-sm);
      border: 1px solid color-mix(in srgb, var(--ch) 22%, white);
      background: color-mix(in srgb, var(--ch) 5%, white);
    }
    .ch-ico {
      flex: none; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px;
      background: var(--ch); color: #fff;
    }
    .ch-ico .pi { font-size: 14px; }
    .ch-body { flex: 1; min-width: 0; display: grid; gap: 5px; }
    .ch-top { display: flex; justify-content: space-between; gap: 8px; }
    .ch-name { font-weight: var(--is-fw-bold); color: var(--is-text); }
    .ch-rate { font-size: var(--is-fs-xs); font-weight: var(--is-fw-bold); color: color-mix(in srgb, var(--ch) 80%, black); }
    .ch-meta { display: flex; flex-wrap: wrap; gap: 2px 10px; font-size: var(--is-fs-xs); color: var(--is-text-2); }
    .ch-fail { color: var(--is-danger-text); font-weight: var(--is-fw-bold); }

    .actions {
      display: flex; justify-content: flex-end; padding: 14px 24px;
      border-top: 1px solid var(--is-border); background: var(--is-surface-2);
    }
    :host ::ng-deep .actions .p-button { min-width: 120px; }

    @media (max-width: 640px) {
      .head { padding: 16px 12px 10px 16px; }
      .tabs, .body { padding-inline: 16px; }
      .event-top { flex-direction: column; gap: 2px; }
      :host ::ng-deep .tabs .p-tab { font-size: var(--is-fs-sm); }
      :host ::ng-deep .actions .p-button { width: 100%; }
    }
  `],
})
export class RuleEngineRuleDetailDialogComponent implements OnInit {
  readonly data = inject<DynamicDialogConfig<RuleEngineRuleDetailDialogData>>(DynamicDialogConfig).data!;
  private readonly ref = inject(DynamicDialogRef);
  private readonly auditApi = inject(AuditService);
  private readonly ruleEngine = inject(AdminRuleEngineService);

  readonly loading = signal(true);
  readonly tab = signal<'audit' | 'runs'>('audit');
  readonly audit = signal<AuditLogEntry[]>([]);
  readonly executions = signal<ConsentRuleExecutionRow[]>([]);

  /** Channel stats per execution, computed once per data load rather than on every change detection. */
  private readonly statsById = computed(() => {
    const out = new Map<number, ChannelStat[]>();
    for (const e of this.executions()) {
      out.set(e.id, e.channelResults ? this.buildChannelStats(e.channelResults) : []);
    }
    return out;
  });

  close(): void {
    this.ref.close();
  }

  executionOutcomeLabel(status: string): string {
    if (status === 'PARTIAL') {
      return 'Partially Delivered';
    }
    return this.humanize(status);
  }

  statusTone(status: string): 'success' | 'danger' | 'warn' {
    return status === 'FAILED' ? 'danger' : status === 'PARTIAL' ? 'warn' : 'success';
  }

  statusIcon(status: string): string {
    return status === 'FAILED' ? 'pi pi-times-circle' : status === 'PARTIAL' ? 'pi pi-exclamation-triangle' : 'pi pi-check-circle';
  }

  /** "RULE_EXECUTION_COMPLETED" → "Rule execution completed". */
  humanize(code: string | null | undefined): string {
    if (!code) return '';
    const s = code.replace(/_/g, ' ').toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  actionStyle(action: string): { icon: string; tone: Tone } {
    const a = (action || '').toUpperCase();
    return ACTION_STYLES.find((s) => s.match.test(a)) ?? { icon: 'pi pi-circle', tone: 'secondary' };
  }

  pct(done: number, total: number): number {
    return total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
  }

  durationLabel(e: ConsentRuleExecutionRow): string | null {
    if (!e.completedAt) return null;
    const ms = new Date(e.completedAt).getTime() - new Date(e.startedAt).getTime();
    if (!Number.isFinite(ms) || ms < 0) return null;
    if (ms < 1000) return `${ms} ms`;
    const sec = Math.round(ms / 1000);
    return sec < 60 ? `${sec}s` : `${Math.floor(sec / 60)}m ${sec % 60}s`;
  }

  channelStats(e: ConsentRuleExecutionRow): ChannelStat[] {
    return this.statsById().get(e.id) ?? [];
  }

  private buildChannelStats(raw: Record<string, unknown>): ChannelStat[] {
    const out: ChannelStat[] = [];
    for (const [key, val] of Object.entries(raw)) {
      if (key.startsWith('_') || !val || typeof val !== 'object' || Array.isArray(val)) {
        continue;
      }
      const row = val as Record<string, unknown>;
      const num = (k: string): number | null => (typeof row[k] === 'number' ? (row[k] as number) : null);
      const attempted = num('attempted');
      const delivered = num('delivered');
      out.push({
        key,
        meta: CHANNEL_META[key.toUpperCase() as ChannelId] ?? { label: key, icon: 'pi pi-send', color: '#45329E' },
        attempted,
        delivered,
        failures: num('failures'),
        rate: attempted && delivered !== null ? Math.round((delivered / attempted) * 100) : null,
      });
    }
    return out;
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
