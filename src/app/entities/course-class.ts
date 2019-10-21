import {Course} from './../interfaces/course';

export class CourseClass implements Course {
  creationDate: string;
  description: string;
  duration: string;
  id: number;
  title: string;
}
