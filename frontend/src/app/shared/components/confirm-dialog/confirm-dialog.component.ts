// import { Component, inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';

// export type ConfirmColor = 'primary' | 'warn' | 'accent' | 'success';

// export interface ConfirmDialogData {
//   icon?: string;
//   iconColor?: string;
//   title: string;
//   body: string;
//   /** Optional secondary panel (e.g. informational stats) shown below the main body. */
//   infoPanel?: string;
//   cancelLabel?: string;
//   confirmLabel?: string;
//   confirmColor?: ConfirmColor;
// }

// @Component({
//   selector: 'app-confirm-dialog',
//   standalone: true,
//   imports: [MatDialogModule, MatButtonModule],
//   template: `
//     <div class="wrap">
//       @if (data.icon) {
//         <div class="icon-wrap" [style.background]="data.iconColor || 'rgba(99,102,241,0.12)'">
//           <span class="icon">{{ data.icon }}</span>
//         </div>
//       }
//       <h2 class="title">{{ data.title }}</h2>
//       <p class="body">{{ data.body }}</p>
//       @if (data.infoPanel) {
//         <p class="info-panel">{{ data.infoPanel }}</p>
//       }
//       <div class="actions">
//         <button type="button" mat-stroked-button class="ciq-btn-secondary" mat-dialog-close>
//           {{ data.cancelLabel || 'Cancel' }}
//         </button>
//         @if (data.confirmColor === 'success') {
//           <button type="button" mat-flat-button class="ciq-btn-success" [mat-dialog-close]="true">
//             {{ data.confirmLabel || 'Confirm' }}
//           </button>
//         } @else {
//           <button type="button" mat-flat-button [color]="matColor()" [mat-dialog-close]="true">
//             {{ data.confirmLabel || 'Confirm' }}
//           </button>
//         }
//       </div>
//     </div>
//   `,
//   styles: [
//     `
//       .wrap {
//         // padding: 8px 8px 0;
//         padding: 25px;
//         text-align: center;
//       }
//       .icon-wrap {
//         width: 48px;
//         height: 48px;
//         border-radius: 999px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         margin: 0 auto 12px;
//       }
//       .icon {
//         font-size: 25px;
//       }
//       .title {
//         margin: 0 0 8px;
//         font-size: 18px;
//         font-weight: 700;
//       }
//       .body {
//         margin: 0 0 20px;
//         font-size: 14px;
//         color: #64748b;
//         line-height: 1.5;
//         max-height: 4.5em;
//         overflow: auto;
//       }
//       .info-panel {
//         margin: 0 0 16px;
//         padding: 10px 12px;
//         font-size: 13px;
//         line-height: 1.45;
//         color: #0f766e;
//         background: rgba(13, 148, 136, 0.08);
//         border-radius: 8px;
//         text-align: left;
//         white-space: pre-line;
//       }
//       .actions {
//         display: flex;
//         justify-content: center;
//         gap: 12px;
//       }
//       .ciq-btn-success {
//         background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%) !important;
//         color: #fff !important;
//         box-shadow: 0 2px 8px rgba(22, 163, 74, 0.30) !important;
//         font-weight: 600;
//         letter-spacing: 0.02em;
//         transition: box-shadow 0.2s ease, filter 0.2s ease;
//       }
//       .ciq-btn-success:hover {
//         filter: brightness(1.08);
//         box-shadow: 0 4px 14px rgba(22, 163, 74, 0.40) !important;
//       }
//     `,
//   ],
// })
// export class ConfirmDialogComponent {
//   readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);

//   matColor(): 'primary' | 'warn' | 'accent' {
//     const c = this.data.confirmColor;
//     if (c === 'warn') {
//       return 'warn';
//     }
//     if (c === 'accent') {
//       return 'accent';
//     }
//     return 'primary';
//   }
// }


import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export type ConfirmColor = 'primary' | 'warn' | 'accent' | 'success';

export interface ConfirmDialogData {
  icon?: string;
  iconColor?: string;
  title: string;
  body: string;

  /** Optional secondary panel (e.g. informational stats) */
  infoPanel?: string;

  cancelLabel?: string;
  confirmLabel?: string;

