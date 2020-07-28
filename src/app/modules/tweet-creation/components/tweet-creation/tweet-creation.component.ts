import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import {
  TweetPOSTBody,
  TweetResponse,
} from './../../../../shared/models/tweet.model';
import { TweetCreationImagePreviewComponent } from './../tweet-creation-image-preview/tweet-creation-image-preview.component';
import { TweetCreationActionsComponent } from './../tweet-creation-actions/tweet-creation-actions.component';
import { TweetCreationTextareaComponent } from './../tweet-creation-textarea/tweet-creation-textarea.component';
import { UsersService } from './../../../../core/http/user/users.service';
import { BaseUserProfile } from './../../../../shared/models/user.model';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-tweet-creation',
  templateUrl: './tweet-creation.component.html',
  styleUrls: ['./tweet-creation.component.scss'],
})
export class TweetCreationComponent implements OnInit, AfterViewInit {
  @ViewChild(TweetCreationTextareaComponent)
  tweetTextarea: TweetCreationTextareaComponent;
  @ViewChild(TweetCreationActionsComponent)
  tweetActionButtons: TweetCreationActionsComponent;
  @ViewChild(TweetCreationImagePreviewComponent)
  imagePreview: TweetCreationImagePreviewComponent;

  @Output() tweetCreated = new EventEmitter<TweetResponse>();

  user: BaseUserProfile;
  selectedFile: File;

  constructor(
    private usersService: UsersService,
    private tweetsService: TweetsService
  ) {}

  ngOnInit(): void {
    this.user = this.usersService.getBaseUserInfoFromStorage();
  }

  ngAfterViewInit(): void {
    // Wire the emoji button emitter with the textarea so that
    // when an emoji is selected it gets added to the textarea's value
    this.tweetActionButtons.emojiButton.emojiSelected.subscribe(
      (emoji: string) => this.tweetTextarea.appendCharToTextarea(emoji)
    );

    // Wire the image button emitter with the image preview so that
    // an image can be previewed after being uploaded.
    // This also stores the image in a property so that it can be added
    // during the creation process
    this.tweetActionButtons.imageButton.fileAdded.subscribe((file: File) => {
      this.selectedFile = file;
      this.imagePreview.previewImage(file);
    });

    // Wire the textarea and submit button so that the button is disabled
    // it there's no text in the textarea
    this.tweetTextarea.disableSubmitButton.subscribe((disable) => {
      this.tweetActionButtons.submitButton.controlDisabled = disable;
    });

    // Create a new tweet when the submit button gets clicked
    this.tweetActionButtons.submitButton.buttonClicked.subscribe((_) => {
      this.createTweet();
    });
  }

  /**
   * Generates the tweet body payload (this method gets overloaded
   * by the comment/retweet creation form)
   */
  getTweetBody(): TweetPOSTBody {
    let body: TweetPOSTBody = {
      text: this.tweetTextarea.getTextareaValue(),
    };
    if (this.selectedFile) body.image = this.selectedFile;
    return body;
  }

  /**
   * Sends a POST request with the `tweetTextarea`'s text and `selectedImage`.
   * After the tweet gets created this also clears all controls.
   *
   */
  createTweet(): void {
    // Disable the button to avoid duplicate tweets
    this.tweetActionButtons.submitButton.controlDisabled = true;

    // Create the POST body
    let tweetBody = this.getTweetBody();

    // Send the payload
    this.tweetsService
      .createTweet(tweetBody)
      .subscribe((tweet: TweetResponse) => {
        this.tweetCreated.emit(tweet);
        this.clearAllControls();
      });
  }

  /**
   * Clears the image preview control.
   */
  removeImage(): void {
    this.imagePreview.clearControl();
    delete this.imagePreview;
  }

  /**
   * Removes the selected image.
   * Removes all text in the textarea.
   */
  clearAllControls(): void {
    this.tweetTextarea.clearControl();
    this.removeImage();
  }
}
