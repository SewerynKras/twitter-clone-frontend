import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  // Throwaway method
  forceLogin() {
    this.auth.login('admin', '1234QWERqwer').subscribe();
  }
}
