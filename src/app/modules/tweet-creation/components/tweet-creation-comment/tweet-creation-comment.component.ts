import {
  TweetPOSTBody,
  TweetResponse,
} from './../../../../shared/models/tweet.model';
import { TweetCreationComponent } from './../tweet-creation/tweet-creation.component';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-tweet-creation-comment',
  templateUrl: './tweet-creation-comment.component.html',
  styleUrls: ['./tweet-creation-comment.component.scss'],
})
export class TweetCreationCommentComponent implements OnInit, AfterViewInit {
  @Input() comment: TweetResponse;

  @ViewChild(TweetCreationComponent) creationComponent: TweetCreationComponent;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Override the `getTweetBody` method to include a comment_id
    var baseMethod = this.creationComponent.getTweetBody;
    var comment_id = this.comment.id;
    this.creationComponent.getTweetBody = function () {
      var body = baseMethod.apply(this, arguments);
      body.comment_id = comment_id;
      return body;
    };
  }
}
