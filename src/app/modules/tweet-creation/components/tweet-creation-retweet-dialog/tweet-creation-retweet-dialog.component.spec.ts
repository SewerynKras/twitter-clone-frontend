import { TweetCreationTextareaComponent } from './../tweet-creation-textarea/tweet-creation-textarea.component';
import { TweetCreationActionsSubmitComponent } from './../tweet-creation-actions-submit/tweet-creation-actions-submit.component';
import { TweetCreationActionsImageComponent } from './../tweet-creation-actions-image/tweet-creation-actions-image.component';
import { TweetCreationImagePreviewComponent } from './../tweet-creation-image-preview/tweet-creation-image-preview.component';
import { TweetCreationActionsEmojiComponent } from './../tweet-creation-actions-emoji/tweet-creation-actions-emoji.component';
import { TweetCreationActionsComponent } from './../tweet-creation-actions/tweet-creation-actions.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TweetCreationComponent } from './../tweet-creation/tweet-creation.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationRetweetDialogComponent } from './tweet-creation-retweet-dialog.component';
import { TweetResponseMock } from 'src/app/core/mocks/tweet.mock';
import { DatePipe } from '@angular/common';

describe('TweetCreationRetweetDialogComponent', () => {
  let component: TweetCreationRetweetDialogComponent;
  let fixture: ComponentFixture<TweetCreationRetweetDialogComponent>;
  let propSpy: jasmine.Spy;
  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        TweetCreationRetweetDialogComponent,
        TweetCreationComponent,
        TweetCreationActionsComponent,
        TweetCreationActionsEmojiComponent,
        TweetCreationImagePreviewComponent,
        TweetCreationActionsImageComponent,
        TweetCreationActionsSubmitComponent,
        TweetCreationTextareaComponent,
      ],
      providers: [
        DatePipe,
        {
          provide: MatDialogRef,
          useValue: mockDialogRef,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { ...TweetResponseMock },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationRetweetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should override the `getTweetBody` method', () => {
    const baseMethod = () => {
      return { ...TweetResponseMock };
    };
    var newMethod = component.getOverrideMethod(baseMethod);
    var tweet = newMethod();
    expect(tweet.retweet_id).toEqual({ ...TweetResponseMock }.id);
  });

  it('should close the dialog if the tweet got created', () => {
    component['creationComponent'].tweetCreated.emit({ ...TweetResponseMock });
    expect(component['dialogRef'].close).toHaveBeenCalledWith(true);
  });
});
