import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError, concatMap, switchMap} from 'rxjs/operators';
import * as AppActions from './app.actions';
import { of } from 'rxjs';
import {CoursesService} from '../services/courses.service';
import {AuthorizationService} from '../services/authorization.service';
import {Router} from '@angular/router';
import {UserEntity} from '../interfaces/user-entity';

@Injectable()
export class AppEffects {

  login$ = createEffect(
    () => this.actions$.pipe(
      ofType(AppActions.logIn),
      mergeMap(
        (input) => this.authorizationService.logIn(input.login)
          .pipe(
            map((data) => {
              return AppActions.logInSuccess({authorization: data});
            }),
            catchError(error => of(AppActions.logInFailure({error})))
          )
      ),
    )
  );

  loginSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(AppActions.logInSuccess),
      mergeMap(
        (input) => this.authorizationService.getUserInfo(input.authorization)
          .pipe(
            map((data) => {
              window.localStorage.setItem('authorization', JSON.stringify(input.authorization));
              window.localStorage.setItem('user', JSON.stringify(data));
              this.router.navigate(['courses']);
              return AppActions.getUserSuccess({user: data});
            }),
            catchError(error => of(AppActions.getUserFailure({error})))
          )
      ),
    )
  );

  getUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(AppActions.getUser),
      mergeMap(
        (input) => this.authorizationService.getUserInfo(input.authorization)
          .pipe(
            map((data: UserEntity) => {
              return AppActions.getUserSuccess({user: data});
            }),
            catchError(error => of(AppActions.getUserFailure({error})))
          )
      ),
    )
  );

  loadCourses$ = createEffect(
    () => this.actions$.pipe(
        ofType(AppActions.getCourses),
        mergeMap(
          (input) => this.coursesService.retrieveListByCount(input.count)
              .pipe(
                map((data) => {
                  return AppActions.getCoursesSuccess({courses: data});
                }),
                catchError(error => of(AppActions.getCoursesFailure({error})))
              )
        ),
      )
  );

  loadCoursesString$ = createEffect(
    () => this.actions$.pipe(
      ofType(AppActions.getStringCourses),
      mergeMap(
        (input) => this.coursesService.retrieveListByString(input.query)
          .pipe(
            map((data) => {
              return AppActions.getStringCoursesSuccess({courses: data});
            }),
            catchError(error => of(AppActions.getStringCoursesFailure({error})))
          )
      ),
    )
  );

  deleteCourse$ = createEffect(
    () => this.actions$.pipe(
      ofType(AppActions.deleteCourse),
      mergeMap(
        (input) => this.coursesService.removeItem(input.id)
          .pipe(
            map(() => {
              return AppActions.deleteCourseSuccess({id: input.id});
            }),
            catchError(error => of(AppActions.deleteCourseFailure({error})))
          )
      ),
    )
  );

  editCourse$ = createEffect(
    () => this.actions$.pipe(
      ofType(AppActions.editCourse),
      mergeMap(
        (input) => this.coursesService.upsertCourse(input.course, false)
          .pipe(
            map((newCourse) => {
              return AppActions.editCourseSuccess({course: newCourse});
            }),
            catchError(error => of(AppActions.editCourseFailure({error})))
          )
      ),
    )
  );

  addCourse$ = createEffect(
    () => this.actions$.pipe(
      ofType(AppActions.addCourse),
      mergeMap(
        (input) => this.coursesService.upsertCourse(input.course, true)
          .pipe(
            map(() => {
              return AppActions.addCourseSuccess({});
            }),
            catchError(error => of(AppActions.addCourseFailure({error})))
          )
      ),
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }
}
