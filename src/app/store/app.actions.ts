import {Action, createAction, props} from '@ngrx/store';
import {Course} from '../interfaces/course';
import {Authorization, LoginInfo, UserEntity} from '../interfaces/user-entity';

export const GET_COURSES_BY_COUNT_SUCCESS = '';
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

export const LOGIN = '[COURSES] Login';
export const LOGIN_SUCCESS = '[COURSES] Login Success';
export const LOGIN_FAILURE = '[COURSES] Login Failure';

export const GET_USER = '[COURSES] Get User';
export const GET_USER_SUCCESS = '[COURSES] Get User Success';
export const GET_USER_FAILURE = '[COURSES] Get User Failure';

export const getCourses = createAction(
  '[COURSES] Get',
  props<{ count: number }>()
);

export const getCoursesSuccess = createAction(
  '[COURSES] Get Success',
  props<{ courses: Course[] }>()
);

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
  constructor(public payload: Course) {}
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

export class LogIn implements Action {
  readonly type = LOGIN;
  constructor(public payload: LoginInfo) {}
}

export class LogInSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: Authorization) {}
}

export class LogInFailure implements Action {
  readonly type = LOGIN_FAILURE;
  constructor(public payload: Error) {}
}

export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload: Authorization) {}
}

export class GetUserSuccess implements Action {
  readonly type = GET_USER_SUCCESS;
  constructor(public payload: UserEntity) {}
}

export class GetUserFailure implements Action {
  readonly type = GET_USER_FAILURE;
  constructor(public payload: Error) {
  }
}
