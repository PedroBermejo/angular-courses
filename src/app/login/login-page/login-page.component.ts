import { Component, OnInit } from '@angular/core';
import {UserEntity} from '../../interfaces/user-entity';
import {AuthorizationService} from '../../services/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
  }

  logIn(form) {
    if (form.valid) {
      const user: UserEntity = {
        id: 1,
        firstName: 'Generic',
        lastName: 'Generic',
        email: form.value.email,
        password: form.value.password
      };
      this.authorizationService.logIn(user);
      this.router.navigate(['courses']);
    }
  }

}
