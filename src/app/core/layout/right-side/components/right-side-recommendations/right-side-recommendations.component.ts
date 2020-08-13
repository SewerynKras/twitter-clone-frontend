import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-recommendations',
  templateUrl: './right-side-recommendations.component.html',
  styleUrls: ['./right-side-recommendations.component.scss']
})
export class RightSideRecommendationsComponent implements OnInit {

  profiles = [
    { ...UserProfileMockResponse },
    { ...UserProfileMockResponse },
    { ...UserProfileMockResponse }]

  constructor() { }

  ngOnInit(): void {
  }

}
