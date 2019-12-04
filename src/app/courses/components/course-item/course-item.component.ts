import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Course} from '../../../interfaces/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

  @Input() courseItem: Course;
  @Output() editCourseItem = new EventEmitter();
  @Output() deleteCourseItem = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  openDeleteModal() {
    const deleteItem = confirm('Do you really want to delete this course? Yes/No');
    if (deleteItem) {
      this.deleteCourseItem.next(this.courseItem);
    }
  }

  openEditModal() {
    this.editCourseItem.next(this.courseItem);
  }

}
