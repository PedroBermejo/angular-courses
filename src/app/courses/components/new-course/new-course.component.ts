import {Component, OnInit} from '@angular/core';
import {Author, Course} from '../../../interfaces/course';
import {CoursesService} from '../../../services/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingService} from '../../../services/loading.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as AppActions from '../../../store/app.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  isNewCourse = false;
  form: FormGroup;
  id: number;
  isTopRated = false;
  authors: Author;

  constructor(
    private coursesServiceService: CoursesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService,
    private store: Store<AppState>,
    private frb: FormBuilder
  ) {
    this.form =  this.frb.group({
      name: [ '', Validators.compose([Validators.maxLength(50), Validators.required])],
      date: [ '', Validators.required ],
      length: [ 0, Validators.required ],
      description: [ '', Validators.compose([Validators.maxLength(500), Validators.required])]
    });
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id) {
        this.store.select( store => store.courses.courses).subscribe(
          courses => {
            const course = courses.find( item => item.id === id);
            if (course) {
              this.id = course.id;
              this.isTopRated = course.isTopRated;
              this.authors = course.authors;
              this.form.patchValue({
                name: course.name,
                date: course.date,
                length: course.length,
                description: course.description
              });
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


  addCourse(form: FormGroup) {
    if (form.valid) {
      const formValue = this.form.value;
      const course: Course = {
        id: +this.id,
        name: formValue.name,
        date: formValue.date,
        length: +formValue.length,
        description: formValue.description,
        isTopRated: this.isTopRated,
        authors: this.authors
      }
      if (this.isNewCourse) {
        this.store.dispatch(AppActions.addCourse({course: course}));
      } else {
        this.store.dispatch(AppActions.editCourse({course: course}));
      }
      this.router.navigate(['courses']);
    }
  }

  cancelAdd() {
    this.router.navigate(['courses']);
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
