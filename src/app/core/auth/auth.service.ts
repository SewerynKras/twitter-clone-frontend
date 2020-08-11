import { UserProfileResponse } from './../../shared/models/user.model';
import { UsersService } from './../http/user/users.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {
  TokenResponse,
  TokenPOSTBody,
  TokenRefreshPOSTBody,
  TokenRefreshResponse,
} from 'src/app/shared/models/token.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // this will emit `false` when the user logs out and `true`  when they log in
  private loginStatusChangeSource = new BehaviorSubject<boolean>(false);
  public loginStatusChange = this.loginStatusChangeSource.asObservable();

  constructor(private http: HttpClient, private usersService: UsersService) {}

  /**
   * Sends a POST request to the backend that returns a TokenResponse object
   * containing the access and refresh tokens.
   * After a successful login the observable switches to `usersService.getMyProfile` in order
   * to retrieve basic user information.
   * @param username string
   * @param password string
   */
  login(username: string, password: string): Observable<UserProfileResponse> {
    let body: TokenPOSTBody = {
      username: username,
      password: password,
    };
    let url = `${environment.backendURL}/token/`;
    return this.http.post<TokenResponse>(url, body).pipe(
      map((tokens) => {
        // store the tokens in localstorage and return them to the pipe
        localStorage.setItem('access', tokens.access);
        localStorage.setItem('refresh', tokens.refresh);
      }),
      switchMap((_) => this.usersService.getMyProfile({})),
      map((profile) => {
        // notify other components that the user has successfully logged in
        this.sendLoginSignal();
        return profile;
      })
    );
  }
  /**
   * Retrieves the access token from localstorage (returns null if it's not present)
   */
  getAccessTokenFromStorage(): string | null {
    return localStorage.getItem('access');
  }

  /**
   * Retrieves the refresh token from localstorage (returns null if it's not present)
   */
  getRefreshTokenFromStorage(): string | null {
    return localStorage.getItem('refresh');
  }

  /**
   * Obtains a new access token from the api by using the stored
   * refresh token
   */
  refresh(): Observable<TokenRefreshResponse> {
    let body: TokenRefreshPOSTBody = {
      refresh: this.getRefreshTokenFromStorage(),
    };
    let url = `${environment.backendURL}/token/refresh/`;
    return this.http.post<TokenRefreshResponse>(url, body).pipe(
      map((token) => {
        // store the token in localstorage and return it to the pipe
        localStorage.setItem('access', token.access);
        return token;
      })
    );
  }

  /**
   * Removes saved tokens from localstorage
   */
  logout(): void {
    // notify other components that the user has successfully logged out
    this.sendLogoutSignal();
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }

  isAuthenticated(): boolean {
    // if either token is missing the user is considered not logged in
    return !(
      this.getAccessTokenFromStorage() == null ||
      this.getRefreshTokenFromStorage() == null
    );
  }

  /**
   * Makes the `loginStatusChangeSource` behavior subject emit `true` indicating
   * that the user has successfully logged in
   */
  sendLoginSignal(): void {
    this.loginStatusChangeSource.next(true);
  }
  /**
   * Makes the `loginStatusChangeSource` behavior subject emit `false` indicating
   * that the user has successfully logged out
   */
  sendLogoutSignal(): void {
    this.loginStatusChangeSource.next(false);
  }
}
