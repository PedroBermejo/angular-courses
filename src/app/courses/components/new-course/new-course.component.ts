import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../interfaces/course';
import {CoursesServiceService} from '../../../services/courses-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  id: number;
  date: string;
  duration: number;
  title: string;
  description: string;

  constructor(
    private coursesServiceService: CoursesServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params) {
        const courseItem: Course = this.coursesServiceService.getItemById(+params.get('id'));
        if (courseItem) {
          this.date = courseItem.creationDate;
          this.duration = courseItem.duration;
          this.title = courseItem.title;
          this.description = courseItem.description;
        }
      }
    });
  }

  /*
  addCourse() {
    if (this.title && this.description && this.duration && this.date) {
      let idItem = Math.floor(Math.random() * 1000) + 1;
      let topRatedItem = false
      if (this.courseItem) {
        idItem = this.courseItem.id;
        topRatedItem = this.courseItem.topRated;
      }
      const course: Course = {
        id: idItem,
        title: this.title,
        creationDate: this.date,
        duration: +this.duration,
        description: this.description,
        topRated: topRatedItem
      };
      this.completed.next(course);
    }
  }

  cancelAdd() {
    this.completed.next(false);
  }

  updateDate(event) {
    this.date = event;
  }

  updateDuration(event) {
    this.duration = event;
  }

*/
}
