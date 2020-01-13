import { Injectable } from '@angular/core';
import {Authorization, LoginInfo} from '../interfaces/user-entity';
import {HttpClient} from '@angular/common/http';
import {globalConstants} from '../global-constants';
import {Observable, of, Subject, throwError} from 'rxjs';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  subject = new Subject<Observable<any>>();

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
      const observable$ =  this.httpClient.post(this.URL_USER_INFO, authorization);
      this.subject.next(observable$);
      return observable$;
    } else {
      return throwError('Not logged in');
    }
  }

  getSubject(): Subject<Observable<any>> {
    return this.subject;
  }
}
