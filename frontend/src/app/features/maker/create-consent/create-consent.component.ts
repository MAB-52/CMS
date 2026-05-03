import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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

  readonly form = this.fb.nonNullable.group({
    consentName: ['', [Validators.required, Validators.maxLength(200)]],
    description: ['', [Validators.required, Validators.maxLength(1000)]],
    category: this.fb.nonNullable.control<ConsentCategory>('MARKETING', Validators.required),
    validityPreset: this.fb.nonNullable.control('365'),
    validityStartDate: [''],
    validityEndDate: [''],
    consentMessage: [''],
    deliveryChannels: this.fb.nonNullable.control<string[]>([]),
    tagsUsed: this.fb.nonNullable.control<string[]>([]),
  });

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
      validityStartDate: c.validityStartDate ? String(c.validityStartDate).slice(0, 10) : '',
      validityEndDate: c.validityEndDate ? String(c.validityEndDate).slice(0, 10) : '',
      consentMessage: c.consentMessage || '',
      deliveryChannels: [...(c.deliveryChannels || [])],
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
      validityStartDate: c.validityStartDate ? String(c.validityStartDate).slice(0, 10) : '',
      validityEndDate: c.validityEndDate ? String(c.validityEndDate).slice(0, 10) : '',
      consentMessage: c.consentMessage || '',
      deliveryChannels: [...(c.deliveryChannels || [])],
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
    const presets = [30, 60, 90, 180, 365, 730];
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
    const ch = this.form.controls.deliveryChannels.value || [];
    const msg = (this.form.controls.consentMessage.value || '').replace(/<[^>]+>/g, '').trim();
    return this.nameOk() && ch.length > 0 && !!msg && !!this.consentDbId();
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
      start = v.validityStartDate || undefined;
      end = v.validityEndDate || undefined;
      if (start && end) {
        const d0 = new Date(start);
        const d1 = new Date(end);
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
      deliveryChannels: [...(v.deliveryChannels || [])],
      tagsUsed: [...(v.tagsUsed || [])],
      searchTags: (v.tagsUsed || []).join(','),
    };
  }

  saveDraft(): void {
    if (!this.editable()) {
      return;
    }
    this.formSubmitted.set(true);
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
      this.notify.warning('Almost there', 'Add a message, pick at least one channel, and ensure the name is set.');
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
    const c = (this.form.controls.deliveryChannels.value || []).length > 0;
    return {
      details: this.nameOk() && !!d,
      message: m,
      channels: c,
      ready: this.canSubmit(),
    };
  }
}
