import * as AppActions from './app.actions';
import {Author, Course} from '../interfaces/course';

const initialState: Course = {
  id: 1,
  name: 'Random',
  description: 'Randommm',
  isTopRated: false,
  date: '120TS',
  authors: {
    id: 1,
    name: 'Author',
    lastName: 'last name'
  },
  length: 120
}

export function coursesReducer(state: Course[] = [initialState], action: AppActions.Actions) {

  switch (action.type) {
    case AppActions.GET_COURSES_BY_COUNT:
      return [...state, action.payload];
    default:
      return state;
  }
}
