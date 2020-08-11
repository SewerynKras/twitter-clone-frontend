import { UserProfileResponse } from 'src/app/shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page-followers',
  templateUrl: './profile-page-followers.component.html',
  styleUrls: ['./profile-page-followers.component.scss'],
})
export class ProfilePageFollowersComponent implements OnInit {
  @Input() user: UserProfileResponse;
  constructor() {}

  ngOnInit(): void {}
}
