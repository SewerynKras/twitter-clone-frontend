import { UsersService } from './../../../../http/user/users.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../../auth/auth.service';
import {
  UserProfileResponse,
  BaseUserProfile,
} from './../../../../../shared/models/user.model';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu-profile-dialog',
  templateUrl: './menu-profile-dialog.component.html',
  styleUrls: ['./menu-profile-dialog.component.scss'],
})
export class MenuProfileDialogComponent implements OnInit {
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  @Input() user: UserProfileResponse | BaseUserProfile;
  constructor(
    private auth: AuthService,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  /**
   * Opens the MatSelect menu
   */
  openMenu() {
    this.menuTrigger.openMenu();
  }

  /**
   * Closes the MatSelect menu
   */
  closeMenu() {
    this.menuTrigger.closeMenu();
  }

  /**
   * Calls the logout method in the auth service.
   */
  performLogout() {
    this.auth.logout();
  }

  navigateToProfile() {
    let user = this.usersService.getBaseUserInfoFromStorage();
    this.router.navigate([`profile/${user.username}/`]);
  }
}
