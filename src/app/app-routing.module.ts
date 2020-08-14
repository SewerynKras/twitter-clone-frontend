import { AuthGuard } from './core/guards/auth.guard';
import { TweetListPageRoutes } from './modules/tweet-list-page/tweet-list-page.routes';
import { ProfilePageRoutes } from './modules/profile-page/profile-page.routes';
import { LoginFormPageRoutes } from './modules/login-form-page/login-form-page.routes';
import { LoginPageRoutes } from './modules/login-page/login-page.routes';
import { TweetPageRoutes } from './modules/tweet-page/tweet-object.routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', children: LoginPageRoutes },
  { path: 'login', children: LoginFormPageRoutes },
  {
    path: 'tweets',
    children: TweetListPageRoutes,
    canActivateChild: [AuthGuard],
  },
  {
    path: 'tweets/:tweet_id',
    children: TweetPageRoutes,
    canActivateChild: [AuthGuard],
  },
  {
    path: 'profile/:username',
    children: ProfilePageRoutes,
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
