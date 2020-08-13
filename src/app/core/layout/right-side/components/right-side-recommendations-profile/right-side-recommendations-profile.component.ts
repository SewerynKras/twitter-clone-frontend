import { UserProfileResponse } from 'src/app/shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-side-recommendations-profile',
  templateUrl: './right-side-recommendations-profile.component.html',
  styleUrls: ['./right-side-recommendations-profile.component.scss'],
})
export class RightSideRecommendationsProfileComponent implements OnInit {
  @Input() user: UserProfileResponse;
  constructor() {}

  ngOnInit(): void {}
}
