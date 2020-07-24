import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions-comment-button',
  templateUrl: './tweet-object-actions-comment-button.component.html',
  styleUrls: ['./tweet-object-actions-comment-button.component.scss'],
})
export class TweetObjectActionsCommentButtonComponent implements OnInit {
  @Input() tweet: TweetResponse;
  @Output() commentCreated = new EventEmitter<void>();
  controlDisabled = false;

  constructor() {}

  ngOnInit(): void {}

  // TODO: CREATE COMMENT METHOD ONCE TWEET CREATION IS DONE
}
