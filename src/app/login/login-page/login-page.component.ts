import { Component } from '@angular/core';
import { LoginInfo } from '../../interfaces/user-entity';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) { }

  logIn(form) {
    if (form.valid) {
      const login: LoginInfo = {
        login: form.value.email,
        password: form.value.password
      };
      this.authorizationService.logIn(login).subscribe(data => {
        if (data) {
          window.localStorage.setItem('authorization', JSON.stringify(data));
          this.router.navigate(['courses']);
        }
      });
    }
  }

}
