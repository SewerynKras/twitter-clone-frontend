import { UserProfileResponse } from 'src/app/shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page-info',
  templateUrl: './profile-page-info.component.html',
  styleUrls: ['./profile-page-info.component.scss'],
})
export class ProfilePageInfoComponent implements OnInit {
  @Input() user: UserProfileResponse;
  constructor() {}

  ngOnInit(): void {}
}
