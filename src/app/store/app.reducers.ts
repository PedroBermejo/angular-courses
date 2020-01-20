import * as AppActions from './app.actions';
import {CourseState} from '../interfaces/course';

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: undefined,
  user: undefined,
  authorization: undefined
};

export function coursesReducer(state: CourseState = initialState, action: AppActions) {

  switch (action.type) {
    case AppActions.logIn.type:
      return {
        ...state,
      };
    case AppActions.logInSuccess.type:
      return {
        ...state,
        authorization: action.authorization,
      };
    case AppActions.logInFailure:
      return {
        ...state,
        authorization: undefined,
        error: action.error,
      };
    case AppActions.getUser:
      return {
        ...state,
      };
    case AppActions.getUserSuccess:
      return {
        ...state,
        user: action.user,
      };
    case AppActions.getUserFailure:
      return {
        ...state,
        user: undefined,
        error: action.error,
      };
    case AppActions.getCourses.type:
      return {
        ...state,
        loading: true
      };
    case AppActions.getCoursesSuccess.type:
      return {
        ...state,
        courses: action.courses,
        loading: false
      };
    case AppActions.getCoursesFailure:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case AppActions.getStringCourses:
      return {
        ...state,
        loading: true
      };
    case AppActions.getStringCoursesSuccess:
      return {
        ...state,
        courses: action.courses,
        loading: false
      };
    case AppActions.getStringCoursesFailure:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case AppActions.deleteCourse:
      return {
        ...state,
        loading: true
      };
    case AppActions.deleteCourseSuccess:
      return {
        ...state,
        courses: state.courses.filter(item => {
          console.log(action);
          return item.id !== action.id;
        }),
        loading: false
      };
    case AppActions.deleteCourseFailure:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case AppActions.editCourse:
      return {
        ...state,
        loading: true
      };
    case AppActions.editCourseSuccess:
      return {
        ...state,
        courses: state.courses.map(item =>
          item.id === action.course.id ? action.course : item),
        loading: false
      };
    case AppActions.editCourseFailure:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case AppActions.addCourse:
      return {
        ...state,
        loading: true
      };
    case AppActions.addCourseSuccess:
      return {
        ...state,
        loading: false
      };
    case AppActions.addCourseFailure:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
