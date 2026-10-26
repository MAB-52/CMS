import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
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
    MatTabsModule,
    MatIconModule,
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
export class AdminMisReportsComponent {}