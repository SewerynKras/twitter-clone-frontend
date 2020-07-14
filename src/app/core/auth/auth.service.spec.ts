import { environment } from '../../../environments/environment';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { of } from 'rxjs';
import {
  TokenRefreshResponseMock,
  TokenResponseMock,
} from '../mocks/token.mock';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should receive both tokens if credentials are correct', () => {
    service.login('correct', 'correct').subscribe((tokenResponse) => {
      expect(tokenResponse).toEqual(TokenResponseMock);
    });

    const req = httpMock.expectOne(`${environment.backendURL}/token/`);
    expect(req.request.method).toBe('POST');
    req.flush(TokenResponseMock);
  });

  it('should throw an error if the credentials are incorrect', () => {
    service.login('incorrect', 'incorrect').subscribe(
      () => {},
      (err) => {
        expect(err.status).toEqual(401);
      }
    );

    const response = {
      status: 401,
      statusText: 'Unauthorized',
    };
    const data = {
      detail: 'No active account found with the given credentials',
    };
    const req = httpMock.expectOne(`${environment.backendURL}/token/`);
    expect(req.request.method).toBe('POST');
    req.flush(data, response);
  });
  //it('should store both tokens in local storage', () => {});
  //
  //it('should obtain a new access token from the refresh endpoint', () => {});
  //
  //it('should throw an error if the refresh token is incorrect', () => {});
});
