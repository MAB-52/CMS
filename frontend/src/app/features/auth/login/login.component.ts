import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from '../../../core/services/auth.service';
import { LoggerService } from '../../../core/services/logger.service';
import { NotificationService } from '../../../core/services/notification.service';
import { EMAIL_PATTERN, notBlank } from '../../../core/validators/form-validators';

const REMEMBER_KEY = 'ciq_remember_email';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    CheckboxModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    MessageModule,
    TooltipModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);

  readonly year = new Date().getFullYear();
  readonly loading = signal(false);
  readonly errorBanner = signal<string | null>(null);
  readonly success = signal(false);
  readonly hidePw = signal(true);

  readonly features = [
    { icon: 'pi pi-shield', title: 'Secure consent capture', text: 'Encrypted at rest and in transit' },
    { icon: 'pi pi-users', title: 'Maker–checker approvals', text: 'No change goes live unreviewed' },
    { icon: 'pi pi-file', title: 'Complete audit trail', text: 'Every action recorded and searchable' },
  ];

  remember = false;

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, notBlank, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, notBlank, Validators.minLength(4)]],
  });

  constructor() {
    if (this.auth.isLoggedIn() && this.auth.hasPortalRole()) {
      void this.router.navigateByUrl(this.auth.getRedirectPath(), { replaceUrl: true });
      return;
    }
    const saved = this.readRemembered();
    if (saved) {
      this.form.controls.email.setValue(saved);
      this.remember = true;
    }
    if (this.route.snapshot.queryParamMap.get('reason') === 'session_expired') {
      this.notify.warnOnce('session-expired', 'Session expired. Please sign in again.');
    }
  }

  showError(name: 'email' | 'password'): boolean {
    const c = this.form.controls[name];
    return c.invalid && c.touched;
  }

  togglePw(): void {
    this.hidePw.update((v) => !v);
  }

  submit(): void {
    this.errorBanner.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    const { email, password } = this.form.getRawValue();
    const trimmed = email.trim();
    this.auth.login(trimmed, password).subscribe({
      next: (res) => {
        if (!res.success || !res.data?.token) {
          this.loading.set(false);
          this.errorBanner.set(res.message || 'Sign-in failed.');
          return;
        }
        if (!this.auth.hasPortalRole()) {
          this.auth.clearSession();
          this.loading.set(false);
          this.errorBanner.set('Your account has no portal assigned. Contact your administrator.');
          return;
        }
        this.storeRemembered(trimmed);
        this.success.set(true);
        this.logger.info('LoginComponent', 'Navigating after login');
        setTimeout(() => {
          this.loading.set(false);
          void this.router.navigateByUrl(this.auth.getRedirectPath());
        }, 450);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorBanner.set(err?.error?.message || err?.message || 'Unable to sign in.');
      },
    });
  }

  private readRemembered(): string | null {
    try {
      return localStorage.getItem(REMEMBER_KEY);
    } catch {
      return null;
    }
  }

  private storeRemembered(email: string): void {
    try {
      if (this.remember) localStorage.setItem(REMEMBER_KEY, email);
      else localStorage.removeItem(REMEMBER_KEY);
    } catch {
      return;
    }
  }
}
