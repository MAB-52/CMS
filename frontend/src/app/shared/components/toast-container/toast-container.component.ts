import { Component, inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { APP_TOAST_KEY, NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.css',
})
export class ToastContainerComponent {
  private readonly notifications = inject(NotificationService);
  readonly toastKey = APP_TOAST_KEY;

  onClose(contentKey: string | undefined): void {
    this.notifications.released(contentKey);
  }
}
