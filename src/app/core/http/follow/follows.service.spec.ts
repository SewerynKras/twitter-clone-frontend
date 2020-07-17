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
      .createFollow(FollowPOSTBodyMock.being_followed)
      .subscribe((response) => {
        expect(response).toEqual(FollowResponseMock);
      });

    const req = httpMock.expectOne(`${service.baseUrl}/`);
    expect(req.request.method).toBe('POST');
    req.flush(FollowResponseMock);
  });

  it('should delete a like object', () => {
    service.deleteFollow(FollowPOSTBodyMock.being_followed).subscribe(() => {
      expect().nothing();
    });

    const req = httpMock.expectOne(
      `${service.baseUrl}/${FollowPOSTBodyMock.being_followed}/`
    );
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
