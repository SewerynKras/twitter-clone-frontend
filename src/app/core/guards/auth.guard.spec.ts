import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not permit access if the user is not authenticated', () => {
    spyOn(guard['auth'], 'isAuthenticated').and.returnValue(false);
    spyOn(guard['router'], 'navigate');
    const canActivateChild = guard.canActivateChild(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );
    expect(canActivateChild).toEqual(false);
    expect(guard['router'].navigate).toHaveBeenCalledWith(['login']);
  });

  it('should permit access if the user is authenticated', () => {
    spyOn(guard['auth'], 'isAuthenticated').and.returnValue(true);
    spyOn(guard['users'], 'getMyProfile').and.returnValue(of());
    spyOn(guard['auth'], 'sendLoginSignal');
    const canActivateChild = guard.canActivateChild(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    ) as Observable<boolean>;
    canActivateChild.subscribe((val) => {
      expect(val).toEqual(true);
      expect(guard['auth'].isAuthenticated).toHaveBeenCalled();
      expect(guard['auth'].sendLoginSignal).toHaveBeenCalled();
      expect(guard['users'].getMyProfile).toHaveBeenCalled();
    });
  });
});