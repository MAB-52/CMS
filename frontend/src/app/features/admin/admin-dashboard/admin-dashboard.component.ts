import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { AdminCustomerRow, AdminMisDashboard, customerConsentStatusLabel } from '../../../core/models/admin.model';
import { AdminService } from '../../../core/services/admin.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';
import { channelVisual } from '../../../core/utils/channel.util';

type ConsentFilter =
  | 'ALL'
  | 'ACTIVE'
  | 'ACCEPTED'
  | 'PENDING'
  | 'INVITED'
  | 'EXPIRING_SOON'
  | 'EXPIRED'
  | 'DECLINED'
  | 'WITHDRAWN';

type TagSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

const STATUS_META: Record<string, { severity: TagSeverity; icon: string }> = {
  ACTIVE: { severity: 'success', icon: 'pi pi-check-circle' },
  ACCEPTED: { severity: 'success', icon: 'pi pi-check-circle' },
  PENDING: { severity: 'warn', icon: 'pi pi-clock' },
  INVITED: { severity: 'info', icon: 'pi pi-send' },
  EXPIRING_SOON: { severity: 'warn', icon: 'pi pi-hourglass' },
  EXPIRED: { severity: 'contrast', icon: 'pi pi-ban' },
  DECLINED: { severity: 'danger', icon: 'pi pi-times-circle' },
  WITHDRAWN: { severity: 'secondary', icon: 'pi pi-undo' },
};

const AVATAR_COLORS = ['#45329E', '#0D6EFD', '#D63384', '#20C997', '#EA6B28', '#6F42C1', '#0DCAF0'];
const DAY_MS = 86_400_000;

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    AvatarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ProgressBarModule,
    SelectModule,
    SkeletonModule,
    TableModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['../shared/report-kit.css', './admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly relTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  readonly mis = signal<AdminMisDashboard | null>(null);
  readonly misLoading = signal(true);
  readonly misLoadedAt = signal<Date | null>(null);
  readonly rows = signal<AdminCustomerRow[]>([]);
  readonly totalElements = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = signal(10);
  readonly loading = signal(false);
  readonly exporting = signal(false);
  readonly skeletonRows = Array.from({ length: 6 }, (_, i) => i);

  filterMobile = '';
  filterCustomerId = '';
  filterConsentStatus: ConsentFilter = 'ALL';

  readonly statusOptions: { value: ConsentFilter; label: string; icon: string; severity: TagSeverity }[] = [
    { value: 'ALL', label: 'All statuses', icon: 'pi pi-th-large', severity: 'secondary' },
    { value: 'ACTIVE', label: 'Active (legacy)', ...STATUS_META['ACTIVE'] },
    { value: 'ACCEPTED', label: 'Active (accepted)', ...STATUS_META['ACCEPTED'] },
    { value: 'PENDING', label: 'Pending', ...STATUS_META['PENDING'] },
    { value: 'INVITED', label: 'Invited', ...STATUS_META['INVITED'] },
    { value: 'EXPIRING_SOON', label: 'Expiring soon', ...STATUS_META['EXPIRING_SOON'] },
    { value: 'EXPIRED', label: 'Expired', ...STATUS_META['EXPIRED'] },
    { value: 'DECLINED', label: 'Declined', ...STATUS_META['DECLINED'] },
    { value: 'WITHDRAWN', label: 'Withdrawn', ...STATUS_META['WITHDRAWN'] },
  ];

  ngOnInit(): void {
    this.loadMis();
  }

  loadMis(): void {
    this.misLoading.set(true);
    this.adminApi.getMisDashboard().subscribe({
      next: (res) => {
        this.misLoading.set(false);
        if (res.success && res.data) {
          this.mis.set(res.data);
          this.misLoadedAt.set(new Date());
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

  refresh(): void {
    this.loadMis();
    this.loadPage(this.currentPage());
  }

  applyFilters(): void {
    this.loadPage(0);
  }

  resetFilters(): void {
    this.filterMobile = '';
    this.filterCustomerId = '';
    this.filterConsentStatus = 'ALL';
    this.loadPage(0);
  }

  activeFilterCount(): number {
    return [!!this.filterMobile.trim(), !!this.filterCustomerId.trim(), this.filterConsentStatus !== 'ALL'].filter(Boolean)
      .length;
  }

  loadPage(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getCustomers({
        page,
        size: this.pageSize(),
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
          this.currentPage.set(res.data.currentPage);
        },
        error: (err) => {
          this.loading.set(false);
          this.logger.error('AdminDashboard', 'customers failed', err);
          this.notify.error('Customers', err?.error?.message || 'Could not load customers.');
        },
      });
  }

  /** p-table fires this on init and on every paginator change. */
  onLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.pageSize();
    this.pageSize.set(rows);
    this.loadPage(Math.floor((event.first ?? 0) / rows));
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

  // ── Presentation helpers ────────────────────────────────────────────────

  consentStatusDisplay(status: string | null | undefined): string {
    return status ? customerConsentStatusLabel(status) : 'No consent';
  }

  statusMeta(status: string | null | undefined): { severity: TagSeverity; icon: string } {
    return STATUS_META[status ?? ''] ?? { severity: 'secondary', icon: 'pi pi-minus-circle' };
  }

  channelVisual(channel: string): { icon: string; color: string } {
    return channelVisual(channel);
  }

  clampPct(pct: number | null | undefined): number {
    return Math.max(0, Math.min(100, pct ?? 0));
  }

  /** Good-is-high colour for percentages. */
  rateColor(pct: number | null | undefined): string {
    const p = pct ?? 0;
    if (p >= 70) return 'var(--is-success)';
    if (p >= 40) return 'var(--is-warning)';
    return 'var(--is-danger)';
  }

  initials(name: string | null | undefined): string {
    const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  }

  avatarColor(seed: string): string {
    let h = 0;
    for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
    return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
  }

  relative(value: string | null | undefined): string {
    if (!value) return '';
    const t = new Date(value).getTime();
    if (Number.isNaN(t)) return '';
    const diffMin = Math.round((t - Date.now()) / 60_000);
    if (Math.abs(diffMin) < 1) return 'just now';
    if (Math.abs(diffMin) < 60) return this.relTime.format(diffMin, 'minute');
    const diffH = Math.round(diffMin / 60);
    if (Math.abs(diffH) < 24) return this.relTime.format(diffH, 'hour');
    const days = Math.round((t - Date.now()) / DAY_MS);
    if (Math.abs(days) < 30) return this.relTime.format(days, 'day');
    return this.relTime.format(Math.round(days / 30), 'month');
  }
}
