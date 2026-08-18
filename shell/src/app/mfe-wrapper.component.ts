import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { loadRemoteModule } from "@angular-architects/module-federation";
import { NgIf } from "@angular/common";

interface MfeModule {
  mount: (el: HTMLElement) => Promise<void>;
  destroy: () => void;
}

const remoteMap: Record<string, string> = {
  auth: "auth",
  home: "home",
  notification: "notification",
  preferences: "preferences",
};

@Component({
  selector: "app-mfe-wrapper",
  standalone: true,
  imports: [NgIf],
  template: `
    <div #container></div>
    <p *ngIf="loading">Loading...</p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
      }
    `,
  ],
})
export class MfeWrapperComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);

  @ViewChild("container") container!: ElementRef<HTMLDivElement>;

  private static PATH_SLASH_REGEX = /^\//;

  private module: MfeModule | null = null;

  protected loading = true;

  async ngOnInit() {
    const [basePath] = this.router.url.split("?");

    const path = basePath.replace(MfeWrapperComponent.PATH_SLASH_REGEX, "");

    const remoteName = remoteMap[path] || path;

    this.module = (await loadRemoteModule(
      remoteName,
      "./Bootstrap"
    )) as MfeModule;

    await this.module?.mount(this.container.nativeElement);

    this.loading = false;
  }

  ngOnDestroy() {
    this.module?.destroy();
  }
}
