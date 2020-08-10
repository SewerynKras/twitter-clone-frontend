import { httpRequestParams } from './../models/http.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor() {}

  /**
   * Converts the given httpRequestParams to a string that can be
   * safely appended to the end of a url.
   * @param paramsObj httpRequestParams
   */
  handleParams(paramsObj: httpRequestParams): string {
    // [1] transform the object into URLSearchParams
    let params = new URLSearchParams();
    for (const key in paramsObj) {
      params.set(key, paramsObj[key].toString());
    }

    // [2] transform the URLSearchParams into a string
    let paramsString = params.toString();
    if (paramsString == '') return '';

    // [3] if the string is not empty prepend it with a "?"
    paramsString = '?' + paramsString;
    return paramsString;
  }
}
