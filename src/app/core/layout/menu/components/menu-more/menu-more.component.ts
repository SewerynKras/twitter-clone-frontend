import { MatSelect } from '@angular/material/select';
import { ButtonSpecInterface } from './../menu-button/menu-button.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu-more',
  templateUrl: './menu-more.component.html',
  styleUrls: ['./menu-more.component.scss'],
})
export class MenuMoreComponent implements OnInit, AfterViewInit {
  buttonSpecs: ButtonSpecInterface[] = [
    {
      icon_name: 'message ',
      text: 'Topics',
      selected: false,
    },
    {
      icon_name: 'flash_on ',
      text: 'Moments',
      selected: false,
    },
    {
      icon_name: 'cast',
      text: 'Twitter ads',
      selected: false,
    },
    {
      icon_name: 'analytics ',
      text: 'Analytics',
      selected: false,
    },
    {
      icon_name: 'settings',
      text: 'Settings and privacy',
      selected: false,
    },
    {
      icon_name: 'help_outline',
      text: 'Help Center',
      selected: false,
    },
    {
      icon_name: 'format_paint',
      text: 'Display',
      selected: false,
    },
  ];

  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  constructor() {}

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
}
