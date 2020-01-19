import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthorizationService} from './authorization.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements  CanActivate {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const urlTree = this.router.parseUrl('/login');
    return this.store.select(store => store.courses.user).pipe(
      map(response =>  {
        if (response) {
          return true;
        } else {
          return urlTree;
        }
      })
    );
  }

}
