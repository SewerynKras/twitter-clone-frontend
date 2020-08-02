import { Component, OnInit, Input } from '@angular/core';

export interface buttonSpecInterface {
  icon_name: string;
  text: string;
}

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  @Input() buttonSpec: buttonSpecInterface;
  constructor() {}

  ngOnInit(): void {}
}
