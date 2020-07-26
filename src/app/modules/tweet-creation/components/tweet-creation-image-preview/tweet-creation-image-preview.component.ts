import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-creation-image-preview',
  templateUrl: './tweet-creation-image-preview.component.html',
  styleUrls: ['./tweet-creation-image-preview.component.scss'],
})
export class TweetCreationImagePreviewComponent implements OnInit {
  @Input() imageAsUrl: string = '';
  constructor() {}

  ngOnInit(): void {}

  previewImage(image: File) {
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (_) => {
      this.imageAsUrl = reader.result as string;
    };
  }

  /**
   * Removes all data being held in this control.
   * (removes the preview image)
   */
  clearControl(): void {
    this.imageAsUrl = '';
  }
}
