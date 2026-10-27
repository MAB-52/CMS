import { Injectable, inject } from '@angular/core';
import { Observable, map, of, take } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmDialogComponent, ConfirmDialogData } from './confirm-dialog.component';

/** Opens the shared confirm dialog; emits true only when the user confirms. */
@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private readonly dialogs = inject(DialogService);

  open(data: ConfirmDialogData): Observable<boolean> {
    const ref = this.dialogs.open(ConfirmDialogComponent, {
      data,
      showHeader: false,
      modal: true,
      closable: false,
      closeOnEscape: true,
      dismissableMask: false,
      width: '27rem',
      breakpoints: { '520px': 'calc(100vw - 32px)' },
      // Shared dialog frame styling (src/styles/_primeng.scss).
      styleClass: 'review-action-dialog',
    });
    if (!ref) {
      return of(false);
    }
    return ref.onClose.pipe(
      take(1),
      map((ok: unknown) => ok === true),
    );
  }
}
