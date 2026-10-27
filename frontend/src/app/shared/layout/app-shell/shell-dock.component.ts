import {
  AfterViewInit,
  Component,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  inject,
  viewChild,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { ShellDockService } from './shell-dock.service';

/**
 * Renders its projected content in the shell's fixed bottom dock instead of inline,
 * so action bars stay pinned below the scrolling content rather than covering it.
 */
@Component({
  selector: 'app-shell-dock',
  standalone: true,
  template: `<ng-template #content><ng-content /></ng-template>`,
  host: { style: 'display: none' },
})
export class ShellDockComponent implements AfterViewInit, OnDestroy {
  private readonly dock = inject(ShellDockService);
  private readonly vcr = inject(ViewContainerRef);
  private readonly content = viewChild.required<TemplateRef<unknown>>('content');
  private portal: TemplatePortal | null = null;

  ngAfterViewInit(): void {
    this.portal = new TemplatePortal(this.content(), this.vcr);
    this.dock.attach(this.portal);
  }

  ngOnDestroy(): void {
    if (this.portal) {
      this.dock.detach(this.portal);
    }
  }
}
