import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-page-status',
  templateUrl: './tweet-page-status.component.html',
  styleUrls: ['./tweet-page-status.component.scss'],
})
export class TweetPageStatusComponent implements OnInit {
  @Input() tweet: TweetResponse;

  commentsAndRetweetsCount: number;
  tweetLikesCount: number;
  constructor() {}

  ngOnInit(): void {
    this.commentsAndRetweetsCount = this.getCommentsAndRetweetsCount();
    this.tweetLikesCount = this.getTweetLikesCount();
  }

  /**
   * Sums the tweets comments and retweets
   */
  getCommentsAndRetweetsCount(): number {
    return this.tweet.retweets + this.tweet.comments;
  }

  /**
   * Retrieves the amount of likes the given tweet has
   */
  getTweetLikesCount(): number {
    return this.tweet.likes;
  }

  /**
   * Increases or decreases the likes amount counter based on the given
   * argument (true => increase, false => decrease)
   * @param created boolean
   */
  changeLikesCounter(created: boolean): void {
    if (created) this.tweet.likes += 1;
    else this.tweet.likes -= 1;

    // update the on-screen counter
    this.tweetLikesCount = this.getTweetLikesCount();
  }

  /**
   * Increases the comments and retweets amount counter by 1
   */
  increaseCommentsAndRetweetsCounter(): void {
    // update the on-screen counter
    this.commentsAndRetweetsCount += 1;
  }
}
