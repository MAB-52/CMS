import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-maker-topbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './maker-topbar.component.html',
  styleUrl: './maker-topbar.component.css',
})
export class MakerTopbarComponent {
  readonly auth = inject(AuthService);
  readonly logout = inject(LogoutFlowService);

  @Input({ required: true }) pageTitle = '';
  @Input() revisionCount = 0;

  initials(): string {
    const n = this.auth.getCurrentUser()?.fullName?.trim();
    if (!n) return '?';
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1) return p[0].slice(0, 2).toUpperCase();
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
}