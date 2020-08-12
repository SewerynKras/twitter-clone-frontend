import { httpRequestParams } from './../../../../shared/models/http.model';
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
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private tweetsService: TweetsService
  ) {}

  profile$: Observable<UserProfileResponse>;
  method: Function;
  methodArgs: httpRequestParams;
  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.profile$ = this.getProfileFromUsername(username).pipe(
      map((user) => {
        this.method = this.tweetsService.getTweetsListByUser.bind(
          this.tweetsService
        );
        this.methodArgs = { username: user.username };
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