import { Component, OnInit } from "@angular/core";
import { AppConfig } from "./app.config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Darling wherefore art thou my love";
  clientVersion = AppConfig.settings.version;
  serverVersion = AppConfig.settings.serverVersion;
}
