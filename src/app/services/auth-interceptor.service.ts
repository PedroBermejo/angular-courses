import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authorizationService: AuthorizationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userInfo = this.authorizationService.getUserInfo();
    console.log(userInfo);
    let request = req;
    if (userInfo) {
      request = req.clone({
        headers: req.headers.set('Authorization', userInfo.token)
      });
    }
    return next.handle(request);
  }
}
