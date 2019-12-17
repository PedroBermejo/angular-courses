import { Injectable } from '@angular/core';
import {UserEntity} from '../interfaces/user-entity';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  logIn(user: UserEntity) {
    window.localStorage.setItem('authorization', JSON.stringify(user));
  }

  logOut() {
    window.localStorage.removeItem('authorization');
  }

  getUserInfo(): UserEntity {
    return JSON.parse(window.localStorage.getItem('authorization'));
  }
}
