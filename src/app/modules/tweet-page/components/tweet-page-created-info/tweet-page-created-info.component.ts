import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-page-created-info',
  templateUrl: './tweet-page-created-info.component.html',
  styleUrls: ['./tweet-page-created-info.component.scss'],
})
export class TweetPageCreatedInfoComponent implements OnInit {
  @Input() tweet: TweetResponse;
  timeCreated: string;
  dateCreated: string;
  constructor() {}

  ngOnInit(): void {
    this.timeCreated = this.getTimeCreated();
    this.dateCreated = this.getDateCreated();
  }

  getTimeCreated() {
    return `${this.tweet.created_date.getHours()}:${this.tweet.created_date.getMinutes()}`;
  }

  getDateCreated() {
    return this.tweet.created_date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
}
