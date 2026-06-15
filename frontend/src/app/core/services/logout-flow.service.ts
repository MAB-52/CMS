import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogData } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class LogoutFlowService {
  private readonly dialog = inject(MatDialog);
  private readonly auth = inject(AuthService);
  private readonly notify = inject(NotificationService);

  confirmAndLogout(): void {
    const data: ConfirmDialogData = {
      icon: '🚪',
      iconColor: 'rgba(99,102,241,0.12)',
      title: 'Logout',
      body: 'Are you sure you want to logout?',
      cancelLabel: 'Cancel',
      confirmLabel: 'Logout',
      confirmColor: 'primary',
    };
    const ref = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data,
    });
    ref.afterClosed().subscribe((ok) => {
      if (ok) {
        this.auth.logout();
        this.notify.success('You have been logged out.');
      }
    });
  }
}
