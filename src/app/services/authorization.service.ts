import { Injectable } from '@angular/core';
import {Authorization, LoginInfo} from '../interfaces/user-entity';
import {HttpClient} from '@angular/common/http';
import {globalConstants} from '../global-constants';
import {Observable, throwError} from 'rxjs';
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

  logOut() {
    window.localStorage.removeItem('authorization');
  }

  getUserInfo(): Observable<any> {
    const authorization: Authorization = JSON.parse(window.localStorage.getItem('authorization'));
    if (authorization) {
      return this.httpClient.post(this.URL_USER_INFO, authorization);
    } else {
      return throwError('Not logged in');
    }
  }
}
