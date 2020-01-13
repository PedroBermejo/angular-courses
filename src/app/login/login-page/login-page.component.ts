import { Component } from '@angular/core';
import { LoginInfo } from '../../interfaces/user-entity';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import {LoadingService} from '../../services/loading.service';
import {catchError, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private loadingService: LoadingService
  ) { }

  logIn(form) {
    if (form.valid) {
      const login: LoginInfo = {
        login: form.value.email,
        password: form.value.password
      };
      this.loadingService.togleLoading(true);
      this.authorizationService.logIn(login).pipe(
        finalize(() => this.loadingService.togleLoading(false))
      ).subscribe(data => {
        if (data) {
          window.localStorage.setItem('authorization', JSON.stringify(data));
          this.router.navigate(['courses']);
        }

      });
    }
  }

}
