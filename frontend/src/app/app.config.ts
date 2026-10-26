import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
// import { QuillModule } from 'ngx-quill';
import { routes } from './app.routes';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { publicConsentCredentialsInterceptor } from './core/interceptors/public-consent-credentials.interceptor';
import { Action, ActionReducerMap, provideStore } from '@ngrx/store';

interface ConsentIqRootState {
  readonly bootstrapped: boolean;
}

function bootstrapReducer(
  state: ConsentIqRootState | undefined = { bootstrapped: true },
  _action: Action,
): ConsentIqRootState {
  return state;
}

const rootReducers: ActionReducerMap<{ consentIq: ConsentIqRootState }> = {
  consentIq: bootstrapReducer,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions({ skipInitialTransition: true })),
    // Interact Suite icon style: Material Icons Round (same ligature names as Material Icons).
    provideAppInitializer(() => {
      inject(MatIconRegistry).setDefaultFontSetClass('material-icons-round');
    }),
    provideHttpClient(
      withInterceptors([publicConsentCredentialsInterceptor, jwtInterceptor, loadingInterceptor]),
    ),
    provideAnimations(),
    provideNativeDateAdapter(),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' },
    },
    // importProvidersFrom(MatDialogModule, QuillModule.forRoot()),
        importProvidersFrom(MatDialogModule),
    provideStore(rootReducers),
  ],
};
