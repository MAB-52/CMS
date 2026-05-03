import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export type ConfirmColor = 'primary' | 'warn' | 'accent' | 'success';

export interface ConfirmDialogData {
  icon?: string;
  iconColor?: string;
  title: string;
  body: string;
  cancelLabel?: string;
  confirmLabel?: string;
  confirmColor?: ConfirmColor;
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <div class="wrap">
      @if (data.icon) {
        <div class="icon-wrap" [style.background]="data.iconColor || 'rgba(99,102,241,0.12)'">
          <span class="icon">{{ data.icon }}</span>
        </div>
      }
      <h2 class="title">{{ data.title }}</h2>
      <p class="body">{{ data.body }}</p>
      <div class="actions">
        <button type="button" mat-stroked-button class="ciq-btn-secondary" mat-dialog-close>
          {{ data.cancelLabel || 'Cancel' }}
        </button>
        @if (data.confirmColor === 'success') {
          <button type="button" mat-flat-button class="ciq-btn-success" [mat-dialog-close]="true">
            {{ data.confirmLabel || 'Confirm' }}
          </button>
        } @else {
          <button type="button" mat-flat-button [color]="matColor()" [mat-dialog-close]="true">
            {{ data.confirmLabel || 'Confirm' }}
          </button>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .wrap {
        // padding: 8px 8px 0;
        padding: 25px;
        text-align: center;
      }
      .icon-wrap {
        width: 48px;
        height: 48px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 12px;
      }
      .icon {
        font-size: 25px;
      }
      .title {
        margin: 0 0 8px;
        font-size: 18px;
        font-weight: 700;
      }
      .body {
        margin: 0 0 20px;
        font-size: 14px;
        color: #64748b;
        line-height: 1.5;
        max-height: 4.5em;
        overflow: auto;
      }
      .actions {
        display: flex;
        justify-content: center;
        gap: 12px;
      }
    `,
  ],
})
export class ConfirmDialogComponent {
  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);

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
