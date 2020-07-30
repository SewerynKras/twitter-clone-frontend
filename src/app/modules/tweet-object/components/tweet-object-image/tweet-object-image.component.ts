import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet-object-image',
  templateUrl: './tweet-object-image.component.html',
  styleUrls: ['./tweet-object-image.component.scss'],
})
export class TweetObjectImageComponent implements OnInit {
  @Input() imageAsUrl: string = '';

  @Output() imageClicked = new EventEmitter<void>();
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
   * Emits the `imageClicked` emitter.
   */
  emitImageClicked() {
    this.imageClicked.emit();
  }
}
