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
   * Path part for operation loginUser
   */
  static readonly LoginUserPath = '/users';

  /**
   * Logs user into the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser$Response(params: {

    /**
     * The email for login
     */
    email: string;

    /**
     * The password for login in clear text
     */
    password: string;
  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.LoginUserPath, 'get');
    if (params) {
      rb.query('email', params.email, {});
      rb.query('password', params.password, {});
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
   * Logs user into the system.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser(params: {

    /**
     * The email for login
     */
    email: string;

    /**
     * The password for login in clear text
     */
    password: string;
  }): Observable<UserDto> {

    return this.loginUser$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
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
   * To access only the response body, use `getUserByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail$Response(params: {

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
   * To access the full response (for headers, for example), `getUserByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;
  }): Observable<UserDto> {

    return this.getUserByEmail$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * Path part for operation addUserCompetence
   */
  static readonly AddUserCompetencePath = '/users/{email}/competences/{skill}';

  /**
   * Adds users competences.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUserCompetence()` instead.
   *
   * This method doesn't expect any request body.
   */
  addUserCompetence$Response(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;

    /**
     * The skill that needs to be fetched
     */
    skill: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.AddUserCompetencePath, 'post');
    if (params) {
      rb.path('email', params.email, {});
      rb.path('skill', params.skill, {});
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
   * Adds users competences.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addUserCompetence$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addUserCompetence(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;

    /**
     * The skill that needs to be fetched
     */
    skill: string;
  }): Observable<void> {

    return this.addUserCompetence$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteUserCompetence
   */
  static readonly DeleteUserCompetencePath = '/users/{email}/competences/{skill}';

  /**
   * Deletes users competences.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserCompetence()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserCompetence$Response(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;

    /**
     * The skill that needs to be fetched
     */
    skill: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.DeleteUserCompetencePath, 'delete');
    if (params) {
      rb.path('email', params.email, {});
      rb.path('skill', params.skill, {});
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
   * Deletes users competences.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUserCompetence$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserCompetence(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;

    /**
     * The skill that needs to be fetched
     */
    skill: string;
  }): Observable<void> {

    return this.deleteUserCompetence$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addUserInterest
   */
  static readonly AddUserInterestPath = '/users/{email}/interests/{skill}';

  /**
   * Adds users interest.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUserInterest()` instead.
   *
   * This method doesn't expect any request body.
   */
  addUserInterest$Response(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;

    /**
     * The skill that needs to be fetched
     */
    skill: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.AddUserInterestPath, 'post');
    if (params) {
      rb.path('email', params.email, {});
      rb.path('skill', params.skill, {});
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
   * Adds users interest.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addUserInterest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addUserInterest(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;

    /**
     * The skill that needs to be fetched
     */
    skill: string;
  }): Observable<void> {

    return this.addUserInterest$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteUserInterest
   */
  static readonly DeleteUserInterestPath = '/users/{email}/interests/{skill}';

  /**
   * Deletes users interest.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserInterest()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserInterest$Response(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;

    /**
     * The skill that needs to be fetched
     */
    skill: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.DeleteUserInterestPath, 'delete');
    if (params) {
      rb.path('email', params.email, {});
      rb.path('skill', params.skill, {});
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
   * Deletes users interest.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUserInterest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserInterest(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;

    /**
     * The skill that needs to be fetched
     */
    skill: string;
  }): Observable<void> {

    return this.deleteUserInterest$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
