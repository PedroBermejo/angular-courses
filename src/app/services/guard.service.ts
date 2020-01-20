import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthorizationService} from './authorization.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.state';
import {Authorization} from '../interfaces/user-entity';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements  CanActivate {

  authorization: Authorization;

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private store: Store<AppState>) {
    this.store.select(storeData => storeData.courses.authorization).subscribe(
      data => {
        this.authorization = data;
      }
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const urlTree = this.router.parseUrl('/login');
    return this.authorizationService.getUserInfo(this.authorization).pipe(
      map(response => !!response),
      catchError(error => of(urlTree))
    );
  }

}
