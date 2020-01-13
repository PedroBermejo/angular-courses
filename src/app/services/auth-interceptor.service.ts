import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorization = JSON.parse(window.localStorage.getItem('authorization'));
    if (authorization) {
      req = req.clone({
        headers: req.headers.set('Authorization', authorization.token)
      });
    }
    return next.handle(req);
  }
}
