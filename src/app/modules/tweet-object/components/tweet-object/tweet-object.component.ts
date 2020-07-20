import { map } from 'rxjs/operators';
import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { UsersService } from './../../../../core/http/user/users.service';
import { UserProfileResponse } from './../../../../shared/models/user.model';
import { Observable } from 'rxjs';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object',
  templateUrl: './tweet-object.component.html',
  styleUrls: ['./tweet-object.component.scss'],
})
export class TweetObjectComponent implements OnInit {
  @Input() tweet: TweetResponse;

  // Nested tweets will not display neither their own nested tweet objects (retweets)
  // nor action buttons (like, comment, retweet, share)
  @Input() nested = false;

  nestedTweet$: Observable<TweetResponse>;
  tweetAuthorInfo$: Observable<UserProfileResponse>;
  commentAuthorUsername$: Observable<string>;
  constructor(
    private usersService: UsersService,
    private tweetsService: TweetsService
  ) {}

  ngOnInit(): void {
    this.tweetAuthorInfo$ = this.getUserInfo();
    this.nestedTweet$ = this.getNestedTweet(this.tweet.retweet);
    this.commentAuthorUsername$ = this.getNestedTweet(this.tweet.comment).pipe(
      map((tweet) => tweet.author)
    );
  }

  /**
   * Retrieves information about the tweets author
   * (for example to display a profile pic and display_name).
   * This should only be called after `tweet` becomes available.
   */
  getUserInfo(): Observable<UserProfileResponse> {
    return this.usersService.getSingleProfile(this.tweet.author);
  }

  /**
   * Retrieves the nested tweet object (retweet or comment)
   * @param id string
   */
  getNestedTweet(id: string): Observable<TweetResponse> {
    return this.tweetsService.getSingleTweet(id);
  }
}
