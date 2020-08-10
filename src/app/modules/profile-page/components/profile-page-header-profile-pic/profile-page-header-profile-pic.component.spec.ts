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
});
