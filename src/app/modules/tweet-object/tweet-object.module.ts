import { TweetObjectImageComponent } from './components/tweet-object-image/tweet-object-image.component';
import { TweetObjectPureRetweetComponent } from './components/tweet-object-pure-retweet/tweet-object-pure-retweet.component';
import { TweetObjectStandardComponent } from './components/tweet-object-standard/tweet-object-standard.component';
import { TweetObjectRetweetAnnotationComponent } from './components/tweet-object-retweet-annotation/tweet-object-retweet-annotation.component';
import { TweetObjectPreviewComponent } from './components/tweet-object-preview/tweet-object-preview.component';
import { TweetObjectAuthorPictureComponent } from './components/tweet-object-author-picture/tweet-object-author-picture.component';
import { TweetObjectActionsRetweetButtonComponent } from './components/tweet-object-actions-retweet-button/tweet-object-actions-retweet-button.component';
import { TweetObjectActionsCommentButtonComponent } from './components/tweet-object-actions-comment-button/tweet-object-actions-comment-button.component';
import { TweetObjectActionsLikeButtonComponent } from './components/tweet-object-actions-like-button/tweet-object-actions-like-button.component';
import { TweetObjectCreatedDateComponent } from './components/tweet-object-created-date/tweet-object-created-date.component';
import { TweetObjectActionsShareComponent } from './components/tweet-object-actions-share/tweet-object-actions-share.component';
import { TweetObjectActionsRetweetComponent } from './components/tweet-object-actions-retweet/tweet-object-actions-retweet.component';
import { TweetObjectActionsCommentComponent } from './components/tweet-object-actions-comment/tweet-object-actions-comment.component';
import { TweetObjectActionsLikeComponent } from './components/tweet-object-actions-like/tweet-object-actions-like.component';
import { TweetObjectActionsComponent } from './components/tweet-object-actions/tweet-object-actions.component';
import { TweetObjectHeaderComponent } from './components/tweet-object-header/tweet-object-header.component';
import { TweetObjectComponent } from './components/tweet-object/tweet-object.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TweetObjectComponent,
    TweetObjectHeaderComponent,
    TweetObjectActionsComponent,
    TweetObjectActionsLikeComponent,
    TweetObjectActionsCommentComponent,
    TweetObjectActionsRetweetComponent,
    TweetObjectActionsShareComponent,
    TweetObjectCreatedDateComponent,
    TweetObjectActionsLikeButtonComponent,
    TweetObjectActionsCommentButtonComponent,
    TweetObjectActionsRetweetButtonComponent,
    TweetObjectAuthorPictureComponent,
    TweetObjectPreviewComponent,
    TweetObjectRetweetAnnotationComponent,
    TweetObjectStandardComponent,
    TweetObjectPureRetweetComponent,
    TweetObjectImageComponent,
  ],
  exports: [
    TweetObjectComponent,
    TweetObjectHeaderComponent,
    TweetObjectActionsComponent,
    TweetObjectActionsLikeComponent,
    TweetObjectActionsCommentComponent,
    TweetObjectActionsRetweetComponent,
    TweetObjectActionsShareComponent,
    TweetObjectCreatedDateComponent,
    TweetObjectActionsLikeButtonComponent,
    TweetObjectActionsCommentButtonComponent,
    TweetObjectActionsRetweetButtonComponent,
    TweetObjectAuthorPictureComponent,
    TweetObjectPreviewComponent,
    TweetObjectRetweetAnnotationComponent,
    TweetObjectStandardComponent,
    TweetObjectPureRetweetComponent,
    TweetObjectImageComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export class TweetObjectModule {}
