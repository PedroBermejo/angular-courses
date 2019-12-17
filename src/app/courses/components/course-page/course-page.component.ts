import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/courses.service';
import {Course} from '../../../interfaces/course';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  courses: Course[];
  searchTerm: string;

  constructor(private coursesServiceService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesServiceService.getList();
  }

  delete(event) {
    this.coursesServiceService.removeItem(event.id);
  }

  search(event) {
    this.searchTerm = event;
  }

  completeAddingCourse(event: Course) {
    if (event) {
      const idCourseItem = this.courses.findIndex(item => item.id === event.id);
      if (idCourseItem >= 0) {
        this.courses[idCourseItem] = event;
      } else {
        this.courses.push(event);
      }
    }
  }

}
