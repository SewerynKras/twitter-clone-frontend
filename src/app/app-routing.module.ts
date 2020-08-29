import { NotLoggedInGuard } from './core/guards/not-logged-in.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
    canActivateChild: [NotLoggedInGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login-form-page/login-form-page.module').then(
        (m) => m.LoginFormPageModule
      ),
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
    loadChildren: () =>
      import('./modules/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
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
