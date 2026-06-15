import {
  AdminService
} from "./chunk-4ANL3VVD.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4V3JZOCF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VXKP42CX.js";
import {
  LoggerService
} from "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-DBZCAWGK.js";
import {
  Component,
  DatePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-SKWF3SJ6.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/admin/admin-user-management/admin-user-management.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminUserManagementComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", r_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel(r_r1));
  }
}
function AdminUserManagementComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-progress-spinner", 14);
    \u0275\u0275elementEnd();
  }
}
function AdminUserManagementComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "No users found.");
    \u0275\u0275elementEnd();
  }
}
function AdminUserManagementComponent_Conditional_23_For_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Delete?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 28);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_23_For_17_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const u_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteUser(u_r5.id));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_23_For_17_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(5, "No");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.deleteBusy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.deleteBusy() ? "\u2026" : "Yes", " ");
  }
}
function AdminUserManagementComponent_Conditional_23_For_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_23_For_17_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const u_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(u_r5));
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_23_For_17_Conditional_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const u_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(u_r5.id));
    });
    \u0275\u0275text(3, "Delete");
    \u0275\u0275elementEnd();
  }
}
function AdminUserManagementComponent_Conditional_23_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 26);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 16);
    \u0275\u0275template(15, AdminUserManagementComponent_Conditional_23_For_17_Conditional_15_Template, 6, 2)(16, AdminUserManagementComponent_Conditional_23_For_17_Conditional_16_Template, 4, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.roleBadgeClass(u_r5.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel(u_r5.role));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", u_r5.active)("inactive", !u_r5.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r5.active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, u_r5.createdAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.confirmDeleteId() === u_r5.id ? 15 : 16);
  }
}
function AdminUserManagementComponent_Conditional_23_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_23_For_25_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r8 === ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8 + 1);
  }
}
function AdminUserManagementComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 15)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 16);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AdminUserManagementComponent_Conditional_23_For_17_Template, 17, 15, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 17)(19, "span", 18);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19)(22, "button", 20);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_23_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275text(23, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, AdminUserManagementComponent_Conditional_23_For_25_Template, 2, 3, "button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(26, "button", 20);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_23_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275text(27, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.users());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" ", ctx_r1.currentPage() * ctx_r1.pageSize() + 1, "\u2013", ctx_r1.min(ctx_r1.currentPage() * ctx_r1.pageSize() + ctx_r1.users().length, ctx_r1.totalElements()), " of ", ctx_r1.totalElements(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() >= ctx_r1.totalPages() - 1);
  }
}
function AdminUserManagementComponent_Conditional_24_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AdminUserManagementComponent_Conditional_24_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "(leave blank to keep current)");
    \u0275\u0275elementEnd();
  }
}
function AdminUserManagementComponent_Conditional_24_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", r_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel(r_r10));
  }
}
function AdminUserManagementComponent_Conditional_24_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 39)(1, "span", 40);
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 4);
    \u0275\u0275listener("ngModelChange", function AdminUserManagementComponent_Conditional_24_Conditional_39_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.formActive.set($event === "true" || $event === true));
    });
    \u0275\u0275elementStart(4, "option", 6);
    \u0275\u0275text(5, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 6);
    \u0275\u0275text(7, "Inactive");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.formActive());
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function AdminUserManagementComponent_Conditional_24_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 52);
  }
}
function AdminUserManagementComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 35)(3, "h2", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "label", 39)(9, "span", 40);
    \u0275\u0275text(10, "Full Name ");
    \u0275\u0275elementStart(11, "span", 41);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 42);
    \u0275\u0275listener("ngModelChange", function AdminUserManagementComponent_Conditional_24_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formFullName.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 39)(15, "span", 40);
    \u0275\u0275text(16, "Email ");
    \u0275\u0275elementStart(17, "span", 41);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 43);
    \u0275\u0275listener("ngModelChange", function AdminUserManagementComponent_Conditional_24_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formEmail.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "label", 39)(21, "span", 40);
    \u0275\u0275text(22, " Password ");
    \u0275\u0275template(23, AdminUserManagementComponent_Conditional_24_Conditional_23_Template, 2, 0, "span", 41)(24, AdminUserManagementComponent_Conditional_24_Conditional_24_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 45)(26, "input", 46);
    \u0275\u0275listener("ngModelChange", function AdminUserManagementComponent_Conditional_24_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formPassword.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 47);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_24_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPassword.set(!ctx_r1.showPassword()));
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "label", 39)(30, "span", 40);
    \u0275\u0275text(31, "Role ");
    \u0275\u0275elementStart(32, "span", 41);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "select", 4);
    \u0275\u0275listener("ngModelChange", function AdminUserManagementComponent_Conditional_24_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formRole.set($event));
    });
    \u0275\u0275elementStart(35, "option", 48);
    \u0275\u0275text(36, "Choose role\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, AdminUserManagementComponent_Conditional_24_For_38_Template, 2, 2, "option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, AdminUserManagementComponent_Conditional_24_Conditional_39_Template, 8, 3, "label", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 49)(41, "button", 50);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_24_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(42, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 51);
    \u0275\u0275listener("click", function AdminUserManagementComponent_Conditional_24_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275template(44, AdminUserManagementComponent_Conditional_24_Conditional_44_Template, 1, 0, "mat-progress-spinner", 52);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.modalTitle());
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r1.formFullName());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.formEmail());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r1.isEditing() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEditing() ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", ctx_r1.isEditing() ? "New password\u2026" : "Min 8 characters");
    \u0275\u0275property("type", ctx_r1.showPassword() ? "text" : "password")("ngModel", ctx_r1.formPassword());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPassword() ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.formRole());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.roles);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isEditing() ? 39 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saveBusy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saveBusy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saveBusy() ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveBusy() ? "" : ctx_r1.isEditing() ? "Save Changes" : "Create User", " ");
  }
}
var ROLES = ["ADMIN", "MAKER", "CHECKER"];
var AdminUserManagementComponent = class _AdminUserManagementComponent {
  constructor() {
    this.adminApi = inject(AdminService);
    this.notify = inject(NotificationService);
    this.logger = inject(LoggerService);
    this.roles = ROLES;
    this.users = signal([]);
    this.totalElements = signal(0);
    this.totalPages = signal(0);
    this.currentPage = signal(0);
    this.pageSize = signal(10);
    this.listBusy = signal(false);
    this.searchQuery = signal("");
    this.roleFilter = signal("ALL");
    this.activeFilter = signal("ALL");
    this.modalOpen = signal(false);
    this.editingUser = signal(null);
    this.saveBusy = signal(false);
    this.deleteBusy = signal(false);
    this.confirmDeleteId = signal(null);
    this.formFullName = signal("");
    this.formEmail = signal("");
    this.formPassword = signal("");
    this.formRole = signal("");
    this.formActive = signal(true);
    this.showPassword = signal(false);
    this.isEditing = computed(() => !!this.editingUser());
    this.modalTitle = computed(() => this.isEditing() ? "Edit User" : "Create User");
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.listBusy.set(true);
    this.adminApi.listUsers({
      page: this.currentPage(),
      size: this.pageSize(),
      search: this.searchQuery(),
      role: this.roleFilter(),
      active: this.activeFilter(),
      sortDir: "DESC"
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
        this.logger.error("UserManagement", "list failed", err);
        this.notify.error("Users", err?.error?.message || "Could not load users.");
      }
    });
  }
  onSearch() {
    this.currentPage.set(0);
    this.loadUsers();
  }
  onFilterChange() {
    this.currentPage.set(0);
    this.loadUsers();
  }
  goToPage(page) {
    if (page < 0 || page >= this.totalPages())
      return;
    this.currentPage.set(page);
    this.loadUsers();
  }
  openCreate() {
    this.editingUser.set(null);
    this.formFullName.set("");
    this.formEmail.set("");
    this.formPassword.set("");
    this.formRole.set("");
    this.formActive.set(true);
    this.showPassword.set(false);
    this.modalOpen.set(true);
  }
  openEdit(user) {
    this.editingUser.set(user);
    this.formFullName.set(user.fullName);
    this.formEmail.set(user.email);
    this.formPassword.set("");
    this.formRole.set(user.role);
    this.formActive.set(user.active);
    this.showPassword.set(false);
    this.modalOpen.set(true);
  }
  closeModal() {
    this.modalOpen.set(false);
    this.editingUser.set(null);
  }
  saveUser() {
    const fullName = this.formFullName().trim();
    const email = this.formEmail().trim();
    const password = this.formPassword().trim();
    const role = this.formRole();
    if (!fullName || !email || !role) {
      this.notify.warning("Validation", "Full name, email, and role are required.");
      return;
    }
    if (!this.isEditing() && !password) {
      this.notify.warning("Validation", "Password is required for new users.");
      return;
    }
    this.saveBusy.set(true);
    if (this.isEditing()) {
      const payload = {
        fullName,
        email,
        role,
        active: this.formActive()
      };
      if (password)
        payload.password = password;
      this.adminApi.updateUser(this.editingUser().id, payload).subscribe({
        next: (res) => {
          this.saveBusy.set(false);
          if (!res.success) {
            this.notify.error("Update", res.message || "Update failed.");
            return;
          }
          this.notify.success("Updated", "User updated successfully.");
          this.closeModal();
          this.loadUsers();
        },
        error: (err) => {
          this.saveBusy.set(false);
          this.logger.error("UserManagement", "update failed", err);
          this.notify.error("Update", err?.error?.message || "Could not update user.");
        }
      });
    } else {
      const payload = { fullName, email, password, role };
      this.adminApi.createUser(payload).subscribe({
        next: (res) => {
          this.saveBusy.set(false);
          if (!res.success) {
            this.notify.error("Create", res.message || "Create failed.");
            return;
          }
          this.notify.success("Created", "User created successfully.");
          this.closeModal();
          this.loadUsers();
        },
        error: (err) => {
          this.saveBusy.set(false);
          this.logger.error("UserManagement", "create failed", err);
          this.notify.error("Create", err?.error?.message || "Could not create user.");
        }
      });
    }
  }
  confirmDelete(id) {
    this.confirmDeleteId.set(id);
  }
  cancelDelete() {
    this.confirmDeleteId.set(null);
  }
  deleteUser(id) {
    this.deleteBusy.set(true);
    this.adminApi.deleteUser(id).subscribe({
      next: () => {
        this.deleteBusy.set(false);
        this.confirmDeleteId.set(null);
        this.notify.success("Deleted", "User deleted successfully.");
        this.loadUsers();
      },
      error: (err) => {
        this.deleteBusy.set(false);
        this.logger.error("UserManagement", "delete failed", err);
        this.notify.error("Delete", err?.error?.message || "Could not delete user.");
      }
    });
  }
  roleLabel(role) {
    return { ADMIN: "Admin", MAKER: "Maker", CHECKER: "Checker" }[role] ?? role;
  }
  roleBadgeClass(role) {
    return { ADMIN: "badge-admin", MAKER: "badge-maker", CHECKER: "badge-checker" }[role] ?? "";
  }
  pageNumbers() {
    const total = this.totalPages();
    const current = this.currentPage();
    const delta = 2;
    const pages = [];
    for (let i = Math.max(0, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      pages.push(i);
    }
    return pages;
  }
  min(a, b) {
    return Math.min(a, b);
  }
  static {
    this.\u0275fac = function AdminUserManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminUserManagementComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUserManagementComponent, selectors: [["app-admin-user-management"]], decls: 25, vars: 5, consts: [[1, "um-page"], [1, "toolbar"], [1, "filters"], ["type", "text", "placeholder", "Search name or email\u2026", 1, "ctl", "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "ctl", 3, "ngModelChange", "ngModel"], ["value", "ALL"], [3, "value"], ["value", "true"], ["value", "false"], ["mat-stroked-button", "", "type", "button", 1, "search-btn", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "table-card"], [1, "spinner-row"], [1, "empty-state"], ["diameter", "36", "mode", "indeterminate"], [1, "um-table"], [1, "col-actions"], [1, "pagination"], [1, "page-info"], [1, "page-btns"], [1, "page-btn", 3, "click", "disabled"], [1, "page-btn", 3, "active"], [1, "td-name"], [1, "td-email"], [1, "badge"], [1, "status-pill"], [1, "td-date"], [1, "confirm-text"], ["mat-stroked-button", "", "color", "warn", "type", "button", 3, "click", "disabled"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 1, "edit-btn", 3, "click"], ["mat-stroked-button", "", "type", "button", 1, "delete-btn", 3, "click"], [1, "page-btn", 3, "click"], [1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "modal-close", 3, "click"], [1, "modal-body"], [1, "stack"], [1, "lbl"], [1, "req"], ["type", "text", "placeholder", "John Doe", 1, "ctl", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "john@example.com", 1, "ctl", 3, "ngModelChange", "ngModel"], [1, "opt"], [1, "password-row"], [1, "ctl", 3, "ngModelChange", "type", "placeholder", "ngModel"], ["type", "button", 1, "toggle-pw", 3, "click"], ["value", ""], [1, "modal-footer"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["diameter", "18", "mode", "indeterminate"]], template: function AdminUserManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3);
        \u0275\u0275listener("ngModelChange", function AdminUserManagementComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.searchQuery.set($event);
        })("keyup.enter", function AdminUserManagementComponent_Template_input_keyup_enter_3_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "select", 4);
        \u0275\u0275listener("ngModelChange", function AdminUserManagementComponent_Template_select_ngModelChange_4_listener($event) {
          ctx.roleFilter.set($event);
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(5, "option", 5);
        \u0275\u0275text(6, "All Roles");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(7, AdminUserManagementComponent_For_8_Template, 2, 2, "option", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "select", 4);
        \u0275\u0275listener("ngModelChange", function AdminUserManagementComponent_Template_select_ngModelChange_9_listener($event) {
          ctx.activeFilter.set($event);
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(10, "option", 5);
        \u0275\u0275text(11, "All Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "option", 7);
        \u0275\u0275text(13, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "option", 8);
        \u0275\u0275text(15, "Inactive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function AdminUserManagementComponent_Template_button_click_16_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275text(17, "Search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 10);
        \u0275\u0275listener("click", function AdminUserManagementComponent_Template_button_click_18_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(19, "+ New User");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 11);
        \u0275\u0275template(21, AdminUserManagementComponent_Conditional_21_Template, 2, 0, "div", 12)(22, AdminUserManagementComponent_Conditional_22_Template, 2, 0, "div", 13)(23, AdminUserManagementComponent_Conditional_23_Template, 28, 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, AdminUserManagementComponent_Conditional_24_Template, 46, 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.searchQuery());
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.roleFilter());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.roles);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.activeFilter());
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.listBusy() ? 21 : ctx.users().length === 0 ? 22 : 23);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.modalOpen() ? 24 : -1);
      }
    }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatProgressSpinnerModule, MatProgressSpinner, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.um-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 24px 16px 80px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  flex: 1;\n  padding: 12px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n}\n.search-input[_ngcontent-%COMP%] {\n  min-width: 260px;\n  flex: 1.5;\n}\n.ctl[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 14px;\n  border-radius: 10px;\n  border: 1px solid #dbe2ea;\n  background: #ffffff;\n  font-size: 14px;\n  color: #0f172a;\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    background 0.18s ease;\n}\n.ctl[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #93c5fd;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);\n}\n.ctl[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\nselect.ctl[_ngcontent-%COMP%] {\n  min-width: 160px;\n  cursor: pointer;\n}\n.search-btn[_ngcontent-%COMP%] {\n  height: 42px;\n}\n.table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);\n}\n.spinner-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 56px 24px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 56px 24px;\n  text-align: center;\n  color: #64748b;\n  font-size: 14px;\n}\n.um-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.um-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 14px 18px;\n  border-bottom: 1px solid #e2e8f0;\n  text-align: left;\n  white-space: nowrap;\n}\n.um-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s ease;\n}\n.um-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafcff;\n}\n.um-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n  font-size: 14px;\n  color: #334155;\n}\n.td-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.td-email[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.td-date[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: #64748b;\n}\n.col-actions[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 24px;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.badge--admin[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.badge--maker[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n}\n.badge--checker[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n.badge--viewer[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.12);\n  color: #475569;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 24px;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n}\n.status-pill.active[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n.status-pill.inactive[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.edit-btn[_ngcontent-%COMP%], \n.delete-btn[_ngcontent-%COMP%] {\n  min-width: 74px;\n  border-radius: 10px !important;\n  font-weight: 600;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n  border-color: rgba(220, 38, 38, 0.22) !important;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.05);\n}\n.confirm-text[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #dc2626;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 18px;\n  border-top: 1px solid #f1f5f9;\n  background: #ffffff;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n.page-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  padding: 0 10px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #ffffff;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  backdrop-filter: blur(4px);\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: min(520px, 100vw - 32px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.25), 0 8px 20px rgba(15, 23, 42, 0.08);\n  z-index: 1001;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 20px 22px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.modal-close[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: #64748b;\n  font-size: 15px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  padding: 22px;\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.opt[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: normal;\n  color: #94a3b8;\n}\n.password-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.password-row[_ngcontent-%COMP%]   .ctl[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toggle-pw[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  border: 1px solid #dbe2ea;\n  background: #ffffff;\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.toggle-pw[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 18px 22px 22px;\n  border-top: 1px solid #f1f5f9;\n}\n  .mat-mdc-stroked-button, \n  .mat-mdc-unelevated-button {\n  border-radius: 10px !important;\n  font-weight: 600;\n}\n  .mat-mdc-progress-spinner circle {\n  stroke: #2563eb;\n}\n@media (max-width: 900px) {\n  .toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .filters[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-input[_ngcontent-%COMP%], \n   select.ctl[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-btns[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .col-actions[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .modal[_ngcontent-%COMP%] {\n    width: calc(100vw - 20px);\n  }\n  .modal-body[_ngcontent-%COMP%], \n   .modal-header[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n/*# sourceMappingURL=admin-user-management.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUserManagementComponent, [{
    type: Component,
    args: [{ selector: "app-admin-user-management", standalone: true, imports: [FormsModule, MatButtonModule, MatProgressSpinnerModule, DatePipe], template: `<div class="um-page">\r
\r
  <!-- toolbar -->\r
  <div class="toolbar">\r
    <div class="filters">\r
      <input\r
        type="text"\r
        class="ctl search-input"\r
        placeholder="Search name or email\u2026"\r
        [ngModel]="searchQuery()"\r
        (ngModelChange)="searchQuery.set($event)"\r
        (keyup.enter)="onSearch()"\r
      />\r
      <select class="ctl" [ngModel]="roleFilter()" (ngModelChange)="roleFilter.set($event); onFilterChange()">\r
        <option value="ALL">All Roles</option>\r
        @for (r of roles; track r) {\r
          <option [value]="r">{{ roleLabel(r) }}</option>\r
        }\r
      </select>\r
      <select class="ctl" [ngModel]="activeFilter()" (ngModelChange)="activeFilter.set($event); onFilterChange()">\r
        <option value="ALL">All Status</option>\r
        <option value="true">Active</option>\r
        <option value="false">Inactive</option>\r
      </select>\r
      <button mat-stroked-button type="button" class="search-btn" (click)="onSearch()">Search</button>\r
    </div>\r
    <button mat-flat-button color="primary" type="button" (click)="openCreate()">+ New User</button>\r
  </div>\r
\r
  <!-- table -->\r
  <div class="table-card">\r
    @if (listBusy()) {\r
      <div class="spinner-row">\r
        <mat-progress-spinner diameter="36" mode="indeterminate" />\r
      </div>\r
    } @else if (users().length === 0) {\r
      <div class="empty-state">No users found.</div>\r
    } @else {\r
      <table class="um-table">\r
        <thead>\r
          <tr>\r
            <th>Name</th>\r
            <th>Email</th>\r
            <th>Role</th>\r
            <th>Status</th>\r
            <th>Created</th>\r
            <th class="col-actions">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (u of users(); track u.id) {\r
            <tr>\r
              <td class="td-name">{{ u.fullName }}</td>\r
              <td class="td-email">{{ u.email }}</td>\r
              <td><span class="badge" [class]="roleBadgeClass(u.role)">{{ roleLabel(u.role) }}</span></td>\r
              <td>\r
                <span class="status-pill" [class.active]="u.active" [class.inactive]="!u.active">\r
                  {{ u.active ? 'Active' : 'Inactive' }}\r
                </span>\r
              </td>\r
              <td class="td-date">{{ u.createdAt | date:'dd MMM yyyy' }}</td>\r
              <td class="col-actions">\r
                @if (confirmDeleteId() === u.id) {\r
                  <span class="confirm-text">Delete?</span>\r
                  <button mat-stroked-button color="warn" type="button"\r
                    [disabled]="deleteBusy()" (click)="deleteUser(u.id)">\r
                    {{ deleteBusy() ? '\u2026' : 'Yes' }}\r
                  </button>\r
                  <button mat-stroked-button type="button" (click)="cancelDelete()">No</button>\r
                } @else {\r
                  <button mat-stroked-button class="edit-btn" type="button" (click)="openEdit(u)">Edit</button>\r
                  <button mat-stroked-button class="delete-btn" type="button" (click)="confirmDelete(u.id)">Delete</button>\r
                }\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
\r
      <!-- pagination -->\r
      <div class="pagination">\r
        <span class="page-info">\r
          {{ currentPage() * pageSize() + 1 }}\u2013{{ min(currentPage() * pageSize() + users().length, totalElements()) }}\r
          of {{ totalElements() }}\r
        </span>\r
        <div class="page-btns">\r
          <button class="page-btn" [disabled]="currentPage() === 0" (click)="goToPage(currentPage() - 1)">\u2039</button>\r
          @for (p of pageNumbers(); track p) {\r
            <button class="page-btn" [class.active]="p === currentPage()" (click)="goToPage(p)">{{ p + 1 }}</button>\r
          }\r
          <button class="page-btn" [disabled]="currentPage() >= totalPages() - 1" (click)="goToPage(currentPage() + 1)">\u203A</button>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
\r
</div>\r
\r
<!-- modal -->\r
@if (modalOpen()) {\r
  <div class="modal-backdrop" (click)="closeModal()"></div>\r
  <div class="modal" role="dialog" aria-modal="true">\r
    <div class="modal-header">\r
      <h2 class="modal-title">{{ modalTitle() }}</h2>\r
      <button class="modal-close" type="button" (click)="closeModal()">\u2715</button>\r
    </div>\r
    <div class="modal-body">\r
\r
      <label class="stack">\r
        <span class="lbl">Full Name <span class="req">*</span></span>\r
        <input class="ctl" type="text" placeholder="John Doe"\r
          [ngModel]="formFullName()" (ngModelChange)="formFullName.set($event)" />\r
      </label>\r
\r
      <label class="stack">\r
        <span class="lbl">Email <span class="req">*</span></span>\r
        <input class="ctl" type="email" placeholder="john@example.com"\r
          [ngModel]="formEmail()" (ngModelChange)="formEmail.set($event)" />\r
      </label>\r
\r
      <label class="stack">\r
        <span class="lbl">\r
          Password\r
          @if (!isEditing()) { <span class="req">*</span> }\r
          @if (isEditing()) { <span class="opt">(leave blank to keep current)</span> }\r
        </span>\r
        <div class="password-row">\r
          <input class="ctl" [type]="showPassword() ? 'text' : 'password'"\r
            placeholder="{{ isEditing() ? 'New password\u2026' : 'Min 8 characters' }}"\r
            [ngModel]="formPassword()" (ngModelChange)="formPassword.set($event)" />\r
          <button class="toggle-pw" type="button" (click)="showPassword.set(!showPassword())">\r
            {{ showPassword() ? '\u{1F648}' : '\u{1F441}\uFE0F' }}\r
          </button>\r
        </div>\r
      </label>\r
\r
      <label class="stack">\r
        <span class="lbl">Role <span class="req">*</span></span>\r
        <select class="ctl" [ngModel]="formRole()" (ngModelChange)="formRole.set($event)">\r
          <option value="">Choose role\u2026</option>\r
          @for (r of roles; track r) {\r
            <option [value]="r">{{ roleLabel(r) }}</option>\r
          }\r
        </select>\r
      </label>\r
\r
      @if (isEditing()) {\r
        <label class="stack">\r
          <span class="lbl">Status</span>\r
          <select class="ctl" [ngModel]="formActive()" (ngModelChange)="formActive.set($event === 'true' || $event === true)">\r
            <option [value]="true">Active</option>\r
            <option [value]="false">Inactive</option>\r
          </select>\r
        </label>\r
      }\r
\r
    </div>\r
    <div class="modal-footer">\r
      <button mat-stroked-button type="button" [disabled]="saveBusy()" (click)="closeModal()">Cancel</button>\r
      <button mat-flat-button color="primary" type="button" [disabled]="saveBusy()" (click)="saveUser()">\r
        @if (saveBusy()) { <mat-progress-spinner diameter="18" mode="indeterminate" /> }\r
        {{ saveBusy() ? '' : (isEditing() ? 'Save Changes' : 'Create User') }}\r
      </button>\r
    </div>\r
  </div>\r
}`, styles: ['@charset "UTF-8";\n\n/* src/app/features/admin/admin-user-management/admin-user-management.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.um-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 24px 16px 80px;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n.filters {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  flex: 1;\n  padding: 12px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n}\n.search-input {\n  min-width: 260px;\n  flex: 1.5;\n}\n.ctl {\n  height: 42px;\n  padding: 0 14px;\n  border-radius: 10px;\n  border: 1px solid #dbe2ea;\n  background: #ffffff;\n  font-size: 14px;\n  color: #0f172a;\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    background 0.18s ease;\n}\n.ctl:focus {\n  outline: none;\n  border-color: #93c5fd;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);\n}\n.ctl::placeholder {\n  color: #94a3b8;\n}\nselect.ctl {\n  min-width: 160px;\n  cursor: pointer;\n}\n.search-btn {\n  height: 42px;\n}\n.table-card {\n  overflow: hidden;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);\n}\n.spinner-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 56px 24px;\n}\n.empty-state {\n  padding: 56px 24px;\n  text-align: center;\n  color: #64748b;\n  font-size: 14px;\n}\n.um-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.um-table thead th {\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 14px 18px;\n  border-bottom: 1px solid #e2e8f0;\n  text-align: left;\n  white-space: nowrap;\n}\n.um-table tbody tr {\n  transition: background 0.15s ease;\n}\n.um-table tbody tr:hover {\n  background: #fafcff;\n}\n.um-table tbody td {\n  padding: 16px 18px;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n  font-size: 14px;\n  color: #334155;\n}\n.td-name {\n  font-weight: 600;\n  color: #0f172a;\n}\n.td-email {\n  color: #64748b;\n}\n.td-date {\n  white-space: nowrap;\n  color: #64748b;\n}\n.col-actions {\n  text-align: right;\n  white-space: nowrap;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 24px;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.badge--admin {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.badge--maker {\n  background: rgba(37, 99, 235, 0.1);\n  color: #2563eb;\n}\n.badge--checker {\n  background: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n.badge--viewer {\n  background: rgba(100, 116, 139, 0.12);\n  color: #475569;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 24px;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n}\n.status-pill.active {\n  background: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n.status-pill.inactive {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.edit-btn,\n.delete-btn {\n  min-width: 74px;\n  border-radius: 10px !important;\n  font-weight: 600;\n}\n.edit-btn {\n  margin-right: 8px;\n}\n.delete-btn {\n  color: #dc2626 !important;\n  border-color: rgba(220, 38, 38, 0.22) !important;\n}\n.delete-btn:hover {\n  background: rgba(220, 38, 38, 0.05);\n}\n.confirm-text {\n  margin-right: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #dc2626;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 18px;\n  border-top: 1px solid #f1f5f9;\n  background: #ffffff;\n}\n.page-info {\n  font-size: 13px;\n  color: #64748b;\n}\n.page-btns {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.page-btn {\n  min-width: 34px;\n  height: 34px;\n  padding: 0 10px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.page-btn:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.page-btn.active {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #ffffff;\n}\n.page-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  backdrop-filter: blur(4px);\n  z-index: 1000;\n}\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: min(520px, 100vw - 32px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.25), 0 8px 20px rgba(15, 23, 42, 0.08);\n  z-index: 1001;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 20px 22px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.modal-close {\n  width: 34px;\n  height: 34px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: #64748b;\n  font-size: 15px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.modal-close:hover {\n  background: #f1f5f9;\n}\n.modal-body {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  padding: 22px;\n}\n.stack {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.lbl {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.req {\n  color: #dc2626;\n}\n.opt {\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: normal;\n  color: #94a3b8;\n}\n.password-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.password-row .ctl {\n  flex: 1;\n}\n.toggle-pw {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  border: 1px solid #dbe2ea;\n  background: #ffffff;\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.toggle-pw:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 18px 22px 22px;\n  border-top: 1px solid #f1f5f9;\n}\n::ng-deep .mat-mdc-stroked-button,\n::ng-deep .mat-mdc-unelevated-button {\n  border-radius: 10px !important;\n  font-weight: 600;\n}\n::ng-deep .mat-mdc-progress-spinner circle {\n  stroke: #2563eb;\n}\n@media (max-width: 900px) {\n  .toolbar {\n    align-items: stretch;\n  }\n  .filters {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-input,\n  select.ctl {\n    width: 100%;\n    min-width: 100%;\n  }\n  .pagination {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-btns {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .col-actions {\n    text-align: left;\n  }\n  .modal {\n    width: calc(100vw - 20px);\n  }\n  .modal-body,\n  .modal-header,\n  .modal-footer {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n/*# sourceMappingURL=admin-user-management.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUserManagementComponent, { className: "AdminUserManagementComponent", filePath: "src/app/features/admin/admin-user-management/admin-user-management.component.ts", lineNumber: 20 });
})();
export {
  AdminUserManagementComponent
};
//# sourceMappingURL=chunk-UAG4XFCK.js.map
