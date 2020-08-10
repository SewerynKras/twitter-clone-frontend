import { UserProfileResponse } from './../../../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page-header',
  templateUrl: './profile-page-header.component.html',
  styleUrls: ['./profile-page-header.component.scss'],
})
export class ProfilePageHeaderComponent implements OnInit {
  @Input() user: UserProfileResponse;
  constructor() {}

  ngOnInit(): void {}
}
