import { Component, signal } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { MisReportCustomerConsentTabComponent } from './mis-report-customer-consent-tab/mis-report-customer-consent-tab.component';
import { MisReportAuditTabComponent } from './mis-report-audit-tab/mis-report-audit-tab.component';
import { MisReportExpiryTabComponent } from './mis-report-expiry-tab/mis-report-expiry-tab.component';
import { MisReportOperationalTabComponent } from './mis-report-operational-tab/mis-report-operational-tab.component';
import { MisReportConsentInventoryTabComponent } from './mis-report-consent-inventory-tab/mis-report-consent-inventory-tab.component';
import { MisReportChannelDeepDiveTabComponent } from './mis-report-channel-deep-dive-tab/mis-report-channel-deep-dive-tab.component';
import { MisReportConsentLeaderboardTabComponent } from './mis-report-consent-leaderboard-tab/mis-report-consent-leaderboard-tab.component';

@Component({
  selector: 'app-admin-mis-reports',
  standalone: true,
  imports: [
    TabsModule,
    MisReportCustomerConsentTabComponent,
    MisReportAuditTabComponent,
    MisReportExpiryTabComponent,
    MisReportOperationalTabComponent,
    MisReportConsentInventoryTabComponent,
    MisReportChannelDeepDiveTabComponent,
    MisReportConsentLeaderboardTabComponent,
  ],
  templateUrl: './admin-mis-reports.component.html',
  styleUrl: './admin-mis-reports.component.css',
})
export class AdminMisReportsComponent {
  /** Tab accents come from the Interact Suite supporting palette. */
  readonly tabs = [
    { value: 'customer', label: 'Customer Consent', icon: 'pi pi-users', color: '#45329E' },
    { value: 'audit', label: 'Consent Audit', icon: 'pi pi-file-check', color: '#0D6EFD' },
    { value: 'expiry', label: 'Expiry', icon: 'pi pi-calendar-times', color: '#EA6B28' },
    { value: 'operational', label: 'Operational', icon: 'pi pi-chart-bar', color: '#198754' },
    { value: 'inventory', label: 'Consent inventory', icon: 'pi pi-box', color: '#6F42C1' },
    { value: 'channels', label: 'Channel deep-dive', icon: 'pi pi-send', color: '#D63384' },
    { value: 'leaderboard', label: 'Leaderboard', icon: 'pi pi-trophy', color: '#C98A00' },
  ] as const;

  readonly activeTab = signal<string>('customer');
}