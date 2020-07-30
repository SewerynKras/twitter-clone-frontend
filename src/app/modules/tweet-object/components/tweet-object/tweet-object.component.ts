import { map } from 'rxjs/operators';
import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { UsersService } from './../../../../core/http/user/users.service';
import { UserProfileResponse } from './../../../../shared/models/user.model';
import { Observable } from 'rxjs';
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
  constructor(private router: Router) { }

  ngOnInit(): void {
    // non-standard tweets (pure retweets) have no text and a retweet id
    this.isStandardTweet = !(this.tweet.text == "" && this.tweet.retweet != null)
  }

  navigateToTweetPage(): void {
    this.router.navigate([`tweets/${this.tweet.id}/`]);
  }
}
