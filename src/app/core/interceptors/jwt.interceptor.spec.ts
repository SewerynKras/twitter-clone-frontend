import { TestBed, inject } from '@angular/core/testing';

import { JwtInterceptor } from './jwt.interceptor';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

describe('JwtInterceptor', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true,
        },
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add auth header to each request', inject(
    [HttpClient],
    (http: HttpClient) => {
      localStorage.setItem('access', '1234');

      http
        .get('/dummyApi')
        .subscribe((response) => expect(response).toBeTruthy());

      const request = httpMock.expectOne('/dummyApi');
      expect(request.request.headers.get('Authorization')).toEqual(
        'Bearer 1234'
      );
      request.flush({});
    }
  ));

  it('should not add the auth header if access token is not found in localstorage', inject(
    [HttpClient],
    (http: HttpClient) => {
      http
        .get('/dummyApi')
        .subscribe((response) => expect(response).toBeTruthy());

      const request = httpMock.expectOne('/dummyApi');
      expect(request.request.headers.get('Authorization')).toEqual(null);
      request.flush({});
    }
  ));
});
