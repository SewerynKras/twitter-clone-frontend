import { TweetPageRoutingModule } from './tweet-page.routes';
import { TweetObjectModule } from './../tweet-object/tweet-object.module';
import { TweetPageFooterComponent } from './components/tweet-page-footer/tweet-page-footer.component';
import { TweetPageCreatedInfoComponent } from './components/tweet-page-created-info/tweet-page-created-info.component';
import { TweetPageStatusComponent } from './components/tweet-page-status/tweet-page-status.component';
import { TweetPageActionsComponent } from './components/tweet-page-actions/tweet-page-actions.component';
import { TweetPageComponent } from './components/tweet-page/tweet-page.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TweetPageComponent,
    TweetPageActionsComponent,
    TweetPageStatusComponent,
    TweetPageCreatedInfoComponent,
    TweetPageFooterComponent,
  ],
  exports: [
    TweetPageComponent,
    TweetPageActionsComponent,
    TweetPageStatusComponent,
    TweetPageCreatedInfoComponent,
    TweetPageFooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    TweetPageRoutingModule,
    TweetObjectModule,
  ],
})
export class TweetPageModule {}
