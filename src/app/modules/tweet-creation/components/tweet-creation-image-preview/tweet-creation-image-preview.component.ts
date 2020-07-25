import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-creation-image-preview',
  templateUrl: './tweet-creation-image-preview.component.html',
  styleUrls: ['./tweet-creation-image-preview.component.scss'],
})
export class TweetCreationImagePreviewComponent implements OnInit {
  imageAsUrl: string;
  constructor() {}

  ngOnInit(): void {}

  previewImage(image: File) {
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (_) => {
      this.imageAsUrl = reader.result as string;
    };
  }
}
