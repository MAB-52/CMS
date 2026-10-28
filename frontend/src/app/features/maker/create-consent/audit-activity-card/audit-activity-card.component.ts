import { Component, Input, OnDestroy, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ConsentHistoryTimelineComponent } from '../../../../shared/components/consent-history-timeline/consent-history-timeline.component';

@Component({
  selector: 'app-audit-activity-card',
  standalone: true,
  imports: [RouterLink, ButtonModule, TooltipModule, ConsentHistoryTimelineComponent],
  templateUrl: './audit-activity-card.component.html',
  styleUrl: './audit-activity-card.component.css',
})
export class AuditActivityCardComponent implements OnDestroy {
  @Input() consentDbId: number | null = null;

  private readonly timeline = viewChild(ConsentHistoryTimelineComponent);
  private reloadTimer: ReturnType<typeof setTimeout> | null = null;

  load(): void {
    if (this.reloadTimer) clearTimeout(this.reloadTimer);
    this.reloadTimer = setTimeout(() => this.timeline()?.reload(), 700);
  }

  ngOnDestroy(): void {
    if (this.reloadTimer) clearTimeout(this.reloadTimer);
  }
}
