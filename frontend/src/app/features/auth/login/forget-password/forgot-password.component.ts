import { Component, inject, signal, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

import { Subscription, interval } from 'rxjs';
import { PasswordResetService } from '../../../../core/services/password-reset.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { EMAIL_PATTERN, notBlank } from '../../../../core/validators/form-validators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/** Confirm-password validator: compares against the sibling newPassword control. */
function matchNewPassword(control: AbstractControl): ValidationErrors | null {
  const newPassword = control.parent?.get('newPassword')?.value;
  return control.value && control.value !== newPassword ? { mismatch: true } : null;
}

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly passwordResetService = inject(PasswordResetService);
  private readonly router = inject(Router);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);

  // UI States
  readonly currentStep = signal<1 | 2 | 3>(1);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);
  
  // Password visibility toggles
  readonly hideNewPassword = signal(true);
  readonly hideConfirmPassword = signal(true);
  
  // Resend OTP cooldown
  readonly resendCooldown = signal(false);
  readonly resendTimer = signal(0);

  // Set when the server cancels the OTP (too many wrong attempts / expired); cleared by Resend
  readonly otpLocked = signal(false);

  // Mirrors the backend limit so unregistered emails lock exactly like registered ones
  private static readonly MAX_OTP_ATTEMPTS = 5;
  private wrongOtpAttempts = 0;
  private resendSubscription?: Subscription;
  
  // Store email for OTP step
  public userEmail = '';

  // Forms
  readonly emailForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, notBlank, Validators.pattern(EMAIL_PATTERN)]]
  });

  readonly otpForm = this.fb.nonNullable.group({
    otp: ['', [
      Validators.required, 
      Validators.minLength(6), 
      Validators.maxLength(6),
      Validators.pattern(/^\d{6}$/)  // Only digits
    ]]
  });

  readonly passwordForm = this.fb.nonNullable.group({
    newPassword: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=\S+$).{6,}$/)
    ]],
    // On the control itself (not the group) so mat-error can show the mismatch inline
    confirmPassword: ['', [Validators.required, matchNewPassword]]
  });

  constructor() {
    // Editing the first field must re-check the confirmation
    this.passwordForm.controls.newPassword.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.passwordForm.controls.confirmPassword.updateValueAndValidity({ emitEvent: false }));
  }

  ngOnDestroy(): void {
    if (this.resendSubscription) {
      this.resendSubscription.unsubscribe();
    }
  }

  get passwordsMismatch(): boolean {
    return this.passwordForm.controls.confirmPassword.hasError('mismatch');
  }

  /** First password rule the value breaks, or null when it satisfies all of them. */
  passwordRuleError(value: string): string | null {
    if (value.length < 6) return 'at least 6 characters';
    if (!/[A-Z]/.test(value)) return 'one uppercase letter';
    if (!/[a-z]/.test(value)) return 'one lowercase letter';
    if (!/[0-9]/.test(value)) return 'one number';
    if (!/[^A-Za-z0-9]/.test(value)) return 'one special character (e.g. ! @ # $ %)';
    if (/\s/.test(value)) return 'no spaces';
    return null;
  }

  // Get user-friendly error message
 // Get user-friendly error message
