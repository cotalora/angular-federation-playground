import { ApplicationRef, ComponentRef } from "@angular/core";
import { createApplication } from "@angular/platform-browser";
import { appConfig } from "./app.config";
import { AppComponent } from "./app.component";
import { MfeBootstrapModule } from "@playground/platform-contracts";

export class MfeBootstrap implements MfeBootstrapModule {
  private appRef: ApplicationRef | null = null;
  private componentRef: ComponentRef<AppComponent> | null = null;

  async mount(hostElement: HTMLElement): Promise<void> {
    if (this.appRef) {
      return;
    }

    this.appRef = await createApplication({ providers: appConfig.providers });

    this.componentRef = this.appRef.bootstrap(AppComponent, hostElement);
  }

  destroy(): void {
    this.componentRef?.destroy();
    this.componentRef = null;

    this.appRef?.destroy();
    this.appRef = null;
  }
}

export const { mount, destroy } = new MfeBootstrap();
