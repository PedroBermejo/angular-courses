import {Component, OnInit} from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';
import { Router } from '@angular/router';
import {UserEntity} from '../../../interfaces/user-entity';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo: UserEntity;

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
    this.authorizationService.getSubject().subscribe(data => {
      if (data) {
        data.subscribe( user => {
          console.log(user);
          if (user) {
            this.userInfo = user as UserEntity;
          }
        });
      }
    });
  }

  logOff() {
    this.authorizationService.logOut();
    this.userInfo = undefined;
    this.router.navigate(['login'], {});
  }


}
