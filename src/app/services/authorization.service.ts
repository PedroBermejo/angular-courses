import { Injectable } from '@angular/core';
import {LoginInfo, UserEntity} from '../interfaces/user-entity';
import {HttpClient} from '@angular/common/http';
import {globalConstants} from '../global-constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  readonly URL_AUTHORIZATION = `${globalConstants.endpoints.domain}/${
    globalConstants.endpoints.authorizationLogin}`;
  readonly URL_USER_INFO = `${globalConstants.endpoints.domain}/${
    globalConstants.endpoints.userInfo}`;

  constructor(private httpClient: HttpClient) {}

  logIn(user: LoginInfo): Observable<any> {
    return this.httpClient.post(this.URL_AUTHORIZATION, user);
  }

  logOut() {
    window.localStorage.removeItem('authorization');
  }

  getUserInfo(): UserEntity {
    return JSON.parse(window.localStorage.getItem('authorization'));
  }
}
