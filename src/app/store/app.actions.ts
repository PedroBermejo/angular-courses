import { Action } from '@ngrx/store';


export const GET_COURSES_BY_COUNT = '[COURSES] Get'

export class GetCourses implements Action {
  readonly type = GET_COURSES_BY_COUNT;

  constructor(public payload: number) {}
}

export type Actions = GetCourses;
