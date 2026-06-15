import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ConsentService } from '../../../core/services/consent.service';
import { ConsentRulesService } from '../../../core/services/consent-rules.service';
import { BroadcastsService } from '../../../core/services/broadcasts.service';
import { CheckerSidebarComponent } from '../checker-sidebar/checker-sidebar.component';
import { CheckerTopbarComponent } from '../checker-topbar/checker-topbar.component';

@Component({
  selector: 'app-checker-layout',
  standalone: true,
  imports: [CheckerSidebarComponent, CheckerTopbarComponent, RouterOutlet],
  template: `
    <div class="shell">
      <app-checker-sidebar [pendingCount]="pendingCount()" />
      <div class="main">
        <app-checker-topbar [pageTitle]="pageTitle()" [pendingCount]="pendingCount()" />
        <div class="content">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  styleUrl: './checker-layout.component.scss',
})
export class CheckerLayoutComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly consentApi = inject(ConsentService);
  private readonly rulesApi = inject(ConsentRulesService);
  private readonly broadcastsApi = inject(BroadcastsService);

  readonly pageTitle = signal('Dashboard');
  readonly pendingCount = signal(0);

  ngOnInit(): void {
    this.syncRouteTitle();
    this.refreshPending();

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.syncRouteTitle();
        this.refreshPending();
      });
  }

  private syncRouteTitle(): void {
    let r = this.router.routerState.root;

    while (r.firstChild) {
      r = r.firstChild;
    }

    const t = (r.snapshot.data?.['title'] as string) || 'Checker';
    this.pageTitle.set(t);
  }

  private refreshPending(): void {
    forkJoin({
      consents: this.consentApi.getPendingApprovals(),
      rules: this.rulesApi.listPending(),
      broadcasts: this.broadcastsApi.listPending(),
    }).subscribe({
      next: ({ consents, rules, broadcasts }) => {
        const c = consents.success && consents.data ? consents.data.length : 0;
        const r = rules.success && rules.data ? rules.data.length : 0;
        const b = broadcasts.success && broadcasts.data ? broadcasts.data.length : 0;
        this.pendingCount.set(c + r + b);
      },
      error: () => {
        /* toasts handled in services */
      },
    });
  }
}