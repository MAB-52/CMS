import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-admin-topbar',
  standalone: true,
  templateUrl: './admin-topbar.component.html',
  styleUrl: './admin-topbar.component.css',
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