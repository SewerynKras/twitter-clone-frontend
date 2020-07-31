import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TweetPageStatusComponent } from './tweet-page-status.component';

describe('TweetPageStatusComponent', () => {
  let component: TweetPageStatusComponent;
  let fixture: ComponentFixture<TweetPageStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetPageStatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageStatusComponent);
    component = fixture.componentInstance;
    component.tweet = { ...TweetResponseMock };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the comments and retweets sum', () => {
    component.tweet.comments = 2;
    component.tweet.retweets = 3;
    const result = component.getCommentsAndRetweetsCount();
    expect(result).toEqual(5);
  });

  it('should retrieve the tweet likes count', () => {
    component.tweet.likes = 2;
    const result = component.getTweetLikesCount();
    expect(result).toEqual(2);
  });

  it('should increase the comments and retweets sum', () => {
    component.tweet.comments = 2;
    component.tweet.retweets = 3;
    component.commentsAndRetweetsCount = component.getCommentsAndRetweetsCount();
    component.increaseCommentsAndRetweetsCounter();
    expect(component.commentsAndRetweetsCount).toEqual(6);
  });

  it('should increase the tweet likes count', () => {
    component.tweet.likes = 2;
    component.tweetLikesCount = component.getTweetLikesCount();
    component.changeLikesCounter(true);
    expect(component.tweetLikesCount).toEqual(3);
  });

  it('should decrease the tweet likes count', () => {
    component.tweet.likes = 2;
    component.changeLikesCounter(false);
    expect(component.tweetLikesCount).toEqual(1);
  });
});
