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
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private auth: AuthService,
    private users: UsersService,
    private router: Router
  ) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
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
            this.router.navigate(['login']);
            return false;
          }
        )
      );
    this.router.navigate(['login']);
    return false;
  }
}
