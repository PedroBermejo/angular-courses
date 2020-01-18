import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Author, Course} from '../../../interfaces/course';
import {CoursesService} from '../../../services/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LoadingService} from '../../../services/loading.service';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as AppActions from '../../../store/app.actions';

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
  authors: Author;
  courseItem$: Observable<Course>;
  isNewCourse = false;

  constructor(
    private coursesServiceService: CoursesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id) {
        this.store.select( store => store.courses.courses).subscribe(
          courses => {
            const course = courses.find( item => item.id === id);
            if (course) {
              this.id = course.id;
              this.date = course.date;
              this.duration = course.length;
              this.title = course.name;
              this.description = course.description;
              this.topRated = course.isTopRated;
              this.authors = course.authors;
            }
          }
        );
      } else {
        this.isNewCourse = true;
        this.generateId();
      }
    });
    this.store.select(store => store.courses.loading).subscribe(
      data => this.loadingService.togleLoading(data)
    );
  }


  addCourse() {
    if (this.title && this.description && this.duration && this.date) {
      const course: Course = {
        id: this.id,
        name: this.title,
        date: this.date,
        length: +this.duration,
        description: this.description,
        isTopRated: this.topRated,
        authors: this.authors
      };
      if (this.isNewCourse) {
        this.store.dispatch(new AppActions.AddCourse(course));
      } else {
        this.store.dispatch(new AppActions.EditCourse(course));
      }
      this.router.navigate(['courses']);
    }
  }

  cancelAdd() {
    this.router.navigate(['courses']);
  }

  updateDate(event) {
    this.date = event;
  }

  updateDuration(event) {
    this.duration = event;
  }

  generateId() {
    const id = Math.floor(Math.random() * 1000) + 1;
    this.coursesServiceService.getItemById(id).subscribe(
      data => {
        this.generateId();
        }, error => {
        if (error.status === 404) {
          this.id = id;
        }
    });
  }
}
