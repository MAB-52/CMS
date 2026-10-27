import { Injectable, inject } from '@angular/core';
import { Observable, map, of, take } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { MergeTag } from '../../../core/models/consent.model';
import { AddMergeTagDialogComponent } from './add-merge-tag-dialog.component';

/** Opens the "Add Variable Tag" dialog; emits the created tag, or null when cancelled. */
@Injectable({ providedIn: 'root' })
export class AddMergeTagDialogService {
  private readonly dialogs = inject(DialogService);

  open(): Observable<MergeTag | null> {
    const ref = this.dialogs.open(AddMergeTagDialogComponent, {
      showHeader: false,
      modal: true,
      closable: false,
      closeOnEscape: false,
      dismissableMask: false,
      focusOnShow: true,
      width: '32rem',
      breakpoints: { '640px': 'calc(100vw - 32px)' },
      // Shares the dialog frame styling with the review dialog (src/styles/_primeng.scss).
      styleClass: 'review-action-dialog',
    });
    if (!ref) {
      return of(null);
    }
    return ref.onClose.pipe(
      take(1),
      map((tag: MergeTag | null | undefined) => tag ?? null),
    );
  }
}
