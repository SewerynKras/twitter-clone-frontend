import { map } from 'rxjs/operators';
import { UsersService } from './../http/user/users.service';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  Router,
  CanLoad,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild, CanLoad, CanActivate {
  constructor(
    private auth: AuthService,
    private users: UsersService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivateChild(next, state);
  }

  canLoad(route: Route) {
    return this.canActivateChild();
  }

  canActivateChild(
    next?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot
  ): Observable<boolean> {
    // Check if the user is authenticated (token is saved in localstorage)
    if (this.auth.isAuthenticated())
      // Load the base user info from the server before proceeding
      return this.users.getMyProfile({}).pipe(
        map(
          (_) => {
            this.auth.sendLoginSignal();
            return true;
          },
          // If the token is corrupted/invalid return false to force the user to re-authenticate
          (_) => {
            // remove the corrupted data
            this.auth.sendLogoutSignal();
            // force the user to re-authenticate
            this.router.navigate(['login']);
            return false;
          }
        )
      );
    else {
      this.router.navigate(['login']);
      // Return an observable rather then the value itself to ensure consistency
      // (this method ALWAYS returns an observable)
      return of(false);
    }
  }
}
