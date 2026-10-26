import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { labelFor } from '../../../core/constants/consent-languages';

export interface ReviewActionDialogData {
  title: string;
  icon?: string;
  iconColor?: string;
  textareaLabel: string;
  placeholder: string;
  confirmLabel: string;
  confirmColor: 'primary' | 'warn' | 'accent' | 'success' | 'warning';
  minLength: number;
  currentChannel?: string | null;
  currentLanguage?: string | null;
  showFlagCombo?: boolean;
}

export interface ReviewActionDialogResult {
  message: string;
  flagCurrentCombo: boolean;
}

@Component({
  selector: 'app-review-action-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './review-action-dialog.component.html',
  styleUrls: ['./review-action-dialog.component.css'],
})
export class ReviewActionDialogComponent {
  readonly data = inject<ReviewActionDialogData>(MAT_DIALOG_DATA);
  private readonly ref = inject(
    MatDialogRef<ReviewActionDialogComponent, ReviewActionDialogResult | null>
  );

  readonly text = new FormControl<string>('', { nonNullable: true });
  readonly flagCombo = new FormControl<boolean>(false, { nonNullable: true });
  submitted = false;

  /** Maps legacy emoji icons from callers onto Material icon ligatures. */
  materialIcon(): string {
    const icon = (this.data.icon || '').trim();
    if (/^[a-z0-9_]+$/.test(icon)) return icon;
    const map: Record<string, string> = {
      '🚪': 'logout',
      '✅': 'check_circle',
      '↩': 'assignment_return',
      '❌': 'cancel',
      '⚠️': 'warning',
      '🗑️': 'delete',
    };
    return map[icon] ?? 'info';
  }

  constructor() {
    this.text.setValidators([
      Validators.required,
      Validators.minLength(this.data.minLength),
    ]);
  }

  languageLabel(code: string): string {
    return labelFor(code);
  }

  submit(): void {
    this.submitted = true;
    this.text.markAsTouched();

    if (this.text.invalid) return;

    this.ref.close({
      message: this.text.value.trim(),
      flagCurrentCombo: this.flagCombo.value,
    });
  }
}