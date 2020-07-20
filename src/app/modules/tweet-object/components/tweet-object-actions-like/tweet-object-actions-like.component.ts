import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions-like',
  templateUrl: './tweet-object-actions-like.component.html',
  styleUrls: ['./tweet-object-actions-like.component.scss'],
})
export class TweetObjectActionsLikeComponent implements OnInit {
  @Input() tweet: TweetResponse;
  constructor() {}

  ngOnInit(): void {}
}
