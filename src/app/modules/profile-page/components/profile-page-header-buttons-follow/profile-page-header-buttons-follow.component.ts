import { FollowsService } from './../../../../core/http/follow/follows.service';
import { UserProfileResponse } from './../../../../shared/models/user.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page-header-buttons-follow',
  templateUrl: './profile-page-header-buttons-follow.component.html',
  styleUrls: ['./profile-page-header-buttons-follow.component.scss'],
})
export class ProfilePageHeaderButtonsFollowComponent implements OnInit {
  @Input() user: UserProfileResponse;
  @Output() buttonClicked = new EventEmitter<boolean>();
  controlDisabled = false;
  constructor(private followsService: FollowsService) {}

  ngOnInit(): void {}

  /**
   * Emits the `buttonClicked` event emitter with `true` if a new
   * follow should get created or `false` if it should get deleted.
   */
  emitButtonClicked() {
    this.user.is_followed = !this.user.is_followed;
    this.buttonClicked.emit(this.user.is_followed);
  }

  /**
   * [1] emits the `buttonClicked` event emitter
   * [2] disables the button
   * [3] creates the follow object
   * [4] re-enables the button
   */
  createFollow(): void {
    this.emitButtonClicked();
    // disable the control until the process finishes
    this.toggleControl();
    this.followsService.createFollow(this.user.username).subscribe(
      // enable the control again
      (_) => {
        this.toggleControl();
      }
    );
  }

  /**
   * [1] emits the `buttonClicked` event emitter
   * [2] disables the button
   * [3] deletes the follow object
   * [4] re-enables the button
   */
  deleteFollow(): void {
    this.emitButtonClicked();
    // disable the control until the process finishes
    this.toggleControl();
    this.followsService.deleteFollow(this.user.username).subscribe(
      // enable the control again
      (_) => {
        this.toggleControl();
      }
    );
  }

  /**
   * Toggles the `disabled` state of the button
   */
  toggleControl(): void {
    this.controlDisabled = !this.controlDisabled;
  }
}
