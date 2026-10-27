import { AbstractControl, ValidationErrors } from '@angular/forms';

/** Requires a domain with a TLD (rejects e.g. "abc@abc", which Validators.email allows). */
export const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

/** Treats whitespace-only input as empty so it shows the "required" message. */
export function notBlank(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string | null;
  return value && !value.trim() ? { required: true } : null;
}
