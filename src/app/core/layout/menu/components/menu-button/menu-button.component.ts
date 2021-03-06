import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ButtonSpecInterface {
  icon_name: string;
  text: string;
  selected: boolean;
  onClick?: Function;
}

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  @Input() buttonSpec: ButtonSpecInterface;

  @Output() buttonClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  /**
   * Emits the `buttonClicked` emitter.
   */
  emitButtonClicked(): void {
    this.buttonClicked.emit();
  }
}
