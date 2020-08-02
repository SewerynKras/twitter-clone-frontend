import { Component, OnInit, Input } from '@angular/core';

export interface ButtonSpecInterface {
  icon_name: string;
  text: string;
  selected: boolean;
}

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  @Input() buttonSpec: ButtonSpecInterface;
  constructor() {}

  ngOnInit(): void {}
}
