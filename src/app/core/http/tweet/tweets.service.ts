import { environment } from './../../../../environments/environment';
import { TweetResponse } from './../../../shared/models/tweet.model';
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
}
