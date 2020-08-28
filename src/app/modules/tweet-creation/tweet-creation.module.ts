import { TweetCreationRetweetDialogComponent } from './components/tweet-creation-retweet-dialog/tweet-creation-retweet-dialog.component';
import { TweetCreationCommentDialogComponent } from './components/tweet-creation-comment-dialog/tweet-creation-comment-dialog.component';
import { TweetCreationActionsSubmitComponent } from './components/tweet-creation-actions-submit/tweet-creation-actions-submit.component';
import { TweetCreationActionsEmojiComponent } from './components/tweet-creation-actions-emoji/tweet-creation-actions-emoji.component';
import { TweetCreationActionsImageComponent } from './components/tweet-creation-actions-image/tweet-creation-actions-image.component';
import { TweetCreationActionsComponent } from './components/tweet-creation-actions/tweet-creation-actions.component';
import { TweetCreationImagePreviewComponent } from './components/tweet-creation-image-preview/tweet-creation-image-preview.component';
import { TweetCreationTextareaComponent } from './components/tweet-creation-textarea/tweet-creation-textarea.component';
import { TweetCreationComponent } from './components/tweet-creation/tweet-creation.component';
import { TweetObjectModule } from '../tweet-object/tweet-object.module';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TweetCreationComponent,
    TweetCreationTextareaComponent,
    TweetCreationImagePreviewComponent,
    TweetCreationActionsComponent,
    TweetCreationActionsImageComponent,
    TweetCreationActionsEmojiComponent,
    TweetCreationActionsSubmitComponent,
    TweetCreationCommentDialogComponent,
    TweetCreationRetweetDialogComponent,
  ],
  exports: [
    TweetCreationComponent,
    TweetCreationTextareaComponent,
    TweetCreationImagePreviewComponent,
    TweetCreationActionsComponent,
    TweetCreationActionsImageComponent,
    TweetCreationActionsEmojiComponent,
    TweetCreationActionsSubmitComponent,
    TweetCreationCommentDialogComponent,
    TweetCreationRetweetDialogComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule, TweetObjectModule],
})
export class TweetCreationModule {}
