import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions-retweet-button',
  templateUrl: './tweet-object-actions-retweet-button.component.html',
  styleUrls: ['./tweet-object-actions-retweet-button.component.scss'],
})
export class TweetObjectActionsRetweetButtonComponent implements OnInit {
  @Input() tweet: TweetResponse;
  @Output() retweetCreated = new EventEmitter<void>();
  controlDisabled = false;

  constructor() {}

  ngOnInit(): void {}

  // TODO: CREATE RETWEET METHOD ONCE TWEET CREATION IS DONE
}
