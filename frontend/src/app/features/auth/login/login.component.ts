import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);

  readonly hidePw = signal(true);
  readonly loading = signal(false);
  readonly errorBanner = signal<string | null>(null);
  readonly successPulse = signal(false);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor() {
    if (this.route.snapshot.queryParamMap.get('reason') === 'session_expired') {
      this.notify.warning('Session expired', 'Please sign in again.');
    }
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
    this.auth.login(email, password).subscribe({
      next: (res) => {
        if (!res.success || !res.data?.token) {
          this.loading.set(false);
          this.errorBanner.set(res.message || 'Sign-in failed.');
          return;
        }
        this.successPulse.set(true);
        this.logger.info('LoginComponent', 'Navigating after login');
        setTimeout(() => {
          this.loading.set(false);
          void this.router.navigateByUrl(this.auth.getRedirectPath());
        }, 450);
      },
      error: (err) => {
        this.loading.set(false);
        const msg = err?.error?.message || err?.message || 'Unable to sign in.';
        this.errorBanner.set(msg);
      },
    });
  }
}
