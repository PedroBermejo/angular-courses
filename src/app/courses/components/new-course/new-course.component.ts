import {Component, OnInit} from '@angular/core';
import {Author, Course} from '../../../interfaces/course';
import {CoursesService} from '../../../services/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LoadingService} from '../../../services/loading.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as AppActions from '../../../store/app.actions';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  isNewCourse = false;
  course: Course;

  constructor(
    private coursesServiceService: CoursesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService,
    private store: Store<AppState>
  ) {  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id) {
        this.store.select( store => store.courses.courses).subscribe(
          courses => {
            const course = courses.find( item => item.id === id);
            if (course) {
              this.course = course;
            }
          }
        );
        console.log(this.course);

      } else {
        this.isNewCourse = true;
        this.course = {
          id: 0,
          name: '',
          date: '',
          length: 0,
          description: '',
          isTopRated: false,
          authors: {
            id: 0,
            lastName: '',
            name: ''
          }
        };
        this.generateId();
      }
    });
    this.store.select(store => store.courses.loading).subscribe(
      data => this.loadingService.togleLoading(data)
    );
  }


  addCourse(form: FormGroup) {
    if (form.valid) {
      if (this.isNewCourse) {
        this.store.dispatch(AppActions.addCourse({course: this.course}));
      } else {
        this.store.dispatch(AppActions.editCourse({course: this.course}));
      }
      this.router.navigate(['courses']);
    }
  }

  cancelAdd() {
    this.router.navigate(['courses']);
  }

  updateDate(event) {
    this.course.date = event;
  }

  updateDuration(event) {
    this.course.length = +event;
  }

  generateId() {
    const id = Math.floor(Math.random() * 1000) + 1;
    this.coursesServiceService.getItemById(id).subscribe(
      data => {
        this.generateId();
        }, error => {
        if (error.status === 404) {
          this.course.id = id;
        }
    });
  }
}
