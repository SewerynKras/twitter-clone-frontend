import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageInfoComponent } from './profile-page-info.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('ProfilePageInfoComponent', () => {
  let component: ProfilePageInfoComponent;
  let fixture: ComponentFixture<ProfilePageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageInfoComponent);
    component = fixture.componentInstance;
    component.user = { ...UserProfileMockResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the users website', () => {
    var _window = {
      location: {
        assign: jasmine.createSpy(),
      },
    };
    component.user.website = 'https://test.test';
    component.navigateToWebsite(_window);
    expect(_window.location.assign).toHaveBeenCalledWith('https://test.test');
  });

  it('should add the "https://" prefix if its not present in the users website during navigation', () => {
    var _window = {
      location: {
        assign: jasmine.createSpy(),
      },
    };
    component.user.website = 'test.test';
    component.navigateToWebsite(_window);
    expect(_window.location.assign).toHaveBeenCalledWith('https://test.test');
  });
});
