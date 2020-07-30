import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-pure-retweet',
  templateUrl: './tweet-object-pure-retweet.component.html',
  styleUrls: ['./tweet-object-pure-retweet.component.scss'],
})
export class TweetObjectPureRetweetComponent implements OnInit {
  @Input() tweet: TweetResponse;
  constructor() {}

  ngOnInit(): void {}
}
