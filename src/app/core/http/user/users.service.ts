import { httpRequestParams } from './../../../shared/models/http.model';
import { BaseHttpService } from './../../../shared/services/base-http.service';
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
export class UsersService extends BaseHttpService {
  public baseUrl = `${environment.backendURL}/users`;
  public profileUrl = `${this.baseUrl}/profile`;

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Retrieves information about the currently logged in users profile.
   * This should only be called after successful login.\
   * Base profile information is saved in local storage.
   */
  getMyProfile(params?: httpRequestParams): Observable<UserProfileResponse> {
    let parsedParams = this.handleParams(params);
    let url = `${this.baseUrl}/getMyProfile/${parsedParams}`;
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
  getProfilesList(
    params?: httpRequestParams
  ): Observable<ListResponse<UserProfileResponse>> {
    let parsedParams = this.handleParams(params);
    let url = `${this.profileUrl}/${parsedParams}`;
    return this.http.get<ListResponse<UserProfileResponse>>(url);
  }

  /**
   * Sends a PATCH request to the profile backend api with the given body.
   * Updates the locally saved user info.
   * @param body UserProfilePATCHBody
   */
  updateMyProfile(
    body: UserProfilePATCHBody,
    params?: httpRequestParams
  ): Observable<UserProfileResponse> {
    let parsedParams = this.handleParams(params);
    let myProfile = this.getBaseUserInfoFromStorage();
    let url = `${this.profileUrl}/${myProfile.username}/${parsedParams}`;
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
  createProfile(
    body: UserProfilePOSTBody,
    params?: httpRequestParams
  ): Observable<UserProfileResponse> {
    let parsedParams = this.handleParams(params);
    let url = `${this.profileUrl}/${parsedParams}`;
    return this.http.post<UserProfileResponse>(url, body).pipe(
      // saves the username, display_name and image url in local storage and returns
      // the profile info back to the pipe
      map((profile) => {
        this.updateUserInfoInLocalStorage(profile);
        return profile;
      })
    );
  }

  /**
   * Retrieves a single profile with the given username.
   * @param username string
   */
  getSingleProfile(
    username: string,
    params?: httpRequestParams
  ): Observable<UserProfileResponse> {
    let parsedParams = this.handleParams(params);
    let url = `${this.profileUrl}/${username}/${parsedParams}`;
    return this.http.get<UserProfileResponse>(url);
  }

  /**
   * Retrieves a list of profiles that are being followed by the selected user.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   * @param username string
   */
  getFollowersList(
    username: string,
    params?: httpRequestParams
  ): Observable<ListResponse<UserProfileResponse>> {
    return this._getFollowsList(username, 'followers', params);
  }

  /**
   * Retrieves a list of profiles that follow the selected user.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   * @param username string
   */
  getFollowingList(
    username: string,
    params?: httpRequestParams
  ): Observable<ListResponse<UserProfileResponse>> {
    return this._getFollowsList(username, 'following', params);
  }

  /**
   * Retrieves either a list of followers or a list of users being followed.
   * Since both endpoints are practically identical this method is designed to
   * be reused in `this.getFollowingList(...)` and `this.getFollowersList(...)`.
   * For internal use only.
   * @param username string
   * @param mode 'following' or 'followers'
   */
  private _getFollowsList(
    username: string,
    mode: 'following' | 'followers',
    params?: httpRequestParams
  ): Observable<ListResponse<UserProfileResponse>> {
    let parsedParams = this.handleParams(params);
    let url = `${this.profileUrl}/${username}/${mode}/${parsedParams}`;
    return this.http.get<ListResponse<UserProfileResponse>>(url);
  }
}
