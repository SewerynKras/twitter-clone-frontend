import { BaseUserProfile } from './../../../shared/models/user.model';
import { map } from 'rxjs/operators';
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
   * This should only be called after successful login.\
   * Base profile information is saved in local storage.
   */
  getMyProfile(): Observable<UserProfileResponse> {
    let url = `${this.baseUrl}/getMyProfile/`;
    return this.http.get<UserProfileResponse>(url).pipe(
      // saves the username, display_name and image url in local storage and returns
      // the profile info back to the pipe
      map((profile) => {
        localStorage.setItem('profile.username', profile.username);
        localStorage.setItem('profile.display_name', profile.display_name);
        localStorage.setItem(
          'profile.image_url',
          profile.image_url ? profile.image_url : ''
        );
        return profile;
      })
    );
  }

  /**
   * Retrieves base user information from local storage.
   */
  getBaseUserInfoFromStorage(): BaseUserProfile {
    return {
      username: localStorage.getItem('profile.username'),
      display_name: localStorage.getItem('profile.display_name'),
      image_url: localStorage.getItem('profile.image_url'),
    };
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
