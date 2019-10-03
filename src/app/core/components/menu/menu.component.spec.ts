import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MenuComponent} from "./menu.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let $component = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports:[RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    $component = fixture.nativeElement;
  });

  afterEach(() => {
    $component.remove();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
