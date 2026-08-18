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
  title = "shell";
  readonly angularVersion = VERSION.full;

  readonly mfeList: MfeInfo[] = [
    {
      path: "/auth",
      label: "Auth",
      angularVersion: "17.3.12",
      color: "#ff6b6b",
    },
    {
      path: "/home",
      label: "Home",
      angularVersion: "17.3.12",
      color: "#ffd93d",
    },
    {
      path: "/notification",
      label: "Notification",
      angularVersion: "21.2.16",
      color: "#6bcb77",
    },
    {
      path: "/preferences",
      label: "Preferences",
      angularVersion: "13.4.0",
      color: "#4d96ff",
    },
  ];

  constructor() {
    globalThis.ngZone = inject(NgZone);
  }
}
