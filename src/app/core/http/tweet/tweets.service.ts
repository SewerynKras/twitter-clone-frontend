import { environment } from './../../../../environments/environment';
import {
  TweetResponse,
  TweetPOSTBody,
} from './../../../shared/models/tweet.model';
import { Observable } from 'rxjs';
import { UsersService } from './../user/users.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponse } from 'src/app/shared/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  public baseUrl = `${environment.backendURL}/tweets`;

  constructor(private http: HttpClient) {}
  /**
   * Retrieves a list tweets created by users the currently logged in user follows.
   * This should only be called after authentication completes successfully.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   */
  getTweetsList(): Observable<ListResponse<TweetResponse>> {
    let url = `${this.baseUrl}/`;
    return this.http.get<ListResponse<TweetResponse>>(url);
  }

  /**
   * Sends a POST request creating a new tweet
   * @param data TweetPOSTBody
   */
  createTweet(data: TweetPOSTBody): Observable<TweetResponse> {
    // Since data could contain an image file the request needs to of type 'multipart/form-data'
    let body = new FormData();
    for (const key in data) body.append(key, data[key]);

    let url = `${this.baseUrl}/`;
    return this.http.post<TweetResponse>(url, body);
  }
}
