import { ResizeService } from './../../../../core/services/resize.service';
import { UserProfileResponse } from 'src/app/shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-header',
  templateUrl: './tweet-object-header.component.html',
  styleUrls: ['./tweet-object-header.component.scss'],
})
export class TweetObjectHeaderComponent implements OnInit {
  @Input() user: UserProfileResponse;

  constructor(private resize: ResizeService) {}

  ngOnInit(): void {}
}
