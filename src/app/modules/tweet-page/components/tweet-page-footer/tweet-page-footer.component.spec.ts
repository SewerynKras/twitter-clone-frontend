import { MatDialog } from '@angular/material/dialog';
import { TweetObjectActionsCommentButtonComponent } from './../../../tweet-object/components/tweet-object-actions-comment-button/tweet-object-actions-comment-button.component';
import { TweetObjectActionsRetweetButtonComponent } from './../../../tweet-object/components/tweet-object-actions-retweet-button/tweet-object-actions-retweet-button.component';
import { TweetObjectActionsLikeButtonComponent } from './../../../tweet-object/components/tweet-object-actions-like-button/tweet-object-actions-like-button.component';
import { TweetPageStatusComponent } from './../tweet-page-status/tweet-page-status.component';
import { TweetPageActionsComponent } from './../tweet-page-actions/tweet-page-actions.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageFooterComponent } from './tweet-page-footer.component';
import { HttpClient } from '@angular/common/http';
import { TweetResponseMock } from 'src/app/core/mocks/tweet.mock';

describe('TweetPageFooterComponent', () => {
  let component: TweetPageFooterComponent;
  let fixture: ComponentFixture<TweetPageFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetPageFooterComponent,
        TweetPageActionsComponent,
        TweetPageStatusComponent,
        TweetObjectActionsLikeButtonComponent,
        TweetObjectActionsCommentButtonComponent,
        TweetObjectActionsRetweetButtonComponent,
      ],
      providers: [
        {
          provide: HttpClient,
          useValue: {},
        },
        {
          provide: MatDialog,
          useValue: {},
        },
      ],
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageFooterComponent);
    component = fixture.componentInstance;
    component.tweet = { ...TweetResponseMock };
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger the like counter change when like button emits', () => {
    spyOn(component['statusIndicator'], 'changeLikesCounter');
    component['actionsController'].likeButton.tweetLiked.emit();
    expect(component['statusIndicator'].changeLikesCounter).toHaveBeenCalled();
  });

  it('should trigger the comment/retweet counter change when comment button emits', () => {
    spyOn(component['statusIndicator'], 'increaseCommentsAndRetweetsCounter');
    spyOn(component['commentCreated'], 'emit');
    component['actionsController'].commentButton.commentCreated.emit();
    expect(
      component['statusIndicator'].increaseCommentsAndRetweetsCounter
    ).toHaveBeenCalled();
    expect(component['commentCreated'].emit).toHaveBeenCalled();
  });

  it('should trigger the comment/retweet counter change when retweet button emits', () => {
    spyOn(component['statusIndicator'], 'increaseCommentsAndRetweetsCounter');
    component['actionsController'].retweetButton.retweetCreated.emit();
    expect(
      component['statusIndicator'].increaseCommentsAndRetweetsCounter
    ).toHaveBeenCalled();
  });
});
