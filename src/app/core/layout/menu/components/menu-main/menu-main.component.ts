import { buttonSpecInterface } from './../menu-button/menu-button.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss'],
})
export class MenuMainComponent implements OnInit {
  buttonSpecs: buttonSpecInterface[] = [
    { icon_name: 'home', text: 'Home' },
    {
      icon_name: 'share',
      text: 'Explore',
    },
    {
      icon_name: 'notifications_none',
      text: 'Notifications',
    },
    {
      icon_name: ' mail_outline',
      text: 'Messages',
    },
    {
      icon_name: 'bookmark_border',
      text: 'Bookmarks',
    },
    {
      icon_name: 'list_alt',
      text: 'Lists',
    },
    {
      icon_name: 'person_outline',
      text: 'Profile',
    },
    {
      icon_name: 'more_horiz',
      text: 'More',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
