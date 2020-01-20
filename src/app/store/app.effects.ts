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

  @Effect() login$ = this.actions$
    .pipe(
      ofType<AppActions.LogIn>(AppActions.LOGIN),
      mergeMap(
        (loginInfo) => this.authorizationService.logIn(loginInfo.payload)
          .pipe(
            map((data) => {
              return new AppActions.LogInSuccess(data);
            }),
            catchError(error => of(new AppActions.LogInFailure(error)))
          )
      ),
    );

  @Effect() loginSuccess$ = this.actions$
    .pipe(
      ofType<AppActions.LogInSuccess>(AppActions.LOGIN_SUCCESS),
      mergeMap(
        (authorization) => this.authorizationService.getUserInfo(authorization.payload)
          .pipe(
            map((data) => {
              this.router.navigate(['courses']);
              return new AppActions.GetUserSuccess(data);
            }),
            catchError(error => of(new AppActions.GetUserFailure(error)))
          )
      ),
    );

  @Effect() getUser$ = this.actions$
    .pipe(
      ofType<AppActions.GetUser>(AppActions.GET_USER),
      mergeMap(
        (loginInfo) => this.authorizationService.getUserInfo(loginInfo.payload)
          .pipe(
            map((data: UserEntity) => {
              return new AppActions.GetUserSuccess(data);
            }),
            catchError(error => of(new AppActions.GetUserFailure(error)))
          )
      ),
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
                catchError(error => of(new AppActions.GetCoursesFailure(error)))
              )
        ),
      )
);

  @Effect() loadCoursesString$ = this.actions$
    .pipe(
      ofType<AppActions.GetStringCourses>(AppActions.GET_COURSES_BY_STRING),
      mergeMap(
        (query) => this.coursesService.retrieveListByString(query.payload)
          .pipe(
            map((data) => {
              return new AppActions.GetStringCoursesSuccess(data);
            }),
            catchError(error => of(new AppActions.GetStringCoursesFailure(error)))
          )
      ),
    );

  @Effect() deleteCourse$ = this.actions$
    .pipe(
      ofType<AppActions.DeleteCourse>(AppActions.DELETE_COURSE_BY_ID),
      mergeMap(
        (id) => this.coursesService.removeItem(id.payload)
          .pipe(
            map(() => {
              return new AppActions.DeleteCourseSuccess(id.payload);
            }),
            catchError(error => of(new AppActions.DeleteCourseFailure(error)))
          )
      ),
    );

  @Effect() editCourse$ = this.actions$
    .pipe(
      ofType<AppActions.EditCourse>(AppActions.EDIT_COURSE_BY_ID),
      mergeMap(
        (course) => this.coursesService.upsertCourse(course.payload, false)
          .pipe(
            map((newCourse) => {
              return new AppActions.EditCourseSuccess(newCourse);
            }),
            catchError(error => of(new AppActions.EditCourseFailure(error)))
          )
      ),
    );

  @Effect() addCourse$ = this.actions$
    .pipe(
      ofType<AppActions.AddCourse>(AppActions.ADD_COURSE),
      mergeMap(
        (course) => this.coursesService.upsertCourse(course.payload, true)
          .pipe(
            map(() => {
              return new AppActions.AddCourseSuccess();
            }),
            catchError(error => of(new AppActions.AddCourseFailure(error)))
          )
      ),
    );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }
}
