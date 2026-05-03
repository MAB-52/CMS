import {
  Router
} from "./chunk-W4T3EBZ5.js";
import {
  HttpClient,
  Injectable,
  LoggerService,
  environment,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-QBB4LLCG.js";

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.router = inject(Router);
    this.logger = inject(LoggerService);
    this.tokenKey = "ciq_token";
    this.userKey = "ciq_user";
  }
  login(email, password) {
    return this.http.post(`${environment.apiUrl}/auth/login`, { email, password }).pipe(tap((res) => {
      if (res.success && res.data?.token) {
        localStorage.setItem(this.tokenKey, res.data.token);
        const user = {
          id: res.data.userId,
          fullName: res.data.fullName,
          email: res.data.email,
          role: res.data.role
        };
        localStorage.setItem(this.userKey, JSON.stringify(user));
        this.logger.info("AuthService", `Login successful | email=${res.data.email} role=${res.data.role}`);
      }
    }));
  }
  logout(options) {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.logger.info("AuthService", "Logout successful");
    if (options?.sessionExpired) {
      void this.router.navigate(["/login"], { queryParams: { reason: "session_expired" } });
    } else {
      void this.router.navigateByUrl("/login");
    }
  }
  getRedirectPath() {
    const role = this.getRole();
    if (role === "ADMIN") {
      return "/admin/dashboard";
    }
    if (role === "CHECKER") {
      return "/checker/dashboard";
    }
    return "/maker/dashboard";
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  getCurrentUser() {
    const raw = localStorage.getItem(this.userKey);
    if (!raw) {
      return null;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  getRole() {
    return this.getCurrentUser()?.role ?? "";
  }
  getUserId() {
    return this.getCurrentUser()?.id ?? 0;
  }
  isLoggedIn() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return !this.isTokenExpired(token);
  }
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      if (!decoded.exp) {
        return true;
      }
      return Date.now() >= decoded.exp * 1e3;
    } catch {
      return true;
    }
  }
  isMakerPortal() {
    return this.getRole() === "MAKER";
  }
  isCheckerPortal() {
    return this.getRole() === "CHECKER";
  }
  isAdminPortal() {
    return this.getRole() === "ADMIN";
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-7EWS7SGB.js.map
