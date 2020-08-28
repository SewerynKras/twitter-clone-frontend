import { TweetCreationModule } from './../tweet-creation/tweet-creation.module';
import { TweetListModule } from './../tweet-list/tweet-list.module';
import { MaterialModule } from './../../shared/modules/material/material.module';
import { SharedModule } from './../../shared/modules/shared/shared.module';
import { TweetListPageComponent } from './components/tweet-list-page/tweet-list-page.component';
import { TweetListPageRoutingModule } from './tweet-list-page.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TweetListPageComponent],
  exports: [TweetListPageComponent],
  imports: [
    CommonModule,
    TweetListPageRoutingModule,
    SharedModule,
    MaterialModule,
    TweetListModule,
    TweetCreationModule,
  ],
})
export class TweetListPageModule {}
