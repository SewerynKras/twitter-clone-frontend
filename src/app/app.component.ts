import { Router } from '@angular/router';
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

  constructor() {}
  ngOnInit(): void {}
}
