import { TweetCreationActionsSubmitComponent } from './../tweet-creation-actions-submit/tweet-creation-actions-submit.component';
import { TweetCreationActionsImageComponent } from './../tweet-creation-actions-image/tweet-creation-actions-image.component';
import { TweetCreationTextareaComponent } from './../tweet-creation-textarea/tweet-creation-textarea.component';
import { TweetCreationActionsEmojiComponent } from './../tweet-creation-actions-emoji/tweet-creation-actions-emoji.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tweet-creation-actions',
  templateUrl: './tweet-creation-actions.component.html',
  styleUrls: ['./tweet-creation-actions.component.scss'],
})
export class TweetCreationActionsComponent implements OnInit {
  @ViewChild(TweetCreationActionsEmojiComponent)
  emojiButton: TweetCreationActionsEmojiComponent;
  @ViewChild(TweetCreationActionsImageComponent)
  imageButton: TweetCreationActionsImageComponent;
  @ViewChild(TweetCreationActionsSubmitComponent)
  submitButton: TweetCreationActionsSubmitComponent;
  constructor() {}

  ngOnInit(): void {}
}
