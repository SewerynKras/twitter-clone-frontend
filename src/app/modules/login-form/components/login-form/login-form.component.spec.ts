import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenResponseMock } from './../../../../core/mocks/token.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [LoginFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authenticate when submitting the form', () => {
    spyOn(component, 'authenticate');
    component.onSubmit();
    expect(component.authenticate).toHaveBeenCalled();
  });

  it('should get all the forms data', () => {
    component.loginForm.controls['username'].setValue('someUsername');
    component.loginForm.controls['password'].setValue('somePassword123');
    const result = component.getFormData();
    expect(result['username']).toEqual('someUsername');
    expect(result['password']).toEqual('somePassword123');
  });

  it('should authenticate the user correctly', () => {
    component.loginForm.controls['username'].setValue('someUsername');
    component.loginForm.controls['password'].setValue('somePassword123');
    spyOn(component['authService'], 'login').and.returnValue(
      of({ ...UserProfileMockResponse })
    );

    component.authenticate();

    expect(component['authService'].login).toHaveBeenCalledWith(
      'someUsername',
      'somePassword123'
    );
  });

  it('should display an error message if authentication fails', () => {
    expect(component.hasError).toEqual(false);
    spyOn(component['authService'], 'login').and.returnValue(throwError(''));
    component.authenticate();
    expect(component.hasError).toEqual(true);
  });
});
