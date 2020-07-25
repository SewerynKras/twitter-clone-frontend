import { TweetCreationImagePreviewComponent } from './../tweet-creation-image-preview/tweet-creation-image-preview.component';
import { TweetCreationActionsComponent } from './../tweet-creation-actions/tweet-creation-actions.component';
import { TweetCreationTextareaComponent } from './../tweet-creation-textarea/tweet-creation-textarea.component';
import { UsersService } from './../../../../core/http/user/users.service';
import { BaseUserProfile } from './../../../../shared/models/user.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

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

  user: BaseUserProfile;
  selectedFile: File;

  constructor(private usersService: UsersService) {}

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
  }
}
