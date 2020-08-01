import { of } from 'rxjs';
import { TweetResponseMock } from 'src/app/core/mocks/tweet.mock';
import { TweetCreationTextareaComponent } from './../tweet-creation-textarea/tweet-creation-textarea.component';
import { TweetCreationActionsSubmitComponent } from './../tweet-creation-actions-submit/tweet-creation-actions-submit.component';
import { TweetCreationActionsImageComponent } from './../tweet-creation-actions-image/tweet-creation-actions-image.component';
import { TweetCreationImagePreviewComponent } from './../tweet-creation-image-preview/tweet-creation-image-preview.component';
import { TweetCreationActionsEmojiComponent } from './../tweet-creation-actions-emoji/tweet-creation-actions-emoji.component';
import { TweetCreationActionsComponent } from './../tweet-creation-actions/tweet-creation-actions.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationComponent } from './tweet-creation.component';

describe('TweetCreationComponent', () => {
  let component: TweetCreationComponent;
  let fixture: ComponentFixture<TweetCreationComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        TweetCreationComponent,
        TweetCreationActionsComponent,
        TweetCreationActionsEmojiComponent,
        TweetCreationImagePreviewComponent,
        TweetCreationActionsImageComponent,
        TweetCreationActionsSubmitComponent,
        TweetCreationTextareaComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the tweets body', () => {
    spyOn(component['tweetTextarea'], 'getTextareaValue').and.returnValue(
      'some text 123'
    );
    const testFile = new File([''], 'someFile');
    component.selectedFile = testFile;
    const result = component.getTweetBody();
    expect(result.text).toEqual('some text 123');
    expect(result.image).toEqual(testFile);
  });

  it('should create the tweet', () => {
    spyOn(component['tweetsService'], 'createTweet').and.returnValue(
      of({ ...TweetResponseMock })
    );
    spyOn(component, 'clearAllControls');
    spyOn(component.tweetCreated, 'emit');

    component.createTweet();
    expect(component['tweetsService'].createTweet).toHaveBeenCalled();
    expect(component.tweetCreated.emit).toHaveBeenCalled();
    expect(component.clearAllControls).toHaveBeenCalled();
  });

  it('should clear all controls', () => {
    spyOn(component.tweetTextarea, 'clearControl');
    spyOn(component, 'removeImage');
    component.clearAllControls();
    expect(component.tweetTextarea.clearControl).toHaveBeenCalled();
    expect(component.removeImage).toHaveBeenCalled();
  });

  it('should remove the image', () => {
    spyOn(component.imagePreview, 'clearControl');
    component.selectedFile = new File([''], 'f');
    component.removeImage();
    expect(component.selectedFile).toEqual(undefined);
    expect(component.imagePreview.clearControl).toHaveBeenCalled();
  });
});
