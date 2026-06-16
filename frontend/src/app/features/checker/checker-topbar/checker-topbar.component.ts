import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-checker-topbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  template: `
    <header class="topbar">
      <div class="topbar__left">
        <div class="crumb">
          <span class="crumb__label">
            Checker Workspace
          </span>
          <span class="crumb__divider">/</span>
          <strong>
            {{ pageTitle }}
          </strong>
        </div>
        <h1 class="page-title">
          {{ pageTitle }}
        </h1>
      </div>
      <div class="topbar__right">
        
        <div class="profile-chip">

          <div class="avatar-sm">
            {{ initials() }}
          </div>
          <div class="profile-meta">
            <span class="profile-label">
              Reviewer
            </span>
            <span class="profile-name">
              {{ auth.getCurrentUser()?.fullName }}
            </span>
          </div>
        </div>

        <button
          type="button"
          class="logout-btn"
          matRipple
          (click)="logout.confirmAndLogout()"
        >

          <mat-icon>
            logout
          </mat-icon>
          Logout
        </button>
      </div>
    </header>
  `,
  styleUrl: './checker-topbar.component.scss',
})
export class CheckerTopbarComponent {

  readonly auth = inject(AuthService);
  readonly logout = inject(LogoutFlowService);

  @Input({ required: true }) pageTitle = '';
  @Input() pendingCount = 0;

  initials(): string {
    const n = this.auth.getCurrentUser()?.fullName?.trim();
    if (!n) {
      return '?';
    }

    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1) {
      return p[0].slice(0, 2).toUpperCase();
    }
    
    return (
      p[0][0] +
      p[p.length - 1][0]
    ).toUpperCase();
  }
}