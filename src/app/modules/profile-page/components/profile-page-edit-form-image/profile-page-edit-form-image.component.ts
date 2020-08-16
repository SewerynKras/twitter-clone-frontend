import { ResizeService } from './../../../../core/services/resize.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page-edit-form-image',
  templateUrl: './profile-page-edit-form-image.component.html',
  styleUrls: ['./profile-page-edit-form-image.component.scss'],
})
export class ProfilePageEditFormImageComponent implements OnInit {
  constructor(private resize: ResizeService) {}

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

  /**
   * Sets the `imageSrc` to the given image url
   * (after resizing it to 140x140 via the resize service).
   * NOTE: Calling `getValue` does not actually return this
   * image to avoid unnecessarily uploading it again.
   * Only a new image will be returned by that method.
   * @param image_url string
   */
  setupInitValues(image_url: string): void {
    this.imgSrc = this.resize.applyTransform(image_url, 140, 140);
  }
}
