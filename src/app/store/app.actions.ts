import { Action } from '@ngrx/store';
import {Course} from '../interfaces/course';
import {LoginInfo, UserEntity} from '../interfaces/user-entity';

export const GET_COURSES_BY_COUNT = '[COURSES] Get';
export const GET_COURSES_BY_COUNT_SUCCESS = '[COURSES] Get Success';
export const GET_COURSES_BY_COUNT_FAILURE = '[COURSES] Get Failure';

export const GET_COURSES_BY_STRING = '[COURSES] Get by String';
export const GET_COURSES_BY_STRING_SUCCESS = '[COURSES] Get by String Success';
export const GET_COURSES_BY_STRING_FAILURE = '[COURSES] Get by String Failure';

export const DELETE_COURSE_BY_ID = '[COURSES] Delete';
export const DELETE_COURSE_BY_ID_SUCCESS = '[COURSES] Delete Success';
export const DELETE_COURSE_BY_ID_FAILURE = '[COURSES] Delete Failure';

export const EDIT_COURSE_BY_ID = '[COURSES] Edit';
export const EDIT_COURSE_BY_ID_SUCCESS = '[COURSES] Edit Success';
export const EDIT_COURSE_BY_ID_FAILURE = '[COURSES] Edit Failure';

export const ADD_COURSE = '[COURSES] Add';
export const ADD_COURSE_SUCCESS = '[COURSES] Add Success';
export const ADD_COURSE_FAILURE = '[COURSES] Add Failure';

export const AUTHORIZATION = '[COURSES] Authorization';
export const AUTHORIZATION_SUCCESS = '[COURSES] Authorization Success';
export const AUTHORIZATION_FAILURE = '[COURSES] Authorization Failure';

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

export class GetStringCourses implements Action {
  readonly type = GET_COURSES_BY_STRING;
  constructor(public payload: string) {}
}

export class GetStringCoursesSuccess implements Action {
  readonly type = GET_COURSES_BY_STRING_SUCCESS;
  constructor(public payload: Course[]) {}
}

export class GetStringCoursesFailure implements Action {
  readonly type = GET_COURSES_BY_STRING_FAILURE;
  constructor(public payload: Error) {}
}

export class DeleteCourse implements Action {
  readonly type = DELETE_COURSE_BY_ID;
  constructor(public payload: number) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = DELETE_COURSE_BY_ID_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteCourseFailure implements Action {
  readonly type = DELETE_COURSE_BY_ID_FAILURE;
  constructor(public payload: Error) {}
}

export class EditCourse implements Action {
  readonly type = EDIT_COURSE_BY_ID;
  constructor(public payload: Course) {}
}

export class EditCourseSuccess implements Action {
  readonly type = EDIT_COURSE_BY_ID_SUCCESS;
}

export class EditCourseFailure implements Action {
  readonly type = EDIT_COURSE_BY_ID_FAILURE;
  constructor(public payload: Error) {}
}

export class AddCourse implements Action {
  readonly type = ADD_COURSE;
  constructor(public payload: Course) {}
}

export class AddCourseSuccess implements Action {
  readonly type = ADD_COURSE_SUCCESS;
}

export class AddCourseFailure implements Action {
  readonly type = ADD_COURSE_FAILURE;
  constructor(public payload: Error) {}
}

export class Authorization implements Action {
  readonly type = AUTHORIZATION;
  constructor(public payload: LoginInfo) {}
}

export class AuthorizationSuccess implements Action {
  readonly type = AUTHORIZATION_SUCCESS;
  constructor(public payload: UserEntity, ) {}
}

export class AuthorizationFailure implements Action {
  readonly type = AUTHORIZATION_FAILURE;
  constructor(public payload: Error) {}
}

export type Actions = GetCourses |
  GetCoursesSuccess |
  GetCoursesFailure |
  DeleteCourse |
  DeleteCourseSuccess |
  DeleteCourseFailure |
  EditCourse |
  EditCourseSuccess |
  EditCourseFailure |
  AddCourse |
  AddCourseSuccess |
  AddCourseFailure |
  GetStringCourses |
  GetStringCoursesSuccess |
  GetStringCoursesFailure |
  Authorization |
  AuthorizationSuccess |
  AuthorizationFailure;
