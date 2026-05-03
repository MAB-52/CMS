import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { QuillModule } from 'ngx-quill';
import { routes } from './app.routes';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
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
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([jwtInterceptor, loadingInterceptor])),
    provideAnimations(),
    provideNativeDateAdapter(),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' },
    },
    importProvidersFrom(MatDialogModule, QuillModule.forRoot()),
    provideStore(rootReducers),
  ],
};
