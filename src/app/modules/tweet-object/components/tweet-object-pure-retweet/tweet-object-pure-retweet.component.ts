import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { Observable } from 'rxjs';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-pure-retweet',
  templateUrl: './tweet-object-pure-retweet.component.html',
  styleUrls: ['./tweet-object-pure-retweet.component.scss'],
})
export class TweetObjectPureRetweetComponent implements OnInit {
  @Input() tweet: TweetResponse;

  retweet$: Observable<TweetResponse>;
  constructor(private tweetService: TweetsService) {}

  ngOnInit(): void {
    // This component assumes that the given tweet has a retweet attached to it
    this.retweet$ = this.tweetService.getSingleTweet(this.tweet.retweet);
  }
}
