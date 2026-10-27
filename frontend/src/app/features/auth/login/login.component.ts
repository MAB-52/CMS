import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageModule } from 'primeng/message';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';
import { CHANNEL_META, ChannelId } from '../../../core/utils/channel.util';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    MessageModule,
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

  /** Brand-panel highlights; tones come from the Interact Suite supporting palette. */
  readonly features = [
    { icon: 'pi pi-users', title: 'Maker–checker approvals', text: 'Every consent is reviewed before it goes live.', tone: 'var(--is-green)' },
    { icon: 'pi pi-history', title: 'Complete audit trail', text: 'Each action is recorded and traceable.', tone: 'var(--is-blue)' },
    { icon: 'pi pi-shield', title: 'Role-based access', text: 'People see only what their role allows.', tone: 'var(--is-secondary)' },
    { icon: 'pi pi-language', title: 'Multilingual consent', text: 'Translate and preview in every language.', tone: 'var(--is-teal)' },
  ];

  /**
   * Icons and labels come from the shared channel table (same as maker/checker screens);
   * tones are lighter variants of each channel colour so they read on the dark brand panel.
   */
  readonly channels = (
    [
      ['EMAIL', '#FF8A80'],
      ['SMS', '#7CC4FF'],
      ['WHATSAPP', '#5BE08F'],
      ['RCS', '#C9B6F2'],
    ] as [ChannelId, string][]
  ).map(([id, tone]) => ({ icon: CHANNEL_META[id].icon, label: CHANNEL_META[id].label, tone }));

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
