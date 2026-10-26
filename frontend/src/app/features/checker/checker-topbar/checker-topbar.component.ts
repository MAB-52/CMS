import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';

@Component({
  selector: 'app-checker-topbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  templateUrl:'./checker-topbar.component.html',
  styleUrl: './checker-topbar.component.css',
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
    
    return (
      p[0][0] +
      p[p.length - 1][0]
    ).toUpperCase();
  }
}