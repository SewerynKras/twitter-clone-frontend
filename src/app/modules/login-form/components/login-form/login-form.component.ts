import { UsersService } from './../../../../core/http/user/users.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './../../../../core/auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface formData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  @Input() layout: 'row' | 'column' = 'row';
  hasError: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit(): void {
    this.authenticate();
  }

  /**
   * Retrieves the form's value
   */
  getFormData(): formData {
    return this.loginForm.value;
  }

  /**
   * Retrieves the values from the form and forwards
   * it to the auth service.
   * If login is successful the user gets redirected to the
   * `tweets/` page.
   * During the authentication process the login button get disabled.
   */
  authenticate(): void {
    let data: formData = this.getFormData();
    this.authService.login(data.username, data.password).subscribe(
      () => {
        this.router.navigate(['tweets/']);
      },
      (err) => {
        this.hasError = true;
        console.error(err);
      }
    );
  }
}
