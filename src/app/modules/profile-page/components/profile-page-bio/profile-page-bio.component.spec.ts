import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageBioComponent } from './profile-page-bio.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('ProfilePageBioComponent', () => {
  let component: ProfilePageBioComponent;
  let fixture: ComponentFixture<ProfilePageBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageBioComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageBioComponent);
    component = fixture.componentInstance;
    component.user = { ...UserProfileMockResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
