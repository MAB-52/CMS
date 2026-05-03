import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-checker-sidebar',
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
        <div class="brand-sub">Checker Portal</div>
      </div>
      <nav class="nav-scroll">
        <div class="group-label">Review queue</div>
        <a routerLink="/checker/dashboard" routerLinkActive="active" class="nav-link">📊 Dashboard</a>
        <a routerLink="/checker/pending" routerLinkActive="active" class="nav-link">
          ⏳ Pending Approvals
          @if (pendingCount > 0) {
            <span class="pending-badge">{{ pendingCount > 99 ? '99+' : pendingCount }}</span>
          }
        </a>
        <a routerLink="/checker/history" routerLinkActive="active" class="nav-link">✅ Review History</a>
      </nav>
      <div class="divider"></div>
      <div class="user-footer">
        <div class="user-row">
          <div class="avatar">{{ initials() }}</div>
          <div>
            <div class="user-name">{{ auth.getCurrentUser()?.fullName || 'User' }}</div>
            <div class="user-role">Compliance Head · Checker</div>
          </div>
        </div>
        <button type="button" class="btn-logout" (click)="logout.confirmAndLogout()">🚪 Logout</button>
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
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
}
