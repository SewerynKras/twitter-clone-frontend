import { environment } from './../../../../environments/environment';
import {
  UserProfileMockResponse,
  ProfileListMockResponsePage1,
  UserProfilePATCHBodyMock,
  UserProfilePOSTBodyMock,
  UserProfilePATCHResponseMock,
  UserProfilePOSTResponseMock,
} from './../../mocks/user.mock';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve my profile', () => {
    service.getMyProfile().subscribe((profile) => {
      expect(profile).toEqual(UserProfileMockResponse);
    });

    const req = httpMock.expectOne(`${service.baseUrl}/getMyProfile/`);
    expect(req.request.method).toBe('GET');
    req.flush(UserProfileMockResponse);
  });

  it('should store base profile info in local storage', () => {
    service.getMyProfile().subscribe((_) => {
      let userInfo = service.getBaseUserInfoFromStorage();
      expect(userInfo.username).toEqual(UserProfileMockResponse.username);
      expect(userInfo.display_name).toEqual(
        UserProfileMockResponse.display_name
      );
      expect(userInfo.image_url).toEqual(UserProfileMockResponse.image_url);
    });

    const req = httpMock.expectOne(`${service.baseUrl}/getMyProfile/`);
    expect(req.request.method).toBe('GET');
    req.flush(UserProfileMockResponse);
  });

  it('should retrieve a list of profiles', () => {
    service.getProfilesList().subscribe((profiles) => {
      expect(profiles).toEqual(ProfileListMockResponsePage1);
    });

    const req = httpMock.expectOne(`${service.profileUrl}/`);
    expect(req.request.method).toBe('GET');
    req.flush(ProfileListMockResponsePage1);
  });

  it('should update my profile', () => {
    localStorage.setItem('profile.username', 'user');
    service.updateMyProfile(UserProfilePATCHBodyMock).subscribe((profile) => {
      expect(profile).toEqual(UserProfilePATCHResponseMock);
    });

    const req = httpMock.expectOne(`${service.profileUrl}/user/`);
    expect(req.request.method).toBe('PATCH');
    req.flush(UserProfilePATCHResponseMock);
  });

  it('should update the locally saved info after updating my profile', () => {
    localStorage.setItem('profile.username', 'user');
    service.updateMyProfile(UserProfilePATCHBodyMock).subscribe((_) => {
      let user = service.getBaseUserInfoFromStorage();
      expect(user.username).toEqual(UserProfilePATCHResponseMock.username);
      expect(user.display_name).toEqual(
        UserProfilePATCHResponseMock.display_name
      );
      expect(user.image_url).toEqual(UserProfilePATCHResponseMock.image_url);
    });

    const req = httpMock.expectOne(`${service.profileUrl}/user/`);
    expect(req.request.method).toBe('PATCH');
    req.flush(UserProfilePATCHResponseMock);
  });

  it('should create a new profile', () => {
    service.createProfile(UserProfilePOSTBodyMock).subscribe((profile) => {
      expect(profile).toEqual(UserProfilePOSTResponseMock);
    });

    const req = httpMock.expectOne(`${service.profileUrl}/`);
    expect(req.request.method).toBe('POST');
    req.flush(UserProfilePOSTResponseMock);
  });

  it('should update the locally saved info after creating a profile', () => {
    service.createProfile(UserProfilePOSTBodyMock).subscribe((_) => {
      let user = service.getBaseUserInfoFromStorage();
      expect(user.username).toEqual(UserProfilePOSTResponseMock.username);
      expect(user.display_name).toEqual(
        UserProfilePOSTResponseMock.display_name
      );
      expect(user.image_url).toEqual(UserProfilePOSTResponseMock.image_url);
    });

    const req = httpMock.expectOne(`${service.profileUrl}/`);
    expect(req.request.method).toBe('POST');
    req.flush(UserProfilePOSTResponseMock);
  });

  it('should retrieve someones profile', () => {});

  it('should retrieve someones followers list', () => {});

  it('should retrieve someones following list', () => {});
});
