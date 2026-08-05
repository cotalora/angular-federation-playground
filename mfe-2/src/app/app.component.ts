import { Component, VERSION } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "mfe-2";
  readonly angularVersion = VERSION.full;
}
