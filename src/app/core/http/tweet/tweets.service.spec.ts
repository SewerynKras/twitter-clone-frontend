import { TweetResponseListMockPage1 } from './../../mocks/tweet.mock';
import { TestBed } from '@angular/core/testing';

import { TweetsService } from './tweets.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('TweetsService', () => {
  let service: TweetsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TweetsService],
    });
    service = TestBed.inject(TweetsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tweets list', () => {
    service.getTweetsList().subscribe((tweets) => {
      expect(tweets).toEqual(TweetResponseListMockPage1);
    });

    const req = httpMock.expectOne(`${service.baseUrl}/`);
    expect(req.request.method).toBe('GET');
    req.flush(TweetResponseListMockPage1);
  });

  it('should create a new tweet', () => {});

  it('should get a single tweet', () => {});

  it('should get a list of profiles that have liked a selected tweet', () => {});

  it('should get a list of tweets that have retweeted a selected tweet', () => {});

  it('should get a list of tweets that have commented on a selected tweet', () => {});

  it('should get a selected tweets retweet', () => {});

  it('should get a selected tweets comment', () => {});

  it('should get a list of tweets created by a selected user', () => {});

  it('should delete a selected tweet', () => {});
});
