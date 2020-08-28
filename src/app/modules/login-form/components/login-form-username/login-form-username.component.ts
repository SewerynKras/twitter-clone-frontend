import { BaseInputComponent } from './../../../../shared/modules/shared/components/base-input/base-input.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-form-username',
  templateUrl: './login-form-username.component.html',
  styleUrls: ['./login-form-username.component.scss'],
})
export class LoginFormUsernameComponent
  extends BaseInputComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
