import { httpRequestParams } from './../../../shared/models/http.model';
import { BaseHttpService } from './../../../shared/services/base-http.service';
import {
  FollowResponse,
  FollowPOSTBody,
} from './../../../shared/models/follow.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FollowsService extends BaseHttpService {
  baseUrl = `${environment.backendURL}/follow`;

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Creates a follow object for the given user
   * @param username string
   */
  createFollow(
    { username }: { username: string },
    params?: httpRequestParams
  ): Observable<FollowResponse> {
    let parsedParams = this.handleParams(params);
    let body: FollowPOSTBody = {
      being_followed: username,
    };
    let url = `${this.baseUrl}/${parsedParams}`;
    return this.http.post<FollowResponse>(url, body);
  }
  /**
   * Deletes a follow object for the given user
   * @param username string
   */
  deleteFollow(
    { username }: { username: string },
    params?: httpRequestParams
  ): Observable<void> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/${username}/${parsedParams}`;
    return this.http.delete<void>(url);
  }
}
