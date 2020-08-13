import { MatSnackBar } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ErrorPopupInterceptor } from './error-popup.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';

describe('ErrorPopupInterceptor', () => {
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ErrorPopupInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorPopupInterceptor,
          multi: true,
        },
        MatSnackBar,
        Overlay,
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const interceptor: ErrorPopupInterceptor = TestBed.inject(
      ErrorPopupInterceptor
    );
    expect(interceptor).toBeTruthy();
  });

  it('should open the snackbar when an error is thrown', inject(
    [HttpClient],
    (http: HttpClient) => {
      const interceptor: ErrorPopupInterceptor = TestBed.inject(
        ErrorPopupInterceptor
      );
      spyOn(interceptor['snackBar'], 'open');

      http.get('/dummyApi').subscribe(
        () => {},
        () => {}
      );

      const response = {
        status: 402,
        statusText: 'Unauthorized',
      };
      const request = httpMock.expectOne('/dummyApi');
      request.flush({}, response);
      expect(interceptor['snackBar'].open).toHaveBeenCalled();
    }
  ));

  it('should not open the snackbar if the error is 401', inject(
    [HttpClient],
    (http: HttpClient) => {
      const interceptor: ErrorPopupInterceptor = TestBed.inject(
        ErrorPopupInterceptor
      );
      spyOn(interceptor['snackBar'], 'open');

      http.get('/dummyApi').subscribe(
        () => {},
        () => {}
      );

      const response = {
        status: 401,
        statusText: 'Unauthorized',
      };
      const request = httpMock.expectOne('/dummyApi');
      request.flush({}, response);
      expect(interceptor['snackBar'].open).not.toHaveBeenCalled();
    }
  ));

  it('should not open the snackbar if there is no error', inject(
    [HttpClient],
    (http: HttpClient) => {
      const interceptor: ErrorPopupInterceptor = TestBed.inject(
        ErrorPopupInterceptor
      );
      spyOn(interceptor['snackBar'], 'open');

      http.get('/dummyApi').subscribe(
        () => {},
        () => {}
      );

      const request = httpMock.expectOne('/dummyApi');
      request.flush({});
      expect(interceptor['snackBar'].open).not.toHaveBeenCalled();
    }
  ));
});
