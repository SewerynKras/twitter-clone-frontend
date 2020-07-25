import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tweet-creation-textarea',
  templateUrl: './tweet-creation-textarea.component.html',
  styleUrls: ['./tweet-creation-textarea.component.scss'],
})
export class TweetCreationTextareaComponent implements OnInit {
  @ViewChild('TweetTextarea') tweetTextarea: ElementRef<any>;
  innerHTML: string;
  constructor() {}

  ngOnInit(): void {}

  /**
   * After removing all text from a contenteditable div only a <br> tag is left in the end
   * so it needs to be manually removed in order for the :empty pseudoselector to work
   * properly (the placeholder value is added via css in `./tweet-creation-textarea.component.scss`)
   * @param $event InputEvent
   */
  checkInput($event) {
    if ($event.target.innerHTML.trim() === '<br>') $event.target.innerHTML = '';
  }

  /**
   * Retrieves the raw text from the contenteditable div
   */
  getTextareaValue(): string {
    return this.tweetTextarea.nativeElement.innerText;
  }
}
