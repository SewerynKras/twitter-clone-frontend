import { ClipboardModule } from 'ngx-clipboard';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { TextFieldModule } from '@angular/cdk/text-field';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    TextFieldModule,
    NgxEmojiPickerModule.forRoot(),
    ReactiveFormsModule,
    InfiniteScrollModule,
    ClipboardModule,
  ],
})
export class SharedModule {}
