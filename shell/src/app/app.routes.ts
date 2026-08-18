import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "auth",
    loadComponent: () =>
      import("./mfe-wrapper.component").then((m) => m.MfeWrapperComponent),
  },
  {
    path: "home",
    loadComponent: () =>
      import("./mfe-wrapper.component").then((m) => m.MfeWrapperComponent),
  },
  {
    path: "notification",
    loadComponent: () =>
      import("./mfe-wrapper.component").then((m) => m.MfeWrapperComponent),
  },
  {
    path: "preferences",
    loadComponent: () =>
      import("./mfe-wrapper.component").then((m) => m.MfeWrapperComponent),
  },
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "auth",
  },
];
