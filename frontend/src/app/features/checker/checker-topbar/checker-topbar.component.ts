import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-checker-topbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="topbar">
      <div>
        <div class="crumb">Checker / <strong>{{ pageTitle }}</strong></div>
        <h1 class="page-title">{{ pageTitle }}</h1>
      </div>
      <div class="right">
        <button type="button" class="bell" routerLink="/checker/pending" title="Pending queue">
          🔔
          @if (pendingCount > 0) {
            <span class="badge">{{ pendingCount > 9 ? '9+' : pendingCount }}</span>
          }
        </button>
        <div class="avatar-sm">{{ initials() }}</div>
        <button type="button" class="btn-out" (click)="logout.confirmAndLogout()">🚪 Logout</button>
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
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
}
