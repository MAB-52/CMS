import { Pipe, PipeTransform } from '@angular/core';
import { ConsentType } from '../../core/models/consent.model';

@Pipe({
  name: 'consentTypeLabel',
  standalone: true,
})
export class ConsentTypeLabelPipe implements PipeTransform {
  transform(value: ConsentType | string | null | undefined): string {
    switch (value) {
      case 'NEW_TEMPLATE':
        return 'New Template';
      case 'VERSION_UPDATE':
        return 'Version Update';
      case 'RENEWAL':
        return 'Renewal';
      default:
        return String(value ?? '');
    }
  }
}
