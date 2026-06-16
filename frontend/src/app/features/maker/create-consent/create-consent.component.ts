import { Component, OnDestroy, OnInit, ViewChild, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { debounceTime, Subscription } from 'rxjs';
import { Consent, ConsentCategory, ConsentCreatePayload, ConsentStatus } from '../../../core/models/consent.model';
import { ConsentService } from '../../../core/services/consent.service';
import { MergeTagService } from '../../../core/services/merge-tag.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';
import { groupMergeTagsByCategory } from '../../../core/utils/merge-tags.util';
import type { MergeTag } from '../../../core/models/consent.model';
import { ConsentDetailsCardComponent } from './consent-details-card/consent-details-card.component';
import { ConsentMessageCardComponent } from './consent-message-card/consent-message-card.component';
import { DeliveryChannelsCardComponent } from './delivery-channels-card/delivery-channels-card.component';
import { AuditActivityCardComponent } from './audit-activity-card/audit-activity-card.component';
import { AiContentGeneratorComponent, AiInsertEvent } from './consent-message-card/ai-content-generator/ai-content-generator.component';

function stripTime(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function notPastDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const selected = stripTime(new Date(value));
    const today = stripTime(new Date());

    return selected < today ? { pastDate: true } : null;
  };
}

function customDateRangeValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const preset = group.get('validityPreset')?.value;
    const startValue = group.get('validityStartDate')?.value;
    const endValue = group.get('validityEndDate')?.value;

    if (preset !== 'custom') {
      return null;
    }

    if (!startValue || !endValue) {
      return null;
    }

    const start = stripTime(new Date(startValue));
    const end = stripTime(new Date(endValue));

    if (end < start) {
      return { dateRange: true };
    }

    return null;
  };
}

function toDateOrEmpty(value: unknown): Date | '' {
  if (!value) {
    return '';
  }
  const d = new Date(String(value).slice(0, 10));
  return Number.isNaN(d.getTime()) ? '' : d;
}

function toYmd(value: unknown): string | undefined {
  if (!value) {
    return undefined;
  }
  const d = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(d.getTime())) {
    return undefined;
  }
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

