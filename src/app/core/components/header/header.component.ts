import { Component } from '@angular/core';
import {AuthorizationService} from '../../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authorizationService: AuthorizationService) { }

  logIn() {
    this.authorizationService.logOut();
  }

  logOff() {
    this.authorizationService.logOut();
  }

}
