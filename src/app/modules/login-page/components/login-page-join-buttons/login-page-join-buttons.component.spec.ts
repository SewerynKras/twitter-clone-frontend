import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageJoinButtonsComponent } from './login-page-join-buttons.component';

describe('LoginPageJoinButtonsComponent', () => {
  let component: LoginPageJoinButtonsComponent;
  let fixture: ComponentFixture<LoginPageJoinButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageJoinButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageJoinButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
