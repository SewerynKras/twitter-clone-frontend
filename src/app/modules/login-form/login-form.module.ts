import { LoginFormRoutingModule } from './login-form.routes';
import { LoginFormUsernameComponent } from './components/login-form-username/login-form-username.component';
import { LoginFormPasswordComponent } from './components/login-form-password/login-form-password.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginFormPasswordComponent,
    LoginFormUsernameComponent,
  ],
  exports: [
    LoginFormComponent,
    LoginFormPasswordComponent,
    LoginFormUsernameComponent,
  ],
  imports: [CommonModule, SharedModule, LoginFormRoutingModule, MaterialModule],
})
export class LoginFormModule {}
