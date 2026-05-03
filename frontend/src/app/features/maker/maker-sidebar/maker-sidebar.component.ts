import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-maker-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <div class="brand">
        <div class="logo-row">
          <div class="logo-mark">CQ</div>
          <div>
            <div class="brand-name">ConsentIQ</div>
          </div>
        </div>
        <div class="brand-sub">Maker Portal</div>
      </div>
      <nav class="nav-scroll">
        <div class="group-label">Workspace</div>
        <a routerLink="/maker/dashboard" routerLinkActive="active" class="nav-link">📊 Dashboard</a>
        <a routerLink="/maker/consents" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-link"
          >📋 My Consents</a
        >
        <a routerLink="/maker/consents/new" routerLinkActive="active" class="nav-link">
          ✏️ Create New Consent
          <span class="pill-new">+ NEW</span>
        </a>
        <div class="group-label">Activity</div>
        <a routerLink="/maker/audit" routerLinkActive="active" class="nav-link">🕐 Audit Trail</a>
      </nav>
      <div class="divider"></div>
      <div class="user-footer">
        <div class="user-row">
          <div class="avatar">{{ initials() }}</div>
          <div>
            <div class="user-name">{{ auth.getCurrentUser()?.fullName || 'User' }}</div>
            <div class="user-role">Consent Manager · Maker</div>
          </div>
        </div>
        <button type="button" class="btn-logout" (click)="logout.confirmAndLogout()">🚪 Logout</button>
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
    if (!n) {
      return '?';
    }
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1) {
      return p[0].slice(0, 2).toUpperCase();
    }
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
}
