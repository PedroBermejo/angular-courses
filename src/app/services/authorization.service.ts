import { Injectable } from '@angular/core';
import {UserEntity} from '../interfaces/user-entity';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements  CanActivate {

  constructor() { }

  logIn(user: UserEntity) {
    window.localStorage.setItem('authorization', JSON.stringify(user));
  }

  logOut() {
    window.localStorage.removeItem('authorization');
  }

  getUserInfo(): UserEntity {
    return JSON.parse(window.localStorage.getItem('authorization'));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user: UserEntity = JSON.parse(window.localStorage.getItem('authorization'));
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
