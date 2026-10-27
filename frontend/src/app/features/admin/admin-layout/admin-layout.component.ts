import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppShellComponent } from '../../../shared/layout/app-shell/app-shell.component';
import { ShellNavGroup } from '../../../shared/layout/app-shell/app-shell.model';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [AppShellComponent, RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent implements OnInit {
  private readonly router = inject(Router);

  readonly pageTitle = signal('Admin');

  readonly nav: ShellNavGroup[] = [
    {
      label: 'Operations',
      items: [
        { label: 'Dashboard', icon: 'pi pi-th-large', link: '/admin/dashboard' },
        { label: 'Capture Consent', icon: 'pi pi-check-square', link: '/admin/capture-consent' },
        { label: 'MIS Reports', icon: 'pi pi-chart-bar', link: '/admin/mis-reports' },
        { label: 'Broadcast Rule', icon: 'pi pi-megaphone', link: '/admin/rule-engine' },
      ],
    },
    {
      label: 'Administration',
      items: [{ label: 'User Management', icon: 'pi pi-users', link: '/admin/user-management' }],
    },
  ];

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