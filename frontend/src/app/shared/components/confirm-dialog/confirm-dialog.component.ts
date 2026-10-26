import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export type ConfirmColor = 'primary' | 'warn' | 'accent' | 'success';

export interface ConfirmDialogData {
  icon?: string;
  iconColor?: string;
  title: string;
  body: string;

  /** Optional secondary panel (e.g. informational stats) */
  infoPanel?: string;

  cancelLabel?: string;
  confirmLabel?: string;

  confirmColor?: ConfirmColor;
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
})
export class ConfirmDialogComponent {
  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);

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

  matColor(): 'primary' | 'warn' | 'accent' {
    const c = this.data.confirmColor;

    if (c === 'warn') {
      return 'warn';
    }

    if (c === 'accent') {
      return 'accent';
    }

    return 'primary';
  }
}