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

  /**
   * Navigates to the user's website
   */
  navigateToWebsite(_window?): void {
    // _window is used during testing since it's impossible to mock the actual
    // window object. When it's not provided the actual window gets used instead.
    _window = _window || window;

    let website = this.user.website;
    if (!(website.startsWith('http://') || website.startsWith('https://')))
      website = 'https://' + website;
    _window.location.assign(website);
  }
}
