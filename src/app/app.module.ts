import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared/shared.module';
import { MaterialModule } from './shared/modules/material/material.module';
import { ErrorPopupInterceptor } from './core/interceptors/error-popup.interceptor';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LayoutComponent } from './core/layout/layout.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { MenuComponent } from './core/layout/menu/menu.component';
import { StopPropagationDirective } from './shared/directives/stop-propagation.directive';
import { LoginPageComponent } from './modules/login-page/components/login-page/login-page.component';
import { LoginFormComponent } from './modules/login-form/components/login-form/login-form.component';
import { LoginFormUsernameComponent } from './modules/login-form/components/login-form-username/login-form-username.component';
import { LoginFormPasswordComponent } from './modules/login-form/components/login-form-password/login-form-password.component';
import { LoginPageFooterComponent } from './modules/login-page/components/login-page-footer/login-page-footer.component';
import { LoginPageJoinButtonsComponent } from './modules/login-page/components/login-page-join-buttons/login-page-join-buttons.component';
import { LoginPageBulletpointsComponent } from './modules/login-page/components/login-page-bulletpoints/login-page-bulletpoints.component';
import { LoginFormPageComponent } from './modules/login-form-page/components/login-form-page/login-form-page.component';
import { MenuMainComponent } from './core/layout/menu/components/menu-main/menu-main.component';
import { MenuProfileComponent } from './core/layout/menu/components/menu-profile/menu-profile.component';
import { MenuMoreComponent } from './core/layout/menu/components/menu-more/menu-more.component';
import { MenuButtonComponent } from './core/layout/menu/components/menu-button/menu-button.component';
import { MenuProfileDialogComponent } from './core/layout/menu/components/menu-profile-dialog/menu-profile-dialog.component';
import { HeaderLeftSideComponent } from './core/layout/header/components/header-left-side/header-left-side.component';
import { HeaderRightSideComponent } from './core/layout/header/components/header-right-side/header-right-side.component';
import { HeaderMiddleSectionComponent } from './core/layout/header/components/header-middle-section/header-middle-section.component';
import { RightSideComponent } from './core/layout/right-side/right-side.component';
import { RightSideRecommendationsComponent } from './core/layout/right-side/components/right-side-recommendations/right-side-recommendations.component';
import { RightSideRecommendationsProfileComponent } from './core/layout/right-side/components/right-side-recommendations-profile/right-side-recommendations-profile.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    StopPropagationDirective,
    LoginPageComponent,
    LoginFormComponent,
    LoginFormUsernameComponent,
    LoginFormPasswordComponent,
    LoginPageFooterComponent,
    LoginPageJoinButtonsComponent,
    LoginPageBulletpointsComponent,
    LoginFormPageComponent,
    MenuMainComponent,
    MenuProfileComponent,
    MenuMoreComponent,
    MenuButtonComponent,
    MenuProfileDialogComponent,
    HeaderLeftSideComponent,
    HeaderRightSideComponent,
    HeaderMiddleSectionComponent,
    RightSideComponent,
    RightSideRecommendationsComponent,
    RightSideRecommendationsProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorPopupInterceptor,
      multi: true,
    },
    Title,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
