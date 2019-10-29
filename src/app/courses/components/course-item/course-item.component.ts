import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../interfaces/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() courseItem: Course;

  constructor() { }

  ngOnInit() {
  }

}
