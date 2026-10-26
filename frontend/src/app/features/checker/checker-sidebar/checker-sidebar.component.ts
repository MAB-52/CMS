import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-checker-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  templateUrl: './checker-sidebar.component.html',
  styleUrl: './checker-sidebar.component.css',
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

    return (
      p[0][0] +
      p[p.length - 1][0]
    ).toUpperCase();

  }

}