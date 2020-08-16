import {
  httpRequestParams,
  httpRequestArgs,
} from './../../../shared/models/http.model';
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
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseHttpService {
  public baseUrl = `${environment.backendURL}/users`;
  public profileUrl = `${this.baseUrl}/profile`;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
    super();
  }

  /**
   * Retrieves information about the currently logged in users profile.
   * This should only be called after successful login.\
   * Base profile information is saved in local storage.
   */
  getMyProfile(
    {}: httpRequestArgs,
    params?: httpRequestParams
  ): Observable<UserProfileResponse> {
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
    {}: httpRequestArgs,
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
    { body }: { body: UserProfilePATCHBody },
    params?: httpRequestParams
  ): Observable<UserProfileResponse> {
    let parsedParams = this.handleParams(params);

    // The birth_date is a Date object and it needs to be converted to a correct format.
    // Namely: YYYY-MM-DD
    if (body.birth_date && body.birth_date instanceof Date)
      body.birth_date = this.datePipe.transform(body.birth_date, 'yyyy-MM-dd');

    // Since data could contain an image file the request needs to of type 'multipart/form-data'
    let formData = new FormData();
    for (const key in body) formData.append(key, body[key]);

    let myProfile = this.getBaseUserInfoFromStorage();
    let url = `${this.profileUrl}/${myProfile.username}/${parsedParams}`;
    return this.http.patch<UserProfileResponse>(url, formData).pipe(
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
    { body }: { body: UserProfilePOSTBody },
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
    { username }: { username: string },
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
    { username }: { username: string },
    params?: httpRequestParams
  ): Observable<ListResponse<UserProfileResponse>> {
    return this._getFollowsList(
      { username: username, mode: 'followers' },
      params
    );
  }

  /**
   * Retrieves a list of profiles that follow the selected user.
   * NOTE: This is a ListResponse, so only the first page will be returned.
   * To access later pages, use the pagination service.
   * @param username string
   */
  getFollowingList(
    { username }: { username: string },
    params?: httpRequestParams
  ): Observable<ListResponse<UserProfileResponse>> {
    return this._getFollowsList(
      { username: username, mode: 'following' },
      params
    );
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
    { username, mode }: { username: string; mode: 'following' | 'followers' },
    params?: httpRequestParams
  ): Observable<ListResponse<UserProfileResponse>> {
    let parsedParams = this.handleParams(params);
    let url = `${this.profileUrl}/${username}/${mode}/${parsedParams}`;
    return this.http.get<ListResponse<UserProfileResponse>>(url);
  }

  /**
   * Compares two given profiles and determines whether or not they represent the same user.
   * @param profile1 BaseUserProfile
   * @param profile2 BaseUserProfile
   */
  checkIfUsersAreEqual(
    profile1: BaseUserProfile,
    profile2: BaseUserProfile
  ): boolean {
    return (
      profile1.display_name === profile2.display_name &&
      profile1.image_url === profile2.image_url &&
      profile1.username === profile2.username
    );
  }
}
