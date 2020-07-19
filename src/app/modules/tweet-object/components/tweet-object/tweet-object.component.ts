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
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  /**
   * Retrieves information about the tweets author
   * (for example to display a profile pic and display_name).
   * This should only be called after `tweet` becomes available.
   */
  getUserInfo(): Observable<UserProfileResponse> {
    return this.usersService.getSingleProfile(this.tweet.author);
  }
}
