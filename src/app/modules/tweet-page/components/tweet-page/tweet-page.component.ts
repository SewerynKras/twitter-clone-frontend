import { Observable } from 'rxjs';
import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tweet-page',
  templateUrl: './tweet-page.component.html',
  styleUrls: ['./tweet-page.component.scss'],
})
export class TweetPageComponent implements OnInit {
  tweet$: Observable<TweetResponse>;

  constructor(
    private route: ActivatedRoute,
    private tweetsService: TweetsService
  ) {}

  ngOnInit(): void {
    let tweet_id = this.route.snapshot.paramMap.get('tweet_id');
    this.tweet$ = this.getTweetFromId(tweet_id);
  }

  /**
   * Retrieves the selected tweet from the backend
   * @param tweet_id string
   */
  getTweetFromId(tweet_id: string): Observable<TweetResponse> {
    return this.tweetsService.getSingleTweet(tweet_id);
  }
}
