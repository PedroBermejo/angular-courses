import {Component, OnInit} from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';
import { Router } from '@angular/router';
import {LoginInfo, UserEntity} from '../../../interfaces/user-entity';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as AppActions from '../../../store/app.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo: UserEntity;


  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private store: Store<AppState>
  ) {
    this.store.select(storeData => storeData.courses.user).subscribe(
      data => {
        if (data) {
          this.userInfo = data;
        }
      }
    );
  }

  ngOnInit() {
    this.userInfo = JSON.parse(window.localStorage.getItem('user'));
  }

  logOff() {
    window.localStorage.removeItem('authorization');
    window.localStorage.removeItem('user');
    this.userInfo = undefined;
    this.store.dispatch(AppActions.logIn({ login: undefined }));
    this.store.dispatch(AppActions.getUser({ authorization: undefined }));
    this.router.navigate(['login'], {});
  }


}
