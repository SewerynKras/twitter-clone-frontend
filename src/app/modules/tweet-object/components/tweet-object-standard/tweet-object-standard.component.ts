import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-standard',
  templateUrl: './tweet-object-standard.component.html',
  styleUrls: ['./tweet-object-standard.component.scss'],
})
export class TweetObjectStandardComponent implements OnInit {
  @Input() tweet: TweetResponse;
  constructor() {}

  ngOnInit(): void {}
}
