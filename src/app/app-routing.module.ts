import { TweetPageRoutes } from './modules/tweet-page/tweet-object.routes';
import { TweetListRoutes } from './modules/tweet-list/tweet-list.routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tweets', children: TweetListRoutes },
  { path: 'tweets/:tweet_id', children: TweetPageRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
