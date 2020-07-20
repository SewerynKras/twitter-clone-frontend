import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss'],
})
export class TweetListComponent implements OnInit {
  tweets$: Observable<TweetResponse[]>;
  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {
    this.tweets$ = this.tweetsService
      .getTweetsList()
      .pipe(map((tweets) => tweets['results']));
  }
}
