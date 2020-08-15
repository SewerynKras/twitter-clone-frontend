import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page-edit-dialog',
  templateUrl: './profile-page-edit-dialog.component.html',
  styleUrls: ['./profile-page-edit-dialog.component.scss'],
})
export class ProfilePageEditDialogComponent implements OnInit {
  editForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.editForm = new FormGroup({
      username: new FormControl(),
      display_name: new FormControl(),
      bio: new FormControl(),
      location: new FormControl(),
      website: new FormControl(),
      birth_date: new FormControl(),
    });
  }
}
