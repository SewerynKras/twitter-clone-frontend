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
        this.updateUserInfoInLocalStorage(profile);
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
   * Saves basic user profile information in local storage.
   * To retrieve it later use `this.getBaseUserInfoFromStorage()`
   * @param profile BaseUserProfile
   */
  updateUserInfoInLocalStorage(profile: BaseUserProfile): void {
    localStorage.setItem('profile.username', profile.username);
    localStorage.setItem('profile.display_name', profile.display_name);
    localStorage.setItem(
      'profile.image_url',
      profile.image_url ? profile.image_url : ''
    );
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

  /**
   * Sends a PATCH request to the profile backend api with the given body.
   * Updates the locally saved user info.
   * @param body UserProfilePATCHBody
   */
  updateMyProfile(body: UserProfilePATCHBody): Observable<UserProfileResponse> {
    let myProfile = this.getBaseUserInfoFromStorage();
    let url = `${this.profileUrl}/${myProfile.username}/`;
    return this.http.patch<UserProfileResponse>(url, body).pipe(
      // saves the username, display_name and image url in local storage and returns
      // the profile info back to the pipe
      map((updatedProfile) => {
        this.updateUserInfoInLocalStorage(updatedProfile);
        return updatedProfile;
      })
    );
  }

  /**
   * Sends a POST request to the profile backend api with the given body.
   * Updates the locally saved user info.
   * @param body UserProfilePOSTBody
   */
  createProfile(body: UserProfilePOSTBody): Observable<UserProfileResponse> {
    let url = `${this.profileUrl}/`;
    return this.http.post<UserProfileResponse>(url, body).pipe(
      // saves the username, display_name and image url in local storage and returns
      // the profile info back to the pipe
      map((profile) => {
        this.updateUserInfoInLocalStorage(profile);
        return profile;
      })
    );
  }
}
