import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageBulletpointsComponent } from './login-page-bulletpoints.component';

describe('LoginPageBulletpointsComponent', () => {
  let component: LoginPageBulletpointsComponent;
  let fixture: ComponentFixture<LoginPageBulletpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageBulletpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageBulletpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
