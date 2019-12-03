import { Injectable } from '@angular/core';
import {UserEntity} from '../interfaces/user-entity';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  logIn(user: UserEntity) {
    window.localStorage.setItem('authorization', JSON.stringify(user));
  }

  logOut() {
    window.localStorage.removeItem('authorization');
  }

  isAuthenticated(): boolean {
    const user: UserEntity = JSON.parse(window.localStorage.getItem('authorization'));
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  getUserInfo(): UserEntity {
    return JSON.parse(window.localStorage.getItem('authorization'));
  }
}
