import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../../core/models/api-response.model';
import { MergeTag } from '../../../core/models/consent.model';
import { NotificationService } from '../../../core/services/notification.service';
import { MergeTagService } from '../../../core/services/merge-tag.service';
import { CommonModule } from '@angular/common';

export interface CustomerFieldResponse {
  fieldKey: string;
  fieldLabel: string;
  fieldType: 'STRING' | 'BOOLEAN' | 'DATE' | 'NUMBER';
}

@Component({
  selector: 'app-add-merge-tag-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './add-merge-tag-dialog.component.html',
})
export class AddMergeTagDialogComponent implements OnInit {
  private readonly fb      = inject(FormBuilder);
  private readonly http    = inject(HttpClient);
  private readonly dialogRef = inject(MatDialogRef<AddMergeTagDialogComponent>);
  private readonly notify  = inject(NotificationService);
  private readonly mergeTagService = inject(MergeTagService);

  form!: FormGroup;
  loading = false;
  fieldsLoading = false;

  categories: string[] = ['Company', 'Customer', 'Date', 'Links'];
  customerFields: CustomerFieldResponse[] = [];

  get previewKey(): string {
    const label = this.form?.get('tagLabel')?.value ?? '';
    return label.trim()
      ? `{{${label.trim().toUpperCase().replace(/\s+/g, '_')}}}`
      : '';
  }

  get selectedField(): CustomerFieldResponse | undefined {
    const key = this.form?.get('customerField')?.value;
    return key ? this.customerFields.find(f => f.fieldKey === key) : undefined;
  }

  get isBoolean(): boolean {
    return this.selectedField?.fieldType === 'BOOLEAN';
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tagLabel:      ['', [Validators.required, Validators.maxLength(100)]],
      tagCategory:   ['', Validators.required],
      customerField: [null],
      sampleValue:   ['', Validators.maxLength(200)],
      // Boolean display labels — only used when fieldType is BOOLEAN
      trueLabel:     [''],   // e.g. "VIP"
      falseLabel:    [''],   // e.g. "Normal User"
    });

    this.loadCustomerFields();
  }

  private loadCustomerFields(): void {
    this.fieldsLoading = true;
    this.http
      .get<ApiResponse<CustomerFieldResponse[]>>(`${environment.apiUrl}/customer-fields`)
      .subscribe({
        next: (res) => {
          this.fieldsLoading = false;
          this.customerFields = res.data ?? [];
        },
        error: () => {
          this.fieldsLoading = false;
          this.notify.error('Fields', 'Could not load customer fields.');
        },
      });
  }

  onCustomerFieldChange(fieldKey: string | null): void {
    if (!fieldKey) {
      // Reset boolean labels when cleared
      this.form.patchValue({ trueLabel: '', falseLabel: '', sampleValue: '' });
      return;
    }
    const selected = this.customerFields.find(f => f.fieldKey === fieldKey);
    if (!selected) return;

    if (selected.fieldType === 'BOOLEAN') {
      // Pre-fill sensible defaults for boolean labels
      this.form.patchValue({
        trueLabel:   'Yes',
        falseLabel:  'No',
        sampleValue: 'Yes',
      });
    } else {
      this.form.patchValue({
        trueLabel:  '',
        falseLabel: '',
        sampleValue: `[${selected.fieldLabel}]`,
      });
    }
  }

  getFieldTypeLabel(fieldType: string): string {
    switch (fieldType) {
      case 'BOOLEAN': return '(Yes/No)';
      case 'DATE':    return '(Date)';
      case 'NUMBER':  return '(Number)';
      default:        return '';
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const isBoolean = this.selectedField?.fieldType === 'BOOLEAN';

    const payload = {
      tagKey:        this.previewKey,
      tagLabel:      this.form.value.tagLabel.trim(),
      tagCategory:   this.form.value.tagCategory,
      customerField: this.form.value.customerField ?? null,
      sampleValue:   this.form.value.sampleValue?.trim() ?? '',
      // Send boolean labels so backend stores them
      trueLabel:     isBoolean ? (this.form.value.trueLabel?.trim() || 'Yes')  : null,
      falseLabel:    isBoolean ? (this.form.value.falseLabel?.trim() || 'No')   : null,
    };

    this.loading = true;
    this.http
      .post<ApiResponse<MergeTag>>(`${environment.apiUrl}/merge-tags`, payload)
      .subscribe({
        next: (res) => {
          this.loading = false;
          if (!res.success || !res.data) {
            this.notify.error('Add Tag', res.message || 'Failed to create tag.');
            return;
          }
          this.mergeTagService.clearCache();
          this.notify.success('Add Tag', `"${res.data.tagLabel}" added successfully.`);
          this.dialogRef.close(res.data);
        },
        error: (err) => {
          this.loading = false;
          const msg = err?.error?.message || 'Could not create tag.';
          this.notify.error('Add Tag', msg);
        },
      });
  }

  cancel(): void {
    this.dialogRef.close(null);
  }
}