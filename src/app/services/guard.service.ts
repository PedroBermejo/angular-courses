import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthorizationService} from './authorization.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements  CanActivate {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const urlTree = this.router.parseUrl('/login');
    return this.authorizationService.getUserInfo().pipe(
      map(response =>  !!response),
      catchError(error => of(urlTree))
    );
  }

}
