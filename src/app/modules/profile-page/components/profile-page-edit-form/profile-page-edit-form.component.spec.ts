import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageEditFormComponent } from './profile-page-edit-form.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('ProfilePageEditFormComponent', () => {
  let component: ProfilePageEditFormComponent;
  let fixture: ComponentFixture<ProfilePageEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageEditFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the form values', () => {
    var prof = { ...UserProfileMockResponse };
    component.editForm.controls['username'].setValue(prof.username);
    component.editForm.controls['bio'].setValue(prof.bio);
    component.editForm.controls['display_name'].setValue(prof.display_name);
    component.editForm.controls['website'].setValue(prof.website);
    component.editForm.controls['birth_date'].setValue(prof.birth_date);
    var result = component.getValue();
    expect(result.bio).toEqual(prof.bio);
    expect(result.birth_date).toEqual(prof.birth_date);
    expect(result.username).toEqual(prof.username);
    expect(result.display_name).toEqual(prof.display_name);
    expect(result.website).toEqual(prof.website);
  });
});
