import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "mfe-1",
    loadComponent: () =>
      import("./mfe-wrapper.component").then((m) => m.MfeWrapperComponent),
  },
  {
    path: "mfe-2",
    loadComponent: () =>
      import("./mfe-wrapper.component").then((m) => m.MfeWrapperComponent),
  },
  {
    path: "mfe-3",
    loadComponent: () =>
      import("./mfe-wrapper.component").then((m) => m.MfeWrapperComponent),
  },
  {
    path: "mfe-4",
    loadComponent: () =>
      import("./mfe-wrapper.component").then((m) => m.MfeWrapperComponent),
  },
  {
    path: "",
    redirectTo: "mfe-1",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "mfe-1",
  },
];
