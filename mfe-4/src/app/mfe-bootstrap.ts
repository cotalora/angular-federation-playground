import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  NgModuleRef,
} from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app.component";
import { MfeModule } from "./mfe.module";

let appRef: ApplicationRef | null = null;
let moduleRef: NgModuleRef<MfeModule> | null = null;
let componentRef: ComponentRef<AppComponent> | null = null;

export async function mount(hostElement: HTMLElement) {
  if (appRef) {
    return;
  }

  moduleRef = await platformBrowserDynamic().bootstrapModule(MfeModule);
  appRef = moduleRef.injector.get(ApplicationRef);

  const factory = moduleRef.injector
    .get(ComponentFactoryResolver)
    .resolveComponentFactory(AppComponent);

  componentRef = factory.create(moduleRef.injector, [], hostElement);
  appRef.attachView(componentRef.hostView);
}

export function destroy() {
  if (componentRef) {
    componentRef.destroy();
    componentRef = null;
  }
  if (moduleRef) {
    moduleRef.destroy();
    moduleRef = null;
    appRef = null;
  }
}
