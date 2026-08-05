import { NgModule, NgZone } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [
    ...((globalThis as any).ngZone
      ? [{ provide: NgZone, useValue: (globalThis as any).ngZone }]
      : []),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
