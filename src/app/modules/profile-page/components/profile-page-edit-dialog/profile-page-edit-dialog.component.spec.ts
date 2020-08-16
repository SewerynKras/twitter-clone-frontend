import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from './../../../../../environments/environment';
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
import { DatePipe } from '@angular/common';

describe('ProfilePageEditDialogComponent', () => {
  let component: ProfilePageEditDialogComponent;
  let fixture: ComponentFixture<ProfilePageEditDialogComponent>;
  const dummyImg = new File(['123'], 'name');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProfilePageEditDialogComponent],
      providers: [
        DatePipe,
        {
          provide: MAT_DIALOG_DATA,
          useValue: { ...UserProfileMockResponse },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageEditDialogComponent);
    component = fixture.componentInstance;
    component.form = ({
      getValue: jasmine.createSpy('getValueForm').and.returnValue({
        ...UserProfilePATCHBodyMock,
      }),
      setupInitValues: jasmine.createSpy('setupInitValues'),
    } as any) as ProfilePageEditFormComponent;
    component.image = ({
      getValue: jasmine.createSpy('getValueImg').and.returnValue(dummyImg),
      setupInitValues: jasmine.createSpy('setupInitValues'),
    } as any) as ProfilePageEditFormImageComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the form data', () => {
    const result = component.getFormData();
    expect(result).toEqual({ ...UserProfilePATCHBodyMock });
  });

  it('should get the image data', () => {
    const result = component.getImage();
    expect(result).toEqual(dummyImg);
  });

  it('should update the users info', () => {
    spyOn(component['usersService'], 'updateMyProfile').and.returnValue(
      of({ ...UserProfileMockResponse })
    );
    var _window = {
      location: {
        assign: jasmine.createSpy(),
      },
    };
    var expectedBody = { ...UserProfilePATCHBodyMock };
    expectedBody['image'] = dummyImg;

    component.saveDialogData(_window);
    expect(component['usersService'].updateMyProfile).toHaveBeenCalledWith({
      body: expectedBody,
    });
    expect(_window.location.assign).toHaveBeenCalledWith(
      `${environment.frontendURL}/profile/${UserProfileMockResponse.username}/`
    );
  });

  it('should setup the initial values', () => {
    var prof = { ...UserProfileMockResponse };
    component.setupInitValues(prof);
    expect(component['form'].setupInitValues).toHaveBeenCalledWith(prof);
    expect(component['image'].setupInitValues).toHaveBeenCalledWith(
      prof['image_url']
    );
  });
});
