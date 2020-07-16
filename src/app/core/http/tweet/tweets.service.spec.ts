import { TestBed } from '@angular/core/testing';

import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tweets list', () => {});

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
