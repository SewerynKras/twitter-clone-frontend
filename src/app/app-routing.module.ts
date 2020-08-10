import { ProfilePageRoutes } from './modules/profile-page/tweet-object.routes';
import { LoginFormPageRoutes } from './modules/login-form-page/login-form-page.routes';
import { LoginPageRoutes } from './modules/login-page/login-page.routes';
import { TweetPageRoutes } from './modules/tweet-page/tweet-object.routes';
import { TweetListRoutes } from './modules/tweet-list/tweet-list.routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', children: LoginPageRoutes },
  { path: 'login', children: LoginFormPageRoutes },
  { path: 'tweets', children: TweetListRoutes },
  { path: 'tweets/:tweet_id', children: TweetPageRoutes },
  { path: 'profile/:username', children: ProfilePageRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
