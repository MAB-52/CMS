import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-checker-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  template: `
    <aside class="sidebar">

      <!-- BRAND -->
      <div class="brand">
        <div class="brand__top">

          <div class="logo-mark">
            CQ
          </div>
          <div>

            <div class="brand-name">
              ConsentIQ
            </div>

            <div class="brand-sub">
              Checker Workspace
            </div>
          </div>
        </div>
      </div>

      <!-- NAVIGATION -->
      <nav class="nav-scroll">

        <div class="group-label">
          Review Queue
        </div>
        <a
          routerLink="/checker/dashboard"
          routerLinkActive="active"
          class="nav-link"
          matRipple
        >
          <div class="nav-icon">
            <mat-icon>dashboard</mat-icon>
          </div>
          <span>
            Dashboard
          </span>
        </a>

        <a
          routerLink="/checker/pending"
          routerLinkActive="active"
          class="nav-link"
          matRipple
        >
          <div class="nav-icon">
            <mat-icon>pending_actions</mat-icon>
          </div>
          <span>
            Pending Consents
          </span>
        </a>

        <a
          routerLink="/checker/rules/pending"
          routerLinkActive="active"
          class="nav-link"
          matRipple
        >
          <div class="nav-icon">
            <mat-icon>rule</mat-icon>
          </div>
          <span>
            Pending Broadcast Rules
          </span>
        </a>

        <a
          routerLink="/checker/history"
          routerLinkActive="active"
          class="nav-link"
          matRipple
        >
          <div class="nav-icon">
            <mat-icon>history</mat-icon>
          </div>
          <span>
            Review History
          </span>
        </a>
      </nav>

      <!-- FOOTER -->
      <div class="sidebar-footer">
        <div class="user-card">
          <div class="avatar">
            {{ initials() }}
          </div>

          <div class="user-meta">
            <div class="user-name">
              {{ auth.getCurrentUser()?.fullName || 'User' }}
            </div>

            <div class="user-role">
              Compliance Head · Checker
            </div>
          </div>
        </div>

        <button
          type="button"
          class="btn-logout"
          matRipple
          (click)="logout.confirmAndLogout()"
        >

          <mat-icon>
            logout
          </mat-icon>
          Logout
        </button>
      </div>
    </aside>
  `,
  styleUrl: './checker-sidebar.component.scss',
})
export class CheckerSidebarComponent {

  readonly auth = inject(AuthService);
  readonly logout = inject(LogoutFlowService);

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