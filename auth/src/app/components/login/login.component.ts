import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  protected email = "";
  protected password = "";

  protected login(): void {
    if (!this.email.trim() || !this.password.trim()) {
      return;
    }

    window.location.assign("/home");
  }
}
