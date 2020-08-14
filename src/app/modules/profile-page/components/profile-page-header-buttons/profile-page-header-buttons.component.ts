import { UsersService } from './../../../../core/http/user/users.service';
import { UserProfileResponse } from './../../../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page-header-buttons',
  templateUrl: './profile-page-header-buttons.component.html',
  styleUrls: ['./profile-page-header-buttons.component.scss'],
})
export class ProfilePageHeaderButtonsComponent implements OnInit {
  @Input() user: UserProfileResponse;

  thisIsTheUser: boolean;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.thisIsTheUser = this.compareUsers();
  }

  /**
   * Compares the given user with the currently logged in user.
   */
  compareUsers(): boolean {
    var currentUser = this.usersService.getBaseUserInfoFromStorage();
    return this.usersService.checkIfUsersAreEqual(this.user, currentUser);
  }
}
