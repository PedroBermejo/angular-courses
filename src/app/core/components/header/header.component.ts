import {Component, OnInit} from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';
import { Router } from '@angular/router';
import {UserEntity} from '../../../interfaces/user-entity';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as AppActions from '../../../store/app.actions';

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
  ) { }

  ngOnInit() {
    this.store.select(store => store.courses.user).subscribe( data => {
      if (data) {
        this.userInfo = data;
      }
    });
  }

  logOff() {
    this.store.dispatch(new AppActions.Authorization(undefined));
    this.userInfo = undefined;
    this.router.navigate(['login'], {});
  }


}
