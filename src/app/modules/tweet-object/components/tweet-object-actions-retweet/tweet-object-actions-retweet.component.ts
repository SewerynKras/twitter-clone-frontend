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
}
