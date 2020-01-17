import * as AppActions from './app.actions';
import {Author, Course, CourseState} from '../interfaces/course';

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: undefined
};

export function coursesReducer(state: CourseState = initialState, action: AppActions.Actions) {

  switch (action.type) {
    case AppActions.GET_COURSES_BY_COUNT:
      return {
        ...state,
        loading: true
      };
    case AppActions.GET_COURSES_BY_COUNT_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        loading: false
      };
    case AppActions.GET_COURSES_BY_COUNT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
