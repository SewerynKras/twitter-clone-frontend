import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfilePageEditFormImageComponent } from './../profile-page-edit-form-image/profile-page-edit-form-image.component';
import { ProfilePageEditFormComponent } from './../profile-page-edit-form/profile-page-edit-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageEditDialogComponent } from './profile-page-edit-dialog.component';
import {
  UserProfilePATCHBodyMock,
  UserProfileMockResponse,
} from 'src/app/core/mocks/user.mock';

describe('ProfilePageEditDialogComponent', () => {
  let component: ProfilePageEditDialogComponent;
  let fixture: ComponentFixture<ProfilePageEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProfilePageEditDialogComponent],
      providers: [
        ProfilePageEditFormComponent,
        ProfilePageEditFormImageComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the form data', () => {
    spyOn(component['form'], 'getValue').and.returnValue({
      ...UserProfilePATCHBodyMock,
    });
    const result = component.getFormData();
    expect(result).toEqual({ ...UserProfilePATCHBodyMock });
  });

  it('should get the image data', () => {
    const img = new File(['123'], 'name');
    spyOn(component['image'], 'getImage').and.returnValue(img);
    const result = component.getImage();
    expect(result).toEqual(img);
  });

  it('should update the users info', () => {
    spyOn(component['usersService'], 'updateMyProfile').and.returnValue(
      of({ ...UserProfileMockResponse })
    );
    spyOn(component['form'], 'getValue').and.returnValue({
      ...UserProfilePATCHBodyMock,
    });
    const img = new File(['123'], 'name');
    spyOn(component['image'], 'getImage').and.returnValue(img);

    var expectedBody = { ...UserProfilePATCHBodyMock };
    expectedBody['image'] = img;

    component.saveDialogData();
    expect(component['usersService'].updateMyProfile).toHaveBeenCalledWith({
      body: expectedBody,
    });
  });
});
