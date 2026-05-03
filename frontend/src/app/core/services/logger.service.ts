import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  private stamp(): string {
    return new Date().toISOString();
  }

  info(component: string, message: string, data?: unknown): void {
    const ts = this.stamp();
    console.log(
      `%c[INFO]%c [${ts}] [${component}] ${message}`,
      'color:#7c3aed;font-weight:bold',
      'color:inherit',
      data ?? '',
    );
  }

  warn(component: string, message: string, data?: unknown): void {
    const ts = this.stamp();
    console.warn(`[WARN] [${ts}] [${component}] ${message}`, data ?? '');
  }

  error(component: string, message: string, error?: unknown): void {
    const ts = this.stamp();
    console.error(`[ERROR] [${ts}] [${component}] ${message}`, error ?? '');
  }

  group(component: string, label: string, ...data: unknown[]): void {
    console.group(`[${this.stamp()}] [${component}] ${label}`);
    for (const d of data) {
      console.log(d);
    }
    console.groupEnd();
  }

  debug(component: string, message: string, data?: unknown): void {
    if (environment.production) {
      return;
    }
    const ts = this.stamp();
    console.debug(
      `%c[DEBUG]%c [${ts}] [${component}] ${message}`,
      'color:#059669;font-weight:bold',
      'color:inherit',
      data ?? '',
    );
  }
}
