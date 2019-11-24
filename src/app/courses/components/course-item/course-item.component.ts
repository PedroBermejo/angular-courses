import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from '../../../interfaces/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() courseItem: Course;
  @Output() public deleteCourseItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openDeleteModal() {
    const deleteItem = confirm('Do you really want to delete this course? Yes/No');
    if (deleteItem) {
      this.deleteCourseItem.next(this.courseItem);
    }
  }

}
