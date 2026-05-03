import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NotificationService } from '../../../core/services/notification.service';
import { ToastItemComponent } from '../toast-item/toast-item.component';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [AsyncPipe, ToastItemComponent],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss',
})
export class ToastContainerComponent {
  readonly notifications = inject(NotificationService);

  onDismiss(id: string): void {
    this.notifications.dismiss(id);
  }
}
