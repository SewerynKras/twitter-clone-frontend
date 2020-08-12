import { HeaderTitleService } from './../../shared/services/header-title.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  userLoggedIn: boolean;

  constructor(
    private auth: AuthService,
    private title: Title,
    private titleService: HeaderTitleService
  ) {}

  ngOnInit(): void {
    // Certain ui elements are hidden if the user is not logged in yet
    this.auth.loginStatusChange.subscribe((val) => (this.userLoggedIn = val));

    // Update the title alongside the header's title
    this.titleService.titleChange.subscribe((title) => {
      this.title.setTitle(title + ' / Twitter');
    });
  }
}
