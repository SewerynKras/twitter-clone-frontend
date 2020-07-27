import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormUsernameComponent } from './login-form-username.component';

describe('LoginFormUsernameComponent', () => {
  let component: LoginFormUsernameComponent;
  let fixture: ComponentFixture<LoginFormUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
