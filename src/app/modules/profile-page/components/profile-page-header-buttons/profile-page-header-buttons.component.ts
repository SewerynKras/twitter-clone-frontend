import { UserProfileResponse } from './../../../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page-header-buttons',
  templateUrl: './profile-page-header-buttons.component.html',
  styleUrls: ['./profile-page-header-buttons.component.scss'],
})
export class ProfilePageHeaderButtonsComponent implements OnInit {
  @Input() user: UserProfileResponse;

  constructor() {}

  ngOnInit(): void {}
}
