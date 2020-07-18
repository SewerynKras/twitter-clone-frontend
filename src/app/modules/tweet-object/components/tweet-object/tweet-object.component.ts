import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object',
  templateUrl: './tweet-object.component.html',
  styleUrls: ['./tweet-object.component.scss'],
})
export class TweetObjectComponent implements OnInit {
  @Input() tweet: TweetResponse;
  constructor() {}

  ngOnInit(): void {}
}
