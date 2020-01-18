import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as AppActions from './app.actions';
import { of } from 'rxjs';
import {CoursesService} from '../services/courses.service';

@Injectable()
export class AppEffects {

  @Effect() loadCourses$ = this.actions$
    .pipe(
      ofType<AppActions.GetCourses>(AppActions.GET_COURSES_BY_COUNT),
      mergeMap(
        (count) => this.coursesService.retrieveListByCount(count.payload)
            .pipe(
              map((data) => {
                return new AppActions.GetCoursesSuccess(data);
              }),
              catchError(error => of(new AppActions.GetCoursesFailure(error)))
            )
      ),
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
            map(() => {
              return new AppActions.EditCourseSuccess();
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
    private coursesService: CoursesService
  ) { }
}
