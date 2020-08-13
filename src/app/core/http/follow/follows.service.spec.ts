import {
  FollowPOSTBodyMock,
  FollowResponseMock,
} from './../../mocks/follow.mock';
import { TestBed } from '@angular/core/testing';

import { FollowsService } from './follows.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ProfileListMockResponsePage1 } from '../../mocks/user.mock';

describe('FollowsService', () => {
  let service: FollowsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FollowsService],
    });
    service = TestBed.inject(FollowsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a like object', () => {
    service
      .createFollow({ username: FollowPOSTBodyMock.being_followed })
      .subscribe((response) => {
        expect(response).toEqual(FollowResponseMock);
      });

    const req = httpMock.expectOne(`${service.baseUrl}/`);
    expect(req.request.method).toBe('POST');
    req.flush(FollowResponseMock);
  });

  it('should delete a like object', () => {
    service
      .deleteFollow({ username: FollowPOSTBodyMock.being_followed })
      .subscribe(() => {
        expect().nothing();
      });

    const req = httpMock.expectOne(
      `${service.baseUrl}/${FollowPOSTBodyMock.being_followed}/`
    );
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should get profile recommendations', () => {
    service.getFollowRecommendations({}).subscribe((profiles) => {
      expect(profiles).toEqual({ ...ProfileListMockResponsePage1 });
    });

    const req = httpMock.expectOne(`${service.baseUrl}/getRecommendations/`);
    expect(req.request.method).toBe('GET');
    req.flush({ ...ProfileListMockResponsePage1 });
  });
});
