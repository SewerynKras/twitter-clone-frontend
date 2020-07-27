import { BaseInputComponent } from './../../../../shared/components/base-input/base-input.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-password',
  templateUrl: './login-form-password.component.html',
  styleUrls: ['./login-form-password.component.scss'],
})
export class LoginFormPasswordComponent extends BaseInputComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
