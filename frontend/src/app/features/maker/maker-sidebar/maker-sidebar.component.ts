
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
  templateUrl: './maker-sidebar.component.html',
  styleUrl: './maker-sidebar.component.css',
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