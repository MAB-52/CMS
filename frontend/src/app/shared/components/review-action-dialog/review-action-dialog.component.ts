import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
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

type ButtonSeverity = 'success' | 'danger' | 'warn' | 'primary';

/** Opened through ReviewActionDialogService (PrimeNG DynamicDialog). */
@Component({
  selector: 'app-review-action-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, TextareaModule, CheckboxModule, MessageModule],
  templateUrl: './review-action-dialog.component.html',
  styleUrls: ['./review-action-dialog.component.css'],
})
export class ReviewActionDialogComponent {
  readonly data = inject<DynamicDialogConfig<ReviewActionDialogData>>(DynamicDialogConfig).data!;
  private readonly ref = inject<DynamicDialogRef<ReviewActionDialogComponent>>(DynamicDialogRef);

  readonly text = new FormControl<string>('', { nonNullable: true });
  readonly flagCombo = new FormControl<boolean>(false, { nonNullable: true });
  submitted = false;

  readonly inputId = `review-reason-${Math.random().toString(36).slice(2, 8)}`;

  /** Maps legacy emoji/Material icon names from callers onto PrimeIcons. */
  iconClass(): string {
    const icon = (this.data.icon || '').trim();
    const map: Record<string, string> = {
      '✅': 'pi-check-circle',
      check_circle: 'pi-check-circle',
      '↩': 'pi-replay',
      assignment_return: 'pi-replay',
      '❌': 'pi-times-circle',
      cancel: 'pi-times-circle',
      '⚠️': 'pi-exclamation-triangle',
      warning: 'pi-exclamation-triangle',
      '🗑️': 'pi-trash',
      delete: 'pi-trash',
      '🚪': 'pi-sign-out',
      logout: 'pi-sign-out',
    };
    return `pi ${map[icon] ?? 'pi-info-circle'}`;
  }

  confirmSeverity(): ButtonSeverity {
    switch (this.data.confirmColor) {
      case 'success':
        return 'success';
      case 'warn':
        return 'danger';
      case 'warning':
      case 'accent':
        return 'warn';
      default:
        return 'primary';
    }
  }

  constructor() {
    // Count trimmed characters (matches the on-screen counter), so 20 spaces or padded text can't pass
    const min = this.data.minLength;
    this.text.setValidators([
      Validators.required,
      (c: AbstractControl): ValidationErrors | null =>
        ((c.value as string) || '').trim().length >= min ? null : { minlength: { requiredLength: min } },
    ]);
  }

  languageLabel(code: string): string {
    return labelFor(code);
  }

  cancel(): void {
    this.ref.close(null);
  }

  submit(): void {
    this.submitted = true;
    this.text.markAsTouched();

    if (this.text.invalid) return;

    this.ref.close({
      message: this.text.value.trim(),
      flagCurrentCombo: this.flagCombo.value,
    } satisfies ReviewActionDialogResult);
  }
}
