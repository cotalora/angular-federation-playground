import { loadRemoteModule } from "@angular-architects/module-federation";
import { AfterViewInit, Component, VERSION } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements AfterViewInit {
  title = "mfe-1";
  readonly angularVersion = VERSION.full;

  async ngAfterViewInit() {
    try {
      const mod = await loadRemoteModule({
        type: "module",
        remoteEntry: "http://localhost:4203/remoteEntry.js",
        exposedModule: "./Service",
      });

      const a = await mod.greet();
      console.log(a);
    } catch {
      console.log("Error loading remote service");
    }
  }
}
