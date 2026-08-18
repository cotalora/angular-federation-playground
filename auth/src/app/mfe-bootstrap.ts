import { ApplicationRef, ComponentRef } from "@angular/core";
import { createApplication } from "@angular/platform-browser";
import { appConfig } from "./app.config";
import { AppComponent } from "./app.component";

let appRef: ApplicationRef | null = null;
let componentRef: ComponentRef<AppComponent> | null = null;

export async function mount(hostElement: HTMLElement) {
  if (appRef) {
    return;
  }

  appRef = await createApplication({ providers: appConfig.providers });

  componentRef = appRef.bootstrap(AppComponent, hostElement);
}

export function destroy() {
  if (componentRef) {
    componentRef.destroy();
    componentRef = null;
  }

  if (appRef) {
    appRef.destroy();
    appRef = null;
  }
}