private getErrorMessage(error: any): string {
  // Log the full error for debugging
  console.error('Full error object:', error);
  
  // Check for different error response structures
  let message = '';
  
  // Try to get message from different possible locations
  if (typeof error === 'string') {
    message = error;
  } else if (error?.error?.message) {
    message = error.error.message;
  } else if (error?.message) {
    message = error.message;
  } else if (error?.error?.error) {
    message = error.error.error;
  } else if (error?.body?.message) {
    message = error.body.message;
  }
  
  // If no message found, return default
  if (!message) {
    return '❌ An unexpected error occurred. Please try again.';
  }
  
  // Return specific error messages from backend
  if (message.toLowerCase().includes('same as your current password')) {
    return '⚠️ You cannot use your current password. Please choose a different password.';
  }
  
  if (message.toLowerCase().includes('expired')) {
    return '⏰ OTP has expired. Please request a new OTP using "Resend OTP".';
  }
  
  if (message.toLowerCase().includes('already been used')) {
    return '❌ This OTP has already been used. Please request a new OTP.';
  }
  
  if (message.toLowerCase().includes('invalid otp')) {
    return '❌ Invalid OTP. Please check the 6-digit code and try again.';
  }
  
  if (message.toLowerCase().includes('passwords do not match')) {
    return '❌ Passwords do not match. Please ensure both passwords are identical.';
  }
  
  if (message.toLowerCase().includes('password must contain')) {
    return '🔒 Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and no spaces.';
  }
  
  if (message.toLowerCase().includes('user not found')) {
    return '📧 User not found. Please check your email address.';
  }
  
  if (message.toLowerCase().includes('inactive')) {
    return '⚠️ Your account is inactive. Please contact administrator.';
  }
  
  if (message.toLowerCase().includes('failed to send otp')) {
    return '📧 Failed to send OTP. Please check your email address and try again.';
  }
  
  // Return the actual error message if none of the above matched
  return `❌ ${message}`;
}
  // Step 1: Send OTP
  sendOtp(): void {
    this.errorMessage.set(null);
    this.successMessage.set(null);

    // Go Back + Send OTP must not bypass the resend cooldown for the same email
    if (this.resendCooldown() && this.emailForm.getRawValue().email.trim() === this.userEmail) {
      this.errorMessage.set(`⏳ Please wait ${this.resendTimer()}s before requesting another OTP.`);
      return;
    }

    if (this.emailForm.invalid) {
      if (this.emailForm.controls.email.hasError('required')) {
        this.errorMessage.set('📧 Email address is required.');
      } else if (this.emailForm.controls.email.hasError('pattern')) {
        this.errorMessage.set('📧 Please enter a valid email address (e.g., name@example.com).');
      }
      this.emailForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.userEmail = this.emailForm.getRawValue().email.trim();

    this.passwordResetService.forgotPassword(this.userEmail).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.success) {
          this.successMessage.set('✅ If this email is registered, an OTP has been sent. Please check your inbox (and spam folder).');
          this.currentStep.set(2);
          this.startResendCooldown();
          this.logger.info('ForgotPasswordComponent', 'OTP sent to email');
        } else {
          this.errorMessage.set(this.getErrorMessage(response));
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(this.getErrorMessage(err));
      }
    });
  }

  // Step 2: Verify OTP
  // Step 2: Verify OTP
