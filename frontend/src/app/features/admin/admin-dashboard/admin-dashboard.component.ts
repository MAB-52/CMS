import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminCustomerRow, AdminMisDashboard } from '../../../core/models/admin.model';
import { AdminService } from '../../../core/services/admin.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [DatePipe, DecimalPipe, FormsModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);

  readonly mis = signal<AdminMisDashboard | null>(null);
  readonly misLoading = signal(true);
  readonly rows = signal<AdminCustomerRow[]>([]);
  readonly totalElements = signal(0);
  readonly totalPages = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = 10;
  readonly loading = signal(false);
  readonly exporting = signal(false);

  filterMobile = '';
  filterCustomerId = '';
  filterConsentStatus: 'ALL' | 'ACTIVE' | 'PENDING' | 'DECLINED' = 'ALL';

  ngOnInit(): void {
    this.loadMis();
    this.loadPage(0);
  }

  loadMis(): void {
    this.misLoading.set(true);
    this.adminApi.getMisDashboard().subscribe({
      next: (res) => {
        this.misLoading.set(false);
        if (res.success && res.data) {
          this.mis.set(res.data);
        } else {
          this.notify.warning('MIS dashboard', res.message || 'Could not load MIS metrics.');
        }
      },
      error: (err) => {
        this.misLoading.set(false);
        this.logger.error('AdminDashboard', 'mis failed', err);
        this.notify.error('MIS dashboard', err?.error?.message || 'Could not load MIS metrics.');
      },
    });
  }

  applyFilters(): void {
    this.loadPage(0);
  }

  loadPage(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getCustomers({
        page,
        size: this.pageSize,
        mobileNumber: this.filterMobile,
        customerId: this.filterCustomerId,
        consentStatus: this.filterConsentStatus,
        sortBy: 'updatedAt',
        sortDir: 'DESC',
      })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (!res.success || !res.data) {
            this.notify.warning('Customers', res.message || 'No data returned.');
            return;
          }
          this.rows.set(res.data.content);
          this.totalElements.set(res.data.totalElements);
          this.totalPages.set(res.data.totalPages);
          this.currentPage.set(res.data.currentPage);
        },
        error: (err) => {
          this.loading.set(false);
          this.logger.error('AdminDashboard', 'customers failed', err);
          this.notify.error('Customers', err?.error?.message || 'Could not load customers.');
        },
      });
  }

  prevPage(): void {
    const p = this.currentPage();
    if (p > 0) {
      this.loadPage(p - 1);
    }
  }

  nextPage(): void {
    const p = this.currentPage();
    if (p < this.totalPages() - 1) {
      this.loadPage(p + 1);
    }
  }

  exportCsv(): void {
    this.exporting.set(true);
    this.adminApi
      .exportCustomersCsv({
        mobileNumber: this.filterMobile,
        customerId: this.filterCustomerId,
        consentStatus: this.filterConsentStatus,
      })
      .subscribe({
        next: (blob) => {
          this.exporting.set(false);
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'customers-export.csv';
          a.click();
          URL.revokeObjectURL(url);
          this.notify.success('Export', 'Download started.');
        },
        error: (err) => {
          this.exporting.set(false);
          this.logger.error('AdminDashboard', 'export failed', err);
          this.notify.error('Export', err?.error?.message || 'Export failed.');
        },
      });
  }

  badgeClass(status: string): string {
    switch (status) {
      case 'ACTIVE':
        return 'badge badge--active';
      case 'PENDING':
        return 'badge badge--pending';
      case 'DECLINED':
        return 'badge badge--declined';
      default:
        return 'badge';
    }
  }

  barWidth(pct: number): string {
    const v = Math.max(0, Math.min(100, pct));
    return `${v}%`;
  }
}
