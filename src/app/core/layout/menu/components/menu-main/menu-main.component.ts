import { Router } from '@angular/router';
import { UsersService } from './../../../../http/user/users.service';
import { MenuMoreComponent } from './../menu-more/menu-more.component';
import { ButtonSpecInterface } from './../menu-button/menu-button.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss'],
})
export class MenuMainComponent implements OnInit {
  buttonSpecs: ButtonSpecInterface[] = [
    {
      icon_name: 'home',
      text: 'Home',
      selected: true,
      onClick: this.navigateToHomePage.bind(this),
    },
    {
      icon_name: 'share',
      text: 'Explore',
      selected: false,
    },
    {
      icon_name: 'notifications_none',
      text: 'Notifications',
      selected: false,
    },
    {
      icon_name: ' mail_outline',
      text: 'Messages',
      selected: false,
    },
    {
      icon_name: 'bookmark_border',
      text: 'Bookmarks',
      selected: false,
    },
    {
      icon_name: 'list_alt',
      text: 'Lists',
      selected: false,
    },
    {
      icon_name: 'person_outline',
      text: 'Profile',
      selected: false,
      onClick: this.navigateToProfile.bind(this),
    },
    {
      icon_name: 'more_horiz',
      text: 'More',
      selected: false,
    },
  ];

  @ViewChild(MenuMoreComponent) moreComponent: MenuMoreComponent;
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Marks the given button as selected and removes the
   * selected flag from the previously selected button.
   * NOTE: This method assumes that all buttons have unique `text` properties.
   */
  selectButton(spec: ButtonSpecInterface): void {
    let oldSelectedButton = this.buttonSpecs.filter(
      (obj) => obj.selected === true
    )[0]; //only 1 match is expected

    let oldSelectedButtonIndex = this.buttonSpecs
      .map((obj) => obj.text)
      .indexOf(oldSelectedButton.text);

    let newSelectedButtonIndex = this.buttonSpecs
      .map((obj) => obj.text)
      .indexOf(spec.text);

    // remove the old selected flag
    this.buttonSpecs[oldSelectedButtonIndex].selected = false;

    // create new selected flag
    this.buttonSpecs[newSelectedButtonIndex].selected = true;
  }

  /**
   * Opens the `more` sub-menu.
   */
  openMoreMenu(): void {
    this.moreComponent.openMenu();
  }

  /**
   * Calls all methods that process button presses.
   */
  handleButtonClick(buttonSpec: ButtonSpecInterface): void {
    // the 'more' menu does not select itself when clicked. Instead it opens
    // a dropdown menu.
    if (buttonSpec.text === 'More') this.openMoreMenu();
    else {
      this.selectButton(buttonSpec);
      if (buttonSpec.onClick) buttonSpec.onClick();
    }
  }

  /**
   * Navigates to the users profile
   */
  navigateToProfile() {
    let profile = this.usersService.getBaseUserInfoFromStorage();
    this.router.navigate([`profile/${profile.username}/`]);
  }

  /**
   * Navigates to the home page
   */
  navigateToHomePage() {
    this.router.navigate(['tweets/']);
  }
}
