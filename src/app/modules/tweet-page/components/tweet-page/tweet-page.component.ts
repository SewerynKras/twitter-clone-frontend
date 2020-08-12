import { ImageDialogComponent } from './../../../../shared/components/image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { switchMap, map } from 'rxjs/operators';
import { UsersService } from './../../../../core/http/user/users.service';
import { UserProfileResponse } from './../../../../shared/models/user.model';
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
  tweetAuthorInfo$: Observable<UserProfileResponse>;
  commentAuthorUsername$: Observable<string>;
  nestedTweet$: Observable<TweetResponse>;

  constructor(
    private route: ActivatedRoute,
    private tweetsService: TweetsService,
    private usersService: UsersService,
    private dialog: MatDialog
  ) {
    // Subscribe to route params here to
    // force the entire component to reload in case of same-page navigation
    // for example: tweet/123/ => tweet/234/
    route.params.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    let tweet_id = this.route.snapshot.paramMap.get('tweet_id');
    this.tweet$ = this.getTweetInfoFromId(tweet_id);
  }

  /**
   * Retrieves information about the tweets author
   * (for example to display a profile pic and display_name).
   */
  getUserInfo(tweet: TweetResponse): Observable<UserProfileResponse> {
    return this.usersService.getSingleProfile({ username: tweet.author });
  }

  /**
   * Retrieves the selected tweet, it's author, it's comment and it's retweet
   * from the backend
   * @param tweet_id string
   */
  getTweetInfoFromId(tweet_id: string): Observable<TweetResponse> {
    return this.tweetsService.getSingleTweet({ id: tweet_id }).pipe(
      map((tweet) => {
        // Get retweet
        this.nestedTweet$ = this.tweetsService.getSingleTweet({
          id: tweet.retweet,
        });
        // Get tweet author
        this.tweetAuthorInfo$ = this.usersService.getSingleProfile({
          username: tweet.author,
        });
        // Get comment author
        this.commentAuthorUsername$ = this.tweetsService
          .getSingleTweet({ id: tweet.comment })
          .pipe(map((tweet) => tweet.author));
        return tweet;
      })
    );
  }

  /**
   * Opens the image dialog.
   */
  openDialog(imageUrl: string) {
    this.dialog.open(ImageDialogComponent, {
      data: imageUrl,
    });
  }
}
