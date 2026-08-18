import { ApplicationRef, ComponentRef, createComponent } from "@angular/core";
import { createApplication } from "@angular/platform-browser";
import { App } from "./app.component";
import { appConfig } from "./app.config";

let appRef: ApplicationRef | null = null;
let componentRef: ComponentRef<App> | null = null;

export async function mount(hostElement: HTMLElement) {
  if (appRef) {
    return;
  }

  appRef = await createApplication({ providers: appConfig.providers });

  componentRef = createComponent(App, {
    environmentInjector: appRef.injector,
    hostElement,
  });

  appRef.attachView(componentRef.hostView);
  componentRef.changeDetectorRef.detectChanges();
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
