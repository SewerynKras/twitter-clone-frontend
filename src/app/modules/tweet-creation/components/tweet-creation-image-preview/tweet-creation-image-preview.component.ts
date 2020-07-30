import { TweetObjectImageComponent } from './../../../tweet-object/components/tweet-object-image/tweet-object-image.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tweet-creation-image-preview',
  templateUrl: './tweet-creation-image-preview.component.html',
  styleUrls: ['./tweet-creation-image-preview.component.scss'],
})
export class TweetCreationImagePreviewComponent implements OnInit {
  @ViewChild(TweetObjectImageComponent)
  imageComponent: TweetObjectImageComponent;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Removes all data being held in this control.
   * (removes the preview image)
   */
  clearControl(): void {
    this.imageComponent.imageAsUrl = '';
  }
}
