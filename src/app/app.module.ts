import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './core/layout/layout.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { MenuComponent } from './core/layout/menu/menu.component';
import { TweetObjectComponent } from './modules/tweet-object/components/tweet-object/tweet-object.component';
import { TweetListComponent } from './modules/tweet-list/components/tweet-list/tweet-list.component';
import { ClickableUsernameComponent } from './shared/components/clickable-username/clickable-username.component';
import { TweetObjectHeaderComponent } from './modules/tweet-object/components/tweet-object-header/tweet-object-header.component';
import { TweetObjectActionsComponent } from './modules/tweet-object/components/tweet-object-actions/tweet-object-actions.component';
import { TweetObjectActionsLikeComponent } from './modules/tweet-object/components/tweet-object-actions-like/tweet-object-actions-like.component';
import { TweetObjectActionsCommentComponent } from './modules/tweet-object/components/tweet-object-actions-comment/tweet-object-actions-comment.component';
import { TweetObjectActionsRetweetComponent } from './modules/tweet-object/components/tweet-object-actions-retweet/tweet-object-actions-retweet.component';
import { TweetObjectActionsShareComponent } from './modules/tweet-object/components/tweet-object-actions-share/tweet-object-actions-share.component';
import { TweetObjectCreatedDateComponent } from './modules/tweet-object/components/tweet-object-created-date/tweet-object-created-date.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TweetPageComponent } from './modules/tweet-page/components/tweet-page/tweet-page.component';
import { TweetObjectActionsLikeButtonComponent } from './modules/tweet-object/components/tweet-object-actions-like-button/tweet-object-actions-like-button.component';
import { TweetObjectActionsCommentButtonComponent } from './modules/tweet-object/components/tweet-object-actions-comment-button/tweet-object-actions-comment-button.component';
import { TweetObjectActionsRetweetButtonComponent } from './modules/tweet-object/components/tweet-object-actions-retweet-button/tweet-object-actions-retweet-button.component';
import { TweetPageActionsComponent } from './modules/tweet-page/components/tweet-page-actions/tweet-page-actions.component';
import { TweetPageStatusComponent } from './modules/tweet-page/components/tweet-page-status/tweet-page-status.component';
import { TweetPageCreatedInfoComponent } from './modules/tweet-page/components/tweet-page-created-info/tweet-page-created-info.component';
import { TweetPageFooterComponent } from './modules/tweet-page/components/tweet-page-footer/tweet-page-footer.component';
import { StopPropagationDirective } from './shared/directives/stop-propagation.directive';
import { TweetCreationComponent } from './modules/tweet-creation/components/tweet-creation/tweet-creation.component';
import { TweetCreationTextareaComponent } from './modules/tweet-creation/components/tweet-creation-textarea/tweet-creation-textarea.component';
import { TweetCreationImagePreviewComponent } from './modules/tweet-creation/components/tweet-creation-image-preview/tweet-creation-image-preview.component';
import { TweetCreationActionsComponent } from './modules/tweet-creation/components/tweet-creation-actions/tweet-creation-actions.component';
import { TweetCreationActionsImageComponent } from './modules/tweet-creation/components/tweet-creation-actions-image/tweet-creation-actions-image.component';
import { TweetCreationActionsEmojiComponent } from './modules/tweet-creation/components/tweet-creation-actions-emoji/tweet-creation-actions-emoji.component';
import { TweetObjectAuthorPictureComponent } from './modules/tweet-object/components/tweet-object-author-picture/tweet-object-author-picture.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TweetCreationActionsSubmitComponent } from './modules/tweet-creation/components/tweet-creation-actions-submit/tweet-creation-actions-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    TweetObjectComponent,
    TweetListComponent,
    ClickableUsernameComponent,
    TweetObjectHeaderComponent,
    TweetObjectActionsComponent,
    TweetObjectActionsLikeComponent,
    TweetObjectActionsCommentComponent,
    TweetObjectActionsRetweetComponent,
    TweetObjectActionsShareComponent,
    TweetObjectCreatedDateComponent,
    TweetPageComponent,
    TweetObjectActionsLikeButtonComponent,
    TweetObjectActionsCommentButtonComponent,
    TweetObjectActionsRetweetButtonComponent,
    TweetPageActionsComponent,
    TweetPageStatusComponent,
    TweetPageCreatedInfoComponent,
    TweetPageFooterComponent,
    StopPropagationDirective,
    TweetCreationComponent,
    TweetCreationTextareaComponent,
    TweetCreationImagePreviewComponent,
    TweetCreationActionsComponent,
    TweetCreationActionsImageComponent,
    TweetCreationActionsEmojiComponent,
    TweetObjectAuthorPictureComponent,
    TweetCreationActionsSubmitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
