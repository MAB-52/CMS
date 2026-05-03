import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toast } from '../../../core/services/notification.service';

@Component({
  selector: 'app-toast-item',
  standalone: true,
  templateUrl: './toast-item.component.html',
  styleUrl: './toast-item.component.scss',
})
export class ToastItemComponent {
  @Input({ required: true }) toast!: Toast;
  @Output() readonly dismiss = new EventEmitter<string>();

  icon(): string {
    switch (this.toast.type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
    }
  }

  animDurationMs(): number {
    return this.toast.duration ?? 3000;
  }
}
