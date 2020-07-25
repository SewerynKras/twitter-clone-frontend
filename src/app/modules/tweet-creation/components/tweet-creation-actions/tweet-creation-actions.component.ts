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
  constructor() {}

  ngOnInit(): void {}
}
