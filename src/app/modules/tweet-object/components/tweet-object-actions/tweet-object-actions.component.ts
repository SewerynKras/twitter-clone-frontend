import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions',
  templateUrl: './tweet-object-actions.component.html',
  styleUrls: ['./tweet-object-actions.component.scss'],
})
export class TweetObjectActionsComponent implements OnInit {
  @Input() tweet: TweetResponse;

  constructor() {}

  ngOnInit(): void {}
}
