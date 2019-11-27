import { AppConfig } from "./app.config.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

/* Angular Material */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material.module";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER
} from "@angular/core";

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from "./components/log-in/log-in.component";
import { MatchComponent } from "./components/match/match.component";
import { MatchCandidateComponent } from "./components/match-candidate/match-candidate.component";
import { MatchMadeComponent } from "./components/match-made/match-made.component";
import { SplitPipe } from "./components/match-candidate/split-pipe";

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MatchComponent,
    MatchCandidateComponent,
    MatchMadeComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

export function initializeApp(config: AppConfig) {
  return () => config.load();
}
