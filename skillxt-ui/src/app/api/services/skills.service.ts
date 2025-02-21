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

import { SkillDto } from '../models/skill-dto';

@Injectable({
  providedIn: 'root',
})
export class SkillsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSkills
   */
  static readonly GetSkillsPath = '/skills';

  /**
   * Get all skills.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkills()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkills$Response(params?: {
  }): Observable<StrictHttpResponse<Array<SkillDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SkillsService.GetSkillsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SkillDto>>;
      })
    );
  }

  /**
   * Get all skills.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSkills$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkills(params?: {
  }): Observable<Array<SkillDto>> {

    return this.getSkills$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SkillDto>>) => r.body as Array<SkillDto>)
    );
  }

  /**
   * Path part for operation getUserCompetence
   */
  static readonly GetUserCompetencePath = '/skills/{email}/competences';

  /**
   * Get all user competences.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserCompetence()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserCompetence$Response(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;
  }): Observable<StrictHttpResponse<Array<SkillDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SkillsService.GetUserCompetencePath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SkillDto>>;
      })
    );
  }

  /**
   * Get all user competences.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserCompetence$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserCompetence(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;
  }): Observable<Array<SkillDto>> {

    return this.getUserCompetence$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SkillDto>>) => r.body as Array<SkillDto>)
    );
  }

  /**
   * Path part for operation getUserInterest
   */
  static readonly GetUserInterestPath = '/skills/{email}/interest';

  /**
   * Get all user interest.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserInterest()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInterest$Response(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;
  }): Observable<StrictHttpResponse<Array<SkillDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SkillsService.GetUserInterestPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SkillDto>>;
      })
    );
  }

  /**
   * Get all user interest.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserInterest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInterest(params: {

    /**
     * The email that needs to be fetched.
     */
    email: string;
  }): Observable<Array<SkillDto>> {

    return this.getUserInterest$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SkillDto>>) => r.body as Array<SkillDto>)
    );
  }

}
