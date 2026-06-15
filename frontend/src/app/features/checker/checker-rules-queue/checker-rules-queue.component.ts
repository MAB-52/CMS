import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ConsentRulesService } from '../../../core/services/consent-rules.service';
import { ConsentRule } from '../../../core/models/workflow.model';

import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';

@Component({
  selector: 'app-checker-rules-queue',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    WorkflowStatusBadgeComponent,
  ],
  template: `
    <div class="queue-page">
      <div class="queue-hero">
        <div class="queue-hero__content">
          <div class="queue-hero__eyebrow">
            <mat-icon>fact_check</mat-icon>
            Checker Workspace
          </div>

          <h1>Rules Pending Approval</h1>

          <p>
            Review consent rules submitted by makers,
            validate compliance, and approve or request revisions.
          </p>

          <div class="queue-stats">
            <div class="queue-stat">
              <span class="queue-stat__value">
                {{ rows().length }}
              </span>

              <span class="queue-stat__label">
                Pending Reviews
              </span>
            </div>

          </div>
        </div>

        <div class="queue-hero__actions">
          <a
            mat-flat-button
            color="primary"
            routerLink="/checker/dashboard"
          >
            <mat-icon>dashboard</mat-icon>
            Dashboard
          </a>
        </div>
      </div>

      @if (!rows().length) {

        <div class="empty-state">
          <div class="empty-state__icon">
            <mat-icon>task_alt</mat-icon>
          </div>

          <h2>All caught up</h2>

          <p>
            There are currently no consent rules awaiting approval.
          </p>

          <a
            mat-stroked-button
            color="primary"
            routerLink="/checker/dashboard"
          >
            Back to Dashboard
          </a>
        </div>
      } @else {

        <div class="rules-grid">
          @for (r of rows(); track r.id) {
            <a
              class="rule-card"
              matRipple
              [routerLink]="['/checker/rules', r.id, 'review']"
            >

              <div class="rule-card__top">
                <div class="rule-title-wrap">
                  <div class="rule-icon">
                    <mat-icon>rule</mat-icon>
                  </div>

                  <div class="rule-card__content">
                    <h3>
                      {{ r.ruleName }}
                    </h3>
                  </div>
                </div>

                <app-workflow-status-badge
                  [status]="r.status"
                />
              </div>

              <div class="rule-meta-inline">
                <span class="meta-chip">
                  <mat-icon>person</mat-icon>
                  {{ r.createdByName }}
                </span>

                <span class="meta-divider">•</span>

                <span class="meta-chip">
                  <mat-icon>calendar_today</mat-icon>
                  {{ r.submittedAt | date:'dd MMM yyyy' }}
                </span>
                <span class="meta-divider">•</span>

                <span class="meta-chip">
                  <mat-icon>schedule</mat-icon>
                  {{ r.submittedAt | date:'hh:mm a' }}
                </span>
              </div>

              <div class="rule-card__footer">
                <span class="review-link">
                  Open Review
                  <mat-icon>
                    arrow_forward
                  </mat-icon>
                </span>
              </div>
            </a>
          }
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100%;

      background:
        radial-gradient(circle at top left, rgba(99, 102, 241, 0.08), transparent 24%),
        radial-gradient(circle at top right, rgba(59, 130, 246, 0.08), transparent 20%),
        #f8fafc;
    }

    .queue-page {
      max-width: 1180px;
      margin: 0 auto;
      padding: 24px 16px 60px;
    }

    .queue-hero {
      position: relative;
      overflow: hidden;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;

      padding: 24px;

      border-radius: 22px;

      background:
        linear-gradient(
          135deg,
          #1e293b 0%,
          #0f172a 45%,
          #111827 100%
        );

      color: white;

      box-shadow:
        0 12px 32px rgba(15, 23, 42, 0.16);

      margin-bottom: 24px;
    }

    .queue-hero::before {
      content: '';
      position: absolute;
      inset: 0;

      background:
        radial-gradient(circle at top right, rgba(99, 102, 241, 0.25), transparent 26%);

      pointer-events: none;
    }

    .queue-hero__content {
      position: relative;
      z-index: 1;
      max-width: 720px;
    }

    .queue-hero__eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 6px;

      padding: 6px 12px;

      border-radius: 999px;

      background: rgba(255, 255, 255, 0.12);

      font-size: 12px;
      font-weight: 600;

      margin-bottom: 14px;
    }

    .queue-hero__eyebrow mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }

    .queue-hero h1 {
      margin: 0;

      font-size: clamp(26px, 4vw, 36px);
      line-height: 1.1;
      font-weight: 800;
      letter-spacing: -0.03em;
    }

    .queue-hero p {
      margin: 12px 0 0;
      max-width: 620px;
      color: rgba(255, 255, 255, 0.78);
      font-size: 14px;
      line-height: 1.6;
    }

    .queue-hero__actions {
      position: relative;
      z-index: 1;
    }

    .queue-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 22px;
    }

    .queue-stat {
      min-width: 120px;
      padding: 14px 16px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .queue-stat__value {
      display: block;
      font-size: 20px;
      font-weight: 800;
    }

    .queue-stat__label {
      display: block;
      margin-top: 4px;
      font-size: 11px;
      color: rgba(255, 255, 255, 0.7);
    }

    .rules-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }

    .rule-card {
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding: 18px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid rgba(226, 232, 240, 0.9);
      text-decoration: none;
      color: inherit;
      backdrop-filter: blur(10px);
      box-shadow:
        0 6px 18px rgba(15, 23, 42, 0.05);
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;
    }

    .rule-card:hover {
      transform: translateY(-4px);
      border-color: rgba(99, 102, 241, 0.35);
      box-shadow:
        0 12px 24px rgba(15, 23, 42, 0.1);
    }

    .rule-card::after {
      content: '';
      position: absolute;
      inset: auto -50px -50px auto;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background:
        radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
    }

    .rule-card__top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 14px;
    }

    .rule-title-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
      min-width: 0;
    }

    .rule-icon {
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      border-radius: 14px;
      background:
        linear-gradient(
          135deg,
          rgba(99, 102, 241, 0.14),
          rgba(59, 130, 246, 0.14)
        );
      color: #4f46e5;
    }

    .rule-icon mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .rule-card__content {
      min-width: 0;
    }

    .rule-card__content h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.35;
      color: #0f172a;
      word-break: break-word;
    }

    .rule-meta-inline {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #e2e8f0;
    }

    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      font-weight: 600;
      color: #475569;
    }

    .meta-chip mat-icon {
      font-size: 14px;
      width: 14px;
      height: 14px;
      color: #6366f1;
    }

    .meta-divider {
      color: #cbd5e1;
      font-size: 12px;
    }

    .rule-card__footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
    }

    .review-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 700;
      color: #4f46e5;
    }

    .review-link mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;

      transition: transform 0.2s ease;
    }

    .rule-card:hover .review-link mat-icon {
      transform: translateX(4px);
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 56px 20px;
      border-radius: 22px;
      background: white;
      border: 1px solid #e2e8f0;
      box-shadow:
        0 10px 30px rgba(15, 23, 42, 0.05);
    }

    .empty-state__icon {
      width: 72px;
      height: 72px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background:
        linear-gradient(
          135deg,
          rgba(16, 185, 129, 0.14),
          rgba(59, 130, 246, 0.14)
        );

      color: #10b981;
      margin-bottom: 18px;
    }

    .empty-state__icon mat-icon {
      font-size: 34px;
      width: 34px;
      height: 34px;
    }

    .empty-state h2 {
      margin: 0;
      font-size: 24px;
      font-weight: 800;
      color: #0f172a;
    }

    .empty-state p {
      margin: 10px 0 24px;
      max-width: 460px;
      color: #64748b;
      line-height: 1.6;
      font-size: 14px;
    }

    @media (max-width: 900px) {

      .queue-hero {
        flex-direction: column;
      }

      .queue-hero__actions {
        width: 100%;
      }

      .queue-hero__actions a {
        width: 100%;
      }

    }

    @media (max-width: 640px) {

      .queue-page {
        padding: 18px 12px 50px;
      }

      .queue-hero {
        padding: 20px;
      }

      .rule-card {
        padding: 16px;
      }

      .queue-stat {
        flex: 1;
      }

      .rule-card__top {
        align-items: flex-start;
      }

    }
  `,
})
export class CheckerRulesQueueComponent implements OnInit {

  private readonly api = inject(ConsentRulesService);
  readonly rows = signal<ConsentRule[]>([]);

  ngOnInit(): void {
    this.api.listPending().subscribe((res) => {
      if (res.success && res.data) {
        this.rows.set(res.data);
      }
    });
  }
}

