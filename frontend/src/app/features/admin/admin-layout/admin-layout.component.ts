import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from '../admin-topbar/admin-topbar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [AdminSidebarComponent, AdminTopbarComponent, RouterOutlet],
  template: `
    <div class="shell">
      <app-admin-sidebar />
      <div class="main">
        <app-admin-topbar [pageTitle]="pageTitle()" />
        <div class="content">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent implements OnInit {
  private readonly router = inject(Router);

  readonly pageTitle = signal('Admin');

  constructor() {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(() => {
      this.syncRouteTitle();
    });
  }

  ngOnInit(): void {
    this.syncRouteTitle();
  }

  private syncRouteTitle(): void {
    let r = this.router.routerState.root.firstChild;
    while (r?.firstChild) {
      r = r.firstChild;
    }
    const t = (r?.snapshot?.data?.['title'] as string) || 'Admin';
    this.pageTitle.set(t);
  }
}
