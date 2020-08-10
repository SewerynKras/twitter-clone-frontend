import { httpRequestParams } from './../../../shared/models/http.model';
import { BaseHttpService } from './../../../shared/services/base-http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import {
  LikeResponse,
  LikePOSTBody,
} from './../../../shared/models/like.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LikesService extends BaseHttpService {
  baseUrl = `${environment.backendURL}/likes`;

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Creates a like object for the given tweet
   * @param tweet_id string
   */
  createLike(
    tweet_id: string,
    params?: httpRequestParams
  ): Observable<LikeResponse> {
    let parsedParams = this.handleParams(params);
    let body: LikePOSTBody = {
      tweet_id: tweet_id,
    };
    let url = `${this.baseUrl}/${parsedParams}`;
    return this.http.post<LikeResponse>(url, body);
  }
  /**
   * Deletes a like object for the given tweet
   * @param tweet_id string
   */
  deleteLike(tweet_id: string, params?: httpRequestParams): Observable<void> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${tweet_id}/${parsedParams}`;
    return this.http.delete<void>(url);
  }
}