verifyOtp(): void {
  if (this.otpLocked()) {
    return;
  }
  this.errorMessage.set(null);
  this.successMessage.set(null);

  if (this.otpForm.invalid) {
    if (this.otpForm.controls.otp.hasError('required')) {
      this.errorMessage.set('🔢 OTP is required.');
    } else if (this.otpForm.controls.otp.hasError('minlength') || this.otpForm.controls.otp.hasError('maxlength')) {
      this.errorMessage.set('🔢 OTP must be exactly 6 digits.');
    } else if (this.otpForm.controls.otp.hasError('pattern')) {
      this.errorMessage.set('🔢 OTP must contain only numbers (0-9).');
    }
    this.otpForm.markAllAsTouched();
    return;
  }

  this.loading.set(true);
  const otp = this.otpForm.getRawValue().otp;

  this.passwordResetService.verifyOtp(this.userEmail, otp).subscribe({
    next: (response) => {
      this.loading.set(false);
      if (response.success) {
        this.successMessage.set('✅ OTP verified successfully! Now you can set your new password.');
        this.currentStep.set(3);
        this.logger.info('ForgotPasswordComponent', 'OTP verified successfully');
      } else {
        // Handle unsuccessful response
        const errorMsg = response.message || 'Invalid OTP. Please check and try again.';
        this.errorMessage.set(`❌ ${errorMsg}`);
      }
    },
    error: (err) => {
      this.loading.set(false);
      console.error('OTP verification error:', err);
      
      // Try to extract error message from different response formats
      let errorMessage = 'Invalid OTP. Please check the 6-digit code and try again.';
      
      if (err.error && typeof err.error === 'string') {
        errorMessage = `❌ ${err.error}`;
      } else if (err.error && err.error.message) {
        const msg = err.error.message;
        const lower = msg.toLowerCase();
        if (lower.includes('invalid otp') || lower.includes('no active otp')) {
          this.wrongOtpAttempts++;
        }
        if (lower.includes('too many') || this.wrongOtpAttempts >= ForgotPasswordComponent.MAX_OTP_ATTEMPTS) {
          errorMessage = '🔒 Too many incorrect attempts. This OTP is no longer valid — click "Resend OTP" to get a new one.';
          this.lockOtp();
        } else if (lower.includes('expired')) {
          errorMessage = '⏰ OTP has expired. Please request a new OTP using "Resend OTP".';
          this.lockOtp();
        } else if (lower.includes('used')) {
          errorMessage = '❌ This OTP has already been used. Please request a new OTP.';
        } else {
          errorMessage = `❌ ${msg}`;
        }
      } else if (err.message) {
        errorMessage = `❌ ${err.message}`;
      }
      
      this.errorMessage.set(errorMessage);
    }
  });
}
  // Step 3: Reset Password
  resetPassword(): void {
    this.errorMessage.set(null);
    this.successMessage.set(null);

    if (this.passwordForm.invalid) {
      if (this.passwordForm.controls.newPassword.hasError('required')) {
        this.errorMessage.set('🔒 New password is required.');
      } else if (this.passwordForm.controls.newPassword.invalid) {
        const rule = this.passwordRuleError(this.passwordForm.controls.newPassword.value);
        this.errorMessage.set(`🔒 Password needs ${rule}.`);
      } else if (this.passwordForm.controls.confirmPassword.hasError('required')) {
        this.errorMessage.set('🔒 Please confirm your new password.');
      } else if (this.passwordsMismatch) {
        this.errorMessage.set('❌ Passwords do not match. Please ensure both passwords are identical.');
      }
      this.passwordForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    const otp = this.otpForm.getRawValue().otp;
    const { newPassword, confirmPassword } = this.passwordForm.getRawValue();

    this.passwordResetService.resetPassword(this.userEmail, otp, newPassword, confirmPassword).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.success) {
          this.successMessage.set('✅ Password reset successful! Redirecting to login...');
          this.notify.success('Success', 'Password reset successful! Please login with your new password.');
          
          setTimeout(() => {
            this.router.navigate(['/login'], { 
    
            });
          }, 2000);
        } else {
          this.errorMessage.set(this.getErrorMessage(response));
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(this.getErrorMessage(err));
      }
    });
  }

  // Resend OTP with cooldown
  resendOtp(): void {
    if (this.resendCooldown()) return;
    
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.loading.set(true);

    this.passwordResetService.forgotPassword(this.userEmail).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.success) {
          this.successMessage.set('✅ If this email is registered, a new OTP has been sent. Please check your inbox (and spam folder).');
          this.unlockOtp();
          this.startResendCooldown();
        } else {
          this.errorMessage.set(this.getErrorMessage(response));
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(this.getErrorMessage(err));
      }
    });
  }

  private lockOtp(): void {
    this.otpLocked.set(true);
    this.otpForm.controls.otp.disable();
  }

  private unlockOtp(): void {
    this.otpLocked.set(false);
    this.wrongOtpAttempts = 0;
    this.otpForm.reset();
    this.otpForm.controls.otp.enable();
  }

  private startResendCooldown(): void {
    this.resendCooldown.set(true);
    this.resendTimer.set(60);
    
    if (this.resendSubscription) {
      this.resendSubscription.unsubscribe();
    }
    
    this.resendSubscription = interval(1000).subscribe(() => {
      if (this.resendTimer() <= 1) {
        this.resendCooldown.set(false);
        this.resendTimer.set(0);
        if (this.resendSubscription) {
          this.resendSubscription.unsubscribe();
        }
      } else {
        this.resendTimer.update(t => t - 1);
      }
    });
  }

  goBack(): void {
    if (this.currentStep() === 1) {
      this.router.navigate(['/login']);
    } else if (this.currentStep() === 2) {
      this.currentStep.set(1);
      this.errorMessage.set(null);
      this.successMessage.set(null);
      this.unlockOtp();
    } else if (this.currentStep() === 3) {
      this.currentStep.set(2);
      this.errorMessage.set(null);
      this.successMessage.set(null);
      this.passwordForm.reset();
    }
  }

  toggleNewPassword(): void {
    this.hideNewPassword.update(v => !v);
  }

  toggleConfirmPassword(): void {
    this.hideConfirmPassword.update(v => !v);
  }
}