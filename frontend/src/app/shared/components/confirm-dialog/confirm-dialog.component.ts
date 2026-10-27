import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MessageModule } from 'primeng/message';

export type ConfirmColor = 'primary' | 'warn' | 'accent' | 'success';

export interface ConfirmDialogData {
  /** PrimeIcons class (e.g. "pi pi-sign-out") or a legacy emoji/Material name. */
  icon?: string;
  /** Legacy; tone now comes from confirmColor. */
  iconColor?: string;
  title: string;
  body: string;

  /** Optional secondary panel (e.g. informational stats) */
  infoPanel?: string;

  /** Optional "who is this about" card, e.g. the signed-in user on logout. */
  identity?: { name: string; sub?: string | null; initials: string; caption?: string };

  cancelLabel?: string;
  confirmLabel?: string;
  /** PrimeIcons class for the confirm button. */
  confirmIcon?: string;

  confirmColor?: ConfirmColor;
}

/** Opened through ConfirmDialogService (PrimeNG DynamicDialog); closes with true when confirmed. */
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [ButtonModule, AvatarModule, MessageModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
})
export class ConfirmDialogComponent {
  readonly data = inject<DynamicDialogConfig<ConfirmDialogData>>(DynamicDialogConfig).data!;
  private readonly ref = inject(DynamicDialogRef);

  readonly tone = this.data.confirmColor ?? 'primary';

  /** Maps legacy emoji / Material icon names from callers onto PrimeIcons. */
  iconClass(): string {
    const icon = (this.data.icon || '').trim();
    if (icon.startsWith('pi ')) return icon;
    const map: Record<string, string> = {
      '🚪': 'pi pi-sign-out',
      logout: 'pi pi-sign-out',
      '✅': 'pi pi-check-circle',
      check_circle: 'pi pi-check-circle',
      '↩': 'pi pi-replay',
      '❌': 'pi pi-times-circle',
      cancel: 'pi pi-times-circle',
      '⚠️': 'pi pi-exclamation-triangle',
      warning: 'pi pi-exclamation-triangle',
      '🗑️': 'pi pi-trash',
      delete: 'pi pi-trash',
    };
    if (map[icon]) return map[icon];
    // No icon given: pick one that matches the action's tone.
    return this.tone === 'success' ? 'pi pi-play-circle' : this.tone === 'warn' ? 'pi pi-exclamation-triangle' : 'pi pi-question-circle';
  }

  confirmSeverity(): 'primary' | 'danger' | 'success' | 'warn' {
    switch (this.tone) {
      case 'warn':
        return 'danger';
      case 'success':
        return 'success';
      case 'accent':
        return 'warn';
      default:
        return 'primary';
    }
  }

  cancel(): void {
    this.ref.close(false);
  }

  confirm(): void {
    this.ref.close(true);
  }
}
