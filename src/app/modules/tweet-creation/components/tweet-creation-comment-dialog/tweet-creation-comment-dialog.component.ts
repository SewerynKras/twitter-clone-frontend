import { TweetResponse } from './../../../../shared/models/tweet.model';
import { TweetCreationComponent } from './../tweet-creation/tweet-creation.component';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tweet-creation-comment-dialog',
  templateUrl: './tweet-creation-comment-dialog.component.html',
  styleUrls: ['./tweet-creation-comment-dialog.component.scss'],
})
export class TweetCreationCommentDialogComponent
  implements OnInit, AfterViewInit {
  @ViewChild(TweetCreationComponent) creationComponent: TweetCreationComponent;
  constructor(@Inject(MAT_DIALOG_DATA) public comment: TweetResponse) {}

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
