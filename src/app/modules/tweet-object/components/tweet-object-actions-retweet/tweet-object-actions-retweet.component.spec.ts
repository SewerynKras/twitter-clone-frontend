import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsRetweetComponent } from './tweet-object-actions-retweet.component';
import { TweetResponseMock } from 'src/app/core/mocks/tweet.mock';

describe('TweetObjectActionsRetweetComponent', () => {
  let component: TweetObjectActionsRetweetComponent;
  let fixture: ComponentFixture<TweetObjectActionsRetweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectActionsRetweetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsRetweetComponent);
    component = fixture.componentInstance;
    component.tweet = TweetResponseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the retweets counter', () => {
    let retweetsBefore = component.tweet.retweets;
    component.increaseRetweetsCounter();
    expect(component.tweet.retweets).toEqual(retweetsBefore + 1);
  });
});
