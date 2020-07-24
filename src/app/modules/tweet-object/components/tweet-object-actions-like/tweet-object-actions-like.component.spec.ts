import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsLikeComponent } from './tweet-object-actions-like.component';

describe('TweetObjectActionsLikeComponent', () => {
  let component: TweetObjectActionsLikeComponent;
  let fixture: ComponentFixture<TweetObjectActionsLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectActionsLikeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsLikeComponent);
    component = fixture.componentInstance;
    component.tweet = TweetResponseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the likes counter', () => {
    let likesBefore = component.tweet.likes;
    component.changeCounter(true);
    expect(component.tweet.likes).toEqual(likesBefore + 1);
  });
  it('should decrease the likes counter', () => {
    let likesBefore = component.tweet.likes;
    component.changeCounter(false);
    expect(component.tweet.likes).toEqual(likesBefore - 1);
  });
});
