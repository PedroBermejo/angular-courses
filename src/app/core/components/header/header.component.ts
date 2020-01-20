import {Component, OnInit} from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';
import { Router } from '@angular/router';
import {UserEntity} from '../../../interfaces/user-entity';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as AppActions from '../../../store/app.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userInfo$: Observable<UserEntity> = this.store.select(store => store.courses.user);

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private store: Store<AppState>
  ) { }

  logOff() {
    this.store.dispatch(new AppActions.GetUser(undefined));
    this.store.dispatch(new AppActions.LogIn(undefined));
    this.router.navigate(['login'], {});
  }


}
