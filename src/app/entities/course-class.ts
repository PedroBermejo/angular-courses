import {Course} from './../interfaces/course.ts';

export class CourseClass implements Course{
  creationDate: string;
  description: string;
  duration: string;
  id: number;
  title: string;
}
