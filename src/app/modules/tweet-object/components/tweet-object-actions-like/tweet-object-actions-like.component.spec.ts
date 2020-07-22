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

  it('should like the tweet', () => {
    component.tweet.is_liked = false;
    spyOn(component['likeService'], 'createLike');
    component.toggleLike();
    expect(component['likeService'].createLike).toHaveBeenCalled();
  });

  it('should un-like the tweet', () => {
    component.tweet.is_liked = true;
    spyOn(component['likeService'], 'deleteLike');
    component.toggleLike();
    expect(component['likeService'].deleteLike).toHaveBeenCalled();
  });
});
