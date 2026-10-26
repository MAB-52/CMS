/**
 * Spring 6-field cron: second minute hour day-of-month month day-of-week
 * Used by ConsentIQ backend (Spring CronExpression.parse).
 */

export type RecurringFrequency = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';

export interface ParsedKnownCron {
  known: true;
  frequency: RecurringFrequency;
  hour: number;
  minute: number;
  /** 1–28; monthly / quarterly / yearly */
  dayOfMonth?: number;
  /** 1–12; yearly only */
  month?: number;
  /** Spring DOW: 0 Sunday … 6 Saturday */
  weekDays?: number[];
}

export interface ParsedUnknownCron {
  known: false;
  raw: string;
}

export type ParsedRecurringCron = ParsedKnownCron | ParsedUnknownCron;

export type BuildRecurringCronInput =
  | { frequency: 'DAILY'; hour: number; minute: number }
  | { frequency: 'WEEKLY'; hour: number; minute: number; weekDays: number[] }
  | { frequency: 'MONTHLY'; hour: number; minute: number; dayOfMonth: number }
  | { frequency: 'QUARTERLY'; hour: number; minute: number; dayOfMonth: number }
  | { frequency: 'YEARLY'; hour: number; minute: number; dayOfMonth: number; month: number };

const QUARTERLY_MONTHS = '1,4,7,10';

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

export function normalizeCronWhitespace(cron: string): string {
  return cron.trim().replace(/\s+/g, ' ');
}

/** Spring DOW order for UI: Monday = 1 … Sunday = 0 */
export const WEEKDAY_OPTIONS: { label: string; dow: number }[] = [
  { label: 'Monday', dow: 1 },
  { label: 'Tuesday', dow: 2 },
  { label: 'Wednesday', dow: 3 },
  { label: 'Thursday', dow: 4 },
  { label: 'Friday', dow: 5 },
  { label: 'Saturday', dow: 6 },
  { label: 'Sunday', dow: 0 },
];

export function buildSpringRecurringCron(input: BuildRecurringCronInput): string | null {
  const minute = clamp(Math.floor(input.minute), 0, 59);
  const hour = clamp(Math.floor(input.hour), 0, 23);

  switch (input.frequency) {
    case 'DAILY':
      return `0 ${minute} ${hour} * * *`;
    case 'WEEKLY': {
      const days = [...new Set(input.weekDays.map((d) => clamp(Math.floor(d), 0, 6)))].sort((a, b) => a - b);
      if (days.length === 0) {
        return null;
      }
      return `0 ${minute} ${hour} * * ${days.join(',')}`;
    }
    case 'MONTHLY': {
      const dom = clamp(Math.floor(input.dayOfMonth), 1, 28);
      return `0 ${minute} ${hour} ${dom} * *`;
    }
    case 'QUARTERLY': {
      const dom = clamp(Math.floor(input.dayOfMonth), 1, 28);
      return `0 ${minute} ${hour} ${dom} ${QUARTERLY_MONTHS} *`;
    }
    case 'YEARLY': {
      const dom = clamp(Math.floor(input.dayOfMonth), 1, 28);
      const month = clamp(Math.floor(input.month), 1, 12);
      return `0 ${minute} ${hour} ${dom} ${month} *`;
    }
    default:
      return null;
  }
}

function parseIntStrict(s: string): number | null {
  const n = Number.parseInt(s, 10);
  return Number.isFinite(n) ? n : null;
}

