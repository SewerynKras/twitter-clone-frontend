import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-page-actions',
  templateUrl: './tweet-page-actions.component.html',
  styleUrls: ['./tweet-page-actions.component.scss'],
})
export class TweetPageActionsComponent implements OnInit {
  @Input() tweet: TweetResponse;
  constructor() {}

  ngOnInit(): void {}
}
