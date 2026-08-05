import { Component, inject, NgZone, VERSION } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

declare global {
  var ngZone: NgZone;
}

interface MfeInfo {
  path: string;
  label: string;
  angularVersion: string;
  color: string;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "host";
  readonly angularVersion = VERSION.full;

  readonly mfeList: MfeInfo[] = [
    {
      path: "/mfe-1",
      label: "MFE-1",
      angularVersion: "17.3.12",
      color: "#ff6b6b",
    },
    {
      path: "/mfe-2",
      label: "MFE-2",
      angularVersion: "17.3.12",
      color: "#ffd93d",
    },
    {
      path: "/mfe-3",
      label: "MFE-3",
      angularVersion: "21.2.16",
      color: "#6bcb77",
    },
    {
      path: "/mfe-4",
      label: "MFE-4",
      angularVersion: "13.4.0",
      color: "#4d96ff",
    },
  ];

  constructor() {
    globalThis.ngZone = inject(NgZone);
  }
}
