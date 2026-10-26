import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toast } from '../../../core/services/notification.service';

@Component({
  selector: 'app-toast-item',
  standalone: true,
  templateUrl: './toast-item.component.html',
  styleUrl: './toast-item.component.css',
})
export class ToastItemComponent {
  @Input({ required: true }) toast!: Toast;
  @Output() readonly dismiss = new EventEmitter<string>();

  icon(): string {
    switch (this.toast.type) {
      case 'success':
        return 'check_circle';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
    }
  }

  animDurationMs(): number {
    return this.toast.duration ?? 3000;
  }
}
