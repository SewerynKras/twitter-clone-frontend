import { TweetObjectModule } from './../tweet-object/tweet-object.module';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TweetListComponent],
  exports: [TweetListComponent],
  imports: [CommonModule, SharedModule, MaterialModule, TweetObjectModule],
})
export class TweetListModule {}
