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

  createCourse(course: Course) {
    this.courses.push(course);
  }

  getItemById(idFind: number): Course {
    return this.courses.find(course => course.id === idFind);
  }

  updateItem(courseFind: Course) {
    const index = this.courses.findIndex(course => course.id === courseFind.id);
    this.courses[index] = courseFind;
  }

  removeItem(idRemove: number) {
    const index = this.courses.findIndex(({ id }) => id === idRemove);
    this.courses.splice(index, 1);
  }

}
