import { inject, Injectable } from '@angular/core';
import { ConfirmDialogData } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from '../../shared/components/confirm-dialog/confirm-dialog.service';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class LogoutFlowService {
  private readonly confirmDialog = inject(ConfirmDialogService);
  private readonly auth = inject(AuthService);
  private readonly notify = inject(NotificationService);

  confirmAndLogout(): void {
    const user = this.auth.getCurrentUser();
    const name = user?.fullName?.trim() || 'Your account';
    const data: ConfirmDialogData = {
      icon: 'pi pi-sign-out',
      title: 'Sign out of ConsentIQ?',
      body: "You'll need to sign in again to continue working. Any unsaved changes on this page will be lost.",
      identity: {
        caption: 'Signed in as',
        name,
        sub: user?.email ?? null,
        initials: initialsOf(name),
      },
      cancelLabel: 'Stay signed in',
      confirmLabel: 'Sign out',
      confirmIcon: 'pi pi-sign-out',
      confirmColor: 'primary',
    };
    this.confirmDialog.open(data).subscribe((ok) => {
      if (ok) {
        this.auth.logout();
        this.notify.success('You have been logged out.');
      }
    });
  }
}

function initialsOf(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
