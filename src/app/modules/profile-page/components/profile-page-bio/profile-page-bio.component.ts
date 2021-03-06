import { UserProfileResponse } from 'src/app/shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page-bio',
  templateUrl: './profile-page-bio.component.html',
  styleUrls: ['./profile-page-bio.component.scss'],
})
export class ProfilePageBioComponent implements OnInit {
  @Input() user: UserProfileResponse;
  constructor() {}

  ngOnInit(): void {}
}
