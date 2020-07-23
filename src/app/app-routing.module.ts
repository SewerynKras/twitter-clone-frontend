import { TweetListRoutes } from './modules/tweet-list/tweet-list.routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tweets/', children: TweetListRoutes },
  // { path: 'tweets/:id/', component: TweetSingleRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
