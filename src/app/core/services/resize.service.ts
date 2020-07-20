import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  constructor() {}

  /**
   * Inserts transformation params into the cloudinary image url.
   * @param url string
   * @param width number
   * @param height number
   */
  applyTransform(url: string, width?: number, height?: number): string {
    // Transform parameters need to be inserted between the '/upload/' part and the image url
    let start_index = url.indexOf('/upload/') + 8; // "/upload/".length == 8
    let params = '';
    if (width) params += `w_${width},`;
    if (height) params += `h_${height}`;
    params += '/';

    return url.slice(0, start_index) + params + url.slice(start_index);
  }
}
