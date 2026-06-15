
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-maker-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatRippleModule],
  template: `
    <aside class="sidebar">

      <!-- BRAND -->
      <div class="brand">
        <div class="brand__top">
          <div class="logo-mark">CQ</div>
          <div>
            <div class="brand-name">ConsentIQ</div>
            <div class="brand-sub">Maker Workspace</div>
          </div>
        </div>
      </div>

      <!-- NAVIGATION -->
      <nav class="nav-scroll">

        <div class="group-label">Workspace</div>

        <a routerLink="/maker/dashboard" routerLinkActive="active" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>dashboard</mat-icon></div>
          <span>Dashboard</span>
        </a>

        <a routerLink="/maker/consents" routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: true }" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>assignment</mat-icon></div>
          <span>My Consents</span>
        </a>

        <a routerLink="/maker/consents/new" routerLinkActive="active" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>edit_note</mat-icon></div>
          <span>Create Consent</span>
          <span class="new-badge">+ NEW</span>
        </a>

        <div class="group-label">Automation</div>

        <a routerLink="/maker/rules" routerLinkActive="active" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>rule</mat-icon></div>
          <span>Broadcast Rule</span>
        </a>

        <div class="group-label">Activity</div>

        <a routerLink="/maker/audit" routerLinkActive="active" class="nav-link" matRipple>
          <div class="nav-icon"><mat-icon>history</mat-icon></div>
          <span>Audit Trail</span>
        </a>

      </nav>

      <!-- FOOTER -->
      <div class="sidebar-footer">
        <div class="user-card">
          <div class="avatar">{{ initials() }}</div>
          <div class="user-meta">
            <div class="user-name">{{ auth.getCurrentUser()?.fullName || 'User' }}</div>
            <div class="user-role">Consent Manager · Maker</div>
          </div>
        </div>
        <button type="button" class="btn-logout" matRipple (click)="logout.confirmAndLogout()">
          <mat-icon>logout</mat-icon>
          Logout
        </button>
      </div>

    </aside>
  `,
  styleUrl: './maker-sidebar.component.scss',
})
export class MakerSidebarComponent {
  readonly auth = inject(AuthService);
  readonly logout = inject(LogoutFlowService);

  initials(): string {
    const n = this.auth.getCurrentUser()?.fullName?.trim();
    if (!n) return '?';
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1) return p[0].slice(0, 2).toUpperCase();
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
}