export function parseKnownRecurringCron(cronRaw: string): ParsedRecurringCron {
  const cron = normalizeCronWhitespace(cronRaw);
  if (!cron) {
    return { known: false, raw: cronRaw };
  }

  const daily = /^0 (\d{1,2}) (\d{1,2}) \* \* \*$/.exec(cron);
  if (daily) {
    const minute = parseIntStrict(daily[1]);
    const hour = parseIntStrict(daily[2]);
    if (minute !== null && hour !== null && minute >= 0 && minute <= 59 && hour >= 0 && hour <= 23) {
      return { known: true, frequency: 'DAILY', minute, hour };
    }
  }

  const weekly = /^0 (\d{1,2}) (\d{1,2}) \* \* ([\d,\s]+)$/.exec(cron);
  if (weekly) {
    const minute = parseIntStrict(weekly[1]);
    const hour = parseIntStrict(weekly[2]);
    const parts = weekly[3]
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
    const days = parts.map((p) => parseIntStrict(p)).filter((n): n is number => n !== null && n >= 0 && n <= 6);
    if (
      minute !== null &&
      hour !== null &&
      minute >= 0 &&
      minute <= 59 &&
      hour >= 0 &&
      hour <= 23 &&
      days.length === parts.length &&
      days.length > 0
    ) {
      return { known: true, frequency: 'WEEKLY', minute, hour, weekDays: [...new Set(days)].sort((a, b) => a - b) };
    }
  }

  const monthly = /^0 (\d{1,2}) (\d{1,2}) (\d{1,2}) \* \*$/.exec(cron);
  if (monthly) {
    const minute = parseIntStrict(monthly[1]);
    const hour = parseIntStrict(monthly[2]);
    const dom = parseIntStrict(monthly[3]);
    if (
      minute !== null &&
      hour !== null &&
      dom !== null &&
      minute >= 0 &&
      minute <= 59 &&
      hour >= 0 &&
      hour <= 23 &&
      dom >= 1 &&
      dom <= 28
    ) {
      return { known: true, frequency: 'MONTHLY', minute, hour, dayOfMonth: dom };
    }
  }

  const quarterly = /^0 (\d{1,2}) (\d{1,2}) (\d{1,2}) 1\s*,\s*4\s*,\s*7\s*,\s*10 \*$/.exec(cron);
  if (quarterly) {
    const minute = parseIntStrict(quarterly[1]);
    const hour = parseIntStrict(quarterly[2]);
    const dom = parseIntStrict(quarterly[3]);
    if (
      minute !== null &&
      hour !== null &&
      dom !== null &&
      minute >= 0 &&
      minute <= 59 &&
      hour >= 0 &&
      hour <= 23 &&
      dom >= 1 &&
      dom <= 28
    ) {
      return { known: true, frequency: 'QUARTERLY', minute, hour, dayOfMonth: dom };
    }
  }

  const yearly = /^0 (\d{1,2}) (\d{1,2}) (\d{1,2}) (\d{1,2}) \*$/.exec(cron);
  if (yearly) {
    const minute = parseIntStrict(yearly[1]);
    const hour = parseIntStrict(yearly[2]);
    const dom = parseIntStrict(yearly[3]);
    const month = parseIntStrict(yearly[4]);
    if (
      minute !== null &&
      hour !== null &&
      dom !== null &&
      month !== null &&
      minute >= 0 &&
      minute <= 59 &&
      hour >= 0 &&
      hour <= 23 &&
      dom >= 1 &&
      dom <= 28 &&
      month >= 1 &&
      month <= 12
    ) {
      return { known: true, frequency: 'YEARLY', minute, hour, dayOfMonth: dom, month };
    }
  }

  return { known: false, raw: cronRaw };
}

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function dowLabel(d: number): string {
  const row = WEEKDAY_OPTIONS.find((w) => w.dow === d);
  return row?.label ?? String(d);
}

export function describeParsedCron(p: ParsedKnownCron): string {
  const hm = `${String(p.hour).padStart(2, '0')}:${String(p.minute).padStart(2, '0')}`;
  switch (p.frequency) {
    case 'DAILY':
      return `Every day at ${hm}`;
    case 'WEEKLY': {
      const labels = (p.weekDays ?? []).slice().sort((a, b) => a - b).map(dowLabel);
      return `Every week on ${labels.join(', ')} at ${hm}`;
    }
    case 'MONTHLY':
      return `Every month on day ${p.dayOfMonth} at ${hm}`;
    case 'QUARTERLY':
      return `Every quarter on day ${p.dayOfMonth} at ${hm} (January, April, July, October)`;
    case 'YEARLY': {
      const m = p.month != null ? MONTH_NAMES[p.month - 1] : '';
      return `Every year on ${m} ${p.dayOfMonth} at ${hm}`;
    }
    default:
      return 'Recurring schedule';
  }
}

export function isEditorConfigValidForCron(input: BuildRecurringCronInput): boolean {
  return buildSpringRecurringCron(input) !== null;
}
