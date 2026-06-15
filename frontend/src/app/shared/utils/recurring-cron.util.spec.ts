import {
  buildSpringRecurringCron,
  describeParsedCron,
  parseKnownRecurringCron,
} from './recurring-cron.util';

describe('recurring-cron.util', () => {
  it('builds daily Spring 6-field cron', () => {
    const c = buildSpringRecurringCron({ frequency: 'DAILY', hour: 14, minute: 7 })!;
    expect(c).toBe('0 7 14 * * *');
    const p = parseKnownRecurringCron(c);
    expect(p.known).toBe(true);
    if (p.known) {
      expect(p.frequency).toBe('DAILY');
      expect(p.hour).toBe(14);
      expect(p.minute).toBe(7);
    }
  });

  it('builds weekly with Spring DOW Mon/Sun', () => {
    const c = buildSpringRecurringCron({
      frequency: 'WEEKLY',
      hour: 9,
      minute: 0,
      weekDays: [1, 0],
    })!;
    expect(c).toBe('0 0 9 * * 0,1');
    const p = parseKnownRecurringCron(c);
    expect(p.known).toBe(true);
    if (p.known) {
      expect(p.weekDays).toEqual([0, 1]);
    }
  });

  it('builds monthly', () => {
    const c = buildSpringRecurringCron({ frequency: 'MONTHLY', hour: 8, minute: 30, dayOfMonth: 15 })!;
    expect(c).toBe('0 30 8 15 * *');
    expect(parseKnownRecurringCron(c).known).toBe(true);
  });

  it('builds quarterly months list', () => {
    const c = buildSpringRecurringCron({ frequency: 'QUARTERLY', hour: 12, minute: 0, dayOfMonth: 10 })!;
    expect(c).toBe('0 0 12 10 1,4,7,10 *');
    expect(parseKnownRecurringCron(c).known).toBe(true);
  });

  it('builds yearly', () => {
    const c = buildSpringRecurringCron({
      frequency: 'YEARLY',
      hour: 6,
      minute: 15,
      dayOfMonth: 5,
      month: 3,
    })!;
    expect(c).toBe('0 15 6 5 3 *');
    expect(parseKnownRecurringCron(c).known).toBe(true);
  });

  it('describes known cron', () => {
    const c = buildSpringRecurringCron({ frequency: 'DAILY', hour: 1, minute: 2 })!;
    const p = parseKnownRecurringCron(c);
    expect(p.known).toBe(true);
    if (p.known) {
      expect(describeParsedCron(p)).toContain('Every day');
    }
  });

  it('returns unknown for arbitrary cron', () => {
    const p = parseKnownRecurringCron('0 0 12 ? * MON-FRI');
    expect(p.known).toBe(false);
  });
});
