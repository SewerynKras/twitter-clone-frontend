import {
  TweetResponseListMockPage1,
  TweetResponseListMockPage2,
} from './../../../../core/mocks/tweet.mock';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss'],
})
export class TweetListComponent implements OnInit {
  tweets: TweetResponse[] = TweetResponseListMockPage1['results'].concat(
    TweetResponseListMockPage2['results']
  );

  constructor() {}

  ngOnInit(): void {}
}
