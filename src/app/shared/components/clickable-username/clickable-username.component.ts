import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clickable-username',
  templateUrl: './clickable-username.component.html',
  styleUrls: ['./clickable-username.component.scss'],
})
export class ClickableUsernameComponent implements OnInit {
  @Input() username: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * Navigate to the selected profile
   */
  navigateToProfile(): void {
    this.router.navigate([`profile/${this.username}/`]);
  }
}
