import { ApplicationConfig, NgZone } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

declare global {
  var ngZone: NgZone;
}

const ngZoneProvider = [
  ...(globalThis.ngZone
    ? [{ provide: NgZone, useValue: globalThis.ngZone }]
    : []),
];

export const appConfig: ApplicationConfig = {
  providers: [ngZoneProvider, provideRouter(routes)],
};
