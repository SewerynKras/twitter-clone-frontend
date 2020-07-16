import { ListResponse } from './../../../shared/models/response.model';
import { Injectable } from '@angular/core';
import {
  UserProfileResponse,
  UserProfilePOSTBody,
  UserProfilePATCHBody,
} from '../../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public baseUrl = `${environment.backendURL}/users`;
  public profileUrl = `${this.baseUrl}/profile`;

  constructor(private http: HttpClient) {}

  /**
   * Retrieves information about the currently logged in users profile.
   * This should only be called after successful login
   */
  getMyProfile(): Observable<UserProfileResponse> {
    let url = `${this.baseUrl}/getMyProfile/`;
    return this.http.get<UserProfileResponse>(url);
  }

  /**
   * Retrieves a list of all users.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   */
  getProfilesList(): Observable<ListResponse<UserProfileResponse>> {
    let url = `${this.profileUrl}/`;
    return this.http.get<ListResponse<UserProfileResponse>>(url);
  }
}
