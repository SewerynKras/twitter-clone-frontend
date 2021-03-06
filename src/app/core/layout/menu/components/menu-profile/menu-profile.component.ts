import { MenuProfileDialogComponent } from './../menu-profile-dialog/menu-profile-dialog.component';
import { AuthService } from './../../../../auth/auth.service';
import { UsersService } from './../../../../http/user/users.service';
import { BaseUserProfile } from './../../../../../shared/models/user.model';
import { UserProfileResponse } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.scss'],
})
export class MenuProfileComponent implements OnInit {
  user$: Observable<UserProfileResponse | BaseUserProfile>;
  @ViewChild(MenuProfileDialogComponent) dialog: MenuProfileDialogComponent;
  constructor(private auth: AuthService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.user$ = this.auth.loginStatusChange.pipe(
      // Only proceed if the user is logged in
      filter((authorized) => {
        return authorized;
      }),
      map((authorized) => {
        return this.usersService.getBaseUserInfoFromStorage();
      })
    );
  }

  /**
   * Opens the profile dialog.
   */
  openDialog(): void {
    this.dialog.openMenu();
  }
}
