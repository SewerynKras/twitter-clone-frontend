import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsRetweetButtonComponent } from './tweet-object-actions-retweet-button.component';

describe('TweetObjectActionsRetweetButtonComponent', () => {
  let component: TweetObjectActionsRetweetButtonComponent;
  let fixture: ComponentFixture<TweetObjectActionsRetweetButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectActionsRetweetButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsRetweetButtonComponent);
    component = fixture.componentInstance;
    component.tweet = TweetResponseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
