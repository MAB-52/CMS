import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-admin-topbar',
  standalone: true,
  template: `
    <header class="topbar">

      <!-- Left: breadcrumb + title -->
      <div class="left">
        <div class="crumb">/ <strong>{{ pageTitle }}</strong></div>
        <h1 class="page-title">{{ pageTitle }}</h1>
      </div>

      <!-- Right: profile card + logout -->
      <div class="right">

        <!-- Profile card -->
        <div class="profile-card">
          <div class="avatar-sm">{{ initials() }}</div>
          <div class="profile-meta">
            <span class="role">Admin</span>
            <span class="name">{{ auth.getCurrentUser()?.fullName }}</span>
          </div>
        </div>

        <!-- Logout -->
        <button type="button" class="btn-out" (click)="logout.confirmAndLogout()">
          ↪ Logout
        </button>

      </div>
    </header>
  `,
  styleUrl: './admin-topbar.component.scss',
})
export class AdminTopbarComponent {
  readonly auth = inject(AuthService);
  readonly logout = inject(LogoutFlowService);

  @Input({ required: true }) pageTitle = '';

  initials(): string {
    const n = this.auth.getCurrentUser()?.fullName?.trim();
    if (!n) return '?';
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1) return p[0].slice(0, 2).toUpperCase();
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
}