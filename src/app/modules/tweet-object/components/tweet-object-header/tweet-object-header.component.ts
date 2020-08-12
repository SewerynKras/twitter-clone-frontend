import { Router } from '@angular/router';
import { UserProfileResponse } from 'src/app/shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-header',
  templateUrl: './tweet-object-header.component.html',
  styleUrls: ['./tweet-object-header.component.scss'],
})
export class TweetObjectHeaderComponent implements OnInit {
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
