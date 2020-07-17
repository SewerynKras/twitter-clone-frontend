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
export class FollowsService {
  baseUrl = `${environment.backendURL}/follow`;

  constructor(private http: HttpClient) {}

  /**
   * Creates a follow object for the given user
   * @param username string
   */
  createFollow(username: string): Observable<FollowResponse> {
    let body: FollowPOSTBody = {
      being_followed: username,
    };
    let url = `${this.baseUrl}/`;
    return this.http.post<FollowResponse>(url, body);
  }
  /**
   * Deletes a follow object for the given user
   * @param username string
   */
  deleteFollow(username: string): Observable<void> {
    let url = `${this.baseUrl}/${username}/`;
    return this.http.delete<void>(url);
  }
}
