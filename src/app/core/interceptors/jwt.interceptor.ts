import { environment } from './../../../environments/environment';
import { TokenInvalidExpiredResponse } from './../../shared/models/token.model';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { catchError, flatMap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.auth.getAccessTokenFromStorage();

    if (!token || request.url.startsWith(`${environment.backendURL}/token/`)) {
      return next.handle(request);
    }
    return next
      .handle(
        request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`),
        })
      )
      .pipe(
        catchError((err) => {
          // Catch a 401 TOKEN EXPIRED error, get a fresh access token and retry
          if (err.status == 401)
            // Obtain a new token
            return this.auth.refresh().pipe(
              flatMap((newToken) => {
                // Retry the request
                return next.handle(
                  request.clone({
                    headers: request.headers.set(
                      'Authorization',
                      `Bearer ${newToken.access}`
                    ),
                  })
                );
              })
            );
          // throw the error again otherwise
          else return throwError(err);
        })
      );
  }
  retryIfExpired() {}
}
