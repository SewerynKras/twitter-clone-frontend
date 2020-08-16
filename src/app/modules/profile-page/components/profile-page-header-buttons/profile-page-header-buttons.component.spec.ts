import { BaseUserProfile } from './../../../../shared/models/user.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeaderButtonsComponent } from './profile-page-header-buttons.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';
import { DatePipe } from '@angular/common';

describe('ProfilePageHeaderButtonsComponent', () => {
  let component: ProfilePageHeaderButtonsComponent;
  let fixture: ComponentFixture<ProfilePageHeaderButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProfilePageHeaderButtonsComponent],
      providers: [DatePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageHeaderButtonsComponent);
    component = fixture.componentInstance;
    component.user = { ...UserProfileMockResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compare the currently logged in user with the selected one', () => {
    var profile1: BaseUserProfile = {
      display_name: 'test 123',
      username: 'test123',
      image_url: 'www.www.www',
    };
    spyOn(
      component['usersService'],
      'getBaseUserInfoFromStorage'
    ).and.returnValue(profile1);
    spyOn(component['usersService'], 'checkIfUsersAreEqual');
    component.compareUsers();

    expect(component['usersService'].checkIfUsersAreEqual).toHaveBeenCalledWith(
      { ...UserProfileMockResponse },
      profile1
    );
  });
});
