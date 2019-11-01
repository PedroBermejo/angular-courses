import {Course} from './../interfaces/course';

export class CourseClass implements Course {
  creationDate: string;
  description: string;
  duration: number;
  id: number;
  title: string;
}
