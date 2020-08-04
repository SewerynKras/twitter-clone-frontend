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
  constructor(private auth: AuthService) {}

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
}
