import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageFooterComponent } from './login-page-footer.component';

describe('LoginPageFooterComponent', () => {
  let component: LoginPageFooterComponent;
  let fixture: ComponentFixture<LoginPageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
