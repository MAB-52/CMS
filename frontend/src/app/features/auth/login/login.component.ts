import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../core/services/auth.service';
import { LoggerService } from '../../../core/services/logger.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    MessageModule,
    PasswordModule,
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

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor() {
    if (this.route.snapshot.queryParamMap.get('reason') === 'session_expired') {
      this.notify.warning('Session expired', 'Please sign in again.');
    }
  }

  showError(name: 'email' | 'password'): boolean {
    const c = this.form.controls[name];
    return c.invalid && c.touched;
  }

  submit(): void {
    this.errorBanner.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    const { email, password } = this.form.getRawValue();
    this.auth.login(email, password).subscribe({
      next: (res) => {
        if (!res.success || !res.data?.token) {
          this.loading.set(false);
          this.errorBanner.set(res.message || 'Sign-in failed.');
          return;
        }
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
}
