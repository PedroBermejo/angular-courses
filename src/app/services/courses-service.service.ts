import { Injectable } from '@angular/core';
import {Course} from '../interfaces/course';
import data from '../../assets/courses-list.json';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {

  constructor() { }

  getCourses(): Course[] {
    return <any> data;
  }
}
