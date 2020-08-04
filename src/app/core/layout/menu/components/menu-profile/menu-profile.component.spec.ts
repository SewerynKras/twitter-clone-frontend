import { MenuProfileDialogComponent } from './../menu-profile-dialog/menu-profile-dialog.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfileComponent } from './menu-profile.component';

describe('MenuProfileComponent', () => {
  let component: MenuProfileComponent;
  let fixture: ComponentFixture<MenuProfileComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MenuProfileComponent, MenuProfileDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProfileComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should not get the users profile if they're not logged in", () => {
    component.user$.subscribe((userProfile) => {
      expect(1).toEqual(2);
    });
  });

  it("should get the users profile if they're logged in", () => {
    component.user$.subscribe((userProfile) => {
      expect(userProfile).toEqual(UserProfileMockResponse);
    });

    spyOn(
      component['usersService'],
      'getBaseUserInfoFromStorage'
    ).and.returnValue({ ...UserProfileMockResponse });
    component['usersService'].updateUserInfoInLocalStorage(
      UserProfileMockResponse
    );
    component['auth'].sendLoginSignal();
  });

  it('should open the nested dialog', () => {
    component.dialog = jasmine.createSpyObj('dialog', [
      'openMenu',
      'closeMenu',
    ]);
    component.openDialog();
    expect(component.dialog.openMenu).toHaveBeenCalled();
  });
});
