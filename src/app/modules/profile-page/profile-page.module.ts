import { TweetListModule } from './../tweet-list/tweet-list.module';
import { ProfilePageRoutingModule } from './profile-page.routes';
import { ProfilePageEditFormImageComponent } from './components/profile-page-edit-form-image/profile-page-edit-form-image.component';
import { ProfilePageEditFormComponent } from './components/profile-page-edit-form/profile-page-edit-form.component';
import { ProfilePageHeaderButtonsEditComponent } from './components/profile-page-header-buttons-edit/profile-page-header-buttons-edit.component';
import { ProfilePageEditDialogComponent } from './components/profile-page-edit-dialog/profile-page-edit-dialog.component';
import { ProfilePageInfoComponent } from './components/profile-page-info/profile-page-info.component';
import { ProfilePageHeaderBannerComponent } from './components/profile-page-header-banner/profile-page-header-banner.component';
import { ProfilePageHeaderProfilePicComponent } from './components/profile-page-header-profile-pic/profile-page-header-profile-pic.component';
import { ProfilePageHeaderButtonsFollowComponent } from './components/profile-page-header-buttons-follow/profile-page-header-buttons-follow.component';
import { ProfilePageHeaderButtonsComponent } from './components/profile-page-header-buttons/profile-page-header-buttons.component';
import { ProfilePageNameComponent } from './components/profile-page-name/profile-page-name.component';
import { ProfilePageFollowersComponent } from './components/profile-page-followers/profile-page-followers.component';
import { ProfilePageBioComponent } from './components/profile-page-bio/profile-page-bio.component';
import { ProfilePageHeaderComponent } from './components/profile-page-header/profile-page-header.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
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
    ProfilePageEditDialogComponent,
    ProfilePageHeaderButtonsEditComponent,
    ProfilePageEditFormComponent,
    ProfilePageEditFormImageComponent,
  ],
  exports: [
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
    ProfilePageEditDialogComponent,
    ProfilePageHeaderButtonsEditComponent,
    ProfilePageEditFormComponent,
    ProfilePageEditFormImageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfilePageRoutingModule,
    MaterialModule,
    TweetListModule,
  ],
})
export class ProfilePageModule {}
