import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet-creation-actions-emoji',
  templateUrl: './tweet-creation-actions-emoji.component.html',
  styleUrls: ['./tweet-creation-actions-emoji.component.scss'],
})
export class TweetCreationActionsEmojiComponent implements OnInit {
  @Output() emojiSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  toggled: boolean = false;

  /**
   * This method gets called by the emoji picker once a selection has been made.
   * It emits the selected emoji vie the emojiSelected EventEmitter.
   * @param event
   */
  handleSelection(event) {
    this.emojiSelected.emit(event.char);
  }
}
