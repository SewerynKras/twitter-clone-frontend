import { BaseHttpService } from './../../../shared/services/base-http.service';
import {
  httpRequestParams,
  httpRequestArgs,
} from './../../../shared/models/http.model';
import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import {
  TweetResponse,
  TweetPOSTBody,
  TweetResponseRaw,
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
export class TweetsService extends BaseHttpService {
  public baseUrl = `${environment.backendURL}/tweets`;
  public usersUrl = `${environment.backendURL}/users/profile`;

  constructor(private http: HttpClient) {
    super();
  }
  /**
   * Retrieves a list tweets created by users the currently logged in user follows.
   * This should only be called after authentication completes successfully.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   */
  getTweetsList(
    {}: httpRequestArgs,
    params?: httpRequestParams
  ): Observable<ListResponse<TweetResponse>> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${parsedParams}`;
    return this.http.get<ListResponse<TweetResponseRaw>>(url).pipe(
      map((response) => {
        response.results.map((tweet) => this.parseTweet(tweet));
        return response as ListResponse<TweetResponse>;
      })
    );
  }

  /**
   * Sends a POST request creating a new tweet
   * @param data TweetPOSTBody
   */
  createTweet(
    { data }: { data: TweetPOSTBody },
    params?: httpRequestParams
  ): Observable<TweetResponse> {
    let parsedParams = this.handleParams(params);

    // Since data could contain an image file the request needs to of type 'multipart/form-data'
    let body = new FormData();
    for (const key in data) body.append(key, data[key]);

    let url = `${this.baseUrl}/${parsedParams}`;
    return this.http
      .post<TweetResponseRaw>(url, body)
      .pipe(map(this.parseTweet));
  }

  /**
   * Retrieves a single tweet.
   * @param id string
   */
  getSingleTweet(
    { id }: { id: string },
    params?: httpRequestParams
  ): Observable<TweetResponse> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${id}/${parsedParams}`;
    return this.http.get<TweetResponseRaw>(url).pipe(map(this.parseTweet));
  }

  /**
   * Retrieves a list of profiles have liked the selected tweet.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   * @param id string
   */
  getListOfUserThatLikedATweet(
    { id }: { id: string },
    params?: httpRequestParams
  ): Observable<ListResponse<UserProfileResponse>> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${id}/likes/${parsedParams}`;
    return this.http.get<ListResponse<UserProfileResponse>>(url);
  }

  /**
   * Retrieves a list of tweets that contain the selected tweet as retweet.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   * @param id string
   */
  getListOfRetweets(
    { id }: { id: string },
    params?: httpRequestParams
  ): Observable<ListResponse<TweetResponse>> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${id}/retweets/${parsedParams}`;
    return this.http.get<ListResponse<TweetResponseRaw>>(url).pipe(
      map((response) => {
        response.results.map((tweet) => this.parseTweet(tweet));
        return response as ListResponse<TweetResponse>;
      })
    );
  }

  /**
   * Retrieves a list of tweets that contain the selected tweet as comment.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   * @param id string
   */
  getListOfComments(
    { id }: { id: string },
    params?: httpRequestParams
  ): Observable<ListResponse<TweetResponse>> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${id}/comments/${parsedParams}`;
    return this.http.get<ListResponse<TweetResponseRaw>>(url).pipe(
      map((response) => {
        response.results.map((tweet) => this.parseTweet(tweet));
        return response as ListResponse<TweetResponse>;
      })
    );
  }

  /**
   * Retrieves the retweeted tweet.
   * @param id string
   */
  getRetweet(
    { id }: { id: string },
    params?: httpRequestParams
  ): Observable<TweetResponse> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${id}/retweet/${parsedParams}`;
    return this.http.get<TweetResponseRaw>(url).pipe(map(this.parseTweet));
  }

  /**
   * Retrieves the parent tweet to the selected comment.
   * @param id string
   */
  getComment(
    { id }: { id: string },
    params?: httpRequestParams
  ): Observable<TweetResponse> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${id}/comment/${parsedParams}`;
    return this.http.get<TweetResponseRaw>(url).pipe(map(this.parseTweet));
  }
  /**
   * Retrieves a list tweets created by a selected user.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   */
  getTweetsListByUser(
    { username }: { username: string },
    params?: httpRequestParams
  ): Observable<ListResponse<TweetResponse>> {
    let parsedParams = this.handleParams(params);

    let url = `${this.usersUrl}/${username}/tweets/${parsedParams}`;
    return this.http.get<ListResponse<TweetResponseRaw>>(url).pipe(
      map((response) => {
        response.results.map((tweet) => this.parseTweet(tweet));
        return response as ListResponse<TweetResponse>;
      })
    );
  }

  /**
   * Sends a DELETE request.
   * @param id string
   */
  deleteTweet(
    { id }: { id: string },
    params?: httpRequestParams
  ): Observable<void> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${id}/${parsedParams}`;
    return this.http.delete<void>(url);
  }

  /**
   * Parses a raw tweet response and turns it into TweetResponse.
   * Creates a date object and changes null values into empty strings.
   * @param tweet TweetResponseRaw
   */
  parseTweet(tweet: TweetResponseRaw): TweetResponse {
    if (tweet.text == null) tweet.text = '';
    if (tweet.retweet == null) tweet.retweet = '';
    if (tweet.comment == null) tweet.comment = '';
    if (tweet.image_url == null) tweet.image_url = '';
    tweet.created_date = new Date(tweet.created_date);
    return tweet as TweetResponse;
  }
}
