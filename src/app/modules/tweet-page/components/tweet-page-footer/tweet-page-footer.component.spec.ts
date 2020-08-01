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

  // setup viewchild spies

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
});
