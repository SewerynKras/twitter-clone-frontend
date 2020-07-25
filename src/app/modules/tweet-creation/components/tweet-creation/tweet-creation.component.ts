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

  user: BaseUserProfile;
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
  }
}
