import { environment } from './../../../../environments/environment';
import {
  UserProfileMockResponse,
  ProfileListMockResponsePage1,
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

  it('should retrieve a list of profiles', () => {
    service.getProfilesList().subscribe((profiles) => {
      expect(profiles).toEqual(ProfileListMockResponsePage1);
    });

    const req = httpMock.expectOne(`${service.profileUrl}/`);
    expect(req.request.method).toBe('GET');
    req.flush(ProfileListMockResponsePage1);
  });
  it('should update my profile', () => {});

  it('should create a new profile', () => {});

  it('should retrieve someones profile', () => {});

  it('should retrieve someones followers list', () => {});

  it('should retrieve someones following list', () => {});
});
