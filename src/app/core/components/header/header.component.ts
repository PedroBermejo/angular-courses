import { Component } from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) { }

  logOff() {
    this.authorizationService.logOut();
    this.router.navigate(['login'], {});
  }

}
