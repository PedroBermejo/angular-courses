import {Course} from '../interfaces/course';

export default class CoursesListState {
  CourseList: Array<Course>;
}

export const initializeState = (): CoursesListState => {
  return { CourseList: Array<Course>() };
};
