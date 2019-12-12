import { Injectable } from '@angular/core';
import {Course} from '../interfaces/course';
import data from '../../assets/courses-list.json';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  courses: Course[];

  constructor() {
    this.courses = <any> data;
  }

  getList(): Course[] {
    return this.courses;
  }

  getItemById(idFind: number): Course {
    return this.courses.find(course => course.id === idFind);
  }

  updateItem(courseFind: Course) {
    const index = this.courses.findIndex(course => course.id === courseFind.id);
    if ( index > -1) {
      this.courses[index] = courseFind;
    } else {
      this.courses.push(courseFind);
    }
  }

  removeItem(idRemove: number) {
    const index = this.courses.findIndex(({ id }) => id === idRemove);
    this.courses.splice(index, 1);
  }

}
