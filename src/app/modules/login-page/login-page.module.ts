import { LoginPageRoutingModule } from './login-page.routes';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginPageFooterComponent } from './components/login-page-footer/login-page-footer.component';
import { LoginPageJoinButtonsComponent } from './components/login-page-join-buttons/login-page-join-buttons.component';
import { LoginPageBulletpointsComponent } from './components/login-page-bulletpoints/login-page-bulletpoints.component';
import { LoginFormModule } from '../login-form/login-form.module';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginPageFooterComponent,
    LoginPageJoinButtonsComponent,
    LoginPageBulletpointsComponent,
  ],
  exports: [
    LoginPageComponent,
    LoginPageFooterComponent,
    LoginPageJoinButtonsComponent,
    LoginPageBulletpointsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LoginPageRoutingModule,
    LoginFormModule,
  ],
})
export class LoginPageModule {}
