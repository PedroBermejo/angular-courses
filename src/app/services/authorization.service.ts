import { Injectable } from '@angular/core';
import {UserEntity} from '../interfaces/user-entity';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements  CanActivate {

  constructor(private router: Router) { }

  logIn(user: UserEntity) {
    window.localStorage.setItem('authorization', JSON.stringify(user));
  }

  logOut() {
    window.localStorage.removeItem('authorization');
  }

  getUserInfo(): UserEntity {
    return JSON.parse(window.localStorage.getItem('authorization'));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const user: UserEntity = JSON.parse(window.localStorage.getItem('authorization'));
    const urlTree = this.router.parseUrl('/login');
    return user ? true : urlTree;
  }
}
