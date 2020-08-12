import { HeaderTitleService } from './../../../../shared/services/header-title.service';
import {
  httpRequestParams,
  httpRequestArgs,
} from './../../../../shared/models/http.model';
import { map } from 'rxjs/operators';
import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { UsersService } from './../../../../core/http/user/users.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserProfileResponse } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  profile$: Observable<UserProfileResponse>;
  method: Function;
  methodArgs: httpRequestArgs;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private tweetsService: TweetsService,
    private title: HeaderTitleService
  ) {
    // Subscribe to route params here to
    // force the entire component to reload in case of same-page navigation
    // for example: profile/user1/ => profile/user2/
    route.params.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.profile$ = this.getProfileFromUsername(username).pipe(
      map((user) => {
        this.method = this.tweetsService.getTweetsListByUser.bind(
          this.tweetsService
        );
        this.methodArgs = { username: user.username };
        this.title.changeTitle(user.display_name);
        return user;
      })
    );
  }

  /**
   * Retrieves the profile from the given username.
   * @param username string
   */
  getProfileFromUsername(username: string): Observable<UserProfileResponse> {
    return this.usersService.getSingleProfile({ username: username });
  }
}