@Component({
  selector: 'app-create-consent',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    ConsentDetailsCardComponent,
    ConsentMessageCardComponent,
    DeliveryChannelsCardComponent,
    AuditActivityCardComponent,
    AiContentGeneratorComponent,
  ],
  templateUrl: './create-consent.component.html',
  styleUrl: './create-consent.component.scss',
})
export class CreateConsentComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly api = inject(ConsentService);
  private readonly mergeApi = inject(MergeTagService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);

  @ViewChild('msgCard') msgCard!: ConsentMessageCardComponent;

  readonly form = this.fb.nonNullable.group(
    {
      consentName: ['', [Validators.required, Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      category: this.fb.nonNullable.control<ConsentCategory>('MARKETING', Validators.required),
      validityPreset: this.fb.nonNullable.control('365'),
      validityStartDate: this.fb.control<Date | ''>('', [Validators.required, notPastDateValidator()]),
      validityEndDate: this.fb.control<Date | ''>('', [Validators.required, notPastDateValidator()]),
      consentMessage: [''],
      channelEmail: this.fb.nonNullable.control(false),
      channelSms: this.fb.nonNullable.control(false),
      channelPush: this.fb.nonNullable.control(false),
      channelWhatsapp: this.fb.nonNullable.control(false),
      channelRcs: this.fb.nonNullable.control(false),
      tagsUsed: this.fb.nonNullable.control<string[]>([]),
    },
    {
      validators: [customDateRangeValidator()],
    }
  );

  mergeTags: MergeTag[] = [];
  grouped: Record<string, MergeTag[]> = {};

  readonly consentDbId = signal<number | null>(null);
  readonly consentIdPreview = signal('');
  readonly idLoading = signal(false);
  readonly loadedStatus = signal<ConsentStatus | null>(null);
  readonly lastSaved = signal<string | null>(null);
  readonly autosaveBusy = signal(false);
  readonly formSubmitted = signal(false);
  readonly previewHtml = signal('');
  readonly viewOnly = signal(false);
  readonly revisionMessage = signal('');

  private autoTimer?: ReturnType<typeof setInterval>;
  private subs = new Subscription();

  ngOnInit(): void {
    this.subs.add(
      this.mergeApi.getMergeTags().subscribe({
        next: (tags) => {
          this.mergeTags = tags;
          this.grouped = groupMergeTagsByCategory(tags);
        },
        error: () => {
          /* merge service toasts */
        },
      }),
    );

    this.subs.add(
      this.form.controls.consentMessage.valueChanges.pipe(debounceTime(300)).subscribe((v) => {
        this.previewHtml.set(v || '');
      }),
    );

    this.subs.add(
      this.form.controls.validityStartDate.valueChanges.subscribe(() => {
        this.form.controls.validityEndDate.updateValueAndValidity({ emitEvent: false });
        this.form.updateValueAndValidity({ emitEvent: false });
      }),
    );

    this.subs.add(
      this.form.controls.validityPreset.valueChanges.subscribe((preset) => {
        if (preset !== 'custom') {
          this.form.controls.validityStartDate.setValue('', { emitEvent: false });
          this.form.controls.validityEndDate.setValue('', { emitEvent: false });

          this.form.controls.validityStartDate.markAsPristine();
          this.form.controls.validityStartDate.markAsUntouched();
          this.form.controls.validityEndDate.markAsPristine();
          this.form.controls.validityEndDate.markAsUntouched();

          this.form.controls.validityStartDate.updateValueAndValidity({ emitEvent: false });
          this.form.controls.validityEndDate.updateValueAndValidity({ emitEvent: false });
          this.form.updateValueAndValidity({ emitEvent: false });
        }
      }),
    );

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.loadConsent(Number(idParam));
    } else {
      const dup = history.state?.['from'] as Consent | undefined;
      if (dup) {
        this.applyDuplicateAsNew(dup);
      } else {
        this.prefetchConsentId();
      }
    }

    this.viewOnly.set(this.route.snapshot.queryParamMap.get('view') === '1');
    this.subs.add(
      this.route.queryParamMap.subscribe((q) => {
        this.viewOnly.set(q.get('view') === '1');
      }),
    );

    this.autoTimer = setInterval(() => void this.tryAutoSave(), 120_000);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
    }
  }

  private applyDuplicateAsNew(c: Consent): void {
    this.consentDbId.set(null);
    this.loadedStatus.set(null);
    this.revisionMessage.set('');
    this.prefetchConsentId();
    const preset = this.inferPreset(c);
    this.form.reset({
      consentName: `${c.consentName} (Copy)`,
      description: c.description || '',
      category: c.category,
      validityPreset: preset,
      validityStartDate: c.validityStartDate ? toDateOrEmpty(c.validityStartDate) : '',
      validityEndDate: c.validityEndDate ? toDateOrEmpty(c.validityEndDate) : '',
      consentMessage: c.consentMessage || '',
      channelEmail: c.channelEmail ?? false,
      channelSms: c.channelSms ?? false,
      channelPush: c.channelPush ?? false,
      channelWhatsapp: c.channelWhatsapp ?? false,
      channelRcs: c.channelRcs ?? false,
      tagsUsed: [...(c.tagsUsed || [])],
    });
    this.previewHtml.set(c.consentMessage || '');
  }

  private prefetchConsentId(): void {
    this.idLoading.set(true);
    this.subs.add(
      this.api.generateConsentId().subscribe({
        next: (res) => {
          this.idLoading.set(false);
          if (res.success && res.data?.consentId) {
            this.consentIdPreview.set(res.data.consentId);
          }
        },
        error: () => {
          this.idLoading.set(false);
        },
      }),
    );
  }

  private loadConsent(id: number): void {
    this.subs.add(
      this.api.getConsentById(id).subscribe({
        next: (res) => {
          if (!res.success || !res.data) {
            return;
          }
          const c = res.data;
          this.patchFromConsent(c);
        },
        error: () => {
          void this.router.navigate(['/maker/consents']);
        },
      }),
    );
  }

  private patchFromConsent(c: Consent): void {
    this.consentDbId.set(c.id);
    this.consentIdPreview.set(c.consentId);
    this.loadedStatus.set(c.status);
    this.revisionMessage.set(c.revisionMessage || '');
    const preset = this.inferPreset(c);
    this.form.patchValue({
      consentName: c.consentName,
      description: c.description || '',
      category: c.category,
      validityPreset: preset,
      validityStartDate: c.validityStartDate ? toDateOrEmpty(c.validityStartDate) : '',
      validityEndDate: c.validityEndDate ? toDateOrEmpty(c.validityEndDate) : '',
      consentMessage: c.consentMessage || '',
      channelEmail: c.channelEmail ?? false,
      channelSms: c.channelSms ?? false,
      channelPush: c.channelPush ?? false,
      channelWhatsapp: c.channelWhatsapp ?? false,
      channelRcs: c.channelRcs ?? false,
      tagsUsed: [...(c.tagsUsed || [])],
    });
    this.previewHtml.set(c.consentMessage || '');
    if (this.isReadOnlyStatus(c.status) || this.viewOnly()) {
      this.form.disable({ emitEvent: false });
    }
  }

  private inferPreset(c: Consent): string {
    if (c.validityStartDate && c.validityEndDate) {
      return 'custom';
    }
    const d = c.validityPeriodDays;
    const presets = [15, 30, 60, 90, 180, 365, 730];
    if (d != null && presets.includes(d)) {
      return String(d);
    }
    return '365';
  }

  isReadOnlyStatus(s: ConsentStatus): boolean {
    return s === 'PENDING_APPROVAL' || s === 'APPROVED' || s === 'PUBLISHED' || s === 'REJECTED';
  }

  editable(): boolean {
    const s = this.loadedStatus();
    if (this.viewOnly()) {
      return false;
    }
    return !s || s === 'DRAFT' || s === 'REVISION_REQUESTED';
  }

  nameOk(): boolean {
    return !!this.form.controls.consentName.value?.trim();
  }

  canSubmit(): boolean {
    const v = this.form.getRawValue();
    const anyChannel = v.channelEmail || v.channelSms || v.channelPush || v.channelWhatsapp || v.channelRcs;
    const msg = (this.form.controls.consentMessage.value || '').replace(/<[^>]+>/g, '').trim();
    return this.nameOk() && anyChannel && !!msg && !!this.consentDbId() && this.form.valid;
  }

  onTagsFromMessage(keys: string[]): void {
    const cur = new Set([...(this.form.controls.tagsUsed.value || [])]);
    for (const k of keys) {
      cur.add(k);
    }
    this.form.controls.tagsUsed.setValue(Array.from(cur));
  }

  private buildPayload(): ConsentCreatePayload {
    const v = this.form.getRawValue();
    let days = Number.parseInt(v.validityPreset, 10);
    let start: string | undefined;
    let end: string | undefined;

    if (v.validityPreset === 'custom') {
      start = toYmd(v.validityStartDate);
      end = toYmd(v.validityEndDate);

      if (start && end) {
        const d0 = new Date(start + 'T00:00:00');
        const d1 = new Date(end + 'T00:00:00');
        days = Math.max(1, Math.ceil((d1.getTime() - d0.getTime()) / 86400000));
      } else {
        days = 365;
      }
    }

    if (!Number.isFinite(days) || days < 1) {
      days = 365;
    }

    return {
      consentName: v.consentName.trim(),
      description: v.description,
      category: v.category,
      validityPeriodDays: days,
      validityStartDate: v.validityPreset === 'custom' ? start : undefined,
      validityEndDate: v.validityPreset === 'custom' ? end : undefined,
      consentMessage: v.consentMessage || '',
      channelEmail: v.channelEmail,
      channelSms: v.channelSms,
      channelPush: v.channelPush,
      channelWhatsapp: v.channelWhatsapp,
      channelRcs: v.channelRcs,
      tagsUsed: [...(v.tagsUsed || [])],
      searchTags: (v.tagsUsed || []).join(','),
    };
  }

  saveDraft(): void {
    if (!this.editable()) {
      return;
    }

    this.formSubmitted.set(true);

    if (this.form.controls.validityPreset.value === 'custom') {
      this.form.controls.validityStartDate.markAsTouched();
      this.form.controls.validityEndDate.markAsTouched();

      if (
        this.form.controls.validityStartDate.invalid ||
        this.form.controls.validityEndDate.invalid ||
        this.form.hasError('dateRange')
      ) {
        this.notify.warning('Validation', 'Please select a valid custom date range.');
        return;
      }
    }

    if (this.form.controls.consentName.invalid) {
      this.notify.warning('Validation', 'Please enter a consent name before saving.');
      return;
    }

    this.form.controls.consentName.markAsTouched();
    const payload = this.buildPayload();
    const id = this.consentDbId();

    if (!id) {
      this.subs.add(
        this.api.createConsent(payload).subscribe({
          next: (res) => {
            if (res.success && res.data) {
              this.consentDbId.set(res.data.id);
              this.consentIdPreview.set(res.data.consentId);
              this.loadedStatus.set(res.data.status);
              this.lastSaved.set(new Date().toLocaleTimeString('en-IN', { hour12: false }));
              this.notify.success('Draft saved', res.message || 'Draft created.');
              void this.router.navigate(['/maker/consents', res.data.id, 'edit'], { replaceUrl: true });
            }
          },
        }),
      );
      return;
    }

    this.autosaveBusy.set(true);
    this.subs.add(
      this.api.saveDraft(id, payload).subscribe({
        next: (res) => {
          this.autosaveBusy.set(false);
          if (res.success && res.data) {
            this.lastSaved.set(new Date().toLocaleTimeString('en-IN', { hour12: false }));
            this.notify.success('Draft saved', res.message || 'Saved.');
          }
        },
        error: () => {
          this.autosaveBusy.set(false);
        },
      }),
    );
  }

  private tryAutoSave(): void {
    if (!this.editable() || !this.consentDbId() || !this.nameOk()) {
      return;
    }
    this.logger.debug('CreateConsent', 'Auto-save tick');
    this.autosaveBusy.set(true);
    const id = this.consentDbId()!;
    this.subs.add(
      this.api.saveDraft(id, this.buildPayload()).subscribe({
        next: (res) => {
          this.autosaveBusy.set(false);
          if (res.success) {
            this.lastSaved.set(new Date().toLocaleTimeString('en-IN', { hour12: false }));
          }
        },
        error: () => {
          this.autosaveBusy.set(false);
        },
      }),
    );
  }

  submitForApproval(): void {
    this.formSubmitted.set(true);
    this.form.markAllAsTouched();

    if (!this.canSubmit()) {
      this.notify.warning(
        'Almost there',
        'Add a message, pick at least one channel, ensure the name is set, and fix any custom date range errors.'
      );
      return;
    }

    const id = this.consentDbId();
    if (!id) {
      return;
    }

    this.subs.add(
      this.api.saveDraft(id, this.buildPayload()).subscribe({
        next: () => {
          this.subs.add(
            this.api.submitForApproval(id).subscribe({
              next: (res) => {
                if (res.success && res.data) {
                  this.loadedStatus.set(res.data.status);
                  this.notify.success('Submitted', res.message || 'Submitted for approval.');
                  void this.router.navigate(['/maker/consents', id, 'edit'], { replaceUrl: true });
                }
              },
            }),
          );
        },
      }),
    );
  }

  isCreatePage(): boolean {
    return !this.route.snapshot.paramMap.get('id');
  }

  progress(): { details: boolean; message: boolean; channels: boolean; ready: boolean } {
    const d = this.form.controls.description.value?.trim() && this.form.controls.category.valid;
    const m = !!(this.form.controls.consentMessage.value || '').replace(/<[^>]+>/g, '').trim();
    const fv = this.form.getRawValue();
    const c = fv.channelEmail || fv.channelSms || fv.channelPush || fv.channelWhatsapp || fv.channelRcs;
    return {
      details: this.nameOk() && !!d,
      message: m,
      channels: c,
      ready: this.canSubmit(),
    };
  }

  onTagAdded(newTag: MergeTag): void {
    this.subs.add(
      this.mergeApi.getMergeTags().subscribe((tags: MergeTag[]) => {
        this.mergeTags = tags;
        this.grouped = groupMergeTagsByCategory(tags);
      })
    );
  }

  onAiInsert(event: AiInsertEvent): void {
    this.msgCard.handleAiInsert(event);
  }
}