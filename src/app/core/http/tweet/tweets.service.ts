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
import { UserProfileResponse } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  public baseUrl = `${environment.backendURL}/tweets`;
  public usersUrl = `${environment.backendURL}/users`;

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

  /**
   * Retrieves a single tweet.
   * @param id string
   */
  getSingleTweet(id: string): Observable<TweetResponse> {
    let url = `${this.baseUrl}/${id}/`;
    return this.http.get<TweetResponse>(url);
  }

  /**
   * Retrieves a list of profiles have liked the selected tweet.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   * @param id string
   */
  getListOfUserThatLikedATweet(
    id: string
  ): Observable<ListResponse<UserProfileResponse>> {
    let url = `${this.baseUrl}/${id}/likes/`;
    return this.http.get<ListResponse<UserProfileResponse>>(url);
  }

  /**
   * Retrieves a list of tweets that contain the selected tweet as retweet.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   * @param id string
   */
  getListOfRetweets(id: string): Observable<ListResponse<TweetResponse>> {
    let url = `${this.baseUrl}/${id}/retweets/`;
    return this.http.get<ListResponse<TweetResponse>>(url);
  }

  /**
   * Retrieves a list of tweets that contain the selected tweet as comment.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   * @param id string
   */
  getListOfComments(id: string): Observable<ListResponse<TweetResponse>> {
    let url = `${this.baseUrl}/${id}/comments/`;
    return this.http.get<ListResponse<TweetResponse>>(url);
  }

  /**
   * Retrieves the retweeted tweet.
   * @param id string
   */
  getRetweet(id: string): Observable<TweetResponse> {
    let url = `${this.baseUrl}/${id}/retweet/`;
    return this.http.get<TweetResponse>(url);
  }

  /**
   * Retrieves the parent tweet to the selected comment.
   * @param id string
   */
  getComment(id: string): Observable<TweetResponse> {
    let url = `${this.baseUrl}/${id}/comment/`;
    return this.http.get<TweetResponse>(url);
  }
  /**
   * Retrieves a list tweets created by a selected user.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   */
  getTweetsListByUser(
    username: string
  ): Observable<ListResponse<TweetResponse>> {
    let url = `${this.usersUrl}/${username}/tweets/`;
    return this.http.get<ListResponse<TweetResponse>>(url);
  }
}
