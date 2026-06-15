import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ConsentRulesService, ConsentRuleUpsertPayload } from '../../../core/services/consent-rules.service';
import { SegmentsService } from '../../../core/services/segments.service';
import { ConsentService } from '../../../core/services/consent.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AuditService } from '../../../core/services/audit.service';
import { AudienceSegment } from '../../../core/models/workflow.model';
import { ConsentRule, PredefinedRuleScenario, WorkflowScheduleType, AudienceSegmentCode } from '../../../core/models/workflow.model';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';
import { RecurringScheduleEditorComponent } from '../../../shared/components/recurring-schedule-editor/recurring-schedule-editor.component';

const CHANNELS = ['EMAIL', 'SMS', 'WHATSAPP', 'RCS'] as const;

@Component({
  selector: 'app-maker-rule-edit',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    WorkflowStatusBadgeComponent,
    RecurringScheduleEditorComponent,
  ],
  templateUrl: './maker-rule-edit.component.html',
  styleUrl: './maker-rule-edit.component.scss',
})
export class MakerRuleEditComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly rulesApi = inject(ConsentRulesService);
  private readonly segmentsApi = inject(SegmentsService);
  private readonly consentApi = inject(ConsentService);
  private readonly notify = inject(NotificationService);
  private readonly auditApi = inject(AuditService);

  readonly isNew = signal(false);
  readonly ruleId = signal<number | null>(null);
  readonly busy = signal(false);
  readonly rule = signal<ConsentRule | null>(null);
  readonly segments = signal<AudienceSegment[]>([]);
  readonly templates = signal<{ id: number; consentName: string }[]>([]);
  readonly audit = signal<AuditLogEntry[]>([]);
  /** Valid builder state when schedule type is RECURRING */
  readonly recurringScheduleValid = signal(true);

  readonly scenarios: PredefinedRuleScenario[] = [
    'NEW_CUSTOMER_DETECTED',
    'CONSENT_NEARING_EXPIRY',
    'EXPIRED_CONSENT',
    'FIRST_SEND_NO_RESPONSE',
    'REMINDER_1_NO_RESPONSE',
    'REMINDER_2_NO_RESPONSE',
    'DECLINED_RE_ENGAGEMENT_AFTER_COOLDOWN',
    'VIP_PRIORITY_FAST_TRACK',
  ];

  form: ConsentRuleUpsertPayload = {
    ruleName: '',
    ruleDescription: '',
    ruleType: 'PREDEFINED_SCENARIO',
    predefinedScenario: 'CONSENT_NEARING_EXPIRY',
    triggerEvent: '',
    primarySegment: 'CONSENT_EXPIRING',
    additionalSegmentCodes: [],
    scheduleType: 'IMMEDIATE',
    selectedSegments: ['CONSENT_EXPIRING'],
    scheduledAt: '',
    recurringCron: '',
    broadcastChannels: ['EMAIL'],
    consentTemplateId: null,
  };

  ngOnInit(): void {
    this.segmentsApi.list().subscribe((s) => {
      if (s.success && s.data) {
        this.segments.set(s.data);
      }
    });
    this.consentApi.getWorkflowTemplates().subscribe((t) => {
      if (t.success && t.data) {
        this.templates.set(t.data.map((x) => ({ id: x.id, consentName: x.consentName })));
      }
    });
    this.route.paramMap.subscribe((pm) => {
      const idParam = pm.get('id')!;
      const isNew = idParam === 'new';
      this.isNew.set(isNew);
      if (isNew) {
        this.ruleId.set(null);
        this.rule.set(null);
        this.audit.set([]);
        return;
      }
      const id = Number(idParam);
      if (Number.isNaN(id)) {
        return;
      }
      this.ruleId.set(id);
      this.rulesApi.getById(id).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.patchFromRule(res.data);
            this.rule.set(res.data);
            this.loadAudit(id);
          }
        },
      });
    });
  }

  private loadAudit(id: number): void {
    this.auditApi.getEntityAuditTrail('CONSENT_RULE', id).subscribe((r) => {
      if (r.success && r.data) {
        this.audit.set(r.data);
      }
    });
  }

  // private patchFromRule(r: ConsentRule): void {
  //   this.form = {
  //     ruleName: r.ruleName,
  //     ruleDescription: r.ruleDescription || '',
  //     ruleType: r.ruleType,
  //     predefinedScenario: r.predefinedScenario || undefined,
  //     triggerEvent: r.triggerEvent || '',
  //     primarySegment: r.primarySegment,
  //     additionalSegmentCodes: r.additionalSegmentCodes || [],
  //     scheduleType: r.scheduleType,
  //     scheduledAt: r.scheduledAt ? this.toLocalInput(r.scheduledAt) : '',
  //     recurringCron: r.recurringCron || '',
  //     broadcastChannels: r.broadcastChannels?.length ? [...r.broadcastChannels] : ['EMAIL'],
  //     consentTemplateId: r.consentTemplateId ?? null,
  //   };
  // }

  private patchFromRule(r: ConsentRule): void {
    const allSegments = [
      r.primarySegment,
      ...(r.additionalSegmentCodes || []),
    ].filter(Boolean) as string[];

    this.form = {
      ruleName: r.ruleName,
      ruleDescription: r.ruleDescription || '',
      ruleType: r.ruleType,
      predefinedScenario: r.predefinedScenario || undefined,
      triggerEvent: r.triggerEvent || '',
      primarySegment: r.primarySegment,
      additionalSegmentCodes: r.additionalSegmentCodes || [],
      selectedSegments: allSegments,           // ← hydrate
      scheduleType: r.scheduleType,
      scheduledAt: r.scheduledAt ? this.toLocalInput(r.scheduledAt) : '',
      recurringCron: r.recurringCron || '',
      broadcastChannels: r.broadcastChannels?.length ? [...r.broadcastChannels] : ['EMAIL'],
      consentTemplateId: r.consentTemplateId ?? null,
    };
  }

  private toLocalInput(iso: string): string {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) {
      return '';
    }
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  private toIso(local: string): string | undefined {
    if (!local) {
      return undefined;
    }
    const d = new Date(local);
    return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
  }

  //  private payload(): ConsentRuleUpsertPayload {
  //   return {
  //     ...this.form,
  //     scheduledAt: this.form.scheduleType === 'SCHEDULED' ? this.toIso(this.form.scheduledAt || '') : undefined,
  //     recurringCron: this.form.scheduleType === 'RECURRING' ? this.form.recurringCron : undefined,
  //     consentTemplateId: this.form.consentTemplateId ?? null,
  //   };
  // }

  private payload(): ConsentRuleUpsertPayload {
    const [first, ...rest] = this.form.selectedSegments ?? [this.form.primarySegment];
    return {
      ...this.form,
      primarySegment: (first ?? this.form.primarySegment) as AudienceSegmentCode,
      additionalSegmentCodes: rest,
      scheduledAt: this.form.scheduleType === 'SCHEDULED' ? this.toIso(this.form.scheduledAt || '') : undefined,
      recurringCron: this.form.scheduleType === 'RECURRING' ? this.form.recurringCron : undefined,
      consentTemplateId: this.form.consentTemplateId ?? null,
    };
  }

  toggleChannel(ch: string, checked: boolean): void {
    const set = new Set(this.form.broadcastChannels || []);
    if (checked) {
      set.add(ch);
    } else {
      set.delete(ch);
    }
    this.form.broadcastChannels = [...set];
  }

  channelOn(ch: string): boolean {
    return (this.form.broadcastChannels || []).includes(ch);
  }

  selectableSegments(): AudienceSegment[] {
    return this.segments().filter((s) => s.selectable);
  }

  saveDraft(): void {
    this.busy.set(true);
    if (this.isNew()) {
      this.rulesApi.create(this.payload()).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success && res.data) {
            this.notify.success('Draft saved', res.message || '');
            this.isNew.set(false);
            this.ruleId.set(res.data.id);
            this.rule.set(res.data);
            this.loadAudit(res.data.id);
            // Fixed: navigate to the route that actually exists
            void this.router.navigate(['/maker/rules', res.data.id], { replaceUrl: true });
          }
        },
        error: () => this.busy.set(false),
      });
    } else {
      const id = this.ruleId()!;
      this.rulesApi.saveDraft(id, this.payload()).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success && res.data) {
            this.notify.success('Draft saved', res.message || '');
            this.rule.set(res.data);
            this.loadAudit(id);
          }
        },
        error: () => this.busy.set(false),
      });
    }
  }

  submitForApproval(): void {
    const run = (id: number) => {
      this.rulesApi.submit(id).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.success('Submitted', res.message || '');
            void this.router.navigateByUrl('/maker/rules');
          }
        },
        error: () => this.busy.set(false),
      });
    };
    this.busy.set(true);
    if (this.isNew()) {
      this.rulesApi.create(this.payload()).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.ruleId.set(res.data.id);
            this.isNew.set(false);
            run(res.data.id);
          } else {
            this.busy.set(false);
          }
        },
        error: () => this.busy.set(false),
      });
    } else {
      run(this.ruleId()!);
    }
  }

  
  canEdit(): boolean {
    const s = this.rule()?.status;
    return this.isNew() || s === 'DRAFT' || s === 'REVISION_REQUESTED';
  }

  // canSubmit(): boolean {
  //   return this.canEdit() && this.form.consentTemplateId !== null;
  // }

  canSubmit(): boolean {
  return (
    this.canEdit() &&
    this.form.consentTemplateId !== null &&
    (this.form.selectedSegments?.length ?? 0) > 0
  );
}

  canPublish(): boolean {
    return this.rule()?.status === 'APPROVED';
  }

  onScheduleTypeChange(st: WorkflowScheduleType): void {
    if (st !== 'RECURRING') {
      this.recurringScheduleValid.set(true);
    }
  }

  recurringScheduleOk(): boolean {
    if (this.form.scheduleType !== 'RECURRING') {
      return true;
    }
    return this.recurringScheduleValid();
  }

  feedbackBanner(): string | null {
    const r = this.rule();
    if (!r) {
      return null;
    }
    if (r.status === 'REJECTED' && r.rejectionReason) {
      return `Rejected: ${r.rejectionReason}`;
    }
    if (r.status === 'REVISION_REQUESTED' && r.revisionReason) {
      return `Checker requested revision: ${r.revisionReason}`;
    }
    if (r.reviewerRemarks && (r.status === 'APPROVED' || r.status === 'REJECTED' || r.status === 'REVISION_REQUESTED')) {
      return `Checker remarks: ${r.reviewerRemarks}`;
    }
    return null;
  }

  protected readonly CHANNELS = CHANNELS;
}
