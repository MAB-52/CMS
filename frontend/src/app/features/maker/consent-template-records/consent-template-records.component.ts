import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerConsentRecordService } from '../../../core/services/customer-consent-record.service';
import {
  CustomerConsentRecordRow,
  CustomerConsentRecordStats,
} from '../../../core/models/customer-consent-record.model';
import { LoggerService } from '../../../core/services/logger.service';

@Component({
  selector: 'app-consent-template-records',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './consent-template-records.component.html',
  styleUrl: './consent-template-records.component.css',
})
export class ConsentTemplateRecordsComponent implements OnChanges, AfterViewInit {
  private readonly api = inject(CustomerConsentRecordService);
  private readonly logger = inject(LoggerService);

  @ViewChild(MatSort) sort!: MatSort;

  @Input({ required: true }) consentDbId!: number;

  readonly loading = signal(false);
  readonly stats = signal<CustomerConsentRecordStats | null>(null);
  readonly filterText = signal('');

  readonly displayedColumns: string[] = [
    'customerId',
    'customerFullName',
    'status',
    'respondedAt',
    'consentValidUntil',
    'lastInviteSentAt',
    'source',
  ];

  readonly dataSource = new MatTableDataSource<CustomerConsentRecordRow>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['consentDbId'] && this.consentDbId != null) {
      this.load();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(raw: string): void {
    this.filterText.set(raw);
    this.dataSource.filter = raw.trim().toLowerCase();
  }

  statusClass(status: string): string {
    switch (status) {
      case 'ACCEPTED':
        return 'pill pill--accepted';
      case 'REJECTED':
        return 'pill pill--rejected';
      case 'WITHDRAWN':
        return 'pill pill--withdrawn';
      case 'PENDING':
        return 'pill pill--pending';
      case 'EXPIRING_SOON':
        return 'pill pill--expiring';
      case 'EXPIRED':
        return 'pill pill--expired';
      default:
        return 'pill';
    }
  }

  sourceLabel(row: CustomerConsentRecordRow): string {
    if (row.sourceRuleId != null) {
      return `Rule ${row.sourceRuleId}`;
    }
    if (row.sourceBroadcastId != null) {
      return `Broadcast ${row.sourceBroadcastId}`;
    }
    return '—';
  }

  private load(): void {
    this.loading.set(true);
    this.api.getRecordsByTemplate(this.consentDbId).subscribe({
      next: (res) => {
        this.loading.set(false);
        const rows = res.success && res.data ? res.data : [];
        this.dataSource.data = rows;
        this.dataSource.filterPredicate = (data, filter) => {
          const f = filter.trim().toLowerCase();
          if (!f) return true;
          const blob = [
            data.customerId,
            data.customerFullName ?? '',
            data.status,
            this.sourceLabel(data),
          ]
            .join(' ')
            .toLowerCase();
          return blob.includes(f);
        };
        this.dataSource.filter = this.filterText().trim().toLowerCase();
      },
      error: (err) => {
        this.loading.set(false);
        this.logger.error('ConsentTemplateRecords', 'load rows', err);
      },
    });
    this.api.getTemplateStats(this.consentDbId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.stats.set(res.data);
        }
      },
      error: (err) => this.logger.error('ConsentTemplateRecords', 'load stats', err),
    });
  }
}
