/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchUsers
   */
  static readonly SearchUsersPath = '/users';

  /**
   * searches users.
   *
   * By passing in the appropriate options, you can search for
   * available user in the system
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsers$Response(params?: {

    /**
     * pass an optional search string for looking up inventory
     */
    searchString?: string;
  }): Observable<StrictHttpResponse<Array<UserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.SearchUsersPath, 'get');
    if (params) {
      rb.query('searchString', params.searchString, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDto>>;
      })
    );
  }

  /**
   * searches users.
   *
   * By passing in the appropriate options, you can search for
   * available user in the system
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUsers(params?: {

    /**
     * pass an optional search string for looking up inventory
     */
    searchString?: string;
  }): Observable<Array<UserDto>> {

    return this.searchUsers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>) => r.body as Array<UserDto>)
    );
  }

  /**
   * Path part for operation addUser
   */
  static readonly AddUserPath = '/users';

  /**
   * adds a user item.
   *
   * Adds a user to the system
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUser$Response(params?: {

    /**
     * User item to add
     */
    body?: UserDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.AddUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * adds a user item.
   *
   * Adds a user to the system
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUser(params?: {

    /**
     * User item to add
     */
    body?: UserDto
  }): Observable<void> {

    return this.addUser$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserByEmail
   */
  static readonly GetUserByEmailPath = '/users/{email}';

  /**
   * Get user by email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByEmail$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail$Json$Response(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;
  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserByEmailPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * Get user by email.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserByEmail$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail$Json(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;
  }): Observable<UserDto> {

    return this.getUserByEmail$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * Get user by email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByEmail$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail$Xml$Response(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;
  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserByEmailPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * Get user by email.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserByEmail$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail$Xml(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;
  }): Observable<UserDto> {

    return this.getUserByEmail$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

}
