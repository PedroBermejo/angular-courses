import {Component} from '@angular/core';
import { LoginInfo } from '../../interfaces/user-entity';
import { AuthorizationService } from '../../services/authorization.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import * as AppActions from '../../store/app.actions';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginError$ = this.store.select(store => store.courses.error);

  constructor(
    private authorizationService: AuthorizationService,
    private store: Store<AppState>
  ) { }

  logIn(form: NgForm) {
    if (form.valid) {
      const login: LoginInfo = {
        login: form.value.email,
        password: form.value.password
      };
      this.store.dispatch(AppActions.logIn({login: login}));
    }
  }

}
