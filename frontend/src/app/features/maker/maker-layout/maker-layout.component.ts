import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConsentService } from '../../../core/services/consent.service';
import { AppShellComponent } from '../../../shared/layout/app-shell/app-shell.component';
import { ShellNavGroup } from '../../../shared/layout/app-shell/app-shell.model';

@Component({
  selector: 'app-maker-layout',
  standalone: true,
  imports: [AppShellComponent, RouterOutlet],
  templateUrl: './maker-layout.component.html',
  styleUrl: './maker-layout.component.css',
})
export class MakerLayoutComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly consentApi = inject(ConsentService);

  readonly pageTitle = signal('Dashboard');
  readonly revisionCount = signal(0);

  readonly nav = computed<ShellNavGroup[]>(() => [
    {
      label: 'Workspace',
      items: [
        { label: 'Dashboard', icon: 'pi pi-th-large', link: '/maker/dashboard' },
        { label: 'My Consents', icon: 'pi pi-folder-open', link: '/maker/consents', exact: true, count: this.revisionCount() },
        { label: 'Create Consent', icon: 'pi pi-file-plus', link: '/maker/consents/new', tag: '+ NEW' },
      ],
    },
    {
      label: 'Automation',
      items: [{ label: 'Broadcast Rule', icon: 'pi pi-megaphone', link: '/maker/rules' }],
    },
    {
      label: 'Activity',
      items: [{ label: 'Audit Trail', icon: 'pi pi-history', link: '/maker/audit' }],
    },
  ]);

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