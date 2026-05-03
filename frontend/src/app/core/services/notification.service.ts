import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastConfig {
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  dismissible?: boolean;
}

export interface Toast extends ToastConfig {
  id: string;
  progressKey: number;
}

const DEFAULT_DURATION: Record<ToastType, number> = {
  success: 3000,
  error: 6000,
  warning: 5000,
  info: 4000,
};

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly toasts$ = new BehaviorSubject<Toast[]>([]);
  private seq = 0;

  readonly toasts = this.toasts$.asObservable();

  success(title: string, message?: string): void {
    this.push({ type: 'success', title, message, duration: DEFAULT_DURATION.success, dismissible: false });
  }

  error(title: string, message?: string): void {
    this.push({ type: 'error', title, message, duration: DEFAULT_DURATION.error, dismissible: true });
  }

  warning(title: string, message?: string): void {
    this.push({ type: 'warning', title, message, duration: DEFAULT_DURATION.warning, dismissible: true });
  }

  info(title: string, message?: string): void {
    this.push({ type: 'info', title, message, duration: DEFAULT_DURATION.info, dismissible: false });
  }

  dismiss(id: string): void {
    this.toasts$.next(this.toasts$.value.filter((t) => t.id !== id));
  }

  private push(cfg: ToastConfig): void {
    const id = crypto.randomUUID();
    const duration = cfg.duration ?? DEFAULT_DURATION[cfg.type];
    const toast: Toast = {
      ...cfg,
      id,
      duration,
      dismissible: cfg.dismissible ?? (cfg.type === 'error' || cfg.type === 'warning'),
      progressKey: ++this.seq,
    };
    this.toasts$.next([...this.toasts$.value, toast]);
    setTimeout(() => this.dismiss(id), duration);
  }
}
