import { Injectable } from '@angular/core';
import {Authorization, LoginInfo} from '../interfaces/user-entity';
import {HttpClient} from '@angular/common/http';
import {globalConstants} from '../global-constants';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  readonly URL_AUTHORIZATION = Location.joinWithSlash(globalConstants.endpoints.domain,
    globalConstants.endpoints.authorizationLogin);

  readonly URL_USER_INFO = Location.joinWithSlash(globalConstants.endpoints.domain,
    globalConstants.endpoints.userInfo);

  constructor(private httpClient: HttpClient) {}

  logIn(user: LoginInfo): Observable<any> {
    return this.httpClient.post(this.URL_AUTHORIZATION, user);
  }

  getUserInfo(authorization: Authorization ): Observable<any> {
    return this.httpClient.post(this.URL_USER_INFO, authorization);
  }
}
