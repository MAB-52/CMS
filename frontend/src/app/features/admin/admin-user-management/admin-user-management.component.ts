import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TooltipModule } from 'primeng/tooltip';
import { AdminUser, CreateUserPayload, UpdateUserPayload, UserRole } from '../../../core/models/admin.model';
import { AdminService } from '../../../core/services/admin.service';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';

type TagSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

interface RoleMeta {
  value: UserRole;
  label: string;
  icon: string;
  color: string;
  severity: TagSeverity;
  description: string;
}

const ROLE_META: Record<UserRole, RoleMeta> = {
  ADMIN: {
    value: 'ADMIN',
    label: 'Admin',
    icon: 'pi pi-shield',
    color: 'var(--is-primary)',
    severity: 'info',
    description: 'Full access: users, reports and settings',
  },
  MAKER: {
    value: 'MAKER',
    label: 'Maker',
    icon: 'pi pi-pencil',
    color: 'var(--is-secondary)',
    severity: 'warn',
    description: 'Creates consents and broadcast rules',
  },
  CHECKER: {
    value: 'CHECKER',
    label: 'Checker',
    icon: 'pi pi-verified',
    color: 'var(--is-green)',
    severity: 'success',
    description: 'Reviews and approves maker submissions',
  },
};

const AVATAR_COLORS = ['#45329E', '#0D6EFD', '#D63384', '#20C997', '#EA6B28', '#6F42C1', '#0DCAF0'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DAY_MS = 86_400_000;

@Component({
  selector: 'app-admin-user-management',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    AvatarModule,
    ButtonModule,
    ConfirmPopupModule,
    DialogModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PasswordModule,
    ProgressBarModule,
    SelectModule,
    SkeletonModule,
    TableModule,
    TagModule,
    ToggleSwitchModule,
    TooltipModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['../shared/report-kit.css', './admin-user-management.component.css'],
})
export class AdminUserManagementComponent {
  private readonly adminApi = inject(AdminService);
  private readonly auth = inject(AuthService);
  private readonly confirm = inject(ConfirmationService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly relTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  readonly roleCards = Object.values(ROLE_META);
  readonly roleOptions = [
    { value: 'ALL', label: 'All roles', icon: 'pi pi-users', color: 'var(--is-text-2)' },
    ...this.roleCards.map((r) => ({ value: r.value, label: r.label, icon: r.icon, color: r.color })),
  ];
  readonly statusOptions = [
    { value: 'ALL', label: 'All statuses', icon: 'pi pi-circle', color: 'var(--is-text-2)' },
    { value: 'true', label: 'Active', icon: 'pi pi-check-circle', color: 'var(--is-success)' },
    { value: 'false', label: 'Inactive', icon: 'pi pi-minus-circle', color: 'var(--is-text-3)' },
  ];
  readonly currentUserId = this.auth.getCurrentUser()?.id ?? null;

  readonly users = signal<AdminUser[]>([]);
  readonly totalElements = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = signal(10);
  readonly listBusy = signal(false);
  readonly skeletonRows = Array.from({ length: 5 }, (_, i) => i);

  searchQuery = '';
  roleFilter = 'ALL';
  activeFilter = 'ALL';

  // ── Create / edit dialog ────────────────────────────────────────────────
  readonly modalOpen = signal(false);
  readonly editingUser = signal<AdminUser | null>(null);
  readonly saveBusy = signal(false);
  readonly deletingId = signal<number | null>(null);
  readonly submitted = signal(false);

  formFullName = '';
  formEmail = '';
  formPassword = '';
  formRole: UserRole | '' = '';
  formActive = true;

  readonly isEditing = computed(() => !!this.editingUser());

  // ── List ────────────────────────────────────────────────────────────────

  loadUsers(): void {
    this.listBusy.set(true);
    this.adminApi.listUsers({
      page: this.currentPage(),
      size: this.pageSize(),
      search: this.searchQuery.trim(),
      role: this.roleFilter,
      active: this.activeFilter,
      sortDir: 'DESC',
    }).subscribe({
      next: (res) => {
        this.listBusy.set(false);
        if (res.success && res.data) {
          this.users.set(res.data.content);
          this.totalElements.set(res.data.totalElements);
          this.currentPage.set(res.data.currentPage);
        }
      },
      error: (err) => {
        this.listBusy.set(false);
        this.logger.error('UserManagement', 'list failed', err);
        this.notify.error('Users', err?.error?.message || 'Could not load users.');
      },
    });
  }

  /** p-table fires this on init and on every paginator change. */
  onLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.pageSize();
    this.pageSize.set(rows);
    this.currentPage.set(Math.floor((event.first ?? 0) / rows));
    this.loadUsers();
  }

  onSearch(): void {
    this.currentPage.set(0);
    this.loadUsers();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.roleFilter = 'ALL';
    this.activeFilter = 'ALL';
    this.onSearch();
  }

  activeFilterCount(): number {
    return [!!this.searchQuery.trim(), this.roleFilter !== 'ALL', this.activeFilter !== 'ALL'].filter(Boolean).length;
  }

  // ── Dialog ──────────────────────────────────────────────────────────────

  openCreate(): void {
    this.editingUser.set(null);
    this.formFullName = '';
    this.formEmail = '';
    this.formPassword = '';
    this.formRole = '';
    this.formActive = true;
    this.submitted.set(false);
    this.modalOpen.set(true);
  }

  openEdit(user: AdminUser): void {
    this.editingUser.set(user);
    this.formFullName = user.fullName;
    this.formEmail = user.email;
    this.formPassword = '';
    this.formRole = user.role;
    this.formActive = user.active;
    this.submitted.set(false);
    this.modalOpen.set(true);
  }

  closeModal(): void {
    this.modalOpen.set(false);
    this.editingUser.set(null);
  }

  /** Inline validation messages, shown once the user has tried to submit. */
  fieldError(field: 'name' | 'email' | 'password' | 'role'): string | null {
    if (!this.submitted()) return null;
    switch (field) {
      case 'name':
        if (!this.formFullName.trim()) return 'Full name is required.';
        return this.formFullName.trim().length <= 100 ? null : 'Full name must not exceed 100 characters.';
      case 'email':
        if (!this.formEmail.trim()) return 'Email is required.';
        if (this.formEmail.trim().length > 100) return 'Email must not exceed 100 characters.';
        return EMAIL_RE.test(this.formEmail.trim()) ? null : 'Enter a valid email address.';
      case 'password':
        if (this.isEditing() && !this.formPassword) return null;
        if (!this.formPassword) return 'Password is required for new users.';
        if (this.formPassword.length < 8) return 'Use at least 8 characters.';
        return this.formPassword.length <= 100 ? null : 'Use at most 100 characters.';
      case 'role':
        return this.formRole ? null : 'Choose a role.';
    }
  }

  private formValid(): boolean {
    return (['name', 'email', 'password', 'role'] as const).every((f) => !this.fieldError(f));
  }

  saveUser(): void {
    this.submitted.set(true);
    if (!this.formValid()) return;

    const fullName = this.formFullName.trim();
    const email = this.formEmail.trim();
    const password = this.formPassword;
    const role = this.formRole as UserRole;
    this.saveBusy.set(true);

    if (this.isEditing()) {
      const payload: UpdateUserPayload = { fullName, email, role, active: this.formActive };
      if (password) payload.password = password;

      this.adminApi.updateUser(this.editingUser()!.id, payload).subscribe({
        next: (res) => {
          this.saveBusy.set(false);
          if (!res.success) { this.notify.error('Update', res.message || 'Update failed.'); return; }
          this.notify.success('Updated', `${fullName} was updated.`);
          this.closeModal();
          this.loadUsers();
        },
        error: (err) => {
          this.saveBusy.set(false);
          this.logger.error('UserManagement', 'update failed', err);
          this.notify.error('Update', err?.error?.message || 'Could not update user.');
        },
      });
    } else {
      const payload: CreateUserPayload = { fullName, email, password, role };
      this.adminApi.createUser(payload).subscribe({
        next: (res) => {
          this.saveBusy.set(false);
          if (!res.success) { this.notify.error('Create', res.message || 'Create failed.'); return; }
          this.notify.success('Created', `${fullName} was added as ${ROLE_META[role].label}.`);
          this.closeModal();
          this.currentPage.set(0);
          this.loadUsers();
        },
        error: (err) => {
          this.saveBusy.set(false);
          this.logger.error('UserManagement', 'create failed', err);
          this.notify.error('Create', err?.error?.message || 'Could not create user.');
        },
      });
    }
  }

  // ── Delete ──────────────────────────────────────────────────────────────

  confirmDelete(event: Event, user: AdminUser): void {
    this.confirm.confirm({
      target: event.currentTarget as EventTarget,
      message: `Delete ${user.fullName}? They will no longer be able to sign in.`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptIcon: 'pi pi-trash',
      acceptButtonProps: { severity: 'danger', size: 'small', rounded: true },
      rejectButtonProps: { severity: 'secondary', size: 'small', rounded: true, outlined: true },
      accept: () => this.deleteUser(user),
    });
  }

  private deleteUser(user: AdminUser): void {
    this.deletingId.set(user.id);
    this.adminApi.deleteUser(user.id).subscribe({
      next: (res) => {
        this.deletingId.set(null);
        this.notify.success('Deleted', res?.message || `${user.fullName} was deleted.`);
        // Step back a page if this was the last row on it.
        if (this.users().length === 1 && this.currentPage() > 0) {
          this.currentPage.set(this.currentPage() - 1);
        }
        this.loadUsers();
      },
      error: (err) => {
        this.deletingId.set(null);
        this.logger.error('UserManagement', 'delete failed', err);
        this.notify.error('Delete', err?.error?.message || 'Could not delete user.');
      },
    });
  }

  isSelf(user: AdminUser): boolean {
    return this.currentUserId != null && user.id === this.currentUserId;
  }

  // ── Presentation helpers ────────────────────────────────────────────────

  role(role: UserRole): RoleMeta {
    return ROLE_META[role];
  }

  initials(name: string | null | undefined): string {
    const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  }

  avatarColor(seed: string): string {
    let h = 0;
    for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
    return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
  }

  relative(value: string | null | undefined): string {
    if (!value) return '';
    const t = new Date(value).getTime();
    if (Number.isNaN(t)) return '';
    const days = Math.round((t - Date.now()) / DAY_MS);
    if (days === 0) return 'today';
    if (Math.abs(days) < 30) return this.relTime.format(days, 'day');
    if (Math.abs(days) < 365) return this.relTime.format(Math.round(days / 30), 'month');
    return this.relTime.format(Math.round(days / 365), 'year');
  }
}
