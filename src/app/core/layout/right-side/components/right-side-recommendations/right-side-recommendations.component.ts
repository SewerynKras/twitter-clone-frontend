import { UserProfileResponse } from 'src/app/shared/models/user.model';
import { FollowsService } from './../../../../http/follow/follows.service';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-recommendations',
  templateUrl: './right-side-recommendations.component.html',
  styleUrls: ['./right-side-recommendations.component.scss'],
})
export class RightSideRecommendationsComponent implements OnInit {
  profiles: UserProfileResponse[];
  constructor(private followsService: FollowsService) {}

  ngOnInit(): void {
    // Even tho `getFollowRecommendations` returns a list response this component
    // does not care about further pages (since only 3 profiles are displayed at any given time)
    this.followsService.getFollowRecommendations({}).subscribe((profiles) => {
      this.profiles = profiles['results'].slice(0, 3);
    });
  }
}
