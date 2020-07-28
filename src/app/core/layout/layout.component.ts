import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  userLoggedIn: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    // Certain ui elements are hidden if the user is not logged in yet
    this.auth.loginStatusChange.subscribe((val) => (this.userLoggedIn = val));
  }
}
