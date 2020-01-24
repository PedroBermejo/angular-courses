import * as AppActions from './app.actions';
import {CourseState} from '../interfaces/course';
import {Action, createReducer, on} from '@ngrx/store';

const initialState: CourseState = {
  courses: [],
  authors: [],
  loading: false,
  error: undefined,
  user: undefined,
  authorization: undefined
};

export const coursesReducer = createReducer(
  initialState,
  on(AppActions.logIn, state => ({
    ...state
  })),
  on(AppActions.logInSuccess, (state, {authorization}) => ({
    ...state,
    authorization
  })),
  on(AppActions.logInFailure, (state, {error}) => ({
    ...state,
    authorization: undefined,
    error
  })),
  on(AppActions.getUser, (state) => ({
    ...state
  })),
  on(AppActions.getUserSuccess, (state, {user}) => ({
    ...state,
    user
  })),
  on(AppActions.getUserFailure, (state, {error}) => ({
    ...state,
    user: undefined,
    error
  })),
  on(AppActions.getCourses, (state) => ({
    ...state,
    loading: true
  })),
  on(AppActions.getCoursesSuccess, (state, {courses}) => ({
    ...state,
    courses,
    loading: false
  })),
  on(AppActions.getCoursesFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(AppActions.getStringCourses, (state) => ({
    ...state,
    loading: true
  })),
  on(AppActions.getStringCoursesSuccess, (state, {courses}) => ({
    ...state,
    courses,
    loading: false
  })),
  on(AppActions.getStringCoursesFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(AppActions.deleteCourse, (state) => ({
    ...state,
    loading: true
  })),
  on(AppActions.deleteCourseSuccess, (state, {id}) => ({
    ...state,
    courses: state.courses.filter(item => item.id !== id ),
    loading: false
  })),
  on(AppActions.deleteCourseFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(AppActions.editCourse, (state) => ({
    ...state,
    loading: true
  })),
  on(AppActions.editCourseSuccess, (state, {course}) => ({
    ...state,
    courses: state.courses.map(item => item.id === course.id ? course : item),
    loading: false
  })),
  on(AppActions.editCourseFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(AppActions.addCourse, (state) => ({
    ...state,
    loading: true
  })),
  on(AppActions.addCourseSuccess, (state) => ({
    ...state,
    loading: false
  })),
  on(AppActions.addCourseFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(AppActions.getAuthors, (state) => ({
    ...state,
    loading: true
  })),
  on(AppActions.getAuthorsSuccess, (state, {authors}) => ({
    ...state,
    authors,
    loading: false
  })),
  on(AppActions.getAuthorsFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  }))
);

export function reducer(state: CourseState | undefined, action: Action) {
  return coursesReducer(state, action);
}
