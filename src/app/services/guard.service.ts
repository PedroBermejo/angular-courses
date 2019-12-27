import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {UserEntity} from '../interfaces/user-entity';
import {AuthorizationService} from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements  CanActivate {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const authorization = this.authorizationService.getUserInfo();
    const urlTree = this.router.parseUrl('/login');
    return authorization ? true : urlTree;

  }
}
