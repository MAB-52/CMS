import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Consent, MakerStats } from '../../../core/models/consent.model';
import { ConsentService } from '../../../core/services/consent.service';
import { StatusBadgeComponent } from '../../../shared/components/status-badge/status-badge.component';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-maker-dashboard',
  standalone: true,
  imports: [RouterLink, MatButtonModule, StatusBadgeComponent, TimeAgoPipe],
  templateUrl: './maker-dashboard.component.html',
  styleUrl: './maker-dashboard.component.scss',
})
export class MakerDashboardComponent implements OnInit {
  private readonly api = inject(ConsentService);

  readonly stats = signal<MakerStats | null>(null);
  readonly recent = signal<Consent[]>([]);
  readonly loading = signal(true);

  ngOnInit(): void {
    this.api.getMakerStats().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.stats.set(res.data);
        }
      },
      error: () => {
        /* service toasts */
      },
    });
    this.api.getMyConsents(0, 5).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data?.content) {
          this.recent.set(res.data.content);
        }
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  revisionCount(): number {
    return this.stats()?.revisionRequested ?? 0;
  }
}
