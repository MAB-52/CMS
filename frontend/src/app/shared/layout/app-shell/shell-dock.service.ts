import { Injectable, signal } from '@angular/core';
import { Portal } from '@angular/cdk/portal';

/**
 * Holds the content currently docked under the shell's content panel
 * (e.g. a checker's Approve/Reject bar). Only one dock is shown at a time.
 */
@Injectable({ providedIn: 'root' })
export class ShellDockService {
  readonly portal = signal<Portal<unknown> | null>(null);

  attach(portal: Portal<unknown>): void {
    this.portal.set(portal);
  }

  /** Clears the dock only if `portal` is still the one shown (avoids racing a newer page). */
  detach(portal: Portal<unknown>): void {
    if (this.portal() === portal) {
      this.portal.set(null);
    }
  }
}
