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
    case AppActions.LOGIN:
      return {
        ...state,
      };
    case AppActions.LOGIN_SUCCESS:
      return {
        ...state,
        authorization: action.payload,
      };
    case AppActions.LOGIN_FAILURE:
      return {
        ...state,
        authorization: undefined,
        error: action.payload,
      };
    case AppActions.GET_USER:
      return {
        ...state,
      };
    case AppActions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case AppActions.GET_USER_FAILURE:
      return {
        ...state,
        user: undefined,
        error: action.payload,
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
    case AppActions.GET_COURSES_BY_COUNT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case AppActions.GET_COURSES_BY_STRING:
      return {
        ...state,
        loading: true
      };
    case AppActions.GET_COURSES_BY_STRING_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        loading: false
      };
    case AppActions.GET_COURSES_BY_STRING_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case AppActions.DELETE_COURSE_BY_ID:
      return {
        ...state,
        loading: true
      };
    case AppActions.DELETE_COURSE_BY_ID_SUCCESS:
      return {
        ...state,
        courses: state.courses.filter(item => item.id !== action.payload),
        loading: false
      };
    case AppActions.DELETE_COURSE_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case AppActions.EDIT_COURSE_BY_ID:
      return {
        ...state,
        loading: true
      };
    case AppActions.EDIT_COURSE_BY_ID_SUCCESS:
      return {
        ...state,
        courses: state.courses.map(item =>
          item.id === action.payload.id ? action.payload : item),
        loading: false
      };
    case AppActions.EDIT_COURSE_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case AppActions.ADD_COURSE:
      return {
        ...state,
        loading: true
      };
    case AppActions.ADD_COURSE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case AppActions.ADD_COURSE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
