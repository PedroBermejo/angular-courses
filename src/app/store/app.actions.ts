import { Action } from '@ngrx/store';
import {Course} from '../interfaces/course';


export const GET_COURSES_BY_COUNT = '[COURSES] Get';
export const GET_COURSES_BY_COUNT_SUCCESS = '[COURSES] Get Success';
export const GET_COURSES_BY_COUNT_FAILURE = '[COURSES] Get Failure';


export class GetCourses implements Action {
  readonly type = GET_COURSES_BY_COUNT;

  constructor(public payload: number) {}
}

export class GetCoursesSuccess implements Action {
  readonly type = GET_COURSES_BY_COUNT_SUCCESS;

  constructor(public payload: Course[]) {}
}

export class GetCoursesFailure implements Action {
  readonly type = GET_COURSES_BY_COUNT_FAILURE;

  constructor(public payload: Error) {}
}

export type Actions = GetCourses | GetCoursesSuccess | GetCoursesFailure;
