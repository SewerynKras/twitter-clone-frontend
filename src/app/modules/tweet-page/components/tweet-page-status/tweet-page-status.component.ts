import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-page-status',
  templateUrl: './tweet-page-status.component.html',
  styleUrls: ['./tweet-page-status.component.scss'],
})
export class TweetPageStatusComponent implements OnInit {
  @Input() tweet: TweetResponse;

  constructor() {}

  ngOnInit(): void {}
}
