import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./angular-material.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppConfig } from "./app.config.service";

describe("AppComponent", () => {
  beforeEach(async(() => {
    AppConfig.settings = {
      environmentName: "develop",
      endPointApiUrl: "http://localhost:5000",
      version: "0.0.1"
    };
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Darling wherefore art thou my love'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Darling wherefore art thou my love");
  });
});
