import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConsentService } from '../../../core/services/consent.service';
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
    this.consentApi.getPendingApprovals().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.pendingCount.set(res.data.length);
        }
      },
      error: () => {
        /* toasts handled in service */
      },
    });
  }
}