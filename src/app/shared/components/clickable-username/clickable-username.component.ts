import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clickable-username',
  templateUrl: './clickable-username.component.html',
  styleUrls: ['./clickable-username.component.scss'],
})
export class ClickableUsernameComponent implements OnInit {
  @Input() username: string;
  constructor() {}

  ngOnInit(): void {}

  navigateToProfile(): void {
    throw 'not implemented';
  }
}
