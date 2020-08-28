import { Router } from '@angular/router';
import { UserProfileResponse } from './../../../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user: UserProfileResponse;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * Navigates to the user's profile page.
   */
  navigateToProfile(): void {
    this.router.navigate([`profile/${this.user.username}/`]);
  }
}
