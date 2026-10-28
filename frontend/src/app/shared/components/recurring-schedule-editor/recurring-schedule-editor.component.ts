import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BuildRecurringCronInput, buildSpringRecurringCron, describeParsedCron, MONTH_NAMES, ParsedKnownCron, parseKnownRecurringCron, RecurringFrequency, WEEKDAY_OPTIONS } from '../../utils/recurring-cron.util';

@Component({
  selector: 'app-recurring-schedule-editor',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckboxModule],
  templateUrl: './recurring-schedule-editor.component.html',
  styleUrl: './recurring-schedule-editor.component.css',
})
export class RecurringScheduleEditorComponent implements OnChanges {
  @Input() recurringCron = '';
  @Input() disabled = false;
  @Output() recurringCronChange = new EventEmitter<string>();
  @Output() scheduleValidChange = new EventEmitter<boolean>();

  readonly weekdayOptions = WEEKDAY_OPTIONS;
  readonly hours = Array.from({ length: 24 }, (_, i) => i);
  readonly minutes = Array.from({ length: 60 }, (_, i) => i);
  readonly months = MONTH_NAMES.map((label, i) => ({ value: i + 1, label }));

  frequency: RecurringFrequency = 'DAILY';
  hour = 9;
  minute = 0;
  dayOfMonth = 1;
  month = 1;
  /** Spring DOW 0–6 */
  weekDays: Record<number, boolean> = {
    0: false,
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  };

  externalMode = false;
  externalCronRaw = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recurringCron']) {
      this.ingestCron(this.recurringCron ?? '');
    }
  }

  previewText(): string | null {
    if (this.externalMode) {
      return null;
    }
    const built = this.tryBuildCron();
    if (!built) {
      return null;
    }
    const p = parseKnownRecurringCron(built);
    return p.known ? describeParsedCron(p as ParsedKnownCron) : null;
  }

  onFrequencyChange(): void {
    if (this.frequency === 'WEEKLY' && !this.selectedWeekDays().length) {
      this.weekDays = { 0: false, 1: true, 2: false, 3: false, 4: false, 5: false, 6: false };
    }
    this.pushCronFromFields();
  }

  onFieldChanged(): void {
    this.pushCronFromFields();
  }

  toggleDay(dow: number, checked: boolean): void {
    this.weekDays = { ...this.weekDays, [dow]: checked };
    this.pushCronFromFields();
  }

  dayChecked(dow: number): boolean {
    return !!this.weekDays[dow];
  }

  onExternalCronChange(): void {
    const t = this.externalCronRaw.trim();
    this.recurringCronChange.emit(t);
    this.scheduleValidChange.emit(this.looksLikeCron(t));
  }

  private looksLikeCron(value: string): boolean {
    if (/^@(yearly|annually|monthly|weekly|daily|midnight|hourly)$/i.test(value)) {
      return true;
    }
    const fields = value.split(/\s+/);
    return fields.length === 6 && fields.every((f) => /^[0-9A-Za-z*?,\-/#LW]+$/.test(f));
  }

  private ingestCron(raw: string): void {
    const trimmed = raw.trim();
    if (!trimmed) {
      this.externalMode = false;
      this.frequency = 'DAILY';
      this.hour = 9;
      this.minute = 0;
      this.dayOfMonth = 1;
      this.month = 1;
      this.weekDays = { 0: false, 1: true, 2: false, 3: false, 4: false, 5: false, 6: false };
      this.pushCronFromFields();
      return;
    }

    const parsed = parseKnownRecurringCron(trimmed);
    if (!parsed.known) {
      this.externalMode = true;
      this.externalCronRaw = raw;
      this.scheduleValidChange.emit(this.looksLikeCron(trimmed));
      return;
    }

    this.externalMode = false;
    this.applyParsed(parsed);
    this.pushCronFromFields();
  }

  private applyParsed(p: ParsedKnownCron): void {
    this.frequency = p.frequency;
    this.hour = p.hour;
    this.minute = p.minute;
    if (p.dayOfMonth != null) {
      this.dayOfMonth = p.dayOfMonth;
    }
    if (p.month != null) {
      this.month = p.month;
    }
    if (p.frequency === 'WEEKLY' && p.weekDays?.length) {
      const wd: Record<number, boolean> = { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false };
      for (const d of p.weekDays) {
        wd[d] = true;
      }
      this.weekDays = wd;
    }
  }

  private selectedWeekDays(): number[] {
    return Object.entries(this.weekDays)
      .filter(([, on]) => on)
      .map(([d]) => Number(d));
  }

  private buildInput(): BuildRecurringCronInput {
    switch (this.frequency) {
      case 'DAILY':
        return { frequency: 'DAILY', hour: this.hour, minute: this.minute };
      case 'WEEKLY':
        return { frequency: 'WEEKLY', hour: this.hour, minute: this.minute, weekDays: this.selectedWeekDays() };
      case 'MONTHLY':
        return { frequency: 'MONTHLY', hour: this.hour, minute: this.minute, dayOfMonth: this.dayOfMonth };
      case 'QUARTERLY':
        return { frequency: 'QUARTERLY', hour: this.hour, minute: this.minute, dayOfMonth: this.dayOfMonth };
      case 'YEARLY':
        return {
          frequency: 'YEARLY',
          hour: this.hour,
          minute: this.minute,
          dayOfMonth: this.dayOfMonth,
          month: this.month,
        };
    }
  }

  private tryBuildCron(): string | null {
    return buildSpringRecurringCron(this.buildInput());
  }

  private pushCronFromFields(): void {
    if (this.externalMode) {
      return;
    }
    const built = this.tryBuildCron();
    this.recurringCronChange.emit(built ?? '');
    this.scheduleValidChange.emit(built !== null);
  }
}
