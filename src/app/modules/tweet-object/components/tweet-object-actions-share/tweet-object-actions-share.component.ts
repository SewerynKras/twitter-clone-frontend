import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions-share',
  templateUrl: './tweet-object-actions-share.component.html',
  styleUrls: ['./tweet-object-actions-share.component.scss'],
})
export class TweetObjectActionsShareComponent implements OnInit {
  @Input() tweet: TweetResponse;

  constructor() {}

  ngOnInit(): void {}
}
