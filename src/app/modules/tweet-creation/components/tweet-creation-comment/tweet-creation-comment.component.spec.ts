import { TweetCreationImagePreviewComponent } from './../tweet-creation-image-preview/tweet-creation-image-preview.component';
import { TweetCreationTextareaComponent } from './../tweet-creation-textarea/tweet-creation-textarea.component';
import { TweetCreationActionsSubmitComponent } from './../tweet-creation-actions-submit/tweet-creation-actions-submit.component';
import { TweetCreationActionsImageComponent } from './../tweet-creation-actions-image/tweet-creation-actions-image.component';
import { TweetCreationActionsEmojiComponent } from './../tweet-creation-actions-emoji/tweet-creation-actions-emoji.component';
import { TweetCreationActionsComponent } from './../tweet-creation-actions/tweet-creation-actions.component';
import { TweetResponseMock } from 'src/app/core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationCommentComponent } from './tweet-creation-comment.component';
import { TweetCreationComponent } from '../tweet-creation/tweet-creation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TweetCreationCommentComponent', () => {
  let component: TweetCreationCommentComponent;
  let fixture: ComponentFixture<TweetCreationCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetCreationCommentComponent,
        TweetCreationComponent,
        TweetCreationActionsComponent,
        TweetCreationActionsEmojiComponent,
        TweetCreationActionsImageComponent,
        TweetCreationActionsSubmitComponent,
        TweetCreationTextareaComponent,
        TweetCreationImagePreviewComponent,
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationCommentComponent);
    component = fixture.componentInstance;
    component.comment = TweetResponseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the comment id during tweet creation', () => {
    const result = component.creationComponent.getTweetBody();
    expect(result.comment_id).toEqual(TweetResponseMock.id);
  });
});
