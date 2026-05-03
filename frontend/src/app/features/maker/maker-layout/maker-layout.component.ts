import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConsentService } from '../../../core/services/consent.service';
import { MakerSidebarComponent } from '../maker-sidebar/maker-sidebar.component';
import { MakerTopbarComponent } from '../maker-topbar/maker-topbar.component';

@Component({
  selector: 'app-maker-layout',
  standalone: true,
  imports: [MakerSidebarComponent, MakerTopbarComponent, RouterOutlet],
  template: `
    <div class="shell">
      <app-maker-sidebar />
      <div class="main">
        <app-maker-topbar [pageTitle]="pageTitle()" [revisionCount]="revisionCount()" />
        <div class="content">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  styleUrl: './maker-layout.component.scss',
})
export class MakerLayoutComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly consentApi = inject(ConsentService);

  readonly pageTitle = signal('Dashboard');
  readonly revisionCount = signal(0);

  ngOnInit(): void {
    this.syncRouteTitle();
    this.refreshRevisionBadge();

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.syncRouteTitle();
        this.refreshRevisionBadge();
      });
  }

  private syncRouteTitle(): void {
    let r = this.router.routerState.root;

    while (r.firstChild) {
      r = r.firstChild;
    }

    const t = (r.snapshot.data?.['title'] as string) || 'Maker';
    this.pageTitle.set(t);
  }

  private refreshRevisionBadge(): void {
    this.consentApi.getMakerStats().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.revisionCount.set(res.data.revisionRequested ?? 0);
        }
      },
      error: () => {
        /* ConsentService already toasts */
      },
    });
  }
}