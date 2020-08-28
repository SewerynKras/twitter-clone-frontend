import { InfiniteScrollComponent } from './../../components/infinite-scroll/infinite-scroll.component';
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
  declarations: [InfiniteScrollComponent],
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
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    TextFieldModule,
    NgxEmojiPickerModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ClipboardModule,
    InfiniteScrollComponent,
  ],
})
export class SharedModule {}
