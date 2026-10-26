import { Component, DestroyRef, HostListener, Input, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { A11yModule } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { filter } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';
import { ShellNavGroup } from './app-shell.model';

/**
 * Shared application shell for the Admin, Maker and Checker workspaces.
 * Gradient brand header · white sidebar card · white content panel · brand footer.
 * ≥1200px: full sidebar (user can collapse) · 900–1199px: icon rail · <900px: off-canvas drawer.
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, A11yModule, MatIconModule, MatRippleModule, MatTooltipModule, MatMenuModule],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
})
export class AppShellComponent {
  readonly auth = inject(AuthService);
  readonly logout = inject(LogoutFlowService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  /** e.g. "Admin Workspace" */
  @Input({ required: true }) workspaceLabel = '';
  /** e.g. "System · Admin" */
  @Input({ required: true }) roleLabel = '';
  /** Breadcrumb prefix shown before the page title. */
  @Input() crumbLabel = '';
  @Input({ required: true }) pageTitle = '';
  @Input({ required: true }) nav: ShellNavGroup[] = [];

  readonly year = new Date().getFullYear();
  readonly drawerOpen = signal(false);
  readonly isMobile = signal(false);
  private readonly isMidWidth = signal(false);
  /** User override of the default (rail on mid-width screens, full sidebar on wide ones). */
  private readonly railOverride = signal<boolean | null>(null);
  readonly isRail = computed(() => !this.isMobile() && (this.railOverride() ?? this.isMidWidth()));

  constructor() {
    inject(BreakpointObserver)
      .observe(['(max-width: 899.98px)', '(min-width: 900px) and (max-width: 1199.98px)'])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        this.isMobile.set(state.breakpoints['(max-width: 899.98px)']);
        this.isMidWidth.set(state.breakpoints['(min-width: 900px) and (max-width: 1199.98px)']);
        this.railOverride.set(null);
        if (!this.isMobile()) {
          this.drawerOpen.set(false);
        }
      });

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.drawerOpen.set(false));
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.drawerOpen()) {
      this.drawerOpen.set(false);
    }
  }

  toggleDrawer(): void {
    this.drawerOpen.update((v) => !v);
  }

  toggleCollapse(): void {
    this.railOverride.set(!this.isRail());
  }

  userName(): string {
    return this.auth.getCurrentUser()?.fullName || 'User';
  }

  initials(): string {
    const n = this.auth.getCurrentUser()?.fullName?.trim();
    if (!n) return '?';
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1) return p[0].slice(0, 2).toUpperCase();
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
}
