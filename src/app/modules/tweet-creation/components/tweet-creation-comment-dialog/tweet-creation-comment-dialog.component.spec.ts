import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { TweetResponseMock } from 'src/app/core/mocks/tweet.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TweetCreationImagePreviewComponent } from './../tweet-creation-image-preview/tweet-creation-image-preview.component';
import { TweetCreationTextareaComponent } from './../tweet-creation-textarea/tweet-creation-textarea.component';
import { TweetCreationActionsSubmitComponent } from './../tweet-creation-actions-submit/tweet-creation-actions-submit.component';
import { TweetCreationActionsImageComponent } from './../tweet-creation-actions-image/tweet-creation-actions-image.component';
import { TweetCreationActionsEmojiComponent } from './../tweet-creation-actions-emoji/tweet-creation-actions-emoji.component';
import { TweetCreationActionsComponent } from './../tweet-creation-actions/tweet-creation-actions.component';
import { TweetCreationComponent } from './../tweet-creation/tweet-creation.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationCommentDialogComponent } from './tweet-creation-comment-dialog.component';

describe('TweetCreationCommentDialogComponent', () => {
  let component: TweetCreationCommentDialogComponent;
  let fixture: ComponentFixture<TweetCreationCommentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetCreationCommentDialogComponent,
        TweetCreationComponent,
        TweetCreationActionsComponent,
        TweetCreationActionsEmojiComponent,
        TweetCreationActionsImageComponent,
        TweetCreationActionsSubmitComponent,
        TweetCreationTextareaComponent,
        TweetCreationImagePreviewComponent,
      ],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: TweetResponseMock,
        },
        {
          provide: MatDialogRef,
          useValue: {
            close: function (arg: any) {},
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the comment id during tweet creation', () => {
    const result = component.creationComponent.getTweetBody();
    expect(result.comment_id).toEqual(TweetResponseMock.id);
  });

  it('should close the dialog after tweet gets created', () => {
    spyOn(component.dialogRef, 'close');
    component.creationComponent.tweetCreated.emit(TweetResponseMock);
    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});
