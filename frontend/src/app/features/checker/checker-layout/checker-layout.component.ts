import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ConsentService } from '../../../core/services/consent.service';
import { ConsentRulesService } from '../../../core/services/consent-rules.service';
import { BroadcastsService } from '../../../core/services/broadcasts.service';
import { AppShellComponent } from '../../../shared/layout/app-shell/app-shell.component';
import { ShellNavGroup } from '../../../shared/layout/app-shell/app-shell.model';

@Component({
  selector: 'app-checker-layout',
  standalone: true,
  imports: [AppShellComponent, RouterOutlet],
  templateUrl: './checker-layout.component.html',
  styleUrl: './checker-layout.component.css',
})
export class CheckerLayoutComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly consentApi = inject(ConsentService);
  private readonly rulesApi = inject(ConsentRulesService);
  private readonly broadcastsApi = inject(BroadcastsService);

  readonly pageTitle = signal('Dashboard');
  readonly pendingCount = signal(0);

  readonly nav: ShellNavGroup[] = [
    {
      label: 'Review Queue',
      items: [
        { label: 'Dashboard', icon: 'pi pi-th-large', link: '/checker/dashboard' },
        { label: 'Pending Consents', icon: 'pi pi-hourglass', link: '/checker/pending' },
        { label: 'Linked consent + rule', icon: 'pi pi-link', link: '/checker/linked-pending' },
        { label: 'Pending Broadcast Rules', icon: 'pi pi-megaphone', link: '/checker/rules/pending' },
        { label: 'Review History', icon: 'pi pi-history', link: '/checker/history' },
      ],
    },
  ];

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
      linkedConsents: this.consentApi.getLinkedPendingApprovals(),
      rules: this.rulesApi.listPending(),
      broadcasts: this.broadcastsApi.listPending(),
    }).subscribe({
      next: ({ consents, linkedConsents, rules, broadcasts }) => {
        const c = consents.success && consents.data ? consents.data.length : 0;
        const lc = linkedConsents.success && linkedConsents.data ? linkedConsents.data.length : 0;
        const r = rules.success && rules.data ? rules.data.length : 0;
        const b = broadcasts.success && broadcasts.data ? broadcasts.data.length : 0;
        this.pendingCount.set(c + lc + r + b);
      },
      error: () => {
        /* toasts handled in services */
      },
    });
  }
}