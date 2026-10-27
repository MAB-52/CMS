import { Component, DestroyRef, ElementRef, HostListener, Input, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { PopoverModule } from 'primeng/popover';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ScrollPanel, ScrollPanelModule } from 'primeng/scrollpanel';
import { filter } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { LogoutFlowService } from '../../../core/services/logout-flow.service';
import { ShellNavGroup } from './app-shell.model';
import { ShellDockService } from './shell-dock.service';

/**
 * Shared application shell for the Admin, Maker and Checker workspaces.
 * Gradient brand header · white sidebar card · white content panel · brand footer.
 * ≥1200px: full sidebar (user can collapse) · 900–1199px: icon rail · <900px: off-canvas drawer.
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    A11yModule,
    PortalModule,
    RippleModule,
    TooltipModule,
    BadgeModule,
    PopoverModule,
    AvatarModule,
    TagModule,
    ScrollPanelModule,
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
})
export class AppShellComponent {
  readonly auth = inject(AuthService);
  readonly logout = inject(LogoutFlowService);
  readonly dock = inject(ShellDockService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  /** e.g. "Admin Workspace" */
  @Input({ required: true }) workspaceLabel = '';
  /** PrimeIcons class for the workspace badge at the top of the sidebar. */
  @Input() workspaceIcon = 'pi pi-briefcase';
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

  private readonly scroller = viewChild<ScrollPanel>('scroller');
  private readonly scrollContent = viewChild<ElementRef<HTMLElement>>('scrollContent');

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
      .subscribe(() => {
        this.drawerOpen.set(false);
        // New page: start at the top of the content panel.
        this.scroller()?.scrollTop(0);
      });

    // PrimeNG's ScrollPanel only re-measures on scroll/hover/resize; pages load data
    // asynchronously, so re-measure whenever the content height changes.
    afterNextRender(() => {
      const el = this.scrollContent()?.nativeElement;
      if (!el || typeof ResizeObserver === 'undefined') return;
      const ro = new ResizeObserver(() => this.scroller()?.refresh());
      ro.observe(el);
      this.destroyRef.onDestroy(() => ro.disconnect());
    });
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

  /** Account popover open state (drives the chip's chevron rotation and aria-expanded). */
  readonly menuOpen = signal(false);

  userName(): string {
    return this.auth.getCurrentUser()?.fullName || 'User';
  }

  userEmail(): string | null {
    return this.auth.getCurrentUser()?.email || null;
  }

  initials(): string {
    const n = this.auth.getCurrentUser()?.fullName?.trim();
    if (!n) return '?';
    const p = n.split(/\s+/).filter(Boolean);
    if (p.length === 1) return p[0].slice(0, 2).toUpperCase();
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
}
