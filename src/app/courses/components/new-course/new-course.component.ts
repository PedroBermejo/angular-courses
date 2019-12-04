import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addCourse(form) {
    console.log(form);
    if (form.valid) {
      console.log(form.value);
    }

  }

}
