import { enableProdMode, ErrorHandler, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import { AppComponent } from '@angular-tetris/app.component';
import { environment } from './environments/environment';

const initSentry = () => {
  Sentry.init({
    autoSessionTracking: true,
    integrations: [
      new Integrations.BrowserTracing({
        tracingOrigins: ['localhost'],
        routingInstrumentation: Sentry.routingInstrumentation
      })
    ],
    tracesSampleRate: 1.0
  });
};

if (environment.production) {
  enableProdMode();
  initSentry();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AkitaNgDevtools.forRoot()),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler()
    }
  ]
});
