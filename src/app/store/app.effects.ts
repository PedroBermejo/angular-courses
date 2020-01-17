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
    )

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) { }
}
