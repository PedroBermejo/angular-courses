import {createAction, props} from '@ngrx/store';
import {Author, Course} from '../interfaces/course';
import {Authorization, LoginInfo, UserEntity} from '../interfaces/user-entity';

export const getCourses = createAction(
  '[COURSES] Get',
  props<{ count: number }>()
);

export const getCoursesSuccess = createAction(
  '[COURSES] Get Success',
  props<{ courses: Course[] }>()
);

export const getCoursesFailure = createAction(
  '[COURSES] Get Failure',
  props<{ error: Error }>()
);

export const getStringCourses = createAction(
  '[COURSES] Get by String',
    props<{ query: string }>()
);

export const getStringCoursesSuccess = createAction(
  '[COURSES] Get by String Success',
  props<{ courses: Course[] }>()
);

export const getStringCoursesFailure = createAction(
  '[COURSES] Get by String Failure',
  props<{ error: Error }>()
);

export const deleteCourse = createAction(
  '[COURSES] Delete',
  props<{ id: number }>()
);

export const deleteCourseSuccess = createAction(
  '[COURSES] Delete Success',
  props<{ id: number }>()
);

export const deleteCourseFailure = createAction(
  '[COURSES] Delete Failure',
  props<{ error: Error }>()
);

export const editCourse = createAction(
  '[COURSES] Edit',
  props<{ course: Course }>()
);

export const editCourseSuccess = createAction(
  '[COURSES] Edit Success',
  props<{ course: Course }>()
);

export const editCourseFailure = createAction(
  '[COURSES] Edit Failure',
  props<{ error: Error }>()
);

export const addCourse = createAction(
  '[COURSES] Add',
  props<{ course: Course }>()
);

export const addCourseSuccess = createAction(
  '[COURSES] Add Success',
  props<{}>()
);

export const addCourseFailure = createAction(
  '[COURSES] Add Failure',
  props<{ error: Error }>()
);

export const logIn = createAction(
  '[COURSES] Login',
  props<{ login: LoginInfo }>()
);

export const logInSuccess = createAction(
  '[COURSES] Login Success',
  props<{ authorization: Authorization }>()
);

export const logInFailure = createAction(
  '[COURSES] Login Failure',
  props<{ error: Error }>()
);

export const getUser = createAction(
  '[COURSES] Get User',
  props<{ authorization: Authorization }>()
);

export const getUserSuccess = createAction(
  '[COURSES] Get User Success',
  props<{ user: UserEntity }>()
);

export const getUserFailure = createAction(
  '[COURSES] Get User Failure',
  props<{ error: Error }>()
);

export const getAuthors = createAction(
  '[COURSES] Get Authors',
  props<{ }>()
);

export const getAuthorsSuccess = createAction(
  '[COURSES] Get Authors Success',
  props<{ authors: Author[] }>()
);

export const getAuthorsFailure = createAction(
  '[COURSES] Get Authors Failure',
  props<{ error: Error }>()
);