  confirmColor?: ConfirmColor;
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],

  template: `
    <div class="wrap">

      <!-- Glow -->
      <div class="bg-glow"></div>

      <!-- Icon -->
      @if (data.icon) {
        <div
          class="icon-wrap"
          [style.background]="data.iconColor || 'rgba(59,130,246,0.12)'"
        >
          <span class="icon">
            {{ data.icon }}
          </span>
        </div>
      }

      <!-- Title -->
      <h2 class="title">
        {{ data.title }}
      </h2>

      <!-- Body -->
      <p class="body">
        {{ data.body }}
      </p>

      <!-- Info Panel -->
      @if (data.infoPanel) {
        <div class="info-panel">
          {{ data.infoPanel }}
        </div>
      }

      <!-- Actions -->
      <div class="actions">

        <button
          type="button"
          mat-stroked-button
          class="cancel-btn"
          mat-dialog-close
        >
          {{ data.cancelLabel || 'Cancel' }}
        </button>

        @if (data.confirmColor === 'success') {

          <button
            type="button"
            mat-flat-button
            class="success-btn"
            [mat-dialog-close]="true"
          >
            {{ data.confirmLabel || 'Confirm' }}
          </button>

        } @else {

          <button
            type="button"
            mat-flat-button
            class="confirm-btn"
            [color]="matColor()"
            [mat-dialog-close]="true"
          >
            {{ data.confirmLabel || 'Confirm' }}
          </button>

        }

      </div>

    </div>
  `,

  styles: [
    `
      :host {
        display: block;
      }

      /* ─────────────────────────────────────────
         DIALOG CONTAINER
      ───────────────────────────────────────── */
      .wrap {
        position: relative;

        padding: 34px 30px 28px;

        text-align: center;

        border-radius: 28px;

        overflow: hidden;

        background:
          rgba(255, 255, 255, 0.88);

        backdrop-filter: blur(18px);

        border:
          1px solid rgba(255, 255, 255, 0.8);

        box-shadow:
          0 10px 40px rgba(15, 23, 42, 0.10),
          0 2px 10px rgba(15, 23, 42, 0.06);
      }

      /* ─────────────────────────────────────────
         BACKGROUND GLOW
      ───────────────────────────────────────── */
      .bg-glow {
        position: absolute;
        inset: 0;

        background:
          radial-gradient(
            circle at top left,
            rgba(59, 130, 246, 0.08),
            transparent 35%
          ),

          radial-gradient(
            circle at bottom right,
            rgba(14, 165, 233, 0.06),
            transparent 35%
          );

        pointer-events: none;
      }

      /* ─────────────────────────────────────────
         ICON
      ───────────────────────────────────────── */
      .icon-wrap {
        width: 62px;
        height: 62px;

        margin: 0 auto 18px;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        backdrop-filter: blur(10px);

        border:
          1px solid rgba(255,255,255,0.7);

        box-shadow:
          0 6px 18px rgba(15, 23, 42, 0.08);

        position: relative;
        z-index: 1;
      }

      .icon {
        font-size: 30px;
        line-height: 1;
      }

      /* ─────────────────────────────────────────
         TITLE
      ───────────────────────────────────────── */
      .title {
        margin: 0 0 10px;

        font-size: 24px;
        font-weight: 800;

        letter-spacing: -0.03em;

        color: #0f172a;

        position: relative;
        z-index: 1;
      }

      /* ─────────────────────────────────────────
         BODY
      ───────────────────────────────────────── */
      .body {
        margin: 0 auto 22px;

        max-width: 420px;

        font-size: 15px;
        font-weight: 500;

        line-height: 1.65;

        color: #64748b;

        position: relative;
        z-index: 1;
      }

      /* ─────────────────────────────────────────
         INFO PANEL
      ───────────────────────────────────────── */
      .info-panel {
        margin-bottom: 24px;

        padding: 14px 16px;

        border-radius: 18px;

        background:
          rgba(14, 165, 233, 0.08);

        border:
          1px solid rgba(14, 165, 233, 0.12);

        color: #0f766e;

        font-size: 13px;
        font-weight: 500;

        line-height: 1.6;

        text-align: left;

        white-space: pre-line;

        backdrop-filter: blur(12px);

        position: relative;
        z-index: 1;
      }

      /* ─────────────────────────────────────────
         ACTIONS
      ───────────────────────────────────────── */
      .actions {
        display: flex;
        justify-content: center;
        gap: 14px;

        position: relative;
        z-index: 1;
      }

      /* ─────────────────────────────────────────
         BUTTON BASE
      ───────────────────────────────────────── */
      .actions button {
        min-width: 120px;
        height: 46px;

        border-radius: 14px !important;

        font-weight: 700;
        font-size: 14px;

        letter-spacing: 0.02em;

        transition:
          transform 0.22s ease,
          box-shadow 0.22s ease,
          filter 0.22s ease;
      }

      .actions button:hover {
        transform: translateY(-2px);
      }

      /* ─────────────────────────────────────────
         CANCEL BUTTON
      ───────────────────────────────────────── */
      .cancel-btn {
        background:
          rgba(255,255,255,0.7) !important;

        border:
          1px solid rgba(148,163,184,0.18) !important;

        color: #475569 !important;

        box-shadow:
          0 4px 12px rgba(15, 23, 42, 0.04) !important;
      }

      .cancel-btn:hover {
        border-color:
          rgba(59,130,246,0.22) !important;

        color: #2563eb !important;
      }

      /* ─────────────────────────────────────────
         PRIMARY CONFIRM
      ───────────────────────────────────────── */
      .confirm-btn {
        background:
          linear-gradient(
            135deg,
            #2563eb,
            #0ea5e9
          ) !important;

        color: white !important;

        box-shadow:
          0 10px 24px rgba(37, 99, 235, 0.26) !important;
      }

      .confirm-btn:hover {
        box-shadow:
          0 16px 34px rgba(37, 99, 235, 0.34) !important;
      }

      /* ─────────────────────────────────────────
         SUCCESS BUTTON
      ───────────────────────────────────────── */
      .success-btn {
        background:
          linear-gradient(
            135deg,
            #22c55e,
            #16a34a
          ) !important;

        color: #fff !important;

        box-shadow:
          0 10px 24px rgba(22, 163, 74, 0.28) !important;
      }

      .success-btn:hover {
        box-shadow:
          0 16px 34px rgba(22, 163, 74, 0.36) !important;
      }

      /* ─────────────────────────────────────────
         MOBILE
      ───────────────────────────────────────── */
      @media (max-width: 640px) {

        .wrap {
          padding: 28px 22px 24px;
          border-radius: 24px;
        }

        .title {
          font-size: 21px;
        }

        .actions {
          flex-direction: column;
        }

        .actions button {
          width: 100%;
        }

      }
    `,
  ],
})
export class ConfirmDialogComponent {

  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);

  matColor(): 'primary' | 'warn' | 'accent' {
    const c = this.data.confirmColor;

    if (c === 'warn') {
      return 'warn';
    }

    if (c === 'accent') {
      return 'accent';
    }

    return 'primary';
  }
}