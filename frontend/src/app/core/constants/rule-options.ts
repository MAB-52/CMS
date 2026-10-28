import { ConsentRuleType, PredefinedRuleScenario } from '../models/workflow.model';

export interface RuleTypeOption {
  value: ConsentRuleType;
  label: string;
  icon: string;
  hint: string;
}

export interface ScenarioOption {
  value: PredefinedRuleScenario;
  label: string;
  icon: string;
  desc: string;
}

export const RULE_TYPE_OPTIONS: RuleTypeOption[] = [
  { value: 'PREDEFINED_SCENARIO', label: 'Predefined scenario', icon: 'pi pi-bolt', hint: 'Built-in lifecycle trigger' },
  { value: 'CUSTOM', label: 'Custom', icon: 'pi pi-sliders-h', hint: 'Your own trigger event' },
];

export const SCENARIO_OPTIONS: ScenarioOption[] = [
  { value: 'NEW_CUSTOMER_DETECTED', label: 'New customer detected', icon: 'pi pi-user-plus', desc: 'A newly onboarded customer needs consent' },
  { value: 'CONSENT_NEARING_EXPIRY', label: 'Consent nearing expiry', icon: 'pi pi-hourglass', desc: 'Consent is close to the end of its validity' },
  { value: 'EXPIRED_CONSENT', label: 'Expired consent', icon: 'pi pi-calendar-times', desc: 'Consent validity has already ended' },
  { value: 'FIRST_SEND_NO_RESPONSE', label: 'No response to first send', icon: 'pi pi-send', desc: 'Customer has not answered the first request' },
  { value: 'REMINDER_1_NO_RESPONSE', label: 'No response after reminder 1', icon: 'pi pi-bell', desc: 'Still no answer after the first reminder' },
  { value: 'REMINDER_2_NO_RESPONSE', label: 'No response after reminder 2', icon: 'pi pi-bell', desc: 'Still no answer after the second reminder' },
  { value: 'DECLINED_RE_ENGAGEMENT_AFTER_COOLDOWN', label: 'Re-engage after decline', icon: 'pi pi-replay', desc: 'Customer declined earlier and the cooldown has passed' },
  { value: 'VIP_PRIORITY_FAST_TRACK', label: 'VIP priority fast track', icon: 'pi pi-star', desc: 'Priority handling for VIP customers' },
];
