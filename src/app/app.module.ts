import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './core/layout/layout.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { MenuComponent } from './core/layout/menu/menu.component';
import { TweetObjectComponent } from './modules/tweet-object/components/tweet-object/tweet-object.component';
import { TweetListComponent } from './modules/tweet-list/components/tweet-list/tweet-list.component';
import { ClickableUsernameComponent } from './shared/components/clickable-username/clickable-username.component';
import { TweetObjectHeaderComponent } from './modules/tweet-object/components/tweet-object-header/tweet-object-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    TweetObjectComponent,
    TweetListComponent,
    ClickableUsernameComponent,
    TweetObjectHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
