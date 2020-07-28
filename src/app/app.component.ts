import { UsersService } from './core/http/user/users.service';
import { AuthService } from './core/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}
  ngOnInit(): void {
    // If there's a saved token in localstorage it means that the user
    // was logged in before, so their profile data needs to be loaded
    if (this.authService.isAuthenticated())
      this.usersService.getMyProfile().subscribe();
  }
}
