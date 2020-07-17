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
export class LikesService {
  baseUrl = `${environment.backendURL}/likes`;

  constructor(private http: HttpClient) {}

  /**
   * Creates a like object for the given tweet
   * @param tweet_id string
   */
  createLike(tweet_id: string): Observable<LikeResponse> {
    let body: LikePOSTBody = {
      tweet_id: tweet_id,
    };
    let url = `${this.baseUrl}/`;
    return this.http.post<LikeResponse>(url, body);
  }
  /**
   * Deletes a like object for the given tweet
   * @param tweet_id string
   */
  deleteLike(tweet_id: string): Observable<void> {
    let url = `${this.baseUrl}/${tweet_id}/`;
    return this.http.delete<void>(url);
  }
}
