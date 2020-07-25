import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet-creation-actions-submit',
  templateUrl: './tweet-creation-actions-submit.component.html',
  styleUrls: ['./tweet-creation-actions-submit.component.scss'],
})
export class TweetCreationActionsSubmitComponent implements OnInit {
  controlDisabled = true;
  @Output() buttonClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  /**
   * Emits the `buttonClicked` EventEmitter 
   */
  emitButtonClicked() {
    this.buttonClicked.emit();
  }
}
