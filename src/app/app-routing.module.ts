import { NotLoggedInGuard } from './core/guards/not-logged-in.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfilePageRoutes } from './modules/profile-page/profile-page.routes';
import { LoginFormPageRoutes } from './modules/login-form-page/login-form-page.routes';
import { LoginPageRoutes } from './modules/login-page/login-page.routes';
import { TweetPageRoutes } from './modules/tweet-page/tweet-page.routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', children: LoginPageRoutes, canActivateChild: [NotLoggedInGuard] },
  {
    path: 'login',
    children: LoginFormPageRoutes,
    canActivateChild: [NotLoggedInGuard],
  },
  {
    path: 'tweets/:tweet_id',
    loadChildren: () =>
      import('./modules/tweet-page/tweet-page.module').then(
        (m) => m.TweetPageModule
      ),
    canActivateChild: [AuthGuard],
  },
  {
    path: 'profile/:username',
    children: ProfilePageRoutes,
    canActivateChild: [AuthGuard],
  },
  {
    path: 'tweets',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./modules/tweet-list-page/tweet-list-page.module').then(
        (m) => m.TweetListPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
