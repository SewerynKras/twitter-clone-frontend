import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions-retweet',
  templateUrl: './tweet-object-actions-retweet.component.html',
  styleUrls: ['./tweet-object-actions-retweet.component.scss'],
})
export class TweetObjectActionsRetweetComponent implements OnInit {
  @Input() tweet: TweetResponse;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Increases the retweets attribute of the given tweet by 1.
   * This should be called after a new retweet gets created.
   */
  increaseRetweetsCounter(): void {
    this.tweet.retweets += 1;
  }
}
