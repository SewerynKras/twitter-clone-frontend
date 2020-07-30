import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet-object',
  templateUrl: './tweet-object.component.html',
  styleUrls: ['./tweet-object.component.scss'],
})
export class TweetObjectComponent implements OnInit {
  @Input() tweet: TweetResponse;

  isStandardTweet: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // non-standard tweets (pure retweets) have no text and a retweet id
    this.isStandardTweet = !(this.tweet.text == '' && this.tweet.retweet != '');
  }
  /**
   * Navigates to the tweet's page. If the tweet is a pure retweet it redirects
   * to the retweet's page.
   */
  navigateToTweetPage(): void {
    let id = this.isStandardTweet ? this.tweet.id : this.tweet.retweet;
    this.router.navigate([`tweets/${id}/`]);
  }
}
