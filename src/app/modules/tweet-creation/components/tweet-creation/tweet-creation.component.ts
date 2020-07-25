import { TweetCreationTextareaComponent } from './../tweet-creation-textarea/tweet-creation-textarea.component';
import { UsersService } from './../../../../core/http/user/users.service';
import { BaseUserProfile } from './../../../../shared/models/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tweet-creation',
  templateUrl: './tweet-creation.component.html',
  styleUrls: ['./tweet-creation.component.scss'],
})
export class TweetCreationComponent implements OnInit {
  @ViewChild(TweetCreationTextareaComponent)
  tweetTextarea: TweetCreationTextareaComponent;

  user: BaseUserProfile;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.user = this.usersService.getBaseUserInfoFromStorage();
  }
}
