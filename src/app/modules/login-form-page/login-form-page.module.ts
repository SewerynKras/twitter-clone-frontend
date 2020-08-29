import { LoginFormPageRoutingModule } from './login-form-page.routes';
import { LoginFormModule } from './../login-form/login-form.module';
import { LoginFormPageComponent } from './components/login-form-page/login-form-page.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginFormPageComponent],
  exports: [LoginFormPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LoginFormPageRoutingModule,
    LoginFormModule,
  ],
})
export class LoginFormPageModule {}
