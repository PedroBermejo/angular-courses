import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Course} from '../../../interfaces/course';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {

  @Input() courseItem: Course;
  @Output() deleteCourseItem = new EventEmitter();

  constructor(private router: Router) { }

  openDeleteModal() {
    const deleteItem = confirm('Do you really want to delete this course? Yes/No');
    if (deleteItem) {
      this.deleteCourseItem.next(this.courseItem);
    }
  }

  openEditModal() {
    this.router.navigate(['courses', this.courseItem.id], {});
  }
}
