import { Injectable, inject } from '@angular/core';
import { Observable, map, of, take } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import {
  ReviewActionDialogComponent,
  ReviewActionDialogData,
  ReviewActionDialogResult,
} from './review-action-dialog.component';

/** Opens the checker Approve / Request revision / Reject comment dialog. */
@Injectable({ providedIn: 'root' })
export class ReviewActionDialogService {
  private readonly dialogs = inject(DialogService);

  /** Emits the entered comment, or null when the checker cancels. */
  open(data: ReviewActionDialogData): Observable<ReviewActionDialogResult | null> {
    const ref = this.dialogs.open(ReviewActionDialogComponent, {
      data,
      showHeader: false,
      modal: true,
      closable: false,
      closeOnEscape: true,
      dismissableMask: false,
      focusOnShow: true,
      width: '34rem',
      breakpoints: { '640px': 'calc(100vw - 32px)' },
      styleClass: 'review-action-dialog',
    });
    if (!ref) {
      return of(null);
    }
    return ref.onClose.pipe(
      take(1),
      map((result: ReviewActionDialogResult | null | undefined) => result ?? null),
    );
  }
}
