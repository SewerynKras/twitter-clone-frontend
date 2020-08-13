import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeaderProfilePicComponent } from './profile-page-header-profile-pic.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('ProfilePageHeaderProfilePicComponent', () => {
  let component: ProfilePageHeaderProfilePicComponent;
  let fixture: ComponentFixture<ProfilePageHeaderProfilePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageHeaderProfilePicComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageHeaderProfilePicComponent);
    component = fixture.componentInstance;
    component.user = { ...UserProfileMockResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resize the image correctly', () => {
    spyOn(component['resize'], 'applyTransform');
    component.getImageResized();
    expect(component['resize'].applyTransform).toHaveBeenCalledWith(
      { ...UserProfileMockResponse }.image_url,
      140,
      140
    );
  });

  it('should get the default profile pic if the url attribute is empty', () => {
    component.user = { ...UserProfileMockResponse };
    component.user.image_url = '';
    const result = component.getImageSrc();
    expect(result).toEqual('assets/profilepic.png');
  });

  it('should get the resized image if the url attribute is present', () => {
    component.user = { ...UserProfileMockResponse };
    component.user.image_url = 'test.test';
    spyOn(component['resize'], 'applyTransform');
    const result = component.getImageSrc();
    expect(component['resize'].applyTransform).toHaveBeenCalled();
  });
});
