import { MaterialModule } from './../material/material.module';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { ClickableUsernameComponent } from './components/clickable-username/clickable-username.component';
import { BaseInputComponent } from './components/base-input/base-input.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ClipboardModule } from 'ngx-clipboard';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { TextFieldModule } from '@angular/cdk/text-field';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPictureComponent } from './components/user-picture/user-picture.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    InfiniteScrollComponent,
    BaseInputComponent,
    ClickableUsernameComponent,
    ImageDialogComponent,
    UserPictureComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    TextFieldModule,
    NgxEmojiPickerModule.forRoot(),
    ReactiveFormsModule,
    InfiniteScrollModule,
    ClipboardModule,
  ],
  exports: [
    FlexLayoutModule,
    HttpClientModule,
    TextFieldModule,
    NgxEmojiPickerModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ClipboardModule,
    InfiniteScrollComponent,
    BaseInputComponent,
    ClickableUsernameComponent,
    ImageDialogComponent,
    UserInfoComponent,
    UserPictureComponent,
  ],
})
export class SharedModule {}
