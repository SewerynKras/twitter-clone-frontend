import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-page-created-info',
  templateUrl: './tweet-page-created-info.component.html',
  styleUrls: ['./tweet-page-created-info.component.scss'],
})
export class TweetPageCreatedInfoComponent implements OnInit {
  @Input() tweet: TweetResponse;

  constructor() {}

  ngOnInit(): void {}
}
