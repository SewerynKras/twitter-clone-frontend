import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page-edit-form-image',
  templateUrl: './profile-page-edit-form-image.component.html',
  styleUrls: ['./profile-page-edit-form-image.component.scss'],
})
export class ProfilePageEditFormImageComponent implements OnInit {
  constructor() {}

  private image: File | null;
  imgSrc: string | ArrayBuffer;

  ngOnInit(): void {
    this.resetImg();
  }

  /**
   * Resets the control to it's default state.
   */
  resetImg(): void {
    this.imgSrc = 'assets/profilepic.png';
    this.image = null;
  }

  /**
   * Saves the filepath and parses it
   * @param files
   */
  preview(files: FileList): void {
    // if there is no file the control gets cleared
    if (files.length === 0) {
      this.resetImg();
      return;
    }

    // Read the file and display it as the preview's src
    var reader = new FileReader();
    this.image = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgSrc = reader.result;
    };
  }

  /**
   * Retrieves the control's value (or null if no image has been selected)
   */
  getValue(): File | null {
    return this.image;
  }

  setupInitValues(image_url: string): void {
    throw 'not implemented';
  }
}
