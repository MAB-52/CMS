import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminUser, CreateUserPayload, UpdateUserPayload, UserRole } from '../../../core/models/admin.model';
import { AdminService } from '../../../core/services/admin.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';
import { DatePipe } from '@angular/common';

const ROLES: UserRole[] = ['ADMIN', 'MAKER', 'CHECKER'];

@Component({
  selector: 'app-admin-user-management',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatProgressSpinnerModule, DatePipe],
  templateUrl: './admin-user-management.component.html',
  styleUrl: './admin-user-management.component.scss',
})
export class AdminUserManagementComponent implements OnInit {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);

  readonly roles = ROLES;

  // ── list state ──────────────────────────────────────────────────────────────
  readonly users = signal<AdminUser[]>([]);
  readonly totalElements = signal(0);
  readonly totalPages = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = signal(10);
  readonly listBusy = signal(false);

  // ── filters ─────────────────────────────────────────────────────────────────
  readonly searchQuery = signal('');
  readonly roleFilter = signal('ALL');
  readonly activeFilter = signal('ALL');

  // ── modal state ─────────────────────────────────────────────────────────────
  readonly modalOpen = signal(false);
  readonly editingUser = signal<AdminUser | null>(null);
  readonly saveBusy = signal(false);
  readonly deleteBusy = signal(false);
  readonly confirmDeleteId = signal<number | null>(null);

  // ── form fields ─────────────────────────────────────────────────────────────
  readonly formFullName = signal('');
  readonly formEmail = signal('');
  readonly formPassword = signal('');
  readonly formRole = signal<UserRole | ''>('');
  readonly formActive = signal(true);
  readonly showPassword = signal(false);

  readonly isEditing = computed(() => !!this.editingUser());
  readonly modalTitle = computed(() => this.isEditing() ? 'Edit User' : 'Create User');

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.listBusy.set(true);
    this.adminApi.listUsers({
      page: this.currentPage(),
      size: this.pageSize(),
      search: this.searchQuery(),
      role: this.roleFilter(),
      active: this.activeFilter(),
      sortDir: 'DESC',
    }).subscribe({
      next: (res) => {
        this.listBusy.set(false);
        if (res.success && res.data) {
          this.users.set(res.data.content);
          this.totalElements.set(res.data.totalElements);
          this.totalPages.set(res.data.totalPages);
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

  onSearch(): void {
    this.currentPage.set(0);
    this.loadUsers();
  }

  onFilterChange(): void {
    this.currentPage.set(0);
    this.loadUsers();
  }

  goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages()) return;
    this.currentPage.set(page);
    this.loadUsers();
  }

  openCreate(): void {
    this.editingUser.set(null);
    this.formFullName.set('');
    this.formEmail.set('');
    this.formPassword.set('');
    this.formRole.set('');
    this.formActive.set(true);
    this.showPassword.set(false);
    this.modalOpen.set(true);
  }

  openEdit(user: AdminUser): void {
    this.editingUser.set(user);
    this.formFullName.set(user.fullName);
    this.formEmail.set(user.email);
    this.formPassword.set('');
    this.formRole.set(user.role);
    this.formActive.set(user.active);
    this.showPassword.set(false);
    this.modalOpen.set(true);
  }

  closeModal(): void {
    this.modalOpen.set(false);
    this.editingUser.set(null);
  }

  saveUser(): void {
    const fullName = this.formFullName().trim();
    const email = this.formEmail().trim();
    const password = this.formPassword().trim();
    const role = this.formRole();

    if (!fullName || !email || !role) {
      this.notify.warning('Validation', 'Full name, email, and role are required.');
      return;
    }
    if (!this.isEditing() && !password) {
      this.notify.warning('Validation', 'Password is required for new users.');
      return;
    }

    this.saveBusy.set(true);

    if (this.isEditing()) {
      const payload: UpdateUserPayload = {
        fullName,
        email,
        role: role as UserRole,
        active: this.formActive(),
      };
      if (password) payload.password = password;

      this.adminApi.updateUser(this.editingUser()!.id, payload).subscribe({
        next: (res) => {
          this.saveBusy.set(false);
          if (!res.success) { this.notify.error('Update', res.message || 'Update failed.'); return; }
          this.notify.success('Updated', 'User updated successfully.');
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
      const payload: CreateUserPayload = { fullName, email, password, role: role as UserRole };
      this.adminApi.createUser(payload).subscribe({
        next: (res) => {
          this.saveBusy.set(false);
          if (!res.success) { this.notify.error('Create', res.message || 'Create failed.'); return; }
          this.notify.success('Created', 'User created successfully.');
          this.closeModal();
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

  confirmDelete(id: number): void {
    this.confirmDeleteId.set(id);
  }

  cancelDelete(): void {
    this.confirmDeleteId.set(null);
  }

  deleteUser(id: number): void {
    this.deleteBusy.set(true);
    this.adminApi.deleteUser(id).subscribe({
      next: () => {
        this.deleteBusy.set(false);
        this.confirmDeleteId.set(null);
        this.notify.success('Deleted', 'User deleted successfully.');
        this.loadUsers();
      },
      error: (err) => {
        this.deleteBusy.set(false);
        this.logger.error('UserManagement', 'delete failed', err);
        this.notify.error('Delete', err?.error?.message || 'Could not delete user.');
      },
    });
  }

  roleLabel(role: UserRole): string {
    return { ADMIN: 'Admin', MAKER: 'Maker', CHECKER: 'Checker' }[role] ?? role;
  }

  roleBadgeClass(role: UserRole): string {
    return { ADMIN: 'badge-admin', MAKER: 'badge-maker', CHECKER: 'badge-checker' }[role] ?? '';
  }

  pageNumbers(): number[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const delta = 2;
    const pages: number[] = [];
    for (let i = Math.max(0, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      pages.push(i);
    }
    return pages;
  }

  min(a: number, b: number): number { return Math.min(a, b); }
}