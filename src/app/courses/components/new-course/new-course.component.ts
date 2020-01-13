import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Author, Course} from '../../../interfaces/course';
import {CoursesService} from '../../../services/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LoadingService} from '../../../services/loading.service';
import {finalize} from 'rxjs/operators';

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
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id) {
        this.courseItem$ = this.coursesServiceService.getItemById(id);
        this.loadingService.togleLoading(true);
        this.courseItem$.pipe(
          finalize(() => this.loadingService.togleLoading(false))
        ).subscribe(data => {
          if (data) {
            this.id = data.id;
            this.date = data.date;
            this.duration = data.length;
            this.title = data.name;
            this.description = data.description;
            this.topRated = data.isTopRated;
            this.authors = data.authors;
          }
        });
      } else {
        this.isNewCourse = true;
        this.generateId();
      }
    });
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
      this.loadingService.togleLoading(true);
      this.coursesServiceService.upsertCourse(course, this.isNewCourse).pipe(
        finalize(() => this.loadingService.togleLoading(false))
      ).subscribe(() => {
        this.router.navigate(['courses']);
      });
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
