import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { NotLoggedInGuard } from './not-logged-in.guard';

describe('NotLoggedInGuard', () => {
  let guard: NotLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    guard = TestBed.inject(NotLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should no permit access if the user is authenticated', () => {
    spyOn(guard['router'], 'navigate');
    spyOn(guard['auth'], 'isAuthenticated').and.returnValue(true);
    const canActivateChild = guard.canActivateChild(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );
    expect(canActivateChild).toEqual(false);
    expect(guard['router'].navigate).toHaveBeenCalledWith(['tweets']);
  });

  it('should permit access if the user is not authenticated', () => {
    spyOn(guard['router'], 'navigate');
    spyOn(guard['auth'], 'isAuthenticated').and.returnValue(false);
    const canActivateChild = guard.canActivateChild(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );
    expect(canActivateChild).toEqual(true);
    expect(guard['router'].navigate).not.toHaveBeenCalled();
  });
});
