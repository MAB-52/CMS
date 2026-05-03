import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-maker-topbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="topbar">
      <div>
        <div class="crumb">Maker / <strong>{{ pageTitle }}</strong></div>
        <h1 class="page-title">{{ pageTitle }}</h1>
      </div>
      <div class="right">
        <button type="button" class="bell" routerLink="/maker/consents" title="Revision requests">
          🔔
          @if (revisionCount > 0) {
            <span class="badge">{{ revisionCount > 9 ? '9+' : revisionCount }}</span>
          }
        </button>
        <div class="avatar-sm">{{ initials() }}</div>
        <button type="button" class="btn-out" (click)="logout.confirmAndLogout()">🚪 Logout</button>
      </div>
    </header>
  `,
  styleUrl: './maker-topbar.component.scss',
})
export class MakerTopbarComponent {
  readonly auth = inject(AuthService);
  readonly logout = inject(LogoutFlowService);

  @Input({ required: true }) pageTitle = '';
  @Input() revisionCount = 0;

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
