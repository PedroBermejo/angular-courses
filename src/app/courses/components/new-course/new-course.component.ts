import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  date: string;
  duration: number;

  constructor() { }

  ngOnInit() {
  }

  addCourse(form) {
    if (form.valid) {
      console.log(form.value);
      console.log(this.date, this.duration);
    }

  }

  updateDate(event) {
    this.date = event;
  }

  updateDuration(event) {
    this.duration = event;
  }

}
