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
  constructor(private route: ActivatedRoute) {}

  profile$: Observable<UserProfileResponse>;
  username: string;
  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    // this.profile$ = this.getTweetInfoFromId(tweet_id);
  }
}
