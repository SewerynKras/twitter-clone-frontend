import { LikePOSTBodyMock, LikeResponseMock } from './../../mocks/like.mock';
import { TestBed } from '@angular/core/testing';

import { LikesService } from './likes.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('LikesService', () => {
  let service: LikesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LikesService],
    });
    service = TestBed.inject(LikesService);
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
      .createLike({ tweet_id: LikePOSTBodyMock.tweet_id })
      .subscribe((response) => {
        expect(response).toEqual(LikeResponseMock);
      });

    const req = httpMock.expectOne(`${service.baseUrl}/`);
    expect(req.request.method).toBe('POST');
    req.flush(LikeResponseMock);
  });

  it('should delete a like object', () => {
    service
      .deleteLike({ tweet_id: LikePOSTBodyMock.tweet_id })
      .subscribe(() => {
        expect().nothing();
      });

    const req = httpMock.expectOne(
      `${service.baseUrl}/${LikePOSTBodyMock.tweet_id}/`
    );
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
