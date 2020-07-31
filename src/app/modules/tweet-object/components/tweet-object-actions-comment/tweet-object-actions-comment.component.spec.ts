import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsCommentComponent } from './tweet-object-actions-comment.component';

describe('TweetObjectActionsCommentComponent', () => {
  let component: TweetObjectActionsCommentComponent;
  let fixture: ComponentFixture<TweetObjectActionsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectActionsCommentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsCommentComponent);
    component = fixture.componentInstance;
    component.tweet = { ...TweetResponseMock };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the comments counter', () => {
    let commentsBefore = component.tweet.comments;
    component.increaseCommentsCounter();
    expect(component.tweet.comments).toEqual(commentsBefore + 1);
  });
});
