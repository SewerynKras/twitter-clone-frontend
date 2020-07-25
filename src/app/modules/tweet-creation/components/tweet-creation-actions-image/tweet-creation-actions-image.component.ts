import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet-creation-actions-image',
  templateUrl: './tweet-creation-actions-image.component.html',
  styleUrls: ['./tweet-creation-actions-image.component.scss'],
})
export class TweetCreationActionsImageComponent implements OnInit {
  @Output() fileAdded = new EventEmitter<File>();
  constructor() {}

  ngOnInit(): void {}

  /**
   * This method gets called after a file has been selected.
   * This emits the `fileAdded` EventEmitter.
   * @param $event
   */
  handleFileAdded($event) {
    this.fileAdded.emit($event.target.files[0]);
  }
}
