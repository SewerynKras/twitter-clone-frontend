import { ErrorPopupInterceptor } from './core/interceptors/error-popup.interceptor';
import { BrowserModule, Title } from '@angular/platform-browser';
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
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { LoginPageComponent } from './modules/login-page/components/login-page/login-page.component';
import { LoginFormComponent } from './modules/login-form/components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormUsernameComponent } from './modules/login-form/components/login-form-username/login-form-username.component';
import { LoginFormPasswordComponent } from './modules/login-form/components/login-form-password/login-form-password.component';
import { BaseInputComponent } from './shared/components/base-input/base-input.component';
import { LoginPageFooterComponent } from './modules/login-page/components/login-page-footer/login-page-footer.component';
import { LoginPageJoinButtonsComponent } from './modules/login-page/components/login-page-join-buttons/login-page-join-buttons.component';
import { LoginPageBulletpointsComponent } from './modules/login-page/components/login-page-bulletpoints/login-page-bulletpoints.component';
import { LoginFormPageComponent } from './modules/login-form-page/components/login-form-page/login-form-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TweetCreationCommentDialogComponent } from './modules/tweet-creation/components/tweet-creation-comment-dialog/tweet-creation-comment-dialog.component';
import { TweetObjectPreviewComponent } from './modules/tweet-object/components/tweet-object-preview/tweet-object-preview.component';
import { TweetCreationRetweetDialogComponent } from './modules/tweet-creation/components/tweet-creation-retweet-dialog/tweet-creation-retweet-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { TweetObjectRetweetAnnotationComponent } from './modules/tweet-object/components/tweet-object-retweet-annotation/tweet-object-retweet-annotation.component';
import { TweetObjectStandardComponent } from './modules/tweet-object/components/tweet-object-standard/tweet-object-standard.component';
import { TweetObjectPureRetweetComponent } from './modules/tweet-object/components/tweet-object-pure-retweet/tweet-object-pure-retweet.component';
import { ImageDialogComponent } from './shared/components/image-dialog/image-dialog.component';
import { TweetObjectImageComponent } from './modules/tweet-object/components/tweet-object-image/tweet-object-image.component';
import { MenuMainComponent } from './core/layout/menu/components/menu-main/menu-main.component';
import { MenuProfileComponent } from './core/layout/menu/components/menu-profile/menu-profile.component';
import { MenuMoreComponent } from './core/layout/menu/components/menu-more/menu-more.component';
import { MenuButtonComponent } from './core/layout/menu/components/menu-button/menu-button.component';
import { MenuProfileDialogComponent } from './core/layout/menu/components/menu-profile-dialog/menu-profile-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { InfiniteScrollComponent } from './shared/components/infinite-scroll/infinite-scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProfilePageComponent } from './modules/profile-page/components/profile-page/profile-page.component';
import { ProfilePageHeaderComponent } from './modules/profile-page/components/profile-page-header/profile-page-header.component';
import { ProfilePageBioComponent } from './modules/profile-page/components/profile-page-bio/profile-page-bio.component';
import { ProfilePageFollowersComponent } from './modules/profile-page/components/profile-page-followers/profile-page-followers.component';
import { ProfilePageNameComponent } from './modules/profile-page/components/profile-page-name/profile-page-name.component';
import { ProfilePageHeaderButtonsComponent } from './modules/profile-page/components/profile-page-header-buttons/profile-page-header-buttons.component';
import { ProfilePageHeaderButtonsFollowComponent } from './modules/profile-page/components/profile-page-header-buttons-follow/profile-page-header-buttons-follow.component';
import { ProfilePageHeaderProfilePicComponent } from './modules/profile-page/components/profile-page-header-profile-pic/profile-page-header-profile-pic.component';
import { ProfilePageHeaderBannerComponent } from './modules/profile-page/components/profile-page-header-banner/profile-page-header-banner.component';
import { ProfilePageInfoComponent } from './modules/profile-page/components/profile-page-info/profile-page-info.component';
import { TweetListPageComponent } from './modules/tweet-list-page/components/tweet-list-page/tweet-list-page.component';
import { HeaderLeftSideComponent } from './core/layout/header/components/header-left-side/header-left-side.component';
import { HeaderRightSideComponent } from './core/layout/header/components/header-right-side/header-right-side.component';
import { HeaderMiddleSectionComponent } from './core/layout/header/components/header-middle-section/header-middle-section.component';
import { RightSideComponent } from './core/layout/right-side/right-side.component';
import { RightSideRecommendationsComponent } from './core/layout/right-side/components/right-side-recommendations/right-side-recommendations.component';
import { RightSideRecommendationsProfileComponent } from './core/layout/right-side/components/right-side-recommendations-profile/right-side-recommendations-profile.component';
import { ClipboardModule } from 'ngx-clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProfilePageEditDialogComponent } from './modules/profile-page/components/profile-page-edit-dialog/profile-page-edit-dialog.component';
import { ProfilePageHeaderButtonsEditComponent } from './modules/profile-page/components/profile-page-header-buttons-edit/profile-page-header-buttons-edit.component';
import { ProfilePageEditFormComponent } from './modules/profile-page/components/profile-page-edit-form/profile-page-edit-form.component';
import { ProfilePageEditFormImageComponent } from './modules/profile-page/components/profile-page-edit-form-image/profile-page-edit-form-image.component';

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
    LoginPageComponent,
    LoginFormComponent,
    LoginFormUsernameComponent,
    LoginFormPasswordComponent,
    BaseInputComponent,
    LoginPageFooterComponent,
    LoginPageJoinButtonsComponent,
    LoginPageBulletpointsComponent,
    LoginFormPageComponent,
    TweetCreationCommentDialogComponent,
    TweetObjectPreviewComponent,
    TweetCreationRetweetDialogComponent,
    TweetObjectRetweetAnnotationComponent,
    TweetObjectStandardComponent,
    TweetObjectPureRetweetComponent,
    ImageDialogComponent,
    TweetObjectImageComponent,
    MenuMainComponent,
    MenuProfileComponent,
    MenuMoreComponent,
    MenuButtonComponent,
    MenuProfileDialogComponent,
    InfiniteScrollComponent,
    ProfilePageComponent,
    ProfilePageHeaderComponent,
    ProfilePageBioComponent,
    ProfilePageFollowersComponent,
    ProfilePageNameComponent,
    ProfilePageHeaderButtonsComponent,
    ProfilePageHeaderButtonsFollowComponent,
    ProfilePageHeaderProfilePicComponent,
    ProfilePageHeaderBannerComponent,
    ProfilePageInfoComponent,
    TweetListPageComponent,
    HeaderLeftSideComponent,
    HeaderRightSideComponent,
    HeaderMiddleSectionComponent,
    RightSideComponent,
    RightSideRecommendationsComponent,
    RightSideRecommendationsProfileComponent,
    ProfilePageEditDialogComponent,
    ProfilePageHeaderButtonsEditComponent,
    ProfilePageEditFormComponent,
    ProfilePageEditFormImageComponent,
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
    NgxEmojiPickerModule.forRoot(),
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    InfiniteScrollModule,
    ClipboardModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorPopupInterceptor,
      multi: true,
    },
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
