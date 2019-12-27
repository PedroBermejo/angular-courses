import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/courses.service';
import {Course} from '../../../interfaces/course';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  courses: Course[];
  courses$: Observable<Course[]>;
  searchTerm: string;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {
    this.getCoursesListByCount(4);
  }

  delete(event) {
    this.coursesService.removeItem(event.id).subscribe(() => {
      this.getCoursesListByCount(4);
    });
  }

  search(event) {
    if (event === undefined || event === '') {
      this.getCoursesListByCount(4);
      this.searchTerm = undefined;
    } else {
      this.getCoursesListByString(event);
      this.searchTerm = event;
    }
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

  edit(event) {

  }

  loadMore() {
    const count = this.courses.length + 4;
    this.getCoursesListByCount(count);
  }

  getCoursesListByCount(count: number) {
    this.courses$ = this.coursesService.retrieveListByCount(count);
    this.courses$.subscribe(data => {
      if (data) {
        this.courses = data;
      }
    });
  }

  getCoursesListByString(searchString: string) {
    this.courses$ = this.coursesService.retrieveListByString(searchString);
    this.courses$.subscribe(data => {
      if (data) {
        this.courses = data;
      }
    });
  }


}
