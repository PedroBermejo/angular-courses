import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Course} from '../../../interfaces/course';
import {CoursesService} from '../../../services/courses.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  topRated = false;

  constructor(
    private coursesServiceService: CoursesService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      if (params) {
        const courseItem: Course = this.coursesServiceService.getItemById(+params.get('id'));
        if (courseItem) {
          this.id = courseItem.id;
          this.date = courseItem.creationDate;
          this.duration = courseItem.duration;
          this.title = courseItem.title;
          this.description = courseItem.description;
          this.topRated = courseItem.topRated;
        }
      }
    });
  }


  addCourse() {
    if (this.title && this.description && this.duration && this.date) {
      console.log(this.id);
      if (!this.id) {
        this.id = this.generateId();
      }
      console.log(this.id);
      const course: Course = {
        id: this.id,
        title: this.title,
        creationDate: this.date,
        duration: +this.duration,
        description: this.description,
        topRated: this.topRated
      };
      this.coursesServiceService.upsertCourse(course);
    }
    this.router.navigate(['courses'], {});
  }

  cancelAdd() {
    this.router.navigate(['courses'], {});
  }

  updateDate(event) {
    this.date = event;
  }

  updateDuration(event) {
    this.duration = event;
  }

  generateId(): number {
    let id: number;
    let found: Course;
    do {
      id = Math.floor(Math.random() * 1000) + 1;
      found = this.coursesServiceService.getItemById(id);
    } while (found);

    return id;
  }
}
