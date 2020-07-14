import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  TokenResponse,
  TokenPOSTBody,
} from 'src/app/shared/models/token.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /**
   * Sends a POST request to the backend that returns a TokenResponse object
   * containing the access and refresh tokens
   * @param username string
   * @param password string
   */
  login(username: string, password: string): Observable<TokenResponse> {
    let body: TokenPOSTBody = {
      username: username,
      password: password,
    };
    let url = `${environment.backendURL}/token/`;
    return this.http.post<TokenResponse>(url, body);
  }

  getAccessTokenFromStorage() {
    return '';
  }

  getRefreshTokenFromStorage() {
    return '';
  }

  refresh(): any {
    return;
  }
}
