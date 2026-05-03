import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-admin-sidebar',
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
        <div class="brand-sub">Admin Portal</div>
      </div>
      <nav class="nav-scroll">
        <div class="group-label">Operations</div>
        <a routerLink="/admin/dashboard" routerLinkActive="active" class="nav-link">📊 Dashboard</a>
        <a routerLink="/admin/capture-consent" routerLinkActive="active" class="nav-link">📬 Capture Consent</a>
    
      <div class="group-label">Administration</div>
        <a routerLink="/admin/user-management" routerLinkActive="active" class="nav-link">👥 User Management</a>
      </nav>
      <div class="divider"></div>
      <div class="user-footer">
        <div class="user-row">
          <div class="avatar">{{ initials() }}</div>
          <div>
            <div class="user-name">{{ auth.getCurrentUser()?.fullName || 'User' }}</div>
            <div class="user-role">System · Admin</div>
          </div>
        </div>
        <button type="button" class="btn-logout" (click)="logout.confirmAndLogout()">🚪 Logout</button>
      </div>
    </aside>
  `,
  styleUrl: './admin-sidebar.component.scss',
})
export class AdminSidebarComponent {
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
