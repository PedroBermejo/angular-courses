import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {UserEntity} from '../interfaces/user-entity';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements  CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const user: UserEntity = JSON.parse(window.localStorage.getItem('authorization'));
    const urlTree = this.router.parseUrl('/login');
    return user ? true : urlTree;
  }
}
