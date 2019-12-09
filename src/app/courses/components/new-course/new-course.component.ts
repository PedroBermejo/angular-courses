import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../interfaces/course';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  date: string;
  duration: number;
  title: string;
  description: string;
  @Output() completed = new EventEmitter();
  @Input() courseItem: Course;

  constructor() { }

  ngOnInit() {
    if (this.courseItem) {
      this.date = this.courseItem.creationDate;
      this.duration = this.courseItem.duration;
      this.title = this.courseItem.title;
      this.description = this.courseItem.description;
    }
  }

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

}
